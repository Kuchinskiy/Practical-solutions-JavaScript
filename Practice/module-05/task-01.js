'use strict';

/*
Напиши функцию-конструктор Account, которая создает объект со свойствами login и email.
В prototype функции-конструктора добавь метод getInfo(), который выводит в консоль
значения полей login и email объекта который его вызвал.
*/

const Account = function (login, email) {
	this.login = login;
	this.email = email;
};

// console.log(Account.prototype);

Account.prototype.getInfo = function (login, email) {
	this.login = login;
	this.email = email;
	console.log(`Login: ${this.login}, Email: ${this.email}`);
};

// console.log(Account.prototype);

const mango = new Account({
	login: 'Mangozedog',
	email: 'mango@dog.woof',
});

mango.getInfo('Mangozedog', 'mango@dog.woof');
console.log(mango); // Login: Mangozedog, Email: mango@dog.woof


const poly = new Account({
	login: 'Poly',
	email: 'poly@mail.com',
});

poly.getInfo('Poly', 'poly@mail.com');
console.log(poly); // Login: Poly, Email: poly@mail.com
