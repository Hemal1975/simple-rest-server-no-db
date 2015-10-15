var app = angular.module('mainApp',['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'page1.html'
	})
	.when('/anotherPage',{
		templateUrl : 'page2.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});