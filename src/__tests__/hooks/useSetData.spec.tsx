/**
 * @jest-environment jsdom
 */
import { renderHook, act } from '@testing-library/react-hooks';
/* hooks */
import { useSetData } from '../../hooks/useSetData';
import * as actions from '../../actions';

/* constants */
import {
  initBlogItem,
  initCategoryData,
  initProfileState,
} from '../../constants/initState';
/* types */
import { BlogItemType } from '../../types/Blog';
import { CategoryType } from '../../types/Category';
import { ProfileType } from '../../types/Profile';

// 変数定義
let blogList: BlogItemType[];
let totalCount: number;
let categories: CategoryType;
let profile: ProfileType;

/* actions */
let blogAction: jest.SpyInstance<unknown>;
let categoryAction: jest.SpyInstance<unknown>;
let profileAction: jest.SpyInstance<unknown>;

const dispatch = jest.fn();

describe('[Hooks]useSetDate test', () => {
  describe('[function]setBlogData', () => {
    beforeEach(() => {
      blogList = [initBlogItem];
      totalCount = 1;
      // ActionMock
      blogAction = jest.spyOn(actions, 'setBlogList');
    });

    test('処理が正常に終了すること', () => {
      const { result } = renderHook(() => useSetData(dispatch));

      act(() => result.current[0].setBlogData(blogList, totalCount));
      // actionが実行されたかを確認
      expect(blogAction.mock.calls.length).toBe(1);
    });
  });

  describe('[function]setCategoryData', () => {
    beforeEach(() => {
      // 引数
      categories = initCategoryData;
      categoryAction = jest.spyOn(actions, 'setCategories');
    });
    test('処理が正常に終了すること', () => {
      const { result } = renderHook(() => useSetData(dispatch));

      act(() => result.current[0].setCategoryData(categories));
      // actionが実行されたかを確認
      expect(categoryAction.mock.calls.length).toBe(1);
    });
  });

  describe('[function]setProfileData', () => {
    beforeEach(() => {
      profile = initProfileState;
      profileAction = jest.spyOn(actions, 'setProfile');
    });
    test('処理が正常に終了すること', () => {
      const { result } = renderHook(() => useSetData(dispatch));

      act(() => result.current[0].setProfileData(profile));
      // actionが実行されたかを確認
      expect(profileAction.mock.calls.length).toBe(1);
    });
  });
});
