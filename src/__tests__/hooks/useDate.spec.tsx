/**
 * @jest-environment jsdom
 */
import { renderHook } from '@testing-library/react-hooks';
/* hooks */
import { useDate } from '../../hooks/useDate';
/* logics */
import * as dateLogic from '../../logic/DateLogic';

/* logics */
let showYearMonthDayLogicSpy: jest.SpyInstance<unknown>;

describe('useDate test', () => {
  describe('[function]showYearMonthDayLogic', () => {
    test('日付が返却されること。', () => {
      const dateParam = '2020-01-01 11:11:11';

      showYearMonthDayLogicSpy = jest
        .spyOn(dateLogic, 'showYearMonthDayLogic')
        .mockReturnValue('2022年06月01日');

      const expectObject = '2022年06月01日';

      const { result } = renderHook(() => useDate(dateParam));
      expect(result.current).toBe(expectObject);
      expect(showYearMonthDayLogicSpy).toBeCalled();
    });
  });
});
