'use strict';

angular.module('chattyApp')
  
 .service('MessageService', function($http, $q){
 
  });

var getMessages = function(){
	var deferred = $q.defer();
	$http({
		method: "GET",
		url: "http://localhost:8080",
		data: {
			"message": "message",
			"username": "name"
		}
	}).then(function(response))

	return deferred.promise.response;