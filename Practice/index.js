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