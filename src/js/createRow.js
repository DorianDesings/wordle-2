import { gameBoard } from './constants.js';
let currentRow = 0;

const paintLetter = (letter, position, className, delay) => {
  const element = gameBoard.children[currentRow].children[position];
  if (element.classList.contains('letter--correct')) return;
  element.classList.add(className, 'animated');
  element.style.animationDelay = `${delay}ms`;
  element.textContent = letter;
};

const checkRow = (word, secretWord) => {
  /* wordToCheck es un string vacío donde guardaremos las letras que no estén en la posición correcta */
  let wordToCheck = '';
  let className;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === secretWord[i]) {
      className = 'letter--correct';
      wordToCheck += '-';
      paintLetter(word[i], i, className);
    } else {
      wordToCheck += secretWord[i];
    }
    console.log(wordToCheck);
  }

  /* En este punto, wordToCheck tiene todas las letras de la palabra secreta que NO HE ACERTADO */
  for (let i = 0; i < wordToCheck.length; i++) {
    const letter = word[i];
    if (wordToCheck.includes(letter)) {
      className = 'letter--present';
      paintLetter(letter, i, className);
    } else {
      className = 'letter--incorrect';
      paintLetter(letter, i, className);
    }
  }
  currentRow++;
};

export { checkRow };
