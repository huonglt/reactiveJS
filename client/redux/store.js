import { createStore, applyMiddleware } from 'redux';
import { run } from '@cycle/run';
import { createCycleMiddleware } from 'redux-cycles';
import { reducers } from './reducers.js';

const cycleMiddleware = createCycleMiddleware();

export const store = createStore(reducers, applyMiddleware(cycleMiddleware));

export const runCycleRx = (mainFn) => run(mainFn, { ACTION: cycleMiddleware.makeActionDriver()});
