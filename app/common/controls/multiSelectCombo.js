var app = angular.module('componentBuilder');
app.config([
    'componentsProvider',
    function(componentsProvider) {
        componentsProvider.addControl('MultiSelectCombo', {
            title: 'Multi Select',
            template: 'componentBuilder/components/MultiSelectCombo.html',
            icon: 'fa fa-th-list',
            settings: {
                icon: true,
                inputType: 'select',
                inputMask: '',
                key: 'select',
                isModelNeeded: true,
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
                    icon: true,
                    hidden: true,
                    hideLabel: false,
                    bootstrapClass: '',
                    multiple: true,
                    options: [{
                        "key": 1,
                        "value": "option 1"
                    }, {
                        "key": 2,
                        "value": "option 2"
                    }, {
                        "key": 3,
                        "value": "option 3"
                    }, {
                        "key": 4,
                        "value": "option 4"
                    }]
                },
                labelStyles: {
                    textAlign: 'left',
                    fontStyle: '',
                    fontSize: 12,
                    fontFamily: '',
                    fontWeight: '',
                    textDecoration: '',
                    textTransform: '',
                    color: 'black'
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
                    display: '',
                    width: '',
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
                template: 'componentBuilder/components/MultiSelectCombo/settings.html'
            }, {
                title: 'Styles',
                template: 'componentBuilder/components/MultiSelectCombo/styles.html'
            }, {
                title: 'Combo Box Styles',
                template: 'componentBuilder/components/MultiSelectCombo/comboStyles.html'
            }, {
                title: 'Validations',
                template: 'componentBuilder/components/MultiSelectCombo/validations.html'
            }, {
                title: 'Conditions',
                template: 'componentBuilder/components/common/conditional.html'
            }]
        });
    }
]);

app.run(['$templateCache', function($templateCache) {
        $templateCache.put('componentBuilder/components/MultiSelectCombo.html', '<div   style="display:block;" ng-style="component.divStyles"><span ng-style="component.labelStyles"' +
            ' ng-bind="component.properties.label" ng-hide="component.properties.hideLabel"></span>' + '<select ' +
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
            ' conditional-validation ' +
            'data="data" ' +
            'component="component"' +
            'ng-style="component.comboStyles"' +
            '</select></div>');



        $templateCache.put('componentBuilder/components/MultiSelectCombo/settings.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="properties.label" type="text" display="Label"></form-builder-option>' +
            //'<form-builder-option property="properties.name" type="text" display="Name"></form-builder-option>' +
            //'<form-builder-option property="properties.id" type="text" display="ID"></form-builder-option>' +
            '<form-builder-option property="properties.model" type="text" display="Key"></form-builder-option>' +
            '<form-builder-option property="others.bootstrapGridClass" type="select"  display="Size" options="BOOTSTRAP_GRID_CLASSES" object_format="true"></form-builder-option>' +
            '<form-builder-option property="properties.options" type="options"  display="options"></form-builder-option>' +
            '<form-builder-option property="properties.hideLabel" type="checkbox"  display="Hide Label"></form-builder-option>' +
            '<form-builder-option property="properties.disabled" type="checkbox"  display="Is Disabled"></form-builder-option>' +
            '<form-builder-option property="properties.readonly" type="checkbox"  display="Is ReadOnly"></form-builder-option>' +
            '</div>'

        );


        $templateCache.put('componentBuilder/components/MultiSelectCombo/styles.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="labelStyles.textAlign" type="select" display="Text Align" options="TEXT_ALIGN_TYPES"></form-builder-option>' +
            '<form-builder-option property="labelStyles.color" type="color" display="Text Color"></form-builder-option>' +
            '<form-builder-option property="labelStyles.fontSize" type="number" display="Font Size"></form-builder-option>' +
            '<form-builder-option property="labelStyles.fontWeight" type="select" display="Label Weight" options="FONT_WEIGHT_TYPES"></form-builder-option>' +
            '<form-builder-option property="labelStyles.fontFamily" type="select" display="Font Family" options="FONT_TYPES"></form-builder-option>' +
            '<form-builder-option property="divStyles.backgroundColor" type="color" display="Background Color"></form-builder-option>' +
            '<form-builder-option property="divStyles.borderColor" type="color" display="Border Color"></form-builder-option>' +
            '<form-builder-option property="divStyles.marginLeft" type="number" display="Margin Left"></form-builder-option>' +
            '<form-builder-option property="divStyles.marginRight" type="number" display="Margin Right"></form-builder-option>' +
            '<form-builder-option property="divStyles.marginTop" type="number" display="Margin Top"></form-builder-option>' +
            '<form-builder-option property="divStyles.marginBottom" type="number" display="Margin Bottom"></form-builder-option>' +
            '<form-builder-option property="divStyles.paddingRight" type="number" display="Padding Right"></form-builder-option>' +
            '<form-builder-option property="divStyles.paddingLeft" type="number" display="Padding Left"></form-builder-option>' +
            '<form-builder-option property="divStyles.paddingTop" type="number" display="Padding Top"></form-builder-option>' +
            '<form-builder-option property="divStyles.paddingBottom" type="number" display="Padding Bottom"></form-builder-option>' +
            '<form-builder-option property="labelStyles.fontStyle" type="select" display="Font Style" options="FONT_STYLES"></form-builder-option>' +
            '<form-builder-option property="divStyles.width" type="number" display="Width"></form-builder-option>' +

            '</div>'

        );
        $templateCache.put('componentBuilder/components/MultiSelectCombo/comboStyles.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="comboStyles.paddingRight" type="number" display="Padding Right"></form-builder-option>' +
            '<form-builder-option property="comboStyles.paddingLeft" type="number" display="Padding Left"></form-builder-option>' +
            '<form-builder-option property="comboStyles.paddingTop" type="number" display="Padding Top"></form-builder-option>' +
            '<form-builder-option property="comboStyles.paddingBottom" type="number" display="Padding Bottom"></form-builder-option>' +
            '<form-builder-option property="comboStyles.height" type="number" display="height"></form-builder-option>' +
            '</div>'

        );
        $templateCache.put('componentBuilder/components/MultiSelectCombo/validations.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="validations.required" type="checkbox" display="Is Required"></form-builder-option>' +
            '</div>'

        );
    }



]);
