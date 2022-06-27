/* config */
import { BlogDataType } from 'types/Blog';
import baseAxios from '../config/baseAxios';

/* constants */
import { BLOG_SHOW_COUNT } from '../constants/config';
import { initBlogData, initBlogItem } from '../constants/initState';

const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}blogs`;
const QUERY_OFFSET = '?offset=';
const QUERY_LIMIT = '&limit=';

export const getBlogsApi = async (offset: number) => {
  const blogData = initBlogData;
  try {
    const res = await baseAxios.get(
      BASE_URL + QUERY_OFFSET + offset + QUERY_LIMIT + BLOG_SHOW_COUNT
    );

    blogData.blogList = res.data.contents;
    blogData.totalCount = res.data.totalCount;
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    throw new Error(`API ERROR: getBlogsApi`);
  }

  return blogData;
};

export const getBlogByApi = async (id: string) => {
  let blogDetail = initBlogItem;
  try {
    const res = await baseAxios.get(`${BASE_URL}/${id}`);
    blogDetail = res.data;
  } catch (error) {
    console.log(error); // eslint-disable-line no-console
    throw new Error(`API ERROR: getBlogByApi`);
  }

  return blogDetail;
};

export const getBlogsContainCategoryApi = async (
  offset: number,
  categoryId: string
): Promise<BlogDataType> => {
  const blogData: BlogDataType = initBlogData;

  try {
    const res = await baseAxios.get(
      BASE_URL +
        QUERY_OFFSET +
        offset +
        QUERY_LIMIT +
        BLOG_SHOW_COUNT +
        '&filters=categories[contains]' +
        categoryId
    );
    blogData.blogList = res.data.contents;
    blogData.totalCount = res.data.totalCount;
  } catch (error) {
    throw new Error(`API ERROR: getBlogsContainCategoryApi`);
  }

  return blogData;
};
