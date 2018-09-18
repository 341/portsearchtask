/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectPortname = () => createSelector(
  selectHome,
  (homeState) => homeState.get('portname')
);

export {
  selectHome,
  makeSelectPortname,
};
