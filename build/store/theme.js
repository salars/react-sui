'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mobx = require('mobx');

var _default = require('../themes/default');

var defaultTheme = _interopRequireWildcard(_default);

var _custom = require('../themes/custom');

var customTheme = _interopRequireWildcard(_custom);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var themeStore = (0, _mobx.observable)({
    current: "default",
    themes: {
        default: defaultTheme,
        custom: customTheme,
        personalize: {}
    },
    get theme() {
        return this.themes[this.current];
    },
    applyTheme: function applyTheme(theme) {
        var PERSONAL = 'personalize';
        this.themes[PERSONAL] = theme;
        this.current = PERSONAL;
    }
});

exports.default = themeStore;