
 var app=angular.module('componentBuilder');
 app.directive('customControlPreview', function () {
 return {
  restrict: 'E',
  replace: true,
  scope:{
      element:'=?',
      data:'=?',
      json:'=?',
      editable: '=?',
      controlPreview:'@'
  },
  template:   '<div ng-show="component">'+
                  '<fieldset class="fsStyle" style="border:1px solid #ccc;height:25vh;">' +
                  '<legend class="legendStyle">Preview</legend>' +
                  '<label ng-class="pull-left" ng-if="component.properties.label&&!component.properties.hideLabel" for="message" class="control-label"></label>'+ 
                  '<div ng-include="element.template"></div></fieldset>'+
               '</div>',
    link: function (scope, iElement, iAttrs) {
      debugger
     
    },

   controller:function($scope,components)
    {
      
  debugger
       $scope.component=$scope.element?$scope.element.settings:{};
        $scope.componentId =$scope.component&& $scope.component.componentId?$scope.component.componentId:''; 
        $scope.data=$scope.data||{};
       $scope.$watch('element',function(){
         if($scope.controlPreview)
           {
              $scope.component=$scope.element?$scope.element.settings:{};
              $scope.componentId =$scope.component&& $scope.component.componentId?$scope.component.componentId:''; 
              $scope.data=$scope.data||{};
           }
       })
      
       /* $scope.checkStyle=function(checkStyle)
        {
          var keys=Object.keys(checkStyle)
          for(var i=0;i<keys.length;i++){

          } 
        }*/
    }
  
 } 
 })