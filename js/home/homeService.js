var app = angular.module('nbaRoutes');

app.service('homeService', function($http, $q, teamService){
	this.jazzArray = function(){
			teamService.getTeamData('utahjazz').then(function(response){
				this.newJazzArray = response;
			})
	}
	
	
	
	this.lakerArray = teamService.getTeamData('losangeleslaker');
	this.heatArray = teamService.getTeamData('miamiheat');
	
	console.log('thisisthe Jazz array', this.jazzArray);
	console.log('thisisthe laker array', this.lakerArray);
	console.log('thisisthe miami array', this.heatArray);
	
});
