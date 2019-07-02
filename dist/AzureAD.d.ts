import * as React from 'react';
import { Store } from 'redux';
import { AccountInfoCallback, AuthenticationState, IAccountInfo, IAuthProviderFactory } from './Interfaces';
declare type UnauthenticatedFunction = (login: LoginFunction) => JSX.Element;
declare type AuthenticatedFunction = (logout: LogoutFunction) => JSX.Element;
declare type LoginFunction = () => void;
declare type LogoutFunction = () => void;
interface IProps {
    provider: IAuthProviderFactory;
    unauthenticatedFunction?: UnauthenticatedFunction;
    authenticatedFunction?: AuthenticatedFunction;
    accountInfoCallback?: AccountInfoCallback;
    reduxStore?: Store;
    forceLogin?: boolean;
}
interface IState {
    authenticationState: AuthenticationState;
}
declare class AzureAD extends React.Component<IProps, IState> {
    private authProvider;
    constructor(props: IProps);
    render(): {} | null;
    resetAccountInfo: () => void;
    updateAuthenticationState: (state: AuthenticationState, user?: IAccountInfo | undefined) => void;
    private login;
    private logout;
    private dispatchToProvidedReduxStore;
}
export { AzureAD };
