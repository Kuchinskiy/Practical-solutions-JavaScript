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

// Императивный код
const a = "xyaabbbccccdefwwz";
const b = "xxxxyyyyabklmopqgh";

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

const total = longest(a, b);
console.log(total.length, total);


// Вариант - 1 (императивный)
// function longest(s1, s2) {
// 	let result = '';
// 	const str = Array.from(`${s1}${s2}`);

// 	for (let i = 0; i < str.length; i += 1) {
// 		if (!result.includes(str[i])) {
// 			result += str[i];
// 		}
// 	}
// 	return result.split('').sort().join('');
// }


// Вариант - 2 (декларативный)
// function longest(s1, s2) {
// 	return Array.from(new Set((s1 + s2).split(''))).sort().join('');
// }

// const result = longest("loopingisfunbutdangerous", "lessdangerousthancoding");
// console.log(result.length, result);

// console.log(longest("aretheyhere", "yestheyarehere")); // "aehrsty"
// console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding")); // "abcdefghilnoprstu" (c, h)
// console.log(longest("inmanylanguages", "theresapairoffunctions")); // acefghilmnoprstuy (g, l, m, y)

// =============================================================

// Собрать все теги встречающиеся в постах в один массив. Основной(исходник) массив tweets не мутировать.
// Убрать все повторяющиеся, если таковы имеються и добавить только по одному каждого тега.

const tweets = [
	{ id: '000', likes: 5, tags: ['js', 'nodejs'] },
	{ id: '001', likes: 2, tags: ['html', 'css'] },
	{ id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
	{ id: '003', likes: 8, tags: ['css', 'react'] },
	{ id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

// Декларативный код
const tags = Array.from(new Set(tweets.reduce((acc, tweet) => {
	acc.push(...tweet.tags);
	return acc;
}, [])));

// console.table(tags); // ['js', 'nodejs', 'html', 'css', 'react']
// console.log(tweets); // [{…}, {…}, {…}, {…}, {…}]

// =============================================================

const input = [
	[[2, 1], 2],
	[[0, -10], 0],
	[[15, 0], 15],
	[[1, 3, 2], 3],
	[[1, 0, 2], 1],
	[[1, 2, 0, 3, 4], 0],
	[[1, 2, 3, 4, -1], -1],
	[[-11, 5, 0, 3, 4], 5],
	[[-11, -5, 0, -2, 4], 0],
	[[5, 7, 6, 8, 9, 10], 7],
	[[1, 2, 3, 4, 17, 5, 6, 7, 8], 17],
	[[19, 27, 33, 34, 112, 578, 116, 170, 800], 578],
	[[105, 110, 111, 112, 114, 113, 115], 114],
	[[1001, 991, 992, 993, 994, 995, 996], 1001]];

	function orderBreaker (input) {
		input.sort((a, b) => a - b);

		
	}

	// console.log(orderBreaker(input));

console.log([19, 27, 33, 34, 112, 578, 116, 170, 800].sort((a, b) => a < b ? console.log(b) : undefined)); // 578
console.log([1001, 991, 992, 993, 994, 995, 996].sort((a, b) => a < b ? console.log(b) : undefined)); // 1001
console.log([-11, -5, 0, -2, 4].sort((a, b) => a < b ? console.log(b) : undefined)); // 0
console.log([5, 7, 6, 8, 9, 10].sort((a, b) => a < b ? console.log(b) : undefined)); // 7
console.log([1, 2, 3, 4, 17, 5, 6, 7, 8].sort((a, b) => a < b ? console.log(b) : undefined)); // 17
// console.log([1, 2, 3, 4, -1].sort((a, b) => a < b ? console.log(b) : undefined));
