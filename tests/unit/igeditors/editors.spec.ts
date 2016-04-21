// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { it, iit, describe, expect, inject, injectAsync, beforeEachProviders, fakeAsync, tick, TestComponentBuilder, AsyncTestCompleter } from 'angular2/testing_internal';
import {Component, ViewChild, TemplateRef} from 'angular2/core';
import * as Infragistics from '../../../src/igniteui.angular2';

export function main() {
	describe('Infragistics Angular2 TextEditor', () => {
		it('should initialize correctly', injectAsync([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
			var template = '<div><ig-text-editor></ig-text-editor></div>';
			tcb.overrideTemplate(TestIgTextEditorComponent, template)
				.createAsync(TestIgTextEditorComponent)
				.then((fixture) => {
					fixture.detectChanges();
					expect(fixture.debugElement.componentInstance.viewChild).toBeAnInstanceOf(Infragistics.IgTextEditorComponent);
					async.done();
				});
		}));

		it('should allow setting value with ngModel', injectAsync([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
			var template = '<div><ig-text-editor [(ngModel)]="val" [widgetId]="editorId" [changeDetectionInterval]="cdi"></ig-text-editor></div>';
			tcb.overrideTemplate(TestIgTextEditorComponent, template)
				.createAsync(TestIgTextEditorComponent)
				.then((fixture) => {
					fixture.detectChanges();
					expect($(fixture.debugElement.nativeElement).find("#editor1").igTextEditor("displayValue")).toBe("test_value");
					fixture.debugElement.componentInstance.val = "changed_test_value";
					fixture.detectChanges();
					expect($(fixture.debugElement.nativeElement).find("#editor1").igTextEditor("displayValue")).toBe("changed_test_value");
					$(fixture.debugElement.nativeElement).find("#editor1").trigger("focus").val("changed_again_test_value").trigger("paste").trigger("blur");
					setTimeout(() => {
						expect(fixture.debugElement.componentInstance.val).toBe("changed_again_test_value");
						async.done();
					}, 100);
				});
		}));

		it('should allow changing options', injectAsync([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
			var template = '<div><ig-text-editor [(options)]="opts" [(ngModel)]="val" [widgetId]="editorId" [changeDetectionInterval]="cdi"></ig-text-editor></div>';
			tcb.overrideTemplate(TestIgTextEditorComponent, template)
				.createAsync(TestIgTextEditorComponent)
				.then((fixture) => {
					fixture.detectChanges();
					fixture.debugElement.componentInstance.opts.disabled = false;
					setTimeout(() => {
						fixture.detectChanges();
						expect($(fixture.debugElement.nativeElement).find("#editor1").igTextEditor("option", "disabled")).toBe(false);
						expect($(fixture.debugElement.nativeElement).find("#editor1")[0].hasAttribute("disabled")).toBe(false);
						async.done();
					}, 100);
				});
		}));
	});

	describe('Infragistics Angular2 NumericEditor', () => {
		it('should initialize correctly', injectAsync([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
			var template = '<div><ig-numeric-editor></ig-numeric-editor></div>';
			tcb.overrideTemplate(TestIgNumericEditorComponent, template)
				.createAsync(TestIgNumericEditorComponent)
				.then((fixture) => {
					fixture.detectChanges();
					expect(fixture.debugElement.componentInstance.viewChild).toBeAnInstanceOf(Infragistics.IgNumericEditorComponent);
					async.done();
				});
		}));

		it('should allow setting value with ngModel', injectAsync([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
			var template = '<div><ig-numeric-editor [(ngModel)]="val" [widgetId]="editorId" [changeDetectionInterval]="cdi"></ig-numeric-editor></div>';
			tcb.overrideTemplate(TestIgNumericEditorComponent, template)
				.createAsync(TestIgNumericEditorComponent)
				.then((fixture) => {
					fixture.detectChanges();
					expect($(fixture.debugElement.nativeElement).find("#editor1").igNumericEditor("displayValue")).toBe("42");
					fixture.debugElement.componentInstance.val = 1;
					fixture.detectChanges();
					expect($(fixture.debugElement.nativeElement).find("#editor1").igNumericEditor("displayValue")).toBe("1");
					$(fixture.debugElement.nativeElement).find("#editor1").trigger("focus").val(154).trigger("paste").trigger("blur");
					setTimeout(() => {
						expect(fixture.debugElement.componentInstance.val).toBe(154);
						async.done();
					}, 100);
				});
		}));
	});

	describe('Infragistics Angular2 PercentEditor', () => {
		it('should initialize correctly', injectAsync([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
			var template = '<div><ig-percent-editor></ig-percent-editor></div>';
			tcb.overrideTemplate(TestIgPercentEditorComponent, template)
				.createAsync(TestIgPercentEditorComponent)
				.then((fixture) => {
					fixture.detectChanges();
					expect(fixture.debugElement.componentInstance.viewChild).toBeAnInstanceOf(Infragistics.IgPercentEditorComponent);
					async.done();
				});
		}));

		it('should allow setting value with ngModel', injectAsync([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
			var template = '<div><ig-percent-editor [(ngModel)]="val" [widgetId]="editorId"></ig-percent-editor></div>';
			tcb.overrideTemplate(TestIgPercentEditorComponent, template)
				.createAsync(TestIgPercentEditorComponent)
				.then((fixture) => {
					fixture.detectChanges();
					expect($(fixture.debugElement.nativeElement).find("#editor1").igPercentEditor("displayValue")).toBe("40.00%");
					fixture.debugElement.componentInstance.val = 0.1;
					fixture.detectChanges();
					expect($(fixture.debugElement.nativeElement).find("#editor1").igPercentEditor("displayValue")).toBe("10.00%");
					$(fixture.debugElement.nativeElement).find("#editor1").trigger("focus").val(100).trigger("paste").trigger("blur");
					setTimeout(() => {
						expect(fixture.debugElement.componentInstance.val).toBe(1);
						async.done();
					}, 100);
				});
		}));
	});

	describe('Infragistics Angular2 MaskEditor', () => {
		it('should initialize correctly', injectAsync([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
			var template = '<div><ig-mask-editor></ig-mask-editor></div>';
			tcb.overrideTemplate(TestIgMaskEditorComponent, template)
				.createAsync(TestIgMaskEditorComponent)
				.then((fixture) => {
					fixture.detectChanges();
					expect(fixture.debugElement.componentInstance.viewChild).toBeAnInstanceOf(Infragistics.IgMaskEditorComponent);
					async.done();
				});
		}));

		it('should allow setting value with ngModel', injectAsync([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
			var template = '<div><ig-mask-editor [(ngModel)]="val" [widgetId]="editorId"></ig-mask-editor></div>';
			tcb.overrideTemplate(TestIgMaskEditorComponent, template)
				.createAsync(TestIgMaskEditorComponent)
				.then((fixture) => {
					fixture.detectChanges();
					expect($(fixture.debugElement.nativeElement).find("#editor1").igMaskEditor("displayValue")).toBe("test");
					fixture.debugElement.componentInstance.val = "changed";
					fixture.detectChanges();
					expect($(fixture.debugElement.nativeElement).find("#editor1").igMaskEditor("displayValue")).toBe("changed");
					$(fixture.debugElement.nativeElement).find("#editor1").trigger("focus").val("test again").trigger("paste").trigger("blur");
					setTimeout(() => {
						expect(fixture.debugElement.componentInstance.val).toBe("test again");
						async.done();
					}, 100);
				});
		}));
	});

	describe('Infragistics Angular2 DatePicker', () => {
		it('should initialize correctly', injectAsync([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
			var template = '<div><ig-date-picker></ig-date-picker></div>';
			tcb.overrideTemplate(TestIgDatePickerComponent, template)
				.createAsync(TestIgDatePickerComponent)
				.then((fixture) => {
					fixture.detectChanges();
					expect(fixture.debugElement.componentInstance.viewChild).toBeAnInstanceOf(Infragistics.IgDatePickerComponent);
					async.done();
				});
		}));

		it('should allow setting value with ngModel', injectAsync([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
			var template = '<div><ig-date-picker [(ngModel)]="val" [widgetId]="editorId"></ig-date-picker></div>';
			tcb.overrideTemplate(TestIgDatePickerComponent, template)
				.createAsync(TestIgDatePickerComponent)
				.then((fixture) => {
					fixture.detectChanges();
					expect($(fixture.debugElement.nativeElement).find("#editor1").igDatePicker("displayValue")).toBe("4/20/2016");
					fixture.debugElement.componentInstance.val = new Date("3/15/2016");
					fixture.detectChanges();
					expect($(fixture.debugElement.nativeElement).find("#editor1").igDatePicker("displayValue")).toBe("3/15/2016");
					$(fixture.debugElement.nativeElement).find("#editor1").trigger("focus").val("03/03/2016").trigger("paste").trigger("blur");
					setTimeout(() => {
						expect(fixture.debugElement.componentInstance.val.getTime()).toBe(new Date("03/03/2016").getTime());
						async.done();
					}, 100);
				});
		}));
	});

	describe('Infragistics Angular2 DateEditor', () => {
		it('should initialize correctly', injectAsync([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
			var template = '<div><ig-date-editor></ig-date-editor></div>';
			tcb.overrideTemplate(TestIgDateEditorComponent, template)
				.createAsync(TestIgDateEditorComponent)
				.then((fixture) => {
					fixture.detectChanges();
					expect(fixture.debugElement.componentInstance.viewChild).toBeAnInstanceOf(Infragistics.IgDateEditorComponent);
					async.done();
				});
		}));

		it('should allow setting value with ngModel', injectAsync([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
			var template = '<div><ig-date-editor [(ngModel)]="val" [widgetId]="editorId"></ig-date-editor></div>';
			tcb.overrideTemplate(TestIgDateEditorComponent, template)
				.createAsync(TestIgDateEditorComponent)
				.then((fixture) => {
					fixture.detectChanges();
					expect($(fixture.debugElement.nativeElement).find("#editor1").igDateEditor("displayValue")).toBe("4/20/2016");
					fixture.debugElement.componentInstance.val = new Date("3/15/2016");
					fixture.detectChanges();
					expect($(fixture.debugElement.nativeElement).find("#editor1").igDateEditor("displayValue")).toBe("3/15/2016");
					$(fixture.debugElement.nativeElement).find("#editor1").trigger("focus").val("03/03/2016").trigger("paste").trigger("blur");
					setTimeout(() => {
						expect(fixture.debugElement.componentInstance.val.getTime()).toBe(new Date("03/03/2016").getTime());
						async.done();
					}, 100);
				});
		}));
	});

	describe('Infragistics Angular2 CurrencyEditor', () => {
		it('should initialize correctly', injectAsync([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
			var template = '<div><ig-currency-editor></ig-currency-editor></div>';
			tcb.overrideTemplate(TestIgCurrencyEditorComponent, template)
				.createAsync(TestIgCurrencyEditorComponent)
				.then((fixture) => {
					fixture.detectChanges();
					expect(fixture.debugElement.componentInstance.viewChild).toBeAnInstanceOf(Infragistics.IgCurrencyEditorComponent);
					async.done();
				});
		}));

		it('should allow setting value with ngModel', injectAsync([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
			var template = '<div><ig-currency-editor [(ngModel)]="val" [widgetId]="editorId"></ig-currency-editor></div>';
			tcb.overrideTemplate(TestIgCurrencyEditorComponent, template)
				.createAsync(TestIgCurrencyEditorComponent)
				.then((fixture) => {
					fixture.detectChanges();
					expect($(fixture.debugElement.nativeElement).find("#editor1").igCurrencyEditor("displayValue")).toBe("$42.00");
					fixture.debugElement.componentInstance.val = 1;
					fixture.detectChanges();
					expect($(fixture.debugElement.nativeElement).find("#editor1").igCurrencyEditor("displayValue")).toBe("$1.00");
					$(fixture.debugElement.nativeElement).find("#editor1").trigger("focus").val(154).trigger("paste").trigger("blur");
					setTimeout(() => {
						expect(fixture.debugElement.componentInstance.val).toBe(154);
						async.done();
					}, 100);
				});
		}));
	});

	describe('Infragistics Angular2 CheckboxEditor', () => {
		it('should initialize correctly', injectAsync([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
			var template = '<div><ig-checkbox-editor></ig-checkbox-editor></div>';
			tcb.overrideTemplate(TestIgCheckboxEditorComponent, template)
				.createAsync(TestIgCheckboxEditorComponent)
				.then((fixture) => {
					fixture.detectChanges();
					expect(fixture.debugElement.componentInstance.viewChild).toBeAnInstanceOf(Infragistics.IgCheckboxEditorComponent);
					async.done();
				});
		}));

		it('should allow setting value with ngModel', injectAsync([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
			var template = '<div><ig-checkbox-editor [(ngModel)]="val" [widgetId]="editorId"></ig-checkbox-editor></div>';
			tcb.overrideTemplate(TestIgCheckboxEditorComponent, template)
				.createAsync(TestIgCheckboxEditorComponent)
				.then((fixture) => {
					fixture.detectChanges();
					expect($(fixture.debugElement.nativeElement).find("#editor1").igCheckboxEditor("value")).toBe(true);
					fixture.debugElement.componentInstance.val = false;
					fixture.detectChanges();
					expect($(fixture.debugElement.nativeElement).find("#editor1").igCheckboxEditor("value")).toBe(false);
					$(fixture.debugElement.nativeElement).find("#editor1").click();
					setTimeout(() => {
						expect(fixture.debugElement.componentInstance.val).toBe(true);
						async.done();
					}, 100);
				});
		}));
	});
}

