/* eslint-disable no-else-return */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import { getRandomNumber } from '../src/randomNumber.js';
import userName from '../src/userName.js';

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

// eslint-disable-next-line consistent-return
const brainProgression = () => {
  const progression = getProgression();
  const lastIndex = progression.length - 1;
  const missNum = getRandomNumber(0, lastIndex);
  const rightAnswer = progression[missNum];
  progression[missNum] = '..';
  console.log('What number is missing in the progression?');
  const userAnswer = readlineSync.question(`Question: ${progression.join(' ')} `);
  if (Number(userAnswer) !== rightAnswer) {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
    console.log(`Let's try again, ${userName}!`);
    return 'exit';
  } else {
    console.log('Correct!');
  }
};

export default brainProgression;
