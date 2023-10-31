import readlineSync from 'readline-sync';
import getRandomNumber from '../src/randomNumber.js';

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

const brainProgression = () => {
  const progression = getProgression();
  const lastIndex = progression.length - 1;
  const missNum = getRandomNumber(0, lastIndex);
  const rightAnswer = progression[missNum];
  progression[missNum] = '..';
  const userAnswer = readlineSync.question(`Question: ${progression.join(' ')} `);
  return [rightAnswer, Number(userAnswer)];
};

export default brainProgression;
