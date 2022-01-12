'use strict';

import users from './users.js';
/*
Получить массив имен всех пользователей (поля(key) -->> name).
*/

// map
// const getUserNames = users => users.map(user => user.name);

// reduce
const getUserNames = users => users.reduce((acc,user) => {
	acc.push(user.name);
	return acc;
}, []);

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head',
// 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]