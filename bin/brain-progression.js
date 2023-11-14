#!/usr/bin/env node
import runEngine from '../src/index.js';
import { rule, generateRound } from '../src/games/brain-progression.js';

runEngine(rule, generateRound);
