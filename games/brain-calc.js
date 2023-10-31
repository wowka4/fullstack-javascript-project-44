import readlineSync from 'readline-sync';
import { getRandomNumber, getOperator } from '../src/randomNumber.js';
import userName from '../src/userName.js';

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
  const operator = getOperator();
  console.log(`Question: ${firstNum} ${operator} ${secondNum}`);
  const answer = readlineSync.question('Your answer: ');
  const rightAnswer = resultOfCalc(firstNum, secondNum, operator);
  if (Number(answer) !== rightAnswer) {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
    console.log(`Let's try again, ${userName}!`);
    return 'exit';
  }
  console.log('Correct!');
};

export default calc;
