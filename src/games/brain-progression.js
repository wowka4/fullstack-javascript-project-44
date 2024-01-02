import getRandomNumber from '../randomNumber.js';
import runEngine from '../index.js';

const rule = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const generateRound = () => {
  const length = getRandomNumber(5, 15);
  const step = getRandomNumber(1, 10);
  const start = getRandomNumber(1, 10);
  const progression = getProgression(start, step, length);
  const lastIndex = progression.length - 1;
  const missNum = getRandomNumber(0, lastIndex);
  const rightAnswer = String(progression[missNum]);
  progression[missNum] = '..';
  const question = `Question: ${progression.join(' ')}`;
  return [rightAnswer, question];
};

export default () => runEngine(rule, generateRound);
