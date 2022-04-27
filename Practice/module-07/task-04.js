'use strict';

/*
* Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

* -- Создай переменную counterValue в которой будет хранится текущее значение счетчика.
* -- Создай функции increment и decrement для увеличения и уменьшения значения счетчика
* -- Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
*/

const counterIdContainer = document.querySelector('#counter');
console.log(counterIdContainer);
// const valueOnClickCounter = document.querySelector('#value');
// const buttonNextClick = document.querySelector('button[data-action="increment"]');
// const buttonPrevClick = document.querySelector('button[data-action="decrement"]');
// console.log(buttonNextClick);
// console.log(buttonPrevClick);
// console.log(valueOnClickCounter);

const refs = {
	valueCount: document.querySelector('#value'),
	btnNextPlus: document.querySelector('button[data-action="increment"]'),
	btnPrevMinus: document.querySelector('button[data-action="decrement"]'),
};

refs.btnNextPlus.addEventListener('click', onClickIncrement);
refs.btnPrevMinus.addEventListener('click', onClickDecrement);

let counterValue = 0;

function onClickIncrement(evt) {
	
}

function onClickDecrement(evt) {
	
}