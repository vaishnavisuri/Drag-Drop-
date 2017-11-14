var app = angular.module('componentBuilder');
app.config([
  'componentsProvider',
  function(componentsProvider) {
    componentsProvider.addCommonControl('container', {
      title: 'Container',
      template: 'componentBuilder/components/container.html',
      icon: 'fa fa-folder-open',
      settings: {
        icon: true,
        inputType: 'container',
        inputMask: '',
        key: 'container',
        properties: {
          hidden: false,
          hideLabel: false,
          json: [],
        },
        divStyles: {

          height: 100,
          color: 'black',
          backgroundColor: '',
          customCss: '',
          customClass: '',
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          border: '',
          borderColor: '',
          borderStyle: '',
          borderWidth: '',
          display: '',
          width: '100%',

        },
        labelStyles:{
          color:'',
          fontSize:''
        },
        others: {
          bootstrapGridClass: ''
        },
        conditional: {
          show: null,
          when: null,
          eq: ''
        }
      },
      configurations: [{
        show: true,
        title: 'Display',
        template: 'componentBuilder/components/container/settings.html'
      }, {
        title: 'Styles',
        template: 'componentBuilder/components/container/styles.html'
      }]
    });
  }
]);

app.run(['$templateCache', function($templateCache) {
    $templateCache.put('componentBuilder/components/container.html',
      // '<div ng-style="component.divStyles">'+
      '<div class="container dropzone"  style="margin-top:5px" dnd-list dnd-drop="callback({event:event,targetList: component.properties.json, targetIndex: index})"  ng-style="component.divStyles">' +
      
      '<form-renderer json="component.properties.json"  editable="editable"></form-renderer>' +
      //'<json-render json="component.properties.json"   editable="editable" styles="component.divStyles"></json-render>' +
      // '<div class="clearfix spacer"></div>' +
      // '</div>'+
      '</div>'
    );

    $templateCache.put('componentBuilder/components/container/settings.html',
      '<div class="formBuilderOptions">' +
      // '<form-builder-option property="properties.label" type="text" display="Label"></form-builder-option>' +
      '<form-builder-option property="others.bootstrapGridClass" type="select"  display="Size" options="BOOTSTRAP_GRID_CLASSES" object_format="true"></form-builder-option>' +
      '</div>'

    );
    $templateCache.put('componentBuilder/components/container/styles.html',
      '<div class="formBuilderOptions">' +
      //  '<form-builder-option property="labelStyles.color" type="color" display="Label Color"></form-builder-option>' +
      // '<form-builder-option property="labelStyles.fontSize" type="number" display="Font Size"></form-builder-option>' +
      '<form-builder-option property="divStyles.height" type="number" display="Height"></form-builder-option>' +
      '<form-builder-option property="divStyles.backgroundColor" type="color" display="Background Color"></form-builder-option>' +
      '<form-builder-option property="divStyles.borderColor" type="color" display="Border Color"></form-builder-option>' +
      '<form-builder-option property="divStyles.borderStyle" type="select" display="Border Style" options="BORDER_STYLES"></form-builder-option>' +
      '<form-builder-option property="divStyles.borderWidth" type="number" display="Border Width"></form-builder-option>' +
      '<form-builder-option property="divStyles.marginLeft" type="number" display="Margin Left"></form-builder-option>' +
      '<form-builder-option property="divStyles.marginRight" type="number" display="Margin Right"></form-builder-option>' +
      '<form-builder-option property="divStyles.marginTop" type="number" display="Margin Top"></form-builder-option>' +
      '<form-builder-option property="divStyles.marginBottom" type="number" display="Margin Bottom"></form-builder-option>' +
      '<form-builder-option property="divStyles.paddingRight" type="number" display="Padding Right"></form-builder-option>' +
      '<form-builder-option property="divStyles.paddingLeft" type="number" display="Padding Left"></form-builder-option>' +
      '<form-builder-option property="divStyles.paddingTop" type="number" display="Padding Top"></form-builder-option>' +
      '<form-builder-option property="divStyles.paddingBottom" type="number" display="Padding Bottom"></form-builder-option>' +
      '</div>'

    );
  }



]);