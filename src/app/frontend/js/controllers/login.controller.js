angular
	.module('app.login', [])
	.controller('LogAccount', LogAccount);

LogAccount.$inject = ['loginFactory'];


function LogAccount(loginFactory)
{
	var vm = this;
	loginFactory.logIn()
		.then(function (reponse) {

		}, function (error){

		});
}