var app = angular.module('componentBuilder');
app.config([
    'componentsProvider',
    function(componentsProvider) {
        componentsProvider.addControl('multiSelectScoreCheckbox', {
            title: 'Score  Multi Check',
            template: 'componentBuilder/components/multiSelectScoreCheckbox.html',
            icon: 'fa fa-check-square-o',
            isScoreType:true,
            settings: {
                icon: true,
                inputType: 'checkbox',
                inputMask: '',
                key: 'multiSelectScoreCheckbox',
                isModelNeeded: true,
               isScoreModelNeeded:true,
                properties: {
                    label: 'Check Box Text',
                    name: '',
                    id: '',
                    value: '',
                    labelSize: '',
                    labelColor: '',
                    defaultValue: false,
                    readonly: false,
                    disabled: false,
                    isScoreDisabled:false,
                    click: false,
                    show: true,
                    inline: false,
                    model: '',
                    icon: true,
                    hidden: false,
                    hideLabel: false,
                    bootstrapClass: '',
                    scoreType:'sum',
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
                divstyles: {
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
                checkBoxStyles:{
                    color: '',
                    fontSize: '',
                    fontWeight:'',
                    marginLeft: '',
                    marginRight: '',
                    marginTop: '',
                    backgroundColor:'',
                    marginBottom: '',
                    display:'inline'
                },
                scoreStyles:{
                  width:100,
                  marginLeft: 10,
                  marginRight:'',
                  marginTop: '',
                  marginBottom: '',
                  display:'inline'
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
                template: 'componentBuilder/components/multiSelectScoreCheckbox/settings.html'
            }, {
                title: 'Styles - Label',
                template: 'componentBuilder/components/multiSelectScoreCheckbox/stylesLabel.html'
            },{
                title: 'Styles - Checkbox',
                template: 'componentBuilder/components/multiSelectScoreCheckbox/stylesCheckbox.html'
            },
            {
                title: 'Styles - Score',
                template: 'componentBuilder/components/multiSelectScoreCheckbox/stylesScore.html'
            }, {
                title: 'Validations',
                template: 'componentBuilder/components/multiSelectScoreCheckbox/validations.html'
            }, {
                title: 'Conditions',
                template: 'componentBuilder/components/common/conditional.html'
            }]
        });
    }
]);

app.run(['$templateCache', function($templateCache) {
        $templateCache.put('componentBuilder/components/multiSelectScoreCheckbox.html', '<div><p ng-style="component.labelStyles"' +
            'ng-bind="component.properties.label" ng-hide="component.properties.hideLabel"></p>' + 
            '<multi-select-score-checkbox component="component" options="component.properties.options" score-styles="component.scoreStyles" check-box-styles="component.checkBoxStyles" selected-data = "data[component.properties.model]" styles="component.styles" score="data[component.properties.scoreModel]" is-score-disabled="component.properties.isScoreDisabled"></multi-select-score-checkbox>' +
            '</div>');



        $templateCache.put('componentBuilder/components/multiSelectScoreCheckbox/settings.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="properties.label" type="text" display="Label"></form-builder-option>' +
            '<form-builder-option property="properties.model" type="text" display="Key"></form-builder-option>' +
            '<form-builder-option property="properties.scoreModel" type="text" display="Score Key"></form-builder-option>' +
            '<form-builder-option property="others.bootstrapGridClass" type="select"  display="Size" options="BOOTSTRAP_GRID_CLASSES" object_format="true"></form-builder-option>' +
             '<form-builder-option property="properties.scoreType" type="select"  display="Score Type" options="SCORE_TYPE"></form-builder-option>' +
            '<form-builder-option property="properties.options" type="score_options"  display="options"></form-builder-option>' +
            '<form-builder-option property="properties.hideLabel" type="checkbox"  display="Hide Label"></form-builder-option>' +
            '<form-builder-option property="properties.disabled" type="checkbox"  display="Is Disabled"></form-builder-option>' +
            '<form-builder-option property="properties.readonly" type="checkbox"  display="Is ReadOnly"></form-builder-option>' +
            '<form-builder-option property="properties.isScoreDisabled" type="checkbox"  display="Is Score Disabled"></form-builder-option>' +
            '</div>'

        );

       
        $templateCache.put('componentBuilder/components/multiSelectScoreCheckbox/stylesLabel.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="labelStyles.color" type="color" display="Text Color"></form-builder-option>' +
            '<form-builder-option property="labelStyles.backgroundColor" type="color" display="Background Color"></form-builder-option>' +
            '<form-builder-option property="labelStyles.fontSize" type="number" display="Font Size"></form-builder-option>' +
            '<form-builder-option property="labelStyles.fontWeight" type="number" display="Font Weight"></form-builder-option>' +
            '<form-builder-option property="labelStyles.marginLeft" type="number" display="Margin Left"></form-builder-option>' +
            '<form-builder-option property="labelStyles.marginRight" type="number" display="Margin Right"></form-builder-option>' +
            '<form-builder-option property="labelStyles.marginTop" type="number" display="Margin Top"></form-builder-option>' +
            '<form-builder-option property="labelStyles.marginBottom" type="number" display="Margin Bottom"></form-builder-option>' 
           

        );
        $templateCache.put('componentBuilder/components/multiSelectScoreCheckbox/stylesCheckbox.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="checkBoxStyles.color" type="color" display="Text Color"></form-builder-option>' +
            '<form-builder-option property="checkBoxStyles.backgroundColor" type="color" display="Background Color"></form-builder-option>' +
            '<form-builder-option property="checkBoxStyles.fontSize" type="number" display="Font Size"></form-builder-option>' +
            '<form-builder-option property="checkBoxStyles.fontWeight" type="number" display="Font Weight"></form-builder-option>' +
            '<form-builder-option property="checkBoxStyles.marginLeft" type="number" display="Margin Left"></form-builder-option>' +
            '<form-builder-option property="checkBoxStyles.marginRight" type="number" display="Margin Right"></form-builder-option>' +
            '<form-builder-option property="checkBoxStyles.marginTop" type="number" display="Margin Top"></form-builder-option>' +
            '<form-builder-option property="checkBoxStyles.marginBottom" type="number" display="Margin Bottom"></form-builder-option>' +
            '<form-builder-option property="checkBoxStyles.display" type="select" options="DISPLAY_OPTIONS" object_format="true"></form-builder-option>' 
    
        );
        $templateCache.put('componentBuilder/components/multiSelectScoreCheckbox/stylesScore.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="scoreStyles.width" type="number" display="Font Weight"></form-builder-option>' +
            '<form-builder-option property="scoreStyles.marginLeft" type="number" display="Margin Left"></form-builder-option>' +
            '<form-builder-option property="scoreStyles.marginRight" type="number" display="Margin Right"></form-builder-option>' +
            '<form-builder-option property="scoreStyles.marginTop" type="number" display="Margin Top"></form-builder-option>' +
            '<form-builder-option property="scoreStyles.marginBottom" type="number" display="Margin Bottom"></form-builder-option>' +
            '<form-builder-option property="scoreStyles.display" type="select" options="DISPLAY_OPTIONS" object_format="true" display="Display"></form-builder-option>' 
    
        );

        $templateCache.put('componentBuilder/components/multiSelectScoreCheckbox/styles.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="checkBoxStyles.textAlign" type="select" display="Text Align" options="TEXT_ALIGN_TYPES"></form-builder-option>' +
            '<form-builder-option property="checkBoxStyles.color" type="color" display="Text Color"></form-builder-option>' +
            '<form-builder-option property="checkBoxStyles.fontSize" type="number" display="Font Size"></form-builder-option>' +
            '<form-builder-option property="checkBoxStyles.fontWeight" type="select" display="Text Weight" options="FONT_WEIGHT_TYPES"></form-builder-option>' +
            '<form-builder-option property="checkBoxStyles.display" type="select" display="Display" options="DISPLAY_OPTIONS" object_format="true"></form-builder-option>' +
            '<form-builder-option property="labelStyles.color" type="color" display="Label Color"></form-builder-option>' +
            '<form-builder-option property="labelStyles.fontSize" type="number" display="Label Size"></form-builder-option>' +
            '<form-builder-option property="labelStyles.fontWeight" type="select" display="Label Weight" options="FONT_WEIGHT_TYPES"></form-builder-option>' +
            '<form-builder-option property="divstyles.fontFamily" type="select" display="Font Family" options="FONT_TYPES"></form-builder-option>' +
            '<form-builder-option property="divstyles.backgroundColor" type="color" display="Background Color"></form-builder-option>' +
            '<form-builder-option property="divstyles.marginLeft" type="number" display="Margin Left"></form-builder-option>' +
            '<form-builder-option property="divstyles.marginRight" type="number" display="Margin Right"></form-builder-option>' +
            '<form-builder-option property="divstyles.marginTop" type="number" display="Margin Top"></form-builder-option>' +
            '<form-builder-option property="divstyles.marginBottom" type="number" display="Margin Bottom"></form-builder-option>' +
            '<form-builder-option property="divstyles.paddingRight" type="number" display="Padding Right"></form-builder-option>' +
            '<form-builder-option property="divstyles.paddingLeft" type="number" display="Padding Left"></form-builder-option>' +
            '<form-builder-option property="divstyles.paddingTop" type="number" display="Padding Top"></form-builder-option>' +
            '<form-builder-option property="divstyles.paddingBottom" type="number" display="Padding Bottom"></form-builder-option>' +
            '<form-builder-option property="divstyles.fontStyle" type="select" display="Font Style" options="FONT_STYLES"></form-builder-option>' +
            '<form-builder-option property="divstyles.width" type="select" display="Align" options="ALIGN_OPTIONS" object_format="true"></form-builder-option>' +
            '<form-builder-option property="divstyles.paddingTop" type="number" display="Padding Top"></form-builder-option>' +
            '<form-builder-option property="scoreStyles.width" type="number" display="Score Width"></form-builder-option>' +
            '<form-builder-option property="scoreStyles.marginLeft" type="number" display="score Margin Left" options="FONT_STYLES"></form-builder-option>' +
            '<form-builder-option property="scoreStyles.marginRight" type="number" display="score Margin Right" options="FONT_STYLES"></form-builder-option>' +
            '<form-builder-option property="scoreStyles.marginTop" type="number" display="score Margin Top" options="FONT_STYLES"></form-builder-option>' +
            '<form-builder-option property="scoreStyles.marginBottom" type="number" display="score Margin Bottom" options="FONT_STYLES"></form-builder-option>' +
          
            '</div>'

        );

        $templateCache.put('componentBuilder/components/multiSelectScoreCheckbox/validations.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="validations.required" type="checkbox" display="Is Required"></form-builder-option>' +
            '</div>'

        );
    }



]);
