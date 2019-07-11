import { AnyAction } from 'redux';
import { IAccountInfo, IAuthProvider } from './Interfaces';
export declare const AAD_LOGIN_SUCCESS: string;
export declare const AAD_LOGOUT_SUCCESS: string;
export declare const AAD_PROVIDER_CREATED: string;
export declare const loginSuccessful: (data: IAccountInfo) => AnyAction;
export declare const logoutSuccessful: () => AnyAction;
export declare const providerCreated: (data: IAuthProvider) => AnyAction;
