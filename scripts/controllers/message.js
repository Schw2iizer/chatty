'use strict';

angular.module('chattyApp')
  .controller('MessageCtrl', function ($scope, messageService) {
    $scope.messages = [];
    $scope.getMessages = 

    MessageService.getMessages().then(function(response) {
  		$scope.messages = response.data;
	



	});




  });
