// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб
// отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(posts => {
//         const divWrap = document.createElement('div');
//         divWrap.setAttribute('class','wrap');
//         document.body.append(divWrap)
//
//         for (const post of posts) {
//             const divInner = document.createElement('div');
//             divInner.setAttribute('class','inner');
//             divInner.innerHTML = `
//                 <h2>USER id: ${post.userId}</h2>
//                 <h2>ID: ${post.id}</h2>
//                 <h2>TITLE: ${post.title}</h2>
//                 <h2>BODY: ${post.body}</h2>
//             `
//             divWrap.append(divInner);
//
//         }
//     })

//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

// fetch('https://jsonplaceholder.typicode.com/comments')
// .then(value => value.json())
// .then(comments => {
//     const divWrap = document.createElement('div');
//     divWrap.setAttribute('class','wrap');
//     document.body.append(divWrap)
//
//     for (const comment of comments) {
//         const divInner = document.createElement('div');
//         divInner.setAttribute('class','inner');
//         divWrap.append(divInner);
//
//         for (const commentKey in comment) {
//             const divElement = document.createElement('h2');
//             divElement.innerText = `${commentKey}: ${comment[commentKey]}`;
//             divInner.append(divElement)
//         }
//
//     }
// })



// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
//
//
fetch('https://jsonplaceholder.typicode.com/posts')
.then(value => value.json())
.then(posts => {
    const divWrap = document.createElement('div');
    document.body.append(divWrap);
    for (const post of posts) {
        const divInner = document.createElement('div');
        divWrap.append(divInner);
        const {userId,id,title,body} = post;
        divInner.innerHTML = `
        <h2>id: ${id}</h2>
        <h2>userId: ${userId}</h2>
        <h2>title: ${title}</h2>
        <h2>body: ${body}</h2>
        `;
        const btn = document.createElement('button');
        btn.innerText = 'click';
        divInner.append(btn);

        btn.onclick = () => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(value => value.json())
            .then(comments => {
                const wrapComments = document.createElement('div');
                divInner.append(wrapComments);
                for (const comment of comments) {
                    const divComments = document.createElement('div');
                    divComments.innerText  = comment.postId + ' ' + comment.id + ' ' +comment.name + ' ' + comment.email +
                        '' + comment.body;
                    wrapComments.append(divComments);
                    btn.disabled = true;
                    // divComments.classList.toggle('hidden'); - not working???

                }
            });
        }

    }
});