'use strict';

/*
Напиши класс Car с указанными свойствами и методами.

Добавь статический метод `getSpecs(car)`,
который принимает объект-машину как параметр и выводит
в консоль значения свойств maxSpeed, speed, isOn, distance и price.


*/


class Car {
	static getSpecs(car) {
		console.log(`maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`);
	}

	constructor (speed = 0, price, maxSpeed, isOn = false, distance = 0) {
		this.speed = speed;
		this.price = price;
		this.maxSpeed = maxSpeed;
		this.isOn = isOn;
		this.distance = distance;
	}
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
// console.log(mustang);


Car.getSpecs(mustang);