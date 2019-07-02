'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var Interfaces_1 = require('./Interfaces');
var MsalPopupAuthProvider_1 = require('./MsalPopupAuthProvider');
var MsalRedirectAuthProvider_1 = require('./MsalRedirectAuthProvider');
var MsalAuthProviderFactory = /** @class */ (function() {
  function MsalAuthProviderFactory(config, authParams, type) {
    if (type === void 0) {
      type = Interfaces_1.LoginType.Redirect;
    }
    this.config = config;
    this.authParameters = authParams;
    this.type = type;
  }
  MsalAuthProviderFactory.prototype.getAuthProvider = function() {
    if (this.type === Interfaces_1.LoginType.Popup) {
      return new MsalPopupAuthProvider_1.MsalPopupAuthProvider(this.config, this.authParameters);
    } else {
      return new MsalRedirectAuthProvider_1.MsalRedirectAuthProvider(this.config, this.authParameters);
    }
  };
  return MsalAuthProviderFactory;
})();
exports.MsalAuthProviderFactory = MsalAuthProviderFactory;
//# sourceMappingURL=MsalAuthProviderFactory.js.map
