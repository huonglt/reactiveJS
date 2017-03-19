import { combineCycles } from 'redux-cycles';
import xs from 'xstream';
import { receivedUserRepoAction, REQUEST_USER_REPOS_ACTION } from '../redux/actions.js';

/*
 * Helper functions
 */
const category = 'users';

const userRepoActionOnly = (action) => action.type === REQUEST_USER_REPOS_ACTION.type;

const getURL = (user) => 'https://api.github.com/users/' + user + '/repos';

const userRepoRequest = (user) => ({ method: 'GET', category, url: getURL(user) });

const getPayload = (action) => action.payload.user;

const receivedUserRepo = (arr) => {
  const repoNames = arr[0].body.map(repo => repo.name);
  return receivedUserRepoAction(arr[1], repoNames);
};

/*
 * Reactive part
 */
export const userRepo = (sources) =>  {
  const user$ = sources.ACTION.filter(userRepoActionOnly).map(getPayload);

  const request$ = user$.map(userRepoRequest);

  /*
   * sources.HTTP === source of all http responses of the app
   * sources.HTTP.select('users') === meta stream or stream of response stream of category 'users'
   * need to flatten to get a stream of response
   */
  const response$ = sources.HTTP.select(category).flatten();

  /*
   * construct the result action to return to the response stream which will be dispatched to the redux store
   * action$ is a stream of result action
   */
  const action$ = xs.combine(response$, user$).map(receivedUserRepo);

  /*
   * The returned object has 2 fields
   * HTTP: it is the request the response is for
   * ACTION: the action to be dispatched to the redux store. The action payload is the response payload
   * The returned object will be piped to the response stream
   */
  return {
    ACTION: action$,
    HTTP: request$
  }
}
