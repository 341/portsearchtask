import {
  LOAD_REPO,
  LOAD_REPO_SUCCESS,
  LOAD_REPO_ERROR,
} from '../constants';

import {
  loadRepo,
  repoLoaded,
  repoLoadingError,
} from '../actions';

describe('App Actions', () => {
  describe('loadRepo', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_REPO,
      };

      expect(loadRepo()).toEqual(expectedResult);
    });
  });

  describe('repoLoaded', () => {
    it('should return the correct type and the passed repos', () => {
      const fixture = ['Test'];
      const portnmae = 'test';
      const expectedResult = {
        type: LOAD_REPO_SUCCESS,
        repo: fixture,
        portname,
      };

      expect(repoLoaded(fixture, portnmae)).toEqual(expectedResult);
    });
  });

  describe('repoLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_REPO_ERROR,
        error: fixture,
      };

      expect(repoLoadingError(fixture)).toEqual(expectedResult);
    });
  });
});
