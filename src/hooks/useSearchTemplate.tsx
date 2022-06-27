import React, { useContext, useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
/* logics */
import { searchBlogListLogic } from '../logic/BlogLogic';
/* contexts */
import { BlogItemType } from '../types/Blog';

export const useSearchTemplate = (blogList: BlogItemType[]) => {
  /* router */
  const router = useRouter();

  // 初期検索キーワード
  let queryText = '';
  if (router?.query?.keyword && typeof router.query.keyword === 'string') {
    queryText = router.query.keyword;
  }

  // 検索ページで動的に変更する検索キーワード
  const [searchText, setSearchText] = useState(queryText);
  // 検索キーワードにHitしたブログ記事一覧
  const [showBlogList, setShowBlogList] = useState(blogList);

  /**
   * 動的検索キーワード更新処理
   * 更新時にブログリストの検索も同時実行
   */
  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchText(event.target.value);
      setShowBlogList(searchBlogListLogic(blogList, event.target.value));
    },
    [blogList]
  );

  useEffect(() => {
    // 画面遷移時のみurlのgetで渡ってきたキーワードで検索
    setShowBlogList(searchBlogListLogic(blogList, queryText));
  }, [queryText, blogList]);

  const states = {
    searchText,
    showBlogList,
  };

  const actions = {
    onChange,
  };

  return [states, actions] as const;
};
