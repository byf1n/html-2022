// const arr = [1, 5, 'hello world!', {id: 1, name: 'bobr'}, {id: 2, name: 'kirill'}, [12, 42]];
// /// FIND
// let findResult = arr.find(elem => typeof elem === 'string');
// console.log(findResult);
// /// FIND INDEX
// let findIndexResult = arr.findIndex(elem => elem.id);
// console.log(findIndexResult);
// /// INCLUDES
// let includes = arr.includes('hello world!');
// console.log(includes);
// /// MAP
// let map = arr.map(elem => elem.toString());
// console.log(map);
// //// FILTER
// let filterArr = arr.filter(elem => typeof elem === 'number')
// console.log(filterArr   );
// /// splice
// let mass = [1,2,3,4,5]
// arr.splice(2,3,mass);
// console.log(arr);
// console.log(mass);

let user = {
    name: 'bobr',
    age: 21,
    car : true,
    password: '12335',
    sayHelloToser: function () {
        console.log(`hello ${this.name}, ur age is ${this.age}`);
    }

}
/// PASSWORD
user.sayHelloToser()
const {password: userPassword, ...safetyUser} = user;
console.log(user);
console.log('user password: ' + userPassword + '    hohoho noyyyyyyyyyyyyyyyy!!!!!!!!!');
console.log(safetyUser);