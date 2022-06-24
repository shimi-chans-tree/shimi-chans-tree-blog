import React, { useContext } from 'react';
/* components */
import BasePostPageLayout from '../../Layouts/BasePostPageLayout';
import { PageTitle } from '../../common/atoms/PageTitle';
import { BlogItem } from '../../common/molecules/BlogItem';
import { BlogItemResponsive } from '../../common/molecules/BlogItemResponsive';
import { Pagination } from 'components/common/molecules/Pagination';
/* contexts */
import AppContext from '../../../contexts/AppContext';
/* constants */
import { BLOG_SHOW_COUNT } from '../../../constants/config';
/* styles */
import styles from './styles.module.scss';
import { BlogItemType } from 'types/Blog';

/**
 * props
 */
type Props = {
  categoryId: string;
  breadName: string;
};

export const CategoryTemplate: React.FC<Props> = (props: Props) => {
  /* props */
  const { categoryId, breadName } = props;
  /* contexts */
  const { state } = useContext(AppContext);
  const { blogList, totalCount } = state.blogItem;

  return (
    <BasePostPageLayout>
      {/* ページタイトル */}
      <PageTitle title={`「${breadName}」の記事一覧`} />

      {/* ブログ記事一覧表示 */}
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

      {/* ページネーション */}
      {totalCount / BLOG_SHOW_COUNT > 1 && (
        <Pagination totalCount={totalCount} link={`/category/${categoryId}/`} />
      )}
    </BasePostPageLayout>
  );
};
