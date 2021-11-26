'use strict';

/*
Анимация элементов с помощью setInterval
*/
heading.onclick = function() {
	// запомнить время начала
	let start = Date.now();

	let timer = setInterval(function() {
		//сколько времени прошло с начала анимации
	let timePassed = Date.now() - start;
	//
	heading.style.left = timePassed / 5 + 'px';
	//закончить анимацию через 2 секунды
	if (timePassed > 2000) {
		clearInterval(timer);
		return;
	};
	}, 20);
};