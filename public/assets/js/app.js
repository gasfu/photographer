sfunction submit (data){
	
	$.post('/mailer/mail.php', data).then(function (response) {
		console.log(response);
	});

}

submit({user: 'teste'});