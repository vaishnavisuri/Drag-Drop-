var app = angular.module('componentBuilder');
app.config([
    'componentsProvider',
    function(componentsProvider) {
        componentsProvider.addControl('textarea', {
            title: 'Text Area',
            template: 'componentBuilder/components/textarea.html',
            icon: 'fa fa-square-o',
            settings: {
                input: true,
                tableView: true,
                inputType: 'textarea',
                label: 'text area',
                isModelNeeded: true,
                key: 'TextArea',
                properties: {
                    label: 'Text',
                    labelSize: '',
                    labelColor: '',
                    placeholder: 'Enter text',
                    name: '',
                    id: '',
                    rows: '',
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
                    backgroundColor: '',
                    borderColor: '',
                    marginLeft: '',
                    marginRight: 5,
                    marginTop: '',
                    marginBottom: '',
                    paddingLeft: '',
                    paddingRight: '',
                    paddingTop: '',
                    paddingBottom: ''
                },
                labelStyles: {
                    color: '',
                    fontSize: '',
                    fontWeight: ''
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
                    maxLength: '',
                    minLength: '',
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
                    eq: ''
                }
            },
            configurations: [{
                show: true,
                title: 'Display',
                template: 'componentBuilder/components/textarea/settings.html'
            }, {
                title: 'Styles',
                template: 'componentBuilder/components/textarea/styles.html'
            }, {
                title: 'Validations',
                template: 'componentBuilder/components/textarea/validations.html'
            }, {
                title: 'Conditions',
                template: 'componentBuilder/components/common/conditional.html'
            }]
        });
    }
]);
app.run(['$templateCache', function($templateCache) {
    $templateCache.put('componentBuilder/components/textarea.html', '<div display="block" ng-style="component.divStyles"><span ng-style="component.labelStyles"' +
        'ng-bind="component.properties.label" ng-hide="component.properties.hideLabel"></span>' +
        '<textarea ' +
        'class="form-control"' +
        'ng-model="data[component.properties.model]"' +
        'ng-disabled="component.properties.disabled"' +
        'ng-required="component.validations.required" ' +
        'ng-readonly="component.properties.readonly" ' +
        'ng-minlength="component.validations.minLength" ' +
        'ng-maxlength="component.validations.maxLength" ' +
        'ng-pattern="component.validations.pattern" ' +
        'safe-multiple-to-single' +
        'id="{{ component.display.id||component.componentId }}"' +
        'name="{{ component.display.name||component.componentId }}"' +
        'tabindex="{{ component.tabindex || 0 }}"' +
        'placeholder="{{ component.properties.placeholder }}"' +
        'rows="{{component.properties.rows}}"' +
        'ng-style="component.styles"' +
        ' conditional-validation ' +
        'data="data" ' +
        'component="component"' +
        '></textarea></div>');

    $templateCache.put('componentBuilder/components/textarea/settings.html',
        '<div class="formBuilderOptions">' +
        '<form-builder-option property="properties.label" type="text" display="Label"></form-builder-option>' +
        '<form-builder-option property="properties.rows" type="number" display="Rows"></form-builder-option>' +
        '<form-builder-option property="properties.placeholder" type="text" display="Placeholder"></form-builder-option>' +
        //'<form-builder-option property="properties.name" type="text" display="Name"></form-builder-option>' +
        //'<form-builder-option property="properties.id" type="text" display="ID"></form-builder-option>' +
        '<form-builder-option property="properties.model" type="text" display="Key"></form-builder-option>' +
        '<form-builder-option property="others.bootstrapGridClass" type="select"  display="Size" options="BOOTSTRAP_GRID_CLASSES" object_format="true"></form-builder-option>' +
        '<form-builder-option property="properties.hideLabel" type="checkbox"  display="Hide Label"></form-builder-option>' +
        '<form-builder-option property="properties.disabled" type="checkbox"  display="Is Disabled"></form-builder-option>' +
        '<form-builder-option property="properties.readonly" type="checkbox"  display="Is ReadOnly"></form-builder-option>' +
        '</div>'

    );
    $templateCache.put('componentBuilder/components/textarea/styles.html',
        '<div class="formBuilderOptions">' +
        '<form-builder-option property="styles.color" type="color" display="Text Color"></form-builder-option>' +
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
    $templateCache.put('componentBuilder/components/textarea/validations.html',
        '<div class="formBuilderOptions">' +
        '<form-builder-option property="validations.minLength" type="number" display="Minimum Length"></form-builder-option>' +
        '<form-builder-option property="validations.maxLength" type="number" display="Maximum Length"></form-builder-option>' +
        '<form-builder-option property="validations.pattern" type="text" display="Pattern"></form-builder-option>' +
        '<form-builder-option property="validations.required" type="checkbox" display="Is Required"></form-builder-option>' +

        '</div>'

    );

}]);
