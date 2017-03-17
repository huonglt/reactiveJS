import { PING_ACTION, PONG_ACTION } from '../redux/actions.js';

const pingActionOnly = (action) => action.type === PING_ACTION.type;

export const main = (sources) => {
  const pong = sources.ACTION.filter(pingActionOnly).mapTo( PONG_ACTION);
  return {
    ACTION: pong
  };
}
