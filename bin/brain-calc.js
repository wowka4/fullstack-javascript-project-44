#!/usr/bin/env node
import { rule, generateRound } from '../src/games/brain-calc.js';
import runEngine from '../src/index.js';

runEngine(rule, generateRound);
