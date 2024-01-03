import getRandomNumber from '../randomNumber.js';
import runEngine from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num1 === 0) return num2;
  return getGcd(num2 % num1, num1);
};

const generateRound = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = String(getGcd(firstNumber, secondNumber));
  return [correctAnswer, question];
};

export default () => runEngine(rule, generateRound);
