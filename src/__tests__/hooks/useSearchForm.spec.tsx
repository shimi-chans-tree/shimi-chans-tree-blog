/**
 * @jest-environment jsdom
 */
import { renderHook, act } from '@testing-library/react-hooks';
/* hooks */
import { useSearchForm } from '../../hooks/useSearchForm';
/* router */
let useRouterSpy: jest.SpyInstance<unknown>;
let routePushSpy: jest.Mock<any, any>;

describe('[Hooks]useSearchForm test', () => {
  beforeAll(() => {
    // routerのモック化
    useRouterSpy = jest.spyOn(require('next/router'), 'useRouter');
    useRouterSpy.mockImplementation(() => ({
      query: {},
      pathname: '/search',
      push: jest.fn(),
    }));
  });

  describe('searchText', () => {
    test('searchTextが取得できる。', () => {
      const expectResult = '';
      const { result } = renderHook(() => useSearchForm());
      expect(result.current[0].searchText).toBe(expectResult);
    });
  });

  describe('[function]onChangeSearchText', () => {
    test('searchTextの値を更新できる。', () => {
      const eventObject = {
        target: { value: 'test' },
      } as React.ChangeEvent<HTMLInputElement>;

      const { result } = renderHook(() => useSearchForm());
      expect(result.current[0].searchText).toBe('');

      act(() => result.current[1].onChangeSearchText(eventObject));
      expect(result.current[0].searchText).toBe('test');
    });
  });

  describe('[function]onKeyUpSearchBlog', () => {
    beforeEach(() => {
      routePushSpy = jest.fn();
      // routerのモック化
      useRouterSpy = jest.spyOn(require('next/router'), 'useRouter');
      useRouterSpy.mockImplementation(() => ({
        query: {},
        pathname: '/search',
        push: routePushSpy,
      }));
    });

    afterEach(() => {
      routePushSpy.mockRestore();
    });

    test('router.pushが実行される。', () => {
      const eventChangeObject = {
        target: { value: 'test' },
      } as React.ChangeEvent<HTMLInputElement>;

      const eventInputObject = {
        key: 'Enter',
      } as React.KeyboardEvent<HTMLInputElement>;

      const { result } = renderHook(() => useSearchForm());

      expect(result.current[0].searchText).toBe('');

      act(() => result.current[1].onChangeSearchText(eventChangeObject));

      expect(result.current[0].searchText).toBe('test');

      act(() => result.current[1].onKeyUpSearchBlog(eventInputObject));
      expect(routePushSpy).toHaveBeenCalled();
    });

    test('Enterをクリックしない場合、router.pushは実行されない。', () => {
      const eventChangeObject = {
        target: { value: 'test' },
      } as React.ChangeEvent<HTMLInputElement>;
      const eventInputObject = {
        key: '',
      } as React.KeyboardEvent<HTMLInputElement>;

      const { result } = renderHook(() => useSearchForm());

      expect(result.current[0].searchText).toBe('');

      act(() => result.current[1].onChangeSearchText(eventChangeObject));
      expect(result.current[0].searchText).toBe('test');

      act(() => result.current[1].onKeyUpSearchBlog(eventInputObject));
      expect(routePushSpy).not.toHaveBeenCalled();
    });

    test('searchTextが空文字の場合、router.pushは実行されない。', () => {
      const eventInputObject = {
        key: 'Enter',
      } as React.KeyboardEvent<HTMLInputElement>;

      const { result } = renderHook(() => useSearchForm());

      act(() => result.current[1].onKeyUpSearchBlog(eventInputObject));
      expect(routePushSpy).not.toHaveBeenCalled();
    });
  });
});
