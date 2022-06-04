// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(value => value.json())
// .then(users => {
//     const div = 'div';
//
//     const divWrap = document.createElement(div);
//     divWrap.setAttribute('class','wrap');
//     document.body.append(divWrap);
//     for (const user of users) {
//         const divUser = document.createElement(div);
//
//         divUser.innerHTML = `
//         <h2>id: ${user.id}</h2>
//         <h2>name: ${user.name}</h2>
//         <h2>surname : ${user.surname}</h2>
//         <h2>email: ${user.email}</h2>
//         <h2>address: </h2>
//         <p>street: ${user.address.street}</p>
//         <p>city: ${user.address.city}</p>
//         <p>zipcode: ${user.address.zipcode}</p>
//         <h2>geo: </h2>
//         <p>lat: ${user.address.geo.lat}</p>
//         <p>lng: ${user.address.geo.lng}</p>
// `;
//
//         const userBtn = document.createElement('button');
//         userBtn.innerText = 'click';
//         divUser.append(userBtn);
//
//         userBtn.onclick = () => {
//             fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
//             .then(value => value.json())
//             .then(posts => {
//                 const wrapPosts = document.createElement(div);
//                 divUser.append(wrapPosts);
//                 for (const post of posts) {
//                     const divPost = document.createElement(div);
//                     const {userId,id,title,body} = post;
//                     divPost.innerText = `
//                     usId: ${userId}
//                     id: ${id}
//                     title: ${title}
//                     body: ${body}
//                     `;
//
//                     const postBtn = document.createElement('button');
//                     postBtn.innerText = 'click';
//                     divPost.append(postBtn);
//
//                     postBtn.addEventListener('click', function (){
//                         fetch(`https://jsonplaceholder.typicode.com/users/${id}/comments`)
//                         .then(value => value.json())
//                         .then(comments => {
//                             const wrapComments = document.createElement(div);
//                             divPost.append(wrapComments);
//                             for (const comment of comments) {
//                                 if (comment.id < 25){
//                                     const divComments = document.createElement(div);
//                                     const {id,name,email,body} = comment;
//                                     divComments.innerText = `
//                                     id: ${id}
//                                     name: ${name}
//                                     email: ${email}
//                                     body: ${body}
//                                 `;
//                                     wrapComments.append(divComments);
//                                     postBtn.disabled = true;
//                                 }
//
//                             }
//                         });
//                     })
//
//                     wrapPosts.append(divPost);
//                     userBtn.disabled = true;
//                 }
//             });
//         }
//
//         divWrap.append(divUser);
//
//
//     }
// });


//
//
// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар