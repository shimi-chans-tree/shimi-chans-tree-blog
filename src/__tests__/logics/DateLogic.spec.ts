/* logics */
import { showYearMonthDayLogic } from '../../logic/DateLogic';

describe('DateLogic test', () => {
  describe('[function]showYearMonthDayLogic', () => {
    test('フォーマットされた日付が返却されること', () => {
      const date = '2022-06-30 23:59:59';
      const expectDate = '2022年6月30日';
      expect(showYearMonthDayLogic(date)).toBe(expectDate);
    });
  });
});
