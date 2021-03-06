var sgApp = angular.module('sgApp', 
	['ngRoute', 'appControllers', 'ngResource', 'LocalStorageModule'])
	.constant(
		'SG_API', {
			'BASE': "https://restapi.surveygizmo.com/v4",
			'CRED' : "XXX@XXX:XXX",
			'PAGE' : "&page=",
			'PER' : "&resultsperpage=",
			'SID' : '1958124',
			'GET' : 'GET',
			'CREATE' : 'PUT',
			'DELETE' : 'DELETE',
			'UPDATE' : 'POST',
			'RESPONSE': '/surveyresponse/',
			'SURVEYS' : '/survey/',
			'JSONP' : '.jsonp',
			'VS' : 'v4', 
		},
		'FIELDS', {
			'USER' : '[question(2)]',
			'TOKEN' : '[question(3)]',
		},
		'API_OPS', {
			'EQUALS' : '=',
			'GRT' : '>',
			'LESS' : '<',
			'NOT' : '<>',
		},
		'EVENTS', {
			"CLICK" : "click",
		});


var appControllers = angular.module('appControllers', []);

sgApp.config(['$routeProvider', 'localStorageServiceProvider', function($routeProvider, localStorageServiceProvider) {
  $routeProvider.
  	when('#', {
   		templateUrl: '/login'
    }).
    when('/login', {
      	templateUrl: 'views/login.html',
      	controller: 'UserController'
    }).
    when('/profile', {
      	templateUrl: 'views/profile.html',
      	controller: 'UserController'
    }).
    when('/available', {
      	templateUrl: 'views/available.html'
      	//controller: 'RegistrationController'
    }).
    otherwise({
      	redirectTo: '/login'
    });

    localStorageServiceProvider
    	.setPrefix('sgApp')
    	//.setStorageType('sessionStorage')
    	.setStorageCookie(5, '/login')
    	.setNotify(true, true);

}]);