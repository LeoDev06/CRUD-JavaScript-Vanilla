import modalHtml from './renderModal.html?raw'
import './renderModal.css';
import { User } from '../../models/User';
import { getUserById } from '../../useCases/getUserById';

let form, modal;
let loadedUser;

/**
 * 
 * @param {String | Number} id 
 */
export const showModal = async(id) => {
  modal?.classList.remove('hide-modal');
  if(!id) return;

  const user = await getUserById(id);
  setFormValues(user);
}

export const hideModal = () => {
  modal?.classList.add('hide-modal');
  //Todo: Reset del modal
  form?.reset();
}

/**
 * 
 * @param {User} user 
 */
const setFormValues = (user) => {
  form.querySelector('[name = "firstName"]').value = user.firstName;
  form.querySelector('[name = "lastName"]').value = user.lastName;
  form.querySelector('[name = "balance"]').value = user.balance;
  form.querySelector('[name = "isActive"]').checked = user.isActive;
  loadedUser = user;
}

/**
 * 
 * @param {HTMLDivElement} elementHTML 
 * @param {(UserLike) => Promise<void>} callback
 */
export const renderModal = (elementHTML, callBack) => {
  if(modal) return;

  modal = document.createElement('div');
  modal.innerHTML = modalHtml;
  modal.classList = 'modal-container hide-modal';

  form = modal.querySelector('form');


  modal.addEventListener('click', (event) =>{
    if (event.target.className === 'modal-container'){
      hideModal();
    }
  })

  form.addEventListener('submit', async(event) =>{
    event.preventDefault();

    const formData = new FormData(form);
    const userLike = {};

    for (const [key, value] of formData) {
      if(key === 'balance'){
        userLike[key] = +value; //conversion de string a numero
        continue; // has la siguiente iteración
      }

      if(key === 'isActive'){
        userLike[key] = ( value === 'on') ? true : false;
        continue;
      }

      userLike[key] = value;
    }
    //Todo: guardar usuario
    await callBack(userLike);
  })

  elementHTML.append(modal);
}