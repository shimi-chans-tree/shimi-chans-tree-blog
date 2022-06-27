/**
 * @jest-environment jsdom
 */
import { renderHook, act } from '@testing-library/react-hooks';
/* hooks */
import { usePagination } from '../../hooks/usePagination';

/* router */
let useRouterSpy: jest.SpyInstance<unknown>;

describe('[Hooks]usePagination test', () => {
  beforeAll(() => {
    // routerのモック化
    useRouterSpy = jest.spyOn(require('next/router'), 'useRouter');
    useRouterSpy.mockImplementation(() => ({
      query: { page: '3' },
    }));
  });
  describe('[state]currentPage', () => {
    test('query.pageでpage番号が取得できること。', () => {
      const expectResult = 3;
      const { result } = renderHook(() => usePagination());

      expect(result.current[0].currentPage).toBe(expectResult);
    });

    test('query.pageがundefinedの場合、「1」で初期化される。', () => {
      useRouterSpy.mockImplementation(() => ({
        query: {},
      }));

      const expectResult = 1;

      const { result } = renderHook(() => usePagination());
      expect(result.current[0].currentPage).toBe(expectResult);
    });

    test('query.pageの値がstring以外の場合、「1」で初期化される。', () => {
      useRouterSpy.mockImplementation(() => ({
        query: { page: 2 },
      }));

      const expectResult = 1;

      const { result } = renderHook(() => usePagination());
      expect(result.current[0].currentPage).toBe(expectResult);
    });
  });

  describe('[function]createPageRange', () => {
    test('startが1、endが1の場合、[1]の配列が返却される。', () => {
      const startParam = 1;
      const endParam = 1;

      const expectResult = [1];

      const { result } = renderHook(() => usePagination());
      act(() => {
        expect(result.current[1].createPageRange(startParam, endParam)).toEqual(
          expectResult
        );
      });
    });

    test('startが1、endが6の場合、[1,2,3,4,5,6]の配列が返却される。', () => {
      const startParam = 1;
      const endParam = 6;

      const expectResult = [1, 2, 3, 4, 5, 6];

      const { result } = renderHook(() => usePagination());
      act(() => {
        expect(result.current[1].createPageRange(startParam, endParam)).toEqual(
          expectResult
        );
      });
    });
    test('end <= startの場合、空配列が返却される。', () => {
      const startParam = 3;
      const endParam = 1;

      const expectResult: number[] = [];

      const { result } = renderHook(() => usePagination());
      act(() => {
        expect(result.current[1].createPageRange(startParam, endParam)).toEqual(
          expectResult
        );
      });
    });
  });
});
