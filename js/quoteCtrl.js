angular.module('quoteApp').controller('quoteCtrl', function($scope, quoteSvc) {
	
	$scope.quotes = quoteSvc.readQuote();

	$scope.createQuote = function() {
		quoteSvc.createQuote($scope.text, $scope.author);

		$scope.text = '';
		$scope.author = '';
	};

	$scope.deleteQuote = function(index) {
		quoteSvc.deleteQuote(index);
	};

});