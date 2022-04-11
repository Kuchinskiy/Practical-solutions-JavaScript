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
const elementList = document.createElement('li');
elementList.classList.add('info');
console.log(ingredientsListItem);

ingredientsListItem.appendChild(elementList);

const ingredients = [
	'Картошка',
	'Грибы',
	'Чеснок',
	'Помидоры',
	'Зелень',
	'Приправы',
];
// console.log(ingredients);

// function createListItemMenu () {
//    const elementList = document.createElement('li');
//    elementList.classList.add('info');
// }

// createListItemMenu();