// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации -
// https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

const postStr = localStorage.getItem('post');
const post = JSON.parse(postStr);
console.log(post);

const mainDiv = document.getElementById('main');
mainDiv.innerHTML = `
    <h2>id: ${post.id}</h2>
    <h2>userId: ${post.userId}</h2>
    <h2>title: ${post.title}</h2>
    <h2>body: ${post.body}</h2>
`;

const commentsBtn = document.createElement('button');
commentsBtn.innerText = 'comments';
mainDiv.appendChild(commentsBtn);

commentsBtn.onclick = () => {
    const divComments = document.getElementById('comments');

    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(comments => {
        for (const comment of comments) {
            const divComment = document.createElement('div');
            divComment.classList.add('comment')
            const {id,postId,name,email,body} = comment;
            divComment.innerHTML = `
            <h3>postId: ${postId}</h3>
            <h3>id: ${id}</h3>
            <h3>name: ${name}</h3>
            <h3>email: ${email}</h3>
            <h3>body: ${body}</h3>
            <h3>----------------------</h3>
            
            `;
            divComments.appendChild(divComment);
        }
        commentsBtn.disabled = true;
    });
}