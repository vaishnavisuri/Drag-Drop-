var app = angular.module('componentBuilder');
app.config([
    'componentsProvider',
    function(componentsProvider) {
        componentsProvider.addControl('scoreSelectCombo', {
            title: 'Score scoreSelectComboSelect Combo',
            template: 'componentBuilder/components/scoreSelectCombo.html',
            icon: 'fa fa-caret-square-o-down',
            settings: {
                icon: true,
                inputType: 'select',
                inputMask: '',
                key: 'select',
                isModelNeeded: true,
                isScoreModelNeeded:true,
                properties: {
                    label: 'Select',
                    name: '',
                    id: '',
                    value: '',
                    labelSize: '',
                    labelColor: '',
                    defaultValue: false,
                    readonly: false,
                    disabled: false,
                    click: false,
                    show: true,
                    inline: false,
                    model: '',
                    scoreModel:'',
                    icon: true,
                    hidden: true,
                    hideLabel: false,
                    bootstrapClass: '',
                    options: [{
                        "key": 1,
                        "value": "option 1",
                        "score":0
                    }, {
                        "key": 2,
                        "value": "option 2",
                         "score":0
                    }, {
                        "key": 3,
                        "value": "option 3",
                         "score":0
                    }, {
                        "key": 4,
                        "value": "option 4",
                         "score":0
                    }]
                },
                labelStyles: {
                    color: '',
                    fontSize: '',
                    fontWeight:'',
                    backgroundColor:'',
                    marginLeft: '',
                    marginRight: '',
                    marginTop: '',
                    marginBottom: '',
                },


                divStyles: {
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
                    borderColor: '',
                    display: 'inline',
                    width: '80%',
                    float:'left'
                },
                 scoreStyles:{
                  width:"19%",
                  marginLeft: '',
                  marginRight:'',
                  marginTop: '',
                  marginBottom: '',
                  display:'inline'
                 },
                validations: {
                    required: false,
                },
                others: {
                    errorColor: '',
                    customCss: '',
                    customClass: '',
                    bootstrapGridClass: ''
                },
                conditional: {
                    show: null,
                    when: null,
                    eq: ''
                },

            },
            configurations: [{
                show: true,
                title: 'Display',
                template: 'componentBuilder/components/scoreSelectCombo/settings.html'
            }, {
                title: 'Styles - Label',
                template: 'componentBuilder/components/scoreSelectCombo/labelStyles.html'
            }, {
                title: 'Styles - List',
                template: 'componentBuilder/components/scoreSelectCombo/listStyles.html'
            },
            {
                title: 'Styles - Score',
                template: 'componentBuilder/components/scoreSelectCombo/stylesScore.html'
            },{
                title: 'Validations',
                template: 'componentBuilder/components/scoreSelectCombo/validations.html'
            }, {
                title: 'Conditions',
                template: 'componentBuilder/components/common/conditional.html'
            }]
        });
    }
]);

