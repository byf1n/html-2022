// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html,
// которая имеет детальную информацию про объект на который кликнули
//
//
const mainDiv = document.getElementById('main');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        for (const user of users) {

            const userDiv = document.createElement('div');
            userDiv.setAttribute('class', 'user');

            userDiv.innerHTML = `
        <h2>id: ${user.id}</h2>
        <h2>name: ${user.name}</h2>`;

            const userBtn = document.createElement('button');
            userBtn.innerText = 'click';
            userDiv.appendChild(userBtn);

            userBtn.addEventListener('click', function () {
                location.href = "../user-details/user-details.html";
                localStorage.setItem('userId', JSON.stringify(user.id))

            })

            mainDiv.appendChild(userDiv);
        }

    });