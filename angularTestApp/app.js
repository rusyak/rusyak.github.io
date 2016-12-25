var routingApp = angular.module('routingApp', ['ngRoute'])

routingApp.config(['$routeProvider',function($routeProvider) {
	$routeProvider
	.when('/pages/first', {
		templateUrl: '/pages/first.html'
	})
	.when('/pages/second', {
		templateUrl: '/pages/second.html'
	})
	.otherwise({
		redirectTo: '/'
	});
}]);