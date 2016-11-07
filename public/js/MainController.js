var app = angular.module('zupApp', ['ngRoute', 'LocalStorageModule']);



app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		resolve: {
			"check": function($location, $rootScope, localStorageService) {
				if(!localStorageService.get('logged')) {
					templateUrl: 'login.html'
				}  else {
					$rootScope.bodyBackgroundColor = "background-color:#fff !important;";
					$location.path('/');
				}
			}
		},
		templateUrl: 'login.html'})
		
	.when('/dashboard', {
		resolve: {
			"check": function($location, $rootScope, localStorageService) {
				if(!localStorageService.get('logged')) {
					$location.path('/');
				}  else {
					$rootScope.bodyBackgroundColor = "background-color:#fff !important;";
				}
			}
		},
		templateUrl: 'dashboard.html'		
	})
	.otherwise({
		redirectTo: '/'
	});
});