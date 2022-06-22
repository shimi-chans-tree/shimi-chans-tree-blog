import React from 'react';
/* components */
import BaseLayout from '../BaseLayout';
import { Aside } from '../Aside';
/* styles */
import styles from './styles.module.scss';

/**
 * Props
 */
export type Props = {
  children: React.ReactNode;
};

const BasePostPageLayout: React.FC<Props> = (props: Props) => {
  /* props */
  const { children } = props;

  return (
    <>
      <BaseLayout>
        <article className={styles.article}>{children}</article>
        <div className={styles.aside}>
          <Aside />
        </div>
      </BaseLayout>
    </>
  );
};

export default BasePostPageLayout;
