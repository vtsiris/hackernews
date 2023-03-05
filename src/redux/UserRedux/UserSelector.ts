import { createSelector } from "reselect";
import { IUser } from "../../models/UserModel";
import { AppState } from "../RootReducer";

const getUser = (state: AppState): IUser | undefined => {
  return state?.userReducer?.user;
};

export const getUserSelector = createSelector(
  getUser,
  (user?: IUser): IUser | undefined => user
);
