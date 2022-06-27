/* types */
import { BlogItemType, BlogDataType } from '../types/Blog';
import { CategoryType, rootCategoryType } from '../types/Category';
import { ProfileType, rootProfileType } from '../types/Profile';
import { ImageType } from '../types/Image';
import { rootStateType } from 'types/root';

/**
 * initImageState
 */
export const initImageState: ImageType = {
  url: '',
  height: 0,
  width: 0,
};

/**
 * initBlogItem
 */
export const initBlogItem: BlogItemType = {
  id: '',
  createdAt: '',
  updatedAt: '',
  publishedAt: '',
  revisedAt: '',
  title: '',
  content: '',
  description: '',
  eyecatch: initImageState,
  categories: [],
};

/**
 * initCategoryData
 */
export const initCategoryData: CategoryType = {
  id: '',
  name: '',
  createdAt: '',
  updatedAt: '',
  publishedAt: '',
  revisedAt: '',
};

export const rootCategoryData: rootCategoryType = {
  categories: initCategoryData,
};

/**
 * initProfileState
 */
export const initProfileState: ProfileType = {
  contents: {
    id: '',
    createdAt: '',
    updatedAt: '',
    publishedAt: '',
    revisedAt: '',
    name: '',
    englishName: '',
    position: '',
    introduction: '',
    userImage: initImageState,
    articleImage: initImageState,
    description: '',
    contents: '',
    twitter: '',
    github: '',
    facebook: '',
  },
  limit: 0,
  offset: 0,
  totalCount: 10,
};

export const rootProfileState: rootProfileType = {
  profile: initProfileState,
};

/**
 * initBlogData
 */
export const initBlogData: BlogDataType = {
  blogList: [],
  totalCount: 0,
};

export const rootState: rootStateType = {
  blogItem: initBlogData,
  categoryItem: rootCategoryData,
  profileItem: rootProfileState,
};
