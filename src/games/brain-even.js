import getRandomNumber from '../randomNumber.js';
import runEngine from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = (num) => num % 2 === 0;

const generateRound = () => {
  const randomNumber = getRandomNumber(1, 1000);
  const question = `${randomNumber}`;
  const result = isEvenNumber(randomNumber) ? 'yes' : 'no';
  return [result, question];
};

export default () => runEngine(rule, generateRound);
