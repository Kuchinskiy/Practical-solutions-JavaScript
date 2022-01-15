'use strict';

import users from './users.js';

/*
Получить массив с именами друзей каждого из пользователей (поле friends),
при этом не должно быть повторяющихся имен и они должны быть отсортированы в алфавитном порядке.
*/

const getSortedUniqueName = users => Array.from(new Set(users
	.reduce((acc, {friends}) => [...acc, ...friends], []).sort()));

console.log(getSortedUniqueName(users));

// ['Aisha Tran', 'Briana Decker', 'Eddie Strong', 'Goldie Gentry', 'Jacklyn Lucas', 'Jordan Sampson',
// 'Linda Chapman', 'Marilyn Mcintosh', 'Naomi Buckner', 'Padilla Garrison', 'Sharron Pace']