/* logics */
import { createPageArrayLogic } from '../../logic/CommonLogic';

describe('CommonLogic test', () => {
  describe('[function]createPageArrayLogic', () => {
    test('正しく配列が返却されること(記事数が10で表示数が8の時、ページ数は2となる)', () => {
      const expectArray = [1, 2];
      const totalCount = 10;
      expect(createPageArrayLogic(totalCount)).toEqual(expectArray);
    });
  });
});
