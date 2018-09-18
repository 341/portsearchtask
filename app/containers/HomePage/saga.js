/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_REPO } from 'containers/App/constants';
import { repoLoaded, repoLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectPortname } from 'containers/HomePage/selectors';

/**
 * Github repos request/response handler
 */
export function* getRepo() {
  // Select username from store
  const portname = yield select(makeSelectPortname());

  const requestURL = `http://localhost:3000/api/ports/${portname}`;

  try {
    // Call our request helper (see 'utils/request')
    const repo = yield call(request, requestURL);

    yield put(repoLoaded(repo, portname));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_REPO, getRepo);
}
