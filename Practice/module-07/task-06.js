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
	input: document.querySelector('#validation-input'),
	error: document.querySelector('#error'),
};

refs.input.addEventListener('blur', handleBlurInputContent);
refs.input.addEventListener('focus', handleInputBackground);


function handleBlurInputContent(evt) {
	if (refs.input.value.length > 6 || 6 > refs.input.value.length) {
		refs.error.textContent = 'Пожалуйста, введите нужное к-во символов!!!';
	}
	evt.target.style.background = '';

	const setQuantityLength = Number(refs.input.dataset.length); // установленое к-во символов(преобразов., в число)
	const getCountLength = refs.input.value.length; // к-во символов которое вводим в инпут

	if (getCountLength === setQuantityLength) {
		// refs.input.classList.toggle('valid');
		refs.input.classList.add('valid');
		refs.input.classList.remove('invalid');
	} else {
		// refs.input.classList.toggle('invalid');
		refs.input.classList.add('invalid');
		refs.input.classList.remove('valid');
	}
}


function handleInputBackground(evt) {
	evt.target.style.background = 'pink';
	refs.error.textContent = '';
}
