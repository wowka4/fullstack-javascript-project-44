#!/usr/bin/env node
/* eslint-disable import/extensions */
import startGame from '../src/index.js';
import brainEven from '../games/brain-even.js';

startGame(brainEven);
// в бин я кладу вызов уникальной логики игр, в геймс я реализую эту уникальную логику,
// а общие детали, приветствие и окончание игры я кладу в индекс
