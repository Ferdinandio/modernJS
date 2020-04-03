// function User(name, age) {
// 	this.name = name;
// 	this.age = age;
// 	this.say = function() {
// 		console.log(`Имя пользователя ${this.name}, его возраст ${this.age}`);
// 	};
// }

// let user = new User('Dima', 31);

// console.log(user.name);
// console.log(user.age);

// user.say();


function User(name, age) {
	let userName = name;
	let userAge = age;

	this.getName = function() {
		return userName;
	};
	this.getAge = function() {
		return userAge;
	};

	this.setName = function(name) {
		if (typeof name === 'string' && name.length >= 1 && name.length < 10) {
			userName = name;
		} else {
			console.log('Имя должно быть не менее одного и не более десяти символов');
		}
	};
	this.setAge = function(age) {
		if (typeof +age === 'number' && age > 0 && age < 110) {
			userAge = +age;
		} else {
			console.log('Столько не живут...');
		}
	};
	this.say = function() {
		console.log(`Имя пользователя ${this.userName}, его возраст ${this.userAge}`);
	};
}

let user = new User('Dima', 31);

console.log(user.userName);
console.log(user.userAge);

user.say();
console.log(user.getAge());
user.setAge('30');
console.log(user.getAge());
console.log(user.getName());
user.setName('Vasya');
console.log(user.getName());