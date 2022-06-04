
function breakfast(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money > 10) {
                money -= 10;
                resolve(money);
                // console.log('breakfast done');
            } else {
                reject('not enough money');
            }
        }, 500)

    });
}

function goWork(money) {
    return new Promise(resolve => {
        setTimeout(() => {
            money += 300;
            resolve(money);
            // console.log('work done');
        }, 2000);
    })
}

function goCinema(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money < 200) {
                reject('kaput no money !!!!!!');
            } else {
                money -= 100;
                resolve(money);
                // console.log('cinema done!!!!!');
            }
        }, 1000)

    })
}

function goRestaurant(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money < 200) {
                reject('no res')
            } else {
                money -= 200;
                resolve(money);
                // console.log('res done');
            }
        }, 1000)

    })
}

// breakfast(20)
//     .then((money) => {
//         console.log('you have ' + money + ' $');
//         console.log('--------------');
//         return goWork(money);
//     })
//     .then(moneyAfterWork => {
//         console.log('here you go', moneyAfterWork + ' $');
//         console.log('--------------');
//
//         return goCinema(moneyAfterWork);
//     })
//     .then(moneyAfterCinema => {
//         console.log('nice movie you have: ' + moneyAfterCinema + ' $');
//         console.log('--------------');
//
//         return goRestaurant(moneyAfterCinema);
//     })
//     .then(moneyAfterAll => {
//         console.log('you have ' + moneyAfterAll + ' $ left');
//         console.log('!!!!!!!!! end !!!!!!!!!');
//     })
//     .catch(error => {
//         console.log(error);
//     })

// const def = (msg,money) => {
//     console.log(msg);
//     console.log('you have: ' + money + ' $');
//     console.log('-----------');
// }
//
// async function start(money) {
//     try {
//         const moneyAftBreakfast = await breakfast(money);
//         def('breakfast done !!!!!!',moneyAftBreakfast);
//
//         const moneyAftWork = await goWork(moneyAftBreakfast);
//         def('work done !!!!',moneyAftWork);
//
//         const moneyAftCinema = await goCinema(moneyAftWork);
//         def('cinema done !!!!!!',moneyAftCinema);
//
//         const moneyAftRes = await goRestaurant(moneyAftCinema);
//         def('res done !!!!!!!',moneyAftRes)
//     } catch (error) {
//         console.log('OOOOps ' + error);
//     }
// }
//
// start(11);