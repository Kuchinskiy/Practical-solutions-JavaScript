'use strict';

/*
Напиши функцию countProps(obj), считающую кол-во свойств в объекте.
Функция возвращает число - количество свойств.
*/

const countProps = function(obj) {
	let total = 0;
	// for (const key in obj) {
	// 	if (Object.hasOwnProperty.call(obj, key)) {
	// 		total += 1;
	// 	}
	// }

	for (const key in obj) {
		if (Object.keys(obj, key).length) {
			total += 1;
		}
	}
	return total;
};

/*
Вызовы функции для проверки работоспособности твоей реализации.
*/
console.log(countProps({})); // 0
console.log(countProps({ name: 'Mango', age: 2 })); // 2
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

// Object.keys(obj).length;-->>> Выполняет внутреннюю итерацию по ключам
// для вычисления(длины) временного массива и возвращает его длину.

// Object.hasOwnProperty.call(obj, key); -->>> метод возвращает только свойства, 
// установленные для самого объекта.