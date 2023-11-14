import readlineSync from 'readline-sync';
import getRandomNumber from '../randomNumber.js';

const rule = 'What is the result of the expression?';

const getOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomNumber(0, 2);
  return operators[randomIndex];
};

const calculation = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Invalid operator - ${operator}`);
  }
};

const generateRound = () => {
  const firstNum = getRandomNumber(1, 10);
  const secondNum = getRandomNumber(1, 10);
  const operator = getOperator();
  console.log(`Question: ${firstNum} ${operator} ${secondNum}`);
  const answer = Number(readlineSync.question('Your answer: '));
  const rightAnswer = calculation(firstNum, secondNum, operator);
  return [rightAnswer, answer];
};

export { rule, generateRound };
