'use strict';

import users from './users.js';

/*
Получить массив всех умений всех пользователей (поле skills),
при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
*/

// const getSortedUniqueSkills = users => users
// 	.reduce((acc, { skills }) => [...acc, ...skills], [])
// 	.filter((el, idx, skills) => skills.indexOf(el) === idx)
// 	.sort();

// Сокращенный вариант декларативности кода
const getSortedUniqueSkills = users => Array.from(new Set(users
	.reduce((acc, { skills }) => [...acc, ...skills], []).sort()));


console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum',
// 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]