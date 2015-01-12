sgApp.factory('Rest', function($resource, $rootScope, SG_API){


	var sgBase = SG_API.BASE+SG_API.SURVEYS;

	return $resource(sgBase+":sid/surveyresponse/:id.jsonp", {
		sid:'@sid',
	}, {
  		lookup: {
  			method:'JSONP', 
  			params: {
  				"user:pass" : SG_API.CRED,
  				callback : "JSON_CALLBACK",
  				'filter[field][]' : 'status',
  				'filter[operator][]' : '=',
  				'filter[value][]' : 'Complete',
  			}
  		},
  		add: {
  			method: 'JSONP',
  			params: {
  				"user:pass" : SG_API.CRED,
  				callback : "JSON_CALLBACK"
  			}
  		}
 	});

});