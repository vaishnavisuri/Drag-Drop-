
 var app=angular.module('componentBuilder');
 app.directive('scoreCaluculation', function () {
 return {
  restrict: 'A',
  replace: true,
	link: function ($scope, iElement, iAttrs) {
     debugger
     var component=$scope.component||{};
     $scope.$watch('data',function(){
      $scope.scoreModel=0;
      if($scope.data[$scope.component.properties.model])
      {
          var key=$scope.component.properties.scoreModel;
          $scope.data[key]=getScore($scope.data[$scope.component.properties.model],$scope.component.properties.scoreType);
      }
      
     },true)

     function getScore(list,scoreType)
            {
              var score=0;
              if(scoreType=='sum'){
              for(var i=0;i<list.length;i++)
              {
                
                  score+=parseInt(list[i].score);
                 }
             
              return score;
            }
            
            else if(scoreType=='large')
            {
               var big=0;
               for(var i=0;i<list.length;i++)
              {
                 if(big<list[i].score)
                 {
                  big=list[i].score;
                 }
                 
                 }
                 score=parseInt(big); 
                 return score;
               }
            } 
 		},

   controller:function($scope,components)
    {
         

    }
 	
 } 
 })