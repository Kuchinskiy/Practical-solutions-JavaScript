'use strict';

/*
* Напиши скрипт создания и очистки коллекции элементов.
* Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
* При нажатии на кнопку Очистить, коллекция элементов очищается.
<div id="controls">
   <input type="number" min="0" max="100" step="1" />
   <button type="button" data-action="render">Создать</button>
   <button type="button" data-action="destroy">Очистить</button>
</div>

<div id="boxes"></div>

* Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
* Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

* Каждый созданный div:
* -- Имеет случайный rgb цвет фона
* -- Размеры самого первого div - 30px на 30px
* -- Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px

* Создай функцию destroyBoxes(), которая очищает div#boxes.
*/

const refs = {
	control: document.querySelector('#controls'),
	input: document.querySelector('input'),
	render: document.querySelector('button[data-action="render"]'),
	destroy: document.querySelector('button[data-action="destroy"]'),
	boxes: document.querySelector('#boxes'),
};

console.log(refs.boxes);