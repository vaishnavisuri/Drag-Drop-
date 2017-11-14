'use strict';
angular.module('componentBuilder').config(['$stateProvider', '$urlRouterProvider','$locationProvider',function($stateProvider, $urlRouterProvider, $locationProvider) {
	
    $stateProvider.state('controllCreation', {
        url: '/controllCreation',
        controller: 'controllCreationCtrl',
        templateUrl: 'app/masters/component_master/partials/controllCreation.html'
            
        
    })
	.state('templateDesign', {
        url: '/templateDesign',
        controller: 'templateDesignCtrl',
        templateUrl: 'app/masters/component_master/partials/templateDesign.html'
    
    })
	.state('viewScreen', {
        url: '/viewScreen',
        controller: 'viewScreenCtrl',
        templateUrl: 'app/masters/component_master/partials/viewScreen.html'
    
    // }).state('test_grid', {
        // url: '/grid_test',
        // //controller: 'templateDesignCtrl',
        // templateUrl: 'app/masters/component_master/partials/grid_test.html'
    
    });
	$locationProvider.html5Mode(false);
	
	
}]);