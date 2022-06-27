'use strict';
// console.log('💩');

const addNameElem = ['PHP', 'Go', 'Phyton', 'MySQL', 'Angular', 'Vue', 'C#'];

// Delegation event.target
const nav = document.querySelector('.js-nav');

nav.addEventListener('click', handleNavClick);

function handleNavClick(evt) {
	evt.preventDefault();
	if (evt.target === evt.currentTarget) {
		return;
	}

	const target = evt.target;
	console.log('evt target', target); // смотрим что тут находится

	// Проверяем тип узла, если не 'ссылка' выходим из функции(для этого используем nodeName)
	if (target.nodeName !== 'A') {
		return;
	}
	// Выбираем множество элементов из многих вешаем класс или снимаем
	target.classList.toggle('active');

	// Переданая функция для активизация класса с CSS
	// setActiveLink(target);
}

function setActiveLink(nextActiveLink) {
	const currentActiveLink = nav.querySelector('a.active');

	if (currentActiveLink) {
		currentActiveLink.classList.remove('active');
	}

	nextActiveLink.classList.add('active');
}

// Код добавления кнопок
const addBtn = document.querySelector('.js-add-btn');

addBtn.addEventListener('click', onAddBtnClick);

function onAddBtnClick() {
	let positionElem = Math.floor(Math.random() * addNameElem.length);
	let labelContentElem = addNameElem.splice(positionElem, 1);

	const item = document.createElement('li');
	const tagLink = document.createElement('a');

	tagLink.classList.add('btn');
	tagLink.textContent = `${labelContentElem}`;
	item.appendChild(tagLink);

	nav.appendChild(item);
	labelContentElem += 1;
	// [...new Set(labelContentElem)];
}

// =============================================================
/*
--Todos--
*/
// Ultra model DATA (главные данные)
const todos = {
	items: [],
	add(text) {
		const todo = {
			id: Date.now(),
			text,
		};

		this.items.push(todo);

		return todo;
	},
	delete(id) {
		this.items = this.items.filter(item => item.id !== id); // в todo  остаються те которые не совпали(без повтора)
	},
};

const refs = {
	editor: document.querySelector('.js-editor'),
	todoList: document.querySelector('.js-todo-list'),
};

refs.editor.addEventListener('submit', handleEditorSubmit);
refs.todoList.addEventListener('click', handleTodoListClick);
// document.querySelector('input').addEventListener(
// 	'input',
// 	_.debounce(() => {
// 		console.log(
// 			'Input event handler invocation after 300ms of inactivity past burst.',
// 		);
// 	}, 300),
// );

function handleEditorSubmit(evt) {
	evt.preventDefault();
	const form = evt.currentTarget;

	const inputValue = form.elements.text.value;

	// console.log(inputValue); // смотрим введеное значение 'input', которое получаем)

	const todo = todos.add(inputValue);
	const todoMarkup = buildTodoItem(todo);
	appendTodoItem(refs.todoList, todoMarkup);
	// console.log(todos.items); // смотрим что там лежит 'todos' [{...}] и он будет добовляться и обновлятся
	// console.log(todoMarkup);

	form.reset(); // сбрасываем форму в исходное состояние
}

// Создаем интерфейс
function buildTodoItem(item) {
	return `
	<li class="todo-list__item" data-id="${item.id}">
				<div class="todo">
					<p class="todo__text">${item.text}</p>
					<div class="todo__actions">
						<button class="button" type="button">Delete</button>
					</div>
				</div>
			</li>
	`;
}

//  Функционал по добавлению элемента в --Todos--
function appendTodoItem(parentRef, todoElem) {
	parentRef.insertAdjacentHTML('beforeend', todoElem);
}

// Функционал по удалению элемента из --Todos--
function handleTodoListClick(evt) {
	if (evt.target.nodeName !== 'BUTTON') {
		return;
	}

	const btn = evt.target;
	const parentLi = btn.closest('.todo-list__item'); // получаем предка в любой вложености элемента благодаря closest()
	const todoId = Number(parentLi.dataset.id); // в нашем случае преобразовываем строку к числу, чтобы удалить(НО, так не надо делать)
	// console.log(typeof todoId); // получаем 'id' element(a) - это всегда строка(string)

	todos.delete(todoId);
	console.log(todos.items); // удаляем из базы данных, а потом уже из интерфейса

	parentLi.remove(); // удаляем элемент из интерфейса
}

// =============================================================
/*
Концепция Intersection Observer для события scroll(scrollspy);
*/

const navigation = document.querySelector('.page-nav');

