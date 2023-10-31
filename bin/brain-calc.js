#!/usr/bin/env node
import calc from '../games/brain-calc.js';
import startGame from '../src/index.js';

const rules = 'What is the result of the expression?';

startGame(rules, calc);
