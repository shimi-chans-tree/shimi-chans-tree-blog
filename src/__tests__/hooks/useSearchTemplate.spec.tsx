/**
 * @jest-environment jsdom
 */
import { renderHook, act } from '@testing-library/react-hooks';
import { initBlogItem } from '../../constants/initState';
import { BlogItemType } from '../../types/Blog';
/* hooks */
import { useSearchTemplate } from '../../hooks/useSearchTemplate';
/* router */
let useRouterSpy: jest.SpyInstance<unknown>;
let blogList: BlogItemType[];

describe('[Hooks]useSearchTemplate test', () => {
  beforeAll(() => {
    useRouterSpy = jest.spyOn(require('next/router'), 'useRouter');
    useRouterSpy.mockImplementation(() => ({
      query: { keyword: 'keyword' },
      pathname: '/search',
    }));

    blogList = [initBlogItem];
  });

  describe('[state]searchText', () => {
    test('検索キーワードが取得できること', () => {
      const expectResult = 'keyword';
      const { result } = renderHook(() => useSearchTemplate(blogList));
      expect(result.current[0].searchText).toBe(expectResult);
    });

    test('検索キーワードが文字列ではなかった場合初期値が取得できること', () => {
      const router = {
        query: { keyword: 1 },
        pathname: '/search',
      };
      useRouterSpy.mockReturnValue(router);
      const expectResult = '';
      const { result } = renderHook(() => useSearchTemplate(blogList));
      expect(result.current[0].searchText).toBe(expectResult);
    });
  });

  describe('[function]onChange', () => {
    test('searchTextの値を更新できること', () => {
      const eventObject = {
        target: { value: 'test' },
      } as React.ChangeEvent<HTMLInputElement>;

      const { result } = renderHook(() => useSearchTemplate(blogList));
      expect(result.current[0].searchText).toBe('');

      act(() => result.current[1].onChange(eventObject));
      expect(result.current[0].searchText).toBe('test');
    });

    test('bloglistを更新できること', () => {
      const eventObject = {
        target: { value: 'test' },
      } as React.ChangeEvent<HTMLInputElement>;

      const { result } = renderHook(() => useSearchTemplate(blogList));
      expect(result.current[0].showBlogList).toEqual(blogList);
      act(() => result.current[1].onChange(eventObject));
      expect(result.current[0].showBlogList).toEqual([]);
    });
  });
});
