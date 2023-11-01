#!/usr/bin/env node
import startGame from '../src/index.js';
import { brainPrime, rule } from '../games/brain-prime.js';

startGame(rule, brainPrime);
