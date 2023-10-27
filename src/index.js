/* eslint-disable no-else-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
import userName from './userName.js';

const startGame = (game) => {
  userName;
  for (let i = 0; i < 3; i += 1) {
    const result = game();
    if (result === 'exit') {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
