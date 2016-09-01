angular
	.module('app.loginService', [])
	.factory('loginFactory', loginFactory);

function loginFactory () {

	var service = {
		logIn: logIn,
		logOut: logOut
	};

	return service;

	function logIn(){

	}

	function logOut(){

	}
}