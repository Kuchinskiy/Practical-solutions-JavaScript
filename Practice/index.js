'use strict';

// Напишите две функции, каждая из них принимает массив с числами:
// необходимо чтобы каждая по отдельности выводила в консоль
// все нечетные и четные числа.

const arr = [1, 2, 3, 4, 5, 7, 8, 9, 10];

// Нечетные 'odd':
const oddNumbers = function (arr) {
	for (let i = 0; i < arr.length; i += 1) {
		if (arr[i] % 2 === 1) {
			console.log(`All odd numbers: ${arr[i]}`);
		}
	}
};

// oddNumbers(arr);

// Четные 'even':
const evenNumbers = function (arr) {
	for (let i = 0; i < arr.length; i += 1) {
		if (arr[i] % 2 === 0) {
			console.log(`All even numbers: ${arr[i]}`);
		}
	}
};

// evenNumbers(arr);

// =============================================================

// Методы массивов Reduce, isArray
// Найти самое большое число в массиве с помощью метода REDUCE:

const arrNumbers = [5, -4, 7, -89, 0, 39, 8, 1, 2];

let bigNumber = arrNumbers.reduce((acc, item) => {
   if (item > acc) {
	acc = item;
   }
   return acc;
});

// console.log(bigNumber);

// Вывести все "id" без остальной информации хранящейся в массиве объектов:

const arrObj = [
   { id: 678876, city: 'Bonn', country: 'Germany' },
   { id: 234432, city: 'Bern', country: 'Switzerland' },
   { id: 987654, city: 'Las Vegas', country: 'USA' },
];

let idArr = arrObj.reduce((acc, item) => {
   acc.push(item.id);
   return acc;
}, []);

// console.log(idArr); // [678876, 234432, 987654]
// console.log(Array.isArray(idArr)); // true

// =============================================================

// Проверка на наличие свойств в объекте (пар ключ:значение)
// Напишите функцию isEmpty(object), которая возвращает true, 
// если у объекта нет свойств, иначе false.
let obj = {};

const isEmpty = obj => {
	return Object.keys(obj).length === 0 ? true : false;
};

// console.log(obj);
// console.log(Object.keys(obj).length); // 0 === 0 result -->>  true
// console.log(isEmpty(obj));

obj['7:20'] = 'get up';

// console.log(obj);
// console.log(Object.keys(obj).length); // 1 === 0 result -->>  false
// console.log(isEmpty(obj));

// =============================================================

// Операция ...rest
// Используя ее собрать все аргументы в массив и путем сложения вернуть строку,
// 'Общая сумма : ${число}'

const add = function (...args) {
	console.log(args); // массив всех аргументов

// Преобразовать псевдомассив в обычный массив возможно:
	// const args = Array.from(arguments); // при этом функция должна быть анонимна(без подписи)

	let total = 0;

	for (let i = 0; i < args.length; i += 1) {
		total += args[i];
	}

	// for (const arg of args) {
	// 	total += arg;
	// }
	return `Общая сумма: ${total}`;
};

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 5));
// console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9));

