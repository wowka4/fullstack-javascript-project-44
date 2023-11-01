#!/usr/bin/env node
import startGame from '../src/index.js';
import { brainEven, rule } from '../games/brain-even.js';

startGame(rule, brainEven);
