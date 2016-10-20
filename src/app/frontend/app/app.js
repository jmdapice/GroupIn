angular
	.module('app', [
		'ngAnimate',
		'ngAria',
		'ngMaterial',
		'ngMessages', 
		'ui.router',
		'app.login',
		'app.main',
		'md.data.table'
	])
	.config(config);

function config($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			controller: 'LogAccount',
			controllerAs: 'logaccount',
			templateUrl: 'app/login/login.partial.html'
		})
		.state('main', {
			url: '/main',
			controller: 'MainController',
			controllerAs: 'mainController',
			templateUrl: 'app/main/main.partial.html'
		});

}