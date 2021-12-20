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

// =============================================================

// Деструктиризация

let country = 'Canada';
let firstname = 'John';
let lastname = 'Doe';
// console.log(firstname, lastname, country);


const student = {
	firstname: 'Glad',
	lastname: 'Chinda',
	country: 'Nigeria'
};

// Переназначаем значения firstname(имя) и lastname(фамилия) с помощью - деструктуризации
// Обязательно добавляем пару круглых скобок, так как - это выражение присваивания
({ firstname, lastname } = student); // присваеваем новые значения локальным переменным

// console.log(firstname, lastname, country);

// Перестановка местами переменных с помощью деструктиризации, если в этом имеется необходимость.

/*
Изменяем размер фотографии с портретной на альбомный вариант с помощью деструктиризации.
Было: 300 х 400, необходимо сделать 400 х 300.
*/

let width = 300;
let height = 400;
const landscape = false;

// console.log(`${width} x ${height}`); // 300 x 400

if (!landscape) {
	// Перестановка локальных переменных
	[width, height] = [height, width];
	// console.log(`${width} x ${height}`); // 400 x 300
}

// =============================================================
// !Области видимости, лексическое окружение, замыкание!
// [[Scope]]
// [Environment]: Global
// Parent: Global
const fnA = (a) => console.log(a);

// [Environment]: Global
// Parent: Global
const outFn = () => {
	// Parent: Global
	const a = 777;
	fnA(a); // прокидываем аргументом "а", чтобы иметь к ней доступ в лексическом окружении 'outFn: f'
	// outFn env
	// Parent: Global
	// a: 777, fnA: f
};

// outFn();

// =============================================================

// methods : call, apply, bind in Object
// https://javascript.plainenglish.io/understanding-call-bind-apply-methods-in-javascript-in-simplest-way-7f466353736c

const employeeFirst = {
	name: 'Mika',
	salary: 200,

	// static value - 500(hard code)
	// salaryHike() {
	// 	this.salary += 500;
	// }

	// dynamic value (change)
	salaryHike(hike) {
		this.salary += hike;
	}
}


const employeeSecond = {
	name: 'Nika',
	salary: 300,

}

// console.log('Before :', employeeFirst.salary);
employeeFirst.salaryHike(700);
// console.log('After :', employeeFirst.salary);

// call() & apply()
// console.log('Before :', employeeSecond.salary);
// employeeFirst.salaryHike.call(employeeSecond, 800);
employeeFirst.salaryHike.apply(employeeSecond, [900]);
// console.log('After :', employeeSecond.salary);

// bind()
// console.log('Before :', employeeSecond.salary);
// передаем ссылку на функцию в другом объекте с привязаным контекстом obj и аргументами
const hikeEmployeeFull = employeeFirst.salaryHike.bind(employeeSecond, 1200);
hikeEmployeeFull();
// console.log('After :', employeeSecond.salary);

// =============================================================

/*
Возьмем 2 строки s1 и s2, содержащие только буквы от a до z. 
Вернуть новую отсортированную строку, как можно более длинную, 
содержащую отдельные буквы - каждая взятая только один раз - исходящая из s1 или s2.
*/

// const a = "xyaabbbccccdefwwz";
// const b = "xxxxyyyyabklmopq";

// function longest(s1, s2) {
// 	let result = '';
// 	const str = s1.length > s2.length ? s1 : s2;

// 	for (let i = 0; i < str.length; i += 1) {
// 		if (result.indexOf(str[i]) < 0) {
// 			result += str[i];
// 		}
// 	}
// 	return result.split('').sort().join('');
// }

// console.log(longest(a, b));



function longest(s1, s2) {
	let result = '';
	const str = s1.length > s2.length ? s1 : s2;

	for (let i = 0; i < str.length; i += 1) {
		if (result.indexOf(str[i]) < 0) {
			result += str[i];
		}
	}
	return result.split('').sort().join('');
}

console.log(longest("aretheyhere", "yestheyarehere")); // "aehrsty"
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding")); // "abcdefghilnoprstu"
console.log(longest("inmanylanguages", "theresapairoffunctions")); // acefghilmnoprstuy
