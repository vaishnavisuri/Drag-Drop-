var app = angular.module('componentBuilder');
app.config([
  'componentsProvider',
  function(componentsProvider) {
    componentsProvider.addCommonControl('hrLine', {
      title: 'Line',
      template: 'componentBuilder/components/hrLine.html',
      icon: 'fa fa-minus',
      settings: {
        icon: true,
        inputType: '',
        inputMask: '',
        key: 'hrLine',
        properties: {
          hidden: false,
          hideLabel: true,
          },
         divStyles: {
          color: '#ccc',
          marginLeft:'',
          marginRight:'',
          marginTop:'',
          marginBottom:'',
         'border-top': '1px solid',
          borderStyle:'',

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
        
        title: 'Display',
        template: 'componentBuilder/components/hrLine/settings.html'
      },{
        show:true,
        title: 'Styles',
        template: 'componentBuilder/components/hrLine/styles.html'
      }]
    });
  }
]);

app.run(['$templateCache', function($templateCache) {
       $templateCache.put('componentBuilder/components/hrLine.html',
      '<hr  ng-style="component.divStyles"'+
      '></hr>');

       $templateCache.put('componentBuilder/components/hrLine/settings.html',
        '<div class="formBuilderOptions">' +
          '<form-builder-option property="others.bootstrapGridClass" type="select"  display="Size" options="BOOTSTRAP_GRID_CLASSES" object_format="true"></form-builder-option>' +
        '</div>'

      );

    $templateCache.put('componentBuilder/components/hrLine/styles.html',
      '<div class="formBuilderOptions">' +
      '<form-builder-option property="divStyles.color" type="color" display="Color"></form-builder-option>' +
      '<form-builder-option property="divStyles.borderStyle" type="select" display="Border Style" options="BORDER_STYLES"></form-builder-option>' +
      '<form-builder-option property="divStyles.marginLeft" type="number" display="Margin Left"></form-builder-option>' +
      '<form-builder-option property="divStyles.marginRight" type="number" display="Margin Right"></form-builder-option>' +
      '<form-builder-option property="divStyles.marginTop" type="number" display="Margin Top"></form-builder-option>' +
      '<form-builder-option property="divStyles.marginBottom" type="number" display="Margin Bottom"></form-builder-option>' +
      '</div>'

    );
  }



]);