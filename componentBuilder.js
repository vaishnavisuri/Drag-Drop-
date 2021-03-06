angular.module('componentBuilder', ['ui.router', 'ui.bootstrap', 'ui.grid', 'ui.grid.pagination', 'ui.grid.edit', 'ui.grid.selection', 'ui.grid.rowEdit', 'ui.grid.cellNav', 'dndLists', 'ui.bootstrap.datetimepicker','ngSlimScroll'])
    .controller('ComponentBuilderMainController', ['$rootScope', '$scope', '$http', '$location', function($rootScope, $scope, $http, $location) {

         $scope.data={"multi_check_Sample1":[{"key":1,"value":"option 1","$$hashKey":"object:430"},{"key":2,"value":"option 2","$$hashKey":"object:431","selected":true},{"key":3,"value":"option 3","$$hashKey":"object:432"},{"key":4,"value":"option 4","$$hashKey":"object:433"}],"checkbox1":true,"date12_sample":"2017-11-08T18:30:00.000Z","date_Time_Sample1":"2017-11-08T07:42:39.676Z","multi_select_Sample1":[{"key":3,"value":"option 3"}],"number_sample_1":23,"radio_Sample_1":2,"select_Sample_1":"2","textarea_Sample_1":"test2","time_Sample_1":"2017-11-04T07:42:58.006Z","text_field_Sample_1":"test2"};
$scope.json1=[{
  "title": "checkbox1",
  "template": "componentBuilder/components/checkBox.html",
  "icon": "fa fa-check-square-o",
  "settings": {
    "icon": true,
    "inputType": "checkbox",
    "inputMask": "",
    "key": "checkBox",
    "isModelNeeded": true,
    "properties": {
      "label": "is New Form",
      "name": "checkBox39411",
      "id": "checkBox39411",
      "labelSize": "",
      "labelColor": "",
      "defaultValue": false,
      "readonly": false,
      "disabled": false,
      "model": "checkbox1",
      "hidden": true,
      "hideLabel": false,
      "bootstrapClass": ""
    },
    "styles": {
      "textAlign": "",
      "fontStyle": "",
      "fontSize": "",
      "fontFamily": "",
      "fontWeight": "",
      "color": "",
      "backgroundColor": "",
      "customCss": "",
      "customClass": "",
      "marginLeft": "",
      "marginRight": 5,
      "marginTop": "",
      "marginBottom": "",
      "paddingLeft": "",
      "paddingRight": "",
      "paddingTop": "",
      "paddingBottom": "",
      "display": "",
      "width": "",
      "float": "left"
    },
    "others": {
      "bootstrapGridClass": ""
    },
    "validations": {
      "required": false
    },
    "conditional": {
      "show": null,
      "when": null,
      "eq": ""
    },
    "type": "checkBox"
  },
  "configurations": [{
    "show": true,
    "title": "Display",
    "template": "componentBuilder/components/checkBox/settings.html",
    "$$hashKey": "object:88"
  }, {
    "title": "Styles",
    "template": "componentBuilder/components/checkBox/styles.html",
    "$$hashKey": "object:89"
  }, {
    "title": "Validations",
    "template": "componentBuilder/components/checkBox/validations.html",
    "$$hashKey": "object:90"
  }, {
    "title": "Conditions",
    "template": "componentBuilder/components/common/conditional.html",
    "$$hashKey": "object:91"
  }],
  "group": "__component",
  "componentId": "component-52887"
}, {
  "title": "date12_sample",
  "template": "componentBuilder/components/date.html",
  "icon": "fa fa-calendar",
  "settings": {
    "icon": true,
    "tableView": true,
    "inputType": "text",
    "inputMask": "",
    "key": "time",
    "isModelNeeded": true,
    "properties": {
      "label": "Date",
      "placeholder": "Enter text",
      "name": "time75808",
      "id": "time75808",
      "model": "date12_sample",
      "labelSize": "",
      "labelColor": "",
      "defaultValue": "",
      "readonly": false,
      "disabled": false,
      "hidden": false,
      "hideLabel": false,
      "bootstrapClass": "",
      "format": "MM/dd/yyyy"
    },
    "styles": {
      "color": "",
      "backgroundColor": "white",
      "borderColor": "#ccc",
      "fontSize": "",
      "marginLeft": "",
      "marginRight": 5,
      "marginTop": "",
      "marginBottom": "",
      "paddingLeft": "",
      "paddingRight": "",
      "paddingTop": "",
      "paddingBottom": ""
    },
    "labelStyles": {
      "color": "",
      "fontSize": "",
      "fontWeight": ""
    },
    "validations": {
      "required": false,
      "minDate": "",
      "maxDate": "",
      "pattern": ""
    },
    "others": {
      "errorColor": "",
      "customCss": "",
      "customClass": "",
      "bootstrapGridClass": ""
    },
    "conditional": {
      "show": null,
      "when": null,
      "eq": ""
    },
    "special": {
      "isOpen": ""
    },
    "type": "date"
  },
  "configurations": [{
    "show": true,
    "title": "Display",
    "template": "componentBuilder/components/date/settings.html",
    "$$hashKey": "object:188"
  }, {
    "title": "Styles",
    "template": "componentBuilder/components/date/styles.html",
    "$$hashKey": "object:189"
  }, {
    "title": "Validations",
    "template": "componentBuilder/components/date/validations.html",
    "$$hashKey": "object:190"
  }, {
    "title": "Conditions",
    "template": "componentBuilder/components/common/conditional.html",
    "$$hashKey": "object:191"
  }],
  "group": "__component",
  "componentId": "component-26175"
}, {
  "title": "date_Time_Sample1",
  "template": "componentBuilder/components/datetime.html",
  "icon": "fa fa-calendar-minus-o",
  "settings": {
    "icon": true,
    "tableView": true,
    "inputType": "text",
    "inputMask": "",
    "key": "datetime",
    "isModelNeeded": true,
    "properties": {
      "label": "DateTime",
      "labelSize": "",
      "labelColor": "",
      "placeholder": "Enter text",
      "name": "datetime39671",
      "id": "datetime39671",
      "model": "date_Time_Sample1",
      "defaultValue": "",
      "readonly": false,
      "disabled": false,
      "hidden": false,
      "hideLabel": false,
      "bootstrapClass": "",
      "format": "MM/dd/yyyy HH:mm"
    },
    "styles": {
      "color": "",
      "backgroundColor": "white",
      "borderColor": "#ccc",
      "fontSize": "",
      "marginLeft": "",
      "marginRight": 5,
      "marginTop": "",
      "marginBottom": "",
      "paddingLeft": "",
      "paddingRight": "",
      "paddingTop": "",
      "paddingBottom": ""
    },
    "divStyles": {
      "color": "black",
      "backgroundColor": "",
      "customCss": "",
      "customClass": "",
      "marginLeft": "",
      "marginRight": 5,
      "marginTop": "",
      "marginBottom": "",
      "paddingLeft": "",
      "paddingRight": "",
      "paddingTop": "",
      "paddingBottom": "",
      "borderColor": "",
      "display": "",
      "width": ""
    },
    "labelStyles": {
      "color": "",
      "fontSize": "",
      "fontWeight": ""
    },
    "validations": {
      "required": false,
      "minDate": "",
      "maxDate": "",
      "pattern": ""
    },
    "others": {
      "errorColor": "",
      "customCss": "",
      "customClass": "",
      "bootstrapGridClass": ""
    },
    "conditional": {
      "show": null,
      "when": null,
      "eq": ""
    },
    "special": {
      "isOpen": ""
    },
    "type": "datetime"
  },
  "configurations": [{
    "show": true,
    "title": "Display",
    "template": "componentBuilder/components/datetime/settings.html",
    "$$hashKey": "object:289"
  }, {
    "title": "Styles",
    "template": "componentBuilder/components/datetime/styles.html",
    "$$hashKey": "object:290"
  }, {
    "title": "Validations",
    "template": "componentBuilder/components/datetime/validations.html",
    "$$hashKey": "object:291"
  }, {
    "title": "Conditions",
    "template": "componentBuilder/components/common/conditional.html",
    "$$hashKey": "object:292"
  }],
  "group": "__component",
  "componentId": "component-27077"
}, {
  "title": "multi_check_Sample1",
  "template": "componentBuilder/components/multiSelectCheckbox.html",
  "icon": "fa fa-check-square-o",
  "settings": {
    "icon": true,
    "inputType": "checkbox",
    "inputMask": "",
    "key": "multiSelectCheckbox",
    "isModelNeeded": true,
    "properties": {
      "label": "Check Box Text",
      "name": "multiSelectCheckbox95005",
      "id": "multiSelectCheckbox95005",
      "value": "",
      "labelSize": "",
      "labelColor": "",
      "defaultValue": false,
      "readonly": false,
      "disabled": false,
      "click": false,
      "show": true,
      "inline": false,
      "model": "multi_check_Sample1",
      "icon": true,
      "hidden": false,
      "hideLabel": false,
      "bootstrapClass": "",
      "options": [{
        "key": 1,
        "value": "option 1",
        "$$hashKey": "object:430"
      }, {
        "key": 2,
        "value": "option 2",
        "$$hashKey": "object:431"
      }, {
        "key": 3,
        "value": "option 3",
        "$$hashKey": "object:432"
      }, {
        "key": 4,
        "value": "option 4",
        "$$hashKey": "object:433"
      }]
    },
    "styles": {
      "textAlign": "",
      "fontStyle": "",
      "fontSize": "",
      "fontFamily": "",
      "fontWeight": "",
      "color": "",
      "backgroundColor": "",
      "customCss": "",
      "customClass": "",
      "marginLeft": "",
      "marginRight": 5,
      "marginTop": "",
      "marginBottom": "",
      "paddingLeft": "",
      "paddingRight": "",
      "paddingTop": "",
      "paddingBottom": "",
      "display": "",
      "width": "",
      "float": "left"
    },
    "labelStyles": {
      "lableColor": "",
      "labelSize": ""
    },
    "validations": {
      "required": false
    },
    "others": {
      "errorColor": "",
      "customCss": "",
      "customClass": "",
      "bootstrapGridClass": ""
    },
    "conditional": {
      "show": null,
      "when": null,
      "eq": ""
    },
    "type": "multiSelectCheckbox"
  },
  "configurations": [{
    "show": true,
    "title": "Display",
    "template": "componentBuilder/components/multiSelectCheckbox/settings.html",
    "$$hashKey": "object:403"
  }, {
    "title": "Styles",
    "template": "componentBuilder/components/multiSelectCheckbox/styles.html",
    "$$hashKey": "object:404"
  }, {
    "title": "Validations",
    "template": "componentBuilder/components/multiSelectCheckbox/validations.html",
    "$$hashKey": "object:405"
  }, {
    "title": "Conditions",
    "template": "componentBuilder/components/common/conditional.html",
    "$$hashKey": "object:406"
  }],
  "group": "__component",
  "componentId": "component-64173"
}, {
  "title": "multi_select_Sample1",
  "template": "componentBuilder/components/MultiSelectCombo.html",
  "icon": "fa fa-caret-square-o-down",
  "settings": {
    "icon": true,
    "inputType": "select",
    "inputMask": "",
    "key": "select",
    "isModelNeeded": true,
    "properties": {
      "label": "Select",
      "name": "select14784",
      "id": "select14784",
      "value": "",
      "labelSize": "",
      "labelColor": "",
      "defaultValue": false,
      "readonly": false,
      "disabled": false,
      "click": false,
      "show": true,
      "inline": false,
      "model": "multi_select_Sample1",
      "icon": true,
      "hidden": true,
      "hideLabel": false,
      "bootstrapClass": "",
      "multiple": true,
      "options": [{
        "key": 1,
        "value": "option 1",
        "$$hashKey": "object:551"
      }, {
        "key": 2,
        "value": "option 2",
        "$$hashKey": "object:552"
      }, {
        "key": 3,
        "value": "option 3",
        "$$hashKey": "object:553"
      }, {
        "key": 4,
        "value": "option 4",
        "$$hashKey": "object:554"
      }]
    },
    "labelStyles": {
      "textAlign": "left",
      "fontStyle": "",
      "fontSize": 12,
      "fontFamily": "",
      "fontWeight": "",
      "textDecoration": "",
      "textTransform": "",
      "color": "black"
    },
    "divStyles": {
      "color": "black",
      "backgroundColor": "",
      "customCss": "",
      "customClass": "",
      "marginLeft": "",
      "marginRight": 5,
      "marginTop": "",
      "marginBottom": "",
      "paddingLeft": "",
      "paddingRight": "",
      "paddingTop": "",
      "paddingBottom": "",
      "borderColor": "",
      "display": "",
      "width": ""
    },
    "styles": {
      "marginLeft": "",
      "marginRight": "",
      "marginTop": "",
      "marginBottom": "",
      "paddingLeft": "",
      "paddingRight": "",
      "paddingTop": "",
      "paddingBottom": ""
    },
    "comboStyles": {
      "paddingLeft": "",
      "paddingRight": "",
      "paddingTop": "",
      "paddingBottom": "",
      "height": 60
    },
    "validations": {
      "required": false
    },
    "others": {
      "errorColor": "",
      "customCss": "",
      "customClass": "",
      "bootstrapGridClass": ""
    },
    "conditional": {
      "show": null,
      "when": null,
      "eq": ""
    },
    "type": "MultiSelectCombo"
  },
  "configurations": [{
    "show": true,
    "title": "Display",
    "template": "componentBuilder/components/MultiSelectCombo/settings.html",
    "$$hashKey": "object:519"
  }, {
    "title": "Styles",
    "template": "componentBuilder/components/MultiSelectCombo/styles.html",
    "$$hashKey": "object:520"
  }, {
    "title": "Combo Box Styles",
    "template": "componentBuilder/components/MultiSelectCombo/comboStyles.html",
    "$$hashKey": "object:521"
  }, {
    "title": "Validations",
    "template": "componentBuilder/components/MultiSelectCombo/validations.html",
    "$$hashKey": "object:522"
  }, {
    "title": "Conditions",
    "template": "componentBuilder/components/common/conditional.html",
    "$$hashKey": "object:523"
  }],
  "group": "__component",
  "componentId": "component-56860"
}, {
  "title": "number_sample_1",
  "template": "componentBuilder/components/numberField.html",
  "icon": "fa fa-minus",
  "settings": {
    "icon": true,
    "tableView": true,
    "inputType": "number",
    "backupType": "number",
    "inputMask": "",
    "key": "NumberField",
    "hide": false,
    "isModelNeeded": true,
    "properties": {
      "label": "Number",
      "placeholder": "Enter Number",
      "name": "NumberField18690",
      "id": "NumberField18690",
      "model": "number_sample_1",
      "defaultValue": "",
      "readonly": false,
      "disabled": false,
      "hidden": false,
      "hideLabel": false,
      "bootstrapClass": ""
    },
    "styles": {
      "color": "",
      "backgroundColor": "white",
      "borderColor": "#ccc",
      "marginLeft": "",
      "marginRight": "",
      "marginTop": "",
      "marginBottom": "",
      "paddingLeft": "",
      "paddingRight": "",
      "paddingTop": "",
      "paddingBottom": ""
    },
    "labelStyles": {
      "lableColor": "",
      "labelSize": ""
    },
    "divStyles": {
      "color": "black",
      "backgroundColor": "",
      "customCss": "",
      "customClass": "",
      "marginLeft": "",
      "marginRight": 5,
      "marginTop": "",
      "marginBottom": "",
      "paddingLeft": "",
      "paddingRight": "",
      "paddingTop": "",
      "paddingBottom": "",
      "borderColor": "",
      "display": "",
      "width": ""
    },
    "validations": {
      "required": false,
      "max": "",
      "min": "",
      "pattern": ""
    },
    "others": {
      "errorColor": "",
      "customCss": "",
      "customClass": "",
      "bootstrapGridClass": ""
    },
    "conditional": {
      "show": null,
      "when": null,
      "operator": "",
      "compareValue": ""
    },
    "type": "numberField"
  },
  "configurations": [{
    "show": true,
    "title": "Display",
    "template": "componentBuilder/components/numberField/settings.html",
    "$$hashKey": "object:636"
  }, {
    "title": "Styles",
    "template": "componentBuilder/components/numberField/styles.html",
    "$$hashKey": "object:637"
  }, {
    "title": "Validations",
    "template": "componentBuilder/components/numberField/validations.html",
    "$$hashKey": "object:638"
  }, {
    "title": "Conditions",
    "template": "componentBuilder/components/common/conditional.html",
    "$$hashKey": "object:639"
  }],
  "group": "__component",
  "componentId": "component-32255"
}, {
  "title": "radio_Sample_1",
  "template": "componentBuilder/components/radioButton.html",
  "icon": "fa fa-circle-o",
  "settings": {
    "icon": true,
    "inputType": "radio",
    "inputMask": "",
    "key": "radioButton",
    "isModelNeeded": true,
    "properties": {
      "label": "Radio Text",
      "name": "radioButton64500",
      "id": "radioButton64500",
      "value": "",
      "color": "",
      "defaultValue": false,
      "readonly": false,
      "disabled": false,
      "click": false,
      "show": true,
      "inline": false,
      "model": "radio_Sample_1",
      "icon": true,
      "hidden": false,
      "hideLabel": false,
      "bootstrapClass": "",
      "options": [{
        "key": 1,
        "value": "option 1",
        "$$hashKey": "object:782"
      }, {
        "key": 2,
        "value": "option 2",
        "$$hashKey": "object:783"
      }, {
        "key": 3,
        "value": "option 3",
        "$$hashKey": "object:784"
      }, {
        "key": 4,
        "value": "option 4",
        "$$hashKey": "object:785"
      }]
    },
    "styles": {
      "textAlign": "",
      "fontStyle": "",
      "fontSize": "",
      "fontFamily": "",
      "fontWeight": "",
      "color": "",
      "backgroundColor": "",
      "customCss": "",
      "customClass": "",
      "marginLeft": "",
      "marginRight": 5,
      "marginTop": "",
      "marginBottom": "",
      "paddingLeft": "",
      "paddingRight": "",
      "paddingTop": "",
      "paddingBottom": "",
      "display": "",
      "width": "",
      "float": "left"
    },
    "labelStyles": {
      "color": "",
      "fontSize": "",
      "fontWeight": ""
    },
    "validations": {
      "required": false
    },
    "others": {
      "errorColor": "",
      "customCss": "",
      "customClass": "",
      "bootstrapGridClass": ""
    },
    "conditional": {
      "show": null,
      "when": null,
      "eq": ""
    },
    "type": "radioButton"
  },
  "configurations": [{
    "show": true,
    "title": "Display",
    "template": "componentBuilder/components/radioButton/settings.html",
    "$$hashKey": "object:756"
  }, {
    "title": "Styles",
    "template": "componentBuilder/components/radioButton/styles.html",
    "$$hashKey": "object:757"
  }, {
    "title": "Validations",
    "template": "componentBuilder/components/radioButton/validations.html",
    "$$hashKey": "object:758"
  }, {
    "title": "Conditions",
    "template": "componentBuilder/components/common/conditional.html",
    "$$hashKey": "object:759"
  }],
  "group": "__component",
  "componentId": "component-53783"
}, {
  "title": "select_Sample_1",
  "template": "componentBuilder/components/selectCombo.html",
  "icon": "fa fa-caret-square-o-down",
  "settings": {
    "icon": true,
    "inputType": "select",
    "inputMask": "",
    "model": "select_Sample_1",
    "isModelNeeded": true,
    "properties": {
      "label": "Select",
      "name": "select64958",
      "id": "select64958",
      "value": "",
      "labelSize": "",
      "labelColor": "",
      "defaultValue": false,
      "readonly": false,
      "disabled": false,
      "click": false,
      "show": true,
      "inline": false,
      "model": "select_Sample_1",
      "icon": true,
      "hidden": true,
      "hideLabel": false,
      "bootstrapClass": "",
      "options": [{
        "key": 1,
        "value": "option 1",
        "$$hashKey": "object:912"
      }, {
        "key": 2,
        "value": "option 2",
        "$$hashKey": "object:913"
      }, {
        "key": 3,
        "value": "option 3",
        "$$hashKey": "object:914"
      }, {
        "key": 4,
        "value": "option 4",
        "$$hashKey": "object:915"
      }]
    },
    "labelStyles": {
      "textAlign": "left",
      "fontStyle": "",
      "fontSize": 12,
      "fontFamily": "",
      "fontWeight": "",
      "textDecoration": "",
      "textTransform": "",
      "color": "black"
    },
    "divStyles": {
      "color": "black",
      "backgroundColor": "",
      "customCss": "",
      "customClass": "",
      "marginLeft": "",
      "marginRight": 5,
      "marginTop": "",
      "marginBottom": "",
      "paddingLeft": "",
      "paddingRight": "",
      "paddingTop": "",
      "paddingBottom": "",
      "borderColor": "",
      "display": "",
      "width": ""
    },
    "validations": {
      "required": false
    },
    "others": {
      "errorColor": "",
      "customCss": "",
      "customClass": "",
      "bootstrapGridClass": ""
    },
    "conditional": {
      "show": null,
      "when": null,
      "eq": ""
    },
    "type": "selectCombo"
  },
  "configurations": [{
    "show": true,
    "title": "Display",
    "template": "componentBuilder/components/selectCombo/settings.html",
    "$$hashKey": "object:885"
  }, {
    "title": "Styles",
    "template": "componentBuilder/components/selectCombo/styles.html",
    "$$hashKey": "object:886"
  }, {
    "title": "Validations",
    "template": "componentBuilder/components/selectCombo/validations.html",
    "$$hashKey": "object:887"
  }, {
    "title": "Conditions",
    "template": "componentBuilder/components/common/conditional.html",
    "$$hashKey": "object:888"
  }],
  "group": "__component",
  "componentId": "component-14487"
}, {
  "title": "textarea_Sample_1",
  "template": "componentBuilder/components/textarea.html",
  "icon": "fa fa-square-o",
  "settings": {
    "input": true,
    "tableView": true,
    "inputType": "textarea",
    "label": "text area",
    "isModelNeeded": true,
    "key": "TextArea",
    "properties": {
      "label": "Textarea",
      "labelSize": "",
      "labelColor": "",
      "placeholder": "Enter text",
      "name": "TextArea96062",
      "id": "TextArea96062",
      "rows": "",
      "model": "textarea_Sample_1",
      "defaultValue": "",
      "readonly": false,
      "disabled": false,
      "hidden": false,
      "hideLabel": false,
      "bootstrapClass": ""
    },
    "styles": {
      "color": "",
      "backgroundColor": "",
      "borderColor": "",
      "marginLeft": "",
      "marginRight": 5,
      "marginTop": "",
      "marginBottom": "",
      "paddingLeft": "",
      "paddingRight": "",
      "paddingTop": "",
      "paddingBottom": ""
    },
    "labelStyles": {
      "color": "",
      "fontSize": "",
      "fontWeight": ""
    },
    "divStyles": {
      "color": "black",
      "backgroundColor": "",
      "customCss": "",
      "customClass": "",
      "marginLeft": "",
      "marginRight": 5,
      "marginTop": "",
      "marginBottom": "",
      "paddingLeft": "",
      "paddingRight": "",
      "paddingTop": "",
      "paddingBottom": "",
      "borderColor": "",
      "display": "",
      "width": ""
    },
    "validations": {
      "required": false,
      "maxLength": "",
      "minLength": "",
      "pattern": ""
    },
    "others": {
      "errorColor": "",
      "customCss": "",
      "customClass": "",
      "bootstrapGridClass": ""
    },
    "conditional": {
      "show": null,
      "when": null,
      "eq": ""
    },
    "type": "textarea"
  },
  "configurations": [{
    "show": true,
    "title": "Display",
    "template": "componentBuilder/components/textarea/settings.html",
    "$$hashKey": "object:1000"
  }, {
    "title": "Styles",
    "template": "componentBuilder/components/textarea/styles.html",
    "$$hashKey": "object:1001"
  }, {
    "title": "Validations",
    "template": "componentBuilder/components/textarea/validations.html",
    "$$hashKey": "object:1002"
  }, {
    "title": "Conditions",
    "template": "componentBuilder/components/common/conditional.html",
    "$$hashKey": "object:1003"
  }],
  "group": "__component",
  "componentId": "component-36207"
}, {
  "title": "time_Sample_1",
  "template": "componentBuilder/components/time.html",
  "icon": "fa fa-clock-o",
  "settings": {
    "icon": true,
    "tableView": true,
    "inputType": "text",
    "inputMask": "",
    "key": "time",
    "isModelNeeded": true,
    "properties": {
      "label": "Time",
      "labelSize": "",
      "labelColor": "",
      "placeholder": "Enter text",
      "name": "time74940",
      "id": "time74940",
      "model": "time_Sample_1",
      "defaultValue": "",
      "readonly": false,
      "disabled": false,
      "hidden": false,
      "hideLabel": false,
      "bootstrapClass": "",
      "format": "HH:mm"
    },
    "styles": {
      "color": "",
      "backgroundColor": "white",
      "borderColor": "#ccc",
      "fontSize": "",
      "marginLeft": "",
      "marginRight": "",
      "marginTop": "",
      "marginBottom": "",
      "paddingLeft": "",
      "paddingRight": "",
      "paddingTop": "",
      "paddingBottom": ""
    },
    "labelStyles": {
      "color": "",
      "fontSize": "",
      "fontWeight": ""
    },
    "divStyles": {
      "color": "black",
      "backgroundColor": "",
      "customCss": "",
      "customClass": "",
      "marginLeft": "",
      "marginRight": 5,
      "marginTop": "",
      "marginBottom": "",
      "paddingLeft": "",
      "paddingRight": "",
      "paddingTop": "",
      "paddingBottom": "",
      "borderColor": "",
      "display": "",
      "width": ""
    },
    "validations": {
      "required": false,
      "minDate": "",
      "maxDate": "",
      "pattern": ""
    },
    "others": {
      "errorColor": "",
      "customCss": "",
      "customClass": "",
      "bootstrapGridClass": ""
    },
    "conditional": {
      "show": null,
      "when": null,
      "eq": ""
    },
    "special": {
      "isOpen": ""
    },
    "type": "time"
  },
  "configurations": [{
    "show": true,
    "title": "Display",
    "template": "componentBuilder/components/time/settings.html",
    "$$hashKey": "object:1233"
  }, {
    "title": "Styles",
    "template": "componentBuilder/components/time/styles.html",
    "$$hashKey": "object:1234"
  }, {
    "title": "Validations",
    "template": "componentBuilder/components/time/validations.html",
    "$$hashKey": "object:1235"
  }, {
    "title": "Conditions",
    "template": "componentBuilder/components/common/conditional.html",
    "$$hashKey": "object:1236"
  }],
  "group": "__component",
  "componentId": "component-14494"
}, {
  "title": "text_field_Sample_1",
  "template": "componentBuilder/components/textfield.html",
  "icon": "fa fa-minus",
  "settings": {
    "icon": true,
    "tableView": true,
    "inputType": "text",
    "backupType": "text",
    "inputMask": "",
    "key": "TextField",
    "hide": false,
    "isModelNeeded": true,
    "properties": {
      "label": "Textfield",
      "placeholder": "Enter text",
      "name": "TextField23036",
      "id": "TextField23036",
      "model": "text_field_Sample_1",
      "defaultValue": "",
      "readonly": false,
      "disabled": false,
      "hidden": false,
      "hideLabel": false,
      "bootstrapClass": ""
    },
    "styles": {
      "color": "",
      "backgroundColor": "white",
      "borderColor": "#ccc",
      "fontSize": "",
      "marginLeft": "",
      "marginRight": "",
      "marginTop": "",
      "marginBottom": "",
      "paddingLeft": "",
      "paddingRight": "",
      "paddingTop": "",
      "paddingBottom": "",
      "fontFamily": "",
      "fontWeight": "",
      "textDecoration": "",
      "textTransform": ""
    },
    "labelStyles": {
      "lableColor": "",
      "labelSize": ""
    },
    "divStyles": {
      "color": "black",
      "backgroundColor": "",
      "customCss": "",
      "customClass": "",
      "marginLeft": "",
      "marginRight": 5,
      "marginTop": "",
      "marginBottom": "",
      "paddingLeft": "",
      "paddingRight": "",
      "paddingTop": "",
      "paddingBottom": "",
      "borderColor": "",
      "display": "",
      "width": ""
    },
    "validations": {
      "required": false,
      "maxLength": "",
      "minLength": "",
      "pattern": ""
    },
    "others": {
      "errorColor": "",
      "customCss": "",
      "customClass": "",
      "bootstrapGridClass": ""
    },
    "conditional": {
      "show": null,
      "when": null,
      "operator": "",
      "compareValue": ""
    },
    "type": "textfield"
  },
  "configurations": [{
    "show": true,
    "title": "Display",
    "template": "componentBuilder/components/textfield/settings.html",
    "$$hashKey": "object:1124"
  }, {
    "title": "Styles",
    "template": "componentBuilder/components/textfield/styles.html",
    "$$hashKey": "object:1125"
  }, {
    "title": "Validations",
    "template": "componentBuilder/components/textfield/validations.html",
    "$$hashKey": "object:1126"
  }, {
    "title": "Conditions",
    "template": "componentBuilder/components/common/conditional.html",
    "$$hashKey": "object:1127"
  }],
  "group": "__component",
  "componentId": "component-66985"
}];

    }]);


