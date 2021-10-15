'use strict';

/*
* Напиши скрипт управления личным кабинетом интернет банкинга.
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
getTransactionDetails(id) {
	for (let i = 0; i < this.transactions.length; i += 1) {
		const transaction = this.transactions[i];

		if (transaction.id === id) {
			return transaction;
		}
	}
},

/*
Метод возвращает количество средств(общая сумма)
определенного типа транзакции(DEPOSIT или WITHDRAW) из всей истории транзакций
*/
getTransactionTotal(type) {
	return this.transactions
	.filter((el) => el.type === type)
	.reduce((acc, { amount }) => acc + amount, 0);
},

};

// Работа встроеного метода(функции) .filter((el) => el.type === type) под капотом:
const filter = function(arr, callElemType) {
	const total = [];

	for (const el of arr) {
		const passed = callElemType(el);

		if (passed) {
			total.push(el);
		}
	}
	return total;
};


/*
Вызовы методов объекта(функций) для проверки работоспособности твоей реализации.
*/

// Проверяем текущий баланс.
console.log('Текущий баланс счета:', account.getBalance());

// Передаем аргументами в метод объекта(функцию) 'сумму' и указываем 'тип' транзакции.
// console.log(account.createTransaction(100, Transaction['DEPOSIT']));

// Добавляем сумму к балансу и объект транзакций в историю [{...}]
account.deposit(590, Transaction['DEPOSIT']);
console.log('Добавляем сумму на баланс:', account.balance);
console.log('История транзакций', account.transactions);


// Снимаем сумму наличными с баланса и добавляем объект транзакций в историю [{...}]
account.withdraw(175, Transaction['WITHDRAW']);
console.log('Остаток суммы на балансе:', account.balance);
console.log('История транзакций', account.transactions);

// Возвращаем общую сумму определенного типа транзакции 'DEPOSIT' или 'WITHDRAW'
console.log('К-во средств по транзакциям "DEPOSIT":', account.getTransactionTotal(Transaction['DEPOSIT']));
console.log('К-во средств по транзакциям "WITHDRAW":', account.getTransactionTotal(Transaction['WITHDRAW']));