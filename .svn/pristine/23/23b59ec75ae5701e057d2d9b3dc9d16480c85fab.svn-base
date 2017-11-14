
 var app=angular.module('componentBuilder');
 app.directive('formElementRenderer', function () {
 return {
  restrict: 'E',
  replace: true,
  scope:{
      element:'=?',
      data:'=?',
      json:'=?',
      editable: '=?'
 	},
 	template:   '<div ng-hide="component.hide&&!editable">'+
                  '<div ng-include="element.template"></div>'+
 	             '</div>',
 		link: function (scope, iElement, iAttrs) {
 			
 		},

   controller:function($scope,components)
    {
      

        $scope.component=$scope.element.settings;
        $scope.componentId = $scope.component.componentId; 
       
       /* $scope.checkStyle=function(checkStyle)
        {
          var keys=Object.keys(checkStyle)
          for(var i=0;i<keys.length;i++){

          } 
        }*/
    }
 	
 } 
 })