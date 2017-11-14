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