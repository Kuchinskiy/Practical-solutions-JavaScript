'use strict';

/*
Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.

-->>Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
-->>Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и добавляет
в конец строки троеточие '...', после чего возвращает укороченную версию.
*/

const formatString = function (string) {
	for (let i = 0; i < string.length; i += 1) {
		if (string.length < 40) {
			return string;
		}
	}
};
// formatString('Curabitur ligula sapien, tincidunt non.')
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

