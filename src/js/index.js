// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { checkRow } from './createRow';
import { createGameBoard } from './gameBoard.js';
import { generateSecretWord } from './secretWord.js';
import { checkErrors } from './checkErrors.js';
const userWordForm = document.getElementById('user-word-form');

const secretWord = generateSecretWord();
console.log(secretWord);

createGameBoard(secretWord);

userWordForm.addEventListener('submit', e => {
  e.preventDefault();
  const userWord = e.target.word.value;
  if (userWord.length !== 5) {
    checkErrors('La palabra debe tener 5 letras');
    return;
  }

  checkRow(userWord, secretWord);
});
