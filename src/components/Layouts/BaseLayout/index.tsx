import React from 'react';
import Header from '../Header';
import { Footer } from '../Footer';
/* components */
import { MetaHead } from '../MetaHead';
/* styles */
import styles from './styles.module.scss';
/* types */
import { MetaHeadType } from 'types/MetaHead';

export type Props = {
  children: React.ReactNode;
  metaData: MetaHeadType;
};

const BaseLayout: React.FC<Props> = (props: Props) => {
  const { children, metaData } = props;

  return (
    <>
      <MetaHead metaData={metaData} />
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.divider}>{children}</div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
};

export default BaseLayout;
