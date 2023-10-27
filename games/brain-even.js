/* eslint-disable consistent-return */
/* eslint-disable import/extensions */
/* eslint-disable no-else-return */
import readlineSync from 'readline-sync';
// eslint-disable-next-line import/extensions
import { getRandomNumber } from '../src/randomNumber.js';
import userName from '../src/userName.js';
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

const brainEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const randomNumber = getRandomNumber(1, 1000);
  // eslint-disable-next-line no-console
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  // eslint-disable-next-line no-unused-expressions
  const result = isNumberEven(randomNumber, userName, userAnswer);
  // eslint-disable-next-line no-unused-expressions
  console.log(result);
  if (result !== 'Correct!') {
    console.log(`Let's try again, ${userName}!`);
    return 'exit';
  }
};

export default brainEven;
