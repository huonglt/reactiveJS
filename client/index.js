import { configStore } from './redux/store.js';
import { PING_ACTION, PONG_ACTION, REQUEST_USER_REPOS_ACTION } from './redux/actions.js';

const store = configStore();
store.dispatch(REQUEST_USER_REPOS_ACTION);
store.dispatch(PING_ACTION);
