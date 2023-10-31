
import readlineSync from 'readline-sync';
import { getRandomNumber } from '../src/randomNumber.js';
import userName from '../src/userName.js';
const isNumberEven = (num, name, answer) => {
  if (num % 2 === 0 && answer !== 'yes') {
    return `${answer} is wrong answer ;(. Correct answer was yes.`;
  } else if (num % 2 !== 0 && answer !== 'no') {
    return `${answer} is wrong answer ;(. Correct answer was no.`;
  } else {
    return 'Correct!';
  }
};

const brainEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const randomNumber = getRandomNumber(1, 1000);
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const result = isNumberEven(randomNumber, userName, userAnswer);
  console.log(result);
  if (result !== 'Correct!') {
    console.log(`Let's try again, ${userName}!`);
    return 'exit';
  }
};

export default brainEven;
