import readlineSync from 'readline-sync';
import getRandomNumber from '../src/randomNumber.js';

const rule = 'What is the result of the expression?';

const getOperator = () => {
  const operators = ['+', '-', '*'];
  const number = getRandomNumber(0, 2);
  return operators[number];
};

const resultOfCalc = (num1, num2, operator) => {
  if (operator === '+') {
    return num1 + num2;
  }
  if (operator === '-') {
    return num1 - num2;
  }
  return num1 * num2;
};

const calc = () => {
  const firstNum = getRandomNumber(1, 10);
  const secondNum = getRandomNumber(1, 10);
  const operator = getOperator();
  console.log(`Question: ${firstNum} ${operator} ${secondNum}`);
  const answer = readlineSync.question('Your answer: ');
  const rightAnswer = resultOfCalc(firstNum, secondNum, operator);
  return [rightAnswer, Number(answer)];
};

export { calc, rule };
