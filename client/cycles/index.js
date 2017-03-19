import { combineCycles } from 'redux-cycles';
import { pingPong } from './pingPong.js';
import { userRepo } from './userRepo.js';

export default combineCycles(pingPong, userRepo);
