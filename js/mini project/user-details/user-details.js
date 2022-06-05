// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
// которая имеет детальную информацию про текущий пост.

const userIdStr = localStorage.getItem('userId');
const userId = JSON.parse(userIdStr);
console.log(userId);

const mainDiv = document.getElementById('main');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(value => value.json())
    .then(user => {
        console.log(user);
        const {id, name, username, email, address, phone, website, company} = user;
        mainDiv.innerHTML = `
    <h3>id: ${id}</h3>
    <h3>name: ${name}</h3>
    <h3>username: ${username}</h3>
    <h3>email: ${email}</h3>
    <h3 >address: <button class="addressBtn"> close </button> </h3> 
    <div class="addressDiv">
        <h3>street: ${address.street}</h3>
        <h3>suite: ${address.suite}</h3>
        <h3>city: ${address.city}</h3>
        <h3>zipcode: ${address.zipcode}</h3>
        <h3>geo: </h3>
        <h3>lat: ${address.geo.lat}</h3>
        <h3>lng: ${address.geo.lng}</h3>
    </div>
    <h3>phone: ${phone}</h3>
    <h3>website: ${website}</h3>
    <h3>company: </h3>
    <h3>name: ${company.name}</h3>
    <h3>catchPhrase: ${company.catchPhrase}</h3>
    <h3>bs: ${company.bs}</h3>   
    
    `;

        const addressBtn = document.getElementsByClassName('addressBtn')[0];

        addressBtn.onclick = () => {
            const addressDiv = document.getElementsByClassName('addressDiv')[0];

            addressDiv.classList.toggle('hide');

            if (addressDiv.classList.contains('hide')) {
                addressBtn.innerText = 'open';
            } else {
                addressBtn.innerText = 'close';
            }
        }

        const postsBtn = document.createElement('button');
        postsBtn.innerText = 'posts of this user';
        postsBtn.classList.add('postsBtn')
        mainDiv.append(postsBtn);

        postsBtn.addEventListener('click', function () {
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(value => value.json())
            .then(posts => {
                const divPosts = document.createElement('div');
                divPosts.classList.add('postsDiv')
                console.log(posts);
                for (const post of posts) {
                    const divPost = document.createElement('div');
                    divPost.classList.add('divPost')

                    const pPost = document.createElement('p');
                    pPost.innerText ='title:  ' +  post.title;
                    divPost.append(pPost);

                    const btnPost = document.createElement('button');
                    btnPost.innerText = 'info about this post';
                    divPost.appendChild(btnPost);

                    divPosts.appendChild(divPost);

                    btnPost.onclick = () => {
                        location.href = '../post-details/post-details.html';
                        localStorage.setItem('postId',JSON.stringify(post.id));
                        localStorage.setItem('post',JSON.stringify(post));
                    }

                    mainDiv.append(divPosts);
                    postsBtn.disabled = true;

                }
            });

        })


    });