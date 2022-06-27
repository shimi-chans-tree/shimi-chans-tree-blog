/* config */
import baseAxios from '../config/baseAxios';
/* constants */
import { initCategoryData } from '../constants/initState';
/* types */
import { CategoryType } from '../types/Category';

const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}categories/`;

export const getCategoriesApi = async () => {
  let categoryList: CategoryType = initCategoryData;

  try {
    const res = await baseAxios.get(BASE_URL);
    categoryList = res.data.contents;
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    throw new Error(`API ERROR: getCategoriesApi`);
  }
  return categoryList;
};
