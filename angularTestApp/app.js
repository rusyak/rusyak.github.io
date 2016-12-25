var routingApp = angular.module('routingApp', ['ngRoute'])

routingApp.config(['$routeProvider',function($routeProvider) {
	$routeProvider
	.when('/pages/first', {
		templateUrl: '/angularTestApp/index.html#/pages/first.html'
	})
	.when('/pages/second', {
		templateUrl: '/angularTestApp/index.html#/pages/second.html'
	})
	.otherwise({
		redirectTo: '/'
	});
}]);