@Component({
	selector: 'test-text-editor-cmp',
	template: '<div></div>', //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
	directives: [Infragistics.IgTextEditorComponent]
})
class TestIgTextEditorComponent {
	private opts: IgTextEditor;
	private val:string;
	private editorId:string;
	private cdi: number = 0;
	@ViewChild(Infragistics.IgTextEditorComponent) public viewChild: Infragistics.IgTextEditorComponent;

	constructor() {
		this.val = "test_value";
		this.editorId = "editor1";
		this.opts = {
			disabled: true
		};
	}
}

@Component({
	selector: 'test-numeric-editor-cmp',
	template: '<div></div>', //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
	directives: [Infragistics.IgNumericEditorComponent]
})
class TestIgNumericEditorComponent {
	private val:number;
	private editorId:string;
	private cdi: number = 0;
	@ViewChild(Infragistics.IgNumericEditorComponent) public viewChild: Infragistics.IgNumericEditorComponent;

	constructor() {
		this.val = 42;
		this.editorId = "editor1";
	}
}

@Component({
	selector: 'test-percent-editor-cmp',
	template: '<div></div>', //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
	directives: [Infragistics.IgPercentEditorComponent]
})
class TestIgPercentEditorComponent {
	private val:number;
	private editorId:string;
	@ViewChild(Infragistics.IgPercentEditorComponent) public viewChild: Infragistics.IgPercentEditorComponent;

