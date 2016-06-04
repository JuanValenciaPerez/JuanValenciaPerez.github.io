angular.module('quoteApp').controller('quoteCtrl', function($scope, quoteSvc) {
	
	$scope.quotes = quoteSvc.readQuote();

});