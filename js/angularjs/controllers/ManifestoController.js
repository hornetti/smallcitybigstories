﻿app.controller('ManifestoController', ['$scope', function($scope) {

	$scope.manifestoTitle = "Manifesto";

	$scope.manifestoTesto = [
    	{
    		paragraf : "Il digitale ha imposto ai media nuovi ritmi e nuove sfide, spingendoli in acque ancora inesplorate; l’ennesima prova che il giornalismo è chiamato a superare non riguarda solamente l’approccio alle nuove tecnologie, ma tocca nel profondo gli stessi ingranaggi che quotidianamente lo definiscono."
    	},
    	{
    		paragraf : "Per questo abbiamo sposato il linguaggio del visual journalism, che non è solamente “creatività” ma una vera e propria corrente nella quale tutti gli insegnamenti giornalistici vengono riesaminati, e nuovi principi guidano il lavoro di redazione: forma e contenuto acquisiscono lo stesso peso e si influenzano a vicenda."
    	},
        {
            paragraf : "È necessario ripensare la sfera mediatica, combinando i diversi strumenti che il digitale ci offre in modo da facilitare la comprensione dell’utente. È sbagliato pensare che i lettori su Internet siano interessati solo ad articoli veloci e d'impatto: il nostro pubblico cerca più giornalismo immersivo in cui investire tempo e impegno."
        },
    	{
    		paragraf : "È tempo che nelle tradizionali newsroom entrino nuove figure professionali, come visual designer e web developer, e che il loro lavoro venga integrato con quello del giornalista in maniera organica, producendo un feedback continuo e condividendo tutte le parti del processo decisionale."
    	}
    ];
    $scope.manifestoCit = "Se è vero che il cambiamento è l’unica costante del giornalismo,";
    $scope.manifestoCitdue = "allora è arrivato il momento di assecondarlo.";
    
}]);