/* types */
import { BlogItemType } from '../types/Blog';

export const searchBlogListLogic = (
  blogList: BlogItemType[],
  keyword: string
): BlogItemType[] => {
  return blogList.filter((blog) => blog.title.includes(keyword));
};
