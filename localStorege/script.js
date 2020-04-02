// localStorage.setItem('number', 1);

// console.log(localStorage.getItem('number'));

// localStorage.removeItem('number');

// localStorage.clear();

window.addEventListener('DOMContentLoaded', function() {
	let checkbox = document.getElementById('chckbx');
	let changeTheme = document.getElementsByTagName('button')[0];
	let form = document.getElementsByTagName('form')[0];

	if (localStorage.getItem('isChecked') === 'true') {
		checkbox.checked = 'true';
	}

	checkbox.addEventListener('click', function() {
		localStorage.setItem('isChecked', true);
	});

	if (localStorage.getItem('bg') === 'changed') {
		form.style.backgroundColor = '#f3f3f3';
	}

	changeTheme.addEventListener('click', function() {
		localStorage.setItem('bg', 'changed');
		form.style.backgroundColor = '#f3f3f3';
	});
});


let persone = {
	name: 'Dima',
	age: 31,
	device: ['mobile', 'laptop']
};

let serializedPersone = JSON.stringify(persone);
localStorage.setItem('Dima', serializedPersone);

console.log(JSON.parse(localStorage.getItem('Dima')));
