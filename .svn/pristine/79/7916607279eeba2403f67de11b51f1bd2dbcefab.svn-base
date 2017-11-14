var app = angular.module('componentBuilder');
app.config([
    'componentsProvider',
    function(componentsProvider) {
        componentsProvider.addControl('checkBox', {
            title: 'Check Box',
            template: 'componentBuilder/components/checkBox.html',
            icon: 'fa fa-check-square-o',
            settings: {
                icon: true,
                inputType: 'checkbox',
                inputMask: '',
                key: 'checkBox',
                isModelNeeded: true,
                properties: {
                    label: 'Option',
                    name: '',
                    id: '',
                    labelSize: '',
                    labelColor: '',
                    defaultValue: false,
                    readonly: false,
                    disabled: false,
                    model: '',
                    hidden: true,
                    hideLabel: false,
                    bootstrapClass: ''
                },
                styles: {
                    textAlign: '',
                    fontStyle: '',
                    fontSize: '',
                    fontFamily: '',
                    fontWeight: '',
                    color: '',
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
                    display: '',
                    width: '',
                    float: 'left'
                },

                others: {
                    bootstrapGridClass: ''
                },
                validations: {
                    required: false,
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
                template: 'componentBuilder/components/checkBox/settings.html'
            }, {
                title: 'Styles',
                template: 'componentBuilder/components/checkBox/styles.html'
            }, {
                title: 'Validations',
                template: 'componentBuilder/components/checkBox/validations.html'
            }, {
                title: 'Conditions',
                template: 'componentBuilder/components/common/conditional.html'
            }]
        });
    }
]);

app.run(['$templateCache', function($templateCache) {
        $templateCache.put('componentBuilder/components/checkBox.html', '<div  style="display:block;" ng-style="component.styles"><span' +
            ' ng-bind="component.properties.label" ng-hide="component.properties.hideLabel" mandatory></span>' + '<input ' +
            'type="{{component.inputType }}" ' +
            'id="{{ component.properties.id||component.componentId }}" ' +
            'name="{{ component.properties.name||component.componentId }}" ' +
            'ng-disabled="component.properties.disabled" ' +
            'ng-readonly="component.properties.readonly" ' +
            'ng-required="component.validations.required" ' +
            'ng-model="data[component.properties.model]" ' +
            'ng-value="component.properties.defaultValue" ' +
            'ng-style="component.styles"' +
            'conditional-validation ' +
            'data="data" ' +
            'component="component"' +
            '></div>');



        $templateCache.put('componentBuilder/components/checkBox/settings.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="properties.label" type="text" display="Label"></form-builder-option>' +
            //'<form-builder-option property="properties.name" type="text" display="Name"></form-builder-option>' +
            '<form-builder-option property="properties.defaultValue" type="text" display="Default Value"></form-builder-option>' +
            //'<form-builder-option property="properties.id" type="text" display="ID"></form-builder-option>' +
            '<form-builder-option property="properties.model" type="text" display="Key"></form-builder-option>' +
            '<form-builder-option property="others.bootstrapGridClass" type="select"  display="Size" options="BOOTSTRAP_GRID_CLASSES" object_format="true"></form-builder-option>' +
            '<form-builder-option property="properties.hideLabel" type="checkbox"  display="Hide Label"></form-builder-option>' +
            '<form-builder-option property="properties.disabled" type="checkbox"  display="Is Disabled"></form-builder-option>' +
            '<form-builder-option property="properties.readonly" type="checkbox"  display="Is ReadOnly"></form-builder-option>' +
            '</div>'

        );


        $templateCache.put('componentBuilder/components/checkBox/styles.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="styles.textAlign" type="select" display="Text Align" options="TEXT_ALIGN_TYPES"></form-builder-option>' +
            '<form-builder-option property="styles.color" type="color" display="Text Color"></form-builder-option>' +
            '<form-builder-option property="styles.fontSize" type="number" display="Font Size"></form-builder-option>' +
            '<form-builder-option property="styles.fontWeight" type="select" display="Font Weight" options="FONT_WEIGHT_TYPES"></form-builder-option>' +
            '<form-builder-option property="styles.fontFamily" type="select" display="Font Family" options="FONT_TYPES"></form-builder-option>' +
            '<form-builder-option property="styles.backgroundColor" type="color" display="Background Color"></form-builder-option>' +
            '<form-builder-option property="styles.marginLeft" type="number" display="Margin Left"></form-builder-option>' +
            '<form-builder-option property="styles.marginRight" type="number" display="Margin Right"></form-builder-option>' +
            '<form-builder-option property="styles.marginTop" type="number" display="Margin Top"></form-builder-option>' +
            '<form-builder-option property="styles.marginBottom" type="number" display="Margin Bottom"></form-builder-option>' +
            '<form-builder-option property="styles.paddingRight" type="number" display="Padding Right"></form-builder-option>' +
            '<form-builder-option property="styles.paddingLeft" type="number" display="Padding Left"></form-builder-option>' +
            '<form-builder-option property="styles.paddingTop" type="number" display="Padding Top"></form-builder-option>' +
            '<form-builder-option property="styles.paddingBottom" type="number" display="Padding Bottom"></form-builder-option>' +
            '<form-builder-option property="styles.fontStyle" type="select" display="Font Style" options="FONT_STYLES"></form-builder-option>' +
            '<form-builder-option property="styles.width" type="number" display="Width"></form-builder-option>' +
            '</div>'

        );

        $templateCache.put('componentBuilder/components/checkBox/validations.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="validations.required" type="checkbox" display="Is Required"></form-builder-option>' +
            '</div>'

        );
    }



]);
