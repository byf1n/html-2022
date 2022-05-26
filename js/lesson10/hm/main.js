// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал
// элемент с id="text".

const btn = document.getElementById('btn');

const  divText = document.getElementById('text');

btn.style.background = 'cornflowerblue';
btn.style.width = '150px';
btn.style.height = '55px';
btn.style.color = 'gold';
btn.style.textAlign = 'yellow';
btn.style.borderRadius = '10px';
btn.style.border = '0px'


btn.onclick = function (){
    divText.classList.toggle('hidden')
    console.log(divText);
}

// btn.onclick = function (){
//     divText.style.visibility = 'hidden';
// }

// btn.onclick = function (){
//     divText.remove()
// }

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
//     інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача


// let input = document.createElement('input');
// input.type = 'number';
//
// let btn = document.createElement('button');
// btn.innerText = 'check';
//
// document.body.append(input,btn);
//
// btn.addEventListener('click', function (){
//     if (input.value === ''){
//         alert('empty');
//     } else if (input.value <18){
//         alert('nine kinder')
//     } else {
//         alert('hello')
//     }
// })


// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль
// інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let btn = document.getElementById('btn');
// btn.addEventListener('click',function (){
//
//     console.log(document.forms.formOne.inputOne.value);
//     console.log(document.forms.formOne.inputTwo.value);
//     console.log(document.forms.formTwo.inputThree.value);
//     console.log(document.forms.formTwo.inputFour.value);
//
//     document.forms.formOne.inputOne.value = '';
//     document.forms.formOne.inputTwo.value = '';
//     document.forms.formTwo.inputThree.value = '';
//     document.forms.formTwo.inputFour.value = '';
// })



// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)


// let form = document.createElement('form');
// form.setAttribute('name','table')
//
// let lines = document.createElement('input');
// lines.type = 'number';
// let cells = document.createElement('input');
// cells.type = 'number';
// let value = document.createElement('input');
// value.type = 'text';
//
// let btn = document.createElement('button');
// btn.innerText = 'click'
//
//
// form.append(lines,cells,value)
//
// document.body.append(form,btn);
//
// btn.addEventListener('click',function (){
//
//     let tr = lines.value;
//     let td = cells.value;
//     let text = value.value;
//
//     function createTable (tr,td,text){
//         let table = document.createElement('table');
//         document.body.append(table);
//
//         for (let i = 0; i < tr; i++) {
//             let tr = document.createElement('tr');
//             table.append(tr);
//
//             for (let j = 0; j < td; j++) {
//                 let td = document.createElement('td');
//                 td.innerText = text;
//                 td.style.border = '1px solid black';
//
//                 tr.append(td);
//             }
//         }
//     }
//     createTable(tr,td,text);
//
//
// })

