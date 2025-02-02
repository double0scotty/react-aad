'use strict';
// tslint:disable: no-console
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
var Logger = /** @class */ (function() {
  function Logger() {}
  Logger.verbose = function(message) {
    var optionalParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      optionalParams[_i - 1] = arguments[_i];
    }
    console.log.apply(console, ['[VERBOSE] ' + message].concat(optionalParams));
  };
  Logger.info = function(message) {
    var optionalParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      optionalParams[_i - 1] = arguments[_i];
    }
    console.info.apply(console, ['[INFO] ' + message].concat(optionalParams));
  };
  Logger.warn = function(message) {
    var optionalParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      optionalParams[_i - 1] = arguments[_i];
    }
    console.warn.apply(console, ['[WARN] ' + message].concat(optionalParams));
  };
  Logger.error = function(message) {
    var optionalParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      optionalParams[_i - 1] = arguments[_i];
    }
    console.error.apply(console, ['[ERROR] ' + message].concat(optionalParams));
  };
  return Logger;
})();
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map
