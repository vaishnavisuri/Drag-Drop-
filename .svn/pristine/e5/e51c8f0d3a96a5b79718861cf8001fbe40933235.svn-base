var app = angular.module('componentBuilder');
app.config([
  'componentsProvider',
  function(componentsProvider) {
    componentsProvider.addCommonControl('panel', {
      title: 'Panel',
      template: 'componentBuilder/components/panel.html',
      icon: 'fa fa-window-maximize',
      settings: {
        title: 'Panel',
        icon: true,
        inputType: '',
        inputMask: '',
        theme:'primary',
        key: 'panel',
        properties: {
          show:true,
          hidden: false,
          hideLabel: true,
          json: [],
        },
        divStyles: {
          height: 100,
          color: 'black',
          marginLeft: '',
          marginRight: 5,
          marginTop: 5,
          marginBottom: '', 
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: '',
          paddingBottom: '',
         

        },
        labelStyles:{
          color:'white',
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
        template: 'componentBuilder/components/panel/settings.html'
      }, {
        title: 'Styles',
        template: 'componentBuilder/components/panel/styles.html'
      }]
    });
  }
]);

app.run(['$templateCache', function($templateCache) {
    $templateCache.put('componentBuilder/components/panel.html',
     
      '<div class="panel panel-{{component.theme}}"  style="display:block;margin-top:5px;padding:0px" >'+
        '<div class="panel-heading"><strong ng-style="component.labelStyles" ng-bind="component.properties.label"></strong></div>'+
      '<div class="panel-body">' +
         '<div class="dropzone" ng-if="component.properties" ng-style="component.divStyles"  dnd-list dnd-drop="callback({event:event,targetList: component.properties.json, targetIndex: index})">' +
        '<form-renderer json="component.properties.json"  editable="editable"></form-renderer>' +
      ' </div>' +
      ' </div>' +
      '</div>'
    );

    $templateCache.put('componentBuilder/components/panel/settings.html',
      '<div class="formBuilderOptions">' +
      '<form-builder-option property="properties.label" type="text" display="Label"></form-builder-option>' +
      '<form-builder-option property="others.bootstrapGridClass" type="select"  display="Size" options="BOOTSTRAP_GRID_CLASSES" object_format="true"></form-builder-option>' +
      '</div>'

    );
    $templateCache.put('componentBuilder/components/panel/styles.html',
      '<div class="formBuilderOptions">' +
       '<form-builder-option property="theme" type="select" display="Theme" options="PANEL_TYPE"></form-builder-option>' +
       '<form-builder-option property="labelStyles.color" type="color" display="Label Color"></form-builder-option>' +
      '<form-builder-option property="labelStyles.fontSize" type="number" display="Font Size"></form-builder-option>' +
      '<form-builder-option property="divStyles.height" type="number" display="Height"></form-builder-option>' +
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