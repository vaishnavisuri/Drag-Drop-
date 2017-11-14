var app = angular.module('componentBuilder');
app.config([
    'componentsProvider',
    function(componentsProvider) {
        componentsProvider.addControl('selectCombo', {
            title: 'Select Combo',
            template: 'componentBuilder/components/selectCombo.html',
            icon: 'fa fa-caret-square-o-down',
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
                template: 'componentBuilder/components/selectCombo/settings.html'
            }, {
                title: 'Styles',
                template: 'componentBuilder/components/selectCombo/styles.html'
            }, {
                title: 'Validations',
                template: 'componentBuilder/components/selectCombo/validations.html'
            }, {
                title: 'Conditions',
                template: 'componentBuilder/components/common/conditional.html'
            }]
        });
    }
]);

app.run(['$templateCache', function($templateCache) {
        $templateCache.put('componentBuilder/components/selectCombo.html', '<div   style="display:block;" ng-style="component.divStyles"><span ng-style="component.labelStyles"' +
            ' ng-bind="component.properties.label" ng-hide="component.properties.hideLabel"></span>' + '<select ' +
            'class="form-control"' +
            'type="{{component.inputType }}"' +
            'id="{{ component.properties.id||component.componentId }}" ' +
            'name="{{ component.properties.name||component.componentId }}" ' +
           // 'ng-options="option.key as option.value for option in component.properties.options track by option.key"' +
            'ng-disabled="component.properties.disabled" ' +
            'ng-readonly="component.properties.readonly" ' +
            'ng-required="component.validations.required" ' +
            'ng-model="data[component.properties.model]"' +
            'conditional-validation ' +
            'data="data" ' +
            'component="component"> <option value="">select</option>'+
             '<option ng-repeat="option in component.properties.options" value={{option.key}}>{{option.value}}</select>' +
            '</select></div>');



        $templateCache.put('componentBuilder/components/selectCombo/settings.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="properties.label" type="text" display="Label"></form-builder-option>' +
            '<form-builder-option property="properties.name" type="text" display="Name"></form-builder-option>' +
            '<form-builder-option property="properties.id" type="text" display="ID"></form-builder-option>' +
            '<form-builder-option property="properties.model" type="text" display="Key"></form-builder-option>' +
            '<form-builder-option property="others.bootstrapGridClass" type="select"  display="Size" options="BOOTSTRAP_GRID_CLASSES" object_format="true"></form-builder-option>' +
            '<form-builder-option property="properties.options" type="options"  display="options"></form-builder-option>' +
            '<form-builder-option property="properties.hideLabel" type="checkbox"  display="Hide Label"></form-builder-option>' +
            '<form-builder-option property="properties.disabled" type="checkbox"  display="Is Disabled"></form-builder-option>' +
            '<form-builder-option property="properties.readonly" type="checkbox"  display="Is ReadOnly"></form-builder-option>' +
            '</div>'

        );


        $templateCache.put('componentBuilder/components/selectCombo/styles.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="labelStyles.textAlign" type="select" display="Text Align" options="TEXT_ALIGN_TYPES"></form-builder-option>' +
            '<form-builder-option property="labelStyles.color" type="color" display="Text Color"></form-builder-option>' +
            '<form-builder-option property="labelStyles.fontSize" type="number" display="Font Size"></form-builder-option>' +
            '<form-builder-option property="labelStyles.fontWeight" type="select" display="Font Weight" options="FONT_WEIGHT_TYPES"></form-builder-option>' +
            '<form-builder-option property="labelStyles.fontFamily" type="select" display="Font Family" options="FONT_TYPES"></form-builder-option>' +
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
            '<form-builder-option property="divStyles.width" type="number" display="Width"></form-builder-option>' +

            '</div>'

        );

        $templateCache.put('componentBuilder/components/selectCombo/validations.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="validations.required" type="checkbox" display="Is Required"></form-builder-option>' +
            '</div>'

        );
    }



]);
