import { checkErrors } from './checkErrors.js';

const checkWin = word => {
  if (word === secretWord) {
    // MODAL HAS GANADO
    console.log('WIN');
    return true;
  }

  if (currentRow === NUMBER_OF_TRIES) {
    checkErrors('No te quedan más intentos');
    // MODAL HAS PERDIDO
  }
  return false;
};

export { checkWin };
