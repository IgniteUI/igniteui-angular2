import { ElementRef, EventEmitter, Directive } from '@angular/core';

declare var jQuery: any;

@Directive()
export class Feature<Model> {
    public _el: any;
    public _settings: any = {};
    public initSettings: Model;
    public name: string;
    private _events: any;
    private featureName: string;

    constructor(el: ElementRef) {
        this._el = el;
        this.name = this.normalizeName(el.nativeElement.nodeName.toLowerCase());
        this.featureName = 'igGrid' + this.name;
        for (const propt in jQuery.ui['igGrid' + this.name].prototype.events) {
            this[propt] = new EventEmitter();
        }
    }

    cloneObject(obj: any): any {
        const clone = {};
        for (const i in obj) {
            if (obj[i] != null) {
                if (!i.startsWith('_') && typeof(obj[i]) == 'object') {
                    clone[i] = this.cloneObject(obj[i]);
                } else {
                    clone[i] = obj[i];
                }
            }
        }
        return clone;
    }

    ngOnInit() {
        const self = this;
        this.initSettings = this.cloneObject(this);
        let evtName;
        this._events = new Map<string, string>();
        const grid = jQuery(this._el.nativeElement).closest('ig-grid').find('table');

        // event binding for features
        for (const propt in jQuery.ui[this.featureName].prototype.events) {
            evtName = this.featureName.toLowerCase() + propt.toLowerCase();
            this._events[evtName] = propt;
            jQuery(grid).on(evtName, function(evt, ui) {
                self[self._events[evt.type]].emit({ event: evt, ui });
            });
        }
        for (const setting in jQuery.ui[this.featureName].prototype.options) {
            Object.defineProperty(self, setting, {
                set: self.createFeatureSetter(setting),
                get: self.createFeatureGetter(setting),
                enumerable: true,
                configurable: true
            });
        }
        const propNames = Object.getOwnPropertyNames(jQuery.ui[this.featureName].prototype);
        for (let i = 0; i < propNames.length; i++) {
            const name = propNames[i];
            if (name.indexOf('_') !== 0 && typeof jQuery.ui[this.featureName].prototype[name] === 'function') {
                Object.defineProperty(self, name, {
                    get: self.createMethodGetter(name)
                });
            }
        }
    }

    createFeatureSetter(name) {
        return function(value) {
            const grid = jQuery(this._el.nativeElement).closest('ig-grid').find('table[role=\'grid\']');
            this._settings[name] = value;

            if (jQuery.ui[this.featureName] &&
                jQuery.ui[this.featureName].prototype.options &&
                jQuery.ui[this.featureName].prototype.options.hasOwnProperty(name) &&
                grid.data(this.featureName)) {
                grid[this.featureName]('option', name, value);
            }
        };
    }

    createFeatureGetter(name) {
        return () => {
            return this._settings[name];
        };
    }
    createMethodGetter(name) {
        return () => {
            let grid = jQuery(this._el.nativeElement).closest('ig-grid').find('table[role=\'grid\']');
            if (grid.length === 0) {
                grid = jQuery(this._el.nativeElement).closest('ig-hierarchical-grid').find('table[role=\'grid\']');
            }
            const args = [];
            const feature = grid.data(this.featureName);
            return jQuery.proxy(feature[name], feature);
        };
    }

    normalizeName(str) {
        // convert hyphen to camelCase
        const name = str.replace(/-([a-z])/g, function(group) {
            return group[1].toUpperCase();
        });
        return name.charAt(0).toUpperCase() + name.slice(1);
    }
}
