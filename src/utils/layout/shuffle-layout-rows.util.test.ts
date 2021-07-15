import { Layout } from '../../types/layout.type';
import { seedRandom } from '../../test-utils/seed-random.util';
import { shuffleLayoutRows } from './shuffle-layout-rows.util';

const layout: Layout = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8],
  [9, 10, 11, 12, 13, 14, 15, 16, 17],
  [18, 19, 20, 21, 22, 23, 24, 25, 26],
  [27, 28, 29, 30, 31, 32, 33, 34, 35],
  [36, 37, 38, 39, 40, 41, 42, 43, 44],
  [45, 46, 47, 48, 49, 50, 51, 52, 53],
  [54, 55, 56, 57, 58, 59, 60, 61, 62],
  [63, 64, 65, 66, 67, 68, 69, 70, 71],
  [72, 73, 74, 75, 76, 77, 78, 79, 80],
];

describe('shuffleLayoutRows', () => {
  test('randomly orders the layout rows', () => {
    const expected1: Layout = [
      [9, 10, 11, 12, 13, 14, 15, 16, 17],
      [18, 19, 20, 21, 22, 23, 24, 25, 26],
      [0, 1, 2, 3, 4, 5, 6, 7, 8],
      [45, 46, 47, 48, 49, 50, 51, 52, 53],
      [36, 37, 38, 39, 40, 41, 42, 43, 44],
      [27, 28, 29, 30, 31, 32, 33, 34, 35],
      [72, 73, 74, 75, 76, 77, 78, 79, 80],
      [54, 55, 56, 57, 58, 59, 60, 61, 62],
      [63, 64, 65, 66, 67, 68, 69, 70, 71],
    ];

    const expected2: Layout = [
      [18, 19, 20, 21, 22, 23, 24, 25, 26],
      [9, 10, 11, 12, 13, 14, 15, 16, 17],
      [0, 1, 2, 3, 4, 5, 6, 7, 8],
      [27, 28, 29, 30, 31, 32, 33, 34, 35],
      [36, 37, 38, 39, 40, 41, 42, 43, 44],
      [45, 46, 47, 48, 49, 50, 51, 52, 53],
      [72, 73, 74, 75, 76, 77, 78, 79, 80],
      [54, 55, 56, 57, 58, 59, 60, 61, 62],
      [63, 64, 65, 66, 67, 68, 69, 70, 71],
    ];

    const expected3: Layout = [
      [0, 1, 2, 3, 4, 5, 6, 7, 8],
      [9, 10, 11, 12, 13, 14, 15, 16, 17],
      [18, 19, 20, 21, 22, 23, 24, 25, 26],
      [45, 46, 47, 48, 49, 50, 51, 52, 53],
      [27, 28, 29, 30, 31, 32, 33, 34, 35],
      [36, 37, 38, 39, 40, 41, 42, 43, 44],
      [72, 73, 74, 75, 76, 77, 78, 79, 80],
      [54, 55, 56, 57, 58, 59, 60, 61, 62],
      [63, 64, 65, 66, 67, 68, 69, 70, 71],
    ];

    seedRandom('lorem');
    expect(shuffleLayoutRows(layout)).toEqual(expected1);

    seedRandom('ipsum');
    expect(shuffleLayoutRows(layout)).toEqual(expected2);

    seedRandom('dolor');
    expect(shuffleLayoutRows(layout)).toEqual(expected3);
  });
});
