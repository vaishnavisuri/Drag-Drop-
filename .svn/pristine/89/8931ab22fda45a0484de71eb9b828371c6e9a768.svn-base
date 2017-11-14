var app = angular.module('componentBuilder');
app.directive('createCustomControl', ['components', 'JsonManager', 'ComponentBuilderDataManager', function(components, JsonManager, ComponentBuilderDataManager) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            json: '=?'
        },
        template: '<div class=" componet-builder-styles container-fluid his-container padding-zero">' +
            '<div class="container-fluid padding-zero">' +
            '<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 left-section padding-zero">' +
            '<span class="form-ui-element-border">' +
            '<strong>Create Control</strong>' +
            '<div id="form-ui-element">' +
            '<div class="element-scroll1 overflow-style">' +
            '<div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 fields-icons" ng-repeat="component in components"' +
            'ng-click="generateControl(component)">' +
            '<i class="{{component.icon}}"></i>' +
            '<p class="margin-title"><strong ng-bind="component.title"></strong></p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</span>' +
            '</div>' +
            '<!-- center section  -->' +
            '<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 left-right-border padding-zero center-section" style="height:90vh;">' +
            '<div class="expandCollapseIcon padding-zero">' +
            '<i class="fa fa-caret-left collapse-doctor-worklist"></i>' +
            '</div>' +
            '<div class="expandCollapseIconright padding-zero">' +
            '<i class="fa fa-caret-right collapse-doctor-worklist-r"></i>' +
            '</div>' +
            '<div class="col-sm-12 controlBuilderArea">' +
            '<form class="form-inline" style="border:1px solid #ccc;height:25vh" ng-show="editable"><div class="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6"><label for="controlname">Control Name:</label>' +
            '<input type="text" class="form-control" ng-model="control.formControlName"></div>' +
            '<div class="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6"><label for="controldesc">Control Description:</label>' +
            '<input type="text" class="form-control" ng-model="control.fromControlDesc"></div>' +
            '<div class="col-xs-12" style="height:10vh"></div>' +
            '<label class="col-sm-5"></label>' +
            '<button class="btn btn-success" ng-click="saveControl()" ng-disabled="!control.formControlName">Save</button>' + ' ' +
            // '<button class="btn btn-default" ng-click="cancelControl()">Cancel</button>' +

            '</form>' +
            '<custom-control-preview element="json"  editable="editable" class-selected="classSelected" control-preview="true"></custom-control-preview>' +
            '</div>' +
            '</div>' +

            '<!-- right section -->' +
            '<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 right-section padding-zero overflow-style">' +
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
            '<div class="element-scroll overflow-style">' +
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
            '</div></div>' +
            '<!-- right section end -->' +
            '</div>' +
            '</div>',
        controller: function($scope, components) {

            $scope.components = components.getComponents();
            $scope.json = $scope.json || [];
            JsonManager.setJSON($scope.json);
            $scope.classSelected = "col-md-12";

            $scope.generateControl = function(component) {

                    var obj = angular.copy(component);
                    var name = obj.settings.key + "" + Math.round(10000 + Math.random() * 100000);
                    if (typeof(obj.settings.properties.name) != "undefined" && !obj.settings.properties.name) {
                        obj.settings.properties.name = name;
                    }
                    if (typeof(obj.settings.properties.id) != "undefined" && !obj.settings.properties.id) {
                        obj.settings.properties.id = name;
                    }
                    /* if (obj.settings.isModelNeeded && !obj.settings.properties.model) {
                         obj.settings.properties.model = name;
                     }*/
                    obj.componentId = "component-" + Math.round(10000 + Math.random() * 100000); 
                    $scope.json = obj;
                    $scope.editable = true;
                    $scope.$emit('editComponent', obj);
                }
                //            JsonManager.setJSON($scope.json);
            $scope.views = null;
            $scope.$on('editComponent', function(event, obj) {

                $scope.views = obj.configurations;
                $scope.component = obj.settings;
            });
            $scope.control = {
                status: 1
            };
            $scope.saveControl = function() {
                $scope.json.title = $scope.control.formControlName;
                if ($scope.json.settings && $scope.json.settings.isModelNeeded && !$scope.json.settings.properties.model) {
                    $scope.json.settings.properties.model = $scope.control.formControlName.replace(/\s/g, "_");
                    if($scope.json.settings.isScoreModelNeeded && !$scope.json.settings.properties.scoreModel)
                        {
                           $scope.json.settings.properties.scoreModel = $scope.json.settings.properties.model+"-score";
                        }
                }

                $scope.control.buildedControlData = JSON.stringify($scope.json);
                debugger
                var headers = {};

                /*if ($scope.mode == "Edit") {
                    var params = {
                        url: "formData",
                        requestData: $scope.control,
                        methodType: "PUT"
                    };
                } else {*/
                var params = {
                    url: "formControlData",
                    requestData: $scope.control,
                    methodType: "POST"
                };
                //}
                var promise = ComponentBuilderDataManager.sendRestRequest(headers, params);
                promise.then(function successCallback(response) {
                    if (response.data.successMessage) {
                        //$uibModalInstance.dismiss('cancel');
                        alert(response.data.successMessage);
                        $scope.$emit('customControlUpdated', response);
                    } else {
                        alert(response.data.errorMessage);

                    }

                });
            }
        }

    }
}])
