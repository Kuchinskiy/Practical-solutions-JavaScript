'use strict';

/*
Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.

-->>Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
-->>Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и добавляет
в конец строки троеточие '...', после чего возвращает укороченную версию.
*/

const formatString = function (string) {
	// for (let i = 0; i < string.length; i += 1) { // в цикле "for" и еще одной проверке "if(условия)" нет надобности,
	// 	if (string.length < 40) { // так как такой подход создает перизбыток в ненужном коде;
	// 		return string;
	// 	}

		if (string.length > 40) {
			return (`${string.slice(0, 40) + '...'}`);
		// }
	}
	return string; // условие if(a) не выполняется и исполнение кода переходит далее;
};

console.log(formatString('Curabitur ligula sapien.'));
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка