import { LoadingStateEnum } from "../../models/SharedModel";
import { IUser } from "../../models/UserModel";
import { IDefaultAction } from "../RootReducer";
import { UserActions } from "./UserActions";

interface IUserReducer {
  user?: IUser;
  userLoadingState: LoadingStateEnum;
}

const initialUserReducerState: IUserReducer = {
  user: undefined,
  userLoadingState: LoadingStateEnum.InitialState,
};

const userReducer = (
  state = initialUserReducerState,
  action: IDefaultAction
): IUserReducer => {
  switch (action.type) {
    case UserActions.GET_USER:
      return {
        ...state,
        user: action.payload,
        userLoadingState: LoadingStateEnum.LoadingState,
      };
    case UserActions.GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        userLoadingState: LoadingStateEnum.InitialState,
      };
    case UserActions.GET_USER_FAIL:
      return {
        ...state,
        userLoadingState: LoadingStateEnum.ErrorState,
      };

    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
