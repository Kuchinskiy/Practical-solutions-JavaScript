'use strict';
// console.log('test');

/* 
*В HTML есть список категорий ul#categories.
*Напиши скрипт, который выполнит следующие операции :
Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. 
Получится 'В списке 3 категории.'.

Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка 
элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

*Например для первой категории получится:
*-- Категория: Животные
*-- Количество элементов: 4
*/

const categoriesMenuItems = document.querySelector('#categories');
// console.log(categoriesMenuItems);
// console.log(`В списке ${categoriesMenuItems.children.length} категории`);

//* method map()
// [...categoriesMenuItems.children].map(item => {
// 	console.log(`Категория: ${item.children[0].textContent}`);
// 	console.log(`Количество элементов: ${item.children[1].children.length}`);
// });
//* method forEach()
// [...categoriesMenuItems.children].forEach(item => {
// 	console.log(`Категория: ${item.children[0].textContent}`);
// 	console.log(`Количество элементов: ${item.children[1].children.length}`);
// });


const categories = document.querySelectorAll('.item');

//!? Преообразовываем объект-псевдомассив в обычный массив(коллекцию) с его методами двумя способами:
// const categories = Array.from(document.querySelectorAll('.item')); // Array.from()
// const categories = [...document.querySelectorAll('.item')]; // ...spred
console.log(categories); 

[...categories].forEach(item => { // ....spred
	console.log(`Категория: ${item.children[0].textContent}`);
	console.log(`Количество элементов: ${item.children[1].children.length}`);
});