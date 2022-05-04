// Все стірлочними!!!!!!!!!
//     - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
    //     let arr = [10,20,30,40]
    //     let avr = (arr) => {
    //         let all = 0;
    //         for (const num of arr) {
    //                 all = all + num;
    //         }
    //         return all / arr.length
    //     }
    //     console.log(avr(arr));
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати
// заборонено);
    // let minMax = (...arg) => {
    //     let min = arg[0];
    //     let max = arg[0];
    //     for (let argument of arg) {
    //         if (min > argument){
    //             min = argument;
    //         } if (max < argument){
    //             max = argument
    //         }
    //     }
    //     console.log(max);
    //     return min
    // }
    // console.log(minMax(1, 2, 3, 4, -10));
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
    // let randomArr = (count) => {
    //     let randomArr = [];
    //     for (let i = 0; i < count; i++) {
    //         randomArr[i] = Math.round(Math.random()*100);
    //     }
    //     console.log(randomArr);
    // }
    // randomArr(10)
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує
// кінцеве значення діапазону.
    // let randomArrWithLimit = (count,limit) => {
    //     let randomArrWithLimit = [];
    //     for (let i = 0; i < count; i++) {
    //         randomArrWithLimit[i] = Math.round(Math.random()*limit)
    //     }
    //     console.log(randomArrWithLimit);
    // }
    // randomArrWithLimit(10,1000)
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
    // let arr = [1,2,3];
    // let revArr = (arr) => {
    //     let revArr = [];
    //     for (let i = arr.length - 1, j = 0; i >= 0; i--, j++){
    //         revArr[j] = arr[i]
    //     }
    //     return revArr;
    // }
    // console.log(revArr(arr));


// Переробити на стрілочні функції з попереднього дз
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
    // let pramA = (a,b) => console.log(a * b);
    // pramA(10, 20);
// - створити функцію яка обчислює та повертає площу кола з радіусом r
    // let sKola = (r) => Math.round(Math.PI * Math.pow(r,2));
    // console.log(sKola(8));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
    // let sCilinder = (h,r) => Math.round(Math.PI * h * r * 2);
    // console.log(sCilinder(10, 10));
// - створити функцію яка приймає масив та виводить кожен його елемент
    // let arr = [1,2,3,4,5];
    // let enter = (arr) => {
    //     for (const element of arr) {
    //         console.log(element);
    //     }
    // }
    // enter(arr);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
    // let par = (text) => document.write(`<p>${text}</p>`);
    // par('text')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
    // let li3 = (text) => document.write(`<ul>
    //     <li>${text}</li>
    //     <li>${text}</li>
    //     <li>${text}</li>
    // </ul>`);
    // li3('textt')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li
// визначається другим аргументом, який є числовим (тут використовувати цикл)
    // let ulLimit = (text, limit) => {
    //     document.write('<ul>');
    //     for (let i = 0; i < limit; i++) {
    //         document.write(`
    //             <li>  ${text}</li>
    // `);
    //     }
    //     document.write('\<ul>');
    // }
    // ulLimit('some text', 100)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
    // let arr = [1,'sdf',true,[1,2,3]];
    // let list = (arr) => {
    //     document.write(`<ul>`);
    //     for (const element of arr) {
    //         document.write(`<li>${element}</li>`);
    //     }
    //     document.write(`</ul>`);
    // }
    // list(arr)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного ' +
// 'об'єкту окремий блок.
        // arr = [{id:1, name:'kirill', age:143}, {id:2, name:'max', age:12}, {id:3, name:'bob', age:129}];
        // let docArr = (arr) => {
        //     for (const element of arr) {
        //     document.write('<div>');
        //         document.write();
        //     document.write('</div>');
        //     }
        // }
        // docArr(arr)
// - створити функцію яка повертає найменьше число з масиву
    // let arr = [1,2,3,4,-10]
    // let min =  (arr) => {
    //     let min = arr[0];
    //     for (let num of arr) {
    //         if (min > num){
    //             min = num;
    //         }
    //     }
    //     return min;
    // }
    // console.log(min(arr));
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
    // let arr = [1,2,3,4,10];
    // let sum = (arr) => {
    //     let sum = 0;
    //     for (const num of arr) {
    //         sum = sum + num
    //     }
    //     return sum;
    // }
    // console.log(sum(arr));
// -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.
let arr = [
    {id:1},
    {id:2}
];
let change = (arr) => {
    let third = arr[0];
    arr[0] = arr[1];
    arr[1] = third;
    return arr;
}
console.log(change(arr));