/* eslint-disable consistent-return */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable no-else-return */
/* eslint-disable indent */
import readlineSync from 'readline-sync';
import { getRandomNumber } from '../src/randomNumber.js';
import userName from '../src/userName.js';

const isNaturalNumber = (num) => {
  let count = 1;
    for (let i = 2; i <= num / 2; i += 1) {
      if (num % i === 0) {
        count += 1;
      }
    }
    return count < 2;
  };

  const brainPrime = () => {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    const number = getRandomNumber(1, 1000);
    console.log(`Question: ${number} `);
    const userAnswer = readlineSync.question('Your answer: ');
    let rightAnswer;
    if (isNaturalNumber(number) === 'yes') {
      rightAnswer = 'yes';
    } else {
        rightAnswer = 'no';
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
