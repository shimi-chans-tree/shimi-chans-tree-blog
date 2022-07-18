import React from 'react';
/* components */
import BaseLayout from '../BaseLayout';
import { Aside } from '../Aside';
/* styles */
import styles from './styles.module.scss';
/* types */
import { MetaHeadType } from 'types/MetaHead';

/**
 * Props
 */
export type Props = {
  children: React.ReactNode;
  metaData: MetaHeadType;
};

const BasePostPageLayout: React.FC<Props> = (props: Props) => {
  /* props */
  const { children, metaData } = props;

  return (
    <>
      <BaseLayout metaData={metaData}>
        <article className={styles.article}>{children}</article>
        <div className={styles.aside}>
          <Aside />
        </div>
      </BaseLayout>
    </>
  );
};

export default BasePostPageLayout;
