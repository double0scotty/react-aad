//
// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license.
//
// MIT License:
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED ""AS IS"", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//

import { AnyAction } from 'redux';
import { IAccountInfo, IAuthProvider } from './Interfaces';

export const AAD_LOGIN_SUCCESS: string = 'AAD_LOGIN_SUCCESS';
export const AAD_LOGOUT_SUCCESS: string = 'AAD_LOGOUT_SUCCESS';
export const AAD_PROVIDER_CREATED: string = 'AAD_PROVIDER_CREATED';

export const loginSuccessful = (data: IAccountInfo): AnyAction => {
	return {
		payload: data,
		type: AAD_LOGIN_SUCCESS
	}
}

export const logoutSuccessful = (): AnyAction => {
	return {
		type: AAD_LOGOUT_SUCCESS
	}
}

export const providerCreated = (data: IAuthProvider): AnyAction => {
	return {
		payload: data,
		type: AAD_PROVIDER_CREATED
	}
}