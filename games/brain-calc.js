/* eslint-disable no-else-return */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import readlineSync from 'readline-sync';
import userName from '../src/cli.js';
import getRandomNumber from '../src/randomNumber.js';

// const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const calc = () => {
  console.log('What is the result of the expression?');
  const firstNum = getRandomNumber(1, 10);
  const secondNum = getRandomNumber(1, 10);
  console.log(`Question: ${firstNum} * ${secondNum}`);
  const answer = readlineSync.question('Your answer: ');
  if (Number(answer) !== firstNum * secondNum) {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${firstNum * secondNum}.`);
    console.log(`Let's try again, ${userName}!`);
    return;
  } else {
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default calc;
