#!/usr/bin/env node
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import runBrainEven from './brain-even.js';
import runBrainCalc from './brain-calc.js';
import userName from '../src/cli.js';
import runBrainGcd from './brain-gcd.js';

// eslint-disable-next-line consistent-return
const switchGame = (game) => {
  if (game === 'brain-even') {
    return runBrainEven();
  } if (game === 'brain-calc') {
    return runBrainCalc();
  } if (game === 'brain-gcd') {
    return runBrainGcd();
  }
};

const startGame = () => {
  userName;
  console.log(`Hello, ${userName}!`);
  const game = readlineSync.prompt();
  for (let i = 1; i < 4; i += 1) {
    const output = switchGame(game);
    if (output === 'exit') {
      break;
    }
  }
};

export default startGame;
