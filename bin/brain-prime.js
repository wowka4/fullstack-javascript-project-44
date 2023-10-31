#!/usr/bin/env node
import startGame from '../src/index.js';
import brainPrime from '../games/brain-prime.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
startGame(rules, brainPrime);
