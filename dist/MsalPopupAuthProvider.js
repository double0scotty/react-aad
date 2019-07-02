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
var logger_1 = require('./logger');
var MsalAuthProvider_1 = require('./MsalAuthProvider');
var MsalPopupAuthProvider = /** @class */ (function(_super) {
  __extends(MsalPopupAuthProvider, _super);
  function MsalPopupAuthProvider(authProviderConfig, authParameters) {
    return _super.call(this, authProviderConfig, authParameters) || this;
  }
  MsalPopupAuthProvider.prototype.login = function(authParameters) {
    var _this = this;
    if (authParameters === void 0) {
      authParameters = {};
    }
    this.UserAgentApplication.loginPopup(authParameters).then(
      function(response) {
        _this.acquireTokens(response.idToken.rawIdToken);
      },
      function(error) {
        logger_1.Logger.error('Login popup failed; ' + error);
      },
    );
  };
  return MsalPopupAuthProvider;
})(MsalAuthProvider_1.MsalAuthProvider);
exports.MsalPopupAuthProvider = MsalPopupAuthProvider;
//# sourceMappingURL=MsalPopupAuthProvider.js.map
