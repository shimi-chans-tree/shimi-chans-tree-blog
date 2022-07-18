import { useState } from 'react';
import { useRouter } from 'next/router';
/* logics */
import {
  selectMetaDataTitleLogic,
  selectMetaDataDescriptionLogic,
  selectMetaDataImageLogic,
  selectMetaDataUrlLogic,
} from '../logic/CommonLogic';
/* constants */
import { METADATA_KEYWORD } from '../constants/config';
/* types */
import { MetaHeadType } from '../types/MetaHead';

/**
 * interface
 */
interface HooksParam {
  title?: string;
  description?: string;
  imagePath?: string;
  errorFlg?: boolean;
}

export const useMeta = (param: HooksParam) => {
  const { title, description, errorFlg } = param;

  const router = useRouter();

  const [metaData] = useState<MetaHeadType>({
    title: selectMetaDataTitleLogic({ router, title, errorFlg }),
    description: selectMetaDataDescriptionLogic({
      router,
      description,
      errorFlg,
    }),
    keyword: METADATA_KEYWORD.BASIC,
    image: selectMetaDataImageLogic({ router, errorFlg }),
    url: selectMetaDataUrlLogic({ router, errorFlg }),
  });

  const state = {
    metaData,
  };

  return [state];
};
