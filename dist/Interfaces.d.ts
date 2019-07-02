import { Account } from 'msal';
export declare type AccountInfoCallback = (token: IAccountInfo) => void;
export declare enum LoginType {
    Popup = 0,
    Redirect = 1
}
export declare enum AuthenticationState {
    Unauthenticated = 0,
    Authenticating = 1,
    Authenticated = 2
}
export interface IAccountInfo {
    jwtAccessToken: string;
    jwtIdToken: string;
    account: Account;
}
export interface IAuthProviderFactory {
    getAuthProvider(): IAuthProvider;
}
export interface IAuthProvider {
    onAuthenticationStateChanged?: (state: AuthenticationState, account?: IAccountInfo) => void;
    authenticationState: AuthenticationState;
    getAccountInfo(): IAccountInfo;
    login(): void;
    logout(): void;
}
