var app = angular.module('componentBuilder');
app.directive('formBuilder', ['components', '$uibModal', 'JsonManager', 'ComponentBuilderDataManager', '$rootScope', function(components, $uibModal, JsonManager, ComponentBuilderDataManager, $rootScope) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            json: '=?',
            onlyCustomControlsAllowed: '=?'
        },
        template: '<div class=" componet-builder-styles container-fluid his-container padding-zero">' +
            '<div class="container-fluid padding-zero">' +
            '<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 left-section padding-zero overflow-style">' +
            '<div class="force-overflow" ><span class="form-ui-element-border">' +
            '<button class="accordion" data-toggle="collapse" data-target="#form-ui-element">' +
            '<strong>FORM UI ELEMENT</strong>' +
            '<i class="fa fa-caret-down pull-right"></i>' +
            '</button>' +
            '<div id="form-ui-element" class="collapse in">' +
            '<div class="form-group padding-zero input-group">' +
            '<input type="text" class="form-control search-img-icon border-right-zero border-left-zero" uib-typeahead="autoSearch for autoSearch in autoSearch | filter:$viewValue | limitTo:8" placeholder="Search" ng-model="controlSearchData" typeahead-on-select="selectMatch(controlSearchData)">' +
            '<span class="glyphicon glyphicon-search input-group-addon btn btn-sm builderControlSerach" ng-click="searchControlForm(controlSearchData)"></span>' +
            '<span class="glyphicon glyphicon-plus input-group-addon btn btn-sm builderControlSerach" ng-click="renderControlForm()"></span>' +
            '</div>' +
            '<div class="element-scroll" ng-hide="onlyCustomControlsAllowed">' +
            '<div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 fields-icons" ng-repeat="component in components"' +
            'dnd-draggable="component"' +
            'dnd-effect-allowed="copy"' +
            'dnd-callback="elementDropped(event,components,$index,component,targetList,targetIndex )">' +
            '<i class="{{component.icon}}"></i>' +
            '<p class="margin-title"><strong ng-bind="component.title"></strong></p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</span>' +
            '<span class="form-ui-element-border">' +
            '<!--<button class="accordion" data-toggle="collapse" data-target="#commonElement">' +
            '<strong>CUSTOM ELEMENTS</strong>' +
            '<i class="fa fa-caret-down pull-right"></i>' +
            '</button>-->' +
            '<div id="commonElement" class="collapse in">' +
            ' <div class="element-scroll  overflow-style" data-slim-scroll>' +
            '<div><div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 fields-icons" ng-repeat="component in customControls"' +
            'dnd-draggable="component"' +
            'dnd-effect-allowed="copy"' +
            'dnd-callback="elementDropped(event,components,$index,component,targetList,targetIndex )">' +
            '<button aria-hidden=\"true\" data-dismiss=\"modal\"  style=\"color:#fff; opacity: 1;position:absolute;top:0px;color:red;right:0px;\" class=\"close\"  type=\"button\"  ng-click=\"customControls.splice($index,1)\">' +
            '<span title=\"close\">×</span>\n' +
            '</button>' +
            '<i class="{{component.icon}}"></i>' +
            '<p class="margin-title"><strong ng-bind="component.title"></strong></p>' +
            '</div> </div>' +
            '</div>' +
            '</div>' +
            '</span>' +
            '<span class="form-ui-element-border">' +
            '<button class="accordion" data-toggle="collapse" data-target="#commonElement">' +
            '<strong>COMMON ELEMENTS</strong>' +
            '<i class="fa fa-caret-down pull-right"></i>' +
            '</button>' +
            '<div id="commonElement" class="collapse in">' +
            ' <div class="element-scroll overflow-style">' +
            '<div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 fields-icons" ng-repeat="component in commonComponents"' +
            'dnd-draggable="component"' +
            'dnd-effect-allowed="copy"' +
            'dnd-callback="elementDropped(event,components,$index,component,targetList,targetIndex )">' +
            '<i class="{{component.icon}}"></i>' +
            '<p class="margin-title"><strong ng-bind="component.title"></strong></p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</span>' +
            '</div></div>' +
            '<!-- center section  -->' +
            '<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 left-right-border padding-zero center-section" style="height:90vh;">' +
            '<div class="expandCollapseIcon padding-zero">' +
            '<i class="fa fa-caret-left collapse-doctor-worklist"></i>' +
            '</div>' +
            '<div class="row border border-top-zero margin-zero">' +
            '<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">' +
            '<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 padding-left-zero">' +
            '<div class="form-group">' +
            '<select class="form-control" ng-model="classSelected">' +
            '<option hidden>Category</option>' +
            '<option value="col-md-12">1 Field Form</option>' +
            '<option value="col-md-6">2 Fields Form</option>' +
            '<option value="col-md-4">3 Fields Form</option>' +
            '<option value="col-md-3">4 Fields Form</option>' +
            '<option value="col-md-2">6 Fields Form</option>' +
            '</select>' +
            '</div>' +
            '</div>' +
            // '<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 padding-zero">' +
            // '<div class="form-group">' +
            // '<select class="form-control">' +
            // '<option hidden>75%</option>' +
            // '<option>65%</option>' +
            // '</select>' +
            // '</div>' + '' +
            // '</div>' +
            '<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 padding-zero">' +
            '<div class="form-group">' +
            '<input type="text" class="form-control" placeholder="Enter Form Name" ng-model="formData.formName">' +
            '</div>' +
            '</div>' +
            '<div class="form-group">' +
            '<button class="fa fa-search btn btn-sm btn-primary btn btn-md left-right-space"  style="padding-top:6px;font-size:14px"  ng-click="searchForm()"></button>' +
            '</div>' +
            '</div>' +
            '<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 top-space">' +
            '<button class="btn btn-primary lg-btn-size pull-right left-right-space" ng-click="previewForm()">Preview</button>' +
            '<button class="btn btn-success lg-btn-size pull-right left-right-space" ng-disabled="!formData.formName" ng-click="saveForm()">Save</button>' +

            // '<button class="btn btn-default sm-btn-space pull-right left-right-space"><i class="fa fa-reply" aria-hidden="true"></i></button>' +
            // '<button class="btn btn-default sm-btn-space pull-right left-right-space"><i class="fa fa-share" aria-hidden="true"></i></button>' +
            // '<button class="pull-right btn-link"><i class="fa fa-arrows-h" aria-hidden="true"></i></button>' +
            '</div>' +

            '</div>' +
            '<div class="expandCollapseIconright padding-zero">' +
            '<i class="fa fa-caret-right collapse-doctor-worklist-r"></i>' +
            '</div>' +
            '<div class="col-md-12 overflow-style builderArea dropzone "' +
            'dnd-list dnd-drop="callback({event:event,targetList: json, targetIndex: index})">' +
            '<form-renderer json="json" data="data" editable="editable" class-selected="classSelected"></form-renderer>' +
            '<div class="clearfix"></div>' +
            '<div  style="text-align:center;position:relative;top: 25px;font-size:20px;" role="alert">' +
            'Drag and Drop a form component' +
            '</div>' +
            '</div>' +
            //form purpose
            /*'<div class="row border border-top-zero margin-zero">' +
            '<div class="col-xs-12 col-sm-12 col-md-11 col-lg-11">' +
            '<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 padding-left-zero">' +
            '<div class="form-group row">' +
            '<label class="col-sm-4 col-form-label">Form Name:</label><div class="col-sm-8"><input type="text" class="form-control" placeholder="Enter Form Name to save" ng-model="formData.formName">' +
            '</div></div></div>' +
            '<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 padding-left-zero">' +
            '<div class="form-group row">' +
            '<label class="col-sm-5 col-form-label">Context Name</label><div class="col-sm-7"><select class="form-control" ng-model="formData.context" ng-options="contextdata.contextName for contextdata in contextDataList track by contextdata.contextId">' +
            '</select></div>' +
            '</div></div>' +
            '<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 padding-left-zero">' +
            '<div class="form-group row">' +
            '<label class="col-sm-6 col-form-label">Sub-Context Name</label><div class="col-sm-6"><select class="form-control" ng-model="formData.subContext" ng-options="subcontextdata.subContextName for subcontextdata in subContextDataList track by subcontextdata.subContextId">' +
            '</select></div>' +
            '</div></div></div>' +
            '<div class="col-xs-12 col-sm-12 col-md-1 col-lg-1">' +
            '<button class="btn btn-success lg-btn-size pull-right left-right-space" ng-disabled="!formData.formName" ng-click="saveForm()">Save</button>' +
            '</div>' +
            //form end
            '</div>*/
            '</div>' +

            '<!-- right section -->' +
            '<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 right-section padding-zero  overflow-style">' +
            '<div class="force-overflow"><button class="accordion">' +
            '<strong>PROPERTIES</strong>' +
            '</button>' +
            '<div class="divider"></div>' +
            '<!-- Nav tabs -->' +
            '<!--<ul class="nav nav-tabs" role="tablist">' +
            '<li role="presentation"><a href="#Properties" aria-controls="Properties" role="tab" data-toggle="tab">Properties</a></li>' +
            '<li role="presentation" class="active"><a href="#Design" aria-controls="Design" role="tab" data-toggle="tab">Design</a></li>' +
            '<li role="presentation"><a href="#Data" aria-controls="Data" role="tab" data-toggle="tab">Data</a></li>' +
            '</ul>-->' +

            '<!-- Tab panes -->' +
            '<div class="tab-content">' +
            '<div role="tabpanel" class="tab-pane" id="Properties">' +
            '<p>Properties</p>' +
            '</div>' +
            '<div role="tabpanel" class="tab-pane active" id="Design">' +
            '<!-- fist accordian  -->' +
            '<div class="form-ui-element-border" ng-repeat="view in views">' +
            '<button class="accordion" ng-click="view.show=!view.show" ng-class="{\'rightPropertiesMenuClosed\':!view.show,\'rightPropertiesMenuOpen\':view.show}">' +
            '<strong ng-bind="view.title"></strong> ' +
            '<i class="fa fa-caret-down pull-right" ng-show="!view.show"></i>' +
            '<i class="fa fa-caret-up pull-right"   ng-show="view.show"></i>' +
            '</button>' +
            '<div id="textBoxProperties" ng-show="view.show">' +
            '<div class="element-scroll_properties">' +
            '<form class="form-inline" ng-if="view">' +
            '<component-properties-selector json="json" view="view"  component="component"></component-properties-selector>' +
            '</form>' +
            '</div>' +
            '</div>' +
            '</div>' +


            '<!-- fist accordian end -->' +

            '</div>' +
            '<div role="tabpanel" class="tab-pane" id="Data">Data </div>' +
            '</div>' +
            '</div> </div>' +
            '<!-- right section end -->' +
            '</div>' +
            '</div>',
        link: function(scope, iElement, iAttrs) {
            scope.editable = true;
        },

        controller: function($scope, components, $rootScope) {

            $scope.components = components.getComponents();
            $scope.commonComponents = components.getCommonComponents();
            $scope.json = $scope.json || [];
            JsonManager.setJSON($scope.json);
            $scope.classSelected = "col-md-12";

            $scope.elementDropped = function(event, components, srcIndex, component, target, targetIndex, link) {
                debugger
                event.stopPropagation();
                if (link == "move") {
                    var obj = component;
                    target.splice(srcIndex, 1);
                    target.splice(targetIndex - 1, 0, obj);
                } else {
                    var obj = angular.copy(component);
                    var name = obj.settings.key + "" + Math.round(10000 + Math.random() * 100000);
                    if (typeof(obj.settings.properties.name) != "undefined" && !obj.settings.properties.name) {
                        obj.settings.properties.name = name;
                    }
                    if (typeof(obj.settings.properties.id) != "undefined" && !obj.settings.properties.id) {
                        obj.settings.properties.id = name;
                    }
                    if (obj.settings.isModelNeeded && !obj.settings.properties.model) {
                        obj.settings.properties.model = name;
                    }
                    if (obj.settings.isScoreModelNeeded && !obj.settings.properties.scoreModel) {
                        obj.settings.properties.scoreModel = name + "-score";
                    }

                    obj.componentId = "component-" + Math.round(10000 + Math.random() * 100000); 
                    target.splice(targetIndex, 0, obj);
                    $scope.$emit('editComponent', obj);
                }
                JsonManager.setJSON($scope.json);

            }
            $rootScope.$on('selectedRowData', function(event, args) {
                debugger
                $scope.json = JSON.parse(args[0].buildedFormData);
                JsonManager.setJSON($scope.json);
                $scope.mode = args.mode;
                $scope.formData.formName = args[0].formName;
                $scope.formData.formId = args[0].formId ? args[0].formId : null;
                $scope.classSelected = args[0].noOfColumns;
                $scope.formData.formMapId = args[0].formMapId ? args[0].formMapId : null;

            })
            $scope.searchForm = function() {
                var headers = {};
                var params = {};

                var params = {
                    url: "formData/search",
                    requestData: {
                        "formName": $scope.formData.formName,
                        "status": 1,
                        formId: null
                    },
                    methodType: "POST"
                };

                var promise = ComponentBuilderDataManager.sendRestRequest(headers, params);
                promise.then(function successCallback(response) {
                    if (response.data.successMessage) {} else {
                        alert("Search Failed");

                    }
                    $uibModal.open({
                        templateUrl: 'componentBuilder/components/searchForm.html',
                        size: 'lg',
                        backdrop: 'static',
                        keyboard: false,
                        controller: function($scope, $uibModalInstance) {
                            $scope.gridOptions = {
                                enableFiltering: false,
                                rowSelection: 'single',
                                enableRowSelection: true,
                                enableRowHeaderSelection: true,
                                paginationPageSizes: [9, 18, 27],
                                paginationPageSize: 9,
                                enableCellEdit: false,
                                enableRowHeaderSelection:  false,
                                multiSelect:  false,

                                columnDefs: [{
                                    field: 'formName',
                                    displayName: 'Form Name',
                                    width: '*',
                                    resizable: true,
                                }],
                                onRegisterApi: function(gridApi) {
                                    $scope.myGridApi = gridApi;
                                    $scope.myGridApi.selection.getSelectedRows();
                                    gridApi.selection.on.rowSelectionChanged($scope, function(row) {
                                        $scope.select = {};
                                        $scope.select = $scope.myGridApi.selection.getSelectedRows();
                                        $scope.mode = "Edit";
                                        $scope.select.mode = $scope.mode;
                                        $rootScope.$emit("selectedRowData", $scope.select);
                                        $scope.testing = true;
                                        $scope.cancel();
                                    });
                                }
                            }

                            $scope.title = "Search";

                            $scope.gridOptions.data = response.data.dataBean;
                            for (var i = 0; i < response.data.dataBean.length; i++) {
                                $scope.json = JSON.parse(response.data.dataBean[i].buildedFormData);
                            }

                            $scope.cancel = function() {
                                $uibModalInstance.dismiss('cancel');
                            }

                        }
                    });
                });
            }


            $scope.searchData = {
                status: 1
            }

            $scope.$on('elementDropped', function(event, components, srcIndex, component, target, targetIndex, link) {
                $scope.elementDropped(event, components, srcIndex, component, target, targetIndex, link);
            })

            $scope.formData = {
                formName: "",
                status: 1,
                createdBy: "",
                buildedFormData: '',
                noOfColumns: ''
            }

            $scope.saveForm = function() {
                $scope.formData.buildedFormData = JSON.stringify($scope.json);
                $scope.formData.noOfColumns = $scope.classSelected;
                debugger
                var headers = {};

                if ($scope.mode == "Edit") {
                    var params = {
                        url: "formData",
                        requestData: $scope.formData,
                        methodType: "PUT"
                    };
                } else {
                    var params = {
                        url: "formData",
                        requestData: $scope.formData,
                        methodType: "POST"
                    };
                }




                var promise = ComponentBuilderDataManager.sendRestRequest(headers, params);
                promise.then(function successCallback(response) {
                    if (response.data.successMessage) {

                        alert(response.data.successMessage);
                        $rootScope.$emit('formDataRefresh', response);
                    } else {
                        alert(response.data.errorMessage);

                    }

                });

            }
            $scope.customControls = [];
            $scope.searchControlForm = function(name) {
                // 
                $scope.formData.buildedFormData = JSON.stringify($scope.json);
                debugger
                var headers = {};
                var params = {
                    url: "formControlData/search",
                    requestData: {
                        status: 1,
                        formControlName: name
                    },
                    methodType: "POST"
                };


                var promise = ComponentBuilderDataManager.sendRestRequest(headers, params);
                promise.then(function successCallback(response) {
                    if (response.data.successMessage) {
                        debugger
                        if (response.data.dataBean && response.data.dataBean.length) {
                            for (var i = 0; i < response.data.dataBean.length; i++) {
                                if (response.data.dataBean[i].buildedControlData) {
                                    if (!((_.filter($scope.customControls, function(obj) {
                                            return response.data.dataBean[i].formControlName == obj.title
                                        })).length)) {
                                        $scope.customControls.push(JSON.parse(response.data.dataBean[i].buildedControlData));
                                    }
                                }
                            }
                        }
                    }
                });
            }


            //$scope.getControls();

            $scope.previewForm = function() {
                var json = angular.copy($scope.json);
                var noOfColumns = $scope.classSelected;
                $uibModal.open({
                    templateUrl: 'componentBuilder/components/previewForm.html',
                    size: 'lg',
                    backdrop: 'static',
                    keyboard: false,
                    resolve: {
                        noOfColumns: function() {
                            return noOfColumns;
                        }
                    },
                    controller: function($scope, $uibModalInstance, noOfColumns) {
                        $scope.json = json;
                        $scope.title = "Preview";
                        $scope.classSelected = noOfColumns;

                        $scope.cancel = function() {
                            $uibModalInstance.dismiss('cancel');
                        }

                    }
                });
            }

            $scope.views = null;
            $scope.$on('editComponent', function(event, obj) {

                $scope.views = obj.configurations;
                $scope.component = obj.settings;
            });

            $scope.$on('deleteComponent', function(event, json, index) {
                if (confirm("Do you want to remove?")) {
                    json.splice(index, 1);
                }

            });
            $scope.renderControlForm = function() {
                $uibModal.open({
                    templateUrl: 'componentBuilder/components/renderControlForm.html',
                    size: 'lg',
                    backdrop: 'static',
                    keyboard: false,
                    controller: function($scope, $uibModalInstance) {
                        $scope.title = "Create Control";

                        $scope.cancel = function() {
                            $uibModalInstance.dismiss('cancel');
                        }
                        $scope.$on('customControlUpdated', function() {
                            $scope.cancel();
                        });
                    }
                });

            }

            $scope.autoSearch = [];
            $scope.autoCompleteSearch = function() {

                var headers = {};
                var params = {
                    url: "formControlData/autoComplete",
                    requestData: "",
                    methodType: "GET"
                };
                var promise = ComponentBuilderDataManager.sendRestRequest(headers, params);
                promise.then(function successCallback(response) {
                    if (response.data.successMessage) {
                        debugger
                        if (response.data.dataBean && response.data.dataBean.length) {
                            $scope.autoSearch = response.data.dataBean;
                            /*for (var i = 0; i < response.data.dataBean.length; i++) {
                                if (response.data.dataBean[i].buildedControlData) {
                                    $scope.customControls.push(JSON.parse(response.data.dataBean[i].buildedControlData));
                                }
                            }*/
                        }
                    }
                });
            }


            $scope.getContextData = function() {
                var headers = {};
                var params = {
                    url: "formData/getContextDetails",
                    requestData: "",
                    methodType: "GET"
                };
                var promise = ComponentBuilderDataManager.sendRestRequest(headers, params);
                promise.then(function successCallback(response) {
                    if (response.data.successMessage) {
                        debugger
                        if (response.data.dataBean && response.data.dataBean.length) {
                            $scope.contextDataList = response.data.dataBean;
                        }
                    }
                });
            }


            $scope.getSubContextData = function() {
                var headers = {};
                var params = {
                    url: "formData/getSubContextDetails",
                    requestData: "",
                    methodType: "GET"
                };
                var promise = ComponentBuilderDataManager.sendRestRequest(headers, params);
                promise.then(function successCallback(response) {
                    if (response.data.successMessage) {
                        debugger
                        if (response.data.dataBean && response.data.dataBean.length) {
                            $scope.subContextDataList = response.data.dataBean;
                        }
                    }
                });
            }
            $scope.getContextData();
            $scope.getSubContextData();
            $scope.autoCompleteSearch();
            var customControlUpdatedEvent = $rootScope.$on('customControlUpdated', function() {
                $scope.autoCompleteSearch();

            });
            $scope.selectMatch = function(controlSearchData) {
                $scope.searchControlForm(controlSearchData);
            }

            $scope.$on('destroy', function() {
                customControlUpdatedEvent();
            })
        }

    }
}])