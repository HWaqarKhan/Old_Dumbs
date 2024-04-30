import {HttpApi} from "./http-async-await-api.js";

document.getElementById('button').addEventListener('click', btnClickEvent);
document.getElementById('save').addEventListener('click', saveBtnClickEvent);
document.getElementById('update').addEventListener('click', updateBtnClickEvent);
document.getElementById('delete').addEventListener('click', () => {
  HttpApi.delete('http://192.168.120.100/northwind-php/api/categories/13').then (resp => {
    console.log(resp);
  });
});
function btnClickEvent() {
   HttpApi.get('http://192.168.120.100/northwind-php/api/categories').then(resp => {
    console.log(JSON.parse(resp));
  });
}
function saveBtnClickEvent() {

  const data = {
    "categoryId": "13",
    "categoryName": "XYZ",
    "description": "Xyz Description"
  };
  HttpApi.post('http://192.168.120.100/northwind-php/api/categories', data).then(resp => {
    console.log(resp);
  });
}
function updateBtnClickEvent() {

  const data = {
    "categoryId": "13",
    "categoryName": "Office Equipment",
    "description": "Office Equipment Description"
  };
  HttpApi.put('http://192.168.120.100/northwind-php/api/categories', data).then (resp => {
    console.log(resp);
  });
}

