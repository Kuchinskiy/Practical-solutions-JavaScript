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

const calculator = function () {
	do {

		input = prompt('Enter number :');
		const numbers = [];
		numbers.push(input);
		// console.log(numbers);

		for (let total of numbers) {
			total = Number(input);
			// console.log(total);
			return (`Общая сумма чисел равна: ${total}`);
		}
		
		// console.log(numbers);
		
	} while (input !== null);

	// return total;
};

// console.log(calculator());
// calculator();