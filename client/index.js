import { store, runCycleRx } from './redux/store.js';
import { PING_ACTION, PONG_ACTION } from './redux/actions.js';
import { main } from './cycles/main.js';

runCycleRx(main);
store.dispatch(PING_ACTION);
