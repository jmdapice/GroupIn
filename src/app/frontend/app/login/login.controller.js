angular
	.module('app.login', [])
	.controller('LogAccount', LogAccount);


function LogAccount() {
	
}

/*LogAccount.$inject = ['loginFactory'];


function LogAccount(loginFactory)
{
	var vm = this;
	loginFactory.logIn()
		.then(function (response) {
			console.log(response);
		}, function (error){

		});
}*/