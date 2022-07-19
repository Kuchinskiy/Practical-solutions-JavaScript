'use strict';

import images from './app.js';
// console.log(images);

const refs = {
	gallery: document.querySelector('.js-gallery'),
	lightbox: document.querySelector('.js-lightbox'),
	modalContent: document.querySelector('.lightbox__content'),
	image: document.querySelector('.lightbox__image'),
	btn: document.querySelector('[data-action="close-lightbox"]'),
	img: document.createElement('img'),
};

// refs.gallery.addEventListener('click', handleClickUrlGallery);
// refs.btn.addEventListener('click', handleClickOffModalBtn);
// refs.modalContent.addEventListener('click', handleClickCloseModalContent);

// function handleClickUrlGallery(evt) {

// }

// function handleClickOffModalBtn(evt) {

// }

// function handleClickCloseModalContent(evt) {

// }

// Создание и рендер разметки по массиву данных galleryItems из app.js и предоставленному шаблону.
const createImgElemMarkup = ({ preview, original, description }) => {
	return `<li class="gallery__item">
	<a
	class="gallery__link"
	href= ${original}
	>
	<img
		class="gallery__image"
		src= ${preview}
		data-source= ${original}
		alt= ${description}
	/>
	</a>
</li>`;
};

const galleryMarkup = images.map(createImgElemMarkup).join('');
refs.gallery.insertAdjacentHTML('afterbegin', galleryMarkup);
// refs.lightbox.classList.add('is-open');
