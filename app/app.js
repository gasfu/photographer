const axios = require('axios');
const form = document.querySelector("#contactForm");

function submit (){
	const data = {

	};

	axios.get('mailer/mail.php', data).then(function (response){
		console.log(response);
	});

	console.log('teste')
	return false;
	
}

form.addEventListener('submit', function(e) {
	e.preventDefault();
	console.log('teste');
	return submit();
});