/**
  * These are component options that can be reused
  * with the builder-option directive
  * Valid properties: label, placeholder, tooltip, type */
var app=angular.module('componentBuilder');
  app.constant('APP_CONSTANTS',{
  label: {
    label: 'Label',
    placeholder: 'Field Label',
    tooltip: 'The label for this field that will appear next to it.'
  },
  defaultValue: {
    label: 'Default Value',
    placeholder: 'Default Value',
    tooltip: 'The will be the value for this field, before user interaction. Having a default value will override the placeholder text.'
  },
  placeholder: {
    label: 'Placeholder',
    placeholder: 'Placeholder',
    tooltip: 'The placeholder text that will appear when this field is empty.'
  },
  description: {
    label: 'Description',
    placeholder: 'Description for this field.',
    tooltip: 'The description is text that will appear below the input field.'
  },
  inputMask: {
    label: 'Input Mask',
    placeholder: 'Input Mask',
    tooltip: 'An input mask helps the user with input by ensuring a predefined format.<br><br>9: numeric<br>a: alphabetical<br>*: alphanumeric<br><br>Example telephone mask: (999) 999-9999<br><br>See the <a target=\'_blank\' href=\'https://github.com/RobinHerbots/jquery.inputmask\'>jquery.inputmask documentation</a> for more information.</a>'
  },
  authenticate: {
    label: 'Formio Authenticate',
    tooltip: 'Check this if you would like to use Formio Authentication with the request.',
    type: 'checkbox'
  },
  tableView: {
    label: 'Table View',
    type: 'checkbox',
    tooltip: 'Shows this value within the table view of the submissions.'
  },
  prefix: {
    label: 'Prefix',
    placeholder: 'example \'$\', \'@\'',
    tooltip: 'The text to show before a field.'
  },
  suffix: {
    label: 'Suffix',
    placeholder: 'example \'$\', \'@\'',
    tooltip: 'The text to show after a field.'
  },
  multiple: {
    label: 'Multiple Values',
    type: 'checkbox',
    tooltip: 'Allows multiple values to be entered for this field.'
  },
  disabled: {
    label: 'Disabled',
    type: 'checkbox',
    tooltip: 'Disable the form input.'
  },
  clearOnRefresh: {
    label: 'Clear Value On Refresh',
    type: 'checkbox',
    tooltip: 'When the Refresh On field is changed, clear the selected value.'
  },
  unique: {
    label: 'Unique',
    type: 'checkbox',
    tooltip: 'Makes sure the data submitted for this field is unique, and has not been submitted before.'
  },
  protected: {
    label: 'Protected',
    type: 'checkbox',
    tooltip: 'A protected field will not be returned when queried via API.'
  },
  image: {
    label: 'Display as images',
    type: 'checkbox',
    tooltip: 'Instead of a list of linked files, images will be rendered in the view.'
  },
  imageSize: {
    label: 'Image Size',
    placeholder: '100',
    tooltip: 'The image size for previewing images.'
  },
  persistent: {
    label: 'Persistent',
    type: 'checkbox',
    tooltip: 'A persistent field will be stored in database when the form is submitted.'
  },
  block: {
    label: 'Block',
    type: 'checkbox',
    tooltip: 'This control should span the full width of the bounding container.'
  },
  leftIcon: {
    label: 'Left Icon',
    placeholder: 'Enter icon classes',
    tooltip: 'This is the full icon class string to show the icon. Example: \'glyphicon glyphicon-search\' or \'fa fa-plus\''
  },
  rightIcon: {
    label: 'Right Icon',
    placeholder: 'Enter icon classes',
    tooltip: 'This is the full icon class string to show the icon. Example: \'glyphicon glyphicon-search\' or \'fa fa-plus\''
  },
  url: {
    label: 'Upload Url',
    placeholder: 'Enter the url to post the files to.',
    tooltip: 'See <a href=\'https://github.com/danialfarid/ng-file-upload#server-side\' target=\'_blank\'>https://github.com/danialfarid/ng-file-upload#server-side</a> for how to set up the server.'
  },
  dir: {
    label: 'Directory',
    placeholder: '(optional) Enter a directory for the files',
    tooltip: 'This will place all the files uploaded in this field in the directory'
  },
  disableOnInvalid: {
    label: 'Disable on Form Invalid',
    type: 'checkbox',
    tooltip: 'This will disable this field if the form is invalid.'
  },
  striped: {
    label: 'Striped',
    type: 'checkbox',
    tooltip: 'This will stripe the table if checked.'
  },
  bordered: {
    label: 'Bordered',
    type: 'checkbox',
    tooltip: 'This will border the table if checked.'
  },
  hover: {
    label: 'Hover',
    type: 'checkbox',
    tooltip: 'Highlight a row on hover.'
  },
  condensed: {
    label: 'Condensed',
    type: 'checkbox',
    tooltip: 'Condense the size of the table.'
  },
  datagridLabel: {
    label: 'Datagrid Label',
    type: 'checkbox',
    tooltip: 'Show the label when in a datagrid.'
  },
  'validate.required': {
    label: 'Required',
    type: 'checkbox',
    tooltip: 'A required field must be filled in before the form can be submitted.'
  },
  'validate.minLength': {
    label: 'Minimum Length',
    placeholder: 'Minimum Length',
    type: 'number',
    tooltip: 'The minimum length requirement this field must meet.'
  },
  'validate.maxLength': {
    label: 'Maximum Length',
    placeholder: 'Maximum Length',
    type: 'number',
    tooltip: 'The maximum length requirement this field must meet'
  },
  'validate.pattern': {
    label: 'Regular Expression Pattern',
    placeholder: 'Regular Expression Pattern',
    tooltip: 'The regular expression pattern test that the field value must pass before the form can be submitted.'
  },
  'customClass': {
    label: 'Custom CSS Class',
    placeholder: 'Custom CSS Class',
    tooltip: 'Custom CSS class to add to this component.'
  },
  'tabindex': {
    label: 'Tab Index',
    placeholder: 'Tab Index',
    tooltip: 'Sets the tabindex attribute of this component to override the tab order of the form. See the <a href=\'https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex\'>MDN documentation</a> on tabindex for more information.'
  },
  'addAnother': {
    label: 'Add Another Text',
    placeholder: 'Add Another',
    tooltip: 'Set the text of the Add Another button.'
  },
  'defaultDate': {
    label: 'Default Value',
    placeholder: 'Default Value',
    tooltip: 'You can use Moment.js functions to set the default value to a specific date. For example: \n \n moment().subtract(10, \'days\').calendar();'
  },
  // Need to use array notation to have dash in name
  'style[\'margin-top\']': {
    label: 'Margin Top',
    placeholder: '0px',
    tooltip: 'Sets the top margin of this component. Must be a valid CSS measurement like `10px`.'
  },
  'style[\'margin-right\']': {
    label: 'Margin Right',
    placeholder: '0px',
    tooltip: 'Sets the right margin of this component. Must be a valid CSS measurement like `10px`.'
  },
  'style[\'margin-bottom\']': {
    label: 'Margin Bottom',
    placeholder: '0px',
    tooltip: 'Sets the bottom margin of this component. Must be a valid CSS measurement like `10px`.'
  },
  'style[\'margin-left\']': {
    label: 'Margin Left',
    placeholder: '0px',
    tooltip: 'Sets the left margin of this component. Must be a valid CSS measurement like `10px`.'
  }
});


