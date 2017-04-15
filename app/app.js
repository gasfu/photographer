const axios = require('axios');
const form = document.querySelector("#contactForm");

function submit (){

	const form = document.forms.contact;
	console.log(form.body.value);

	const data = {
		'from': form.email.value,
		'name': form.name.value,
		'phone': form.phone.value,
		'body': form.body.value 
	};

	const str = JSON.stringify(data);

	axios.get('mailer/mail.php', { params: data}).then(function (response){
		console.log(response.data);
	});

	return false;
	
}

form.addEventListener('submit', function(e) {
	e.preventDefault();
	return submit();
});