	constructor() {
		this.val = 0.4;
		this.editorId = "editor1";
	}
}

@Component({
	selector: 'test-mask-editor-cmp',
	template: '<div></div>', //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
	directives: [Infragistics.IgMaskEditorComponent]
})
class TestIgMaskEditorComponent {
	private val:string;
	private editorId:string;
	@ViewChild(Infragistics.IgMaskEditorComponent) public viewChild: Infragistics.IgMaskEditorComponent;

	constructor() {
		this.val = "test";
		this.editorId = "editor1";
	}
}

@Component({
	selector: 'test-date-picker-cmp',
	template: '<div></div>', //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
	directives: [Infragistics.IgDatePickerComponent]
})
class TestIgDatePickerComponent {
	private val: Date;
	private editorId:string;
	@ViewChild(Infragistics.IgDatePickerComponent) public viewChild: Infragistics.IgDatePickerComponent;

	constructor() {
		this.val = new Date("4/20/2016");
		this.editorId = "editor1";
	}
}

@Component({
	selector: 'test-date-editor-cmp',
	template: '<div></div>', //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
	directives: [Infragistics.IgDateEditorComponent]
})
class TestIgDateEditorComponent {
	private val: Date;
	private editorId:string;
	@ViewChild(Infragistics.IgDateEditorComponent) public viewChild: Infragistics.IgDateEditorComponent;

	constructor() {
		this.val = new Date("4/20/2016");
		this.editorId = "editor1";
	}
}

@Component({
	selector: 'test-currency-editor-cmp',
	template: '<div></div>', //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
	directives: [Infragistics.IgCurrencyEditorComponent]
})
class TestIgCurrencyEditorComponent {
	private val: number;
	private editorId:string;
	@ViewChild(Infragistics.IgCurrencyEditorComponent) public viewChild: Infragistics.IgCurrencyEditorComponent;

	constructor() {
		this.val = 42;
		this.editorId = "editor1";
	}
}

@Component({
	selector: 'test-checkbox-editor-cmp',
	template: '<div></div>', //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
	directives: [Infragistics.IgCheckboxEditorComponent]
})
class TestIgCheckboxEditorComponent {
	private val: boolean;
	private editorId:string;
	@ViewChild(Infragistics.IgCheckboxEditorComponent) public viewChild: Infragistics.IgCheckboxEditorComponent;

	constructor() {
		this.val = true;
		this.editorId = "editor1";
	}
}