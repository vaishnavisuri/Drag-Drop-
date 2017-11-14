
 var app=angular.module('componentBuilder');
 app.directive('multiSelectCheckbox', function () {
 return {
  restrict: 'E',
  replace: true,
  scope:{
     options:'=?',
     selectedData:'=?',
     styles:'=?'
 	},
 	template:           '<div class="col-md-12">'+
                      '<div  name="checkList"  ng-style="styles" ng-click="selectCheckBox(option,$index)"  ng-repeat="option in selectedData">'+
                      '<input type="checkBox" ng-checked="option.selected">{{option.value}}'+
                      '</div></div>',
 		link: function ($scope) {
 			
        
      /* $scope.$watch('selectedData', function() {
                for (var i = 0; i < $scope.options.length; i++) {
                    $scope.options[i].selected = false;
                }
                if ($scope.selectedData){
                    var selectedBoxes = $scope.selectedData;
                    for (var i = 0; i < selectedBoxes.length; i++) {
                        var key =  selectedBoxes[i];
                        var index = parseInt(key[0]);
                        $scope.options[index].selected = true;
                    }
                }

            });*/
 		},

   controller:function($scope)
    {
             $scope.styles=$scope.styles||{};
             $scope.$watch('options',function(){
               if(!($scope.selectedData&&angular.isArray($scope.selectedData)&&$scope.options&&angular.isArray($scope.options)&&$scope.selectedData.length==$scope.options.length&&isSame($scope.selectedData,$scope.options)))
                   $scope.selectedData= $scope.options;

             });
              
            function isSame(src,dest)
            {
              for(var i=0;i<src.length;i++)
              {
                if(src[i].key!=dest[i].key||src[i].value!=dest[i].value)
                {
                  return false;
                }
              }
             return true; 
            }
      
              $scope.selectCheckBox = function(key, index) {
                        key.selected = !key.selected;
            }
  }
 	
 } 
 })