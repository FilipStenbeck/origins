require('angular').module('demo').factory('leaugeService', function ($http) {

   var ROOT_URL = 'http://localhost:9000/api/leagues/';
   
   var callServer = function(url, callback) {
    	$http({
            method : 'GET',
            url : url,
        }).success(function (data) {
            callback(data);
        });
    }

    return {        
        
        getSwedish : function (callback) {
            callServer(ROOT_URL + 'se', callback);  
        },
        
        getAll : function (callback) {
            callServer(ROOT_URL + 'all', callback);  
        },

        getRaw : function (callback) {
            callServer(ROOT_URL + 'raw', callback);  
        }
    };
});
