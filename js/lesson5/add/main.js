// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let min = (a, b, c) => {
//     if (a <= b && a <= c) {
//         return a;
//     } else if (b <= a && b <= c){
//         return b
//     } else {
//         return c;
//     }
//         }
// console.log(min(10, 20, -3));
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
    // let max = (a, b, c) => {
    //     if (a >= b && a >= c) {
    //         return a;
    //     } else if (b >= a && b >= c) {
    //         return b;
    //     } else {
    //         return c;
    //     }
    // }
    // console.log(max(10, 200, 30));
// - створити функцію яка повертає найбільше число з масиву
    // let maxFarr = (...arr) => {
    //     let max = arr[0]
    //     for (const num of arr) {
    //         if (num > max){
    //             max = num;
    //         }
    //     }
    //     return max;
    // }
    // console.log(maxFarr(1, 2, 300, 4, -10, 100));
// - створити функцію яка повертає найменьше число з масиву
    // let minFarr = (...arr) => {
    //     let min = arr[0];
    //     for (const num of arr) {
    //         if (num < min){
    //             min = num;
    //         }
    //     }
    //     return min;
    // }
    // console.log(minFarr(1, 2, -10, 100));
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
    // let sumFarr = (arr) => {
    //     let sum = 0;
    //     for (const num of arr) {
    //         sum = sum + num;
    //     }
    //     return sum;
    // }
    // console.log('sum: ' + sumFarr([1, 2, 3, 4, 5, 6]));
// - Дано натуральное число n. Выведите все числа от 1 до n.
    // let n = 10
    // let before = (n) => {
    //     for (let i = 1; i < n; i++) {
    //         console.log(i);
    //     }
    //     console.log('last: ' + n);
    // }
    // before(n)
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или
// в порядке убывания в противном случае.
//
//
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не
// нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]