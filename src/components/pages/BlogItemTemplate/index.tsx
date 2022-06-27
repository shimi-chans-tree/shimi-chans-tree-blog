import React from 'react';
/* components */
import BasePostPageLayout from '../../Layouts/BasePostPageLayout';
import { TitleArea } from './organisms/TitleArea';
import { HighlightBody } from '../../../components/common/molecules/HighlightBody';
/* types */
import { BlogItemType } from '../../../types/Blog';
/* styles */
import styles from './styles.module.scss';

/**
 * props
 */
type Props = {
  blogItem: BlogItemType;
  highlightedBody: string;
};

const BlogItemTemplate: React.FC<Props> = (props: Props) => {
  /* props */
  const { blogItem, highlightedBody } = props;

  return (
    <BasePostPageLayout>
      <section className={styles.container}>
        <main className={styles.main}>
          <div className={styles.rightBar}>
            {/* ブログタイトルエリア */}
            <TitleArea blogItem={blogItem} />
            {/* 記事本文 */}
            <HighlightBody highlightedBody={highlightedBody} />
          </div>
        </main>
      </section>
    </BasePostPageLayout>
  );
};

export default BlogItemTemplate;
