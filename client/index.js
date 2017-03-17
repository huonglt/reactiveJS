import { store, runCycle } from './redux/store.js';
import { PING_ACTION, PONG_ACTION } from './redux/actions.js';
import { main } from './cycles/main.js';

runCycle(main);
store.dispatch(PING_ACTION);
