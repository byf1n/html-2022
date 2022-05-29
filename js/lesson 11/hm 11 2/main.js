// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

// const [name,age] = document.forms.form1;
// const btn = document.getElementById('btn');
// const key = 'key';
//
// const save = (name,age) => {
//   obj = {
//       name,
//       age
//   }
//   localStorage.setItem(key,JSON.stringify(obj));
// }
//
// btn.addEventListener('click',function (){
//     save(name.value,age.value);
// })

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

// const [model, type, volume] = document.forms.formArr;
// const btnArr = document.getElementById('btnArr');
//
// const key = 'key';
//
// const saveArr = (model,type,volume) => {
//     const store = JSON.parse(localStorage.getItem(key)) || [];
//     store.push({model,type,volume});
//     localStorage.setItem(key,JSON.stringify(store))
// }
//
// btnArr.addEventListener('click',function (){
//     saveArr(model.value,type.value,volume.value);
// })

