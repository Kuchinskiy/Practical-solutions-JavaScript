'use strict';

/*
Анимация элементов HTML с помощью setInterval
*/

// Временная функция 
heading.onclick = function() {
	// запомнить время начала
	let start = Date.now();
	// переменная timer  которой присваеваем функцию setInterval необходима для остановки инструкции
	let timer = setInterval(function() {
		//сколько времени прошло с начала анимации от 0 до 2000ms
	let timePassed = Date.now() - start;
	//расстояние на которое необходимо сдивинуть элемент (2000ms / 10px = 200px)
	// left - изменяет значение от 0рх до 200рх
	heading.style.left = timePassed / 10 + 'px';
	//закончить анимацию через 2 секунды
	if (timePassed > 2000) {
		clearInterval(timer);
	};
	}, 10);
};