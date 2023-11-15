import { showModal } from '../RenderModal/renderModal';
import './renderAddButton.css'
/**
 * Funcion que crea y muestra un boton flotante
 * @param {HTMLDivElement} elementHTML 
 */
export const renderAddButton = (elementHTML, ) => {
  const fabButton = document.createElement('button');
  fabButton.innerText = '➕';
  fabButton.className = 'fabButton';

  elementHTML.append(fabButton);

  fabButton.addEventListener('click', () => {
    showModal();
  });
}
