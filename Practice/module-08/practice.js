'use strict';

const addNameElem = ['PHP', 'Go', 'Phyton', 'MySQL', 'Angular', 'Vue', 'C#'];


// Delegation event.target
const nav = document.querySelector('.js-nav');

nav.addEventListener('click', handleNavClick);

function handleNavClick(evt) {
	evt.preventDefault();
	if (evt.target === evt.currentTarget) {
		return;
	}

	const target = evt.target;
	console.log('evt target', target); // смотрим что тут находится

	// Проверяем тип узла, если не 'ссылка' выходим из функции(для этого используем nodeName)
	if (target.nodeName !== 'A') {
		return;
	}
	// Выбираем множество элементов из многих вешаем класс или снимаем
	target.classList.toggle('active');

	// Переданая функция для активизация класса с CSS
	// setActiveLink(target);
}


function setActiveLink(nextActiveLink) {
	const currentActiveLink = nav.querySelector('a.active');

	if (currentActiveLink) {
		currentActiveLink.classList.remove('active');
	}

	nextActiveLink.classList.add('active');
}


// Код добавления кнопок
const addBtn = document.querySelector('.js-add-btn');

addBtn.addEventListener('click', onAddBtnClick);

function onAddBtnClick() {
	let positionElem = Math.floor(Math.random() * addNameElem.length);
	let labelContentElem = addNameElem.splice(positionElem, 1);

	const item = document.createElement('li');
	const tagLink = document.createElement('a');

	tagLink.classList.add('btn');
	tagLink.textContent = `${labelContentElem}`;
	item.appendChild(tagLink);

	nav.appendChild(item);
	labelContentElem += 1;
	// [...new Set(labelContentElem)];
}