var app = angular.module('componentBuilder');
app.constant('COMBO_OPTIONS', {
    "FONT_STYLES": ['normal', 'italic', 'oblique'],
    "FONT_TYPES": ['Georgia, serif', 'Times New Roman', 'Times', 'serif'],
    "TEXT_ALIGN_TYPES": ['center', 'right', 'left'],
    "TEXT_DECORATION_TYPES": ['underline', 'overline', 'line-through'],
    "TEXT_TRANSFORM_TYPES": ['uppercase', 'lowercase', 'capitalize'],
    "RADIO_BUTTON_STYLES": ['radio-inline', 'normal'],
    "FONT_WEIGHT_TYPES": ['normal', 'bold ', 'bolder', 'lighter'],
    "PANEL_TYPE":['default','info','success','primary','warning','danger'],
    "BOOTSTRAP_GRID_CLASSES": [{
        "display": "1",
        "value": "col-md-1"
    }, {
        "display": "2",
        "value": "col-md-2"
    }, {
        "display": "3",
        "value": "col-md-3"
    }, {
        "display": "4",
        "value": "col-md-4"
    }, {
        "display": "5",
        "value": "col-md-5"
    }, {
        "display": "6",
        "value": "col-md-6"
    }, {
        "display": "7",
        "value": "col-md-7"
    }, {
        "display": "8",
        "value": "col-md-8"
    }, {
        "display": "9",
        "value": "col-md-9"
    }, {
        "display": "10",
        "value": "col-md-10"
    }, {
        "display": "11",
        "value": "col-md-11"
    }, {
        "display": "12",
        "value": "col-md-12"
    }],
    "DATE_TIME_FORMATS": ['MM/dd/yyyy HH:mm', 'dd/MM/yyyy HH:mm', 'dd-MM-yyyy HH:mm', 'dd-MMM-yyyy HH:mm'],
    "DATE_FORMATS": ['MM/dd/yyyy', 'dd/MM/yyyy', 'dd-MM-yyyy', 'dd-MMM-yyyy'],
    "TIME_FORMATS": ['HH:mm', 'hh:mm'],
    "BORDER_STYLES": ['dashed', 'dotted', 'double', 'groove', 'solid', 'inSet', 'outSet', 'normal', 'none'],
    "INPUT_TYPE": ['email', 'color', 'text', 'password'],
    "TEXT_AREA_INPUT": ['rows'],
    "ALIGN_OPTIONS": [{
        "display": "Inline",
        "value": "100%"
    }, {
        "display": "Normal",
        "value": ""
    }],
      "DISPLAY_OPTIONS": [{
        "display": "Inline",
        "value": "inline"
    }, {
        "display": "block",
        "value": "block"
    }],
    SCORE_TYPE:['sum','large']
});


var app = angular.module('componentBuilder');
app.config([
  'componentsProvider',
  function(componentsProvider) {
    componentsProvider.addCommonControl('Accordion', {
      title: 'Accordian',
      template: 'componentBuilder/components/accordion.html',
      icon: 'fa fa-minus',
      settings: {
        title: 'Accordian Title',
        icon: true,
        inputType: '',
        inputMask: '',
        theme:'primary',
        key: 'accordion',
        properties: {
          show:true,
          hidden: false,
          hideLabel: true,
          json: [],
        },
        divStyles: {

          height: 100,
          color: 'black',
          backgroundColor: '',
          customCss: '',
          customClass: '',
          marginLeft: '',
          marginRight: 5,
          marginTop: 5,
          marginBottom: '',
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: '',
          paddingBottom: '',
          display: 'block',
          width: '',

        },
        arrowStyle:{
          color:"white"
        },
        labelStyles:{
          color:'white',
          fontSize:''
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
        template: 'componentBuilder/components/accordion/settings.html'
      }, {
        title: 'Styles',
        template: 'componentBuilder/components/accordion/styles.html'
      }]
    });
  }
]);

