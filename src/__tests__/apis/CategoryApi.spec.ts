/* apis */
import { getCategoriesApi } from '../../apis/CategoryApi';
/* constants */
import { initCategoryData } from '../../constants/initState';
/* types */
import { CategoryType } from '../../types/Category';

describe('【Api】CategoryApi test', () => {
  let categoryData: CategoryType;
  describe('[function]getCategoriesApi', () => {
    // mock化
    const apiMock = jest.fn(getCategoriesApi);

    beforeEach(() => {
      categoryData = initCategoryData;
    });
    test('データを取得できること。', async () => {
      const apiMockFunc = apiMock.mockResolvedValue(categoryData);
      expect(await apiMockFunc()).toEqual(categoryData);
    });
    test('例外が発生すること。', async () => {
      const apiMockFunc = apiMock.mockReturnValue(Promise.reject('error'));
      try {
        await apiMockFunc();
      } catch (error) {
        expect(error).toMatch('error');
      }
    });
  });
});
