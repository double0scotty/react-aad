'use strict';
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
Object.defineProperty(exports, '__esModule', { value: true });
var msal_1 = require('msal');
var Interfaces_1 = require('./Interfaces');
var logger_1 = require('./logger');
var IDTokenKey = 'msal.idtoken';
var StorageLocations = {
  localStorage: 'localStorage',
  sessionStorage: 'sessionStorage',
};
var MsalAuthProvider = /** @class */ (function() {
  function MsalAuthProvider(authProviderConfig, authParameters) {
    var _this = this;
    this.acquireTokens = function(idToken) {
      _this.UserAgentApplication.acquireTokenSilent(_this.authParameters).then(
        function(response) {
          _this.saveAccountInfo(response.accessToken, idToken, _this.UserAgentApplication.getAccount());
        },
        function(tokenSilentError) {
          _this.setAuthenticationState(Interfaces_1.AuthenticationState.Unauthenticated);
          logger_1.Logger.error('token silent error; ' + tokenSilentError);
          _this.UserAgentApplication.acquireTokenPopup(_this.authParameters).then(
            function(response) {
              _this.saveAccountInfo(response.accessToken, idToken, _this.UserAgentApplication.getAccount());
            },
            function(tokenPopupError) {
              _this.setAuthenticationState(Interfaces_1.AuthenticationState.Unauthenticated);
              logger_1.Logger.error('token popup error; ' + tokenPopupError);
            },
          );
        },
      );
    };
    this.checkIfUserAuthenticated = function() {
      var cacheOptions = _this.UserAgentApplication.getCurrentConfiguration().cache;
      var cacheLocation = cacheOptions && cacheOptions.cacheLocation ? cacheOptions.cacheLocation : 'sessionStorage';
      if (_this.isLoggedIn()) {
        var idToken = _this.getCacheItem(cacheLocation, IDTokenKey);
        _this.acquireTokens(idToken);
      } else if (_this.UserAgentApplication.getLoginInProgress()) {
        _this.setAuthenticationState(Interfaces_1.AuthenticationState.Authenticating);
      } else {
        _this.setAuthenticationState(Interfaces_1.AuthenticationState.Unauthenticated);
      }
    };
    // a person is logged in if UserAgentApplication has a current user, if there is an idtoken in the cache, and if the token in the cache is not expired
    this.isLoggedIn = function() {
      var cacheOptions = _this.UserAgentApplication.getCurrentConfiguration().cache;
      var cacheLocation = cacheOptions && cacheOptions.cacheLocation ? cacheOptions.cacheLocation : 'sessionStorage';
      var potentialLoggedInUser = _this.UserAgentApplication.getAccount();
      if (potentialLoggedInUser) {
        var idToken = _this.getCacheItem(cacheLocation, IDTokenKey);
        var oldIDToken = potentialLoggedInUser.idToken;
        return idToken && !_this.isTokenExpired(oldIDToken);
      }
      return false;
    };
    this.isTokenExpired = function(token) {
      if (token.exp) {
        var expirationInMs = token.exp * 1000; // AD returns in seconds
        if (Date.now() < expirationInMs) {
          // id token isn't expired
          return false;
        }
      }
      return true;
    };
    this.saveAccountInfo = function(accessToken, idToken, msalAccount) {
      var user = {
        account: msalAccount,
        jwtAccessToken: accessToken,
        jwtIdToken: idToken,
      };
      _this.accountInfo = user;
      _this.setAuthenticationState(Interfaces_1.AuthenticationState.Authenticated);
    };
    this.getCacheItem = function(storageLocation, itemKey) {
      if (storageLocation === StorageLocations.localStorage) {
        return localStorage.getItem(itemKey);
      } else if (storageLocation === StorageLocations.sessionStorage) {
        return sessionStorage.getItem(itemKey);
      } else {
        throw new Error('unrecognized storage location');
      }
    };
    this.config = authProviderConfig;
    this.authParameters = authParameters;
    this.UserAgentApplication = new msal_1.UserAgentApplication(authProviderConfig);
    this.checkIfUserAuthenticated();
  }
  MsalAuthProvider.prototype.logout = function() {
    this.UserAgentApplication.logout();
  };
  MsalAuthProvider.prototype.getAccountInfo = function() {
    return this.accountInfo;
  };
  MsalAuthProvider.prototype.getToken = function() {
    var _this = this;
    return new Promise(function(resolve, reject) {
      _this.UserAgentApplication.acquireTokenSilent(_this.authParameters).then(
        function(response) {
          _this.saveAccountInfo(
            response.accessToken,
            response.idToken.rawIdToken,
            _this.UserAgentApplication.getAccount(),
          );
          resolve(response.accessToken);
        },
        function(tokenSilentError) {
          _this.setAuthenticationState(Interfaces_1.AuthenticationState.Unauthenticated);
          logger_1.Logger.error('token silent error; ' + tokenSilentError);
          _this.UserAgentApplication.acquireTokenPopup(_this.authParameters).then(
            function(response) {
              _this.saveAccountInfo(
                response.accessToken,
                response.idToken.rawIdToken,
                _this.UserAgentApplication.getAccount(),
              );
              resolve(response.accessToken);
            },
            function(tokenPopupError) {
              _this.setAuthenticationState(Interfaces_1.AuthenticationState.Unauthenticated);
              logger_1.Logger.error('token popup error; ' + tokenPopupError);
            },
          );
        },
      );
    });
  };
  MsalAuthProvider.prototype.setAuthenticationState = function(state) {
    if (this.authenticationState !== state) {
      this.authenticationState = state;
      if (this.onAuthenticationStateChanged) {
        if (this.authenticationState === Interfaces_1.AuthenticationState.Authenticated) {
          this.onAuthenticationStateChanged(this.authenticationState, this.accountInfo);
        } else {
          this.onAuthenticationStateChanged(this.authenticationState);
        }
      }
    }
  };
  return MsalAuthProvider;
})();
exports.MsalAuthProvider = MsalAuthProvider;
//# sourceMappingURL=MsalAuthProvider.js.map
