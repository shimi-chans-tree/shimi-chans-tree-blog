import { Dispatch, useCallback } from 'react';
/* actions */
import { setBlogList, setCategories, setProfile } from '../actions';
/* types */
import { BlogItemType } from '../types/Blog';
import { CategoryType } from '../types/Category';
import { ProfileType } from '../types/Profile';
import { AnyAction } from 'redux';

export const useSetData = (dispatch: Dispatch<AnyAction>) => {
  const setBlogData = useCallback(
    (blogList: BlogItemType[], totalCount: number) => {
      dispatch(setBlogList(blogList, totalCount));
    },
    [dispatch]
  );

  const setCategoryData = useCallback(
    (categories: CategoryType) => {
      dispatch ? dispatch(setCategories(categories)) : null;
    },
    [dispatch]
  );

  /**
   * setProfileData
   */
  const setProfileData = useCallback(
    (profile: ProfileType) => {
      dispatch ? dispatch(setProfile(profile)) : null;
    },
    [dispatch]
  );

  return [{ setBlogData, setCategoryData, setProfileData }];
};
