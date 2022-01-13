'use strict';

import users from './users.js';

/*
1.Получить массив объектов только неактивных пользователей (поле isActive).

2.Получить массив имен, только неактивных пользователей (поле isActive).
*/

const getInactiveUsers = users => users.filter((user) => user.isActive === false);
// const getInactiveUsers = users => users.filter((user) => !user.isActive);

// const getInactiveUsers = users => users.filter((user) => !user.isActive).map((user) => user.name);

console.log(getInactiveUsers(users)); // [{…}, {…}, {…}]
// [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// ['Moore Hensley', 'Ross Vazquez', 'Blackburn Dotson']