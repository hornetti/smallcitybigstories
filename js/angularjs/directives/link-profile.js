app.directive('linkProfile', function() {
  return {
    restrict: 'E',
    scope: {
      profileInfo: '=info'
    },
    templateUrl: 'js/angularjs/directives/link-profile.html'
  }; 
});
