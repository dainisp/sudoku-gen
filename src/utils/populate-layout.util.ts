import { Board } from '../types/board.type';
import { Layout } from '../types/layout.type';

export const populateLayout = (layout: Layout, sequence: string): Board => {
  return layout.map((row) => row.map((cell) => sequence[cell])) as Board;
};
