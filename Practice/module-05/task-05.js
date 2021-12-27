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
Записывает в свойство isOn значение true.

5. Добавь код для того чтобы заглушить автомобиль.
Записывает в свойство isOn значение false,
и сбрасывает текущую скорость в 0.

6. Добавялет к свойству speed полученное значение,
при условии что результирующая скорость не больше чем значение свойства maxSpeed.

7. Отнимает от свойства speed полученное значение,
при условии что результирующая скорость не меньше нуля.

8. Добавляет в поле distance киллометраж (hours * speed),
но только в том случае если машина заведена!
*/


class Car {
// 1.
	static getSpecs(car) {
		console.log(`maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn},
		distance: ${car.distance}, price: ${car.price}`);
	}
// 2.
	constructor (objMustangCar) {
		this.speed = 0;
		this._price = objMustangCar.price;
		this.maxSpeed = objMustangCar.maxSpeed;
		this.isOn = false;
		this.distance = 0;
	}
// 3.
	get price () {
		return this._price;
	}

	set price (cost) {
		this._price = cost;
	}
// 4.
	turnOn () {
		this.isOn = true;
	}
// 5.
	turnOff () {
		this.isOn = false;
		this.speed = 0;
	}
// 6.
	accelerate (addValue) {
		if (this.speed < this.maxSpeed) {
			this.speed += addValue;
		}
	}
// 7.
	decelerate (removeValue) {
		if (this.speed > 0) {
			this.speed -= removeValue;
		}
	}
// 8.
	drive (hours) {
		if (this.isOn) {
			this.distance += hours * this.speed;
		}
	}
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
// console.log(mustang);
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000