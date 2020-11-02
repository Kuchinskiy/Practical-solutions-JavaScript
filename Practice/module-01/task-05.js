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

const china = 100;
const chili = 250;
const australia = 170;
const india = 80;
const jamaica = 120;

const deliveryChina = 'China';
const deliveryChili = 'Chili';
const deliveryAustralia = 'Australia';
const deliveryIndia = 'India';
const deliveryJamaica = ' Jamaica';

let message;
let price = 0;

const promptLabel = `To which country would you like to arrange delivery: 
${deliveryChina}, ${deliveryChili}, ${deliveryAustralia}, ${deliveryIndia}, ${deliveryJamaica} etc.`;

const CANCEL = 'Canceled by user!';
const NOT_DELIVERY = 'Delivery is not available in your country !!!';

let userArrangesDelivery = prompt(promptLabel);

if (userArrangesDelivery === null) {
    message = CANCEL;
} else {
    // code

    switch (userArrangesDelivery) {
        case deliveryChina:
            price = china;
            break;

        case deliveryChili:
            price = chili;
            break;

        case deliveryAustralia:
            price = australia;
            break;

        case deliveryIndia:
            price = india;
            break;

        case deliveryJamaica:
            price = jamaica;
            break;
    
        default:
            message = NOT_DELIVERY;
            break;
    }
    if (price > 0 ) {
        message = `Delivery to ${userArrangesDelivery} will cost ${price} credits`;
    }
}

alert(message);

