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
	window.addEventListener('keydown', handleClicBtnkArrowRightAndArrowLeft);
}

// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
// Очистка значения атрибута src элемента img.lightbox__image. 
/*
Это необходимо для того, чтобы при следующем открытии модального окна, пока грузится изображение,
мы не видели предыдущее.
*/
// Доплнительный функционал, закрытие модального окна через Esc
function handleClickCloseModalBtn() {
	paramsRemoveClassCleanSrcAlt();
	window.removeEventListener('keydown', handleClickEscKeyPress);
	window.removeEventListener('keydown', handleClicBtnkArrowRightAndArrowLeft);
}

// Закрытие модального окна по клику на div.lightbox__overlay нажатие в backdrop
function handleClickBackdropCloseModal(evt) {
	if (evt.target === evt.currentTarget) {
		paramsRemoveClassCleanSrcAlt();
	}
}

// Дополнительный функционал
// Закрытие модального окна по нажатию клавиши ESC.
function handleClickEscKeyPress(evt) {
	console.log(evt.code);
	const ESC_KEY_PRESS = 'Escape';

	if (evt.code === ESC_KEY_PRESS) {
		handleClickCloseModalBtn();
	}
}

// Снятие класса 'is-open' и очистка src с alt
function paramsRemoveClassCleanSrcAlt() {
	refs.lightbox.classList.remove('is-open');

		refs.image.src = '';
		refs.image.alt = '';
}

// Дополнительный функционал
// Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".
let image;

function handleClicBtnkArrowRightAndArrowLeft(evt) {
	if (evt.code === 'ArrowRight') {
		handleClickNextImg(images);
	}

	if (evt.code === 'ArrowLeft') {
		handleClickPrevImg(images); 
	}
}

function handleClickNextImg(img) {
	const gallery = img.map(item => item.original);
	const index = gallery.indexOf(image);

	if (index === gallery.length - 1) {
		return;
	}

	let nextIdxImg = index + 1;
	refs.image.src = gallery[nextIdxImg];
	image = gallery[nextIdxImg];
}

function handleClickPrevImg(img) {
	const gallery = img.map(item => item.original);
	const index = gallery.indexOf(image);

	if (index === 0) {
		return;
	}

	let prevIdxImg = index - 1;
	refs.image.src = gallery[prevIdxImg];
	image = gallery[prevIdxImg];
}

/*
Варинт - 1
Создание и рендер разметки по массиву данных galleryItems из app.js и предоставленному шаблону.
*/
const createImgElemMarkup = ({ original, description }) => {
	return `<li class="gallery__item">
	<a
	class="gallery__link"
	href="${original}"
	>
	<img
	loading="lazy"
		class="gallery__image"
		src=""
		data-source="${original}"
		alt="${description}"
		width="510"
		height="340"
	/>
	</a>
</li>`;
};

const galleryMarkup = images.map(createImgElemMarkup).join('');
refs.gallery.insertAdjacentHTML('afterbegin', galleryMarkup);

// Lazy-load -->>> Intersection Observer
// Дополнительный функционал
const lazyLoad = target => {
	const option = {
		rootMargin: '50px 0px',
		treshold: 0.02
	};

	const io = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const img = entry.target;
				const imageUrl = img.dataset.source;

				img.setAttribute('src', imageUrl);

				observer.disconnect();
			}
		});
	}, option);

	io.observe(target);
};

const img = document.querySelectorAll('.gallery__image');

img.forEach(item => {
	lazyLoad(item);
});



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