import React, { useContext } from 'react';
/* components */
import BaseLayout from '../../Layouts/BaseLayout';
import { PageTitle } from '../../common/atoms/PageTitle';
import { SearchInputForm } from '../../common/molecules/SearchInputForm';
import { SearchBlogItem } from './organisms/SearchBlogItem';
import { BlogItemResponsive } from '../../common/molecules/BlogItemResponsive';
import AppContext from '../../../contexts/AppContext';

/* hooks */
import { useSearchTemplate } from '../../../hooks/useSearchTemplate';
import { useMeta } from 'hooks/useMeta';
/* styles*/
import styles from './styles.module.scss';
import { BlogItemType } from 'types/Blog';

/**
 * props
 */
type Props = {
  breadName: string;
};

export const SearchTemplate: React.FC<Props> = (props) => {
  const { breadName } = props;
  const { state } = useContext(AppContext);
  const { blogList } = state.blogItem;
  /* hooks */

  const [states, actions] = useSearchTemplate(blogList);

  const [{ metaData }] = useMeta({ title: breadName });

  return (
    <BaseLayout metaData={metaData}>
      <div className={styles.container}>
        <PageTitle title="検索結果" />
        {/* 検索フォーム */}
        <div className={styles.input}>
          <SearchInputForm
            text={states.searchText}
            placeholder="search"
            onChange={actions.onChange}
          />
        </div>
        {/* 検索フォーム レスポンシブ*/}
        <div className={styles.input__responsive}>
          <SearchInputForm
            text={states.searchText}
            placeholder="search"
            size={32}
            onChange={actions.onChange}
          />
        </div>

        {/* 検索フォーム　sp */}
        <div className={styles.input__sp}>
          <SearchInputForm
            text={states.searchText}
            placeholder="search"
            size={24}
            onChange={actions.onChange}
          />
        </div>

        {/* 検索結果一覧 */}
        <div className={styles.list}>
          {states.showBlogList.length > 0 &&
            states.showBlogList.map((blog: BlogItemType) => (
              <SearchBlogItem key={blog.id} blogItem={blog} />
            ))}

          {states.showBlogList.length === 0 && (
            <div className={styles.unknown}>
              <p>検索したキーワードは記事がありませんでした。</p>
              <p>別のキーワードで検索してみてください。</p>
            </div>
          )}
        </div>

        {/* 検索結果一覧 レスポンシブ */}
        <div className={styles.list__responsive}>
          {states.showBlogList.length > 0 &&
            states.showBlogList.map((blog: BlogItemType) => (
              <BlogItemResponsive key={blog.id} blogItem={blog} />
            ))}

          {states.showBlogList.length === 0 && (
            <div className={styles.unknown}>
              <p>検索したキーワードは記事がありませんでした。</p>
              <p>別のキーワードで検索してみてください。</p>
            </div>
          )}
        </div>
      </div>
    </BaseLayout>
  );
};
