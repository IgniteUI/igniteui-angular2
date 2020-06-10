// tslint:disable-next-line:max-line-length
// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { TestBed } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import * as Infragistics from '../../public-api';


describe('Infragistics Angular PivotGrid', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [Infragistics.IgPivotGridComponent, Infragistics.IgPivotDataSelectorComponent, TestComponent]
        });
    });

    it('should initialize correctly', (done) => {
        const template = '<div><ig-pivot-grid [(widgetId)]="gridId" [options]="optsGrid"></ig-pivot-grid></div>';
        TestBed.overrideComponent(TestComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgPivotGridComponent)
                .toBe(true);
            done();
        });
    });
    it('should allow initializing data source as a top level option', (done) => {
        const template = '<div><ig-pivot-grid  [widgetId]="\'pivot1\'" [(dataSource)]="data"></ig-pivot-grid></div>';
        TestBed.overrideComponent(TestComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            expect($(fixture.debugElement.nativeElement).find('#pivot1').igPivotGrid('option', 'dataSource')[0].UnitPrice)
                .toBe(12.81);
            done();
        });
    });
});


@Component({
    selector: 'test-cmp',
    template: '<div></div>' // "Component 'TestComponent' must have either 'template' or 'templateUrl' set."
})
class TestComponent {
    private optsGrid: IgPivotGrid;
    private optsSelector: IgPivotDataSelector;
    private selectorId: string;
    private data: any;
    private opts: any;
    private gridID: string;

    @ViewChild(Infragistics.IgPivotGridComponent, { static: true }) public viewChild: Infragistics.IgPivotGridComponent;

    constructor() {
        this.data =
            [{ ProductCategory: 'Clothing', UnitPrice: 12.81, SellerName: 'Stanley Brooker', Country: 'Bulgaria', City: 'Plovdiv', Date: '01/01/2012', UnitsSold: 282 },
            { ProductCategory: 'Clothing', UnitPrice: 49.57, SellerName: 'Elisa Longbottom', Country: 'US', City: 'New York', Date: '01/05/2013', UnitsSold: 296 },
            { ProductCategory: 'Bikes', UnitPrice: 3.56, SellerName: 'Lydia Burson', Country: 'Uruguay', City: 'Ciudad de la Costa', Date: '01/06/2011', UnitsSold: 68 },
            // tslint:disable-next-line:max-line-length
            { ProductCategory: 'Accessories', UnitPrice: 85.58, SellerName: 'David Haley', Country: 'UK', City: 'London', Date: '04/07/2012', UnitsSold: 293 },
            { ProductCategory: 'Components', UnitPrice: 18.13, SellerName: 'John Smith', Country: 'Japan', City: 'Yokohama', Date: '12/08/2012', UnitsSold: 240 },
            { ProductCategory: 'Clothing', UnitPrice: 68.33, SellerName: 'Larry Lieb', Country: 'Uruguay', City: 'Ciudad de la Costa', Date: '05/12/2011', UnitsSold: 456 },
            { ProductCategory: 'Components', UnitPrice: 16.05, SellerName: 'Walter Pang', Country: 'Bulgaria', City: 'Sofia', Date: '02/19/2013', UnitsSold: 492 }];


        this.selectorId = 'dataSelector';
        this.gridID = 'pivotGrid';

        this.optsGrid = {
            dataSourceOptions: {
                flatDataOptions:
                {
                    dataSource: this.data,
                    metadata: {
                        cube: {
                            name: 'Sales',
                            caption: 'Sales',
                            measuresDimension: {
                                caption: 'Measures',
                                measures: [ // for each measure, name and aggregator are required
                                    {
                                        caption: 'Units Sold', name: 'UnitsSold',
                                        // returns a function that will be used as sum aggregatro on the
                                        // 'UnitsSold property' of the data objects
                                        aggregator: $.ig.OlapUtilities.prototype.sumAggregator('UnitsSold')
                                    }]
                            },
                            dimensions: [ // for each dimension name and hierarchies are required
                                {
                                    caption: 'Seller', name: 'Seller', hierarchies: [{
                                        caption: 'Seller', name: 'Seller', levels: [
                                            {
                                                name: 'AllSellers', caption: 'All Sellers',
                                                memberProvider(item) { return 'All Sellers'; }
                                            },
                                            {
                                                name: 'SellerName', caption: 'Seller',
                                                memberProvider(item) { return item.SellerName; }
                                            }]
                                    }]
                                },
                                {
                                    caption: 'Date', name: 'Date', /*displayFolder: "Folder1\\Folder2",*/ hierarchies: [
                                        $.ig.OlapUtilities.prototype.getDateHierarchy(
                                            'Date', // the source property name
                                            ['year', 'quarter', 'month', 'date'], // the date parts for which levels will be generated (optional)
                                            'Dates', // The name for the hierarchy (optional)
                                            'Date', // The caption for the hierarchy (optional)
                                            ['Year', 'Quarter', 'Month', 'Day'], // the captions for the levels (optional)
                                            'All Periods') // the root level caption (optional)
                                    ]
                                }
                            ]
                        }
                    }
                },
                // Preload hiearhies for the rows, columns, filters and measures
                rows: '[Date].[Dates]',
                columns: '[Seller].[Seller]',
                measures: '[Measures].[UnitsSold]'
            }
        };
    }
}
