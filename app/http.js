function get(url){

	return new Promise((resolve, reject) => {

		let http = new XMLHttpRequest();
		
		http.onload = (state) => {
			state = state.currentTarget;
			state.status === 200 ? resolve(state.response) : reject(state.statusText);
		}

		http.onerror = (state) => {
		   state = state.currentTarget;
		   reject(state.statusText);
		}

		http.open('GET', url, true);
		http.send();

	});

};

function post(url, data){

	return new Promise((resolve, reject) => {

		let http = new XMLHttpRequest();
		
		http.onload = (state) => {
			state = state.currentTarget;
			state.status === 200 ? resolve(state.response) : reject(state.statusText);
		}

		http.onerror = (state) => {
		   state = state.currentTarget;
		   reject(state.statusText);
		}

		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		http.open('POST', url, true);
		http.send(JSON.parse(data));

	});

};

module.exports = {
	'get': get,
	'post': post
};