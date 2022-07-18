/**
 * 1ページあたりのブログ記事表示件数
 */
export const BLOG_SHOW_COUNT =
  Number(process.env.NEXT_PUBLIC_BLOG_SHOW_COUNT) || 8;

/**
 * ブログのURL
 */
export const BLOG_URL = 'https://shimi-chans-tree.vercel.app/';

/*
 * ブログのベースタイトル
 */
export const BASE_TITLE = "shimi-chan's-tree";

/**
 * metadataのdescription固定文言
 */
export const METADATA_DESCRIPTION = {
  BASIC:
    '日々の個人開発などで詰まったところなどを、備忘録的に書き連ねています。',
  POLICY: '当サイトにおける利用規約は、下記の通りです。',
  TERM: '当サイトでは、お客様からお預かりする個人情報の重要性を強く認識し、個人情報の保護に関する法律、その他の関係法令を遵守すると共に、以下に定めるプライバシーポリシーに従って、個人情報を安全かつ適切に取り扱うことを宣言いたします。',
};

/**
 * metadataのkeyword固定文言
 */
export const METADATA_KEYWORD = {
  BASIC: 'エンジニア,IT,プログラミング,フロントエンド,AWS',
};

/**
 * metadataのimage固定画像
 */
export const METADATA_IMAGE = {
  BASIC: BLOG_URL + '/assets/share_image.png',
};
