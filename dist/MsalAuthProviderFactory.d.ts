import { AuthenticationParameters, Configuration } from 'msal';
import { IAuthProvider, IAuthProviderFactory, LoginType } from './Interfaces';
export declare class MsalAuthProviderFactory implements IAuthProviderFactory {
    private config;
    private authParameters;
    private type;
    constructor(config: Configuration, authParams: AuthenticationParameters, type?: LoginType);
    getAuthProvider(): IAuthProvider;
}
