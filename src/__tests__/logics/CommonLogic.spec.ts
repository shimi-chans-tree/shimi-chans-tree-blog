/* logics */
import { NextRouter } from 'next/router';
import {
  BASE_TITLE,
  BLOG_URL,
  METADATA_DESCRIPTION,
  METADATA_IMAGE,
} from '../../constants/config';
import { ROUTER_PATH_NAME } from '../../constants/navigation';
import {
  createPageArrayLogic,
  selectMetaDataDescriptionLogic,
  selectMetaDataImageLogic,
  selectMetaDataTitleLogic,
  selectMetaDataUrlLogic,
} from '../../logic/CommonLogic';

describe('CommonLogic test', () => {
  describe('[function]createPageArrayLogic', () => {
    test('正しく配列が返却されること(記事数が10で表示数が8の時、ページ数は2となる)', () => {
      const expectArray = [1, 2];
      const totalCount = 10;
      expect(createPageArrayLogic(totalCount)).toEqual(expectArray);
    });
  });
});

describe('[function]selectMetaDataTitleLogic', () => {
  test('「カテゴリー」ページの場合、想定した文字列が返却される。', () => {
    const router = {
      pathname: ROUTER_PATH_NAME.CATEGORY,
    } as NextRouter;
    const title = 'React';

    const expectResult = `「${title}」の記事一覧 | ${BASE_TITLE}`;
    expect(selectMetaDataTitleLogic({ router, title })).toBe(expectResult);
  });

  test('「ブログ記事」ページの場合、想定した文字列が返却される。', () => {
    const router = {
      pathname: ROUTER_PATH_NAME.BLOG_ITEM,
    } as NextRouter;
    const title = 'Reactの記事';

    const expectResult = `${title} | ${BASE_TITLE}`;
    expect(selectMetaDataTitleLogic({ router, title })).toBe(expectResult);
  });

  test('「検索結果」ページの場合、想定した文字列が返却される。', () => {
    const router = {
      pathname: ROUTER_PATH_NAME.SEARCH,
    } as NextRouter;
    const title = '検索結果';

    const expectResult = `${title} | ${BASE_TITLE}`;
    expect(selectMetaDataTitleLogic({ router, title })).toBe(expectResult);
  });

  test('「TOP」ページの場合、想定した文字列が返却される。', () => {
    const router = {
      pathname: ROUTER_PATH_NAME.TOP,
    } as NextRouter;

    const expectResult = BASE_TITLE;
    expect(selectMetaDataTitleLogic({ router })).toBe(expectResult);
  });

  test('errorFlgがtrueの場合、「NOTFOUND」を含むタイトルの文字列が返却される。', () => {
    const router = {
      pathname: ROUTER_PATH_NAME.TOP,
    } as NextRouter;
    const title = 'トップ';
    const errorFlg = true;

    const expectResult = `NOT FOUND | ${BASE_TITLE}`;
    expect(selectMetaDataTitleLogic({ router, title, errorFlg })).toBe(
      expectResult
    );
  });
});

describe('[function]selectMetaDataDescriptionLogic', () => {
  test('「ブログ記事」ページの場合、想定した文字列が返却される。', () => {
    const router = {
      pathname: ROUTER_PATH_NAME.BLOG_ITEM,
    } as NextRouter;
    const description = 'ブログ記事です。';

    const expectResult = description;
    expect(selectMetaDataDescriptionLogic({ router, description })).toBe(
      expectResult
    );
  });

  test('「TOP」ページの場合、想定した文字列が返却される。', () => {
    const router = {
      pathname: ROUTER_PATH_NAME.TOP,
    } as NextRouter;

    const expectResult = METADATA_DESCRIPTION.BASIC;
    expect(selectMetaDataDescriptionLogic({ router })).toBe(expectResult);
  });

  test('errorFlgがtrueの場合', () => {
    const router = {
      pathname: ROUTER_PATH_NAME.TOP,
    } as NextRouter;
    const description = 'ブログ記事です。';
    const errorFlg = true;

    const expectResult = METADATA_DESCRIPTION.BASIC;
    expect(
      selectMetaDataDescriptionLogic({ router, description, errorFlg })
    ).toBe(expectResult);
  });
});

