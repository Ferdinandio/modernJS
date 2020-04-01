// function shoot({arrow}, headshot, fail) {
// 	console.log('Стрела полетела...');

// 	setTimeout(function() {
// 		Math.random() > .5 ? headshot({}) : fail('Попала не туда :(');
// 	}, 3000);
// };

// shoot({},
// 		function (mark) {
// 		console.log('Стрела попала в цель! Вы - молодец!');	
// 	},
// 	function (miss) {
// 		console.error(miss);	
// 	}
// );




// function shoot(arrow) {
// 	console.log('Cтрела полетела...');
// 	let promise = new Promise(function(resolve, reject) {
// 		setTimeout(function() {
// 			Math.random() > .5 ? resolve({}) : reject({});
// 		}, 2000);
// 	});
// 	return promise;
// }

// function win() {
// 	console.log('Вы выиграли!');
// 	Math.random() > .5 ? buyDrink() : giveMoney();
// }

// function buyDrink() {
// 	console.log('Выкатываем бочку с медовухой!');
// }

// function giveMoney() {
// 	console.log('Мешок с деньгами ждёт Вас!')
// }

// function loose() {
// 	console.error('Cтрела прилетела! Где-то валяется...');
// 	console.error('Вы проиграли :(');
// }

// shoot ({}).then(mark => console.log('Прямо в яблочко!'))
// 					.then(win)
// 					.catch(loose);