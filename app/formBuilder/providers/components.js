
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

  

