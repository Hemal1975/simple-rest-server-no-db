var app = angular.module("myItem",['ngRoute']);
		
	app.controller("contactController",function($scope,$http){
		
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
				   $http.delete("/users/"+ id);
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


	
	app.config(['$routeProvider',function($routeProvider){
	
		$routeProvider.
				when('/AddStore',{
					templateUrl:'Add_Store.html',
					controller:'AddStoreController'
				}).
				when('/AddHome',{
					templateUrl:"Add_Home.html",
					controller:'AddHomeController'
				}).
				when('/AddAbout',{
					templateUrl:"Add_About.html",
					controller:'AddAboutController',
				}).when('/AddCatalog',{
					templateUrl:"Add_Catalog.html",
					controller:'AddCatalogController',
				}).when('/AddContact',{
					templateUrl:"Add_Contact.html",
					controller:'AddContactController',
				}).otherwise({
					redirectTo:'/AddStore'
				});
		}]); 
		
		app.controller('AddStoreController',function($scope){
			$scope.message = "This is Store";
		});
		app.controller('AddHomeController',function($scope){
			$scope.message = "This is Home";
		});
		app.controller('AddAboutController',function($scope){
			$scope.message = "This is About";
		});
		app.controller('AddCatalogController',function($scope){
			$scope.message = "This is Catalog";
		});
		app.controller('AddContactController',function($scope){
			$scope.message = "This is contacts";
		}); 
	 
	
