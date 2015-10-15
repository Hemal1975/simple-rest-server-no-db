var app=angular.module("angapp",[]);

app.controller("angcon",function($scope,$http){
	


	$scope.add=function(item){
		$scope.items.push(item);
		console.log(item);
	 	$http.post('/users',item).success(function(item){});
		$scope.item={};
	};

	 	//$scope.item={};

	$scope.removeitem=function(item){
		//console.log(item)
		var index=$scope.items.indexOf(item);	
		$http.delete('/users/'+item.id).success(function(item){
			
		$scope.items.splice(index, 1);
		})
	}

});


