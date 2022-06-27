import React from 'react';
import Link from 'next/link';

/* styles */
import styles from './styles.module.scss';

/**
 * Footer
 */
export const Footer: React.FC = () => (
  <div className={styles.container}>
    <ul className={styles.lists}>
      <Link href="/">
        <li className={styles.list}>HOME</li>
      </Link>
    </ul>
    {/* copyright */}
    <p className={styles.copy}>
      © &nbsp;<span>2022 shimi-chan's-tree.</span>
    </p>
  </div>
);
