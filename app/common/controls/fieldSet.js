var app = angular.module('componentBuilder');
app.config([
  'componentsProvider',
  function(componentsProvider) {
    componentsProvider.addCommonControl('fieldSet', {
      title: 'Field Set',
      template: 'componentBuilder/components/fieldSet.html',
      icon: 'fa fa-minus',
      settings: {
        icon: true,
        inputType: 'fieldSet',
        inputMask: '',
        key: 'fieldSet',
        properties: {
          label: 'Field Set',
          hidden: false,
          hideLabel: false,
          json: [],
        },
        divStyles: {
          height: '',
          color: 'black',
          backgroundColor: '',
          customCss: '',
          customClass: '',
          marginLeft: '',
          marginRight: 5,
          marginTop: '',
          marginBottom: '',
          paddingLeft: '',
          paddingRight: '',
          paddingTop: '',
          paddingBottom: '',
          border: '',
          borderColor: '',
          borderStyle: '',
          borderWidth: '',
          display: '',
          width: '',

        },
        labelStyles:{
          color:'#3c8dbc',
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
        template: 'componentBuilder/components/fieldSet/settings.html'
      }, {
        title: 'Styles',
        template: 'componentBuilder/components/fieldSet/styles.html'
      }]
    });
  }
]);

app.run(['$templateCache', function($templateCache) {
    $templateCache.put('componentBuilder/components/fieldSet.html',
      '<fieldset class="fsStyle dropzone" style="margin-top:5px" ng-style="component.divStyles" dnd-list dnd-drop="callback({event:event,targetList: component.properties.json, targetIndex: index})">' +
      '<legend class="legendStyle"  ng-bind="component.properties.label" ng-style="component.labelStyles"></legend>' +
      '<form-renderer json="component.properties.json"  editable="editable"></form-renderer>' +
      '</fieldset>');

    $templateCache.put('componentBuilder/components/fieldSet/settings.html',
      '<div class="formBuilderOptions">' +
      '<form-builder-option property="properties.label" type="text" display="Label"></form-builder-option>' +
      '<form-builder-option property="others.bootstrapGridClass" type="select"  display="Size" options="BOOTSTRAP_GRID_CLASSES" object_format="true"></form-builder-option>' +
      '</div>'

    );
    $templateCache.put('componentBuilder/components/fieldSet/styles.html',
      '<div class="formBuilderOptions">' +
      '<form-builder-option property="labelStyles.color" type="color" display="Legend Color"></form-builder-option>' +
      '<form-builder-option property="labelStyles.fontSize" type="number" display="Legend Size"></form-builder-option>' +
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