var app = angular.module('componentBuilder');
app.config([
  'componentsProvider',
  function(componentsProvider) {
    componentsProvider.addCommonControl('div', {
      title: 'Empty Space',
      template: 'componentBuilder/components/div.html',
      icon: 'fa fa-square-o',
      settings: {
        icon: true,
        inputType: '',
        inputMask: '',
        key: 'div',
        properties: {
          hidden: false,
          hideLabel: true,
          },
         divStyles: {
         
          height:10,
          backgroundColor:'white',

        },
        others:{
          bootstrapGridClass:''
        },
        conditional: {
          show: null,
          when: null,
          eq: ''
        }
      },
      configurations: [{
        show:true,
        title: 'Display',
        template: 'componentBuilder/components/div/settings.html'
      },{
        title: 'Styles',
        template: 'componentBuilder/components/div/styles.html'
      }]
    });
  }
]);

app.run(['$templateCache', function($templateCache) {
       $templateCache.put('componentBuilder/components/div.html',
      '<div  ng-style="component.divStyles"'+
      '></div>');

      $templateCache.put('componentBuilder/components/div/settings.html',
        '<div class="formBuilderOptions">' +
          '<form-builder-option property="others.bootstrapGridClass" type="select"  display="Size" options="BOOTSTRAP_GRID_CLASSES" object_format="true"></form-builder-option>' +
        '</div>'

      ); 
    $templateCache.put('componentBuilder/components/div/styles.html',
      '<div class="formBuilderOptions">' +
      '<form-builder-option property="divStyles.height" type="number" display="Height"></form-builder-option>' +
      '<form-builder-option property="divStyles.backgroundColor" type="color" display="Background Color"></form-builder-option>' +
      '</div>'

    );
  }



]);