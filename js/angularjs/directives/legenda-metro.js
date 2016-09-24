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
				
				var Legenda = ['#Food','#Mav','#Ptek','#It',]
				
				TweenMax.staggerFrom(Legenda, 1, {
				    opacity: 0,
				    x: '-10px',
				    ease: Expo.easeOut,
				    force3D: true,
				    delay: 1
				}, 0.25);
				/*

				FoodExplanation

				*/
				$("#Food").mouseover(function() {
				    TweenMax.to('#lineBlue', 0.5, {
				        opacity: 0.2,
				        delay: 0.5
				    });
				    TweenMax.to('#lineYellow', 0.5, {
				        opacity: 0.2,
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
				});
				$("#Food").mouseleave(function() {
				    TweenMax.to('#lineBlue', 0.5, {
				        opacity: 1,
				        delay: 0.5
				    });
				    TweenMax.to('#lineYellow', 0.5, {
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
				});
				/*

				MavExplanation

				*/
				$("#Mav").mouseover(function() {
				    TweenMax.to('#lineRed', 0.5, {
				        opacity: 0.2,
				        delay: 0.5
				    });
				    TweenMax.to('#lineYellow', 0.5, {
				        opacity: 0.2,
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
				    TweenMax.to(FoodCircle, 0.5, {
				        opacity: 0.6,
				        delay: 0.5
				    });
				    TweenMax.to(PtekCircle, 0.5, {
				        opacity: 0.6,
				        delay: 0.5
				    });
				});
				$("#Mav").mouseleave(function() {
				    TweenMax.to('#lineRed', 0.5, {
				        opacity: 1,
				        delay: 0.5
				    });
				    TweenMax.to('#lineYellow', 0.5, {
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
				    TweenMax.to(FoodCircle, 0.5, {
				        opacity: 1,
				        delay: 0.5
				    });
				    TweenMax.to(PtekCircle, 0.5, {
				        opacity: 1,
				        delay: 0.5
				    });
				});
				/*

				PtekExplanation

				*/
				$("#Ptek").mouseover(function() {
				    TweenMax.to('#lineRed', 0.5, {
				        opacity: 0.2,
				        delay: 0.5
				    });
				    TweenMax.to('#lineBlue', 0.5, {
				        opacity: 0.2,
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
				    TweenMax.to(FoodCircle, 0.5, {
				        opacity: 0.6,
				        delay: 0.5
				    });
				    TweenMax.to(MavCircle, 0.5, {
				        opacity: 0.6,
				        delay: 0.5
				    });
				});
				$("#Ptek").mouseleave(function() {
				    TweenMax.to('#lineRed', 0.5, {
				        opacity: 1,
				        delay: 0.5
				    });
				    TweenMax.to('#lineBlue', 0.5, {
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
				    TweenMax.to(FoodCircle, 0.5, {
				        opacity: 1,
				        delay: 0.5
				    });
				    TweenMax.to(MavCircle, 0.5, {
				        opacity: 1,
				        delay: 0.5
				    });
				});
				/*

				COMING SOON

				*/
				$("#It").mouseover(function() {
				    $("div.ContainerProfileMetro").html("<svg id='interviewed' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='150px' height='150px' viewBox='0 0 150 150' style='enable-background:new 0 0 150 150;' xml:space='preserve'><g id='Circle'><circle class='ITstatLine ItComingSoon' cx='74.8' cy='83.8' r='59.8' style='stroke-linecap:round'/></g><g id='Text'><text transform='matrix(1 0 0 1 36.2949 81.8008)'><tspan x='0' y='0' class='Regular21 WColor'>coming</tspan><tspan x='13' y='20.2' class='Regular21 WColor'>soon</tspan></text></g></svg>");
			        TweenMax.fromTo('.ItComingSoon', 2, {drawSVG:"100% 100%"}, {drawSVG:"0% 100% ", ease: Expo.easeOut, delay: 0.1});
					TweenMax.fromTo('.ItComingSoon', 2, {drawSVG:"0% 0%"}, {drawSVG:"0% 100% ", ease: Expo.easeOut, delay: 0.1});
					TweenMax.from('.Regular21', 1.5, {
						opacity: 0,
						ease: Expo.easeOut,
						delay: 0.4 
					});
				});
				$("#It").mouseleave(function() {
				    $("svg#interviewed").remove();
				});




			});
	    }
	};
});