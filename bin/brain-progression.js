#!/usr/bin/env node
import startGame from '../src/index.js';
import brainProgression from '../games/brain-progression.js';

const rules = 'What number is missing in the progression?';
startGame(rules, brainProgression);
