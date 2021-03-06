import {NgModule} from '@angular/core';
import { Column } from './iggrid/column.directive';
import { IgGridMultiColumnHeadersFeature } from './iggrid/iggridfeatures/iggridmulticolumnheaders.directive';
import { IgGridSortingFeature } from './iggrid/iggridfeatures/iggridsorting.directive';
import { IgGridFilteringFeature } from './iggrid/iggridfeatures/iggridfiltering.directive';
import { IgGridPagingFeature } from './iggrid/iggridfeatures/iggridpaging.directive';
import { IgGridUpdatingFeature } from './iggrid/iggridfeatures/iggridupdating.directive';
import { IgGridGroupByFeature } from './iggrid/iggridfeatures/iggridgroupby.directive';
import { IgGridColumnMovingFeature } from './iggrid/iggridfeatures/iggridcolumnmoving';
import { IgGridHidingFeature } from './iggrid/iggridfeatures/iggridhiding.directive';
import { IgGridCellMergingFeature } from './iggrid/iggridfeatures/iggridcellmerging.directive';
import { IgGridResponsiveFeature } from './iggrid/iggridfeatures/iggridresponsive.directive';
import { IgGridResizingFeature } from './iggrid/iggridfeatures/iggridresizing.directive';
import { IgGridSelectionFeature } from './iggrid/iggridfeatures/iggridselection.directive';
import { IgGridRowSelectorsFeature } from './iggrid/iggridfeatures/iggridrowselectors.directive';
import { IgGridSummariesFeature } from './iggrid/iggridfeatures/iggridsummaries.directive';
import { IgGridColumnFixingFeature } from './iggrid/iggridfeatures/iggridcolumnfixing.directive';
import { IgGridTooltipsFeature } from './iggrid/iggridfeatures/iggridtooltips.directive';
import { IgGridAppendRowsOnDemandFeature } from './iggrid/iggridfeatures/iggridappendrowsondemand.directive';
import { Features } from './iggrid/features.directive';
import { IgGridComponent } from './iggrid/iggrid.component';
import { IgTreeGridComponent } from './igtreegrid/igtreegrid.component';
import { IgHierarchicalGridComponent } from './ighierarchicalgrid/ighierarchicalgrid.component';
import { IgComboComponent } from './igcombo/igcombo.component';
import { IgCheckboxEditorComponent } from './igeditors/igcheckboxeditor.component';
import { IgCurrencyEditorComponent } from './igeditors/igcurrencyeditor.component';
import { IgDateEditorComponent } from './igeditors/igdateeditor.component';
import { IgDatePickerComponent } from './igeditors/igdatepicker.component';
import { IgTimePickerComponent } from './igeditors/igtimepicker.component';
import { IgMaskEditorComponent } from './igeditors/igmaskeditor.component';
import { IgNumericEditorComponent } from './igeditors/ignumericeditor.component';
import { IgPercentEditorComponent } from './igeditors/igpercenteditor.component';
import { IgTextEditorComponent } from './igeditors/igtexteditor.component';
import { IgTreeComponent } from './igtree/igtree.component';
import { IgDialogComponent } from './igdialog/igdialog.component';
import { IgSplitterComponent } from './igsplitter/igsplitter.component';
import { IgLayoutManagerComponent } from './iglayoutmanager/iglayoutmanager.component';
import { IgTileManagerComponent } from './igtilemanager/igtilemanager.component';
import { IgHtmlEditorComponent } from './ightmleditor/ightmleditor.component';
import { IgValidatorComponent } from './igvalidator/igvalidator.component';
import { IgPivotDataSelectorComponent } from './igpivotdataselector/igpivotdataselector.component';
import { IgPivotGridComponent } from './igpivotgrid/igpivotgrid.component';
import { IgDataChartComponent } from './igdatachart/igdatachart.component';
import { IgPieChartComponent } from './igpiechart/igpiechart.component';
import { IgDoughnutChartComponent } from './igdoughnutchart/igdoughnutchart.component';
import { IgFunnelChartComponent } from './igfunnelchart/igfunnelchart.component';
import { IgRadialGaugeComponent } from './igradialgauge/igradialgauge.component';
import { IgZoombarComponent } from './igzoombar/igzoombar.component';
import { IgMapComponent } from './igmap/igmap.component';
import { IgSparklineComponent } from './igsparkline/igsparkline.component';
import { IgBulletGraphComponent } from './igbulletgraph/igbulletgraph.component';
import { IgLinearGaugeComponent } from './iglineargauge/iglineargauge.component';
import { IgQRCodeBarcodeComponent } from './igqrcodebarcode/igqrcodebarcode.component';
import { IgUploadComponent } from './igupload/igupload.component';
import { IgPopoverComponent } from './igpopover/igpopover.component';
import { IgNotifierComponent } from './ignotifier/ignotifier.component';
import { IgRatingComponent } from './igrating/igrating.component';
import { IgVideoPlayerComponent } from './igvideoplayer/igvideoplayer.component';
import { IgRadialMenuComponent } from './igradialmenu/igradialmenu.component';
import { IgSplitButtonComponent } from './igsplitbutton/igsplitbutton.component';
import { IgSpreadsheetComponent } from './igspreadsheet/igspreadsheet.component';
import { IgSchedulerComponent } from './igscheduler/igscheduler.component';

