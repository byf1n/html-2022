// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому
// 3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
// let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
// if (friends.length >= 3) {
//     console.log('big arr');
// } else if (friends.length < 3) {
//     console.log(' too small arr');
// } else {
//     console.log('idk');
// }
//
//
// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між
//     двома іншими.
// let a = 2;
// let b = 1;
// let c = 3;
// if (a >= b && a <= c || (a <= b && a >= c)) {
//     console.log('average num - ' + a + ' - перше число');
// } else if (b >= a && b <= c || (b <= a && b >= c)) {
//     console.log('average num - ' + b);
// } else {
//     console.log('average num - ' + c);
// }


// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }
// let result = умова? значення1: значення2;
// let result = (a + b < 4) ? 'Malo' : 'Bagato'
// console.log(result);
//
// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором
// let numb = 0;
// let numIs = (numb < 0) ? '---' : (numb > 0) ? '++++' : '0000'
// console.log(numIs);
// //
//
//
//
// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з
//     коротким записом(тернаркою)
// let test = true;
// if (test) {
//     console.log("right");
// } else {
//     console.log('ban');
// }
//
// test ? console.log('right') : console.log('ban');


// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
//
//
// let ans = prompt('Яка «офіційна» назва JavaScript?');
// if (ans === 'ECMAScript') {
//     console.log('norm');
// } else {
//     console.log('too slab!!!');
// }
//
//
//
//
//     - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
// let flat = 1;
// if (flat >= 1 && flat <= 20) {
//     console.log('1');
// } else if (flat >= 21 && flat <= 48){
//     console.log('2');
// } else if (flat >=49 && flat<=90){
//     console.log('3');
// } else {
//     throw new Error('bannnaxnan!!')
// }
// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО,
// якщо змінна не рівна 10 - тоді НЕВІРНО
// let number = +prompt('enter 10:');
// if (number === 10){
//     console.log('genius');
// } else {
//     console.log('emmm????');
// }
// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
// let temp = 10;
// (temp >=10 && temp <=22)? console.log('lets go man'): console.log('online');
// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що
//     число не вірне ... .
// num = +prompt('enter 1,2..5 :');
// switch (num){
//     case 1:
//         console.log('logitech mouse');
//         break;
//     case 2:
//         console.log('hyper exexex mouse');
//         break;
//     case 3:
//         console.log('iphone 4');
//         break;
//     case 4:
//         console.log('very cool car');
//         break;
//     case 5:
//         console.log('headphones');
//         break;
//     default:
//         throw new Error('no')
// }
