/* actions */
import { setCategories, SET_CATEGORY } from '../actions';
/* types */
import { rootCategoryType } from '../types/Category';
/* constants */
import { rootCategoryData } from '../constants/initState';

type CategoryActionType = ReturnType<typeof setCategories>;

const categoryReducer = (
  state: rootCategoryType = rootCategoryData,
  action: CategoryActionType
) => {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        categories: action.payload.categories,
      };
    default:
      return { ...state };
  }
};

export default categoryReducer;
