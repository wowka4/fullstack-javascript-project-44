/* eslint-disable no-console */
/* eslint-disable no-else-return */
/* eslint-disable import/extensions */
// eslint-disable-next-line import/extensions
import readlineSync from 'readline-sync';
import { getRandomNumber } from '../src/randomNumber.js';
import userName from '../src/userName.js';

const findMinOperator = (num1, num2) => {
  if (num1 < num2) {
    return num1;
  }
  return num2;
};
const findMax = (arr) => {
  let max = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};
const rightAnswer = (num1, num2) => {
  const arr = [];
  for (let i = 1; i <= findMinOperator(num1, num2); i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      arr.push(i);
    }
  }
  const max = findMax(arr);
  return max;
};

// eslint-disable-next-line consistent-return
const brainGcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  console.log(`Question: ${firstNumber} ${secondNumber}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = rightAnswer(firstNumber, secondNumber);
  if (correctAnswer !== Number(answer)) {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
    console.log(`Let's try again, ${userName}!`);
    return 'exit';
  } else {
    console.log('Correct');
  }
};

export default brainGcd;
