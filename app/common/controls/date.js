var app = angular.module('componentBuilder');
app.config([
    'componentsProvider',
    function(componentsProvider) {
        componentsProvider.addControl('date', {
            title: 'Date',
            template: 'componentBuilder/components/date.html',
            icon: 'fa fa-calendar',
            settings: {
                icon: true,
                tableView: true,
                inputType: 'text',
                inputMask: '',
                key: 'time',
                isModelNeeded: true,
                properties: {
                    label: 'Date',
                    placeholder: 'Enter text',
                    name: '',
                    id: '',
                    model: '',
                    labelSize: '',
                    labelColor: '',
                    defaultValue: '',
                    readonly: false,
                    disabled: false,
                    hidden: false,
                    hideLabel: false,
                    bootstrapClass: '',
                    format: 'MM/dd/yyyy'
                },
                styles: {
                    color: '',
                    backgroundColor: 'white',
                    borderColor: '#ccc',
                    fontSize: '',
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
                validations: {
                    required: false,
                    minDate: '',
                    maxDate: '',
                    pattern: '',

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
                special: {
                    isOpen: '',
                }
            },
            configurations: [{
                show: true,
                title: 'Display',
                template: 'componentBuilder/components/date/settings.html'
            }, {
                title: 'Styles',
                template: 'componentBuilder/components/date/styles.html'
            }, {
                title: 'Validations',
                template: 'componentBuilder/components/date/validations.html'
            }, {
                title: 'Conditions',
                template: 'componentBuilder/components/common/conditional.html'
            }]
        });
    }
]);

app.run(['$templateCache', function($templateCache) {
        $templateCache.put('componentBuilder/components/date.html', '<div display="block" ng-style="component.divStyles"><span ng-style="component.labelStyles"' +
            'ng-bind="component.properties.label" ng-hide="component.properties.hideLabel"></span>' +
            '<p class="input-group">' +
            '<input type="text" class="form-control"' +
            'id="{{component.display.id||component.componentId }}"' +
            'name="{{component.display.name||component.componentId }}"' +
            'datetime-picker="{{component.properties.format}}"' +
            'ng-disabled="component.properties.disabled"' +
            'ng-readonly="component.properties.readonly"' +
            'ng-model="data[component.properties.model]" ' +
            'is-open="component.special.isOpen"' +
            'ng-required="component.validations.required"' +
            'ng-pattern="component.validations.pattern"' +
            'enable-time="false"' +
            'ng-style="component.styles"'+
            'save-as="ISO" '+
            'read-as="true"/>' +
            '<span class="input-group-btn">' +
            '<button type="button" ng-disabled="component.properties.disabled" ng-readonly="component.properties.readonly" class="btn btn-default" ng-click="component.special.isOpen=!component.special.isOpen"><i class="fa fa-calendar"></i></button> </span>' +

            '</p></div>');



        $templateCache.put('componentBuilder/components/date/settings.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="properties.label" type="text" display="Label"></form-builder-option>' +
            //'<form-builder-option property="properties.name" type="text" display="Name"></form-builder-option>' +
            //'<form-builder-option property="properties.id" type="text" display="ID"></form-builder-option>' +
            '<form-builder-option property="others.bootstrapGridClass" type="select"  display="Size" options="BOOTSTRAP_GRID_CLASSES" object_format="true"></form-builder-option>' +
            '<form-builder-option property="properties.model" type="text" display="Key"></form-builder-option>' +
            '<form-builder-option property="properties.format" type="select" display="Format" options="DATE_FORMATS"></form-builder-option>' +
            '<form-builder-option property="properties.hideLabel" type="checkbox"  display="Hide Label"></form-builder-option>' +
            '<form-builder-option property="properties.disabled" type="checkbox"  display="Is Disabled"></form-builder-option>' +
            '</div>'

        );


        $templateCache.put('componentBuilder/components/date/styles.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="styles.color" type="color" display="Text Color"></form-builder-option>' +
            '<form-builder-option property="styles.backgroundColor" type="color" display="Background Color"></form-builder-option>' +
            '<form-builder-option property="styles.borderColor" type="color" display="Border Color"></form-builder-option>' +
            '<form-builder-option property="styles.fontSize" type="select" display="Font Size" options="FONT_TYPES"></form-builder-option>' +
            '<form-builder-option property="labelStyles.color" type="color" display="Label Color"></form-builder-option>' +
            '<form-builder-option property="labelStyles.fontSize" type="number" display="Label Size"></form-builder-option>' +
            '<form-builder-option property="labelStyles.fontWeight" type="select" display="Label Weight" options="FONT_WEIGHT_TYPES"></form-builder-option>' +
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


        $templateCache.put('componentBuilder/components/date/validations.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="validations.required" type="checkbox" display="Is Required"></form-builder-option>' +

            '</div>'

        );
    }



]);
