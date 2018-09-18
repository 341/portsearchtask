import { CHANGE_PORTNAME } from '../constants';

import { changePortname } from '../actions';

describe('Home Actions', () => {
  describe('changePortname', () => {
    it('should return the correct type and the passed name', () => {
      const fixture = 'Max';
      const expectedResult = {
        type: CHANGE_PORTNAME,
        name: fixture
      };

      expect(changePortname(fixture)).toEqual(expectedResult);
    });
  });
});
