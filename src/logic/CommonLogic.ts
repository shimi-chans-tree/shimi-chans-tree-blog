import { NextRouter } from 'next/router';

/* constants */
import {
  BLOG_SHOW_COUNT,
  BLOG_URL,
  BASE_TITLE,
  METADATA_DESCRIPTION,
  METADATA_IMAGE,
} from '../constants/config';

import { ROUTER_PATH_NAME } from '../constants/navigation';

export const createPageArrayLogic = (totalCount: number) => {
  return [...Array(Math.floor(totalCount / BLOG_SHOW_COUNT) + 1)].map(
    (_, i) => i + 1
  );
};

export const selectMetaDataTitleLogic = ({
  router,
  title,
  errorFlg,
}: {
  router: NextRouter;
  title?: string;
  errorFlg?: boolean;
}): string => {
  // エラー画面の場合
  if (errorFlg) return `NOT FOUND | ${BASE_TITLE}`;

  switch (router.pathname) {
    case ROUTER_PATH_NAME.CATEGORY:
      return `「${title}」の記事一覧 | ${BASE_TITLE}`;
    case ROUTER_PATH_NAME.BLOG_ITEM:
    case ROUTER_PATH_NAME.SEARCH:
      return `${title} | ${BASE_TITLE}`;
    default:
      return BASE_TITLE;
  }
};

export const selectMetaDataDescriptionLogic = ({
  router,
  description,
  errorFlg,
}: {
  router: NextRouter;
  description?: string;
  errorFlg?: boolean;
}): string => {
  // エラー画面の場合
  if (errorFlg) return METADATA_DESCRIPTION.BASIC;

  switch (router.pathname) {
    case ROUTER_PATH_NAME.BLOG_ITEM:
      return description ? description : '';
    default:
      return METADATA_DESCRIPTION.BASIC;
  }
};

export const selectMetaDataImageLogic = ({
  router,
  image,
  errorFlg,
}: {
  router: NextRouter;
  image?: string;
  errorFlg?: boolean;
}): string => {
  // エラー画面の場合
  if (errorFlg) return METADATA_IMAGE.BASIC;

  switch (router.pathname) {
    case ROUTER_PATH_NAME.BLOG_ITEM:
      return image ? image : '';
    default:
      return METADATA_IMAGE.BASIC;
  }
};

export const selectMetaDataUrlLogic = ({
  router,
  errorFlg,
}: {
  router: NextRouter;
  errorFlg?: boolean;
}) => {
  // エラー画面の場合
  if (errorFlg) return BLOG_URL;

  switch (router.pathname) {
    case ROUTER_PATH_NAME.TOP:
      return BLOG_URL;
    case ROUTER_PATH_NAME.SEARCH:
      return BLOG_URL + router.pathname;
    default:
      return BLOG_URL + router.asPath;
  }
};
