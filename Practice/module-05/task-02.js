'use strict';

/*
Напиши класс User для создания пользователя со следующим свойствами:

-- name - строка
-- age - число
-- followers - число

Добавь метод getInfo(), который, выводит строку:
User ${имя} is ${возраст} years old and has ${кол-во подписчиков} followers
*/

class User {
	constructor (name, age, amount) {
		this.name = name;
		this.age = age;
		this.amount = amount;
	}

	getInfo() {
		console.log(`User ${this.name} is ${this.age} years old and has ${this.amount} followers`);
	}
}

// console.log(User.prototype);

const mango = new User({
	name: 'Mango',
	age: 2,
	followers: 20,
});


// const mango = new User( 'Mango', 2, 20,); // для проверки работоспособности кода
mango.getInfo(); // User Mango is 2 years old and has 20 followers


// const poly = new User({
// 	name: 'Poly',
// 	age: 3,
// 	followers: 17,
// });

// poly.getInfo(); // User Poly is 3 years old and has 17 followers

