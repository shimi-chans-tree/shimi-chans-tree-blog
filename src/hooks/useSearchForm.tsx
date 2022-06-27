import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/router';

export const useSearchForm = () => {
  /* router */
  const router = useRouter();

  /* local */
  const [searchText, setSearchText] = useState('');

  /**
   * 検索キーワード変更処理
   */
  const onChangeSearchText = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchText(event.target.value);
    },
    []
  );

  /**
   * 検索フォーム キーアップ処理
   */
  const onKeyUpSearchBlog = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      // 検索キーワードがあり、Enterをクリックした場合、検索ページに遷移
      if (event.key === 'Enter' && searchText !== '') {
        router.push({
          pathname: '/search',
          query: { keyword: searchText },
        });
      }
    },
    [router, searchText]
  );

  const states = {
    searchText,
  };

  const actions = {
    onChangeSearchText,
    onKeyUpSearchBlog,
  };

  return [states, actions] as const;
};
