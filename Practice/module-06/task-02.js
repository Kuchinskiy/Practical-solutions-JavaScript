'use strict';

import users from './users.js';

/*
Получить массив объектов пользователей по цвету глаз (поле eyeColor).
*/

const getUserWithEyeColor = (users, color) => users.filter((user) => user.eyeColor === color);

console.log(getUserWithEyeColor(users, 'blue')); // [{…}, {…}, {…}]
// [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]