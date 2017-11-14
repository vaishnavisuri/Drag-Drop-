var app = angular.module('componentBuilder');
app.config([
    'componentsProvider',
    function(componentsProvider) {
        componentsProvider.addControl('radioButton', {
            title: 'Radio Button',
            template: 'componentBuilder/components/radioButton.html',
            icon: 'fa fa-circle-o',
            settings: {
                icon: true,
                inputType: 'radio',
                inputMask: '',
                key: 'radioButton',
                isModelNeeded: true,
                properties: {
                    label: 'Radio Text',
                    name: '',
                    id: '',
                    value: '',
                    color: '',
                    defaultValue: false,
                    readonly: false,
                    disabled: false,
                    click: false,
                    show: true,
                    inline: false,
                    model: '',
                    icon: true,
                    hidden: false,
                    hideLabel: false,
                    bootstrapClass: '',
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
                    float: 'left',
                },
                labelStyles: {
                    color: '',
                    fontSize: '',
                    fontWeight: ''
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
                template: 'componentBuilder/components/radioButton/settings.html'
            }, {
                title: 'Styles',
                template: 'componentBuilder/components/radioButton/styles.html'
            }, {
                title: 'Validations',
                template: 'componentBuilder/components/radioButton/validations.html'
            }, {
                title: 'Conditions',
                template: 'componentBuilder/components/common/conditional.html'
            }]
        });
    }
]);

app.run(['$templateCache', function($templateCache) {
        $templateCache.put('componentBuilder/components/radioButton.html', '<div><p ng-style="component.labelStyles"' +
            'ng-bind="component.properties.label" ng-hide="component.properties.hideLabel"></p>' +
            '<div ng-repeat="option in component.properties.options" style="display:block;" ng-style="component.styles">' +
            '<input ' +
            'type="{{component.inputType }}"' +
            'id="{{ component.properties.id||component.componentId }}" ' +
            'name="{{ component.properties.name||component.componentId }}" ' +
            'ng-disabled="component.properties.disabled" ' +
            'ng-readonly="component.properties.readonly" ' +
            'ng-required="component.validations.required" ' +
            'ng-model="data[component.properties.model]"' +
            'ng-value="option.key" ' +
            'conditional-validation ' +
            'data="data" ' +
            'component="component"' +
            '><span ng-bind="option.value"></span></div></div>');



        $templateCache.put('componentBuilder/components/radioButton/settings.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="properties.label" type="text" display="Label"></form-builder-option>' +
            //'<form-builder-option property="properties.name" type="text" display="Name"></form-builder-option>' +
            //'<form-builder-option property="properties.id" type="text" display="ID"></form-builder-option>' +
            '<form-builder-option property="properties.model" type="text" display="Key"></form-builder-option>' +
            '<form-builder-option property="others.bootstrapGridClass" type="select"  display="Size" options="BOOTSTRAP_GRID_CLASSES" object_format="true"></form-builder-option>' +
            // '<form-builder-option property="properties.options" type="radio" [checked]="idx === 0" display="options" value="option.name"></form-builder-option>' +
            '<form-builder-option property="properties.options" type="options"  display="options"></form-builder-option>' +
            '<form-builder-option property="properties.hideLabel" type="checkbox"  display="Hide Label"></form-builder-option>' +
            '<form-builder-option property="properties.disabled" type="checkbox"  display="Is Disabled"></form-builder-option>' +
            '<form-builder-option property="properties.readonly" type="checkbox"  display="Is ReadOnly"></form-builder-option>' +
            '</div>'

        );


        $templateCache.put('componentBuilder/components/radioButton/styles.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="styles.textAlign" type="select" display="Text Align" options="TEXT_ALIGN_TYPES"></form-builder-option>' +
            '<form-builder-option property="styles.color" type="color" display="Options Color"></form-builder-option>' +
            '<form-builder-option property="styles.fontSize" type="number" display="Options Size"></form-builder-option>' +
            '<form-builder-option property="styles.fontWeight" type="select" display="Options Weight" options="FONT_WEIGHT_TYPES"></form-builder-option>' +
            '<form-builder-option property="labelStyles.color" type="color" display="Label Color"></form-builder-option>' +
            '<form-builder-option property="labelStyles.fontSize" type="number" display="Label Size"></form-builder-option>' +
            '<form-builder-option property="labelStyles.fontWeight" type="select" display="Label Weight" options="FONT_WEIGHT_TYPES"></form-builder-option>' +
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
            '<form-builder-option property="styles.width" type="select" display="Align" options="ALIGN_OPTIONS" object_format="true"></form-builder-option>' +
            '</div>'

        );

        $templateCache.put('componentBuilder/components/radioButton/validations.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="validations.required" type="checkbox" display="Is Required"></form-builder-option>' +
            '</div>'

        );
    }



]);
