'use strict';

import users from './users.js';

/*
Получить массив имен всех пользователей у которых есть друг с указанным именем.
*/

const getUsersWithFriend = (users, friendName) => users.filter((user) => 
	user.friends.some((friend) => friend === friendName)).map((user) => user.name);

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]

console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]