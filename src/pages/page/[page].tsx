import React, { useContext } from 'react';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
/* components */
import HomeTemplate from '../../components/pages/HomeTemplate';
/* hooks */
import { useSetData } from '../../hooks/useSetData';
/* context */
import AppContext from '../../contexts/AppContext';
/* apis */
import { getBlogsApi } from '../../apis/BlogApi';
import { getCategoriesApi } from '../../apis/CategoryApi';
import { getProfileByApi } from '../../apis/ProfileApi';
/* logic */
import { createPageArrayLogic } from '../../logic/CommonLogic';
/* constants */
import { BLOG_SHOW_COUNT } from '../../constants/config';
/* types */
import { BlogItemType } from '../../types/Blog';
import { CategoryType } from '../../types/Category';
import { ProfileType } from '../../types/Profile';

/**
 * Props
 */
type BlogListPageProps = {
  blogList: BlogItemType[];
  totalCount: number;
  categories: CategoryType;
  profile: ProfileType;
};

const BlogListPage: NextPage<BlogListPageProps> = (
  props: BlogListPageProps
) => {
  /* props */
  const { blogList, totalCount, categories, profile } = props;
  /* hooks */
  const { dispatch } = useContext(AppContext);
  const [{ setBlogData, setCategoryData, setProfileData }] =
    useSetData(dispatch);

  React.useEffect(() => {
    setCategoryData(categories);
    setProfileData(profile);
    setBlogData(blogList, totalCount);
  }, [
    categories,
    setCategoryData,
    profile,
    setProfileData,
    blogList,
    totalCount,
    setBlogData,
  ]);

  return <HomeTemplate />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { totalCount } = await getBlogsApi(0);
  // ページ番号の配列を作成
  const pageCountArray = createPageArrayLogic(totalCount);
  // pathの配列を作成
  const paths = pageCountArray.map((pageNum) => `/page/${pageNum}`);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  // ページNo
  let pageNum = 1;

  if (params?.page && typeof params.page === 'string') {
    pageNum = Number(params.page);
  }

  const offset = (pageNum - 1) * BLOG_SHOW_COUNT;

  // ブログ一覧データ取得 ---------
  const blogData = await getBlogsApi(offset);
  // カテゴリーデータ取得 ---------
  const categoryData = await getCategoriesApi();
  // プロフィールデータ取得 ---------
  const profile = await getProfileByApi();

  const props: BlogListPageProps = {
    blogList: blogData.blogList,
    totalCount: blogData.totalCount,
    categories: categoryData,
    profile: profile,
  };
  return { props };
};

export default BlogListPage;
