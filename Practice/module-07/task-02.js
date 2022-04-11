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
console.log(ingredientsListItem);


const ingredients = [
	'Картошка',
	'Грибы',
	'Чеснок',
	'Помидоры',
	'Зелень',
	'Приправы',
];
// console.log(ingredients);

const createElemTagsName = str => {
	const elementList = document.createElement('li');
	elementList.classList.add('info');
   elementList.textContent = str;

   return elementList;
};
// console.log(createElemTagsName(ingredients[1])); // создаем элемент + текст внутри тега

const addCreateTag = arr => arr.map((item) => createElemTagsName(item));
const list = addCreateTag(ingredients);
// console.log(list); // (6) [li.info, li.info, li.info, li.info, li.info, li.info]

ingredientsListItem.append(...list);