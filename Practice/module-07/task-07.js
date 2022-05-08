'use strict';

/*
* Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) 
* и изменяет инлайн-стиль span#text обновляя свойство font-size.
* В результате при перетаскивании ползунка будет меняться размер текста.

<input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span>
*/

const refs = {
	input: document.querySelector('#font-size-control'),
	span: document.querySelector('#text'),
	count: document.querySelector('#value'),
};

refs.input.addEventListener('input', handleRangeDragDropInput);

function handleRangeDragDropInput(evt) {
	refs.count.value = evt.currentTarget.value;
	refs.span.style.fontSize = `${refs.input.value}px`;
}