export { Column };
export { IgGridMultiColumnHeadersFeature };
export { IgGridSortingFeature };
export { IgGridFilteringFeature };
export { IgGridPagingFeature };
export { IgGridUpdatingFeature };
export { IgGridGroupByFeature };
export { IgGridColumnMovingFeature };
export { IgGridHidingFeature };
export { IgGridCellMergingFeature };
export { IgGridResponsiveFeature };
export { IgGridResizingFeature };
export { IgGridSelectionFeature };
export { IgGridRowSelectorsFeature };
export { IgGridSummariesFeature };
export { IgGridColumnFixingFeature };
export { IgGridTooltipsFeature };
export { IgGridAppendRowsOnDemandFeature };
export { Features };
export { IgGridComponent };
export { IgTreeGridComponent };
export { IgHierarchicalGridComponent };
export { IgComboComponent };
export { IgCheckboxEditorComponent };
export { IgCurrencyEditorComponent };
export { IgDateEditorComponent };
export { IgDatePickerComponent };
export { IgTimePickerComponent };
export { IgMaskEditorComponent };
export { IgNumericEditorComponent };
export { IgPercentEditorComponent };
export { IgTextEditorComponent };
export { IgTreeComponent };
export { IgDialogComponent };
export { IgSplitterComponent };
export { IgLayoutManagerComponent };
export { IgTileManagerComponent };
export { IgHtmlEditorComponent };
export { IgValidatorComponent };
export { IgPivotDataSelectorComponent };
export { IgPivotGridComponent };
export { IgDataChartComponent };
export { IgPieChartComponent };
export { IgDoughnutChartComponent };
export { IgFunnelChartComponent };
export { IgRadialGaugeComponent };
export { IgZoombarComponent };
export { IgMapComponent };
export { IgSparklineComponent };
export { IgBulletGraphComponent };
export { IgLinearGaugeComponent };
export { IgQRCodeBarcodeComponent };
export { IgUploadComponent };
export { IgPopoverComponent };
export { IgNotifierComponent };
export { IgRatingComponent };
export { IgVideoPlayerComponent };
export { IgRadialMenuComponent };
export { IgSplitButtonComponent };
export { IgSpreadsheetComponent };
export { IgSchedulerComponent };

@NgModule({
  declarations: [Column, IgGridMultiColumnHeadersFeature, IgGridSortingFeature, IgGridFilteringFeature, IgGridPagingFeature,
    IgGridUpdatingFeature, IgGridGroupByFeature, IgGridColumnMovingFeature, IgGridHidingFeature,
    IgGridCellMergingFeature, IgGridResponsiveFeature, IgGridResizingFeature, IgGridSelectionFeature,
    IgGridRowSelectorsFeature, IgGridSummariesFeature, IgGridColumnFixingFeature, IgGridTooltipsFeature,
    IgGridAppendRowsOnDemandFeature, Features, IgGridComponent, IgTreeGridComponent, IgHierarchicalGridComponent,
    IgComboComponent, IgCheckboxEditorComponent, IgCurrencyEditorComponent, IgDateEditorComponent, IgDatePickerComponent,
    IgDatePickerComponent, IgTimePickerComponent, IgMaskEditorComponent, IgNumericEditorComponent, IgPercentEditorComponent,
    IgTextEditorComponent, IgTreeComponent, IgDialogComponent, IgSplitterComponent, IgLayoutManagerComponent,
    IgTileManagerComponent, IgHtmlEditorComponent, IgValidatorComponent, IgPivotDataSelectorComponent, IgPivotGridComponent,
    IgDataChartComponent, IgPieChartComponent, IgDoughnutChartComponent, IgFunnelChartComponent, IgRadialGaugeComponent,
    IgZoombarComponent, IgMapComponent, IgSparklineComponent, IgBulletGraphComponent, IgLinearGaugeComponent,
    IgQRCodeBarcodeComponent, IgUploadComponent, IgPopoverComponent, IgNotifierComponent, IgRatingComponent,
    IgVideoPlayerComponent, IgRadialMenuComponent, IgSplitButtonComponent, IgSpreadsheetComponent, IgSchedulerComponent],
  exports: [Column, IgGridMultiColumnHeadersFeature, IgGridSortingFeature, IgGridFilteringFeature, IgGridPagingFeature,
    IgGridUpdatingFeature, IgGridGroupByFeature, IgGridColumnMovingFeature, IgGridHidingFeature, IgGridCellMergingFeature,
    IgGridResponsiveFeature, IgGridResizingFeature, IgGridSelectionFeature, IgGridRowSelectorsFeature, IgGridSummariesFeature,
    IgGridColumnFixingFeature, IgGridTooltipsFeature, IgGridAppendRowsOnDemandFeature, Features, IgGridComponent, IgTreeGridComponent,
    IgHierarchicalGridComponent, IgComboComponent, IgCheckboxEditorComponent, IgCurrencyEditorComponent, IgDateEditorComponent,
    IgDatePickerComponent, IgDatePickerComponent, IgTimePickerComponent, IgMaskEditorComponent, IgNumericEditorComponent,
    IgPercentEditorComponent, IgTextEditorComponent, IgTreeComponent, IgDialogComponent, IgSplitterComponent, IgLayoutManagerComponent,
    IgTileManagerComponent, IgHtmlEditorComponent, IgValidatorComponent, IgPivotDataSelectorComponent, IgPivotGridComponent,
    IgDataChartComponent, IgPieChartComponent, IgDoughnutChartComponent, IgFunnelChartComponent, IgRadialGaugeComponent,
    IgZoombarComponent, IgMapComponent, IgSparklineComponent, IgBulletGraphComponent, IgLinearGaugeComponent, IgQRCodeBarcodeComponent,
    IgUploadComponent, IgPopoverComponent, IgNotifierComponent, IgRatingComponent, IgVideoPlayerComponent, IgRadialMenuComponent,
    IgSplitButtonComponent, IgSpreadsheetComponent, IgSchedulerComponent]
})
export class IgniteUIModule {}
