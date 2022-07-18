/**
 * @jest-environment jsdom
 */
import { renderHook } from '@testing-library/react-hooks';
/* hooks */
import { useMeta } from '../../hooks/useMeta';
/* logics */
import * as commonLogic from '../../logic/CommonLogic';
/* constants */
import { METADATA_KEYWORD } from '../../constants/config';
/* types */
import { MetaHeadType } from '../../types/MetaHead';

let useRouterSpy: jest.SpyInstance<unknown>;

describe('[Hook]useMetaData test', () => {
  beforeAll(() => {
    useRouterSpy = jest.spyOn(require('next/router'), 'useRouter');
    useRouterSpy.mockImplementation(() => ({}));
  });
  describe('[state]metaData', () => {
    beforeEach(() => {
      jest
        .spyOn(commonLogic, 'selectMetaDataTitleLogic')
        .mockReturnValue('Test Title');
      jest
        .spyOn(commonLogic, 'selectMetaDataDescriptionLogic')
        .mockReturnValue('Test Description');
      jest
        .spyOn(commonLogic, 'selectMetaDataImageLogic')
        .mockReturnValue('Test.png');
      jest
        .spyOn(commonLogic, 'selectMetaDataUrlLogic')
        .mockReturnValue('http://test.com');
    });
    test('metaDataを取得できること', () => {
      const expectObject: MetaHeadType = {
        title: 'Test Title',
        description: 'Test Description',
        keyword: METADATA_KEYWORD.BASIC,
        image: 'Test.png',
        url: 'http://test.com',
      };

      const { result } = renderHook(() => useMeta({}));
      expect(result.current[0].metaData).toEqual(expectObject);
    });
  });
});
