import React, { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';

export const usePagination = () => {
  /* router */
  const { query } = useRouter();
  /* locals */
  const [currentPage, setCurrentPage] = React.useState(1);

  const createPageRange = useCallback((start: number, end: number) => {
    if (end < start) return [];
    // ページの配列を作る
    return [...Array(end - start + 1)].map((_, i) => start + i);
  }, []);

  useEffect(() => {
    if (query?.page && typeof query.page === 'string') {
      setCurrentPage(Number(query.page));
    }
  }, [query.page]);

  const states = {
    currentPage,
  };

  const actions = {
    createPageRange,
  };

  return [states, actions] as const;
};