app.run(['$templateCache', function($templateCache) {
        $templateCache.put('componentBuilder/components/scoreSelectCombo.html', '<div   style="display:block;" ><span ng-style="component.labelStyles"' +
            ' ng-bind="component.properties.label" ng-hide="component.properties.hideLabel"></span><div class="clearfix"></div>' + '<select ' +
            'class="form-control"' +
            'type="{{component.inputType }}"' +
            'id="{{ component.properties.id||component.componentId }}" ' +
            'name="{{ component.properties.name||component.componentId }}" ' +
            'ng-options="option as option.value for option in component.properties.options track by option.key"' +
            'ng-disabled="component.properties.disabled" ' +
            'ng-readonly="component.properties.readonly" ' +
            'ng-required="component.validations.required" ' +
            'ng-model="data[component.properties.model]"' +
            'conditional-validation ' +
            'data="data" ' +
            'ng-style="component.divStyles" '+
            'ng-change="data[component.properties.scoreModel]=data[component.properties.model]&&data[component.properties.model].score?data[component.properties.model].score:0"'+
            'component="component" > <option value="" ng-click="data[component.properties.scoreModel]=0">select</option>'+
            '</select><input type="text" class="form-control col-md-2" ng-style="component.scoreStyles" ng-disabled="component.properties.isScoreDisabled" class="form-control" ng-style="scoreStyles" ng-model="data[component.properties.scoreModel]" placeholder="score"/></div>');



        $templateCache.put('componentBuilder/components/scoreSelectCombo/settings.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="properties.label" type="text" display="Label"></form-builder-option>' +
            '<form-builder-option property="properties.name" type="text" display="Name"></form-builder-option>' +
            '<form-builder-option property="properties.id" type="text" display="ID"></form-builder-option>' +
            '<form-builder-option property="properties.model" type="text" display="Key"></form-builder-option>' +
            '<form-builder-option property="properties.scoreModel" type="text" display="Score Key"></form-builder-option>' +
            '<form-builder-option property="others.bootstrapGridClass" type="select"  display="Size" options="BOOTSTRAP_GRID_CLASSES" object_format="true"></form-builder-option>' +
            '<form-builder-option property="properties.options" type="score_options"  display="options"></form-builder-option>' +
            '<form-builder-option property="properties.hideLabel" type="checkbox"  display="Hide Label"></form-builder-option>' +
            '<form-builder-option property="properties.disabled" type="checkbox"  display="Is Disabled"></form-builder-option>' +
            '<form-builder-option property="properties.readonly" type="checkbox"  display="Is ReadOnly"></form-builder-option>' +
            '</div>'

        );

       $templateCache.put('componentBuilder/components/scoreSelectCombo/stylesScore.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="scoreStyles.width" type="text" display="width"></form-builder-option>' +
            '<form-builder-option property="scoreStyles.marginLeft" type="number" display="Margin Left"></form-builder-option>' +
            '<form-builder-option property="scoreStyles.marginRight" type="number" display="Margin Right"></form-builder-option>' +
            '<form-builder-option property="scoreStyles.marginTop" type="number" display="Margin Top"></form-builder-option>' +
            '<form-builder-option property="scoreStyles.marginBottom" type="number" display="Margin Bottom"></form-builder-option>' +
            '<form-builder-option property="scoreStyles.display" type="select" options="DISPLAY_OPTIONS" object_format="true"></form-builder-option>'+
            '</div>'
        );
           $templateCache.put('componentBuilder/components/scoreSelectCombo/labelStyles.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="labelStyles.color" type="color" display="Text Color"></form-builder-option>' +
            '<form-builder-option property="labelStyles.backgroundColor" type="color" display="Background Color"></form-builder-option>' +
            '<form-builder-option property="labelStyles.fontSize" type="number" display="Font Size"></form-builder-option>' +
            '<form-builder-option property="labelStyles.fontWeight" type="number" display="Font Weight"></form-builder-option>' +
            '<form-builder-option property="labelStyles.marginLeft" type="number" display="Margin Left"></form-builder-option>' +
            '<form-builder-option property="labelStyles.marginRight" type="number" display="Margin Right"></form-builder-option>' +
            '<form-builder-option property="labelStyles.marginTop" type="number" display="Margin Top"></form-builder-option>' +
            '<form-builder-option property="labelStyles.marginBottom" type="number" display="Margin Bottom"></form-builder-option>'+ 
           '</div>'

        );
        $templateCache.put('componentBuilder/components/scoreSelectCombo/listStyles.html',
            '<div class="formBuilderOptions">' +
             '<form-builder-option property="divStyles.backgroundColor" type="color" display="Background Color"></form-builder-option>' +
            '<form-builder-option property="divStyles.borderColor" type="color" display="Border Color"></form-builder-option>' +
            '<form-builder-option property="divStyles.marginLeft" type="number" display="Margin Left"></form-builder-option>' +
            '<form-builder-option property="divStyles.marginTop" type="number" display="Margin Top"></form-builder-option>' +
            '<form-builder-option property="divStyles.marginBottom" type="number" display="Margin Bottom"></form-builder-option>' +
            '<form-builder-option property="divStyles.marginRight" type="number" display="Margin Right"></form-builder-option>' +
            '<form-builder-option property="divStyles.paddingRight" type="number" display="Padding Right"></form-builder-option>' +
            '<form-builder-option property="divStyles.paddingLeft" type="number" display="Padding Left"></form-builder-option>' +
            '<form-builder-option property="styles.paddingTop" type="number" display="Padding Top"></form-builder-option>' +
            '<form-builder-option property="styles.paddingBottom" type="number" display="Padding Bottom"></form-builder-option>' +
            '<form-builder-option property="labelStyles.fontStyle" type="select" display="Font Style" options="FONT_STYLES"></form-builder-option>' +
            '<form-builder-option property="divStyles.width" type="text" display="Width"></form-builder-option>' +

            '</div>'

        );

        $templateCache.put('componentBuilder/components/scoreSelectCombo/validations.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="validations.required" type="checkbox" display="Is Required"></form-builder-option>' +
            '</div>'

        );
    }



]);
