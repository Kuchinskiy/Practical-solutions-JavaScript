'use strict';

import users from './users.js';

/*
Получить массив имен(поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
*/

const getNamesSortedByFriendsCount = users => [...users].sort((a, b) => a.friends.length - b.friends.length)
.map((user) => user.name);

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]