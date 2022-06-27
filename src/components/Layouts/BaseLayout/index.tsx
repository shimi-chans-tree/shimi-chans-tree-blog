import React from 'react';
import Header from '../Header';
import { Footer } from '../Footer';
/* styles */
import styles from './styles.module.scss';

export type Props = {
  children: React.ReactNode;
};

const BaseLayout: React.FC<Props> = (props: Props) => {
  const { children } = props;
  return (
    <>
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