// Call-back function - которую передаем в новый экземпляр объекта (Fn_Constructor)
const onEntry = entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			// console.log(entry.target); // смотрим что тут находится на пороге вхождения в 'root'
			const sectionId = entry.target.getAttribute('id');
			// console.log(sectionId);

			const currentActiveLink = document.querySelector(
				'.page-nav__link--active',
			);

			if (currentActiveLink) {
				currentActiveLink.classList.remove('page-nav__link--active');
			}

			const nextActiveLink = navigation.querySelector(
				`a[href="#${sectionId}"]`,
			);
			nextActiveLink.classList.add('page-nav__link--active');
		}
	});
};

// Записываем опции которые будем передавать в новый экземпляр объекта (Fn_Constructor)
const options = {
	treshold: 0.5,
};

// Создаем (Fn_Constructor) для работы Observer(a) в ее парметры предаються два аргумента(callback & options)
const observer = new IntersectionObserver(onEntry, options);
const sections = document.querySelectorAll('.section');

// Указываем конкретизируя за кем следить  Observer(у) как правило он следит за кем-то одним:
sections.forEach(section => {
	observer.observe(section);
});

// =============================================================
/*
Создаем Lazy-load  с помощью Intersection Observer
*/

const lazyLoad = target => {
	const options = {
		rootMargin: '50px 0px',
		treshold: 0.7,
	};

	// создаем наблюдатель
	const io = new IntersectionObserver((entries, observer) => {
		// для каждой записи-целевого элемента
		entries.forEach(entry => {
			// console.log(entry.target);
			// если элемент является наблюдаемым
			if (entry.isIntersecting) {
				const img = entry.target;
				// ссылка на оригинальное изображение хранится в атрибуте "data-lazy" получаем ее через dataset
				const imageUrl = img.dataset.lazy;

				img.setAttribute('src', imageUrl);

				observer.disconnect(); // снимаем Observer прекращаем наблюдение
			}
		});
	}, options);
	io.observe(target); // указываем за кем следить
};

// Выбираем изображения из секции за которыми будет следить Observer
// Создается целевой элемент, за которым наблюдает observer:
const images = document.querySelectorAll('.section img[loading="lazy"]');
console.log(images);

// Указываем конкретизируя за кем следить  Observer(у)
// с помощью цикла следим за всеми img на странице
images.forEach(image => {
	lazyLoad(image);
});

// Слушаем событие 'load' окончания загрузку картинки и потом вешаем класс анимации
// с помощью современного API-->>> { once: true} встроеного в браузер снимаем слушателя события
images.forEach(image => {
	image.addEventListener('load', onImageLoaded, { once: true});
});

function onImageLoaded(evt) {
	// console.log(evt.target);
	evt.target.classList.add('appear');
}


// =============================================================
/*
Фильтр с поиском через 'input' с использованием метода _.debounce()
*/

const tech = [
	{ label: 'HTML' },
	{ label: 'CSS' },
	{ label: 'JavaScript' },
	{ label: 'Node.js' },
	{ label: 'React' },
	{ label: 'Vue' },
	{ label: 'Next.js' },
	{ label: 'Mobx' },
	{ label: 'Redux' },
	{ label: 'React Router' },
	{ label: 'GraphQl' },
	{ label: 'PostgreSQL' },
	{ label: 'MongoDB' },
];

/*
* 1. Рендерим разметку элементов списка
* 2. Слушаем изменение фильтра
* 3. Фильтруем данные и рендерим новые элементы
*/

const refsMarkup = {
	list: document.querySelector('.js-list'),
	input: document.querySelector('#filter'),
};

// Слушаем изменение фильтра
refsMarkup.input.addEventListener('input', _.debounce(onFilterChange, 500));

// Рендерим весь массив
const listItemsMarkup = createListMarkup(tech);
populateList(listItemsMarkup);

// Рендерим разметку элементов списка
function createListMarkup(items) {
	return items.map(item => `<li>${item.label}</li>`).join('');
}

// Фильтруем данные и рендерим новые элементы
function onFilterChange(evt) {
	console.log('INPUT');
	// из интерфейса получаем фильтр, из модели tech[], отфильтровываем те объекты которые подходят
	const filter =evt.target.value.toLowerCase();
	const filteredItems = tech.filter(items => items.label.toLowerCase().includes(filter));

	// создаем разметку под новый отфильтрованый массив и полностью заменили разметку 'ul'
	const listItemsMarkup = createListMarkup(filteredItems);
	populateList(listItemsMarkup);
}

function populateList(markup) {
	refsMarkup.list.innerHTML = markup;
}