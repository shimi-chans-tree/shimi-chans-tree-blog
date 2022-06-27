/* apis */
import { getProfileByApi } from '../../apis/ProfileApi';
/* constants */
import { initProfileState } from '../../constants/initState';
/* types */
import { ProfileType } from '../../types/Profile';

describe('[Api] getProfileByApi test', () => {
  let profileData: ProfileType;
  describe('[function]getProfileByApi', () => {
    // モック化
    const apiMock = jest.fn(getProfileByApi);

    beforeEach(() => {
      profileData = initProfileState;
    });

    test('データを取得できること。', async () => {
      const apiMockFunc = apiMock.mockResolvedValue(profileData);
      expect(await apiMockFunc()).toEqual(profileData);
    });
    test('例外が発生すること。', async () => {
      const apiMockFunc = apiMock.mockReturnValue(Promise.reject('error'));
      try {
        await apiMockFunc();
      } catch (error) {
        expect(error).toMatch('error');
      }
    });
  });
});
