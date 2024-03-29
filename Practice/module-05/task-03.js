'use strict'

/*
Напиши класс Storage, который будет создавать объекты для управления складом товаров.
При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

Добавь методы класса:
-- getItems() - возвращает массив текущих товаров
-- addItem(item) - получает новый товар и добавляет его к текущим
-- removeItem(item) - получет товар и, если он есть, удаляет его из текущих
*/

class Storage {
	constructor (items) {
		this.items = items;
	}

	getItems() {
		return this.items;
	}

	addItem(elem) {
		this.items.push(elem);
	}

	removeItem(item) {
		// https://www.delftstack.com/ru/howto/javascript/javascript-remove-from-array-by-value/
		const idx = this.items.indexOf(item);
		if (idx !== -1) {
			this.items.splice(idx, 1);
		}

		// Вариант-2 (БЕЗ использования дополнительной переменной)
		// if (this.items.includes(item)) {
		// 	this.items.splice(this.items.indexOf(item), 1);
		// }
	}
}

const storage = new Storage([
	'Нанитоиды',
	'Пролонгер',
	'Железные жупи',
	'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]