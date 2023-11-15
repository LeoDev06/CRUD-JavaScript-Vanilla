import usersStore from '../../store/usersStore';
import { renderTable } from '../renderTable/renderTable';
import './renderButton.css'
/**
 * Funcion que muestra un boton en el DOM
 * @param {HTMLDivElement} elementHTML 
 */
export const renderButton = (elementHTML) =>{

  const nextButton = document.createElement('button');
  nextButton.innerText = ' Next >';

  const prevButton = document.createElement('button');
  prevButton.innerText = '< Prev ';

  const currentPageLabel = document.createElement('span');
  currentPageLabel.id = 'current-page';
  currentPageLabel.innerText = usersStore.getCurrentPage();


  elementHTML.append(prevButton, currentPageLabel, nextButton);

  nextButton.addEventListener('click', async() => {
    await usersStore.loadNextPage();
    currentPageLabel.innerText = usersStore.getCurrentPage();
    renderTable(elementHTML);
  });

  prevButton.addEventListener('click', async() => {
    await usersStore.loadPreviousPage();
    currentPageLabel.innerText = usersStore.getCurrentPage();
    renderTable(elementHTML);
  });

}