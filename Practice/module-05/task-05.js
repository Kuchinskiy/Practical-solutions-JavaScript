'use strict';

/*
Напиши класс Car с указанными свойствами и методами.

1. Добавь статический метод `getSpecs(car)`,
который принимает объект-машину как параметр и выводит
в консоль значения свойств maxSpeed, speed, isOn, distance и price.

2. Конструктор получает объект настроек.
Добавь свойства будущеего экземпляра класса:

-- speed - текущая скорость, изначально 0;
-- price - цена автомобиля;
-- maxSpeed - максимальная скорость;
-- isOn - заведен ли автомобиль, значения true или false. Изначально false;
-- distance - общий киллометраж, изначально 0;

3. Добавь геттер и сеттер для свойства price,
который будет работать с свойством цены автомобиля.

4. Добавь код для того чтобы завести автомобиль.
Записывает в свойство isOn значение true

*/


class Car {
	static getSpecs(car) {
		console.log(`maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn},
		distance: ${car.distance}, price: ${car.price}`);
	}

	constructor (speed = 0, price, maxSpeed, isOn = false, distance = 0) {
		this.speed = speed;
		this._price = price;
		this.maxSpeed = maxSpeed;
		this.isOn = isOn;
		this.distance = distance;
	}

	get price () {
		return this._price;
	}

	set price (cost) {
		this._price = cost;
	}


}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
// console.log(mustang);


Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

mustang.price = 2000;
console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000