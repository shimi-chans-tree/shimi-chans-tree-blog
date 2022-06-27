import React, { useContext } from 'react';
/* components */
import BasePostPageLayout from '../../Layouts/BasePostPageLayout';
import { BlogItem } from '../../common/molecules/BlogItem';
import { BlogItemResponsive } from '../../common/molecules/BlogItemResponsive';
import { Pagination } from '../../common/molecules/Pagination';
/* contexts */
import AppContext from '../../../contexts/AppContext';

/* styles */
import styles from './styles.module.scss';

/* types */
import { BlogItemType } from '../../../types/Blog';
import { BLOG_SHOW_COUNT } from '../../../constants/config';

const HomeTemplate: React.FC = () => {
  const { state } = useContext(AppContext);
  const { blogList, totalCount } = state.blogItem;

  return (
    <BasePostPageLayout>
      <div className={styles.blogItem}>
        {blogList &&
          blogList.length > 0 &&
          blogList.map((blogItem: BlogItemType, index: number) => (
            <BlogItem key={`${blogItem.id}_${index}`} blogItem={blogItem} />
          ))}
      </div>
      {/* ブログ記事一覧表示 レスポンシブ*/}
      <div className={styles.blogItem__responsive}>
        {blogList &&
          blogList.length > 0 &&
          blogList.map((blogItem: BlogItemType, index: number) => (
            <BlogItemResponsive
              key={`${blogItem.id}_${index}`}
              blogItem={blogItem}
            />
          ))}
      </div>
      {totalCount / BLOG_SHOW_COUNT > 1 && (
        <Pagination totalCount={totalCount} link="/page/" />
      )}
    </BasePostPageLayout>
  );
};

export default HomeTemplate;
