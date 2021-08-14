'use stricte';

/*
Напиши скрипт со следующим функционалом:

-При загрузке страницы пользователю предлагается в prompt ввести число. 
Ввод сохраняется в переменную input и добавляется в массив чисел numbers.

-Операция ввода числа пользователем и сохранение в массив продолжается 
до тех пор, пока пользователь не нажмет Cancel в prompt.

-После того как пользователь прекратил ввод нажав Cancel, если массив не пустой, 
необходимо посчитать сумму всех элементов массива и записать ее в переменную total. 
Используй цикл for или for...of. 
После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.
*/

let input;
let total = 0;
const numbers = [];


const getNumbers = function () {
	do {
		input = prompt('Enter number :');
			numbers.push(Number(input));
	} while (input !== null);

	return numbers;
};
// Проверка работоспособности функции getNumbers():
// console.log(getNumbers());


const calcNumbers = function (arr) {
		for (let i = 0; i < arr.length; i += 1) {
			total += arr[i];
		}
		return total;
	};
// Проверка работоспособности функции calcNumbers():
// console.log(`Общая сумма чисел равна : ${calcNumber(numbers)}`);

// Показываем ввыод в консоль с сообщением :
const showMessage = calcNumbers(getNumbers());
console.log(`Общая сумма чисел равна : ${showMessage}`);