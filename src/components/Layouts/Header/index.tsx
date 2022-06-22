import React from 'react';
import Link from 'next/link';
import type { NextPage } from 'next';
import styles from './styles.module.scss';

const Header: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <p className={styles.subTitle}>shimi-chan's-tree</p>
      </div>
      <div className={styles.main}>
        <Link href="/">
          <div className={styles.title} data-test-id="home-header-link">
            <h1>平凡エンジニアの日常</h1>
            <p>〜小さな積み上げがいつか大樹に〜</p>
          </div>
        </Link>
        {/* リンク */}
        <div className={styles.link}>
          <Link href="">
            <h2 data-test-id="profile-header-link">プロフィール</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
