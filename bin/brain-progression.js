#!/usr/bin/env node
import startGame from '../src/index.js';
import { brainProgression, rule } from '../games/brain-progression.js';

startGame(rule, brainProgression);
