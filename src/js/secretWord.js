import { ALL_WORDS } from './constants.js';
const generateSecretWord = () => {
  return ALL_WORDS[Math.floor(Math.random() * ALL_WORDS.length)];
};

export { generateSecretWord };
