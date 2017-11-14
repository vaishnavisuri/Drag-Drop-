 var app = angular.module('componentBuilder');
 app.run(['$templateCache', function($templateCache) {

     $templateCache.put('componentBuilder/components/common/conditional.html',
         '<form-builder-conditional></form-builder-conditional>'
     );

     $templateCache.put('componentBuilder/components/editbuttons.html',
         '<div class=\"component-btn-group\">' +
         '<div class=\"btn btn-xxs btn-danger component-settings-button\" style=\"z-index: 1000\" ng-click=\"$emit(\'deleteComponent\',json,$index);\"><span class=\"glyphicon glyphicon-remove\"></span></div>' +
         '<div class=\"btn btn-xxs btn-default component-settings-button\" style=\"z-index: 1000\" ng-click=\"$emit(\'editComponent\',componentObj);\"><span class=\"glyphicon glyphicon-edit\"></span></div>\n</div>\n'
     );

     $templateCache.put('componentBuilder/components/previewForm.html',
         '<div class=\"modal-header  \" style=\"padding:9px 15px;border-bottom:1px solid #eee;background-color: #337ab7;color:#fff\">' +
         '   <div class=\"table-header\">' +
         '       <button aria-hidden=\"true\" data-dismiss=\"modal\"  style=\"color:#fff; opacity: 1;\" class=\"close\"  type=\"button\"  ng-click=\"cancel()\">' +
         '           <span title=\"close\">×</span>\n' +
         '       </button>' +
         '       <strong> {{title || "Modal Title"}} </strong>' +
         '   </div>' +
         '</div>' +
         '<div class=\"modal-body\"><div class="row">' +
         '<form-renderer json="json" data="data" class-selected="classSelected"></form-renderer>' +
         '</div></div>');

     $templateCache.put('componentBuilder/components/searchForm.html',
         '<div class=\"modal-header  \" style=\"padding:9px 15px;border-bottom:1px solid #eee;background-color: #337ab7;color:#fff\">' +
         '   <div class=\"table-header\">' +
         '       <button aria-hidden=\"true\" data-dismiss=\"modal\"  style=\"color:#fff; opacity: 1;\" class=\"close\"  type=\"button\"  ng-click=\"cancel()\">' +
         '           <span title=\"close\">×</span>\n' +
         '       </button>' +
         '       <strong> {{title || "Modal Title"}} </strong>' +
         '   </div>' +
         '</div>' +
         '<div class=\"modal-body\"><div class="row">' +
         '<div class="col-xs-12 col-sm-12 padding-zero">' +
         // '<table class="table table-bordered  table-stripped container color"><tr ng-repeat = "formList in getFormList track by $index"><td class="tableBorder" ng-dblclick="showData(formList)">{{formList.formName}}</td></tr></table>' +
         '<div style="height:400px;"  ui-grid="gridOptions" ui-grid-pagination ui-grid-selection ui-grid-resize-columns ui-grid-edit ui-grid-move-columns class="grid"></div>' +
         '</div>' +
         '</div></div>');

     $templateCache.put('componentBuilder/components/renderControlForm.html',
         '<div class=\"modal-header  \" style=\"padding:9px 15px;border-bottom:1px solid #eee;background-color: #337ab7;color:#fff\">' +
         '   <div class=\"table-header\">' +
         '       <button aria-hidden=\"true\" data-dismiss=\"modal\"  style=\"color:#fff; opacity: 1;\" class=\"close\"  type=\"button\"  ng-click=\"cancel()\">' +
         '           <span title=\"close\">×</span>\n' +
         '       </button>' +
         '       <strong> {{title || "Modal Title"}} </strong>' +
         '   </div>' +
         '</div>' +
         '<div class=\"modal-body\"><div class="row">' +
         '<div class="col-xs-12 col-sm-12 padding-zero">' +
         // '<table class="table table-bordered  table-stripped container color"><tr ng-repeat = "formList in getFormList track by $index"><td class="tableBorder" ng-dblclick="showData(formList)">{{formList.formName}}</td></tr></table>' +
         '<create-custom-control json="json"></create-custom-control>' +
         '</div>' +
         '</div></div>');

 }]);
