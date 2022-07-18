import React from 'react';
import Link from 'next/link';
/* components */
import BasePostPageLayout from '../../Layouts/BasePostPageLayout';
import { TitleArea } from './organisms/TitleArea';
import { HighlightBody } from '../../../components/common/molecules/HighlightBody';
/* types */
import { BlogItemType } from '../../../types/Blog';
/* styles */
import styles from './styles.module.scss';
/* hooks */
import { useMeta } from '../../../hooks/useMeta';

/**
 * props
 */
type Props = {
  blogItem: BlogItemType;
  highlightedBody: string;
  draftKey?: string;
};

const BlogItemTemplate: React.FC<Props> = (props: Props) => {
  /* props */
  const { blogItem, highlightedBody, draftKey } = props;
  /* hooks */
  const [{ metaData }] = useMeta({
    title: blogItem.title,
    description: blogItem.description,
    imagePath: blogItem.eyecatch.url,
  });

  return (
    <BasePostPageLayout metaData={metaData}>
      <section className={styles.container}>
        {!!draftKey && (
          <div>
            <p>---プレビューモード---</p>
            <br />
            <Link href={`/api/cancel-preview?id=${blogItem.id}`}>
              <a>プレビューを解除</a>
            </Link>
          </div>
        )}
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
