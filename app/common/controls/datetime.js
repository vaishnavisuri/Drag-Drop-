var app = angular.module('componentBuilder');
app.config([
    'componentsProvider',
    function(componentsProvider) {
        componentsProvider.addControl('datetime', {
            title: 'Date & Time',
            template: 'componentBuilder/components/datetime.html',
            icon: 'fa fa-calendar-minus-o',
            settings: {
                icon: true,
                tableView: true,
                inputType: 'text',
                inputMask: '',
                key: 'datetime',
                isModelNeeded: true,
                properties: {
                    label: 'DateTime',
                    labelSize: '',
                    labelColor: '',
                    placeholder: 'Enter text',
                    name: '',
                    id: '',
                    model: '',
                    defaultValue: '',
                    readonly: false,
                    disabled: false,
                    hidden: false,
                    hideLabel: false,
                    bootstrapClass: '',
                    format: 'MM/dd/yyyy HH:mm'
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
                template: 'componentBuilder/components/datetime/settings.html'
            }, {
                title: 'Styles',
                template: 'componentBuilder/components/datetime/styles.html'
            }, {
                title: 'Validations',
                template: 'componentBuilder/components/datetime/validations.html'
            }, {
                title: 'Conditions',
                template: 'componentBuilder/components/common/conditional.html'
            }]
        });
    }
]);

app.run(['$templateCache', function($templateCache) {
        $templateCache.put('componentBuilder/components/datetime.html', '<div display="block" ng-style="component.divStyles"><span ng-style="component.labelStyles"' +
            'ng-bind="component.properties.label" ng-hide="component.properties.hideLabel"></span>' +
            '<p class="input-group">' +
            '<input type="text" class="form-control"' +
            'id="{{component.display.id||component.componentId }}"' +
            'name="{{component.display.name||component.componentId }}"' +
            'datetime-picker="{{component.properties.format}}"' +
            'ng-disabled="component.properties.disabled"' +
            'ng-readonly="component.properties.readonly"' +
            'ng-model="data[component.properties.model]"' +
            'is-open="component.special.isOpen"' +
            'ng-required="component.validations.required"' +
            'ng-pattern="component.validations.pattern"' +
            'ng-style="component.styles"' +
            'save-as="ISO" '+
            'read-as="true" />'+
            '<span class="input-group-btn">' +
            '<button type="button" ng-disabled="component.properties.disabled" ng-readonly="component.properties.readonly" class="btn btn-default" ng-click="component.special.isOpen=!component.special.isOpen"><i class="fa fa-calendar"></i></button> </span>' +
            '</p></div>');



        $templateCache.put('componentBuilder/components/datetime/settings.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="properties.label" type="text" display="Label"></form-builder-option>' +
            '<form-builder-option property="properties.name" type="text" display="Name"></form-builder-option>' +
            '<form-builder-option property="properties.id" type="text" display="ID"></form-builder-option>' +
            '<form-builder-option property="others.bootstrapGridClass" type="select"  display="Size" options="BOOTSTRAP_GRID_CLASSES" object_format="true"></form-builder-option>' +
            '<form-builder-option property="properties.model" type="text" display="Key"></form-builder-option>' +
            '<form-builder-option property="properties.format" type="select" display="Format" options="DATE_TIME_FORMATS"></form-builder-option>' +
            '<form-builder-option property="divStyles.marginLeft" type="number" display="Margin Left"></form-builder-option>' +
            '<form-builder-option property="divStyles.marginRight" type="number" display="Margin Right"></form-builder-option>' +
            '<form-builder-option property="divStyles.marginTop" type="number" display="Margin Top"></form-builder-option>' +
            '<form-builder-option property="divStyles.marginBottom" type="number" display="Margin Bottom"></form-builder-option>' +
            '<form-builder-option property="divStyles.paddingRight" type="number" display="Padding Right"></form-builder-option>' +
            '<form-builder-option property="divStyles.paddingLeft" type="number" display="Padding Left"></form-builder-option>' +
            '<form-builder-option property="divStyles.paddingTop" type="number" display="Padding Top"></form-builder-option>' +
            '<form-builder-option property="divStyles.paddingBottom" type="number" display="Padding Bottom"></form-builder-option>' +
            '<form-builder-option property="properties.hideLabel" type="checkbox"  display="Hide Label"></form-builder-option>' +
            '<form-builder-option property="properties.disabled" type="checkbox"  display="Is Disabled"></form-builder-option>' +
            '</div>'

        );


        $templateCache.put('componentBuilder/components/datetime/styles.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="styles.color" type="color" display="Text Color"></form-builder-option>' +
            '<form-builder-option property="styles.backgroundColor" type="color" display="Background Color"></form-builder-option>' +
            '<form-builder-option property="styles.borderColor" type="color" display="Border Color"></form-builder-option>' +
            '<form-builder-option property="styles.fontSize" type="select" display="Font Size" options="FONT_TYPES"></form-builder-option>' +
            '<form-builder-option property="labelStyles.color" type="color" display="Label Color"></form-builder-option>' +
            '<form-builder-option property="labelStyles.fontSize" type="number" display="Label Size"></form-builder-option>' +
            '<form-builder-option property="labelStyles.fontWeight" type="select" display="Label Weight" options="FONT_WEIGHT_TYPES"></form-builder-option>' +
            '</div>'

        );


        $templateCache.put('componentBuilder/components/datetime/validations.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="validations.required" type="checkbox" display="Is Required"></form-builder-option>' +
            '</div>'

        );
    }



]);
