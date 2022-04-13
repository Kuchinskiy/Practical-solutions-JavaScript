'use strict';

/*
В HTML есть пустой список ul#ingredients.
<ul id="ingredients"></ul>

В JS есть массив строк.
const ingredients = [
   'Картошка',
   'Грибы',
   'Чеснок',
   'Помидоры',
   'Зелень',
   'Приправы',
];

Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
после чего вставит все li за одну операцию в список ul.ingredients. 
Для создания DOM-узлов используй document.createElement().
*/

const ingredientsListItem = document.querySelector('#ingredients');
const technologyListItem = document.querySelector('#technology');
console.log(ingredientsListItem);
console.log(technologyListItem);

const ingredients = [
	'Картошка',
	'Грибы',
	'Чеснок',
	'Помидоры',
	'Зелень',
	'Приправы',
];

const teсhnology = ['HTML', 'CSS', 'Java Script', 'PHP', 'MySQL', 'Node.js'];

const createElemTagsName = str => {
	const elementsList = document.createElement('li');
	elementsList.classList.add('info');
	elementsList.textContent = str;

	return elementsList;
};
// console.log(createElemTagsName(ingredients[1])); // создаем элемент + текстовый контент внутри тега

const addCreateTag = arr => arr.map(item => createElemTagsName(item));
const list = addCreateTag(ingredients);
const listItem = addCreateTag(teсhnology);
// console.log(list); // (6) [li.info, li.info, li.info, li.info, li.info, li.info] HTMLCollection or NodeList

// ingredientsListItem.append(...list); // используем механизм ...spred
technologyListItem.append(...listItem); // передавая массив элементов отдельными аргументами

// Второй вариант используя method forEach()

ingredients.forEach((str, idx) => {
	const elements = document.createElement('li');
	elements.classList.add('info');
	elements.textContent = str;

	// console.log(`${idx + 1} - ${item}`);
	ingredientsListItem.append(elements);
});
