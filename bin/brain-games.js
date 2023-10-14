#!/usr/bin/env node
/* eslint-disable import/extensions */

// eslint-disable-next-line import/extensions
import userName from '../src/cli.js';
import isGameWin from './brain-even.js';

// eslint-disable-next-line no-unused-expressions
userName;
// eslint-disable-next-line no-console
console.log(`Hello, ${userName}!`);
// eslint-disable-next-line no-console
console.log('Answer "yes" if the number is even, otherwise answer "no".');
isGameWin();
