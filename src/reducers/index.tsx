import { combineReducers } from 'redux';
import blogReducer from './blogReducer';
import categoryReducer from './categoryReducer';
import profileReducer from './profileReducer';
import { rootStateType } from 'types/root';

const reducer = combineReducers<rootStateType>({
  blogItem: blogReducer,
  categoryItem: categoryReducer,
  profileItem: profileReducer,
});

export default reducer;
