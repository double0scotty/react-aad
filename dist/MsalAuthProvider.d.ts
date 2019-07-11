import { AuthenticationParameters, Configuration, UserAgentApplication } from 'msal';
import { AuthenticationState, IAccountInfo, IAuthProvider } from './Interfaces';
export declare abstract class MsalAuthProvider implements IAuthProvider {
    onAuthenticationStateChanged: (state: AuthenticationState, user?: IAccountInfo) => void;
    authenticationState: AuthenticationState;
    UserAgentApplication: UserAgentApplication;
    protected config: Configuration;
    protected authParameters: AuthenticationParameters;
    protected accountInfo: IAccountInfo;
    constructor(authProviderConfig: Configuration, authParameters: AuthenticationParameters);
    abstract login(): void;
    logout(): void;
    getAccountInfo(): IAccountInfo;
    getToken(): Promise<string>;
    protected acquireTokens: (idToken: string) => void;
    private checkIfUserAuthenticated;
    private isLoggedIn;
    private isTokenExpired;
    private saveAccountInfo;
    private getCacheItem;
    private setAuthenticationState;
}
