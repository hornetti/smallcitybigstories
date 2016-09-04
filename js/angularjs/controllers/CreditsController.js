app.controller('CreditsController', ['$scope', function($scope) {
	$scope.Release = "Release Date";
	$scope.Data = "01.10.2016";
	$scope.Link_Visit_Social = [
		{
			name : 'facebook',
			direct : 'https://www.facebook.com/smallcitybigstories/'
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
			name : 'Marco Tronconi'
		},
		{
			name : 'Simone Romboli'
		},
	];
	$scope.creditsTesto = [
    	{
    		paragraf : "Small city big stories è un progetto di visual journalism che racconta le potenzialità nascoste della dimensione locale attraverso le voci dei suoi protagonisti."
    	},
    	{
    		paragraf : "Small city, big stories nasce da un’idea dell’associazione Salesiani 2.0 di Faenza, che ha selezionato i 15 intervistati."
    	},
    	{
    		paragraf : "Il brand Scbs e il relativo progetto di visual journalism sono stati interamente concepiti da Luca Gorini, Filippo Gianessi e Filippo Gorini."
    	},
    	{
    		paragraf : "Abbiamo sviluppato Small city, big stories con l’obbiettivo primario di diffondere l’uso del visual journalism in Italia. Siamo convinti che raccontare l’ecosistema professionale di una città sia la modalità più semplice e immediata per permettere a terzi di applicare le tecniche proprie del visual journalism: per questa ragione abbiamo deciso di rendere Scbs Open Source."
    	}
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