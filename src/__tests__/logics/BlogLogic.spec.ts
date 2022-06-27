import { BlogItemType } from '../../types/Blog';

/* logics */
import { searchBlogListLogic } from '../../logic/BlogLogic';
/* constants */
import { initImageState } from '../../constants/initState';

describe('BlogLogic test', () => {
  describe('[function]searchBlogListLogic', () => {
    const blogList: BlogItemType[] = [
      {
        id: '',
        createdAt: '',
        updatedAt: '',
        publishedAt: '',
        revisedAt: '',
        title: 'Jest',
        content: '',
        description: '',
        eyecatch: initImageState,
        categories: [],
      },
      {
        id: '',
        createdAt: '',
        updatedAt: '',
        publishedAt: '',
        revisedAt: '',
        title: 'Cypress',
        content: '',
        description: '',
        eyecatch: initImageState,
        categories: [],
      },
    ];
    const resultBlogList: BlogItemType[] = [
      {
        id: '',
        createdAt: '',
        updatedAt: '',
        publishedAt: '',
        revisedAt: '',
        title: 'Jest',
        content: '',
        description: '',
        eyecatch: initImageState,
        categories: [],
      },
    ];
    test('keywordでヒットしたblogの配列が返却されること', () => {
      const keyword = 'Jest';
      expect(searchBlogListLogic(blogList, keyword)).toEqual(resultBlogList);
    });
    test('keywordでヒットしなかった場合、空の配列が返却されること', () => {
      const keyword = 'Rspec';
      expect(searchBlogListLogic(blogList, keyword)).toEqual([]);
    });
  });
});
