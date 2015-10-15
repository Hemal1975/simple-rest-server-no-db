var app = angular.module("myItem",[]);
	app.controller("contactController",function($scope,$http){
		var app = this;
		$http.get("/users").success(function(data){
			$scope.contacts=data;
		});
	$scope.appenddata = function(prolist){
	$http.post("/users",prolist).success(function(data){
			$scope.contacts.push(
				{
						item:$scope.prolist.item,
						desc:$scope.prolist.desc,
						price:$scope.prolist.price
				});
						$scope.prolist.item="",
						$scope.prolist.desc="",
						$scope.prolist.price=""
		});	
	};
	$scope.deleteData = function(id) {   
        for(i in $scope.contacts) {
            if($scope.contacts[i].id == id) {
                $scope.contacts.splice(i,1);
               $http.delete("/users"+"/"+ id);
            }
        }    
    }
	$scope.editData = function(id) {
        for(i in $scope.contacts) {
            if($scope.contacts[i].id == id) {
                $scope.prolist = angular.copy($scope.contacts[i]);
            }
        }
    }
	$scope.saveData = function(id) {
        if($scope.prolist.id == null) {
             $scope.prolist.id = uid++;
             $scope.contacts.push($scope.prolist);
        } else {
            
             for(i in $scope.contacts) {
                    if($scope.contacts[i].id == $scope.prolist.id) {
                        $scope.contacts[i] = $scope.prolist;
                    }
             }                
        }
        $scope.prolist = {};
    }
});	 