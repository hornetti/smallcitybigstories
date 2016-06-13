app.controller('CreditsController', ['$scope', function($scope) {
	$scope.Release = "Release Date";
	$scope.Data = "June 2016";
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
			name : 'Filippo Cinotti, Mattia Alberani',
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