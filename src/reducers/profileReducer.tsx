/* actions */
import { SET_PROFILE, setProfile } from '../actions';
/* types */
import { ProfileType, rootProfileType } from '../types/Profile';
/* constants */
import { rootProfileState } from '../constants/initState';

export type ProfileStateType = {
  profile: ProfileType;
};

type ProfileActionType = ReturnType<typeof setProfile>;

// Reducer --------------
const profileReducer = (
  state: rootProfileType = rootProfileState,
  action: ProfileActionType
) => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        profile: action.payload.profile,
      };
    default:
      return {
        ...state,
      };
  }
};

export default profileReducer;
