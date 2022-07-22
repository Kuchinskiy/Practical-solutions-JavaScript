'use strict';

import images from './app.js';

const refs = {
	gallery: document.querySelector('.js-gallery'),
	lightbox: document.querySelector('.js-lightbox'),
	image: document.querySelector('.lightbox__image'),
	btn: document.querySelector('[data-action="close-lightbox"]'),
	// Дополнительный функционал
	backdrop: document.querySelector('.lightbox__overlay'),
};

refs.gallery.addEventListener('click', handleClickGalleryGetUrlBigImageOpenModal);
refs.btn.addEventListener('click', handleClickCloseModalBtn);
refs.backdrop.addEventListener('click', handleClickBackdropCloseModal);




// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
// Открытие модального окна по клику на элементе галереи.
// Подмена значения атрибута src элемента img.lightbox__image.
function handleClickGalleryGetUrlBigImageOpenModal(evt) {
	evt.preventDefault();

	if (evt.target.nodeName === 'IMG') {
		refs.lightbox.classList.add('is-open');

		refs.image.src = evt.target.dataset.source;
		refs.image.alt = evt.target.alt;
	}
	window.addEventListener('keydown', handleClickEscKeyPress);
}

// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
// Очистка значения атрибута src элемента img.lightbox__image. 
/*
Это необходимо для того, чтобы при следующем открытии модального окна, пока грузится изображение,
мы не видели предыдущее.
*/
function handleClickCloseModalBtn() {
	paramsRemoveClassSrcAlt();
	window.removeEventListener('keydown', handleClickEscKeyPress);
}

// Закрытие модального окна по клику на div.lightbox__overlay нажатие в backdrop
function handleClickBackdropCloseModal(evt) {
	if (evt.target === evt.currentTarget) {
		paramsRemoveClassSrcAlt();
	}
}

// Закрытие модального окна по нажатию клавиши ESC.
function handleClickEscKeyPress(evt) {
	const ESC_KEY_PRESS = 'Escape';

	if (evt.code === ESC_KEY_PRESS) {
		handleClickCloseModalBtn();
	}
}

// Снятие класса 'is-open' и очистка src с alt
function paramsRemoveClassSrcAlt() {
	refs.lightbox.classList.remove('is-open');

		refs.image.src = '';
		refs.image.alt = '';
}

/*
Варинт - 1
Создание и рендер разметки по массиву данных galleryItems из app.js и предоставленному шаблону.
*/
const createImgElemMarkup = ({ preview, original, description }) => {
	return `<li class="gallery__item">
	<a
	class="gallery__link"
	href="${original}"
	>
	<img
		class="gallery__image"
		src="${preview}"
		data-source="${original}"
		alt="${description}"
	/>
	</a>
</li>`;
};

const galleryMarkup = images.map(createImgElemMarkup).join('');
refs.gallery.insertAdjacentHTML('afterbegin', galleryMarkup);


/*
Вариант - 2
Создание и рендер разметки по массиву данных galleryItems из app.js и предоставленному шаблону.
*/  
// const createImgElemMarkup = (images) => {
// 	return images
// 		.map(({ preview, original, description }) => {
// 			return `<li class="gallery__item">
// 	<a
// 	class="gallery__link"
// 	href="${original}"
// 	>
// 	<img
// 		class="gallery__image"
// 		src="${preview}"
// 		data-source= ${original}
// 		alt="${description}"
// 	/>
// 	</a>
// </li>`;
// 		})
// 		.join('');
// };

// const markup = createImgElemMarkup(images);
// refs.gallery.insertAdjacentHTML('afterbegin', markup);
