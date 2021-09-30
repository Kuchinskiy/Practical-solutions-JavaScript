'use strict';

/*
Напиши скрипт, который, для объекта user, последовательно:

-- добавляет поле(key) mood со значением 'happy';
-- заменяет значение hobby на 'skydiving';
-- заменяет значение premium на false;

-- выводит содержимое объекта user в формате 'ключ:значение'
-- используя Object.keys() и for...of
*/

const user = {
	name: 'Mango',
	age: 20,
	hobby: 'html',
	premium: true,
};

// add --key:value
user['mood'] = 'happy';
// Также это возможно, сделать через метод Object.assign()
Object.assign(user, {mood: 'happy'});

// chenge -- values
user.hobby = 'skydiving';
user.premium = false;

// return an array with object keys
const keys = Object.keys(user);

for (const key of keys) {
	console.log(`${key}: ${user[key]}`);
}
