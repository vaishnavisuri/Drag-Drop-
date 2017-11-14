/**
* This directive creates a field for tweaking component options.
* This needs at least a property attribute specifying what property
* of the component to bind to.
*
* If the property is defined in appConstants above, it will automatically
* populate its label, placeholder, input type, and tooltip. If not, you may specify
* those via attributes (except for tooltip, which you can specify with the title attribute).
* The generated input will also carry over any other properties you specify on this directive.
*/
var app=angular.module('componentBuilder');
  app.directive('formBuilderOption',['APP_CONSTANTS','COMBO_OPTIONS', function(APP_CONSTANTS,COMBO_OPTIONS) {
  return {
    restrict: 'E',
    require: 'property',
    priority: 2,
    scope:false,
    replace: true,
    template: function(el, attrs) {
    
      var inputAttrs = {
        model:attrs.property,
        id: attrs.property,
        name: attrs.property,
        type: attrs.type,
        options:attrs.options?attrs.options:'',
        label:attrs.display
       };

      if(inputAttrs.options)
      {
        inputAttrs.objectFormat=attrs.objectFormat;
      }     
      if (inputAttrs.type.toLowerCase() === 'checkbox') {

        return '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">'+
               '<div class="checkbox form-group display-flex">' +
                '<label for="' + inputAttrs.property + '" class="lable-width">' +inputAttrs.label +'</label>'+  
                '<input type="checkbox" class=" prop-fields" ng-model="component.'+inputAttrs.model+'"/>'+              
              '</div>'+
              '</div>';
      }
     else if (inputAttrs.type.toLowerCase() === 'select') {
          var  optionsString='<option value="">select</option>';
          var options=COMBO_OPTIONS[inputAttrs.options]||[];
          for(var i=0;i<options.length;i++)
             {
               var key=inputAttrs.objectFormat?options[i].value:options[i];
               var display=inputAttrs.objectFormat?options[i].display:options[i];
               optionsString+='<option value="'+key+'">'+display+'</option>';
             }
             return '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">'+
                    '<div class="select form-group display-flex">' +
                 '<label for="' + inputAttrs.name + '" class="lable-width" >' + inputAttrs.label + '</label>' +
                 '<select name="'+inputAttrs.name+'" class=" prop-fields" ng-model="component.'+inputAttrs.model+'">'+optionsString+'</select>'+
                 '</div>'+
                 '</div>';

             }
      else if(inputAttrs.type.toLowerCase() === 'options') {
         return '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">'+
              '<label for="' + inputAttrs.name + '" class="lable-width">' + inputAttrs.label + '</label>'+
              '<button type="button" class="btn btn-default btn-xs" ng-click=\"hide=!hide\"><span class="glyphicon glyphicon-option-horizontal" aria-hidden="true"></span></button>'+
              '<table class="table table-bordered table-condensed table-responsive" ><thead><tr><th class="">value</th><th class="">Display</th><th class="">'+
               '<div ng-click=\"component.'+inputAttrs.model+'.push({})\"> <span class="glyphicon glyphicon-plus"></span></div></th></tr></thead>'+
              '<tbody><tr ng-repeat="model in component.'+inputAttrs.model+'"><td class=""><input ng-model=\"model.key\" class="form-control" type = "text"></td><td class=""><input ng-model=\"model.value\" class="form-control" type = "text"></td><td class="">'+
                '<div ng-click=\"component.'+inputAttrs.model+'.splice($index,1);\">'+
                '<span class="glyphicon glyphicon-remove"></span></div></td></tr></tbody></table>'+
              '</div>'
        }     
         else if(inputAttrs.type.toLowerCase() === 'score_options') {
         return '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">'+
              '<label for="' + inputAttrs.name + '" class="lable-width">' + inputAttrs.label + '</label>'+
              '<button type="button" class="btn btn-default btn-xs" ng-click=\"hide=!hide\"><span class="glyphicon glyphicon-option-horizontal" aria-hidden="true"></span></button>'+
              '<table class="table table-bordered table-condensed table-responsive" ><thead><tr><th class="">value</th><th class="">Display</th><th class="">score</th><th class="">'+
               '<div ng-click=\"component.'+inputAttrs.model+'.push({})\"> <span class="glyphicon glyphicon-plus"></span></div></th></tr></thead>'+
              '<tbody><tr ng-repeat="model in component.'+inputAttrs.model+'"><td class=""><input ng-model=\"model.key\" class="form-control" type = "text"></td><td class=""><input ng-model=\"model.value\" class="form-control" type = "text"></td><td class=""><input ng-model=\"model.score\" class="form-control" type = "text"></td><td class="">'+
                '<div ng-click=\"component.'+inputAttrs.model+'.splice($index,1);\">'+
                '<span class="glyphicon glyphicon-remove"></span></div></td></tr></tbody></table>'+
              '</div>'
        }   
      else {
         return '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">'+
                    '<div class="form-group display-flex">'+
                      '<label for="' + inputAttrs.name + '" class="lable-width">' + inputAttrs.label + '</label>'+
                      '<input type="'+inputAttrs.type+'" class="form-control prop-fields" id="text" ng-model="component.'+inputAttrs.model+'">'+
                    '</div>'+
                 '</div>';
          }
        } ,

       controller: function($scope) {
        /*  $scope.addrow = function(){
                scope.model.push({});
              }
         $scope.remove = function(value){
              scope.model.splice(value,1);      
           }*/
        }

      };
}]);
