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

const elemTags = str => {
	const elementList = document.createElement('li');
	elementList.classList.add('info');
   elementList.textContent = str;

   return elementList;
};
// console.log(elemTags());

const addCreateTag = arr => arr.map((item) => elemTags(item));
const list = addCreateTag(ingredients);
// console.log(list);

ingredientsListItem.append(...list);