sgApp.controller('UserController' , function($scope, $resource, $http, SG_API, Rest, $rootScope){



	$scope.register = function() {

		var filters = $scope.newUser;
		Rest.lookup({ 
			sid:SG_API.SID, 
			_method:SG_API.GET,
			"filter[value][0]" : filters.user, 
			"filter[field][0]" : "[question(2)]",
			"filter[operator][0]" : "=",
		}).$promise.then(function(response) {
			var totalUsers = parseInt(response.total_count, 10);
			if (totalUsers >= 1) {
				$scope.userMessage = "The email used already exists.";
			}
			else {
				Rest.add({
					sid : SG_API.SID,
					_method : SG_API.CREATE,
					"data[2][value]" : filters.user,
					"data[3][value]" : filters.password,
					"data[4][value]" : filters.firstname,
					"data[5][value]" : filters.lastname,
				}).$promise.then(function(response) {
					console.log(response);
					if (response.result_ok == true) {
						$rootScope.uid = response.data.id;
						$rootScope.userID = filter.user;
						console.log($scope.uid);
					}
				});
			}
		});
	}

	$scope.login = function() {

		var filters = $scope.user;

		Rest.lookup({ 
			sid:SG_API.SID, 
			_method:"GET", 
			"filter[field][0]" : "[question(2)]",
			"filter[operator][0]" : "=",
			"filter[value][0]" : filters.email,
			"filter[field][1]" : "[question(3)]",
			"filter[operator][1]" : "=",
			"filter[value][1]" : filters.pass,
		})	
			.$promise.then(function(response) {
				var totalUsers = parseInt(response.total_count, 10);
				console.log(response);
				if (totalUsers < 1) {
					$scope.noUser = "The email or password used does not exist.";
				}
				else {
					$rootScope.uid = response.data[0]["id"];
					$rootScope.userID = filter.email;
					console.log($scope.uid);
				}
		});	
	}

});