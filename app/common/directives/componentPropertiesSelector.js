
 var app=angular.module('componentBuilder');
 app.directive('componentPropertiesSelector', function () {
 return {
  restrict: 'E',
  replace: true,
  scope:{
      view:'=?',
      component:'=?',
      json:'=?'
 	},
 	template:        '<div class="clearfix col-md-12">'+
                    '<div ng-include="view.template"></div>'+
                  '</div>',
 		link: function ($scope, iElement, iAttrs) {
 			 $scope.component=$scope.component||{};
 		},

   controller:function($scope,components)
    {
       

    }
 	
 } 
 })