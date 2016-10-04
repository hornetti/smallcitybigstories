app.controller('CreditsController', ['$scope', function($scope) {
	$scope.Release = "Release Date";
	$scope.Data = "01.10.2016";
	$scope.Link_Facebook = 'https://www.facebook.com/smallcitybigstories/';
	$scope.Link_Instagram = 'https://www.instagram.com/smallcitybigstories/';
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
	$scope.Videomakers = "Videomakers";
	$scope.VideomakersName = [
		{
			name : 'Mattia Alberani'
		},
		{
			name : 'Filippo Cinotti'
		}
	];
	$scope.Voiceover = "Voice over";
	$scope.VoiceoverName = "Cecilia Bertozzi";
	$scope.Sounddesigner = "Sound designer";
	$scope.SounddesignerName = "Hazina Francia";
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
		}
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
	$scope.Link_Salesiani = 'http://www.salesiani20.it/';
	$scope.Link_ContaminationLab = 'http://www.salesiani20.it/clab';
	$scope.Link_Fondazione = 'http://www.fondazionemontefaenza.it/';
	
	angular.element(document).ready(function() {
		/*
		var TXT = ['.Bold32', '.Regular32', '.Bold21', '.Regular21', '.Bold15', '.Regular15', '.Bold12', '.Regular12'];
				
		TweenMax.staggerFrom(TXT, 1, {
		    opacity: 0,
		    x: '-10px',
		    ease: Expo.easeOut,
		    force3D: true,
		    delay: 1
		}, 0.25);
		*/
	});
}]);