import { AuthenticationParameters, Configuration } from 'msal';
import { MsalAuthProvider } from './MsalAuthProvider';
export declare class MsalRedirectAuthProvider extends MsalAuthProvider {
    constructor(authProviderConfig: Configuration, authParameters: AuthenticationParameters);
    login(): void;
}
