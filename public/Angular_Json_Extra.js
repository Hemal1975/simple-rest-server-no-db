angular.modul('todoApp')
 .controller('',function($scope,$http){
	$scope.todos = [];
	$http.get('/users').success(function(result){
		$scope.todo = result;
	});
 });