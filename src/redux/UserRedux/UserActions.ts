import { IUser } from "../../models/UserModel";

export enum UserActions {
  GET_USER = "GET_USER",
  GET_USER_SUCCESS = "GET_USER_SUCCESS",
  GET_USER_FAIL = "GET_USER_FAIL",
}

export interface IGetUser {
  type: typeof UserActions.GET_USER;
  payload: string;
}
export interface IGetUserSuccess {
  type: typeof UserActions.GET_USER_SUCCESS;
  payload: IUser;
}
export interface IGetUserFail {
  type: typeof UserActions.GET_USER_FAIL;
  payload: any;
}

export const getUserAction = (userID: string): IGetUser => ({
  type: UserActions.GET_USER,
  payload: userID,
});
export const getUserSuccessAction = (payload: IUser): IGetUserSuccess => ({
  type: UserActions.GET_USER_SUCCESS,
  payload: payload,
});
export const getUserFailAction = (error: any): IGetUserFail => ({
  type: UserActions.GET_USER_FAIL,
  payload: error,
});
