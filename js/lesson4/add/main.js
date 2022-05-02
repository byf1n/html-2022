// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function min(a, b, c) {
//     if (a <= b && a <= c) {
//         return a;
//     } else if (b <= a && b <= c) {
//         return b;
//     } else {
//         return c;
//     }
// }
//
// console.log('min: ' + min(20, 30, 10));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function max(a, b, c) {
//     if (a >= b && a >= c) {
//         return a;
//     } else if (b >= a && b >= c) {
//         return b;
//     } else {
//         return c;
//     }
// }
//
// console.log('max: ' + max(20, 40, 390));
// - створити функцію яка повертає найбільше число з масиву
// let arr = [1, 20, 40, 45, 50]
//
// function max_from_arr(arr) {
//     let max = arr[0];
//     for (let item of arr) {
//         if (max < item) {
//             max = item;
//         }
//     }
//     return max;
// }
//
// console.log('max from arr: ' + max_from_arr(arr));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function avr(arr) {
//     let avr = 0;
//     for (const num of arr) {
//         avr = avr + num;
//     }
//     return avr / arr.length
// }
//
// console.log('avr: ' + Math.round(avr(arr)));
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math
// використовувати заборонено);
// function minMax(){
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const argument of arguments) {
//         if (min > argument){
//             min = argument;
//         }
//         if (max < argument){
//             max = argument;
//         }
//     }
//     console.log('max: ' + max);
//     return min;
// }
// console.log('min: ' + minMax(1, 123, 21, 312, 3, 0, 'dfaf'));
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// function randomArr (count){
//     arr = [];
//     for (let i = 0; i < count; i++) {
//         arr[i] = Math.round(Math.random()*100)
//
//     }
//     console.log(arr);
// }
// randomArr(10);
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який
// характеризує кінцеве значення діапазону.
// function randomLimit(count, limit) {
//         let arr = [];
//     for (let i = 0; i < count; i++) {
//         arr[i] = Math.round(Math.random() * limit)
//     }
//     console.log(arr);
// }
//
// randomLimit(10, 30)

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// function ritar (arr)    {
//         let reverseArr = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reverseArr.push(arr[i])
//     }
//     return reverseArr;
// }
//
// console.log(ritar([1, 2, 3]));
//
//
//
// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або
// // конкатенує їх між собою.
// function lol() {
//     if (arguments.length === 1) {
//         console.log(arguments[0]);
//     } else if (arguments.length === 2) {
//         console.log('sum: ' + (arguments[0] + arguments[1]));
//     } else{
//         throw new Error('!H!HJ!H!VJ!Vj')
//     }
// }
// lol(12,1);

//
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає
// новий результуючий масив.
//     EXAMPLE:
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
// let arr1 = [1,2,3,4];
// let arr2 = [2,3,4,5];
// function twoArr (arr1,arr2){
//     let arr3 = [];
//     for (let i = 0; i < arr1.length; i++) {
//         arr3[i] = arr1[i] + arr2[i]
//     }
//     return arr3;
// }
// console.log(twoArr(arr1, arr2));
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// let arr = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// function keys (arr){
//     let keys = [];
//     for (let element of arr) {
//         for (let arrKey in element) {
//             keys.push(arrKey)
//         }
//     }
//     return keys
// }
//
// console.log(keys(arr));
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
let arr = [{name: 'Dima', age: 13}, {model: 'Camry'}];
function values (arr){
    let values = [];
    for (const element of arr) {
        for (let key in element) {
            values.push(element[key]) //
        }
    }
    return values;
}

console.log(values(arr));
