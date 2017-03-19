export const PING_ACTION = { type: 'PING' };
export const PONG_ACTION = { type: 'PONG' };
export const REQUEST_USER_REPOS_ACTION = { type: 'REQUEST_USER_REPO', payload: { user: 'huonglt' }};

export const receivedUserRepoAction = (user, repos) => ({
    type: 'RECEIVED_USER_REPOS',
    payload: {
      user,
      repos
    }
});
