import { setBlogList, SET_BLOG_ITEM } from '../actions';
import { BlogDataType } from '../types/Blog';
import { initBlogData } from '../constants/initState';

type BlogActionType = ReturnType<typeof setBlogList>;

const blogReducer = (
  state: BlogDataType = initBlogData,
  action: BlogActionType
) => {
  switch (action.type) {
    case SET_BLOG_ITEM:
      return {
        ...state,
        blogList: action.payload.blogList,
        totalCount: action.payload.totalCount,
      };
    default:
      return { ...state };
  }
};

export default blogReducer;
