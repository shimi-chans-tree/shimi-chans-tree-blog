import { BlogDataType } from './Blog';
import { rootCategoryType } from './Category';
import { rootProfileType } from './Profile';

export type rootStateType = {
  blogItem: BlogDataType;
  categoryItem: rootCategoryType;
  profileItem: rootProfileType;
};