app.run(['$templateCache', function($templateCache) {
    $templateCache.put('componentBuilder/components/accordion.html',
     
      '<div class="panel panel-{{component.theme}}" style="display:block;margin-top:5px;padding:0px">'+
        '<div class="panel-heading"><a class="accordion" ng-click="component.properties.show=!component.properties.show" ng-class="{\'rightPropertiesMenuClosed\':!component.properties.show,\'rightPropertiesMenuOpen\':component.properties.show}">' +
         '<strong ng-style="component.labelStyles" ng-bind="component.properties.label"></strong> ' +
            '<i class="fa fa-caret-down pull-right" ng-style="component.arrowStyle" style="margin-top:-8px;font-size:16px" ng-show="!component.properties.show"></i>' +
            '<i class="fa fa-caret-up pull-right" ng-style="component.arrowStyle" style="margin-top:-8px;font-size:16px"  ng-show="component.properties.show"></i>' +
            '</a></div>'+
        '<div id="textBoxProperties" ng-show="component.properties.show">' +
            '<div class="element-scroll_properties">' +
      '<div class="panel-body">' +
         '<div class="dropzone" ng-if="component.properties"  ng-style="component.divStyles" dnd-list dnd-drop="callback({event:event,targetList: component.properties.json, targetIndex: index})">' +
        '<form-renderer json="component.properties.json"  editable="editable"></form-renderer>' +
      ' </div>' +
      ' </div>' +
      ' </div>' +
      ' </div>' +
      '</div>'
    );

    $templateCache.put('componentBuilder/components/accordion/settings.html',
      '<div class="formBuilderOptions">' +
      '<form-builder-option property="properties.label" type="text" display="Label"></form-builder-option>' +
      '<form-builder-option property="others.bootstrapGridClass" type="select"  display="Size" options="BOOTSTRAP_GRID_CLASSES" object_format="true"></form-builder-option>' +
       '<form-builder-option property="properties.show" type="checkbox" display="Is Open"></form-builder-option>' +
      '</div>'

    );
    $templateCache.put('componentBuilder/components/accordion/styles.html',
      '<div class="formBuilderOptions">' +
      '<form-builder-option property="theme" type="select" display="Theme" options="PANEL_TYPE"></form-builder-option>' +
      '<form-builder-option property="arrowStyle.color" type="color" display="Arrow Color"></form-builder-option>' +
       '<form-builder-option property="labelStyles.color" type="color" display="Label Color"></form-builder-option>' +
      '<form-builder-option property="labelStyles.fontSize" type="number" display="Font Size"></form-builder-option>' +
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

var app = angular.module('componentBuilder');
app.config([
    'componentsProvider',
    function(componentsProvider) {
        componentsProvider.addControl('MultiSelectScoreCombo', {
            title: 'Score - Multi Select ',
            template: 'componentBuilder/components/MultiSelectScoreCombo.html',
            icon: 'fa fa-th-list',
            settings: {
                icon: true,
                inputType: 'select',
                inputMask: '',
                key: 'select',
                isModelNeeded: true,
                isScoreModelNeeded:true,
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
                    scoreModel:'',
                    icon: true,
                    hidden: true,
                    hideLabel: false,
                    bootstrapClass: '',
                    scoreType:'sum',
                    multiple: true,
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

                listStyles: {
                    color: 'black',
                    backgroundColor: '',
                    customCss: '',
                    customClass: '',
                    marginLeft: '',
                    marginRight: '',
                    marginTop: '',
                    marginBottom: '',
                    paddingLeft: '',
                    paddingRight: '',
                    paddingTop: '',
                    paddingBottom: '',
                    borderColor: '',
                    display: '',
                    width: '80%',
                    float:'left',
                    height:100,
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
                scoreStyles:{
                  width:"19%",
                  marginLeft: '',
                  marginRight:'',
                  marginTop: '',
                  marginBottom: '',
                  display:'inline'
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
                template: 'componentBuilder/components/MultiSelectScoreCombo/settings.html'
            }, {
                title: 'Styles - Label',
                template: 'componentBuilder/components/MultiSelectScoreCombo/labelStyles.html'
            }, {
                title: 'Styles - List',
                template: 'componentBuilder/components/MultiSelectScoreCombo/listStyles.html'
            },
            {
                title: 'Styles - Score',
                template: 'componentBuilder/components/MultiSelectScoreCombo/stylesScore.html'
            }, {
                title: 'Validations',
                template: 'componentBuilder/components/MultiSelectScoreCombo/validations.html'
            }, {
                title: 'Conditions',
                template: 'componentBuilder/components/common/conditional.html'
            }]
        });
    }
]);

app.run(['$templateCache', function($templateCache) {
        $templateCache.put('componentBuilder/components/MultiSelectScoreCombo.html', '<div   style="display:block;" ng-style="component.labelStyles"><span ng-style="component.labelStyles"' +
            ' ng-bind="component.properties.label" ng-hide="component.properties.hideLabel"></span><div class="clearfix"></div>' + '<select ' +
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
            'conditional-validation ' +
            'score-caluculation '+
            'is-multi-select="true"'+
            'score-model="data[component.properties.scoreModel]"'+
            'data="data" ' +
            'component="component"' +
            'ng-style="component.listStyles"' +
            '</select><input type="text" class="form-control col-md-2" ng-style="component.scoreStyles" ng-disabled="component.properties.isScoreDisabled" class="form-control" ng-style="scoreStyles" ng-model="data[component.properties.scoreModel]" placeholder="score"/></div>');



        $templateCache.put('componentBuilder/components/MultiSelectScoreCombo/settings.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="properties.label" type="text" display="Label"></form-builder-option>' +
            '<form-builder-option property="properties.model" type="text" display="Key"></form-builder-option>' +
            '<form-builder-option property="properties.scoreModel" type="text" display="Score Key"></form-builder-option>' +
            '<form-builder-option property="others.bootstrapGridClass" type="select"  display="Size" options="BOOTSTRAP_GRID_CLASSES" object_format="true"></form-builder-option>' +
            '<form-builder-option property="properties.options" type="score_options"  display="options"></form-builder-option>' +
            '<form-builder-option property="properties.scoreType" type="select"  display="Score Type" options="SCORE_TYPE"></form-builder-option>' +
            '<form-builder-option property="properties.hideLabel" type="checkbox"  display="Hide Label"></form-builder-option>' +
            '<form-builder-option property="properties.disabled" type="checkbox"  display="Is Disabled"></form-builder-option>' +
            '<form-builder-option property="properties.readonly" type="checkbox"  display="Is ReadOnly"></form-builder-option>' +
            '</div>'

        );


        $templateCache.put('componentBuilder/components/MultiSelectScoreCombo/labelStyles.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="labelStyles.color" type="color" display="Text Color"></form-builder-option>' +
            '<form-builder-option property="labelStyles.backgroundColor" type="color" display="Background Color"></form-builder-option>' +
            '<form-builder-option property="labelStyles.fontSize" type="number" display="Font Size"></form-builder-option>' +
            '<form-builder-option property="labelStyles.fontWeight" type="number" display="Font Weight"></form-builder-option>' +
            '<form-builder-option property="labelStyles.marginLeft" type="number" display="Margin Left"></form-builder-option>' +
            '<form-builder-option property="labelStyles.marginRight" type="number" display="Margin Right"></form-builder-option>' +
            '<form-builder-option property="labelStyles.marginTop" type="number" display="Margin Top"></form-builder-option>' +
            '<form-builder-option property="labelStyles.marginBottom" type="number" display="Margin Bottom"></form-builder-option>'+ 
           '</div>'

        );

         $templateCache.put('componentBuilder/components/MultiSelectScoreCombo/listStyles.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="listStyles.fontStyle" type="select" display="Font Style" options="FONT_STYLES"></form-builder-option>'+
            '<form-builder-option property="listStyles.width" type="text" display="Width"></form-builder-option>'+
            '<form-builder-option property="listStyles.height" type="text" display="Width"></form-builder-option>'+
            '<form-builder-option property="listStyles.backgroundColor" type="color" display="Background Color"></form-builder-option>' +
            '<form-builder-option property="listStyles.borderColor" type="color" display="Border Color"></form-builder-option>' +
            '<form-builder-option property="listStyles.marginLeft" type="number" display="Margin Left"></form-builder-option>' +
            '<form-builder-option property="listStyles.marginRight" type="number" display="Margin Right"></form-builder-option>' +
            '<form-builder-option property="listStyles.marginTop" type="number" display="Margin Top"></form-builder-option>' +
            '<form-builder-option property="listStyles.marginBottom" type="number" display="Margin Bottom"></form-builder-option>' +
            '<form-builder-option property="listStyles.paddingRight" type="number" display="Padding Right"></form-builder-option>' +
            '<form-builder-option property="listStyles.paddingLeft" type="number" display="Padding Left"></form-builder-option>' +
            '<form-builder-option property="listStyles.paddingTop" type="number" display="Padding Top"></form-builder-option>' +
            '<form-builder-option property="listStyles.paddingBottom" type="number" display="Padding Bottom"></form-builder-option>' +
            '</div>'
        );

          $templateCache.put('componentBuilder/components/multiSelectScoreCheckbox/stylesScore.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="scoreStyles.width" type="text" display="Font Weight"></form-builder-option>' +
            '<form-builder-option property="scoreStyles.marginLeft" type="number" display="Margin Left"></form-builder-option>' +
            '<form-builder-option property="scoreStyles.marginRight" type="number" display="Margin Right"></form-builder-option>' +
            '<form-builder-option property="scoreStyles.marginTop" type="number" display="Margin Top"></form-builder-option>' +
            '<form-builder-option property="scoreStyles.marginBottom" type="number" display="Margin Bottom"></form-builder-option>' +
            '<form-builder-option property="scoreStyles.display" type="select" options="DISPLAY_OPTIONS" object_format="true"></form-builder-option>'+
            '</div>'
        );

       
        $templateCache.put('componentBuilder/components/MultiSelectScoreCombo/validations.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="validations.required" type="checkbox" display="Is Required"></form-builder-option>' +
            '</div>'

        );
    }



]);


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

var app = angular.module('componentBuilder');
app.config([
  'componentsProvider',
  function(componentsProvider) {
    componentsProvider.addCommonControl('container', {
      title: 'Container',
      template: 'componentBuilder/components/container.html',
      icon: 'fa fa-folder-open',
      settings: {
        icon: true,
        inputType: 'container',
        inputMask: '',
        key: 'container',
        properties: {
          hidden: false,
          hideLabel: false,
          json: [],
        },
        divStyles: {

          height: 100,
          color: 'black',
          backgroundColor: '',
          customCss: '',
          customClass: '',
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          border: '',
          borderColor: '',
          borderStyle: '',
          borderWidth: '',
          display: '',
          width: '100%',

        },
        labelStyles:{
          color:'',
          fontSize:''
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
        template: 'componentBuilder/components/container/settings.html'
      }, {
        title: 'Styles',
        template: 'componentBuilder/components/container/styles.html'
      }]
    });
  }
]);

app.run(['$templateCache', function($templateCache) {
    $templateCache.put('componentBuilder/components/container.html',
      // '<div ng-style="component.divStyles">'+
      '<div class="container dropzone"  style="margin-top:5px" dnd-list dnd-drop="callback({event:event,targetList: component.properties.json, targetIndex: index})"  ng-style="component.divStyles">' +
      
      '<form-renderer json="component.properties.json"  editable="editable"></form-renderer>' +
      //'<json-render json="component.properties.json"   editable="editable" styles="component.divStyles"></json-render>' +
      // '<div class="clearfix spacer"></div>' +
      // '</div>'+
      '</div>'
    );

    $templateCache.put('componentBuilder/components/container/settings.html',
      '<div class="formBuilderOptions">' +
      // '<form-builder-option property="properties.label" type="text" display="Label"></form-builder-option>' +
      '<form-builder-option property="others.bootstrapGridClass" type="select"  display="Size" options="BOOTSTRAP_GRID_CLASSES" object_format="true"></form-builder-option>' +
      '</div>'

    );
    $templateCache.put('componentBuilder/components/container/styles.html',
      '<div class="formBuilderOptions">' +
      //  '<form-builder-option property="labelStyles.color" type="color" display="Label Color"></form-builder-option>' +
      // '<form-builder-option property="labelStyles.fontSize" type="number" display="Font Size"></form-builder-option>' +
      '<form-builder-option property="divStyles.height" type="number" display="Height"></form-builder-option>' +
      '<form-builder-option property="divStyles.backgroundColor" type="color" display="Background Color"></form-builder-option>' +
      '<form-builder-option property="divStyles.borderColor" type="color" display="Border Color"></form-builder-option>' +
      '<form-builder-option property="divStyles.borderStyle" type="select" display="Border Style" options="BORDER_STYLES"></form-builder-option>' +
      '<form-builder-option property="divStyles.borderWidth" type="number" display="Border Width"></form-builder-option>' +
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


var app = angular.module('componentBuilder');
app.config([
  'componentsProvider',
  function(componentsProvider) {
    componentsProvider.addCommonControl('div', {
      title: 'Empty Space',
      template: 'componentBuilder/components/div.html',
      icon: 'fa fa-square-o',
      settings: {
        icon: true,
        inputType: '',
        inputMask: '',
        key: 'div',
        properties: {
          hidden: false,
          hideLabel: true,
          },
         divStyles: {
         
          height:10,
          backgroundColor:'white',

        },
        others:{
          bootstrapGridClass:''
        },
        conditional: {
          show: null,
          when: null,
          eq: ''
        }
      },
      configurations: [{
        show:true,
        title: 'Display',
        template: 'componentBuilder/components/div/settings.html'
      },{
        title: 'Styles',
        template: 'componentBuilder/components/div/styles.html'
      }]
    });
  }
]);

app.run(['$templateCache', function($templateCache) {
       $templateCache.put('componentBuilder/components/div.html',
      '<div  ng-style="component.divStyles"'+
      '></div>');

      $templateCache.put('componentBuilder/components/div/settings.html',
        '<div class="formBuilderOptions">' +
          '<form-builder-option property="others.bootstrapGridClass" type="select"  display="Size" options="BOOTSTRAP_GRID_CLASSES" object_format="true"></form-builder-option>' +
        '</div>'

      ); 
    $templateCache.put('componentBuilder/components/div/styles.html',
      '<div class="formBuilderOptions">' +
      '<form-builder-option property="divStyles.height" type="number" display="Height"></form-builder-option>' +
      '<form-builder-option property="divStyles.backgroundColor" type="color" display="Background Color"></form-builder-option>' +
      '</div>'

    );
  }



]);

var app = angular.module('componentBuilder');
app.config([
  'componentsProvider',
  function(componentsProvider) {
    componentsProvider.addCommonControl('fieldSet', {
      title: 'Field Set',
      template: 'componentBuilder/components/fieldSet.html',
      icon: 'fa fa-minus',
      settings: {
        icon: true,
        inputType: 'fieldSet',
        inputMask: '',
        key: 'fieldSet',
        properties: {
          label: 'Field Set',
          hidden: false,
          hideLabel: false,
          json: [],
        },
        divStyles: {
          height: '',
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
          border: '',
          borderColor: '',
          borderStyle: '',
          borderWidth: '',
          display: '',
          width: '',

        },
        labelStyles:{
          color:'#3c8dbc',
          fontSize:''
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
        template: 'componentBuilder/components/fieldSet/settings.html'
      }, {
        title: 'Styles',
        template: 'componentBuilder/components/fieldSet/styles.html'
      }]
    });
  }
]);

app.run(['$templateCache', function($templateCache) {
    $templateCache.put('componentBuilder/components/fieldSet.html',
      '<fieldset class="fsStyle dropzone" style="margin-top:5px" ng-style="component.divStyles" dnd-list dnd-drop="callback({event:event,targetList: component.properties.json, targetIndex: index})">' +
      '<legend class="legendStyle"  ng-bind="component.properties.label" ng-style="component.labelStyles"></legend>' +
      '<form-renderer json="component.properties.json"  editable="editable"></form-renderer>' +
      '</fieldset>');

    $templateCache.put('componentBuilder/components/fieldSet/settings.html',
      '<div class="formBuilderOptions">' +
      '<form-builder-option property="properties.label" type="text" display="Label"></form-builder-option>' +
      '<form-builder-option property="others.bootstrapGridClass" type="select"  display="Size" options="BOOTSTRAP_GRID_CLASSES" object_format="true"></form-builder-option>' +
      '</div>'

    );
    $templateCache.put('componentBuilder/components/fieldSet/styles.html',
      '<div class="formBuilderOptions">' +
      '<form-builder-option property="labelStyles.color" type="color" display="Legend Color"></form-builder-option>' +
      '<form-builder-option property="labelStyles.fontSize" type="number" display="Legend Size"></form-builder-option>' +
      '<form-builder-option property="divStyles.height" type="number" display="Height"></form-builder-option>' +
      '<form-builder-option property="divStyles.backgroundColor" type="color" display="Background Color"></form-builder-option>' +
      '<form-builder-option property="divStyles.borderColor" type="color" display="Border Color"></form-builder-option>' +
      '<form-builder-option property="divStyles.borderStyle" type="select" display="Border Style" options="BORDER_STYLES"></form-builder-option>' +
      '<form-builder-option property="divStyles.borderWidth" type="number" display="Border Width"></form-builder-option>' +
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

var app = angular.module('componentBuilder');
app.config([
  'componentsProvider',
  function(componentsProvider) {
    componentsProvider.addCommonControl('hrLine', {
      title: 'Line',
      template: 'componentBuilder/components/hrLine.html',
      icon: 'fa fa-minus',
      settings: {
        icon: true,
        inputType: '',
        inputMask: '',
        key: 'hrLine',
        properties: {
          hidden: false,
          hideLabel: true,
          },
         divStyles: {
          color: '#ccc',
          marginLeft:'',
          marginRight:'',
          marginTop:'',
          marginBottom:'',
         'border-top': '1px solid',
          borderStyle:'',

        },
        others:{
          bootstrapGridClass:''
           },
        conditional: {
          show: null,
          when: null,
          eq: ''
        }
      },
      configurations: [{
        
        title: 'Display',
        template: 'componentBuilder/components/hrLine/settings.html'
      },{
        show:true,
        title: 'Styles',
        template: 'componentBuilder/components/hrLine/styles.html'
      }]
    });
  }
]);

app.run(['$templateCache', function($templateCache) {
       $templateCache.put('componentBuilder/components/hrLine.html',
      '<hr  ng-style="component.divStyles"'+
      '></hr>');

       $templateCache.put('componentBuilder/components/hrLine/settings.html',
        '<div class="formBuilderOptions">' +
          '<form-builder-option property="others.bootstrapGridClass" type="select"  display="Size" options="BOOTSTRAP_GRID_CLASSES" object_format="true"></form-builder-option>' +
        '</div>'

      );

    $templateCache.put('componentBuilder/components/hrLine/styles.html',
      '<div class="formBuilderOptions">' +
      '<form-builder-option property="divStyles.color" type="color" display="Color"></form-builder-option>' +
      '<form-builder-option property="divStyles.borderStyle" type="select" display="Border Style" options="BORDER_STYLES"></form-builder-option>' +
      '<form-builder-option property="divStyles.marginLeft" type="number" display="Margin Left"></form-builder-option>' +
      '<form-builder-option property="divStyles.marginRight" type="number" display="Margin Right"></form-builder-option>' +
      '<form-builder-option property="divStyles.marginTop" type="number" display="Margin Top"></form-builder-option>' +
      '<form-builder-option property="divStyles.marginBottom" type="number" display="Margin Bottom"></form-builder-option>' +
      '</div>'

    );
  }



]);

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


var app = angular.module('componentBuilder');
app.config([
    'componentsProvider',
    function(componentsProvider) {
        componentsProvider.addControl('multiSelectCheckbox', {
            title: 'Multi Check',
            template: 'componentBuilder/components/multiSelectCheckbox.html',
            icon: 'fa fa-check-square-o',
            settings: {
                icon: true,
                inputType: 'checkbox',
                inputMask: '',
                key: 'multiSelectCheckbox',
                isModelNeeded: true,
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
                labelStyles: {
                    lableColor: '',
                    labelSize: '',
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
                template: 'componentBuilder/components/multiSelectCheckbox/settings.html'
            },
            {
                title: 'Styles-Label',
                template: 'componentBuilder/components/multiSelectCheckbox/stylesLabel.html'
            }, {
                title: 'Styles-checkbox',
                template: 'componentBuilder/components/multiSelectCheckbox/styles.html'
            }, {
                title: 'Validations',
                template: 'componentBuilder/components/multiSelectCheckbox/validations.html'
            }, {
                title: 'Conditions',
                template: 'componentBuilder/components/common/conditional.html'
            }]
        });
    }
]);

app.run(['$templateCache', function($templateCache) {
        $templateCache.put('componentBuilder/components/multiSelectCheckbox.html', '<div><p ng-style="component.labelStyles"' +
            'ng-bind="component.properties.label" ng-hide="component.properties.hideLabel"></p>' +
            '<multi-select-checkbox options="component.properties.options" selected-data ="data[component.properties.model]" styles="component.styles"></multi-select-checkbox>' +
            '</div>');



        $templateCache.put('componentBuilder/components/multiSelectCheckbox/settings.html',
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

           $templateCache.put('componentBuilder/components/multiSelectCheckbox/stylesLabel.html',
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
        $templateCache.put('componentBuilder/components/multiSelectCheckbox/styles.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="styles.textAlign" type="select" display="Text Align" options="TEXT_ALIGN_TYPES"></form-builder-option>' +
            '<form-builder-option property="styles.color" type="color" display="Text Color"></form-builder-option>' +
            '<form-builder-option property="styles.fontSize" type="number" display="Font Size"></form-builder-option>' +
            '<form-builder-option property="styles.fontWeight" type="select" display="Text Weight" options="FONT_WEIGHT_TYPES"></form-builder-option>' +
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

        $templateCache.put('componentBuilder/components/multiSelectCheckbox/validations.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="validations.required" type="checkbox" display="Is Required"></form-builder-option>' +
            '</div>'

        );
    }



]);


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


var app = angular.module('componentBuilder');
app.config([
  'componentsProvider',
  function(componentsProvider) {
    componentsProvider.addCommonControl('panel', {
      title: 'Panel',
      template: 'componentBuilder/components/panel.html',
      icon: 'fa fa-window-maximize',
      settings: {
        title: 'Panel',
        icon: true,
        inputType: '',
        inputMask: '',
        theme:'primary',
        key: 'panel',
        properties: {
          show:true,
          hidden: false,
          hideLabel: true,
          json: [],
        },
        divStyles: {
          height: 100,
          color: 'black',
          marginLeft: '',
          marginRight: 5,
          marginTop: 5,
          marginBottom: '', 
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: '',
          paddingBottom: '',
         

        },
        labelStyles:{
          color:'white',
          fontSize:''
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
        template: 'componentBuilder/components/panel/settings.html'
      }, {
        title: 'Styles',
        template: 'componentBuilder/components/panel/styles.html'
      }]
    });
  }
]);

app.run(['$templateCache', function($templateCache) {
    $templateCache.put('componentBuilder/components/panel.html',
     
      '<div class="panel panel-{{component.theme}}"  style="display:block;margin-top:5px;padding:0px" >'+
        '<div class="panel-heading"><strong ng-style="component.labelStyles" ng-bind="component.properties.label"></strong></div>'+
      '<div class="panel-body">' +
         '<div class="dropzone" ng-if="component.properties" ng-style="component.divStyles"  dnd-list dnd-drop="callback({event:event,targetList: component.properties.json, targetIndex: index})">' +
        '<form-renderer json="component.properties.json"  editable="editable"></form-renderer>' +
      ' </div>' +
      ' </div>' +
      '</div>'
    );

    $templateCache.put('componentBuilder/components/panel/settings.html',
      '<div class="formBuilderOptions">' +
      '<form-builder-option property="properties.label" type="text" display="Label"></form-builder-option>' +
      '<form-builder-option property="others.bootstrapGridClass" type="select"  display="Size" options="BOOTSTRAP_GRID_CLASSES" object_format="true"></form-builder-option>' +
      '</div>'

    );
    $templateCache.put('componentBuilder/components/panel/styles.html',
      '<div class="formBuilderOptions">' +
       '<form-builder-option property="theme" type="select" display="Theme" options="PANEL_TYPE"></form-builder-option>' +
       '<form-builder-option property="labelStyles.color" type="color" display="Label Color"></form-builder-option>' +
      '<form-builder-option property="labelStyles.fontSize" type="number" display="Font Size"></form-builder-option>' +
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


var app = angular.module('componentBuilder');
app.config([
    'componentsProvider',
    function(componentsProvider) {
        componentsProvider.addControl('scoreRadioButton', {
            title: 'Score Radio',
            template: 'componentBuilder/components/scoreRadioButton.html',
            icon: 'fa fa-circle-o',
            settings: {
                icon: true,
                inputType: 'radio',
                inputMask: '',
                key: 'scoreRadioButton',
                isModelNeeded: true,
                isModelScoreNeeded:true,
                properties: {
                    label: 'Score Radio ',
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
                    scoreModel: '',
                    icon: true,
                    hidden: false,
                    hideLabel: false,
                    bootstrapClass: '',
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
                    fontWeight:'',
                    backgroundColor:'',
                    marginLeft: '',
                    marginRight: '',
                    marginTop: '',
                    marginBottom: '',
                },
               scoreStyles:{
                  width:100,
                  marginLeft: 10,
                  marginRight:'',
                  marginTop: '',
                  marginBottom: '',
                  display:'inline'
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
                template: 'componentBuilder/components/scoreRadioButton/settings.html'
            }, {
                title: 'Styles- Label',
                template: 'componentBuilder/components/scoreRadioButton/labelStyles.html'
            }, {
                title: 'Styles- Radio',
                template: 'componentBuilder/components/scoreRadioButton/stylesRadio.html'
            }, {
                title: 'Styles - Score',
                template: 'componentBuilder/components/scoreRadioButton/stylesScore.html'
            }, {
                title: 'Validations',
                template: 'componentBuilder/components/scoreRadioButton/validations.html'
            }, {
                title: 'Conditions',
                template: 'componentBuilder/components/common/conditional.html'
            }]
        });
    }
]);

app.run(['$templateCache', function($templateCache) {
        $templateCache.put('componentBuilder/components/scoreRadioButton.html', '<div><p ng-style="component.labelStyles"' +
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
            'ng-click="data[component.properties.scoreModel]=option.score"'+
            '><span ng-bind="option.value"></span></div><input type="text" class="form-control col-md-2" ng-style="component.scoreStyles" ng-disabled="component.properties.isScoreDisabled" class="form-control" ng-style="scoreStyles" ng-model="data[component.properties.scoreModel]" placeholder="score"/></div>');



        $templateCache.put('componentBuilder/components/scoreRadioButton/settings.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="properties.label" type="text" display="Label"></form-builder-option>' +
            //'<form-builder-option property="properties.name" type="text" display="Name"></form-builder-option>' +
            //'<form-builder-option property="properties.id" type="text" display="ID"></form-builder-option>' +
            '<form-builder-option property="properties.model" type="text" display="Key"></form-builder-option>' +
            '<form-builder-option property="properties.scoreModel" type="text" display="Score Key"></form-builder-option>' +
             '<form-builder-option property="others.bootstrapGridClass" type="select"  display="Size" options="BOOTSTRAP_GRID_CLASSES" object_format="true"></form-builder-option>' +
            // '<form-builder-option property="properties.options" type="radio" [checked]="idx === 0" display="options" value="option.name"></form-builder-option>' +
            '<form-builder-option property="properties.options" type="score_options"  display="options"></form-builder-option>' +
            '<form-builder-option property="properties.hideLabel" type="checkbox"  display="Hide Label"></form-builder-option>' +
            '<form-builder-option property="properties.disabled" type="checkbox"  display="Is Disabled"></form-builder-option>' +
            '<form-builder-option property="properties.readonly" type="checkbox"  display="Is ReadOnly"></form-builder-option>' +
            '</div>'

        );
          $templateCache.put('componentBuilder/components/scoreRadioButton/stylesLabel.html',
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

        $templateCache.put('componentBuilder/components/scoreRadioButton/stylesRadio.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="styles.textAlign" type="select" display="Text Align" options="TEXT_ALIGN_TYPES"></form-builder-option>' +
            '<form-builder-option property="styles.color" type="color" display="Options Color"></form-builder-option>' +
            '<form-builder-option property="styles.fontSize" type="number" display="Options Size"></form-builder-option>' +
            '<form-builder-option property="styles.fontWeight" type="select" display="Options Weight" options="FONT_WEIGHT_TYPES"></form-builder-option>' +
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

          $templateCache.put('componentBuilder/components/scoreRadioButton/stylesScore.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="scoreStyles.width" type="number" display="Font Weight"></form-builder-option>' +
            '<form-builder-option property="scoreStyles.marginLeft" type="number" display="Margin Left"></form-builder-option>' +
            '<form-builder-option property="scoreStyles.marginRight" type="number" display="Margin Right"></form-builder-option>' +
            '<form-builder-option property="scoreStyles.marginTop" type="number" display="Margin Top"></form-builder-option>' +
            '<form-builder-option property="scoreStyles.marginBottom" type="number" display="Margin Bottom"></form-builder-option>' +
            '<form-builder-option property="scoreStyles.display" type="select" display="Display" options="DISPLAY_OPTIONS" object_format="true"></form-builder-option>' 
    
        );

        $templateCache.put('componentBuilder/components/scoreRadioButton/validations.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="validations.required" type="checkbox" display="Is Required"></form-builder-option>' +
            '</div>'

        );
    }



]);


var app = angular.module('componentBuilder');
app.config([
    'componentsProvider',
    function(componentsProvider) {
        componentsProvider.addControl('scoreSelectCombo', {
            title: 'Score scoreSelectComboSelect Combo',
            template: 'componentBuilder/components/scoreSelectCombo.html',
            icon: 'fa fa-caret-square-o-down',
            settings: {
                icon: true,
                inputType: 'select',
                inputMask: '',
                key: 'select',
                isModelNeeded: true,
                isScoreModelNeeded:true,
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
                    scoreModel:'',
                    icon: true,
                    hidden: true,
                    hideLabel: false,
                    bootstrapClass: '',
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
                    display: 'inline',
                    width: '80%',
                    float:'left'
                },
                 scoreStyles:{
                  width:"19%",
                  marginLeft: '',
                  marginRight:'',
                  marginTop: '',
                  marginBottom: '',
                  display:'inline'
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
                template: 'componentBuilder/components/scoreSelectCombo/settings.html'
            }, {
                title: 'Styles - Label',
                template: 'componentBuilder/components/scoreSelectCombo/labelStyles.html'
            }, {
                title: 'Styles - List',
                template: 'componentBuilder/components/scoreSelectCombo/listStyles.html'
            },
            {
                title: 'Styles - Score',
                template: 'componentBuilder/components/scoreSelectCombo/stylesScore.html'
            },{
                title: 'Validations',
                template: 'componentBuilder/components/scoreSelectCombo/validations.html'
            }, {
                title: 'Conditions',
                template: 'componentBuilder/components/common/conditional.html'
            }]
        });
    }
]);

app.run(['$templateCache', function($templateCache) {
        $templateCache.put('componentBuilder/components/scoreSelectCombo.html', '<div   style="display:block;" ><span ng-style="component.labelStyles"' +
            ' ng-bind="component.properties.label" ng-hide="component.properties.hideLabel"></span><div class="clearfix"></div>' + '<select ' +
            'class="form-control"' +
            'type="{{component.inputType }}"' +
            'id="{{ component.properties.id||component.componentId }}" ' +
            'name="{{ component.properties.name||component.componentId }}" ' +
            'ng-options="option as option.value for option in component.properties.options track by option.key"' +
            'ng-disabled="component.properties.disabled" ' +
            'ng-readonly="component.properties.readonly" ' +
            'ng-required="component.validations.required" ' +
            'ng-model="data[component.properties.model]"' +
            'conditional-validation ' +
            'data="data" ' +
            'ng-style="component.divStyles" '+
            'ng-change="data[component.properties.scoreModel]=data[component.properties.model]&&data[component.properties.model].score?data[component.properties.model].score:0"'+
            'component="component" > <option value="" ng-click="data[component.properties.scoreModel]=0">select</option>'+
            '</select><input type="text" class="form-control col-md-2" ng-style="component.scoreStyles" ng-disabled="component.properties.isScoreDisabled" class="form-control" ng-style="scoreStyles" ng-model="data[component.properties.scoreModel]" placeholder="score"/></div>');



        $templateCache.put('componentBuilder/components/scoreSelectCombo/settings.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="properties.label" type="text" display="Label"></form-builder-option>' +
            '<form-builder-option property="properties.name" type="text" display="Name"></form-builder-option>' +
            '<form-builder-option property="properties.id" type="text" display="ID"></form-builder-option>' +
            '<form-builder-option property="properties.model" type="text" display="Key"></form-builder-option>' +
            '<form-builder-option property="properties.scoreModel" type="text" display="Score Key"></form-builder-option>' +
            '<form-builder-option property="others.bootstrapGridClass" type="select"  display="Size" options="BOOTSTRAP_GRID_CLASSES" object_format="true"></form-builder-option>' +
            '<form-builder-option property="properties.options" type="score_options"  display="options"></form-builder-option>' +
            '<form-builder-option property="properties.hideLabel" type="checkbox"  display="Hide Label"></form-builder-option>' +
            '<form-builder-option property="properties.disabled" type="checkbox"  display="Is Disabled"></form-builder-option>' +
            '<form-builder-option property="properties.readonly" type="checkbox"  display="Is ReadOnly"></form-builder-option>' +
            '</div>'

        );

       $templateCache.put('componentBuilder/components/scoreSelectCombo/stylesScore.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="scoreStyles.width" type="text" display="width"></form-builder-option>' +
            '<form-builder-option property="scoreStyles.marginLeft" type="number" display="Margin Left"></form-builder-option>' +
            '<form-builder-option property="scoreStyles.marginRight" type="number" display="Margin Right"></form-builder-option>' +
            '<form-builder-option property="scoreStyles.marginTop" type="number" display="Margin Top"></form-builder-option>' +
            '<form-builder-option property="scoreStyles.marginBottom" type="number" display="Margin Bottom"></form-builder-option>' +
            '<form-builder-option property="scoreStyles.display" type="select" options="DISPLAY_OPTIONS" object_format="true"></form-builder-option>'+
            '</div>'
        );
           $templateCache.put('componentBuilder/components/scoreSelectCombo/labelStyles.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="labelStyles.color" type="color" display="Text Color"></form-builder-option>' +
            '<form-builder-option property="labelStyles.backgroundColor" type="color" display="Background Color"></form-builder-option>' +
            '<form-builder-option property="labelStyles.fontSize" type="number" display="Font Size"></form-builder-option>' +
            '<form-builder-option property="labelStyles.fontWeight" type="number" display="Font Weight"></form-builder-option>' +
            '<form-builder-option property="labelStyles.marginLeft" type="number" display="Margin Left"></form-builder-option>' +
            '<form-builder-option property="labelStyles.marginRight" type="number" display="Margin Right"></form-builder-option>' +
            '<form-builder-option property="labelStyles.marginTop" type="number" display="Margin Top"></form-builder-option>' +
            '<form-builder-option property="labelStyles.marginBottom" type="number" display="Margin Bottom"></form-builder-option>'+ 
           '</div>'

        );
        $templateCache.put('componentBuilder/components/scoreSelectCombo/listStyles.html',
            '<div class="formBuilderOptions">' +
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
            '<form-builder-option property="divStyles.width" type="text" display="Width"></form-builder-option>' +

            '</div>'

        );

        $templateCache.put('componentBuilder/components/scoreSelectCombo/validations.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="validations.required" type="checkbox" display="Is Required"></form-builder-option>' +
            '</div>'

        );
    }



]);


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


 var app = angular.module('componentBuilder');
 app.run(['$templateCache', function($templateCache) {

     $templateCache.put('componentBuilder/components/common/conditional.html',
         '<form-builder-conditional></form-builder-conditional>'
     );

     $templateCache.put('componentBuilder/components/editbuttons.html',
         '<div class=\"component-btn-group\">' +
         '<div class=\"btn btn-xxs btn-danger component-settings-button\" style=\"z-index: 1000\" ng-click=\"$emit(\'deleteComponent\',json,$index);\"><span class=\"glyphicon glyphicon-remove\"></span></div>' +
         '<div class=\"btn btn-xxs btn-default component-settings-button\" style=\"z-index: 1000\" ng-click=\"$emit(\'editComponent\',componentObj);\"><span class=\"glyphicon glyphicon-edit\"></span></div>\n</div>\n'
     );

     $templateCache.put('componentBuilder/components/previewForm.html',
         '<div class=\"modal-header  \" style=\"padding:9px 15px;border-bottom:1px solid #eee;background-color: #337ab7;color:#fff\">' +
         '   <div class=\"table-header\">' +
         '       <button aria-hidden=\"true\" data-dismiss=\"modal\"  style=\"color:#fff; opacity: 1;\" class=\"close\"  type=\"button\"  ng-click=\"cancel()\">' +
         '           <span title=\"close\">×</span>\n' +
         '       </button>' +
         '       <strong> {{title || "Modal Title"}} </strong>' +
         '   </div>' +
         '</div>' +
         '<div class=\"modal-body\"><div class="row">' +
         '<form-renderer json="json" data="data" class-selected="classSelected"></form-renderer>' +
         '</div></div>');

     $templateCache.put('componentBuilder/components/searchForm.html',
         '<div class=\"modal-header  \" style=\"padding:9px 15px;border-bottom:1px solid #eee;background-color: #337ab7;color:#fff\">' +
         '   <div class=\"table-header\">' +
         '       <button aria-hidden=\"true\" data-dismiss=\"modal\"  style=\"color:#fff; opacity: 1;\" class=\"close\"  type=\"button\"  ng-click=\"cancel()\">' +
         '           <span title=\"close\">×</span>\n' +
         '       </button>' +
         '       <strong> {{title || "Modal Title"}} </strong>' +
         '   </div>' +
         '</div>' +
         '<div class=\"modal-body\"><div class="row">' +
         '<div class="col-xs-12 col-sm-12 padding-zero">' +
         // '<table class="table table-bordered  table-stripped container color"><tr ng-repeat = "formList in getFormList track by $index"><td class="tableBorder" ng-dblclick="showData(formList)">{{formList.formName}}</td></tr></table>' +
         '<div style="height:400px;"  ui-grid="gridOptions" ui-grid-pagination ui-grid-selection ui-grid-resize-columns ui-grid-edit ui-grid-move-columns class="grid"></div>' +
         '</div>' +
         '</div></div>');

     $templateCache.put('componentBuilder/components/renderControlForm.html',
         '<div class=\"modal-header  \" style=\"padding:9px 15px;border-bottom:1px solid #eee;background-color: #337ab7;color:#fff\">' +
         '   <div class=\"table-header\">' +
         '       <button aria-hidden=\"true\" data-dismiss=\"modal\"  style=\"color:#fff; opacity: 1;\" class=\"close\"  type=\"button\"  ng-click=\"cancel()\">' +
         '           <span title=\"close\">×</span>\n' +
         '       </button>' +
         '       <strong> {{title || "Modal Title"}} </strong>' +
         '   </div>' +
         '</div>' +
         '<div class=\"modal-body\"><div class="row">' +
         '<div class="col-xs-12 col-sm-12 padding-zero">' +
         // '<table class="table table-bordered  table-stripped container color"><tr ng-repeat = "formList in getFormList track by $index"><td class="tableBorder" ng-dblclick="showData(formList)">{{formList.formName}}</td></tr></table>' +
         '<create-custom-control json="json"></create-custom-control>' +
         '</div>' +
         '</div></div>');

 }]);


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


var app = angular.module('componentBuilder');
app.config([
    'componentsProvider',
    function(componentsProvider) {
        componentsProvider.addControl('textfield', {
            title: 'Text Field',
            template: 'componentBuilder/components/textfield.html',
            icon: 'fa fa-minus',
            settings: {
                icon: true,
                tableView: true,
                inputType: 'text',
                backupType: 'text',
                inputMask: '',
                key: 'TextField',
                hide: false,
                isModelNeeded: true,
                properties: {
                    label: 'Text',
                    placeholder: 'Enter text',
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
                    fontSize: '',
                    marginLeft: '',
                    marginRight: '',
                    marginTop: '',
                    marginBottom: '',
                    paddingLeft: '',
                    paddingRight: '',
                    paddingTop: '',
                    paddingBottom: '',
                    fontFamily: '',
                    fontWeight: '',
                    textDecoration: '',
                    textTransform: '',
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
                    operator: '',
                    compareValue: ''
                }
            },
            configurations: [{
                show: true,
                title: 'Display',
                template: 'componentBuilder/components/textfield/settings.html'
            }, {
                title: 'Styles',
                template: 'componentBuilder/components/textfield/styles.html'
            }, {
                title: 'Validations',
                template: 'componentBuilder/components/textfield/validations.html'
            }, {
                title: 'Conditions',
                template: 'componentBuilder/components/common/conditional.html'
            }]
        });
    }
]);

app.run(['$templateCache', function($templateCache) {
        $templateCache.put('componentBuilder/components/textfield.html', '<div display="block" ng-style="component.divStyles"><span ng-style="component.labelStyles"' +
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
            'ng-minlength="component.validations.minLength" ' +
            'ng-maxlength="component.validations.maxLength" ' +
            ' conditional-validation ' +
            'data="data" ' +
            'component="component"' +
            'ng-maxlength="component.validations.maxLength"' +
            'ng-pattern="component.validations.pattern" ' +
            'ng-value="data[component.properties.model]||component.properties.defaultValue"' +
            'placeholder={{component.properties.placeholder}} ' +
            'ng-style="component.styles"' +
            '></div>');

        $templateCache.put('componentBuilder/components/textfield/settings.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="properties.label" type="text" display="Label"></form-builder-option>' +
            '<form-builder-option property="inputType" type="select" display="Input Type" options="INPUT_TYPE"></form-builder-option>' +
            '<form-builder-option property="properties.placeholder" type="text" display="Placeholder"></form-builder-option>' +
            '<form-builder-option property="properties.defaultValue" type="text" display="Default Value"></form-builder-option>' +
            //'<form-builder-option property="properties.name" type="text" display="Name"></form-builder-option>' +
            '<form-builder-option property="others.bootstrapGridClass" type="select"  display="Size" options="BOOTSTRAP_GRID_CLASSES" object_format="true"></form-builder-option>' +
            // '<form-builder-option property="properties.id" type="text" display="ID"></form-builder-option>' +
            '<form-builder-option property="properties.model" type="text" display="Key"></form-builder-option>' +
            '<form-builder-option property="properties.hideLabel" type="checkbox"  display="Hide Label"></form-builder-option>' +
            '<form-builder-option property="properties.disabled" type="checkbox"  display="Is Disabled"></form-builder-option>' +
            '<form-builder-option property="properties.readonly" type="checkbox"  display="Is ReadOnly"></form-builder-option>' +


            '</div>'

        );


        $templateCache.put('componentBuilder/components/textfield/styles.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="styles.color" type="color" display="Text Color"></form-builder-option>' +
            // '<form-builder-option property="labelStyles.lableColor" type="color" display="Label Color"></form-builder-option>' +
            // '<form-builder-option property="labelStyles.labelSize" type="number" display="Label Size"></form-builder-option>' +
            '<form-builder-option property="styles.backgroundColor" type="color" display="Background Color"></form-builder-option>' +
            '<form-builder-option property="styles.borderColor" type="color" display="Border Color"></form-builder-option>' +
            '<form-builder-option property="styles.fontSize" type="select" display="Font Size" options="FONT_TYPES"></form-builder-option>' +
            '<form-builder-option property="styles.fontWeight" type="select" display="Font Weight" options="FONT_WEIGHT_TYPES"></form-builder-option>' +
            '<form-builder-option property="labelStyles.color" type="color" display="Label Color"></form-builder-option>' +
            '<form-builder-option property="labelStyles.fontSize" type="number" display="Label Size"></form-builder-option>' +
            '<form-builder-option property="labelStyles.fontWeight" type="select" display="Label Weight" options="FONT_WEIGHT_TYPES"></form-builder-option>' +
            '<form-builder-option property="styles.fontFamily" type="select" display="Font Family" options="FONT_TYPES"></form-builder-option>' +
            '<form-builder-option property="divStyles.marginLeft" type="number" display="Margin Left"></form-builder-option>' +
            '<form-builder-option property="divStyles.marginRight" type="number" display="Margin Right"></form-builder-option>' +
            '<form-builder-option property="divStyles.marginTop" type="number" display="Margin Top"></form-builder-option>' +
            '<form-builder-option property="divStyles.marginBottom" type="number" display="Margin Bottom"></form-builder-option>' +
            '<form-builder-option property="divStyles.paddingRight" type="number" display="Padding Right"></form-builder-option>' +
            '<form-builder-option property="divStyles.paddingLeft" type="number" display="Padding Left"></form-builder-option>' +
            '<form-builder-option property="divStyles.paddingTop" type="number" display="Padding Top"></form-builder-option>' +
            '<form-builder-option property="divStyles.paddingBottom" type="number" display="Padding Bottom"></form-builder-option>' +
            '<form-builder-option property="styles.fontStyle" type="select" display="Font Style" options="FONT_STYLES"></form-builder-option>' +
            '</div>'

        );


        $templateCache.put('componentBuilder/components/textfield/validations.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="validations.minLength" type="number" display="Minimum Length"></form-builder-option>' +
            '<form-builder-option property="validations.maxLength" type="number" display="Maximum Length"></form-builder-option>' +
            '<form-builder-option property="validations.pattern" type="text" display="Pattern"></form-builder-option>' +
            '<form-builder-option property="validations.required" type="checkbox" display="Is Required"></form-builder-option>' +

            '</div>'

        );
    }



]);


var app = angular.module('componentBuilder');
app.config([
    'componentsProvider',
    function(componentsProvider) {
        componentsProvider.addControl('time', {
            title: 'Time',
            template: 'componentBuilder/components/time.html',
            icon: 'fa fa-clock-o',
            settings: {
                icon: true,
                tableView: true,
                inputType: 'text',
                inputMask: '',
                key: 'time',
                isModelNeeded: true,
                properties: {
                    label: 'Time',
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
                    format: 'HH:mm'
                },
                styles: {
                    color: '',
                    backgroundColor: 'white',
                    borderColor: '#ccc',
                    fontSize: '',
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
                template: 'componentBuilder/components/time/settings.html'
            }, {
                title: 'Styles',
                template: 'componentBuilder/components/time/styles.html'
            }, {
                title: 'Validations',
                template: 'componentBuilder/components/time/validations.html'
            }, {
                title: 'Conditions',
                template: 'componentBuilder/components/common/conditional.html'
            }]
        });
    }
]);

app.run(['$templateCache', function($templateCache) {
        $templateCache.put('componentBuilder/components/time.html', '<div display="block" ng-style="component.divStyles"><span ng-style="component.labelStyles"' +
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
            'enable-date="false"' +
            'ng-style="component.styles"'+
            'save-as="ISO" '+
            'read-as="true" />' +
            '<span class="input-group-btn">' +
            '<button type="button" ng-disabled="component.properties.disabled" ng-readonly="component.properties.readonly" class="btn btn-default" ng-click="component.special.isOpen=!component.special.isOpen"><i class="fa fa-calendar"></i></button> </span>' +

            '</p></div>');



        $templateCache.put('componentBuilder/components/time/settings.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="properties.label" type="text" display="Label"></form-builder-option>' +
            //'<form-builder-option property="properties.name" type="text" display="Name"></form-builder-option>' +
            //'<form-builder-option property="properties.id" type="text" display="ID"></form-builder-option>' +
            '<form-builder-option property="others.bootstrapGridClass" type="select"  display="Size" options="BOOTSTRAP_GRID_CLASSES" object_format="true"></form-builder-option>' +
            '<form-builder-option property="properties.model" type="text" display="Key"></form-builder-option>' +
            '<form-builder-option property="properties.format" type="select" display="Format" options="TIME_FORMATS"></form-builder-option>' +
            '<form-builder-option property="properties.hideLabel" type="checkbox"  display="Hide Label"></form-builder-option>' +
            '<form-builder-option property="properties.disabled" type="checkbox"  display="Is Disabled"></form-builder-option>' +
            '</div>'

        );


        $templateCache.put('componentBuilder/components/time/styles.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="styles.color" type="color" display="Text Color"></form-builder-option>' +
            '<form-builder-option property="labelStyles.color" type="color" display="Label Color"></form-builder-option>' +
            '<form-builder-option property="labelStyles.fontSize" type="number" display="Label Size"></form-builder-option>' +
            '<form-builder-option property="labelStyles.fontWeight" type="select" display="Label Weight" options="FONT_WEIGHT_TYPES"></form-builder-option>' +
            '<form-builder-option property="styles.backgroundColor" type="color" display="Background Color"></form-builder-option>' +
            '<form-builder-option property="styles.borderColor" type="color" display="Border Color"></form-builder-option>' +
            '<form-builder-option property="styles.fontSize" type="select" display="Font Size" options="FONT_TYPES"></form-builder-option>' +
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


        $templateCache.put('componentBuilder/components/time/validations.html',
            '<div class="formBuilderOptions">' +
            '<form-builder-option property="validations.required" type="checkbox" display="Is Required"></form-builder-option>' +

            '</div>'

        );
    }



]);



 var app=angular.module('componentBuilder');
 app.directive('componentPropertiesSelector', function () {
 return {
  restrict: 'E',
  replace: true,
  scope:{
      view:'=?',
      component:'=?',
      json:'=?'
 	},
 	template:        '<div class="clearfix col-md-12">'+
                    '<div ng-include="view.template"></div>'+
                  '</div>',
 		link: function ($scope, iElement, iAttrs) {
 			 $scope.component=$scope.component||{};
 		},

   controller:function($scope,components)
    {
       

    }
 	
 } 
 })

'use strict';

 var app=angular.module('componentBuilder');
 app.directive('formBuilderConditional',['JsonManager',function(JsonManager) {
    return {
      restrict: 'E',
      scope: true,
      template: '' +
        '<div>' +
           'This component should Display:<br>' +
            '<select class="form-control input-md" ng-model="component.conditional.show">' +
            '<option ng-repeat="item in _booleans track by $index" value="{{item}}">{{item.toString()}}</option>' +
            '</select>' +
            '<br>When the form component:<br>' +
            '<select class="form-control input-md" ng-model="component.conditional.when">' +
            '<option ng-repeat="item in _components track by $index" value="{{item.key}}">{{item.key }}</option>' +
            '</select>' +
             '<br>Is :<br>' +
            '<select class="form-control input-md" ng-model="component.conditional.operator">' +
            '<option ng-repeat="item in operations track by $index" value="{{item.operator}}">{{item.string }}</option>' +
            '</select>' +
            '<br>Has the value:<br>' +
            '<input type="text" class="form-control input-md" ng-model="component.conditional.compareValue">' +
          '</div>',
      controller: ['$scope',function($scope) {
        debugger
         $scope._booleans = ['', 'true', 'false'];
         $scope.operations=[
         {"string":"Eqaul To",
           "operator":'=='},
           {"string":"Greater Than",
           "operator":'>'},
           {"string":"Less Than",
           "operator":'<'},
           {"string":"Not Eqaul To",
           "operator":'!='}];
         var components=JsonManager.getJSON();
         $scope._components=[];
         for(var i=0;i<components.length;i++)
         {
          if(components[i].settings&&components[i].settings.isModelNeeded&&components[i].settings.properties&&components[i].settings.properties.model){
            $scope._components.push({
              "key":components[i].settings.properties.model
             })
          }
         }

          // Default the current components conditional logic.
         /* $scope.component = $scope.component || {};
          $scope.component.conditional = $scope.component.conditional || {};

          // The available logic functions.
         

          // Filter the list of available form components for conditional logic.
          $scope._components = _.get($scope, 'form.components') || [];
          $scope._components = utils.flattenComponents($scope._components);
          // Remove non-input/button fields because they don't make sense.
          // FA-890 - Dont allow the current component to be a conditional trigger.
          $scope._components = _.reject($scope._components, function(c) {
            return !c.input || (c.type === 'button') || (c.key === $scope.component.key) || (!c.label && !c.key);
          });

          // Add default item to the components list.
          $scope._components.unshift('');

          // Default and watch the show logic.
          $scope.component.conditional.show = $scope.component.conditional.show || '';
          // Coerce show var to supported value.
          var _booleanMap = {
            '': '',
            'true': 'true',
            'false': 'false'
          };
          $scope.component.conditional.show = _booleanMap.hasOwnProperty($scope.component.conditional.show)
            ? _booleanMap[$scope.component.conditional.show]
            : '';

          // Default and watch the when logic.
          $scope.component.conditional.when = $scope.component.conditional.when || null;

          // Default and watch the search logic.
          $scope.component.conditional.eq = $scope.component.conditional.eq || '';

          // Track the status of the accordion panels open state.
          $scope.status = {
            simple: !$scope.component.customConditional,
            advanced: !!$scope.component.customConditional
          };*/
        }
      ]
    };
  }]);




 var app=angular.module('componentBuilder');
 app.directive('multiSelectCheckbox', function () {
 return {
  restrict: 'E',
  replace: true,
  scope:{
     options:'=?',
     selectedData:'=?',
     styles:'=?'
 	},
 	template:           '<div class="col-md-12">'+
                      '<div  name="checkList"  ng-style="styles" ng-click="selectCheckBox(option,$index)"  ng-repeat="option in selectedData">'+
                      '<input type="checkBox" ng-checked="option.selected">{{option.value}}'+
                      '</div></div>',
 		link: function ($scope) {
 			
        
      /* $scope.$watch('selectedData', function() {
                for (var i = 0; i < $scope.options.length; i++) {
                    $scope.options[i].selected = false;
                }
                if ($scope.selectedData){
                    var selectedBoxes = $scope.selectedData;
                    for (var i = 0; i < selectedBoxes.length; i++) {
                        var key =  selectedBoxes[i];
                        var index = parseInt(key[0]);
                        $scope.options[index].selected = true;
                    }
                }

            });*/
 		},

   controller:function($scope)
    {
             $scope.styles=$scope.styles||{};
             $scope.$watch('options',function(){
               if(!($scope.selectedData&&angular.isArray($scope.selectedData)&&$scope.options&&angular.isArray($scope.options)&&$scope.selectedData.length==$scope.options.length&&isSame($scope.selectedData,$scope.options)))
                   $scope.selectedData= $scope.options;

             });
              
            function isSame(src,dest)
            {
              for(var i=0;i<src.length;i++)
              {
                if(src[i].key!=dest[i].key||src[i].value!=dest[i].value)
                {
                  return false;
                }
              }
             return true; 
            }
      
              $scope.selectCheckBox = function(key, index) {
                        key.selected = !key.selected;
            }
  }
 	
 } 
 })


 var app=angular.module('componentBuilder');
 app.directive('multiSelectScoreCheckbox', function () {
 return {
  restrict: 'E',
  replace: true,
  scope:{
     options:'=?',
     selectedData:'=?',
     checkBoxStyles:'=?',
     scoreStyles:'=?',
     score:'=?',
     isScoreDisabled:'=?',
     component:'=?'
    },
 	template:           '<div class="col-md-12">'+
                      '<div  name="checkList" ng-style="checkBoxStyles" ng-click="selectCheckBox(option,$index)"  ng-repeat="option in selectedData">'+
                      '<input type="checkBox"  ng-checked="option.selected">{{option.value}}'+
                      '</div><input type="text" ng-disabled="isScoreDisabled" class="form-control" ng-style="scoreStyles" ng-model="score" placeholder="score"/></div>',
 		link: function ($scope) {
 			 $scope.checkBoxStyles= $scope.checkBoxStyles||{};
       $scope. scoreStyles=  $scope.scoreStyles||{};
        
      /* $scope.$watch('selectedData', function() {
                for (var i = 0; i < $scope.options.length; i++) {
                    $scope.options[i].selected = false;
                }
                if ($scope.selectedData){
                    var selectedBoxes = $scope.selectedData;
                    for (var i = 0; i < selectedBoxes.length; i++) {
                        var key =  selectedBoxes[i];
                        var index = parseInt(key[0]);
                        $scope.options[index].selected = true;
                    }
                }

            });*/
 		},

       controller:function($scope)
        {
             $scope.styles=$scope.styles||{};
             $scope.$watch('options',function(){
               if(!($scope.selectedData&&angular.isArray($scope.selectedData)&&$scope.options&&angular.isArray($scope.options)&&$scope.selectedData.length==$scope.options.length&&isSame($scope.selectedData,$scope.options)))
                   $scope.selectedData= $scope.options;
                  
             });

             $scope.$watch('selectedData',function(){
                 $scope.score=getScore($scope.selectedData,$scope.component.properties.scoreType);

             },true)
              
            function isSame(src,dest)
            {
              for(var i=0;i<src.length;i++)
              {
                if(src[i].key!=dest[i].key||src[i].value!=dest[i].value)
                {
                  return false;
                }
              }
             return true; 
            }

         function getScore(list,scoreType)
            {
              var score=0;
              if(scoreType=='sum'){
              for(var i=0;i<list.length;i++)
              {
                if(list[i].selected){
                  score+=parseInt(list[i].score);
                 }
                 }
             
              return score;
            }
            
            else if(scoreType=='large')
            {
               var big=0;
               for(var i=0;i<list.length;i++)
              {
                   if(list[i].selected){
                 if(big<list[i].score)
                 {
                  big=list[i].score;
                  }
                 }
                 
                 }
                 score=parseInt(big); 
                 return score;
               }
            } 
              $scope.selectCheckBox = function(key, index) {
                        key.selected = !key.selected;
            }
  }
 	
 } 
 })

var app = angular.module('componentBuilder');
app.factory('JsonManager', function() {
 var json=[];
 return{
  "setJSON":function(jsn)
  {
      json=jsn;
  },
  getJSON:function(){
  	return json;
  }
 }
 });	

var app = angular.module('componentBuilder');

app.factory('ComponentBuilderDataManager', function($http) {
     var IP = "http://10.5.6.103:2020/napier-componentbuilder/componentbuilder/";
    var sendRestRequest = function(headers, urlparams) {
        //var promise = DataManager.sendRestRequest(headers, urlparams);
        var contentType = "application/json";
          var promise = $http({
            method: urlparams.methodType,
            url: IP+urlparams.url,
            headers: {
                  'Content-Type': contentType,
                 },
            data:urlparams.requestData,
            });
        return promise;
    };
    return {
        sendRestRequest: sendRestRequest,
    }
})

/*app.factory('ComponentBuilderDataManager', function(DataManager) {
    var sendRestRequest = function(headers, urlparams) {
        var promise = DataManager.sendRestRequest(headers, urlparams);
        return promise;
    };
    return {
        sendRestRequest: sendRestRequest,
    }
});*/


 var app=angular.module('componentBuilder');
 app.directive('conditionalValidation', function () {
 return {
  restrict: 'A',
  replace: true,
  scope:{
    data:'=data',
    component:'=component',
  },
	link: function ($scope, iElement, iAttrs) {
     debugger
     var component=$scope.component||{};
     $scope.$watch('data',function(){
       debugger
       if($scope.data&&component.conditional&&component.conditional.show&&component.conditional.when&&component.conditional.operator&&component.conditional.compareValue){
         var when=$scope.data[component.conditional.when]?$scope.data[component.conditional.when].toString():"";
         var operation='"'+when.toString()+'"'+component.conditional.operator+' "'+component.conditional.compareValue.toString()+'"';
         if(component.conditional.show=="true")
          {
            if(when&&eval(operation)){
            component.hide=false;
           }
            else
           {
            component.hide=true;
           }
          } 
         if(component.conditional.show=="false")
          {
            if(when&&eval(operation))
            {
              component.hide=true;
           }
         else
         {
          component.hide=false;
         }
       }
       }
     },true)
 		},

   controller:function($scope,components)
    {
       

    }
 	
 } 
 })


 var app=angular.module('componentBuilder');
 app.directive('formElementRenderer', function () {
 return {
  restrict: 'E',
  replace: true,
  scope:{
      element:'=?',
      data:'=?',
      json:'=?',
      editable: '=?'
 	},
 	template:   '<div ng-hide="component.hide&&!editable">'+
                  '<div ng-include="element.template"></div>'+
 	             '</div>',
 		link: function (scope, iElement, iAttrs) {
 			
 		},

   controller:function($scope,components)
    {
      

        $scope.component=$scope.element.settings;
        $scope.componentId = $scope.component.componentId; 
       
       /* $scope.checkStyle=function(checkStyle)
        {
          var keys=Object.keys(checkStyle)
          for(var i=0;i<keys.length;i++){

          } 
        }*/
    }
 	
 } 
 })

var app = angular.module('componentBuilder');
app.directive('formRenderer', ['components', function(components) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            json: '=?',
            data: '=?',
            editable: '=?',
            classSelected: '=?'
        },
        template: '<div class="componentBuilderTemplate"  ng-repeat="componentObj in json track by componentObj.componentId" dnd-draggable="componentObj" dnd-effect-allowed="move" dnd-callback="$emit(\'elementDropped\',json,$index,componentObj,targetList,targetIndex,\'move\')"> ' +
            '<div ng-class="$parent.getSelectedClass(componentObj)||getSelectedClass(componentObj)">' +
            '<div>' +
            '<div ng-if="editable"  ng-include="\'componentBuilder/components/editbuttons.html\'" class="component-btn-group">' +
            '</div>' +
            '<div class="clearfix"></div>' +
            '<form-element-renderer json="json" editable="editable" element="componentObj" data="data"></form-element-renderer>' +
            '</div>' +
            '</div>' +
            '</div>',
        link: function(scope, iElement, iAttrs) {

        },

        controller: function($scope, components) {

            var scope = $scope;
            $scope.json = $scope.json || [];
            $scope.data = $scope.data || {};


            $scope.getSelectedClass = function(componentObj) {
                var bootstrapClass = "";
                if (componentObj.settings && componentObj.settings.others && componentObj.settings.others.bootstrapGridClass)
                    bootstrapClass = componentObj.settings.others.bootstrapGridClass;
                else if ($scope.classSelected) {
                    bootstrapClass = $scope.classSelected;
                } else {
                    bootstrapClass = "col-md-12";
                }

                if ($scope.editable && true) {

                    bootstrapClass += " designerElement"
                } else if (componentObj.settings.key == 'checkBox') {
                    bootstrapClass += " checkBoxPreview"
                }
                return bootstrapClass;
            }


        }

    }


}])


 var app=angular.module('componentBuilder');
 app.directive('scoreCaluculation', function () {
 return {
  restrict: 'A',
  replace: true,
	link: function ($scope, iElement, iAttrs) {
     debugger
     var component=$scope.component||{};
     $scope.$watch('data',function(){
      $scope.scoreModel=0;
      if($scope.data[$scope.component.properties.model])
      {
          var key=$scope.component.properties.scoreModel;
          $scope.data[key]=getScore($scope.data[$scope.component.properties.model],$scope.component.properties.scoreType);
      }
      
     },true)

     function getScore(list,scoreType)
            {
              var score=0;
              if(scoreType=='sum'){
              for(var i=0;i<list.length;i++)
              {
                
                  score+=parseInt(list[i].score);
                 }
             
              return score;
            }
            
            else if(scoreType=='large')
            {
               var big=0;
               for(var i=0;i<list.length;i++)
              {
                 if(big<list[i].score)
                 {
                  big=list[i].score;
                 }
                 
                 }
                 score=parseInt(big); 
                 return score;
               }
            } 
 		},

   controller:function($scope,components)
    {
         

    }
 	
 } 
 })

var app = angular.module('componentBuilder');
app.directive('createCustomControl', ['components', 'JsonManager', 'ComponentBuilderDataManager', function(components, JsonManager, ComponentBuilderDataManager) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            json: '=?'
        },
        template: '<div class=" componet-builder-styles container-fluid his-container padding-zero">' +
            '<div class="container-fluid padding-zero">' +
            '<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 left-section padding-zero">' +
            '<span class="form-ui-element-border">' +
            '<strong>Create Control</strong>' +
            '<div id="form-ui-element">' +
            '<div class="element-scroll1 overflow-style">' +
            '<div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 fields-icons" ng-repeat="component in components"' +
            'ng-click="generateControl(component)">' +
            '<i class="{{component.icon}}"></i>' +
            '<p class="margin-title"><strong ng-bind="component.title"></strong></p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</span>' +
            '</div>' +
            '<!-- center section  -->' +
            '<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 left-right-border padding-zero center-section" style="height:90vh;">' +
            '<div class="expandCollapseIcon padding-zero">' +
            '<i class="fa fa-caret-left collapse-doctor-worklist"></i>' +
            '</div>' +
            '<div class="expandCollapseIconright padding-zero">' +
            '<i class="fa fa-caret-right collapse-doctor-worklist-r"></i>' +
            '</div>' +
            '<div class="col-sm-12 controlBuilderArea">' +
            '<form class="form-inline" style="border:1px solid #ccc;height:25vh" ng-show="editable"><div class="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6"><label for="controlname">Control Name:</label>' +
            '<input type="text" class="form-control" ng-model="control.formControlName"></div>' +
            '<div class="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6"><label for="controldesc">Control Description:</label>' +
            '<input type="text" class="form-control" ng-model="control.fromControlDesc"></div>' +
            '<div class="col-xs-12" style="height:10vh"></div>' +
            '<label class="col-sm-5"></label>' +
            '<button class="btn btn-success" ng-click="saveControl()" ng-disabled="!control.formControlName">Save</button>' + ' ' +
            // '<button class="btn btn-default" ng-click="cancelControl()">Cancel</button>' +

            '</form>' +
            '<custom-control-preview element="json"  editable="editable" class-selected="classSelected" control-preview="true"></custom-control-preview>' +
            '</div>' +
            '</div>' +

            '<!-- right section -->' +
            '<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 right-section padding-zero overflow-style">' +
            '<div class="force-overflow"><button class="accordion">' +
            '<strong>PROPERTIES</strong>' +
            '</button>' +
            '<div class="divider"></div>' +
            '<!-- Nav tabs -->' +
            '<!--<ul class="nav nav-tabs" role="tablist">' +
            '<li role="presentation"><a href="#Properties" aria-controls="Properties" role="tab" data-toggle="tab">Properties</a></li>' +
            '<li role="presentation" class="active"><a href="#Design" aria-controls="Design" role="tab" data-toggle="tab">Design</a></li>' +
            '<li role="presentation"><a href="#Data" aria-controls="Data" role="tab" data-toggle="tab">Data</a></li>' +
            '</ul>-->' +

            '<!-- Tab panes -->' +
            '<div class="tab-content">' +
            '<div role="tabpanel" class="tab-pane" id="Properties">' +
            '<p>Properties</p>' +
            '</div>' +
            '<div role="tabpanel" class="tab-pane active" id="Design">' +
            '<!-- fist accordian  -->' +
            '<div class="form-ui-element-border" ng-repeat="view in views">' +
            '<button class="accordion" ng-click="view.show=!view.show" ng-class="{\'rightPropertiesMenuClosed\':!view.show,\'rightPropertiesMenuOpen\':view.show}">' +
            '<strong ng-bind="view.title"></strong> ' +
            '<i class="fa fa-caret-down pull-right" ng-show="!view.show"></i>' +
            '<i class="fa fa-caret-up pull-right"   ng-show="view.show"></i>' +
            '</button>' +
            '<div id="textBoxProperties" ng-show="view.show">' +
            '<div class="element-scroll overflow-style">' +
            '<form class="form-inline" ng-if="view">' +
            '<component-properties-selector json="json" view="view"  component="component"></component-properties-selector>' +
            '</form>' +
            '</div>' +
            '</div>' +
            '</div>' +


            '<!-- fist accordian end -->' +

            '</div>' +
            '<div role="tabpanel" class="tab-pane" id="Data">Data </div>' +
            '</div>' +
            '</div></div>' +
            '<!-- right section end -->' +
            '</div>' +
            '</div>',
        controller: function($scope, components) {

            $scope.components = components.getComponents();
            $scope.json = $scope.json || [];
            JsonManager.setJSON($scope.json);
            $scope.classSelected = "col-md-12";

            $scope.generateControl = function(component) {

                    var obj = angular.copy(component);
                    var name = obj.settings.key + "" + Math.round(10000 + Math.random() * 100000);
                    if (typeof(obj.settings.properties.name) != "undefined" && !obj.settings.properties.name) {
                        obj.settings.properties.name = name;
                    }
                    if (typeof(obj.settings.properties.id) != "undefined" && !obj.settings.properties.id) {
                        obj.settings.properties.id = name;
                    }
                    /* if (obj.settings.isModelNeeded && !obj.settings.properties.model) {
                         obj.settings.properties.model = name;
                     }*/
                    obj.componentId = "component-" + Math.round(10000 + Math.random() * 100000); 
                    $scope.json = obj;
                    $scope.editable = true;
                    $scope.$emit('editComponent', obj);
                }
                //            JsonManager.setJSON($scope.json);
            $scope.views = null;
            $scope.$on('editComponent', function(event, obj) {

                $scope.views = obj.configurations;
                $scope.component = obj.settings;
            });
            $scope.control = {
                status: 1
            };
            $scope.saveControl = function() {
                $scope.json.title = $scope.control.formControlName;
                if ($scope.json.settings && $scope.json.settings.isModelNeeded && !$scope.json.settings.properties.model) {
                    $scope.json.settings.properties.model = $scope.control.formControlName.replace(/\s/g, "_");
                    if($scope.json.settings.isScoreModelNeeded && !$scope.json.settings.properties.scoreModel)
                        {
                           $scope.json.settings.properties.scoreModel = $scope.json.settings.properties.model+"-score";
                        }
                }

                $scope.control.buildedControlData = JSON.stringify($scope.json);
                debugger
                var headers = {};

                /*if ($scope.mode == "Edit") {
                    var params = {
                        url: "formData",
                        requestData: $scope.control,
                        methodType: "PUT"
                    };
                } else {*/
                var params = {
                    url: "formControlData",
                    requestData: $scope.control,
                    methodType: "POST"
                };
                //}
                var promise = ComponentBuilderDataManager.sendRestRequest(headers, params);
                promise.then(function successCallback(response) {
                    if (response.data.successMessage) {
                        //$uibModalInstance.dismiss('cancel');
                        alert(response.data.successMessage);
                        $scope.$emit('customControlUpdated', response);
                    } else {
                        alert(response.data.errorMessage);

                    }

                });
            }
        }

    }
}])



 var app=angular.module('componentBuilder');
 app.directive('customControlPreview', function () {
 return {
  restrict: 'E',
  replace: true,
  scope:{
      element:'=?',
      data:'=?',
      json:'=?',
      editable: '=?',
      controlPreview:'@'
  },
  template:   '<div ng-show="component">'+
                  '<fieldset class="fsStyle" style="border:1px solid #ccc;height:25vh;">' +
                  '<legend class="legendStyle">Preview</legend>' +
                  '<label ng-class="pull-left" ng-if="component.properties.label&&!component.properties.hideLabel" for="message" class="control-label"></label>'+ 
                  '<div ng-include="element.template"></div></fieldset>'+
               '</div>',
    link: function (scope, iElement, iAttrs) {
      debugger
     
    },

   controller:function($scope,components)
    {
      
  debugger
       $scope.component=$scope.element?$scope.element.settings:{};
        $scope.componentId =$scope.component&& $scope.component.componentId?$scope.component.componentId:''; 
        $scope.data=$scope.data||{};
       $scope.$watch('element',function(){
         if($scope.controlPreview)
           {
              $scope.component=$scope.element?$scope.element.settings:{};
              $scope.componentId =$scope.component&& $scope.component.componentId?$scope.component.componentId:''; 
              $scope.data=$scope.data||{};
           }
       })
      
       /* $scope.checkStyle=function(checkStyle)
        {
          var keys=Object.keys(checkStyle)
          for(var i=0;i<keys.length;i++){

          } 
        }*/
    }
  
 } 
 })



var app = angular.module('componentBuilder');
app.directive('formBuilder', ['components', '$uibModal', 'JsonManager', 'ComponentBuilderDataManager', '$rootScope', function(components, $uibModal, JsonManager, ComponentBuilderDataManager, $rootScope) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            json: '=?',
            onlyCustomControlsAllowed: '=?'
        },
        template: '<div class=" componet-builder-styles container-fluid his-container padding-zero">' +
            '<div class="container-fluid padding-zero">' +
            '<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 left-section padding-zero overflow-style">' +
            '<div class="force-overflow" ><span class="form-ui-element-border">' +
            '<button class="accordion" data-toggle="collapse" data-target="#form-ui-element">' +
            '<strong>FORM UI ELEMENT</strong>' +
            '<i class="fa fa-caret-down pull-right"></i>' +
            '</button>' +
            '<div id="form-ui-element" class="collapse in">' +
            '<div class="form-group padding-zero input-group">' +
            '<input type="text" class="form-control search-img-icon border-right-zero border-left-zero" uib-typeahead="autoSearch for autoSearch in autoSearch | filter:$viewValue | limitTo:8" placeholder="Search" ng-model="controlSearchData" typeahead-on-select="selectMatch(controlSearchData)">' +
            '<span class="glyphicon glyphicon-search input-group-addon btn btn-sm builderControlSerach" ng-click="searchControlForm(controlSearchData)"></span>' +
            '<span class="glyphicon glyphicon-plus input-group-addon btn btn-sm builderControlSerach" ng-click="renderControlForm()"></span>' +
            '</div>' +
            '<div class="element-scroll" ng-hide="onlyCustomControlsAllowed">' +
            '<div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 fields-icons" ng-repeat="component in components"' +
            'dnd-draggable="component"' +
            'dnd-effect-allowed="copy"' +
            'dnd-callback="elementDropped(event,components,$index,component,targetList,targetIndex )">' +
            '<i class="{{component.icon}}"></i>' +
            '<p class="margin-title"><strong ng-bind="component.title"></strong></p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</span>' +
            '<span class="form-ui-element-border">' +
            '<!--<button class="accordion" data-toggle="collapse" data-target="#commonElement">' +
            '<strong>CUSTOM ELEMENTS</strong>' +
            '<i class="fa fa-caret-down pull-right"></i>' +
            '</button>-->' +
            '<div id="commonElement" class="collapse in">' +
            ' <div class="element-scroll  overflow-style" data-slim-scroll>' +
            '<div><div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 fields-icons" ng-repeat="component in customControls"' +
            'dnd-draggable="component"' +
            'dnd-effect-allowed="copy"' +
            'dnd-callback="elementDropped(event,components,$index,component,targetList,targetIndex )">' +
            '<button aria-hidden=\"true\" data-dismiss=\"modal\"  style=\"color:#fff; opacity: 1;position:absolute;top:0px;color:red;right:0px;\" class=\"close\"  type=\"button\"  ng-click=\"customControls.splice($index,1)\">' +
            '<span title=\"close\">×</span>\n' +
            '</button>' +
            '<i class="{{component.icon}}"></i>' +
            '<p class="margin-title"><strong ng-bind="component.title"></strong></p>' +
            '</div> </div>' +
            '</div>' +
            '</div>' +
            '</span>' +
            '<span class="form-ui-element-border">' +
            '<button class="accordion" data-toggle="collapse" data-target="#commonElement">' +
            '<strong>COMMON ELEMENTS</strong>' +
            '<i class="fa fa-caret-down pull-right"></i>' +
            '</button>' +
            '<div id="commonElement" class="collapse in">' +
            ' <div class="element-scroll overflow-style">' +
            '<div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 fields-icons" ng-repeat="component in commonComponents"' +
            'dnd-draggable="component"' +
            'dnd-effect-allowed="copy"' +
            'dnd-callback="elementDropped(event,components,$index,component,targetList,targetIndex )">' +
            '<i class="{{component.icon}}"></i>' +
            '<p class="margin-title"><strong ng-bind="component.title"></strong></p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</span>' +
            '</div></div>' +
            '<!-- center section  -->' +
            '<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 left-right-border padding-zero center-section" style="height:90vh;">' +
            '<div class="expandCollapseIcon padding-zero">' +
            '<i class="fa fa-caret-left collapse-doctor-worklist"></i>' +
            '</div>' +
            '<div class="row border border-top-zero margin-zero">' +
            '<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">' +
            '<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 padding-left-zero">' +
            '<div class="form-group">' +
            '<select class="form-control" ng-model="classSelected">' +
            '<option hidden>Category</option>' +
            '<option value="col-md-12">1 Field Form</option>' +
            '<option value="col-md-6">2 Fields Form</option>' +
            '<option value="col-md-4">3 Fields Form</option>' +
            '<option value="col-md-3">4 Fields Form</option>' +
            '<option value="col-md-2">6 Fields Form</option>' +
            '</select>' +
            '</div>' +
            '</div>' +
            // '<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 padding-zero">' +
            // '<div class="form-group">' +
            // '<select class="form-control">' +
            // '<option hidden>75%</option>' +
            // '<option>65%</option>' +
            // '</select>' +
            // '</div>' + '' +
            // '</div>' +
            '<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 padding-zero">' +
            '<div class="form-group">' +
            '<input type="text" class="form-control" placeholder="Enter Form Name" ng-model="formData.formName">' +
            '</div>' +
            '</div>' +
            '<div class="form-group">' +
            '<button class="fa fa-search btn btn-sm btn-primary btn btn-md left-right-space"  style="padding-top:6px;font-size:14px"  ng-click="searchForm()"></button>' +
            '</div>' +
            '</div>' +
            '<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 top-space">' +
            '<button class="btn btn-primary lg-btn-size pull-right left-right-space" ng-click="previewForm()">Preview</button>' +
            '<button class="btn btn-success lg-btn-size pull-right left-right-space" ng-disabled="!formData.formName" ng-click="saveForm()">Save</button>' +

            // '<button class="btn btn-default sm-btn-space pull-right left-right-space"><i class="fa fa-reply" aria-hidden="true"></i></button>' +
            // '<button class="btn btn-default sm-btn-space pull-right left-right-space"><i class="fa fa-share" aria-hidden="true"></i></button>' +
            // '<button class="pull-right btn-link"><i class="fa fa-arrows-h" aria-hidden="true"></i></button>' +
            '</div>' +

            '</div>' +
            '<div class="expandCollapseIconright padding-zero">' +
            '<i class="fa fa-caret-right collapse-doctor-worklist-r"></i>' +
            '</div>' +
            '<div class="col-md-12 overflow-style builderArea dropzone "' +
            'dnd-list dnd-drop="callback({event:event,targetList: json, targetIndex: index})">' +
            '<form-renderer json="json" data="data" editable="editable" class-selected="classSelected"></form-renderer>' +
            '<div class="clearfix"></div>' +
            '<div  style="text-align:center;position:relative;top: 25px;font-size:20px;" role="alert">' +
            'Drag and Drop a form component' +
            '</div>' +
            '</div>' +
            //form purpose
            /*'<div class="row border border-top-zero margin-zero">' +
            '<div class="col-xs-12 col-sm-12 col-md-11 col-lg-11">' +
            '<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 padding-left-zero">' +
            '<div class="form-group row">' +
            '<label class="col-sm-4 col-form-label">Form Name:</label><div class="col-sm-8"><input type="text" class="form-control" placeholder="Enter Form Name to save" ng-model="formData.formName">' +
            '</div></div></div>' +
            '<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 padding-left-zero">' +
            '<div class="form-group row">' +
            '<label class="col-sm-5 col-form-label">Context Name</label><div class="col-sm-7"><select class="form-control" ng-model="formData.context" ng-options="contextdata.contextName for contextdata in contextDataList track by contextdata.contextId">' +
            '</select></div>' +
            '</div></div>' +
            '<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 padding-left-zero">' +
            '<div class="form-group row">' +
            '<label class="col-sm-6 col-form-label">Sub-Context Name</label><div class="col-sm-6"><select class="form-control" ng-model="formData.subContext" ng-options="subcontextdata.subContextName for subcontextdata in subContextDataList track by subcontextdata.subContextId">' +
            '</select></div>' +
            '</div></div></div>' +
            '<div class="col-xs-12 col-sm-12 col-md-1 col-lg-1">' +
            '<button class="btn btn-success lg-btn-size pull-right left-right-space" ng-disabled="!formData.formName" ng-click="saveForm()">Save</button>' +
            '</div>' +
            //form end
            '</div>*/
            '</div>' +

            '<!-- right section -->' +
            '<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 right-section padding-zero  overflow-style">' +
            '<div class="force-overflow"><button class="accordion">' +
            '<strong>PROPERTIES</strong>' +
            '</button>' +
            '<div class="divider"></div>' +
            '<!-- Nav tabs -->' +
            '<!--<ul class="nav nav-tabs" role="tablist">' +
            '<li role="presentation"><a href="#Properties" aria-controls="Properties" role="tab" data-toggle="tab">Properties</a></li>' +
            '<li role="presentation" class="active"><a href="#Design" aria-controls="Design" role="tab" data-toggle="tab">Design</a></li>' +
            '<li role="presentation"><a href="#Data" aria-controls="Data" role="tab" data-toggle="tab">Data</a></li>' +
            '</ul>-->' +

            '<!-- Tab panes -->' +
            '<div class="tab-content">' +
            '<div role="tabpanel" class="tab-pane" id="Properties">' +
            '<p>Properties</p>' +
            '</div>' +
            '<div role="tabpanel" class="tab-pane active" id="Design">' +
            '<!-- fist accordian  -->' +
            '<div class="form-ui-element-border" ng-repeat="view in views">' +
            '<button class="accordion" ng-click="view.show=!view.show" ng-class="{\'rightPropertiesMenuClosed\':!view.show,\'rightPropertiesMenuOpen\':view.show}">' +
            '<strong ng-bind="view.title"></strong> ' +
            '<i class="fa fa-caret-down pull-right" ng-show="!view.show"></i>' +
            '<i class="fa fa-caret-up pull-right"   ng-show="view.show"></i>' +
            '</button>' +
            '<div id="textBoxProperties" ng-show="view.show">' +
            '<div class="element-scroll_properties">' +
            '<form class="form-inline" ng-if="view">' +
            '<component-properties-selector json="json" view="view"  component="component"></component-properties-selector>' +
            '</form>' +
            '</div>' +
            '</div>' +
            '</div>' +


            '<!-- fist accordian end -->' +

            '</div>' +
            '<div role="tabpanel" class="tab-pane" id="Data">Data </div>' +
            '</div>' +
            '</div> </div>' +
            '<!-- right section end -->' +
            '</div>' +
            '</div>',
        link: function(scope, iElement, iAttrs) {
            scope.editable = true;
        },

        controller: function($scope, components, $rootScope) {

            $scope.components = components.getComponents();
            $scope.commonComponents = components.getCommonComponents();
            $scope.json = $scope.json || [];
            JsonManager.setJSON($scope.json);
            $scope.classSelected = "col-md-12";

            $scope.elementDropped = function(event, components, srcIndex, component, target, targetIndex, link) {
                debugger
                event.stopPropagation();
                if (link == "move") {
                    var obj = component;
                    target.splice(srcIndex, 1);
                    target.splice(targetIndex - 1, 0, obj);
                } else {
                    var obj = angular.copy(component);
                    var name = obj.settings.key + "" + Math.round(10000 + Math.random() * 100000);
                    if (typeof(obj.settings.properties.name) != "undefined" && !obj.settings.properties.name) {
                        obj.settings.properties.name = name;
                    }
                    if (typeof(obj.settings.properties.id) != "undefined" && !obj.settings.properties.id) {
                        obj.settings.properties.id = name;
                    }
                    if (obj.settings.isModelNeeded && !obj.settings.properties.model) {
                        obj.settings.properties.model = name;
                    }
                    if (obj.settings.isScoreModelNeeded && !obj.settings.properties.scoreModel) {
                        obj.settings.properties.scoreModel = name + "-score";
                    }

                    obj.componentId = "component-" + Math.round(10000 + Math.random() * 100000); 
                    target.splice(targetIndex, 0, obj);
                    $scope.$emit('editComponent', obj);
                }
                JsonManager.setJSON($scope.json);

            }
            $rootScope.$on('selectedRowData', function(event, args) {
                debugger
                $scope.json = JSON.parse(args[0].buildedFormData);
                JsonManager.setJSON($scope.json);
                $scope.mode = args.mode;
                $scope.formData.formName = args[0].formName;
                $scope.formData.formId = args[0].formId ? args[0].formId : null;
                $scope.classSelected = args[0].noOfColumns;
                $scope.formData.formMapId = args[0].formMapId ? args[0].formMapId : null;

            })
            $scope.searchForm = function() {
                var headers = {};
                var params = {};

                var params = {
                    url: "formData/search",
                    requestData: {
                        "formName": $scope.formData.formName,
                        "status": 1,
                        formId: null
                    },
                    methodType: "POST"
                };

                var promise = ComponentBuilderDataManager.sendRestRequest(headers, params);
                promise.then(function successCallback(response) {
                    if (response.data.successMessage) {} else {
                        alert("Search Failed");

                    }
                    $uibModal.open({
                        templateUrl: 'componentBuilder/components/searchForm.html',
                        size: 'lg',
                        backdrop: 'static',
                        keyboard: false,
                        controller: function($scope, $uibModalInstance) {
                            $scope.gridOptions = {
                                enableFiltering: false,
                                rowSelection: 'single',
                                enableRowSelection: true,
                                enableRowHeaderSelection: true,
                                paginationPageSizes: [9, 18, 27],
                                paginationPageSize: 9,
                                enableCellEdit: false,
                                enableRowHeaderSelection:  false,
                                multiSelect:  false,

                                columnDefs: [{
                                    field: 'formName',
                                    displayName: 'Form Name',
                                    width: '*',
                                    resizable: true,
                                }],
                                onRegisterApi: function(gridApi) {
                                    $scope.myGridApi = gridApi;
                                    $scope.myGridApi.selection.getSelectedRows();
                                    gridApi.selection.on.rowSelectionChanged($scope, function(row) {
                                        $scope.select = {};
                                        $scope.select = $scope.myGridApi.selection.getSelectedRows();
                                        $scope.mode = "Edit";
                                        $scope.select.mode = $scope.mode;
                                        $rootScope.$emit("selectedRowData", $scope.select);
                                        $scope.testing = true;
                                        $scope.cancel();
                                    });
                                }
                            }

                            $scope.title = "Search";

                            $scope.gridOptions.data = response.data.dataBean;
                            for (var i = 0; i < response.data.dataBean.length; i++) {
                                $scope.json = JSON.parse(response.data.dataBean[i].buildedFormData);
                            }

                            $scope.cancel = function() {
                                $uibModalInstance.dismiss('cancel');
                            }

                        }
                    });
                });
            }


            $scope.searchData = {
                status: 1
            }

            $scope.$on('elementDropped', function(event, components, srcIndex, component, target, targetIndex, link) {
                $scope.elementDropped(event, components, srcIndex, component, target, targetIndex, link);
            })

            $scope.formData = {
                formName: "",
                status: 1,
                createdBy: "",
                buildedFormData: '',
                noOfColumns: ''
            }

            $scope.saveForm = function() {
                $scope.formData.buildedFormData = JSON.stringify($scope.json);
                $scope.formData.noOfColumns = $scope.classSelected;
                debugger
                var headers = {};

                if ($scope.mode == "Edit") {
                    var params = {
                        url: "formData",
                        requestData: $scope.formData,
                        methodType: "PUT"
                    };
                } else {
                    var params = {
                        url: "formData",
                        requestData: $scope.formData,
                        methodType: "POST"
                    };
                }




                var promise = ComponentBuilderDataManager.sendRestRequest(headers, params);
                promise.then(function successCallback(response) {
                    if (response.data.successMessage) {

                        alert(response.data.successMessage);
                        $rootScope.$emit('formDataRefresh', response);
                    } else {
                        alert(response.data.errorMessage);

                    }

                });

            }
            $scope.customControls = [];
            $scope.searchControlForm = function(name) {
                // 
                $scope.formData.buildedFormData = JSON.stringify($scope.json);
                debugger
                var headers = {};
                var params = {
                    url: "formControlData/search",
                    requestData: {
                        status: 1,
                        formControlName: name
                    },
                    methodType: "POST"
                };


                var promise = ComponentBuilderDataManager.sendRestRequest(headers, params);
                promise.then(function successCallback(response) {
                    if (response.data.successMessage) {
                        debugger
                        if (response.data.dataBean && response.data.dataBean.length) {
                            for (var i = 0; i < response.data.dataBean.length; i++) {
                                if (response.data.dataBean[i].buildedControlData) {
                                    if (!((_.filter($scope.customControls, function(obj) {
                                            return response.data.dataBean[i].formControlName == obj.title
                                        })).length)) {
                                        $scope.customControls.push(JSON.parse(response.data.dataBean[i].buildedControlData));
                                    }
                                }
                            }
                        }
                    }
                });
            }


            //$scope.getControls();

            $scope.previewForm = function() {
                var json = angular.copy($scope.json);
                var noOfColumns = $scope.classSelected;
                $uibModal.open({
                    templateUrl: 'componentBuilder/components/previewForm.html',
                    size: 'lg',
                    backdrop: 'static',
                    keyboard: false,
                    resolve: {
                        noOfColumns: function() {
                            return noOfColumns;
                        }
                    },
                    controller: function($scope, $uibModalInstance, noOfColumns) {
                        $scope.json = json;
                        $scope.title = "Preview";
                        $scope.classSelected = noOfColumns;

                        $scope.cancel = function() {
                            $uibModalInstance.dismiss('cancel');
                        }

                    }
                });
            }

            $scope.views = null;
            $scope.$on('editComponent', function(event, obj) {

                $scope.views = obj.configurations;
                $scope.component = obj.settings;
            });

            $scope.$on('deleteComponent', function(event, json, index) {
                if (confirm("Do you want to remove?")) {
                    json.splice(index, 1);
                }

            });
            $scope.renderControlForm = function() {
                $uibModal.open({
                    templateUrl: 'componentBuilder/components/renderControlForm.html',
                    size: 'lg',
                    backdrop: 'static',
                    keyboard: false,
                    controller: function($scope, $uibModalInstance) {
                        $scope.title = "Create Control";

                        $scope.cancel = function() {
                            $uibModalInstance.dismiss('cancel');
                        }
                        $scope.$on('customControlUpdated', function() {
                            $scope.cancel();
                        });
                    }
                });

            }

            $scope.autoSearch = [];
            $scope.autoCompleteSearch = function() {

                var headers = {};
                var params = {
                    url: "formControlData/autoComplete",
                    requestData: "",
                    methodType: "GET"
                };
                var promise = ComponentBuilderDataManager.sendRestRequest(headers, params);
                promise.then(function successCallback(response) {
                    if (response.data.successMessage) {
                        debugger
                        if (response.data.dataBean && response.data.dataBean.length) {
                            $scope.autoSearch = response.data.dataBean;
                            /*for (var i = 0; i < response.data.dataBean.length; i++) {
                                if (response.data.dataBean[i].buildedControlData) {
                                    $scope.customControls.push(JSON.parse(response.data.dataBean[i].buildedControlData));
                                }
                            }*/
                        }
                    }
                });
            }


            $scope.getContextData = function() {
                var headers = {};
                var params = {
                    url: "formData/getContextDetails",
                    requestData: "",
                    methodType: "GET"
                };
                var promise = ComponentBuilderDataManager.sendRestRequest(headers, params);
                promise.then(function successCallback(response) {
                    if (response.data.successMessage) {
                        debugger
                        if (response.data.dataBean && response.data.dataBean.length) {
                            $scope.contextDataList = response.data.dataBean;
                        }
                    }
                });
            }


            $scope.getSubContextData = function() {
                var headers = {};
                var params = {
                    url: "formData/getSubContextDetails",
                    requestData: "",
                    methodType: "GET"
                };
                var promise = ComponentBuilderDataManager.sendRestRequest(headers, params);
                promise.then(function successCallback(response) {
                    if (response.data.successMessage) {
                        debugger
                        if (response.data.dataBean && response.data.dataBean.length) {
                            $scope.subContextDataList = response.data.dataBean;
                        }
                    }
                });
            }
            $scope.getContextData();
            $scope.getSubContextData();
            $scope.autoCompleteSearch();
            var customControlUpdatedEvent = $rootScope.$on('customControlUpdated', function() {
                $scope.autoCompleteSearch();

            });
            $scope.selectMatch = function(controlSearchData) {
                $scope.searchControlForm(controlSearchData);
            }

            $scope.$on('destroy', function() {
                customControlUpdatedEvent();
            })
        }

    }
}])

/**
* This directive creates a field for tweaking component options.
* This needs at least a property attribute specifying what property
* of the component to bind to.
*
* If the property is defined in appConstants above, it will automatically
* populate its label, placeholder, input type, and tooltip. If not, you may specify
* those via attributes (except for tooltip, which you can specify with the title attribute).
* The generated input will also carry over any other properties you specify on this directive.
*/
var app=angular.module('componentBuilder');
  app.directive('formBuilderOption',['APP_CONSTANTS','COMBO_OPTIONS', function(APP_CONSTANTS,COMBO_OPTIONS) {
  return {
    restrict: 'E',
    require: 'property',
    priority: 2,
    scope:false,
    replace: true,
    template: function(el, attrs) {
    
      var inputAttrs = {
        model:attrs.property,
        id: attrs.property,
        name: attrs.property,
        type: attrs.type,
        options:attrs.options?attrs.options:'',
        label:attrs.display
       };

      if(inputAttrs.options)
      {
        inputAttrs.objectFormat=attrs.objectFormat;
      }     
      if (inputAttrs.type.toLowerCase() === 'checkbox') {

        return '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">'+
               '<div class="checkbox form-group display-flex">' +
                '<label for="' + inputAttrs.property + '" class="lable-width">' +inputAttrs.label +'</label>'+  
                '<input type="checkbox" class=" prop-fields" ng-model="component.'+inputAttrs.model+'"/>'+              
              '</div>'+
              '</div>';
      }
     else if (inputAttrs.type.toLowerCase() === 'select') {
          var  optionsString='<option value="">select</option>';
          var options=COMBO_OPTIONS[inputAttrs.options]||[];
          for(var i=0;i<options.length;i++)
             {
               var key=inputAttrs.objectFormat?options[i].value:options[i];
               var display=inputAttrs.objectFormat?options[i].display:options[i];
               optionsString+='<option value="'+key+'">'+display+'</option>';
             }
             return '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">'+
                    '<div class="select form-group display-flex">' +
                 '<label for="' + inputAttrs.name + '" class="lable-width" >' + inputAttrs.label + '</label>' +
                 '<select name="'+inputAttrs.name+'" class=" prop-fields" ng-model="component.'+inputAttrs.model+'">'+optionsString+'</select>'+
                 '</div>'+
                 '</div>';

             }
      else if(inputAttrs.type.toLowerCase() === 'options') {
         return '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">'+
              '<label for="' + inputAttrs.name + '" class="lable-width">' + inputAttrs.label + '</label>'+
              '<button type="button" class="btn btn-default btn-xs" ng-click=\"hide=!hide\"><span class="glyphicon glyphicon-option-horizontal" aria-hidden="true"></span></button>'+
              '<table class="table table-bordered table-condensed table-responsive" ><thead><tr><th class="">value</th><th class="">Display</th><th class="">'+
               '<div ng-click=\"component.'+inputAttrs.model+'.push({})\"> <span class="glyphicon glyphicon-plus"></span></div></th></tr></thead>'+
              '<tbody><tr ng-repeat="model in component.'+inputAttrs.model+'"><td class=""><input ng-model=\"model.key\" class="form-control" type = "text"></td><td class=""><input ng-model=\"model.value\" class="form-control" type = "text"></td><td class="">'+
                '<div ng-click=\"component.'+inputAttrs.model+'.splice($index,1);\">'+
                '<span class="glyphicon glyphicon-remove"></span></div></td></tr></tbody></table>'+
              '</div>'
        }     
         else if(inputAttrs.type.toLowerCase() === 'score_options') {
         return '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">'+
              '<label for="' + inputAttrs.name + '" class="lable-width">' + inputAttrs.label + '</label>'+
              '<button type="button" class="btn btn-default btn-xs" ng-click=\"hide=!hide\"><span class="glyphicon glyphicon-option-horizontal" aria-hidden="true"></span></button>'+
              '<table class="table table-bordered table-condensed table-responsive" ><thead><tr><th class="">value</th><th class="">Display</th><th class="">score</th><th class="">'+
               '<div ng-click=\"component.'+inputAttrs.model+'.push({})\"> <span class="glyphicon glyphicon-plus"></span></div></th></tr></thead>'+
              '<tbody><tr ng-repeat="model in component.'+inputAttrs.model+'"><td class=""><input ng-model=\"model.key\" class="form-control" type = "text"></td><td class=""><input ng-model=\"model.value\" class="form-control" type = "text"></td><td class=""><input ng-model=\"model.score\" class="form-control" type = "text"></td><td class="">'+
                '<div ng-click=\"component.'+inputAttrs.model+'.splice($index,1);\">'+
                '<span class="glyphicon glyphicon-remove"></span></div></td></tr></tbody></table>'+
              '</div>'
        }   
      else {
         return '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">'+
                    '<div class="form-group display-flex">'+
                      '<label for="' + inputAttrs.name + '" class="lable-width">' + inputAttrs.label + '</label>'+
                      '<input type="'+inputAttrs.type+'" class="form-control prop-fields" id="text" ng-model="component.'+inputAttrs.model+'">'+
                    '</div>'+
                 '</div>';
          }
        } ,

       controller: function($scope) {
        /*  $scope.addrow = function(){
                scope.model.push({});
              }
         $scope.remove = function(value){
              scope.model.splice(value,1);      
           }*/
        }

      };
}]);



  var app=angular.module('componentBuilder');
  app.provider('components', function() {
    var components = {};
    var commonComponents = {};
    var groups = {
      __component: {
        title: 'Basic Components'
      },
      advanced: {
        title: 'Special Components'
      },
      layout: {
        title: 'Layout Components'
      }
    };
    return {
      addGroup: function(name, group) {
        groups[name] = group;
      },
      addControl: function(type, component, group) {
        if (!components[type]) {
            components[type] = component;
        }
        else {
          angular.extend(components[type], component);
        }

        // Set the type for this component.
        if (!components[type].group) {
          components[type].group = group || '__component';
        }
        components[type].settings.type = type;
      },
      addCommonControl: function(type, component, group) {
        if (!commonComponents[type]) {
            commonComponents[type] = component;
        }
        else {
          angular.extend(commonComponents[type], component);
        }

        // Set the type for this component.
        if (!commonComponents[type].group) {
          commonComponents[type].group = group || '__component';
        }
        commonComponents[type].settings.type = type;
      },
      $get: function() {
        return {
          getComponents:function(){
            return components;
          } ,
           getCommonComponents:function(){
            return commonComponents;
          } ,
          groups: groups
        };
      }
    };
  });

  

