// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює
//     1, 0, -3
let x = -3;
if (x !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години
// попадає число
// (в першу, другу, третю или четверту частину години).
let time = 60;
if (time < 15) {
    console.log('1 частина')
} else if (time < 30) {
    console.log('2 частина')
} else if (time < 45) {
    console.log('3 частина')
} else if (time < 60) {
    console.log('4 частина')
} else {
    console.log('too much!!!')
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).
let day = 32;
if (day < 11) {
    console.log('1 декада')
} else if (day < 21) {
    console.log('2 декада')
} else if (day < 32) {
    console.log('3 декада')
} else {
    console.log('too much!!!')
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let value = 1;
switch (value) {
    case 1:
        console.log('monday');
        break;
    case 2:
        console.log('tuesday');
        break;
    case 3:
        console.log('wednesday')
        break;
    case 4:
        console.log('thursday');
        break;
    case 5:
        console.log('friday')
        break;
    case 6:
        console.log('saturday')
        break;
    case 7:
        console.log('sunday')
        break;
    default:
        console.log('bannn')
}
// }
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//
//    Також потрібно врахувати коли введені рівні числа.
let firstNum = prompt('first num?');
let secondNum = prompt('second num?');
if (firstNum === secondNum) {
    console.log(secondNum + ' = ' + firstNum);
} else if (firstNum > secondNum) {
    console.log(firstNum + ' > ' + secondNum);
} else if (secondNum > firstNum) {
    console.log(secondNum + ' > ' + firstNum)
}
