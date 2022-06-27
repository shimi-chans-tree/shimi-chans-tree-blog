/**
 * layouts/Aside/CategoryArea
 * @package Component
 */
import React, { useContext } from 'react';
import Link from 'next/link';
/* components */
import { BasicAsidePartsArea } from '../BasicAsidePartsArea';
/* contexts */
import AppContext from '../../../../contexts/AppContext';
/* styles */
import styles from './styles.module.scss';

/**
 * CategoryArea
 * @returns
 */
export const CategoryArea: React.FC = () => {
  /* contexts */
  const { state } = useContext(AppContext);
  const categories = state.categoryItem.categories;
  return (
    <BasicAsidePartsArea title="カテゴリー">
      <ul className={styles.container}>
        {categories &&
          categories.length > 0 &&
          categories.map(
            (category: { id: number; name: string }, index: number) => {
              return (
                <li className={styles.list} key={`${category.id}_${index}`}>
                  <Link href={`/category/${category.id}/1`}>
                    <div className={styles.category}>
                      <span>{category.name}</span>
                    </div>
                  </Link>
                </li>
              );
            }
          )}
      </ul>
    </BasicAsidePartsArea>
  );
};
