import { AuthenticationParameters, Configuration } from 'msal';
import { MsalAuthProvider } from './MsalAuthProvider';
export declare class MsalPopupAuthProvider extends MsalAuthProvider {
    constructor(authProviderConfig: Configuration, authParameters: AuthenticationParameters);
    login(authParameters?: AuthenticationParameters): void;
}
