import React from 'react';
/* components */
import { SearchInputForm } from '../../common/molecules/SearchInputForm';
import { ProfileArea } from './ProfileArea';
import { ProfileAreaResponsive } from './ProfileAreaResponsive';
import { CategoryArea } from './CategoryArea';
/* hooks */
import { useSearchForm } from '../../../hooks/useSearchForm';
/* styles */
import styles from './styles.module.scss';

export const Aside: React.FC = () => {
  /* hooks */
  const [{ searchText }, { onChangeSearchText, onKeyUpSearchBlog }] =
    useSearchForm();

  return (
    <aside className={styles.aside}>
      {/* 検索フォーム */}
      <div className={styles.search}>
        <SearchInputForm
          text={searchText}
          placeholder="search"
          onChange={onChangeSearchText}
          onKeyUp={onKeyUpSearchBlog}
        />
      </div>

      {/* プロフィールエリア */}
      <div className={styles.profile}>
        <ProfileArea />
      </div>

      {/* プロフィールエリア レスポンシブ */}
      <div className={styles.profile__responsive}>
        <ProfileAreaResponsive />
      </div>

      {/* 検索フォーム レスポンシブ */}
      <div className={styles.search__responsive}>
        <SearchInputForm
          text={searchText}
          placeholder="search"
          size={32}
          onChange={onChangeSearchText}
          onKeyUp={onKeyUpSearchBlog}
        />
      </div>

      {/* 検索フォーム レスポンシブ */}
      <div className={styles.search__sp}>
        <SearchInputForm
          text={searchText}
          placeholder="search"
          size={20}
          onChange={onChangeSearchText}
          onKeyUp={onKeyUpSearchBlog}
        />
      </div>

      {/* カテゴリーエリア */}
      <div className={styles.parts}>
        <CategoryArea />
      </div>
    </aside>
  );
};
