var routingApp = angular.module('routingApp', ['ngRoute'])

routingApp.config(['$routeProvider',function($routeProvider) {
	$routeProvider
	.when('/angularTestApp/index.html#/pages/first', {
		templateUrl: 'http://rusyak.github.io/angularTestApp/index.html#/pages/first'
	})
	.when('/angularTestApp/index.html#/pages/second', {
		templateUrl: 'http://rusyak.github.io/angularTestApp/index.html#/pages/second'
	})
	.otherwise({
		redirectTo: '/'
	});
}]);
