angular
	.module('app.main', [])
	.controller('MainController', MainController);


function MainController($scope, $mdSidenav) {

	$scope.openLeftMenu = function() {
    	$mdSidenav('left').toggle();
  };
}