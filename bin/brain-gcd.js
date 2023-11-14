#!/usr/bin/env node
import runEngine from '../src/index.js';
import { rule, generateRound } from '../src/games/brain-gcd.js';

runEngine(rule, generateRound);
