import {describe, expect, it} from '@jest/globals';
import { sesame } from './100doors';

/** 
 * 100 Doors 
*/

it('should return ######## on 0 pass', () => {
  expect(sesame(0)).toBe('########');
})

it('should return @@@@@@@@ on 1st pass', () => {
  expect(sesame(1)).toBe('@@@@@@@@');
})

it('should return @#@#@#@# on 2nd pass', () => {
  expect(sesame(2)).toBe('@#@#@#@#');
})


it('should return @###@@@# on 3rd pass', () => {
  expect(sesame(3)).toBe('@###@@@#');
})