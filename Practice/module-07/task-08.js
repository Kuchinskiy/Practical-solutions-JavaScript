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

// refs.input.addEventListener('input', handleInputNumber);
refs.render.addEventListener('click', handleBtnInputGetAmount);
refs.destroy.addEventListener('click', handleBtnDestroyBoxes);

function handleBtnInputGetAmount(evt) {
	refs.input.dataset.value = Number(evt.currentTarget.value);
	handleBtnCreateBoxes(amount);
}

function handleBtnCreateBoxes(amount) {
	let arr = [];
	let basicSize = 30;

	return arr.map(() => {
		const fragment = document.createDocumentFragment();
		const el = document.createElement('div');
		let size =`${basicSize} * 10`;
		el.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
		fragment.appendChild(el);

		return refs.boxes.appendChild(fragment);
	});
}

function handleBtnDestroyBoxes() {
	refs.boxes.innerHTML = '';
}

const randomRGB = () => Math.floor(Math.random() * 256);
