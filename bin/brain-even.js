#!/usr/bin/env node
import startGame from '../src/index.js';
import brainEven from '../games/brain-even.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

startGame(rules, brainEven);
