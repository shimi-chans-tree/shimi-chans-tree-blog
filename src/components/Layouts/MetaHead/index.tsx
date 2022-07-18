import React from 'react';
import Head from 'next/head';
/* types */
import { MetaHeadType } from '../../../types/MetaHead';

/**
 * props
 */
type Props = {
  metaData: MetaHeadType;
};

export const MetaHead: React.FC<Props> = (props: Props) => {
  /* props */
  const { metaData } = props;

  return (
    <Head>
      <title>{metaData.title}</title>
      <meta property="og:title" content={metaData.title} />
      <meta property="og:description" content={metaData.description} />
      <meta name="keywords" content={metaData.keyword} />
      <meta property="og:type" content="blog" />
      <meta property="og:url" content={metaData.url} />
      <meta property="og:image" content={metaData.image} />
      <meta property="og:site_name" content={metaData.title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="しみちゃん" />
      <meta name="twitter:url" content={metaData.image} />
      <meta name="twitter:title" content={metaData.title} />
      <meta name="twitter:description" content={metaData.description} />
      <meta name="twitter:image" content={metaData.image} />
      <link rel="canonical" href={metaData.url} />
    </Head>
  );
};
