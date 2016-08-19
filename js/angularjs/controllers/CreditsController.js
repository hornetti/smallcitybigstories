app.controller('CreditsController', ['$scope', function($scope) {
	$scope.Release = "Release Date";
	$scope.Data = "01.10.2016";
	$scope.Link_Visit_Social = [
		{
			name : 'facebook',
			direct : 'https://www.facebook.com/smallcitybigstories/'
		},
		{
			name : 'twitter',
			direct : 'https://twitter.com/SCBS_studio'
		},
		{
			name : 'instagram',
			direct : 'https://www.instagram.com/smallcitybigstories/'
		}
	];
	$scope.Crew = "Crew";
	$scope.ProjectCrew = [
		{
			name : 'Luca Gorini',
			info : 'Head of content'
		},
		{
			name : 'Filippo Gianessi',
			info : 'Visual designer'
		},
		{
			name : 'Filippo Gorini',
			info : 'Web developer'
		}
	];	
	$scope.Collaboration = "Collaborations";
	$scope.ProjectCollaboration = [
		{
			name : 'Filippo Cinotti, Mattia Alberani',
			info : 'Video maker'
		},
		{
			name : 'Cecilia Bertozzi',
			info : 'Voice over'
		},
		{
			name: 'Hazina Francia',
			info: 'Sound designer'
		}
	];
	$scope.ThankYou = "Thanks to";
	$scope.ProjectThankYou = [
		{
			name : 'Andrea Visani'
		},
		{
			name : 'Simone Romboli'
		},
		{
			name : 'Marco Tronconi'
		},
	];
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