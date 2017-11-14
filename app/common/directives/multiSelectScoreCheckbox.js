
 var app=angular.module('componentBuilder');
 app.directive('multiSelectScoreCheckbox', function () {
 return {
  restrict: 'E',
  replace: true,
  scope:{
     options:'=?',
     selectedData:'=?',
     checkBoxStyles:'=?',
     scoreStyles:'=?',
     score:'=?',
     isScoreDisabled:'=?',
     component:'=?'
    },
 	template:           '<div class="col-md-12">'+
                      '<div  name="checkList" ng-style="checkBoxStyles" ng-click="selectCheckBox(option,$index)"  ng-repeat="option in selectedData">'+
                      '<input type="checkBox"  ng-checked="option.selected">{{option.value}}'+
                      '</div><input type="text" ng-disabled="isScoreDisabled" class="form-control" ng-style="scoreStyles" ng-model="score" placeholder="score"/></div>',
 		link: function ($scope) {
 			 $scope.checkBoxStyles= $scope.checkBoxStyles||{};
       $scope. scoreStyles=  $scope.scoreStyles||{};
        
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

             $scope.$watch('selectedData',function(){
                 $scope.score=getScore($scope.selectedData,$scope.component.properties.scoreType);

             },true)
              
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

         function getScore(list,scoreType)
            {
              var score=0;
              if(scoreType=='sum'){
              for(var i=0;i<list.length;i++)
              {
                if(list[i].selected){
                  score+=parseInt(list[i].score);
                 }
                 }
             
              return score;
            }
            
            else if(scoreType=='large')
            {
               var big=0;
               for(var i=0;i<list.length;i++)
              {
                   if(list[i].selected){
                 if(big<list[i].score)
                 {
                  big=list[i].score;
                  }
                 }
                 
                 }
                 score=parseInt(big); 
                 return score;
               }
            } 
              $scope.selectCheckBox = function(key, index) {
                        key.selected = !key.selected;
            }
  }
 	
 } 
 })