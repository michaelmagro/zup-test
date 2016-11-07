angular.module('zupApp').controller('loginController', function($scope, $location, $rootScope, localStorageService) {
	$rootScope.bodyBackgroundColor = "background-image: linear-gradient(to left, #39161e, #420052) !important;";
	$scope.classError = '';
	$scope.formValid = true;


	$scope.submit = function() {

		if($scope.username == 'admin' && $scope.password == 'admin') {			
			localStorageService.add('logged',true); 
			$scope.formValid = true;
			$location.path('/dashboard');
		} else {
			$scope.classError = 'has-error';
			$scope.formValid = false;
		}
	};
});