describe('[function]selectMetaDataImageLogic', () => {
  test('「ブログ記事」ページの場合、想定した文字列が返却される。', () => {
    const router = {
      pathname: ROUTER_PATH_NAME.BLOG_ITEM,
    } as NextRouter;
    const image = 'test.png';

    const expectResult = image;
    expect(selectMetaDataImageLogic({ router, image })).toBe(expectResult);
  });

  test('「TOP」ページの場合、想定した文字列が返却される。', () => {
    const router = {
      pathname: ROUTER_PATH_NAME.TOP,
    } as NextRouter;

    const expectResult = METADATA_IMAGE.BASIC;
    expect(selectMetaDataImageLogic({ router })).toBe(expectResult);
  });

  test('errorFlgがtrueの場合', () => {
    const router = {
      pathname: ROUTER_PATH_NAME.TOP,
    } as NextRouter;
    const errorFlg = true;

    const expectResult = METADATA_IMAGE.BASIC;
    expect(selectMetaDataImageLogic({ router, errorFlg })).toBe(expectResult);
  });
});

describe('[function]selectMetaDataImageLogic', () => {
  test('「TOP」ページの場合、想定した文字列が返却される。', () => {
    const router = {
      pathname: ROUTER_PATH_NAME.TOP,
    } as NextRouter;
    // 予測値
    const expectResult = BLOG_URL;
    expect(selectMetaDataUrlLogic({ router })).toBe(expectResult);
  });

  test('「検索」ページの場合、想定した文字列が返却される。', () => {
    const router = {
      pathname: ROUTER_PATH_NAME.SEARCH,
    } as NextRouter;

    const expectResult = BLOG_URL + router.pathname;
    expect(selectMetaDataUrlLogic({ router })).toBe(expectResult);
  });

  test('「TOP」と「検索」ページ以外の場合、想定した文字列が返却される。', () => {
    const router = {
      pathname: ROUTER_PATH_NAME.CATEGORY,
      asPath: ROUTER_PATH_NAME.CATEGORY,
    } as NextRouter;

    const expectResult = BLOG_URL + router.asPath;
    expect(selectMetaDataUrlLogic({ router })).toBe(expectResult);
  });

  test('errorFlgがtrueの場合', () => {
    const router = {
      pathname: ROUTER_PATH_NAME.CATEGORY,
    } as NextRouter;
    const errorFlg = true;

    const expectResult = BLOG_URL;
    expect(selectMetaDataUrlLogic({ router, errorFlg })).toBe(expectResult);
  });
});

describe('[function]selectMetaDataUrlLogic', () => {
  test('「TOP」ページの場合TOPのURLが返却される。', () => {
    const router = {
      pathname: ROUTER_PATH_NAME.TOP,
    } as NextRouter;

    const expectResult = BLOG_URL;
    expect(selectMetaDataUrlLogic({ router })).toBe(expectResult);
  });

  test('「SEARCH」ページの場合SEARCHのURLが返却される。', () => {
    const router = {
      pathname: ROUTER_PATH_NAME.SEARCH,
    } as NextRouter;

    const expectResult = BLOG_URL + router.pathname;
    expect(selectMetaDataUrlLogic({ router })).toBe(expectResult);
  });

  test('errorFlgがtrueの場合', () => {
    const router = {
      pathname: ROUTER_PATH_NAME.CATEGORY,
    } as NextRouter;
    const errorFlg = true;

    const expectResult = BLOG_URL;
    expect(selectMetaDataUrlLogic({ router, errorFlg })).toBe(expectResult);
  });
});
