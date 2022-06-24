/* constants */
import { BLOG_SHOW_COUNT } from '../constants/config';

export const createPageArrayLogic = (totalCount: number) => {
  return [...Array(Math.floor(totalCount / BLOG_SHOW_COUNT) + 1)].map(
    (_, i) => i + 1
  );
};
