app.controller('CreditsController', ['$scope', function($scope) {
	$scope.Release = "Release Date";
	$scope.Data = "June 2016";
	$scope.Link_Visit_Social = [
		{
			name : 'facebook',
			direct : '#'
		},
		{
			name : 'twitter',
			direct : '#'
		},
		{
			name : 'instagram',
			direct : '#'
		}
	];
	$scope.Crew = "Crew";
	$scope.ProjectCrew = [
		{
			name : 'Luca Gorini',
			info : 'Journalist'
		},
		{
			name : 'Filippo Gianessi',
			info : 'Art Director'
		},
		{
			name : 'Filippo Gorini',
			info : 'Web Developer'
		}
	];	
	$scope.Collaboration = "Collaborations";
	$scope.ProjectCollaboration = [
		{
			name : 'Mattia Alberani',
			info : 'Video Maker'
		},
		{
			name : 'Cecilia Bertozzi',
			info : 'Voice Over'
		},
		{
			name: 'Hazina Francia',
			info: 'Sound Designer'
		}
	];
	$scope.ThankYou = "Thanks to";
	$scope.ProjectThankYou = 'Andrea Visani, Simone Romboli';
	$scope.ProjectName = "Small city, big stories";
	$scope.ProjectPowered = [
		{
			link : '',
			logo : ''
		},
		{
			link : '',
			logo : ''
		},
		{
			link : '',
			logo : ''
		}
	];
}]);