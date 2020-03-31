// let inputRub = document.getElementById('rub');
// let inputUsd = document.getElementById('usd');

// inputRub.addEventListener('input', () => {
// 	let request = new XMLHttpRequest();

// 	// request.open(method, url, async, login, password);
// 	request.open('GET', './ajax/current.json');
// 	request.setRequestHeader('content-type', 'application/json; charset=utf-8');
// 	request.send();

// 	//request.status
// 	//request.statusText
// 	//request.responseText   /    request.response
// 	//request.readyState

// 	request.addEventListener('readystatechange', function() {
// 		if (request.readyState === 4 && request.status === 200) {
// 			let data = JSON.parse(request.response);		

// 			inputUsd.value = inputRub.value / data.usd;

// 			inputUsd.value = 'Что-то пошло не так!';
// 		}
// 	});
// });