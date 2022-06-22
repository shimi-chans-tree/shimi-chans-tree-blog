import { getBlogsApi, getBlogByApi } from './BlogApi';
import { initBlogItem, initBlogData } from '../../constants/initState';

describe('【Api】blogApi test', () => {
  let blogItem: any;
  let blogItemList: any;

  beforeEach(() => {
    blogItem = initBlogItem;
    blogItemList = initBlogData;
  });
  describe('[function]getBlogsApi', () => {
    // mock化
    const apiMock = jest.fn(getBlogsApi);
    // 引数
    const offsetParam = 1;
    test('正しくデータが取得できること', async () => {
      blogItemList.blogList = [blogItem];
      blogItemList.totalCount = 1;

      const apiMockFunc = apiMock.mockResolvedValue(blogItemList);
      expect(await apiMockFunc(offsetParam)).toEqual(blogItemList);
    });

    test('例外が発生すること。', async () => {
      blogItemList.blogList = [blogItem];
      blogItemList.totalCount = 1;

      const apiMockFunc = apiMock.mockReturnValue(Promise.reject('error'));

      try {
        await apiMockFunc(offsetParam);
      } catch (error) {
        expect(error).toMatch('error');
      }
    });
  });

  describe('[function]getBlogByApi', () => {
    const apiMock = jest.fn(getBlogByApi);
    const id = 'test';
    test('正しくデータが取得できること', async () => {
      const apiMockFunc = apiMock.mockResolvedValue(blogItem);
      expect(await apiMockFunc(id)).toEqual(blogItem);
    });

    test('例外が発生すること。', async () => {
      const apiMockFunc = apiMock.mockReturnValue(Promise.reject('error'));

      try {
        await apiMockFunc(id);
      } catch (error) {
        expect(error).toMatch('error');
      }
    });
  });
});
