import { createStore, applyMiddleware } from 'redux';
import { run } from '@cycle/run';
import { createCycleMiddleware } from 'redux-cycles';
import { reducers } from './reducers.js';
import cycle from '../cycles/index.js';
import { makeHTTPDriver } from '@cycle/http';

/*
 * config the redux store with cycles redux-cycles for handling HTTP request side-effects
 */
export const configStore = () => {
  const cycleMiddleware = createCycleMiddleware();
  const { makeActionDriver } = cycleMiddleware;
  const store = createStore(reducers, applyMiddleware(cycleMiddleware));
  const drivers = { ACTION: makeActionDriver(), HTTP: makeHTTPDriver() };

  /*
   * cycle function take input source from drivers, and output to drivers sink
   * run to bind the cycle function with the drivers
   */
  run(cycle, drivers);
  return store;
}
