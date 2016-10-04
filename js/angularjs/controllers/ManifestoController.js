app.controller('ManifestoController', ['$scope', function($scope) {
	$scope.manifestoTitle = "Manifesto";
	$scope.manifestoTesto = [
    	{
    		paragraf : "Il digitale ha imposto ai media nuovi ritmi e nuove sfide, spingendoli in acque ancora inesplorate; l’ennesima prova che il giornalismo è chiamato a superare non riguarda solamente l’approccio alle nuove tecnologie, ma tocca nel profondo gli stessi ingranaggi che quotidianamente lo definiscono."
    	},
    	{
    		paragraf : "Crediamo sia necessario ripensare la sfera mediatica, combinando i diversi strumenti che il digitale ci offre in modo da facilitare la comprensione dell’utente. È sbagliato pensare che i lettori su Internet siano interessati solamente ad articoli di impatto, veloci e frivoli: il nostro pubblico cerca più giornalismo immersivo in cui investire tempo e impegno."
    	},
    	{
    		paragraf : "Per questo abbiamo sposato il linguaggio del visual journalism, che non è solamente “creatività” ma una vera e propria corrente nella quale tutti gli insegnamenti giornalistici vengono criticamente esaminati, e nuovi principi guidano il lavoro della newsroom: forma e contenuto acquisiscono finalmente lo stesso peso e si influenzano a vicenda."
    	},
    	{
    		paragraf : "È tempo che nelle tradizionali redazioni giornalistiche entrino nuove figure professionali, come visual designer e web developer, e che il loro lavoro venga integrato con quello del giornalista in maniera organica, producendo un feedback continuo e condividendo tutte le parti del processo decisionale."
    	},
    	{
    		paragraf : "Se è vero che il cambiamento è l’unica costante del giornalismo, allora è arrivato il momento di assecondarlo."
    	}
    ];
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