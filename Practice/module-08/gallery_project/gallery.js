'use strict';

import images from './app.js';
// console.log(images);

const refs = {
	gallery: document.querySelector('.js-gallery'),
	lightbox: document.querySelector('.js-lightbox'),
	image: document.querySelector('.lightbox__image'),
	// modalContent: document.querySelector('.lightbox__content'),
	// btn: document.querySelector('[data-action="close-lightbox"]'),
	// img: document.createElement('img'),
};

refs.gallery.addEventListener('click', handleClickGalleryGetUrlBigImage);
// refs.btn.addEventListener('click', handleClickOffModalBtn);
// refs.modalContent.addEventListener('click', handleClickCloseModalContent);



// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
// Открытие модального окна по клику на элементе галереи.
// Подмена значения атрибута src элемента img.lightbox__image.
function handleClickGalleryGetUrlBigImage(evt) {
	evt.preventDefault();

	if (evt.target.nodeName === 'IMG') {
		refs.lightbox.classList.add('is-open');

		refs.image.src = evt.target.dataset.source;
		refs.image.alt = evt.target.alt;
	};
}

// function handleClickOffModalBtn(evt) {

// }

// function handleClickCloseModalContent(evt) {

// }

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
