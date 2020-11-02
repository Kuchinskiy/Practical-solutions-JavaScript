'use strict';

/** 
* Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt.
* Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

* Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.
* Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

* Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение:
* 'В вашей стране доставка не доступна'.

* Ниже приведен список стран и стоимость доставки.
* Китай - 100 кредитов
* Чили - 250 кредитов
* Австралия - 170 кредитов
* Индия - 80 кредитов
* Ямайка - 120 кредитов
*/

// const CHINA = 'China';
// const CHILI = 'Chili';
// const AUSTRALIA = 'Australia';
// const INDIA = 'India';
// const JAMAICA = 'Jamaica';
// const UKRAINE = 'Ukraine';

// const priceChina = 100;
// const priceChili = 250;
// const priceAustralia = 170;
// const priceIndia = 80;
// const priceJamaica = 120;
// const priceUkraine = 130;

// let price;

// const PRINT_COUNTRY = 'To which country would you like to arrange delivery:';
// const CANCEL = 'Canceled by user!';
// const NOT_DELIVERY = 'Delivery is not available in your country !!!';

// let message = prompt(PRINT_COUNTRY);

// if (message === null) {
//     message = CANCEL;
// } else {
//     const nameCountry = `${message[0].toUpperCase() + message.slice(1).toLowerCase()}`;
//     message = nameCountry;

//     switch (nameCountry) {
//         case CHINA:
//             price = priceChina;
//             break;

//         case CHILI:
//             price = priceChili;
//             break;

//         case AUSTRALIA:
//             price = priceAustralia;
//             break;

//         case INDIA:
//             price = priceIndia;
//             break;

//         case JAMAICA:
//             price = priceJamaica;
//             break;

//         case UKRAINE:
//             price = priceUkraine;
//             break;

//         default:
//             message = NOT_DELIVERY;
//             break;
//     }
//     if (price > 0) {
//         message = `Delivery to ${message} will cost ${price} credits`;
//     }
// }

// alert(message);

