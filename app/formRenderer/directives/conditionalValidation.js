
 var app=angular.module('componentBuilder');
 app.directive('conditionalValidation', function () {
 return {
  restrict: 'A',
  replace: true,
  scope:{
    data:'=data',
    component:'=component',
  },
	link: function ($scope, iElement, iAttrs) {
     debugger
     var component=$scope.component||{};
     $scope.$watch('data',function(){
       debugger
       if($scope.data&&component.conditional&&component.conditional.show&&component.conditional.when&&component.conditional.operator&&component.conditional.compareValue){
         var when=$scope.data[component.conditional.when]?$scope.data[component.conditional.when].toString():"";
         var operation='"'+when.toString()+'"'+component.conditional.operator+' "'+component.conditional.compareValue.toString()+'"';
         if(component.conditional.show=="true")
          {
            if(when&&eval(operation)){
            component.hide=false;
           }
            else
           {
            component.hide=true;
           }
          } 
         if(component.conditional.show=="false")
          {
            if(when&&eval(operation))
            {
              component.hide=true;
           }
         else
         {
          component.hide=false;
         }
       }
       }
     },true)
 		},

   controller:function($scope,components)
    {
       

    }
 	
 } 
 })