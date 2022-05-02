'use strict';

/*
* Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
* подставляет его текущее значение в span#name-output.
*Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

<input type="text" placeholder="Ваше имя?" id="name-input" />
<h1>Привет, <span id="name-output">незнакомец</span>!</h1>
*/

// const refs = {
// 	input: document.querySelector('#name-input'),
// 	output: document.querySelector('#name-output'),
// 	btn: document.querySelector('.btn'),
// };

// refs.input.addEventListener('input', onChangeInputEnter);
// refs.btn.addEventListener('click', onClickBtnCleanInput);


// function onChangeInputEnter(evt) {
// 	if (refs.input.value === '') {
// 		refs.output.innerHTML = 'незнакомец';
// 	};

// 	refs.output.textContent = evt.currentTarget.value;
// }

// function onClickBtnCleanInput() {
// 	refs.input.value = '';
// }

let input = document.getElementById("name-input");
let nameOutput = document.getElementById("name-output");

input.oninput = function () {
    if (input.value === '') {
       nameOutput.innerHTML = 'незнакомец';
    } else{
    nameOutput.innerHTML = input.value;
    }
}