/* eslint-disable no-else-return */
import readlineSync from 'readline-sync';

// eslint-disable-next-line import/extensions
import userName from '../src/cli.js';
/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
const isNumberEven = (num, name, answer) => {
  if (num % 2 === 0 && answer !== 'yes') {
    return `${answer} is wrong answer ;(. Correct answer was yes.`;
  } else if (num % 2 !== 0 && answer !== 'no') {
    return `${answer} is wrong answer ;(. Correct answer was no.`;
  } else {
    return 'Correct!';
  }
};

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const isGameWin = () => {
  for (let i = 1; i < 4; i += 1) {
    const randomNumber = getRandomNumber(1, 1000);
    // eslint-disable-next-line no-console
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    // eslint-disable-next-line no-unused-expressions
    const result = isNumberEven(randomNumber, userName, userAnswer);
    // eslint-disable-next-line no-unused-expressions
    console.log(result);
    if (result !== 'Correct!') {
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}`);
};

export default isGameWin;
