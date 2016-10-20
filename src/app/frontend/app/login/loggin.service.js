angular
	.module('app.loginService', [])
	.factory('loginFactory', loginFactory);

	loginFactory.$inject = ['$q'];

function loginFactory ($q) {

	var service = {
		logIn: logIn,
		logOut: logOut
	};

	return service;

	function logIn(){
		return $q(function(resolve, reject) {
			resolve('hola');
		} )
	}

	function logOut(){

	}
}