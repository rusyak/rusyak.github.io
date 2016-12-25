var routingApp = angular.module('routingApp', ['ngRoute'])

routingApp.config(['$routeProvider',function($routeProvider) {
	$routeProvider
	.when('/pages/first', {
		templateUrl: 'http://rusyak.github.io/pages/first.html'
	})
	.when('/pages/second', {
		templateUrl: 'http://rusyak.github.io/pages/second.html'
	})
	.otherwise({
		redirectTo: '/'
	});
}]);
