/* config */
import baseAxios from '../config/baseAxios';
/* constants */
import { initProfileState } from '../constants/initState';
/* types */
import { ProfileType } from '../types/Profile';
/**
 * constant
 */
const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}profile/`;

export const getProfileByApi = async (): Promise<ProfileType> => {
  let profile = initProfileState;
  try {
    const res = await baseAxios.get(BASE_URL);
    if (res?.data) {
      profile = res.data;
    }
  } catch (err) {
    throw new Error(`API ERROR: getProfileByApi`);
  }
  return profile;
};
