import { Layout } from '../../types/layout.type';
import { sortRandom } from '../helper/sort-random.util';
import { getLayoutBands } from './get-layout-bands.util';

export const shuffleLayoutRows = (layout: Layout): Layout =>
  getLayoutBands(layout)
    .map((rows) => rows.sort(sortRandom))
    .reduce((acc, rows) => [...acc, ...rows], []);