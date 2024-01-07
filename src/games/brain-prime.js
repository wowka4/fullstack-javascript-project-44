import getRandomNumber from '../randomNumber.js';
import runEngine from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isNaturalNumber = (num) => {
  let count = 0;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) count += 1;
  }
  return count === 0;
};

const generateRound = () => {
  const number = getRandomNumber(1, 50);
  const question = `${number}`;
  const rightAnswer = isNaturalNumber(number) ? 'yes' : 'no';
  return [rightAnswer, question];
};

export default () => runEngine(rule, generateRound);
