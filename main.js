import { usersApp } from './src/usersApp';
import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>CRUD NOT FRAMEWORK</h1>
    <div class="card">

    </div>
  </div>
`
const elementHTML = document.querySelector('.card');

usersApp(elementHTML);

