// let app = {
// 	data: 45
// };
// console.log(app);

// let number = 1;

// (function() {
// 	let number = 2;
// 	console.log(number);

// 	return console.log(number + 3);
// }());

// console.log(number);

let user = (function() {
	let privat = function() {
		console.log('Я приватен!');
	};
	let sayHello = function() {
		console.log('Hello!')
	};
	return {
		sayHello: sayHello
	};
}());

console.log(user);
console.log(user.sayHello());
