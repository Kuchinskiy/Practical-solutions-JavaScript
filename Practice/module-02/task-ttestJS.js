'use stricte';

/*
Написать скрипт со следующим функционалом:

Имеется N-ое к-во полных бутылок с водой, также известно, что в приемке 
стеклотары возможно обменять K(во) пустых бутылок из под воды на одну полную бутылку с водой.
Посчитайте максимальное количество бутылок с водой, которое вы сможете выпить.

N - параметр\аргумент определяющий к-во полных бутылок с водой;
K - параметр\аргумент определяющий курс обменна в приемке, соотношение 4 к 1;

Чтобы вычеслить ИТОГО общее к-во выпитых бутылок воды, учитывайте,
что полные(бут) автоматически становяться пустыми(бут) и пригодными для обмена:
- при обмене учитывай курс обмена(деля по обменному курсу);
- не забывайте об остатке к-ва пустых бутылок(у вас на руках) не подлежащих обмену,
из-за соотношения курса 4 = 1 бут., но дающие возможность для следующего обмена;

const maxWaterBottles = (N, K) => {
ваш код//
};
console.log( maxWaterBottles(13, 4)) // 17

P.S Для проверки корректности вычесления - подставьте разные числа в аргумент N и убедитесь
в правильности работы функции.
*/

const maxWaterBottles = (fullBottles, emptyBottles) => {
	return fullBottles + Math.ceil(fullBottles / emptyBottles);
};

console.log(maxWaterBottles(13, 4)); // 17
console.log(maxWaterBottles(15, 4)); // 19
console.log(maxWaterBottles(17, 4)); // 22


// Решение более наглядно показывающее происходящее:
const maxBeerBottles = (N, K) => {
	let [result, empty, full] = [0, 0, N];

	while (full > 0) {
	result += full;
	empty += full;

	full = Math.floor(empty / K);
	empty = empty % K;
	}
	return result;
};

// console.log(maxBeerBottles(15, 4)); // 19