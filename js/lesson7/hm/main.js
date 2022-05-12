// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 6 об'єктами new User(....)

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let users = [];
//
// let user1 = new User(1, 'bob', 'ferdinando', 'q@gmail.com', '0930841287');
// let user2 = new User(2, 'bober', 'bober', 'ew@gmail.com', '095223532552');
// let user3 = new User(3, 'peter', 'popkorn', 'gdf@gmail.com', '09323541287');
// let user4 = new User(4, 'max', 'italiex', 'jhg@gmail.com', '0523530841287');
// let user5 = new User(5, 'kopik', 'mamasito', 'lorem@gmail.com', '0355230841287');
// let user6 = new User(6, 'megamozg', 'manchik', 'ipsum@gmail.com', '03244242342');
//
// users.push(user1, user2, user3, user4, user5, user6);
// console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filterUsers = users.filter(value => value.id % 2 === 0);
// console.log(filterUsers);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let sortUsers = users.sort((a, b) => a.id - b.id);
// console.log(sortUsers);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком
// товарів)
// створити пустий масив, наповнити його 7 об'єктами Client

// class Client {
//
//     constructor(id, name, surname, email, phone, order) {
//
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//
//     }
// }
//
// let clients = [];
//
// let client1 = new Client(1, 'bobi', 'brawn', 'qwert@gmail.com', '0987654321',
//     ['headphones', 'pc','keyboard','mouse']);
// let client2 = new Client(2, 'max', 'mili', 'qlorem@gmail.com', '0987654321',
//     ['headphones', 'keyboard','mouse']);
// let client3 = new Client(3, 'dima', 'stoen', 'asdhdg@gmail.com', '0987654321',
//     ['headphones', 'pc',]);
// let client4 = new Client(4, 'mikita', 'qwerty', 'frhdh@gmail.com', '0987654321',
//     ['headphones']);
// let client5 = new Client(5, 'georgiu', 'streyh', 'sdgsg@gmail.com', '0987654321',
//     ['headphones', 'pc','keyboard','mouse','holodilnik']);
// let client6 = new Client(6, 'timur', 'kember', 'sgss@gmail.com', '0987654321',
//     ['headphones', 'pc','keyboard','mouse','maslo','water']);
// let client7 = new Client(7, 'ben', 'betcher', 'jfrfj@gmail.com', '0987654321',
//     ['headphones', 'pc','keyboard','mouse']);
//
// clients.push(client1,client2,client3,client4,client5,client6,client7);
//
// console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню.
// (sort)

// let sortClients = clients.sort((a,b) => a.order.length - b.order.length)
// console.log(sortClients);

//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, producer, year, maxSpeed, volume) {
//     this.model = model;
//     this.producer = producer;
//     this.yaer = year;
//     this.maxSpeed = maxSpeed;
//     this.volume = volume;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} km на годину`);
//     }
//
//     this.info = function () {
//
//         for (const item in this) {
//             console.log(`${item} - ${this[item]}`);
//         }
//
//     }
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//         console.log(this.maxSpeed);
//     }
//
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//         console.log(this.year);
//     }
//
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
//
// }
//
// let car1 = new Car('c', 'bmw', 2022, 440, 100);
// console.log(car1);

// car1.drive();
//
// car1.info();
//
// car1.increaseMaxSpeed(100);
//
// car1.changeYear(2030)
//
// car1.addDriver('bobi');
//
// console.log(car1);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна
// швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//
//     constructor(model, producer, year, maxSpeed, volume) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.volume = volume;
//
//         this.drive = function () {
//             console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//         }
//
//         this.info = function () {
//             for (const item in this) {
//                 console.log(`${item} - ${this[item]}`);
//             }
//         }
//
//         this.increaseMaxSpeed = function (newSpeed){
//             this.maxSpeed += newSpeed;
//             console.log(this.maxSpeed);
//         }
//
//         this.changeYear = function (newValue){
//             this.year = newValue;
//             console.log(newValue);
//         }
//
//         this.addDriver = function (driver){
//             this.driver = driver;
//             console.log(this.driver);
//         }
//     }
// }

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// class Popelushka {
//     constructor(name, age, footsize) {
//         this.name = name;
//         this.age = age;
//         this.footsize = footsize;
//     }
// }
// let popelushki = [];
//
// let pop1 = new Popelushka('oleg',24,39);
// let pop2 = new Popelushka('natasha',25,40);
// let pop3 = new Popelushka('bobo',26,41);
// let pop4 = new Popelushka('enot',27,42);
// let pop5 = new Popelushka('petya',28,43);
// let pop6 = new Popelushka('victor',29,44);
// let pop7 = new Popelushka('bot',30,45);
// let pop8 = new Popelushka('biden',31,46);
// let pop9 = new Popelushka('sun',32,47);
// let pop10 = new Popelushka('flou',44,48);
//
// popelushki.push(pop1,pop2,pop3,pop4,pop5,pop6,pop7,pop8,pop9,pop10);
//
// console.log(popelushki);
//
// class Prince{
//     constructor(name, age, findSize) {
//         this.name = name;
//         this.age = age;
//         this.findSize = findSize;
//     }
// }
//
// let prince = new Prince('bobr',39,40);
//
// console.log(prince);
//
// let find = (popelushki,prince) => {
//     for (const item of popelushki) {
//         if (item.footsize === prince.findSize){
//             return `find popel is: ${item.name}` ;
//         }
//     }
// }
// console.log(find(popelushki, prince));
//
// let findPopel = popelushki.find(value => value.footsize === prince.findSize);
// console.log(findPopel);
