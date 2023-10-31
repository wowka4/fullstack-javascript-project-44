#!/usr/bin/env node
import startGame from '../src/index.js';
import brainGcd from '../games/brain-gcd.js';

const rules = 'Find the greatest common divisor of given numbers.';
startGame(rules, brainGcd);
