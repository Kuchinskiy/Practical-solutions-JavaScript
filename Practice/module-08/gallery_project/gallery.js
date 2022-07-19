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

refs.gallery.addEventListener('click', handleClickUrlGallery);
refs.btn.addEventListener('click',  handleClickOffModalBtn);
refs.modalContent.addEventListener('click', handleClickCloseModalContent);


// function handleClickUrlGallery(evt) {
	
// }

// function handleClickOffModalBtn(evt) {
	
// }

// function handleClickCloseModalContent(evt) {
	
// }

