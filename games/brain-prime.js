import readlineSync from 'readline-sync';
import getRandomNumber from '../src/randomNumber.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isNaturalNumber = (num) => {
  let count = 0;
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      count += 1;
    }
  }
  if (count === 0) {
    return 'yes';
  }
  return 'no';
};

const brainPrime = () => {
  const number = getRandomNumber(1, 10);
  console.log(`Question: ${number} `);
  const userAnswer = readlineSync.question('Your answer: ');
  const rightAnswer = isNaturalNumber(number);
  return [rightAnswer, userAnswer];
};

export { brainPrime, rule };
