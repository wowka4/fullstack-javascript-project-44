/* eslint-disable consistent-return */
/* eslint-disable no-else-return */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import readlineSync from 'readline-sync';
import userName from '../src/cli.js';
import { getRandomNumber, getOperator } from '../src/randomNumber.js';

const resultOfCalc = (num1, num2, operator) => {
  if (operator === '+') {
    return num1 + num2;
  } else if (operator === '-') {
    return num1 - num2;
  } else {
    return num1 * num2;
  }
};

const calc = () => {
  console.log('What is the result of the expression?');
  const firstNum = getRandomNumber(1, 10);
  const secondNum = getRandomNumber(1, 10);
  const operand = getOperator();
  console.log(`Question: ${firstNum} ${operand} ${secondNum}`);
  const answer = readlineSync.question('Your answer: ');
  if (Number(answer) !== resultOfCalc(firstNum, secondNum, operand)) {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${firstNum * secondNum}.`);
    console.log(`Let's try again, ${userName}!`);
    return 'exit';
  } else {
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default calc;
