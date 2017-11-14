var app = angular.module('componentBuilder');
app.config([
    'componentsProvider',
    function(componentsProvider) {
        componentsProvider.addCommonControl('label', {
            title: 'Label',
            template: 'componentBuilder/components/label.html',
            icon: 'fa fa-font',
            settings: {
                icon: true,
                inputType: 'label',
                inputMask: '',
                key: 'labelField',
                properties: {
                    label: 'Label',
                    labelSize: '',
                    labelColor: '',
                    name: '',
                    hidden: false,
                    hideLabel: false,
                },
                divStyles: {
                    color: 'black',
                    backgroundColor: '',
                    height: '',
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
                    textAlign: 'left',
                    fontStyle: '',
                    fontSize: 12,
                    fontFamily: '',
                    fontWeight: '',
                    textDecoration: '',
                    textTransform: '',
                    color: 'black'
                },
                others: {
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
                template: 'componentBuilder/components/label/settings.html'
            }, {
                title: 'Styles',
                template: 'componentBuilder/components/label/styles.html'
            }]
        });
    }
]);

app.run(['$templateCache', function($templateCache) {
        $templateCache.put('componentBuilder/components/label.html', '<div class="label"  style="display:block;" ng-style="component.divStyles">' +
            '<p  ng-style="component.labelStyles"' +
            ' ng-bind="component.properties.label" ng-hide="component.properties.hideLabel"></p></div>');



        $templateCache.put('componentBuilder/components/label/settings.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="properties.label" type="text" display="Label"></form-builder-option>' +
            '<form-builder-option property="others.bootstrapGridClass" type="select"  display="Size" options="BOOTSTRAP_GRID_CLASSES" object_format="true"></form-builder-option>' +
            '<form-builder-option property="properties.hideLabel" type="checkbox"  display="Hide Label"></form-builder-option>' +
            '</div>'

        );



        $templateCache.put('componentBuilder/components/label/styles.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="labelStyles.textAlign" type="select" display="Text Align" options="TEXT_ALIGN_TYPES"></form-builder-option>' +
            // '<form-builder-option property="divStyles.color" type="color" display="Text Color"></form-builder-option>' +
            '<form-builder-option property="labelStyles.color" type="color" display="Text Color"></form-builder-option>' +
            '<form-builder-option property="labelStyles.fontSize" type="number" display="Font Size"></form-builder-option>' +
            '<form-builder-option property="labelStyles.fontWeight" type="select" display="Label Weight" options="FONT_WEIGHT_TYPES"></form-builder-option>' +
            '<form-builder-option property="labelStyles.fontFamily" type="select" display="Font Family" options="FONT_TYPES"></form-builder-option>' +
            '<form-builder-option property="divStyles.backgroundColor" type="color" display="Background Color"></form-builder-option>' +
            '<form-builder-option property="labelStyles.fontStyle" type="select" display="Font Style" options="FONT_STYLES"></form-builder-option>' +
            '<form-builder-option property="labelStyles.textDecoration" type="select" display="Text Decoration" options="TEXT_DECORATION_TYPES"></form-builder-option>' +
            '<form-builder-option property="labelStyles.textTransform" type="select" display="Text Transform" options="TEXT_TRANSFORM_TYPES"></form-builder-option>' +
            '<form-builder-option property="divStyles.height" type="number" display="Height"></form-builder-option>' +
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
    }



]);
