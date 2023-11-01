#!/usr/bin/env node
import startGame from '../src/index.js';
import { brainGcd, rule } from '../games/brain-gcd.js';

startGame(rule, brainGcd);
