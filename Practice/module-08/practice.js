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
Концепция Intersection Observer для события scroll
*/

const navigation = document.querySelector('.page-nav');

// Call-back function - которую передаем в новый экземпляр объекта (Fn_Constructor)
const onEntry = entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			// console.log(entry.target); // смотрим что тут находится на пороге вхождения в 'root'
			const sectionId = entry.target.getAttribute('id');
			// console.log(sectionId);

			const currentActiveLink = document.querySelector('.page-nav__link--active');

			if (currentActiveLink) {
				currentActiveLink.classList.remove('page-nav__link--active');
			}

			const nextActiveLink = navigation.querySelector(`a[href="#${sectionId}"]`);
			nextActiveLink.classList.add('page-nav__link--active');
		}
	});
};

// Записываем опции которые будем передавать в новый экземпляр объекта (Fn_Constructor)
const options = {
	treshold: 0.5
};

// Создаем (Fn_Constructor) для работы Observer(a) в ее парметры предаються два аргумента(callback & options)
const observer = new IntersectionObserver(onEntry,  options);
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
	const options = {};

	const io = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const img = entry.target;
				const imageUrl = img.dataset.lazy;

				img.setAttribute(imageUrl);

				observer.disconnect(); // снимаем Observer
			}
		});
	}, options);
	io.observe(target);
};

// Выбираем изображения из секции за которыми будет следить Observer
const images = document.querySelectorAll('.section img');

// Указываем конкретизируя за кем следить  Observer(у)
images.forEach(image => {
	lazyLoad(image);
});