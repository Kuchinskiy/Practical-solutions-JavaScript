'use strict';

import images from './app.js';
// console.log(images);

const refs = {
	gallery: document.querySelector('.js-gallery'),
	// lightbox: document.querySelector('.js-lightbox'),
	// modalContent: document.querySelector('.lightbox__content'),
	// image: document.querySelector('.lightbox__image'),
	// btn: document.querySelector('[data-action="close-lightbox"]'),
	// img: document.createElement('img'),
};

refs.gallery.addEventListener('click', handleClickUrlGallery);
// refs.btn.addEventListener('click', handleClickOffModalBtn);
// refs.modalContent.addEventListener('click', handleClickCloseModalContent);

// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
function handleClickUrlGallery(evt) {
	evt.preventDefault();
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

// refs.lightbox.classList.add('is-open');


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
