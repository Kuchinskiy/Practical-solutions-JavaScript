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
	input: document.querySelector('input'),
	render: document.querySelector('button[data-action="render"]'),
	destroy: document.querySelector('button[data-action="destroy"]'),
	boxes: document.querySelector('#boxes'),
};

refs.input.addEventListener('input', handleBtnInputSetAmount);
refs.render.addEventListener('click', handleBtnCreateBoxes);
refs.destroy.addEventListener('click', handleBtnDestroyBoxes);

refs.input.addEventListener('focus', onBackgroundInput);
refs.input.addEventListener('blur', offBackgroundInput);

function handleBtnInputSetAmount(evt) {
	refs.input.setAttribute('count', Number(evt.currentTarget.value));
	// console.log(Number(evt.currentTarget.value));
}

const randomRGB = () => {
	let x = Math.floor(Math.random() * 256);
	let y = Math.floor(Math.random() * 256);
	let z = Math.floor(Math.random() * 256);
	let bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';

	return bgColor;
};

function handleBtnCreateBoxes() {
	let baseBoxSize = 20;
	const amount = Number(refs.input.getAttribute('count'));

	for (let i = 0; i < amount; i += 1) {
		baseBoxSize += 10;
		const newBox = document.createElement('div');
		newBox.style.background = randomRGB();
		newBox.style.height = `${baseBoxSize}px`;
		newBox.style.width = `${baseBoxSize}px`;
		newBox.style.margin = '10px';
		//  newBox.classList.add("new-box");
		refs.boxes.append(newBox);
	}
}

function onBackgroundInput(evt) {
	evt.target.style.background = 'orange';
}

function offBackgroundInput(evt) {
	evt.target.style.background = '';
}

function handleBtnDestroyBoxes() {
	refs.boxes.innerHTML = '';
	refs.input.value = '';
}