'use strict';

 var app=angular.module('componentBuilder');
 app.directive('formBuilderConditional',['JsonManager',function(JsonManager) {
    return {
      restrict: 'E',
      scope: true,
      template: '' +
        '<div>' +
           'This component should Display:<br>' +
            '<select class="form-control input-md" ng-model="component.conditional.show">' +
            '<option ng-repeat="item in _booleans track by $index" value="{{item}}">{{item.toString()}}</option>' +
            '</select>' +
            '<br>When the form component:<br>' +
            '<select class="form-control input-md" ng-model="component.conditional.when">' +
            '<option ng-repeat="item in _components track by $index" value="{{item.key}}">{{item.key }}</option>' +
            '</select>' +
             '<br>Is :<br>' +
            '<select class="form-control input-md" ng-model="component.conditional.operator">' +
            '<option ng-repeat="item in operations track by $index" value="{{item.operator}}">{{item.string }}</option>' +
            '</select>' +
            '<br>Has the value:<br>' +
            '<input type="text" class="form-control input-md" ng-model="component.conditional.compareValue">' +
          '</div>',
      controller: ['$scope',function($scope) {
        debugger
         $scope._booleans = ['', 'true', 'false'];
         $scope.operations=[
         {"string":"Eqaul To",
           "operator":'=='},
           {"string":"Greater Than",
           "operator":'>'},
           {"string":"Less Than",
           "operator":'<'},
           {"string":"Not Eqaul To",
           "operator":'!='}];
         var components=JsonManager.getJSON();
         $scope._components=[];
         for(var i=0;i<components.length;i++)
         {
          if(components[i].settings&&components[i].settings.isModelNeeded&&components[i].settings.properties&&components[i].settings.properties.model){
            $scope._components.push({
              "key":components[i].settings.properties.model
             })
          }
         }

          // Default the current components conditional logic.
         /* $scope.component = $scope.component || {};
          $scope.component.conditional = $scope.component.conditional || {};

          // The available logic functions.
         

          // Filter the list of available form components for conditional logic.
          $scope._components = _.get($scope, 'form.components') || [];
          $scope._components = utils.flattenComponents($scope._components);
          // Remove non-input/button fields because they don't make sense.
          // FA-890 - Dont allow the current component to be a conditional trigger.
          $scope._components = _.reject($scope._components, function(c) {
            return !c.input || (c.type === 'button') || (c.key === $scope.component.key) || (!c.label && !c.key);
          });

          // Add default item to the components list.
          $scope._components.unshift('');

          // Default and watch the show logic.
          $scope.component.conditional.show = $scope.component.conditional.show || '';
          // Coerce show var to supported value.
          var _booleanMap = {
            '': '',
            'true': 'true',
            'false': 'false'
          };
          $scope.component.conditional.show = _booleanMap.hasOwnProperty($scope.component.conditional.show)
            ? _booleanMap[$scope.component.conditional.show]
            : '';

          // Default and watch the when logic.
          $scope.component.conditional.when = $scope.component.conditional.when || null;

          // Default and watch the search logic.
          $scope.component.conditional.eq = $scope.component.conditional.eq || '';

          // Track the status of the accordion panels open state.
          $scope.status = {
            simple: !$scope.component.customConditional,
            advanced: !!$scope.component.customConditional
          };*/
        }
      ]
    };
  }]);

