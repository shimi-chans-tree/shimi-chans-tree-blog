export const SET_BLOG_ITEM = 'SET_BLOG_ITEM';
export const SET_CATEGORY = 'SET_CATEGORY';
export const SET_PROFILE = 'SET_PROFILE';

/* types */
import { BlogItemType } from '../types/Blog';
import { CategoryType } from '../types/Category';
import { ProfileType } from 'types/Profile';

export const setBlogList = (blogList: BlogItemType[], totalCount: number) => ({
  type: SET_BLOG_ITEM,
  payload: {
    blogList,
    totalCount,
  },
});

export const setCategories = (categories: CategoryType) => ({
  type: SET_CATEGORY,
  payload: {
    categories,
  },
});

export const setProfile = (profile: ProfileType) => ({
  type: SET_PROFILE,
  payload: {
    profile,
  },
});
