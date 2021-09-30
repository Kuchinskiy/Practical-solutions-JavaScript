'use strict';

/*
Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства.
Возвращает массив значений определенного свойства 'prop' из каждого объекта в массиве.
*/

const products = [
	{ name: 'Радар', price: 1300, quantity: 4 },
	{ name: 'Сканер', price: 2700, quantity: 3 },
	{ name: 'Дроид', price: 400, quantity: 7 },
	{ name: 'Захват', price: 1200, quantity: 2 },
];

const getAllPropValues = function(arr, prop) {
	const arrValues = [];

	for (const product of arr) {
		if (prop in product) {
			arrValues.push(product[prop]);
		}
	}
	return arrValues;
};

// Для корректное проверки наличия свойства в объекте, когда его значением является 'undefined',
// используем оператор 'in', иначе проверка через 'if' выдаст неверную информацию 'boolean'(false/true)
const userInfo = {
	name: undefined,
}

// Неверный способ проверки
if (userInfo.name) {
	console.log(userInfo.name); // false
}

// Правильный способ проверки
if ('name' in userInfo) {
	console.log(userInfo.name); // true
}

/*
Вызовы функции для проверки работоспособности твоей реализации.
*/

console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']
console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
console.log(getAllPropValues(products, 'category')); // []