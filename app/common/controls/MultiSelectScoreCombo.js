var app = angular.module('componentBuilder');
app.config([
    'componentsProvider',
    function(componentsProvider) {
        componentsProvider.addControl('MultiSelectScoreCombo', {
            title: 'Score - Multi Select ',
            template: 'componentBuilder/components/MultiSelectScoreCombo.html',
            icon: 'fa fa-th-list',
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
                    scoreType:'sum',
                    multiple: true,
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

                listStyles: {
                    color: 'black',
                    backgroundColor: '',
                    customCss: '',
                    customClass: '',
                    marginLeft: '',
                    marginRight: '',
                    marginTop: '',
                    marginBottom: '',
                    paddingLeft: '',
                    paddingRight: '',
                    paddingTop: '',
                    paddingBottom: '',
                    borderColor: '',
                    display: '',
                    width: '80%',
                    float:'left',
                    height:100,
                },
                styles: {
                    marginLeft: '',
                    marginRight: '',
                    marginTop: '',
                    marginBottom: '',
                    paddingLeft: '',
                    paddingRight: '',
                    paddingTop: '',
                    paddingBottom: '',
                },
                scoreStyles:{
                  width:"19%",
                  marginLeft: '',
                  marginRight:'',
                  marginTop: '',
                  marginBottom: '',
                  display:'inline'
                 },
                comboStyles: {
                    paddingLeft: '',
                    paddingRight: '',
                    paddingTop: '',
                    paddingBottom: '',
                    height: 60,
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
                template: 'componentBuilder/components/MultiSelectScoreCombo/settings.html'
            }, {
                title: 'Styles - Label',
                template: 'componentBuilder/components/MultiSelectScoreCombo/labelStyles.html'
            }, {
                title: 'Styles - List',
                template: 'componentBuilder/components/MultiSelectScoreCombo/listStyles.html'
            },
            {
                title: 'Styles - Score',
                template: 'componentBuilder/components/MultiSelectScoreCombo/stylesScore.html'
            }, {
                title: 'Validations',
                template: 'componentBuilder/components/MultiSelectScoreCombo/validations.html'
            }, {
                title: 'Conditions',
                template: 'componentBuilder/components/common/conditional.html'
            }]
        });
    }
]);

app.run(['$templateCache', function($templateCache) {
        $templateCache.put('componentBuilder/components/MultiSelectScoreCombo.html', '<div   style="display:block;" ng-style="component.labelStyles"><span ng-style="component.labelStyles"' +
            ' ng-bind="component.properties.label" ng-hide="component.properties.hideLabel"></span><div class="clearfix"></div>' + '<select ' +
            'class="form-control"' +
            'type="{{component.inputType }}"' +
            'id="{{ component.properties.id||component.componentId }}" ' +
            'name="{{ component.properties.name||component.componentId }}" ' +
            'ng-options="option as option.value for option in component.properties.options track by option.key"' +
            'ng-disabled="component.properties.disabled" ' +
            'ng-readonly="component.properties.readonly" ' +
            'ng-required="component.validations.required" ' +
            'ng-required="component.validations.required" ' +
            'ng-model="data[component.properties.model]"' +
            'multiple="component.properties.multiple"' +
            'conditional-validation ' +
            'score-caluculation '+
            'is-multi-select="true"'+
            'score-model="data[component.properties.scoreModel]"'+
            'data="data" ' +
            'component="component"' +
            'ng-style="component.listStyles"' +
            '</select><input type="text" class="form-control col-md-2" ng-style="component.scoreStyles" ng-disabled="component.properties.isScoreDisabled" class="form-control" ng-style="scoreStyles" ng-model="data[component.properties.scoreModel]" placeholder="score"/></div>');



        $templateCache.put('componentBuilder/components/MultiSelectScoreCombo/settings.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="properties.label" type="text" display="Label"></form-builder-option>' +
            '<form-builder-option property="properties.model" type="text" display="Key"></form-builder-option>' +
            '<form-builder-option property="properties.scoreModel" type="text" display="Score Key"></form-builder-option>' +
            '<form-builder-option property="others.bootstrapGridClass" type="select"  display="Size" options="BOOTSTRAP_GRID_CLASSES" object_format="true"></form-builder-option>' +
            '<form-builder-option property="properties.options" type="score_options"  display="options"></form-builder-option>' +
            '<form-builder-option property="properties.scoreType" type="select"  display="Score Type" options="SCORE_TYPE"></form-builder-option>' +
            '<form-builder-option property="properties.hideLabel" type="checkbox"  display="Hide Label"></form-builder-option>' +
            '<form-builder-option property="properties.disabled" type="checkbox"  display="Is Disabled"></form-builder-option>' +
            '<form-builder-option property="properties.readonly" type="checkbox"  display="Is ReadOnly"></form-builder-option>' +
            '</div>'

        );


        $templateCache.put('componentBuilder/components/MultiSelectScoreCombo/labelStyles.html',
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

         $templateCache.put('componentBuilder/components/MultiSelectScoreCombo/listStyles.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="listStyles.fontStyle" type="select" display="Font Style" options="FONT_STYLES"></form-builder-option>'+
            '<form-builder-option property="listStyles.width" type="text" display="Width"></form-builder-option>'+
            '<form-builder-option property="listStyles.height" type="text" display="Width"></form-builder-option>'+
            '<form-builder-option property="listStyles.backgroundColor" type="color" display="Background Color"></form-builder-option>' +
            '<form-builder-option property="listStyles.borderColor" type="color" display="Border Color"></form-builder-option>' +
            '<form-builder-option property="listStyles.marginLeft" type="number" display="Margin Left"></form-builder-option>' +
            '<form-builder-option property="listStyles.marginRight" type="number" display="Margin Right"></form-builder-option>' +
            '<form-builder-option property="listStyles.marginTop" type="number" display="Margin Top"></form-builder-option>' +
            '<form-builder-option property="listStyles.marginBottom" type="number" display="Margin Bottom"></form-builder-option>' +
            '<form-builder-option property="listStyles.paddingRight" type="number" display="Padding Right"></form-builder-option>' +
            '<form-builder-option property="listStyles.paddingLeft" type="number" display="Padding Left"></form-builder-option>' +
            '<form-builder-option property="listStyles.paddingTop" type="number" display="Padding Top"></form-builder-option>' +
            '<form-builder-option property="listStyles.paddingBottom" type="number" display="Padding Bottom"></form-builder-option>' +
            '</div>'
        );

          $templateCache.put('componentBuilder/components/multiSelectScoreCheckbox/stylesScore.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="scoreStyles.width" type="text" display="Font Weight"></form-builder-option>' +
            '<form-builder-option property="scoreStyles.marginLeft" type="number" display="Margin Left"></form-builder-option>' +
            '<form-builder-option property="scoreStyles.marginRight" type="number" display="Margin Right"></form-builder-option>' +
            '<form-builder-option property="scoreStyles.marginTop" type="number" display="Margin Top"></form-builder-option>' +
            '<form-builder-option property="scoreStyles.marginBottom" type="number" display="Margin Bottom"></form-builder-option>' +
            '<form-builder-option property="scoreStyles.display" type="select" options="DISPLAY_OPTIONS" object_format="true"></form-builder-option>'+
            '</div>'
        );

       
        $templateCache.put('componentBuilder/components/MultiSelectScoreCombo/validations.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="validations.required" type="checkbox" display="Is Required"></form-builder-option>' +
            '</div>'

        );
    }



]);
