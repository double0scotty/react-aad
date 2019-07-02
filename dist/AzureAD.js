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
var __extends =
  (this && this.__extends) ||
  (function() {
    var extendStatics = function(d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(d, b) {
            d.__proto__ = b;
          }) ||
        function(d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
    };
  })();
Object.defineProperty(exports, '__esModule', { value: true });
var React = require('react');
var actions_1 = require('./actions');
var Interfaces_1 = require('./Interfaces');
var AzureAD = /** @class */ (function(_super) {
  __extends(AzureAD, _super);
  function AzureAD(props) {
    var _this = _super.call(this, props) || this;
    _this.resetAccountInfo = function() {
      if (_this.props.reduxStore) {
        _this.props.reduxStore.dispatch(actions_1.logoutSuccessful());
      }
    };
    _this.updateAuthenticationState = function(state, user) {
      if (user) {
        _this.dispatchToProvidedReduxStore(user);
      }
      _this.setState(
        {
          authenticationState: state,
        },
        function() {
          if (user && _this.props.accountInfoCallback) {
            _this.props.accountInfoCallback(user);
          }
        },
      );
    };
    _this.login = function() {
      _this.authProvider.login();
    };
    _this.logout = function() {
      if (_this.state.authenticationState !== Interfaces_1.AuthenticationState.Authenticated) {
        return;
      }
      _this.resetAccountInfo();
      _this.authProvider.logout();
    };
    _this.authProvider = _this.props.provider.getAuthProvider();
    _this.authProvider.onAuthenticationStateChanged = _this.updateAuthenticationState;
    _this.state = { authenticationState: _this.authProvider.authenticationState };
    if (
      _this.props.forceLogin &&
      _this.state.authenticationState === Interfaces_1.AuthenticationState.Unauthenticated
    ) {
      _this.login();
    }
    return _this;
  }
  AzureAD.prototype.render = function() {
    switch (this.state.authenticationState) {
      case Interfaces_1.AuthenticationState.Authenticated:
        if (this.props.authenticatedFunction) {
          return this.props.authenticatedFunction(this.logout) || null;
        } else {
          return this.props.children || null;
        }
      case Interfaces_1.AuthenticationState.Unauthenticated:
        if (this.props.unauthenticatedFunction) {
          return this.props.unauthenticatedFunction(this.login) || null;
        } else {
          return null;
        }
      case Interfaces_1.AuthenticationState.Authenticating:
      // TODO: Add loading callback, componentDidMount will acquire tokens and then re-render
      default:
        return null;
    }
  };
  AzureAD.prototype.dispatchToProvidedReduxStore = function(data) {
    if (this.props.reduxStore) {
      this.props.reduxStore.dispatch(actions_1.loginSuccessful(data));
    }
  };
  return AzureAD;
})(React.Component);
exports.AzureAD = AzureAD;
//# sourceMappingURL=AzureAD.js.map
