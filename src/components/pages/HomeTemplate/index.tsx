import React, { useContext } from 'react';
/* components */
import BasePostPageLayout from '../../Layouts/BasePostPageLayout';
import { BlogItem } from '../../common/molecules/BlogItem';
import { BlogItemResponsive } from '../../common/molecules/BlogItemResponsive';
/* contexts */
import AppContext from '../../../contexts/AppContext';

/* styles */
import styles from './styles.module.scss';

/* types */
import { BlogItemType } from '../../../types/Blog';

const HomeTemplate: React.FC = () => {
  const { state } = useContext(AppContext);
  const { blogList } = state.blogItem;

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
    </BasePostPageLayout>
  );
};

export default HomeTemplate;
