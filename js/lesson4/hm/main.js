// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function pramS(a, b) {
//     return a * b;
// }
//
// console.log(pramS(20, 10));

// - створити функцію яка обчислює та повертає площу кола з радіусом r (S = πr2)
// function circleS(r) {
//     return 3.14 * r ** 2;
// }
//
// console.log(circleS(10));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r ; s = 2 P r(h+r)
// function cylinS(h, r) {
//     return 2 * 3.14 * r * (h + r)
// }
//
// console.log(cylinS(5, 3));
// - створити функцію яка приймає масив та виводить кожен його елемент
// let arr = [
//     1, 2, 3, 'text', true, 'skdjskj'
// ]
//
// function arri(arr) {
//     for (let item of arr) {
//         console.log(item);
//     }
// }
//
// arri(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function p(text) {
//     document.write(`<p>${text}</p>`);
// }
//
// p('hello world!!!')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function li(text) {
//     document.write(`
// <ul>
//     <li>${text}</li>
//     <li>${text}</li>
//     <li>${text}</li>
// </ul>
//     `);
// }
//
// li('item')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li
// визначається другим аргументом, який є числовим (тут використовувати цикл)
// function ul(li, text) {
// document.write('<ul>');
//     for (let i = 0; i < li; i++) {
//         document.write(`<li>${text}</li>`);
//     }
// document.write('</ul>');
// }
// ul(24,'hello');

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function arrList(arr){
//     document.write('<ul>');
//     for (const item of arr) {
//         document.write(`<li>${item}</li>`);
//     }
//     document.write('</ul>');
// }
// arrList([1,2,3,'dfsdd,tr',false])
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного'
// + ' об'єкту окремий блок.
// arr = [ {id:1,name:'ivan',age:35},
//         {id:2,name:'flex',age:15},
//         {id:3,name:'olexa',age:25},
//         {id:4,name:'mihailo',age:45}
// ];
// function blockofUsers(arr){
//     document.write('<div>');
//     for (const item of arr) {
//         document.write(`
//          <p>${item.id}. ${item.name } - ${item.age}</p>
// `);
//     }
//     document.write('</div>');
// }
// blockofUsers(arr);
// - створити функцію яка повертає найменьше число з масиву

// let arr = [1,2,3,4,5,-10];
// function minNum(arr){
//     let min = arr[0];
//     for (let item of arr) {
//         if (min > item){
//             min = item
//         }
//     }
//     return min;
// }
//
// console.log(minNum(arr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// function sum(arr) {
//     let summa = 0;
//     for (const item of arr) {
//         summa = summa + item;
//     }
//     return summa;
// }
// console.log(sum([10,20,30,40]));
