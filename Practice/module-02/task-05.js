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

const calculator = function () {
	do {

		input = prompt('Enter number :');
		numbers.push(Number(input));
		console.log(numbers);

		// for (const number of numbers) {
		// 	total += number;
		// }
		// return total;

		// total += Number(input);
		// console.log(total);
		for (let i = 0; i < numbers.length; i++) {
			total += numbers[i];
			// return (`Общая сумма чисел равна: ${total}`);
			console.log(total);
		}
	} while (input !== null);
};

console.log(calculator());
// calculator();

// do {
// 	input = prompt('Введите пожалуйста число :');
// 	total += Number(input);
// } while (input !== null);

// alert(`Общая сумма чисел равна : ${total}`);

const arr = [];
for (let i = 1; i <= 5; i++) {
	arr.push(i);
}

console.log(arr);