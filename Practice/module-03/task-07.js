'use strict';

/*
* Напиши скрипт управления личным кабинетом интернет банка.
* Есть объект account в котором необходимо реализовать методы
* для работы с балансом и историей транзакций.
*/


/*
!Типов транзацкий всего два.
!Можно положить либо снять деньги со счета.
*/
const Transaction = {
	DEPOSIT: 'deposit',
	WITHDRAW: 'withdraw',
};

/*
Каждая транзакция это объект со свойствами: id, type и amount
*/
const account = {
	// Текущий баланс счета
	balance: 0,

	// История транзакций
	transactions: [],

/*
Метод создает и возвращает объект транзакции.
Принимает сумму и тип транзакции.
*/
createTransaction(amount, type) {
	const objTransaction = {
		amount,
		type,
	};
	return objTransaction;
},

/*
Метод отвечающий за добавление суммы к балансу.
Принимает сумму и тип транзакции.
Вызывает createTransaction для создания объекта транзакции
после чего добавляет его в историю транзакций
*/
deposit(amount, type) {
		this.balance += amount;
		this.transactions.push(this.createTransaction(amount, type));
},

/*
Метод отвечающий за снятие суммы с баланса.
Принимает сумму и тип транзакции.
Вызывает createTransaction для создания объекта транзакции
после чего добавляет его в историю транзакций.

Если amount больше чем текущий баланс, выводи сообщение
о том, что снятие такой суммы не возможно, недостаточно средств.
*/
withdraw(amount, type) {
	if (amount > this.balance) {
		console.log('Снятие такой суммы не возможно, недостаточно средств !!!');
	} else {
		this.balance -= amount;
	this.transactions.push(this.createTransaction(amount, type));
	}
},

/*
Метод возвращает текущий баланс
*/
getBalance() {
	return this.balance;
},

/*
Метод ищет и возвращает объект транзации по id
*/
getTransactionDetails(id) {},

/*
Метод возвращает количество средств
определенного типа транзакции из всей истории транзакций
*/
getTransactionTotal(type) {},
};


/*
Вызовы методов объекта(функций) для проверки работоспособности твоей реализации.
*/

// Проверяем текущий баланс.
console.log('Текущий баланс счета:', account.getBalance());

// Передаем аргументами в метод объекта(функцию) 'сумму' и указываем 'тип' транзакции.
// console.log(account.createTransaction(100, Transaction['DEPOSIT']));

// Добавляем сумму к балансу и объект транзакций в историю [{...}]
account.deposit(450, Transaction['DEPOSIT']);
console.log('Добавляем сумму на баланс:', account.balance);
console.log('История транзакций', account.transactions);


// Снимаем сумму наличными с баланса и добавляем объект транзакций в историю [{...}]
account.withdraw(75, Transaction['WITHDRAW']);
console.log('Остаток суммы на балансе:', account.balance);
console.log('История транзакций', account.transactions);