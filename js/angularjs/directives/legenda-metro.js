app.directive('legendaMetro', function() {
	return {
		restrict: 'E',
		templateUrl: 'js/angularjs/directives/legenda-metro.html',
	    link: function(scope, element, attr) {
	    	angular.element(document).ready(function() {

				var FoodName = ['#nTamba', '#nMantovani'];
				var FoodFill = ['#fillTamba', '#fillMantovani'];
				var FoodCircle = ['#overTamba', '#overMantovani', '#overBorgini'];

				var MavName = ['#nSavorani', '#nBandini', '#nRuta', '#nTampieri'];
				var MavFill = ['#fillSavorani', '#fillBandini', '#fillRuta', '#fillTampieri'];				
				var MavCircle = ['#overSavorani', '#overBandini', '#overRuta', '#overTampieri', '#overMartelli', '#overSalvatori'];
				
				var PtekName = ['#nBorgini', '#nRava', '#nBertoni', '#nPeroni', '#nMartelli', '#nSalvatori', '#nBorgini'];
				var PtekFill = ['#fillRava', '#fillBertoni', '#fillPeroni', '#fillMartelli', '#fillSalvatori'];				
				var PtekCircle = ['#overValmori', '#underBorgini', '#overRava', '#overBertoni', '#overPeroni', '#underMartelli', '#underSalvatori', '#underBorgini'];
				
				var ItName = ['#nValmori', '#nZauli', '#nFionda'];
				var ItFill = ['#fillValmori', '#fillZauli', '#fillFionda'];
				var ItCircle = ['#underValmori', '#overZauli', '#overFionda'];
				
				var Legenda = ['#Ptek', '#It', '#Mav', '#Food'];
				
				TweenMax.staggerFrom(Legenda, 1, {
				    opacity: 0,
				    x: '-10px',
				    ease: Expo.easeOut,
				    force3D: true,
				    delay: 1
				}, 0.25);

				$(".ContainerLegendaMetro").accordion({
			      	collapsible: true,
			      	active: false
			    });
			    
				/*
				var clicked = false;
				/*

				FoodExplanation

				*//*
				$("#Food").click(function() {
					if (!clicked) {
					    TweenMax.to('#lineBlue', 0.5, {
					        opacity: 0.2,
					        delay: 0.5
					    });
					    TweenMax.to('#lineYellow', 0.5, {
					        opacity: 0.2,
					        delay: 0.5
					    });
					    TweenMax.to('#lineGreen', 0.5, {
					        opacity: 0.2,
					        delay: 0.5
					    });
					    TweenMax.to(ItName, 0.5, {
					        opacity: 0.4,
					        delay: 0.5
					    });
					    TweenMax.to(MavName, 0.5, {
					        opacity: 0.4,
					        delay: 0.5
					    });
					    TweenMax.to(PtekName, 0.5, {
					        opacity: 0.4,
					        delay: 0.5
					    });
					    TweenMax.to(MavCircle, 0.5, {
					        opacity: 0.6,
					        delay: 0.5
					    });
					    TweenMax.to(PtekCircle, 0.5, {
					        opacity: 0.6,
					        delay: 0.5
					    });
					    TweenMax.to(ItCircle, 0.5, {
					        opacity: 0.6,
					        delay: 0.5
					    });
					} else {
					    TweenMax.to('#lineBlue', 0.5, {
					        opacity: 1,
					        delay: 0.5
					    });
					    TweenMax.to('#lineYellow', 0.5, {
					        opacity: 1,
					        delay: 0.5
					    });
					    TweenMax.to('#lineGreen', 0.5, {
					        opacity: 1,
					        delay: 0.5
					    });
					    TweenMax.to(ItName, 0.5, {
					        opacity: 1,
					        delay: 0.5
					    });
					    TweenMax.to(MavName, 0.5, {
					        opacity: 1,
					        delay: 0.5
					    });
					    TweenMax.to(PtekName, 0.5, {
					        opacity: 1,
					        delay: 0.5
					    });
					    TweenMax.to(MavCircle, 0.5, {
					        opacity: 1,
					        delay: 0.5
					    });
					    TweenMax.to(PtekCircle, 0.5, {
					        opacity: 1,
					        delay: 0.5
					    });
					    TweenMax.to(ItCircle, 0.5, {
					        opacity: 1,
					        delay: 0.5
					    });
					}
   					clicked = !clicked;
				});
				/*

				MavExplanation

				*//*
				$("#Mav").click(function() {
					if (!clicked) {
					    TweenMax.to('#lineRed', 0.5, {
					        opacity: 0.2,
					        delay: 0.5
					    });
					    TweenMax.to('#lineYellow', 0.5, {
					        opacity: 0.2,
					        delay: 0.5
					    });
					    TweenMax.to('#lineGreen', 0.5, {
					        opacity: 0.2,
					        delay: 0.5
					    });
					    TweenMax.to(ItName, 0.5, {
					        opacity: 0.4,
					        delay: 0.5
					    });
					    TweenMax.to(FoodName, 0.5, {
					        opacity: 0.4,
					        delay: 0.5
					    });
					    TweenMax.to(PtekName, 0.5, {
					        opacity: 0.4,
					        delay: 0.5
					    });
					    TweenMax.to(ItCircle, 0.5, {
					        opacity: 0.6,
					        delay: 0.5
					    });
					    TweenMax.to(FoodCircle, 0.5, {
					        opacity: 0.6,
					        delay: 0.5
					    });
					    TweenMax.to(PtekCircle, 0.5, {
					        opacity: 0.6,
					        delay: 0.5
					    });
					} else {
					    TweenMax.to('#lineRed', 0.5, {
					        opacity: 1,
					        delay: 0.5
					    });
					    TweenMax.to('#lineYellow', 0.5, {
					        opacity: 1,
					        delay: 0.5
					    });
					    TweenMax.to('#lineGreen', 0.5, {
					        opacity: 1,
					        delay: 0.5
					    });
					    TweenMax.to(ItName, 0.5, {
					        opacity: 1,
					        delay: 0.5
					    });
					    TweenMax.to(FoodName, 0.5, {
					        opacity: 1,
					        delay: 0.5
					    });
					    TweenMax.to(PtekName, 0.5, {
					        opacity: 1,
					        delay: 0.5
					    });
					    TweenMax.to(ItCircle, 0.5, {
					        opacity: 1,
					        delay: 0.5
					    });
					    TweenMax.to(FoodCircle, 0.5, {
					        opacity: 1,
					        delay: 0.5
					    });
					    TweenMax.to(PtekCircle, 0.5, {
					        opacity: 1,
					        delay: 0.5
					    });
					}
   					clicked = !clicked;					
				});
				/*

				PtekExplanation

				*//*
				$("#Ptek").click(function() {
					if (!clicked) {
					    TweenMax.to('#lineRed', 0.5, {
					        opacity: 0.2,
					        delay: 0.5
					    });
					    TweenMax.to('#lineBlue', 0.5, {
					        opacity: 0.2,
					        delay: 0.5
					    });
					    TweenMax.to('#lineGreen', 0.5, {
					        opacity: 0.2,
					        delay: 0.5
					    });
					    TweenMax.to(ItName, 0.5, {
					        opacity: 0.4,
					        delay: 0.5
					    });
					    TweenMax.to(FoodName, 0.5, {
					        opacity: 0.4,
					        delay: 0.5
					    });
					    TweenMax.to(MavName, 0.5, {
					        opacity: 0.4,
					        delay: 0.5
					    });
					    TweenMax.to(ItCircle, 0.5, {
					        opacity: 0.6,
					        delay: 0.5
					    });
					    TweenMax.to(FoodCircle, 0.5, {
					        opacity: 0.6,
					        delay: 0.5
					    });
					    TweenMax.to(MavCircle, 0.5, {
					        opacity: 0.6,
					        delay: 0.5
				    	});
					} else {
					    TweenMax.to('#lineRed', 0.5, {
					        opacity: 1,
					        delay: 0.5
					    });
					    TweenMax.to('#lineBlue', 0.5, {
					        opacity: 1,
					        delay: 0.5
					    });
					    TweenMax.to('#lineGreen', 0.5, {
					        opacity: 1,
					        delay: 0.5
					    });
					    TweenMax.to(ItName, 0.5, {
					        opacity: 1,
					        delay: 0.5
					    });
					    TweenMax.to(FoodName, 0.5, {
					        opacity: 1,
					        delay: 0.5
					    });
					    TweenMax.to(MavName, 0.5, {
					        opacity: 1,
					        delay: 0.5
					    });
					    TweenMax.to(ItCircle, 0.5, {
					        opacity: 1,
					        delay: 0.5
					    });
					    TweenMax.to(FoodCircle, 0.5, {
					        opacity: 1,
					        delay: 0.5
					    });
					    TweenMax.to(MavCircle, 0.5, {
					        opacity: 1,
					        delay: 0.5
					    });
				    }
   					clicked = !clicked;	
				});
				/*

				ItExplanation

				*//*
				$("#It").click(function() {
					if (!clicked) {
					    TweenMax.to('#lineRed', 0.5, {
					        opacity: 0.2,
					        delay: 0.5
					    });
					    TweenMax.to('#lineBlue', 0.5, {
					        opacity: 0.2,
					        delay: 0.5
					    });
					    TweenMax.to('#lineYellow', 0.5, {
					        opacity: 0.2,
					        delay: 0.5
					    });
					    TweenMax.to(PtekName, 0.5, {
					        opacity: 0.4,
					        delay: 0.5
					    });
					    TweenMax.to(FoodName, 0.5, {
					        opacity: 0.4,
					        delay: 0.5
					    });
					    TweenMax.to(MavName, 0.5, {
					        opacity: 0.4,
					        delay: 0.5
					    });
					    TweenMax.to(PtekCircle, 0.5, {
					        opacity: 0.6,
					        delay: 0.5
					    });
					    TweenMax.to(FoodCircle, 0.5, {
					        opacity: 0.6,
					        delay: 0.5
					    });
					    TweenMax.to(MavCircle, 0.5, {
					        opacity: 0.6,
					        delay: 0.5
					    });
					} else {
					    TweenMax.to('#lineRed', 0.5, {
					        opacity: 1,
					        delay: 0.5
					    });
					    TweenMax.to('#lineBlue', 0.5, {
					        opacity: 1,
					        delay: 0.5
					    });
					    TweenMax.to('#lineYellow', 0.5, {
					        opacity: 1,
					        delay: 0.5
					    });
					    TweenMax.to(PtekName, 0.5, {
					        opacity: 1,
					        delay: 0.5
					    });
					    TweenMax.to(FoodName, 0.5, {
					        opacity: 1,
					        delay: 0.5
					    });
					    TweenMax.to(MavName, 0.5, {
					        opacity: 1,
					        delay: 0.5
					    });
					    TweenMax.to(PtekCircle, 0.5, {
					        opacity: 1,
					        delay: 0.5
					    });
					    TweenMax.to(FoodCircle, 0.5, {
					        opacity: 1,
					        delay: 0.5
					    });
					    TweenMax.to(MavCircle, 0.5, {
					        opacity: 1,
					        delay: 0.5
					    });
					}
   					clicked = !clicked;	
				});*/
			});
	    }
	};
});