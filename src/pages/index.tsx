import React, { useContext, useEffect } from 'react';
import { NextPage, GetStaticProps } from 'next';
/* components */
import HomeTemplate from '../components/pages/HomeTemplate';
/* hooks */
import { useSetData } from '../hooks/useSetData';
/* apis */
import { getBlogsApi } from '../components/apis/BlogApi';

/* types */
import { BlogItemType } from '../types/Blog';
import { getCategoriesApi } from '../components/apis/CategoryApi';
import { getProfileByApi } from '../components/apis/ProfileApi';
import { CategoryType } from '../types/Category';
import { ProfileType } from 'types/Profile';
import AppContext from '../contexts/AppContext';

type HomeProps = {
  blogList: BlogItemType[];
  totalCount: number;
  categories: CategoryType;
  profile: ProfileType;
};

const Home: NextPage<HomeProps> = (props: HomeProps) => {
  const { blogList, totalCount, categories, profile } = props;
  const { dispatch } = useContext(AppContext);
  const [{ setBlogData, setCategoryData, setProfileData }] =
    useSetData(dispatch);

  useEffect(() => {
    setBlogData(blogList, totalCount);
    setCategoryData(categories);
    setProfileData(profile);
  }, [
    setBlogData,
    setCategoryData,
    blogList,
    totalCount,
    categories,
    setProfileData,
    profile,
  ]);

  return <HomeTemplate />;
};

export const getStaticProps: GetStaticProps = async () => {
  const blogData = await getBlogsApi(0);
  // カテゴリーデータ取得 ---------
  const categoryData = await getCategoriesApi();
  // プロフィールデータ取得 ---------
  const profileData = await getProfileByApi();

  const props = {
    blogList: blogData.blogList,
    totalCount: blogData.totalCount,
    categories: categoryData,
    profile: profileData,
  };

  return { props };
};

export default Home;
