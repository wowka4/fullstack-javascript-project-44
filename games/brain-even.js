import readlineSync from 'readline-sync';
import getRandomNumber from '../src/randomNumber.js';

const isNumberEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const brainEven = () => {
  const randomNumber = getRandomNumber(1, 1000);
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const result = isNumberEven(randomNumber);
  return [result, userAnswer];
};

export default brainEven;
