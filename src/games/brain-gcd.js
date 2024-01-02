import getRandomNumber from '../randomNumber.js';
import runEngine from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const findMinOperator = (num1, num2) => {
  if (num1 < num2) return num1;
  return num2;
};

const findMax = (arr) => arr.reduce((prev, item) => {
  if (prev < item) return item;
  return prev;
}, arr[0]);

const rightAnswer = (num1, num2) => {
  const arr = [];
  for (let i = 1; i <= findMinOperator(num1, num2) / 2; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) arr.push(i);
  }
  const max = findMax(arr);
  return max;
};

const generateRound = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const question = `Question: ${firstNumber} ${secondNumber}`;
  const correctAnswer = String(rightAnswer(firstNumber, secondNumber));
  return [correctAnswer, question];
};

export default () => runEngine(rule, generateRound);
