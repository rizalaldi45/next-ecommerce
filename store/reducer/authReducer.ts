import { AUTH_ACTION } from "@/store/action/index";
import { IReducer } from "@/interface/store/IReducer";

type initState = {
  user: Object;
  isLoading: Boolean;
};

const initialState: initState = {
  user: {},
  isLoading: false,
};

const authReducer = (state = initialState, action: IReducer) => {
  switch (action.payload) {
    case AUTH_ACTION.USER_LOGIN:
      return {
        ...state,
        isLoading: true,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
