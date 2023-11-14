import readlineSync from 'readline-sync';
import getRandomNumber from '../randomNumber.js';

const rule = 'What number is missing in the progression?';

const getProgression = () => {
  const lengthOfProgression = getRandomNumber(5, 15);
  const stepOfCount = getRandomNumber(1, 10);
  const firstNum = getRandomNumber(1, 10);
  const arrOfNums = [];
  arrOfNums.push(firstNum);
  for (let i = 1; i < lengthOfProgression; i += 1) {
    arrOfNums.push(arrOfNums[i - 1] + stepOfCount);
  }
  return arrOfNums;
};

const generateRound = () => {
  const progression = getProgression();
  const lastIndex = progression.length - 1;
  const missNum = getRandomNumber(0, lastIndex);
  const rightAnswer = progression[missNum];
  progression[missNum] = '..';
  const userAnswer = Number(readlineSync.question(`Question: ${progression.join(' ')} `));
  return [rightAnswer, userAnswer];
};

export { rule, generateRound };
