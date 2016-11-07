angular.module('zupApp').controller('dashboardController', function($scope, localStorageService) {
	$scope.cars = [
					{"name": "Koenigsegg CCXR Trevita"},
					{"name": "Lamborghini Veneno"},
					{"name": "Limited Edition Bugatti Veyron by Mansory Vivere"},
					{"name": "Ferrari Pininfarina Sergio"},
					{"name": "Pagani Huayra BC"},
					{"name": "Ferrari F60 America"},
					{"name": "Bugatti Chiron"},
					{"name": "Koenigsegg One"},
					{"name": "Koenigsegg Regera"}
				  ];
	$scope.exit = function() {
		localStorageService.remove('logged');
		location.reload();

	}
});