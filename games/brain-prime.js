import readlineSync from 'readline-sync';
import { getRandomNumber } from '../src/randomNumber.js';
import userName from '../src/userName.js';

const isNaturalNumber = (num) => {
  let count = 0;
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      count += 1;
    }
  }
  return count === 0;
};

const brainPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const number = getRandomNumber(1, 1000);
  console.log(`Question: ${number} `);
  const userAnswer = readlineSync.question('Your answer: ');
  let rightAnswer = 'no';
  if (isNaturalNumber(number) === true) {
    rightAnswer = 'yes';
  }
  if (userAnswer !== rightAnswer) {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
    console.log(`Let's try again, ${userName}!`);
    return 'exit';
  } else {
    console.log('Correct!');
  }
};

export default brainPrime;
