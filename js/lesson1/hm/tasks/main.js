// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 1, -999, 123, 3.14, 2.7, 16, true,
//     false.
//         Вивести кожну змінну за допомогою: console.log , alert, document.write
let a = 'hello';
let b = 'owu';
let c = '.com';
let d = 'ua';
let one = 1;
let ten = 10;
let alot = -999;
let ott = 123;
const PI = 3.14;
let ts = 2.7;
let f = 16;
let r = true;
let nr = false;

console.log(a, b, c, d, f, one, ten, alot, PI, ott, ts, r, nr)
// alert(a + b + c + d + f + one + ten + alot + PI + ott + ts + r + nr)
document.write(a, b, c, d, f, one, ten, alot, PI, ott, ts, r, nr)
// - Створити об'єкт book з наступними полями :
// назва, (тип string)
// кількість сторінок (числовий тип),
// жанр (string)
let book = {
    name: 'Harry Potter',
    pages: 300,
    genre: 'fantasy'
}

// - Створити об'єкт book з наступними полями :
// назва, (тип string)
// кількість сторінок (числовий тип),
// жанр (string)
// автори (тип - масив, кожен елемент масиву - це стрінга)
book = {
    name: 'Fight club',
    pages: 450,
    genre: 'thriller',
    authors: 'Jim Uls'
}
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не
// об'єкт, просто за допомоги конкатенації)
let firstName = 'Kirillo';
let middleName = 'Liston';
let lastName = 'Zubenko';
let person = `${firstName} ${middleName} ${lastName}`
console.log(person)
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в
// консоль
// let name = prompt('Your name:');
// let papa = prompt('Your papa name:');
// let age = prompt('Your age:');
// console.log(`name: ${name} papa name: ${papa} and age: ${age}`)
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
a = 100;
b = '100';
c = true;
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)

// - Створити масив об'єктів з назвою books з наступними полями - назва, кількість сторінок, жанр, автори. Вивести кожну
// книгу як окремий об'єкт
books = [
    {name: 'Book1', pages: 100, genre: 'fantasy', autor: 'Bobr'},
    {name: 'Book2', pages: 200, genre: 'thriller', autor: 'Oleg'},
    {name: 'Book3', pages: 300, genre: 'comedy', autor: 'Petro'},
    {name: 'Book4', pages: 400, genre: 'drama', autor: 'Anatoliu'}
];
console.log(books[0])
console.log(books[1])
console.log(books[2])
console.log(books[3])
