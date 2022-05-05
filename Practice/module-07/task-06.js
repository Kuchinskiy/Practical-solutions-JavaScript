'use strict';

/*
* Напиши скрипт, который бы при потере фокуса на инпуте, 
* проверял его содержимое на правильное количество символов.

<input
   type="text"
   id="validation-input"
   data-length="6"
   placeholder="Введи 6 символов"
/>

* -- Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
* -- Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.

* Для добавления стилей, используй CSS-классы valid и invalid.
#validation-input {
   border: 3px solid #bdbdbd;
}

#validation-input.valid {
   border-color: #4caf50;
}

#validation-input.invalid {
   border-color: #f44336;
}
*/

const refs = {
	input: document.querySelector('#validation-input[data-length="6"]'),
};
// console.log(refs.input);

refs.input.addEventListener('focus', handleFocusInputValid);
refs.input.addEventListener('blur', handleFocusInputInvalid);

function handleFocusInputValid(evt) {
	// evt.target.style.background = 'pink';

	refs.input = evt.currentTarget;
	refs.input.classList.add('.valid');
}

function handleFocusInputInvalid(evt) {
	// evt.target.style.background = '';

	refs.input = evt.currentTarget;
	refs.input.classList.add('.invalid');
}
