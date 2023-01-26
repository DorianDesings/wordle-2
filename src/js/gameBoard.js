const NUMBER_OF_TRIES = 5;
const gameBoard = document.getElementById('game-board');

const createGameBoard = secretWord => {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < NUMBER_OF_TRIES; i++) {
    const newRow = document.createElement('div');
    newRow.classList.add('game-board__row');
    for (let j = 0; j < secretWord.length; j++) {
      const newLetterContainer = document.createElement('span');
      newLetterContainer.classList.add('letter');
      newRow.append(newLetterContainer);
    }
    fragment.appendChild(newRow);
  }

  gameBoard.append(fragment);
};

export { createGameBoard };
