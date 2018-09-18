/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  LOAD_REPO_SUCCESS,
  LOAD_REPO,
  LOAD_REPO_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentPort: false,
  userData: {
    repository: false,
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_REPO:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'repository'], false);
    case LOAD_REPO_SUCCESS:
      return state
        .setIn(['userData', 'repository'], action.repo)
        .set('loading', false)
        .set('currentPort', action.portname);
    case LOAD_REPO_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
