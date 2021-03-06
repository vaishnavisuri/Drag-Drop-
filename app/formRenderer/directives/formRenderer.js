var app = angular.module('componentBuilder');
app.directive('formRenderer', ['components', function(components) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            json: '=?',
            data: '=?',
            editable: '=?',
            classSelected: '=?'
        },
        template: '<div class="componentBuilderTemplate"  ng-repeat="componentObj in json track by componentObj.componentId" dnd-draggable="componentObj" dnd-effect-allowed="move" dnd-callback="$emit(\'elementDropped\',json,$index,componentObj,targetList,targetIndex,\'move\')"> ' +
            '<div ng-class="$parent.getSelectedClass(componentObj)||getSelectedClass(componentObj)">' +
            '<div>' +
            '<div ng-if="editable"  ng-include="\'componentBuilder/components/editbuttons.html\'" class="component-btn-group">' +
            '</div>' +
            '<div class="clearfix"></div>' +
            '<form-element-renderer json="json" editable="editable" element="componentObj" data="data"></form-element-renderer>' +
            '</div>' +
            '</div>' +
            '</div>',
        link: function(scope, iElement, iAttrs) {

        },

        controller: function($scope, components) {

            var scope = $scope;
            $scope.json = $scope.json || [];
            $scope.data = $scope.data || {};


            $scope.getSelectedClass = function(componentObj) {
                var bootstrapClass = "";
                if (componentObj.settings && componentObj.settings.others && componentObj.settings.others.bootstrapGridClass)
                    bootstrapClass = componentObj.settings.others.bootstrapGridClass;
                else if ($scope.classSelected) {
                    bootstrapClass = $scope.classSelected;
                } else {
                    bootstrapClass = "col-md-12";
                }

                if ($scope.editable && true) {

                    bootstrapClass += " designerElement"
                } else if (componentObj.settings.key == 'checkBox') {
                    bootstrapClass += " checkBoxPreview"
                }
                return bootstrapClass;
            }


        }

    }


}])