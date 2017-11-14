var app = angular.module('componentBuilder');
app.config([
    'componentsProvider',
    function(componentsProvider) {
        componentsProvider.addControl('numberField', {
            title: 'Number Field',
            template: 'componentBuilder/components/numberField.html',
            icon: 'fa fa-minus',
            settings: {
                icon: true,
                tableView: true,
                inputType: 'number',
                backupType: 'number',
                inputMask: '',
                key: 'NumberField',
                hide: false,
                isModelNeeded: true,
                properties: {
                    label: 'Number',
                    placeholder: 'Enter Number',
                    name: '',
                    id: '',
                    model: '',
                    defaultValue: '',
                    readonly: false,
                    disabled: false,
                    hidden: false,
                    hideLabel: false,
                    bootstrapClass: ''

                },
                styles: {
                    color: '',
                    backgroundColor: 'white',
                    borderColor: '#ccc',
                    marginLeft: '',
                    marginRight: '',
                    marginTop: '',
                    marginBottom: '',
                    paddingLeft: '',
                    paddingRight: '',
                    paddingTop: '',
                    paddingBottom: '',
                },
                labelStyles: {
                    lableColor: '',
                    labelSize: '',
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
                validations: {
                    required: false,
                    max: '',
                    min: '',
                    pattern: ''
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
                    operator: '',
                    compareValue: ''
                }
            },
            configurations: [{
                show: true,
                title: 'Display',
                template: 'componentBuilder/components/numberField/settings.html'
            }, {
                title: 'Styles',
                template: 'componentBuilder/components/numberField/styles.html'
            }, {
                title: 'Validations',
                template: 'componentBuilder/components/numberField/validations.html'
            }, {
                title: 'Conditions',
                template: 'componentBuilder/components/common/conditional.html'
            }]
        });
    }
]);

app.run(['$templateCache', function($templateCache) {
        $templateCache.put('componentBuilder/components/numberField.html', '<div display="block" ng-style="component.divStyles"><span ng-style="component.labelStyles"' +
            'ng-bind="component.properties.label" ng-hide="component.properties.hideLabel"></span>' +
            '<input ' +
            'type="{{component.inputType}}"' +
            'class="form-control" ' +
            'id="{{ component.display.id||component.componentId }}" ' +
            'name="{{ component.display.name||component.componentId }}" ' +
            'ng-disabled="component.properties.disabled" ' +
            'ng-readonly="component.properties.readonly" ' +
            'ng-model="data[component.properties.model]"' +
            'ng-required="component.validations.required" ' +
            ' conditional-validation ' +
            'data="data" ' +
            'component="component"' +
            'ng-max="component.validations.max"' +
            'ng-min="component.validations.min"' +
            'ng-pattern="component.validations.pattern" ' +
            'ng-value="data[component.properties.model]||component.properties.defaultValue"' +
            'placeholder={{component.properties.placeholder}} ' +
            'ng-style="component.styles"' +
            '></div>');

        $templateCache.put('componentBuilder/components/numberField/settings.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="properties.label" type="text" display="Label"></form-builder-option>' +
            '<form-builder-option property="properties.placeholder" type="text" display="Placeholder"></form-builder-option>' +
            '<form-builder-option property="others.bootstrapGridClass" type="select"  display="Size" options="BOOTSTRAP_GRID_CLASSES" object_format="true"></form-builder-option>' +
            '<form-builder-option property="properties.model" type="text" display="Key"></form-builder-option>' +
            '<form-builder-option property="properties.hideLabel" type="checkbox"  display="Hide Label"></form-builder-option>' +
            '<form-builder-option property="properties.disabled" type="checkbox"  display="Is Disabled"></form-builder-option>' +
            '<form-builder-option property="properties.readonly" type="checkbox"  display="Is ReadOnly"></form-builder-option>' +

            '</div>'

        );


        $templateCache.put('componentBuilder/components/numberField/styles.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="styles.color" type="color" display="Color"></form-builder-option>' +
            '<form-builder-option property="labelStyles.color" type="color" display="Label Color"></form-builder-option>' +
            '<form-builder-option property="labelStyles.fontSize" type="number" display="Label Size"></form-builder-option>' +
            '<form-builder-option property="labelStyles.fontWeight" type="select" display="Label Weight" options="FONT_WEIGHT_TYPES"></form-builder-option>' +
            '<form-builder-option property="styles.backgroundColor" type="color" display="Background Color"></form-builder-option>' +
            '<form-builder-option property="styles.borderColor" type="color" display="Border Color"></form-builder-option>' +
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


        $templateCache.put('componentBuilder/components/numberField/validations.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="validations.min" type="number" display="Minimum Value"></form-builder-option>' +
            '<form-builder-option property="validations.max" type="number" display="Maximum Value"></form-builder-option>' +
            '<form-builder-option property="validations.required" type="checkbox" display="Is Required"></form-builder-option>' +
            '</div>'

        );
    }



]);
