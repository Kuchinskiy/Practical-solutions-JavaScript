'use strict';

// Delegation event.target
const nav = document.querySelector('.js-nav');

nav.addEventListener('click', handleNavClick);

function handleNavClick(evt) {
	evt.preventDefault();

	const target = evt.target;
	console.log('evt target', target); // смотрим что тут находится

	// Проверяем тип узла, если не ссылка выходим из функции(для этого используем nodeName)
	if (target.nodeName !== 'A') {
		return;
	}

	setActiveLink(target);
}


function setActiveLink(nextActiveLink) {
	const currentActiveLink = nav.querySelector('a.active');

	if (currentActiveLink) {
		currentActiveLink.classList.remove('active');
	}

	nextActiveLink.classList.add('active');
}