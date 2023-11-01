#!/usr/bin/env node
import { calc, rule } from '../games/brain-calc.js';
import startGame from '../src/index.js';

startGame(rule, calc);
