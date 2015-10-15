var app = angular.module('mainApp',[]);

	app.controller('student',function($scope,$http){
		$http.get('/users')
		.success(function(result){
			$scope.persons = result;
		});
	});