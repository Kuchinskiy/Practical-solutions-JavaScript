'use strict';

/*
Исправь ошибки которые будут в консоли, чтобы скрипт заработал.
*/

const inventory = {
	items: ['Knife', 'Gas mask'],

	add(itemName) {
		if (typeof(items) === 'undefined') {
			return this.items.push(itemName);
		}
	},

	remove(itemName) {
		this.items = this.items.filter(item => item !== itemName);
	},
};

const invokeInventoryAction = function(itemName, action) {
	// console.log(`Invoking action on ${itemName}`);
	action(itemName);
};

invokeInventoryAction('Medkit', inventory.add.bind(inventory));
// Invoking action on Medkit
// Adding Medkit(element) to inventory(obj)

console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

invokeInventoryAction('Gas mask', inventory.remove.bind(inventory));
// Invoking action on Gas mask
// Removing Gas mask(element) from inventory(obj)

console.log(inventory.items); // ['Knife', 'Medkit']