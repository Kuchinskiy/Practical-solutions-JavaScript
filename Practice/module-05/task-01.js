'use strict';

/*
Напиши функцию-конструктор Account, которая создает объект со свойствами login и email.
В prototype функции-конструктора добавь метод getInfo(), который выводит в консоль
значения полей login и email объекта который его вызвал.
*/

const Account = function (login, email) {
	this.login = login;
	this.email = email;

	this.getInfo = function () {
		return `Login: ${this.login}, Email: ${this.email}`;
	};
};

// console.log(Account.prototype.getInfo); // function

const mango = new Account({
	login: 'Mangozedog',
	email: 'mango@dog.woof',
});

console.log(mango);

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof