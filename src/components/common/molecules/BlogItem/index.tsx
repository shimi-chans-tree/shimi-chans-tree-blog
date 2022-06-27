import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
/*　component */
import { DateArea } from '../DateArea';
/* types */
import { BlogItemType } from '../../../../types/Blog';
import { CategoryType } from '../../../../types/Category';
/* styles */
import styles from './styles.module.scss';

/**
 * props
 */
type Props = {
  blogItem: BlogItemType;
};

export const BlogItem: React.FC<Props> = (props: Props) => {
  /* props */
  const { blogItem } = props;

  return (
    <Link href="/[blogId]" as={`/${blogItem.id}`}>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image
            src={blogItem.eyecatch.url}
            alt="Picture"
            width={blogItem.eyecatch.width}
            height={blogItem.eyecatch.height}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{blogItem.title}</h2>
          <div className={styles.category}>
            {blogItem &&
              blogItem.categories &&
              blogItem.categories.map(
                (category: CategoryType, index: number) => {
                  return (
                    <div
                      className={styles.category__item}
                      key={`${category.id}_${index}`}
                    >
                      {category.name}
                    </div>
                  );
                }
              )}
          </div>

          <div className={styles.date}>
            <DateArea date={blogItem.createdAt} />
          </div>
        </div>
      </div>
    </Link>
  );
};
