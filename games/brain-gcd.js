import readlineSync from 'readline-sync';
import getRandomNumber from '../src/randomNumber.js';

const rule = 'Find the greatest common divisor of given numbers.';

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

const brainGcd = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  console.log(`Question: ${firstNumber} ${secondNumber}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = rightAnswer(firstNumber, secondNumber);
  return [correctAnswer, Number(answer)];
};

export { brainGcd, rule };
