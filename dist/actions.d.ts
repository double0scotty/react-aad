import { AnyAction } from 'redux';
import { IAccountInfo } from './Interfaces';
export declare const AAD_LOGIN_SUCCESS: string;
export declare const AAD_LOGOUT_SUCCESS: string;
export declare const loginSuccessful: (data: IAccountInfo) => AnyAction;
export declare const logoutSuccessful: () => AnyAction;
