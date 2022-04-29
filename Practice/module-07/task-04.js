'use strict';

/*
* Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

* -- Создай переменную counterValue в которой будет хранится текущее значение счетчика.
* -- Создай функции increment и decrement для увеличения и уменьшения значения счетчика
* -- Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
*/

const refs = {
	counterValue: document.querySelector('#value'),
	btnNextPlus: document.querySelector('button[data-action="increment"]'),
	btnPrevMinus: document.querySelector('button[data-action="decrement"]'),
};

refs.btnNextPlus.addEventListener('click', onTargetButtonClickIncrement);
refs.btnPrevMinus.addEventListener('click', onTargetButtonClickDecrement);

let counterValue = 0;

function onTargetButtonClickIncrement() {
	counterValue += 1;
	refs.counterValue.textContent = counterValue;
}

function onTargetButtonClickDecrement() {
	if (counterValue === 0) {
		return;
	}

	counterValue -= 1;
	refs.counterValue.textContent = counterValue;
}