/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js":
/*!********************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-svg-core/index.es.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "icon": () => (/* binding */ icon),
/* harmony export */   "noAuto": () => (/* binding */ noAuto),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "toHtml": () => (/* binding */ toHtml),
/* harmony export */   "layer": () => (/* binding */ layer),
/* harmony export */   "text": () => (/* binding */ text),
/* harmony export */   "counter": () => (/* binding */ counter),
/* harmony export */   "library": () => (/* binding */ library),
/* harmony export */   "dom": () => (/* binding */ dom),
/* harmony export */   "parse": () => (/* binding */ parse),
/* harmony export */   "findIconDefinition": () => (/* binding */ findIconDefinition)
/* harmony export */ });
/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var noop = function noop() {};

var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER = null;
var _PERFORMANCE = {
  mark: noop,
  measure: noop
};

try {
  if (typeof window !== 'undefined') _WINDOW = window;
  if (typeof document !== 'undefined') _DOCUMENT = document;
  if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
  if (typeof performance !== 'undefined') _PERFORMANCE = performance;
} catch (e) {}

var _ref = _WINDOW.navigator || {},
    _ref$userAgent = _ref.userAgent,
    userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;

var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var MUTATION_OBSERVER = _MUTATION_OBSERVER;
var PERFORMANCE = _PERFORMANCE;
var IS_BROWSER = !!WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
var UNITS_IN_GRID = 16;
var DEFAULT_FAMILY_PREFIX = 'fa';
var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
var DATA_FA_I2SVG = 'data-fa-i2svg';
var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
var DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending';
var DATA_PREFIX = 'data-prefix';
var DATA_ICON = 'data-icon';
var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';
var MUTATION_APPROACH_ASYNC = 'async';
var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'];
var PRODUCTION = function () {
  try {
    return "development" === 'production';
  } catch (e) {
    return false;
  }
}();
var PREFIX_TO_STYLE = {
  'fas': 'solid',
  'far': 'regular',
  'fal': 'light',
  'fad': 'duotone',
  'fab': 'brands',
  'fak': 'kit',
  'fa': 'solid'
};
var STYLE_TO_PREFIX = {
  'solid': 'fas',
  'regular': 'far',
  'light': 'fal',
  'duotone': 'fad',
  'brands': 'fab',
  'kit': 'fak'
};
var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
var FONT_FAMILY_PATTERN = /Font Awesome ([5 ]*)(Solid|Regular|Light|Duotone|Brands|Free|Pro|Kit).*/i; // TODO: do we need to handle font-weight for kit SVG pseudo-elements?

var FONT_WEIGHT_TO_PREFIX = {
  '900': 'fas',
  '400': 'far',
  'normal': 'far',
  '300': 'fal'
};
var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];
var DUOTONE_CLASSES = {
  GROUP: 'group',
  SWAP_OPACITY: 'swap-opacity',
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
};
var RESERVED_CLASSES = ['xs', 'sm', 'lg', 'fw', 'ul', 'li', 'border', 'pull-left', 'pull-right', 'spin', 'pulse', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical', 'flip-both', 'stack', 'stack-1x', 'stack-2x', 'inverse', 'layers', 'layers-text', 'layers-counter', DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY].concat(oneToTen.map(function (n) {
  return "".concat(n, "x");
})).concat(oneToTwenty.map(function (n) {
  return "w-".concat(n);
}));

var initial = WINDOW.FontAwesomeConfig || {};

function getAttrConfig(attr) {
  var element = DOCUMENT.querySelector('script[' + attr + ']');

  if (element) {
    return element.getAttribute(attr);
  }
}

function coerce(val) {
  // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
  // We'll assume that this is an indication that it should be toggled to true
  // For example <script data-search-pseudo-elements src="..."></script>
  if (val === '') return true;
  if (val === 'false') return false;
  if (val === 'true') return true;
  return val;
}

if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
  var attrs = [['data-family-prefix', 'familyPrefix'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
  attrs.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        attr = _ref2[0],
        key = _ref2[1];

    var val = coerce(getAttrConfig(attr));

    if (val !== undefined && val !== null) {
      initial[key] = val;
    }
  });
}

var _default = {
  familyPrefix: DEFAULT_FAMILY_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  mutateApproach: 'async',
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
};

var _config = _objectSpread({}, _default, initial);

if (!_config.autoReplaceSvg) _config.observeMutations = false;

var config = _objectSpread({}, _config);

WINDOW.FontAwesomeConfig = config;

var w = WINDOW || {};
if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w[NAMESPACE_IDENTIFIER];

var functions = [];

var listener = function listener() {
  DOCUMENT.removeEventListener('DOMContentLoaded', listener);
  loaded = 1;
  functions.map(function (fn) {
    return fn();
  });
};

var loaded = false;

if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
  if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
}

function domready (fn) {
  if (!IS_DOM) return;
  loaded ? setTimeout(fn, 0) : functions.push(fn);
}

var PENDING = 'pending';
var SETTLED = 'settled';
var FULFILLED = 'fulfilled';
var REJECTED = 'rejected';

var NOOP = function NOOP() {};

var isNode = typeof __webpack_require__.g !== 'undefined' && typeof __webpack_require__.g.process !== 'undefined' && typeof __webpack_require__.g.process.emit === 'function';
var asyncSetTimer = typeof setImmediate === 'undefined' ? setTimeout : setImmediate;
var asyncQueue = [];
var asyncTimer;

function asyncFlush() {
  // run promise callbacks
  for (var i = 0; i < asyncQueue.length; i++) {
    asyncQueue[i][0](asyncQueue[i][1]);
  } // reset async asyncQueue


  asyncQueue = [];
  asyncTimer = false;
}

function asyncCall(callback, arg) {
  asyncQueue.push([callback, arg]);

  if (!asyncTimer) {
    asyncTimer = true;
    asyncSetTimer(asyncFlush, 0);
  }
}

function invokeResolver(resolver, promise) {
  function resolvePromise(value) {
    resolve(promise, value);
  }

  function rejectPromise(reason) {
    reject(promise, reason);
  }

  try {
    resolver(resolvePromise, rejectPromise);
  } catch (e) {
    rejectPromise(e);
  }
}

function invokeCallback(subscriber) {
  var owner = subscriber.owner;
  var settled = owner._state;
  var value = owner._data;
  var callback = subscriber[settled];
  var promise = subscriber.then;

  if (typeof callback === 'function') {
    settled = FULFILLED;

    try {
      value = callback(value);
    } catch (e) {
      reject(promise, e);
    }
  }

  if (!handleThenable(promise, value)) {
    if (settled === FULFILLED) {
      resolve(promise, value);
    }

    if (settled === REJECTED) {
      reject(promise, value);
    }
  }
}

function handleThenable(promise, value) {
  var resolved;

  try {
    if (promise === value) {
      throw new TypeError('A promises callback cannot return that same promise.');
    }

    if (value && (typeof value === 'function' || _typeof(value) === 'object')) {
      // then should be retrieved only once
      var then = value.then;

      if (typeof then === 'function') {
        then.call(value, function (val) {
          if (!resolved) {
            resolved = true;

            if (value === val) {
              fulfill(promise, val);
            } else {
              resolve(promise, val);
            }
          }
        }, function (reason) {
          if (!resolved) {
            resolved = true;
            reject(promise, reason);
          }
        });
        return true;
      }
    }
  } catch (e) {
    if (!resolved) {
      reject(promise, e);
    }

    return true;
  }

  return false;
}

function resolve(promise, value) {
  if (promise === value || !handleThenable(promise, value)) {
    fulfill(promise, value);
  }
}

function fulfill(promise, value) {
  if (promise._state === PENDING) {
    promise._state = SETTLED;
    promise._data = value;
    asyncCall(publishFulfillment, promise);
  }
}

function reject(promise, reason) {
  if (promise._state === PENDING) {
    promise._state = SETTLED;
    promise._data = reason;
    asyncCall(publishRejection, promise);
  }
}

function publish(promise) {
  promise._then = promise._then.forEach(invokeCallback);
}

function publishFulfillment(promise) {
  promise._state = FULFILLED;
  publish(promise);
}

function publishRejection(promise) {
  promise._state = REJECTED;
  publish(promise);

  if (!promise._handled && isNode) {
    __webpack_require__.g.process.emit('unhandledRejection', promise._data, promise);
  }
}

function notifyRejectionHandled(promise) {
  __webpack_require__.g.process.emit('rejectionHandled', promise);
}
/**
 * @class
 */


function P(resolver) {
  if (typeof resolver !== 'function') {
    throw new TypeError('Promise resolver ' + resolver + ' is not a function');
  }

  if (this instanceof P === false) {
    throw new TypeError('Failed to construct \'Promise\': Please use the \'new\' operator, this object constructor cannot be called as a function.');
  }

  this._then = [];
  invokeResolver(resolver, this);
}

P.prototype = {
  constructor: P,
  _state: PENDING,
  _then: null,
  _data: undefined,
  _handled: false,
  then: function then(onFulfillment, onRejection) {
    var subscriber = {
      owner: this,
      then: new this.constructor(NOOP),
      fulfilled: onFulfillment,
      rejected: onRejection
    };

    if ((onRejection || onFulfillment) && !this._handled) {
      this._handled = true;

      if (this._state === REJECTED && isNode) {
        asyncCall(notifyRejectionHandled, this);
      }
    }

    if (this._state === FULFILLED || this._state === REJECTED) {
      // already resolved, call callback async
      asyncCall(invokeCallback, subscriber);
    } else {
      // subscribe
      this._then.push(subscriber);
    }

    return subscriber.then;
  },
  catch: function _catch(onRejection) {
    return this.then(null, onRejection);
  }
};

P.all = function (promises) {
  if (!Array.isArray(promises)) {
    throw new TypeError('You must pass an array to Promise.all().');
  }

  return new P(function (resolve, reject) {
    var results = [];
    var remaining = 0;

    function resolver(index) {
      remaining++;
      return function (value) {
        results[index] = value;

        if (! --remaining) {
          resolve(results);
        }
      };
    }

    for (var i = 0, promise; i < promises.length; i++) {
      promise = promises[i];

      if (promise && typeof promise.then === 'function') {
        promise.then(resolver(i), reject);
      } else {
        results[i] = promise;
      }
    }

    if (!remaining) {
      resolve(results);
    }
  });
};

P.race = function (promises) {
  if (!Array.isArray(promises)) {
    throw new TypeError('You must pass an array to Promise.race().');
  }

  return new P(function (resolve, reject) {
    for (var i = 0, promise; i < promises.length; i++) {
      promise = promises[i];

      if (promise && typeof promise.then === 'function') {
        promise.then(resolve, reject);
      } else {
        resolve(promise);
      }
    }
  });
};

P.resolve = function (value) {
  if (value && _typeof(value) === 'object' && value.constructor === P) {
    return value;
  }

  return new P(function (resolve) {
    resolve(value);
  });
};

P.reject = function (reason) {
  return new P(function (resolve, reject) {
    reject(reason);
  });
};

var picked = typeof Promise === 'function' ? Promise : P;

var d = UNITS_IN_GRID;
var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};

function isReserved(name) {
  return ~RESERVED_CLASSES.indexOf(name);
}
function insertCss(css) {
  if (!css || !IS_DOM) {
    return;
  }

  var style = DOCUMENT.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;

  for (var i = headChildren.length - 1; i > -1; i--) {
    var child = headChildren[i];
    var tagName = (child.tagName || '').toUpperCase();

    if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }

  DOCUMENT.head.insertBefore(style, beforeChild);
  return css;
}
var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function nextUniqueId() {
  var size = 12;
  var id = '';

  while (size-- > 0) {
    id += idPool[Math.random() * 62 | 0];
  }

  return id;
}
function toArray(obj) {
  var array = [];

  for (var i = (obj || []).length >>> 0; i--;) {
    array[i] = obj[i];
  }

  return array;
}
function classArray(node) {
  if (node.classList) {
    return toArray(node.classList);
  } else {
    return (node.getAttribute('class') || '').split(' ').filter(function (i) {
      return i;
    });
  }
}
function getIconName(familyPrefix, cls) {
  var parts = cls.split('-');
  var prefix = parts[0];
  var iconName = parts.slice(1).join('-');

  if (prefix === familyPrefix && iconName !== '' && !isReserved(iconName)) {
    return iconName;
  } else {
    return null;
  }
}
function htmlEscape(str) {
  return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
    return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
  }, '').trim();
}
function joinStyles(styles) {
  return Object.keys(styles || {}).reduce(function (acc, styleName) {
    return acc + "".concat(styleName, ": ").concat(styles[styleName], ";");
  }, '');
}
function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}
function transformForSvg(_ref) {
  var transform = _ref.transform,
      containerWidth = _ref.containerWidth,
      iconWidth = _ref.iconWidth;
  var outer = {
    transform: "translate(".concat(containerWidth / 2, " 256)")
  };
  var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
  var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
  var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
  var inner = {
    transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
  };
  var path = {
    transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
  };
  return {
    outer: outer,
    inner: inner,
    path: path
  };
}
function transformForCss(_ref2) {
  var transform = _ref2.transform,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width,
      _ref2$height = _ref2.height,
      height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height,
      _ref2$startCentered = _ref2.startCentered,
      startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
  var val = '';

  if (startCentered && IS_IE) {
    val += "translate(".concat(transform.x / d - width / 2, "em, ").concat(transform.y / d - height / 2, "em) ");
  } else if (startCentered) {
    val += "translate(calc(-50% + ".concat(transform.x / d, "em), calc(-50% + ").concat(transform.y / d, "em)) ");
  } else {
    val += "translate(".concat(transform.x / d, "em, ").concat(transform.y / d, "em) ");
  }

  val += "scale(".concat(transform.size / d * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d * (transform.flipY ? -1 : 1), ") ");
  val += "rotate(".concat(transform.rotate, "deg) ");
  return val;
}

var ALL_SPACE = {
  x: 0,
  y: 0,
  width: '100%',
  height: '100%'
};

function fillBlack(abstract) {
  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (abstract.attributes && (abstract.attributes.fill || force)) {
    abstract.attributes.fill = 'black';
  }

  return abstract;
}

function deGroup(abstract) {
  if (abstract.tag === 'g') {
    return abstract.children;
  } else {
    return [abstract];
  }
}

function makeIconMasking (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      mask = _ref.mask,
      explicitMaskId = _ref.maskId,
      transform = _ref.transform;
  var mainWidth = main.width,
      mainPath = main.icon;
  var maskWidth = mask.width,
      maskPath = mask.icon;
  var trans = transformForSvg({
    transform: transform,
    containerWidth: maskWidth,
    iconWidth: mainWidth
  });
  var maskRect = {
    tag: 'rect',
    attributes: _objectSpread({}, ALL_SPACE, {
      fill: 'white'
    })
  };
  var maskInnerGroupChildrenMixin = mainPath.children ? {
    children: mainPath.children.map(fillBlack)
  } : {};
  var maskInnerGroup = {
    tag: 'g',
    attributes: _objectSpread({}, trans.inner),
    children: [fillBlack(_objectSpread({
      tag: mainPath.tag,
      attributes: _objectSpread({}, mainPath.attributes, trans.path)
    }, maskInnerGroupChildrenMixin))]
  };
  var maskOuterGroup = {
    tag: 'g',
    attributes: _objectSpread({}, trans.outer),
    children: [maskInnerGroup]
  };
  var maskId = "mask-".concat(explicitMaskId || nextUniqueId());
  var clipId = "clip-".concat(explicitMaskId || nextUniqueId());
  var maskTag = {
    tag: 'mask',
    attributes: _objectSpread({}, ALL_SPACE, {
      id: maskId,
      maskUnits: 'userSpaceOnUse',
      maskContentUnits: 'userSpaceOnUse'
    }),
    children: [maskRect, maskOuterGroup]
  };
  var defs = {
    tag: 'defs',
    children: [{
      tag: 'clipPath',
      attributes: {
        id: clipId
      },
      children: deGroup(maskPath)
    }, maskTag]
  };
  children.push(defs, {
    tag: 'rect',
    attributes: _objectSpread({
      fill: 'currentColor',
      'clip-path': "url(#".concat(clipId, ")"),
      mask: "url(#".concat(maskId, ")")
    }, ALL_SPACE)
  });
  return {
    children: children,
    attributes: attributes
  };
}

function makeIconStandard (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      transform = _ref.transform,
      styles = _ref.styles;
  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  if (transformIsMeaningful(transform)) {
    var trans = transformForSvg({
      transform: transform,
      containerWidth: main.width,
      iconWidth: main.width
    });
    children.push({
      tag: 'g',
      attributes: _objectSpread({}, trans.outer),
      children: [{
        tag: 'g',
        attributes: _objectSpread({}, trans.inner),
        children: [{
          tag: main.icon.tag,
          children: main.icon.children,
          attributes: _objectSpread({}, main.icon.attributes, trans.path)
        }]
      }]
    });
  } else {
    children.push(main.icon);
  }

  return {
    children: children,
    attributes: attributes
  };
}

function asIcon (_ref) {
  var children = _ref.children,
      main = _ref.main,
      mask = _ref.mask,
      attributes = _ref.attributes,
      styles = _ref.styles,
      transform = _ref.transform;

  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    var width = main.width,
        height = main.height;
    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes['style'] = joinStyles(_objectSpread({}, styles, {
      'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
    }));
  }

  return [{
    tag: 'svg',
    attributes: attributes,
    children: children
  }];
}

function asSymbol (_ref) {
  var prefix = _ref.prefix,
      iconName = _ref.iconName,
      children = _ref.children,
      attributes = _ref.attributes,
      symbol = _ref.symbol;
  var id = symbol === true ? "".concat(prefix, "-").concat(config.familyPrefix, "-").concat(iconName) : symbol;
  return [{
    tag: 'svg',
    attributes: {
      style: 'display: none;'
    },
    children: [{
      tag: 'symbol',
      attributes: _objectSpread({}, attributes, {
        id: id
      }),
      children: children
    }]
  }];
}

function makeInlineSvgAbstract(params) {
  var _params$icons = params.icons,
      main = _params$icons.main,
      mask = _params$icons.mask,
      prefix = params.prefix,
      iconName = params.iconName,
      transform = params.transform,
      symbol = params.symbol,
      title = params.title,
      maskId = params.maskId,
      titleId = params.titleId,
      extra = params.extra,
      _params$watchable = params.watchable,
      watchable = _params$watchable === void 0 ? false : _params$watchable;

  var _ref = mask.found ? mask : main,
      width = _ref.width,
      height = _ref.height;

  var isUploadedIcon = prefix === 'fak';
  var widthClass = isUploadedIcon ? '' : "fa-w-".concat(Math.ceil(width / height * 16));
  var attrClass = [config.replacementClass, iconName ? "".concat(config.familyPrefix, "-").concat(iconName) : '', widthClass].filter(function (c) {
    return extra.classes.indexOf(c) === -1;
  }).filter(function (c) {
    return c !== '' || !!c;
  }).concat(extra.classes).join(' ');
  var content = {
    children: [],
    attributes: _objectSpread({}, extra.attributes, {
      'data-prefix': prefix,
      'data-icon': iconName,
      'class': attrClass,
      'role': extra.attributes.role || 'img',
      'xmlns': 'http://www.w3.org/2000/svg',
      'viewBox': "0 0 ".concat(width, " ").concat(height)
    })
  };
  var uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf('fa-fw') ? {
    width: "".concat(width / height * 16 * 0.0625, "em")
  } : {};

  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = '';
  }

  if (title) content.children.push({
    tag: 'title',
    attributes: {
      id: content.attributes['aria-labelledby'] || "title-".concat(titleId || nextUniqueId())
    },
    children: [title]
  });

  var args = _objectSpread({}, content, {
    prefix: prefix,
    iconName: iconName,
    main: main,
    mask: mask,
    maskId: maskId,
    transform: transform,
    symbol: symbol,
    styles: _objectSpread({}, uploadedIconWidthStyle, extra.styles)
  });

  var _ref2 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args),
      children = _ref2.children,
      attributes = _ref2.attributes;

  args.children = children;
  args.attributes = attributes;

  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}
function makeLayersTextAbstract(params) {
  var content = params.content,
      width = params.width,
      height = params.height,
      transform = params.transform,
      title = params.title,
      extra = params.extra,
      _params$watchable2 = params.watchable,
      watchable = _params$watchable2 === void 0 ? false : _params$watchable2;

  var attributes = _objectSpread({}, extra.attributes, title ? {
    'title': title
  } : {}, {
    'class': extra.classes.join(' ')
  });

  if (watchable) {
    attributes[DATA_FA_I2SVG] = '';
  }

  var styles = _objectSpread({}, extra.styles);

  if (transformIsMeaningful(transform)) {
    styles['transform'] = transformForCss({
      transform: transform,
      startCentered: true,
      width: width,
      height: height
    });
    styles['-webkit-transform'] = styles['transform'];
  }

  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}
function makeLayersCounterAbstract(params) {
  var content = params.content,
      title = params.title,
      extra = params.extra;

  var attributes = _objectSpread({}, extra.attributes, title ? {
    'title': title
  } : {}, {
    'class': extra.classes.join(' ')
  });

  var styleString = joinStyles(extra.styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}

var noop$1 = function noop() {};

var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
  mark: noop$1,
  measure: noop$1
};
var preamble = "FA \"5.15.4\"";

var begin = function begin(name) {
  p.mark("".concat(preamble, " ").concat(name, " begins"));
  return function () {
    return end(name);
  };
};

var end = function end(name) {
  p.mark("".concat(preamble, " ").concat(name, " ends"));
  p.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
};

var perf = {
  begin: begin,
  end: end
};

/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */

var bindInternal4 = function bindInternal4(func, thisContext) {
  return function (a, b, c, d) {
    return func.call(thisContext, a, b, c, d);
  };
};

/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */


var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i,
      key,
      result;

  if (initialValue === undefined) {
    i = 1;
    result = subject[keys[0]];
  } else {
    i = 0;
    result = initialValue;
  }

  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }

  return result;
};

function toHex(unicode) {
  var result = '';

  for (var i = 0; i < unicode.length; i++) {
    var hex = unicode.charCodeAt(i).toString(16);
    result += ('000' + hex).slice(-4);
  }

  return result;
}

function defineIcons(prefix, icons) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _params$skipHooks = params.skipHooks,
      skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
  var normalized = Object.keys(icons).reduce(function (acc, iconName) {
    var icon = icons[iconName];
    var expanded = !!icon.icon;

    if (expanded) {
      acc[icon.iconName] = icon.icon;
    } else {
      acc[iconName] = icon;
    }

    return acc;
  }, {});

  if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
    namespace.hooks.addPack(prefix, normalized);
  } else {
    namespace.styles[prefix] = _objectSpread({}, namespace.styles[prefix] || {}, normalized);
  }
  /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll easy the upgrade process for our users by automatically defining
   * this as well.
   */


  if (prefix === 'fas') {
    defineIcons('fa', icons);
  }
}

var styles = namespace.styles,
    shims = namespace.shims;
var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};
var build = function build() {
  var lookup = function lookup(reducer) {
    return reduce(styles, function (o, style, prefix) {
      o[prefix] = reduce(style, reducer, {});
      return o;
    }, {});
  };

  _byUnicode = lookup(function (acc, icon, iconName) {
    if (icon[3]) {
      acc[icon[3]] = iconName;
    }

    return acc;
  });
  _byLigature = lookup(function (acc, icon, iconName) {
    var ligatures = icon[2];
    acc[iconName] = iconName;
    ligatures.forEach(function (ligature) {
      acc[ligature] = iconName;
    });
    return acc;
  });
  var hasRegular = 'far' in styles;
  _byOldName = reduce(shims, function (acc, shim) {
    var oldName = shim[0];
    var prefix = shim[1];
    var iconName = shim[2];

    if (prefix === 'far' && !hasRegular) {
      prefix = 'fas';
    }

    acc[oldName] = {
      prefix: prefix,
      iconName: iconName
    };
    return acc;
  }, {});
};
build();
function byUnicode(prefix, unicode) {
  return (_byUnicode[prefix] || {})[unicode];
}
function byLigature(prefix, ligature) {
  return (_byLigature[prefix] || {})[ligature];
}
function byOldName(name) {
  return _byOldName[name] || {
    prefix: null,
    iconName: null
  };
}

var styles$1 = namespace.styles;
var emptyCanonicalIcon = function emptyCanonicalIcon() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function getCanonicalIcon(values) {
  return values.reduce(function (acc, cls) {
    var iconName = getIconName(config.familyPrefix, cls);

    if (styles$1[cls]) {
      acc.prefix = cls;
    } else if (config.autoFetchSvg && Object.keys(PREFIX_TO_STYLE).indexOf(cls) > -1) {
      acc.prefix = cls;
    } else if (iconName) {
      var shim = acc.prefix === 'fa' ? byOldName(iconName) : {};
      acc.iconName = shim.iconName || iconName;
      acc.prefix = shim.prefix || acc.prefix;
    } else if (cls !== config.replacementClass && cls.indexOf('fa-w-') !== 0) {
      acc.rest.push(cls);
    }

    return acc;
  }, emptyCanonicalIcon());
}
function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix: prefix,
      iconName: iconName,
      icon: mapping[prefix][iconName]
    };
  }
}

function toHtml(abstractNodes) {
  var tag = abstractNodes.tag,
      _abstractNodes$attrib = abstractNodes.attributes,
      attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
      _abstractNodes$childr = abstractNodes.children,
      children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;

  if (typeof abstractNodes === 'string') {
    return htmlEscape(abstractNodes);
  } else {
    return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
  }
}

var noop$2 = function noop() {};

function isWatched(node) {
  var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
  return typeof i2svg === 'string';
}

function getMutator() {
  if (config.autoReplaceSvg === true) {
    return mutators.replace;
  }

  var mutator = mutators[config.autoReplaceSvg];
  return mutator || mutators.replace;
}

var mutators = {
  replace: function replace(mutation) {
    var node = mutation[0];
    var abstract = mutation[1];
    var newOuterHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');

    if (node.parentNode && node.outerHTML) {
      node.outerHTML = newOuterHTML + (config.keepOriginalSource && node.tagName.toLowerCase() !== 'svg' ? "<!-- ".concat(node.outerHTML, " Font Awesome fontawesome.com -->") : '');
    } else if (node.parentNode) {
      var newNode = document.createElement('span');
      node.parentNode.replaceChild(newNode, node);
      newNode.outerHTML = newOuterHTML;
    }
  },
  nest: function nest(mutation) {
    var node = mutation[0];
    var abstract = mutation[1]; // If we already have a replaced node we do not want to continue nesting within it.
    // Short-circuit to the standard replacement

    if (~classArray(node).indexOf(config.replacementClass)) {
      return mutators.replace(mutation);
    }

    var forSvg = new RegExp("".concat(config.familyPrefix, "-.*"));
    delete abstract[0].attributes.style;
    delete abstract[0].attributes.id;
    var splitClasses = abstract[0].attributes.class.split(' ').reduce(function (acc, cls) {
      if (cls === config.replacementClass || cls.match(forSvg)) {
        acc.toSvg.push(cls);
      } else {
        acc.toNode.push(cls);
      }

      return acc;
    }, {
      toNode: [],
      toSvg: []
    });
    abstract[0].attributes.class = splitClasses.toSvg.join(' ');
    var newInnerHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');
    node.setAttribute('class', splitClasses.toNode.join(' '));
    node.setAttribute(DATA_FA_I2SVG, '');
    node.innerHTML = newInnerHTML;
  }
};

function performOperationSync(op) {
  op();
}

function perform(mutations, callback) {
  var callbackFunction = typeof callback === 'function' ? callback : noop$2;

  if (mutations.length === 0) {
    callbackFunction();
  } else {
    var frame = performOperationSync;

    if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
      frame = WINDOW.requestAnimationFrame || performOperationSync;
    }

    frame(function () {
      var mutator = getMutator();
      var mark = perf.begin('mutate');
      mutations.map(mutator);
      mark();
      callbackFunction();
    });
  }
}
var disabled = false;
function disableObservation() {
  disabled = true;
}
function enableObservation() {
  disabled = false;
}
var mo = null;
function observe(options) {
  if (!MUTATION_OBSERVER) {
    return;
  }

  if (!config.observeMutations) {
    return;
  }

  var treeCallback = options.treeCallback,
      nodeCallback = options.nodeCallback,
      pseudoElementsCallback = options.pseudoElementsCallback,
      _options$observeMutat = options.observeMutationsRoot,
      observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
  mo = new MUTATION_OBSERVER(function (objects) {
    if (disabled) return;
    toArray(objects).forEach(function (mutationRecord) {
      if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
        if (config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target);
        }

        treeCallback(mutationRecord.target);
      }

      if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config.searchPseudoElements) {
        pseudoElementsCallback(mutationRecord.target.parentNode);
      }

      if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
        if (mutationRecord.attributeName === 'class') {
          var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
              prefix = _getCanonicalIcon.prefix,
              iconName = _getCanonicalIcon.iconName;

          if (prefix) mutationRecord.target.setAttribute('data-prefix', prefix);
          if (iconName) mutationRecord.target.setAttribute('data-icon', iconName);
        } else {
          nodeCallback(mutationRecord.target);
        }
      }
    });
  });
  if (!IS_DOM) return;
  mo.observe(observeMutationsRoot, {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true
  });
}
function disconnect() {
  if (!mo) return;
  mo.disconnect();
}

function styleParser (node) {
  var style = node.getAttribute('style');
  var val = [];

  if (style) {
    val = style.split(';').reduce(function (acc, style) {
      var styles = style.split(':');
      var prop = styles[0];
      var value = styles.slice(1);

      if (prop && value.length > 0) {
        acc[prop] = value.join(':').trim();
      }

      return acc;
    }, {});
  }

  return val;
}

function classParser (node) {
  var existingPrefix = node.getAttribute('data-prefix');
  var existingIconName = node.getAttribute('data-icon');
  var innerText = node.innerText !== undefined ? node.innerText.trim() : '';
  var val = getCanonicalIcon(classArray(node));

  if (existingPrefix && existingIconName) {
    val.prefix = existingPrefix;
    val.iconName = existingIconName;
  }

  if (val.prefix && innerText.length > 1) {
    val.iconName = byLigature(val.prefix, node.innerText);
  } else if (val.prefix && innerText.length === 1) {
    val.iconName = byUnicode(val.prefix, toHex(node.innerText));
  }

  return val;
}

var parseTransformString = function parseTransformString(transformString) {
  var transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };

  if (!transformString) {
    return transform;
  } else {
    return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
      var parts = n.toLowerCase().split('-');
      var first = parts[0];
      var rest = parts.slice(1).join('-');

      if (first && rest === 'h') {
        acc.flipX = true;
        return acc;
      }

      if (first && rest === 'v') {
        acc.flipY = true;
        return acc;
      }

      rest = parseFloat(rest);

      if (isNaN(rest)) {
        return acc;
      }

      switch (first) {
        case 'grow':
          acc.size = acc.size + rest;
          break;

        case 'shrink':
          acc.size = acc.size - rest;
          break;

        case 'left':
          acc.x = acc.x - rest;
          break;

        case 'right':
          acc.x = acc.x + rest;
          break;

        case 'up':
          acc.y = acc.y - rest;
          break;

        case 'down':
          acc.y = acc.y + rest;
          break;

        case 'rotate':
          acc.rotate = acc.rotate + rest;
          break;
      }

      return acc;
    }, transform);
  }
};
function transformParser (node) {
  return parseTransformString(node.getAttribute('data-fa-transform'));
}

function symbolParser (node) {
  var symbol = node.getAttribute('data-fa-symbol');
  return symbol === null ? false : symbol === '' ? true : symbol;
}

function attributesParser (node) {
  var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
    if (acc.name !== 'class' && acc.name !== 'style') {
      acc[attr.name] = attr.value;
    }

    return acc;
  }, {});
  var title = node.getAttribute('title');
  var titleId = node.getAttribute('data-fa-title-id');

  if (config.autoA11y) {
    if (title) {
      extraAttributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
    } else {
      extraAttributes['aria-hidden'] = 'true';
      extraAttributes['focusable'] = 'false';
    }
  }

  return extraAttributes;
}

function maskParser (node) {
  var mask = node.getAttribute('data-fa-mask');

  if (!mask) {
    return emptyCanonicalIcon();
  } else {
    return getCanonicalIcon(mask.split(' ').map(function (i) {
      return i.trim();
    }));
  }
}

function blankMeta() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: meaninglessTransform,
    symbol: false,
    mask: null,
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function parseMeta(node) {
  var _classParser = classParser(node),
      iconName = _classParser.iconName,
      prefix = _classParser.prefix,
      extraClasses = _classParser.rest;

  var extraStyles = styleParser(node);
  var transform = transformParser(node);
  var symbol = symbolParser(node);
  var extraAttributes = attributesParser(node);
  var mask = maskParser(node);
  return {
    iconName: iconName,
    title: node.getAttribute('title'),
    titleId: node.getAttribute('data-fa-title-id'),
    prefix: prefix,
    transform: transform,
    symbol: symbol,
    mask: mask,
    maskId: node.getAttribute('data-fa-mask-id'),
    extra: {
      classes: extraClasses,
      styles: extraStyles,
      attributes: extraAttributes
    }
  };
}

function MissingIcon(error) {
  this.name = 'MissingIcon';
  this.message = error || 'Icon unavailable';
  this.stack = new Error().stack;
}
MissingIcon.prototype = Object.create(Error.prototype);
MissingIcon.prototype.constructor = MissingIcon;

var FILL = {
  fill: 'currentColor'
};
var ANIMATION_BASE = {
  attributeType: 'XML',
  repeatCount: 'indefinite',
  dur: '2s'
};
var RING = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
  })
};

var OPACITY_ANIMATE = _objectSpread({}, ANIMATION_BASE, {
  attributeName: 'opacity'
});

var DOT = {
  tag: 'circle',
  attributes: _objectSpread({}, FILL, {
    cx: '256',
    cy: '364',
    r: '28'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, ANIMATION_BASE, {
      attributeName: 'r',
      values: '28;14;28;28;14;28;'
    })
  }, {
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '1;0;1;1;0;1;'
    })
  }]
};
var QUESTION = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    opacity: '1',
    d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '1;0;0;0;0;1;'
    })
  }]
};
var EXCLAMATION = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    opacity: '0',
    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '0;0;1;1;0;0;'
    })
  }]
};
var missing = {
  tag: 'g',
  children: [RING, DOT, QUESTION, EXCLAMATION]
};

var styles$2 = namespace.styles;
function asFoundIcon(icon) {
  var width = icon[0];
  var height = icon[1];

  var _icon$slice = icon.slice(4),
      _icon$slice2 = _slicedToArray(_icon$slice, 1),
      vectorData = _icon$slice2[0];

  var element = null;

  if (Array.isArray(vectorData)) {
    element = {
      tag: 'g',
      attributes: {
        class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
      },
      children: [{
        tag: 'path',
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
          fill: 'currentColor',
          d: vectorData[0]
        }
      }, {
        tag: 'path',
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
          fill: 'currentColor',
          d: vectorData[1]
        }
      }]
    };
  } else {
    element = {
      tag: 'path',
      attributes: {
        fill: 'currentColor',
        d: vectorData
      }
    };
  }

  return {
    found: true,
    width: width,
    height: height,
    icon: element
  };
}
function findIcon(iconName, prefix) {
  return new picked(function (resolve, reject) {
    var val = {
      found: false,
      width: 512,
      height: 512,
      icon: missing
    };

    if (iconName && prefix && styles$2[prefix] && styles$2[prefix][iconName]) {
      var icon = styles$2[prefix][iconName];
      return resolve(asFoundIcon(icon));
    }

    if (iconName && prefix && !config.showMissingIcons) {
      reject(new MissingIcon("Icon is missing for prefix ".concat(prefix, " with icon name ").concat(iconName)));
    } else {
      resolve(val);
    }
  });
}

var styles$3 = namespace.styles;

function generateSvgReplacementMutation(node, nodeMeta) {
  var iconName = nodeMeta.iconName,
      title = nodeMeta.title,
      titleId = nodeMeta.titleId,
      prefix = nodeMeta.prefix,
      transform = nodeMeta.transform,
      symbol = nodeMeta.symbol,
      mask = nodeMeta.mask,
      maskId = nodeMeta.maskId,
      extra = nodeMeta.extra;
  return new picked(function (resolve, reject) {
    picked.all([findIcon(iconName, prefix), findIcon(mask.iconName, mask.prefix)]).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          main = _ref2[0],
          mask = _ref2[1];

      resolve([node, makeInlineSvgAbstract({
        icons: {
          main: main,
          mask: mask
        },
        prefix: prefix,
        iconName: iconName,
        transform: transform,
        symbol: symbol,
        mask: mask,
        maskId: maskId,
        title: title,
        titleId: titleId,
        extra: extra,
        watchable: true
      })]);
    });
  });
}

function generateLayersText(node, nodeMeta) {
  var title = nodeMeta.title,
      transform = nodeMeta.transform,
      extra = nodeMeta.extra;
  var width = null;
  var height = null;

  if (IS_IE) {
    var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
    var boundingClientRect = node.getBoundingClientRect();
    width = boundingClientRect.width / computedFontSize;
    height = boundingClientRect.height / computedFontSize;
  }

  if (config.autoA11y && !title) {
    extra.attributes['aria-hidden'] = 'true';
  }

  return picked.resolve([node, makeLayersTextAbstract({
    content: node.innerHTML,
    width: width,
    height: height,
    transform: transform,
    title: title,
    extra: extra,
    watchable: true
  })]);
}

function generateMutation(node) {
  var nodeMeta = parseMeta(node);

  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
    return generateLayersText(node, nodeMeta);
  } else {
    return generateSvgReplacementMutation(node, nodeMeta);
  }
}

function onTree(root) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (!IS_DOM) return;
  var htmlClassList = DOCUMENT.documentElement.classList;

  var hclAdd = function hclAdd(suffix) {
    return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var hclRemove = function hclRemove(suffix) {
    return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var prefixes = config.autoFetchSvg ? Object.keys(PREFIX_TO_STYLE) : Object.keys(styles$3);
  var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map(function (p) {
    return ".".concat(p, ":not([").concat(DATA_FA_I2SVG, "])");
  })).join(', ');

  if (prefixesDomQuery.length === 0) {
    return;
  }

  var candidates = [];

  try {
    candidates = toArray(root.querySelectorAll(prefixesDomQuery));
  } catch (e) {// noop
  }

  if (candidates.length > 0) {
    hclAdd('pending');
    hclRemove('complete');
  } else {
    return;
  }

  var mark = perf.begin('onTree');
  var mutations = candidates.reduce(function (acc, node) {
    try {
      var mutation = generateMutation(node);

      if (mutation) {
        acc.push(mutation);
      }
    } catch (e) {
      if (!PRODUCTION) {
        if (e instanceof MissingIcon) {
          console.error(e);
        }
      }
    }

    return acc;
  }, []);
  return new picked(function (resolve, reject) {
    picked.all(mutations).then(function (resolvedMutations) {
      perform(resolvedMutations, function () {
        hclAdd('active');
        hclAdd('complete');
        hclRemove('pending');
        if (typeof callback === 'function') callback();
        mark();
        resolve();
      });
    }).catch(function () {
      mark();
      reject();
    });
  });
}
function onNode(node) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  generateMutation(node).then(function (mutation) {
    if (mutation) {
      perform([mutation], callback);
    }
  });
}

function replaceForPosition(node, position) {
  var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(':', '-'));
  return new picked(function (resolve, reject) {
    if (node.getAttribute(pendingAttribute) !== null) {
      // This node is already being processed
      return resolve();
    }

    var children = toArray(node.children);
    var alreadyProcessedPseudoElement = children.filter(function (c) {
      return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
    })[0];
    var styles = WINDOW.getComputedStyle(node, position);
    var fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
    var fontWeight = styles.getPropertyValue('font-weight');
    var content = styles.getPropertyValue('content');

    if (alreadyProcessedPseudoElement && !fontFamily) {
      // If we've already processed it but the current computed style does not result in a font-family,
      // that probably means that a class name that was previously present to make the icon has been
      // removed. So we now should delete the icon.
      node.removeChild(alreadyProcessedPseudoElement);
      return resolve();
    } else if (fontFamily && content !== 'none' && content !== '') {
      var _content = styles.getPropertyValue('content');

      var prefix = ~['Solid', 'Regular', 'Light', 'Duotone', 'Brands', 'Kit'].indexOf(fontFamily[2]) ? STYLE_TO_PREFIX[fontFamily[2].toLowerCase()] : FONT_WEIGHT_TO_PREFIX[fontWeight];
      var hexValue = toHex(_content.length === 3 ? _content.substr(1, 1) : _content);
      var iconName = byUnicode(prefix, hexValue);
      var iconIdentifier = iconName; // Only convert the pseudo element in this :before/:after position into an icon if we haven't
      // already done so with the same prefix and iconName

      if (iconName && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
        node.setAttribute(pendingAttribute, iconIdentifier);

        if (alreadyProcessedPseudoElement) {
          // Delete the old one, since we're replacing it with a new one
          node.removeChild(alreadyProcessedPseudoElement);
        }

        var meta = blankMeta();
        var extra = meta.extra;
        extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
        findIcon(iconName, prefix).then(function (main) {
          var abstract = makeInlineSvgAbstract(_objectSpread({}, meta, {
            icons: {
              main: main,
              mask: emptyCanonicalIcon()
            },
            prefix: prefix,
            iconName: iconIdentifier,
            extra: extra,
            watchable: true
          }));
          var element = DOCUMENT.createElement('svg');

          if (position === ':before') {
            node.insertBefore(element, node.firstChild);
          } else {
            node.appendChild(element);
          }

          element.outerHTML = abstract.map(function (a) {
            return toHtml(a);
          }).join('\n');
          node.removeAttribute(pendingAttribute);
          resolve();
        }).catch(reject);
      } else {
        resolve();
      }
    } else {
      resolve();
    }
  });
}

function replace(node) {
  return picked.all([replaceForPosition(node, ':before'), replaceForPosition(node, ':after')]);
}

function processable(node) {
  return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== 'svg');
}

function searchPseudoElements (root) {
  if (!IS_DOM) return;
  return new picked(function (resolve, reject) {
    var operations = toArray(root.querySelectorAll('*')).filter(processable).map(replace);
    var end = perf.begin('searchPseudoElements');
    disableObservation();
    picked.all(operations).then(function () {
      end();
      enableObservation();
      resolve();
    }).catch(function () {
      end();
      enableObservation();
      reject();
    });
  });
}

var baseStyles = "svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}";

function css () {
  var dfp = DEFAULT_FAMILY_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config.familyPrefix;
  var rc = config.replacementClass;
  var s = baseStyles;

  if (fp !== dfp || rc !== drc) {
    var dPatt = new RegExp("\\.".concat(dfp, "\\-"), 'g');
    var customPropPatt = new RegExp("\\--".concat(dfp, "\\-"), 'g');
    var rPatt = new RegExp("\\.".concat(drc), 'g');
    s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
  }

  return s;
}

var Library =
/*#__PURE__*/
function () {
  function Library() {
    _classCallCheck(this, Library);

    this.definitions = {};
  }

  _createClass(Library, [{
    key: "add",
    value: function add() {
      var _this = this;

      for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }

      var additions = definitions.reduce(this._pullDefinitions, {});
      Object.keys(additions).forEach(function (key) {
        _this.definitions[key] = _objectSpread({}, _this.definitions[key] || {}, additions[key]);
        defineIcons(key, additions[key]);
        build();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? {
        0: definition
      } : definition;
      Object.keys(normalized).map(function (key) {
        var _normalized$key = normalized[key],
            prefix = _normalized$key.prefix,
            iconName = _normalized$key.iconName,
            icon = _normalized$key.icon;
        if (!additions[prefix]) additions[prefix] = {};
        additions[prefix][iconName] = icon;
      });
      return additions;
    }
  }]);

  return Library;
}();

function ensureCss() {
  if (config.autoAddCss && !_cssInserted) {
    insertCss(css());

    _cssInserted = true;
  }
}

function apiObject(val, abstractCreator) {
  Object.defineProperty(val, 'abstract', {
    get: abstractCreator
  });
  Object.defineProperty(val, 'html', {
    get: function get() {
      return val.abstract.map(function (a) {
        return toHtml(a);
      });
    }
  });
  Object.defineProperty(val, 'node', {
    get: function get() {
      if (!IS_DOM) return;
      var container = DOCUMENT.createElement('div');
      container.innerHTML = val.html;
      return container.children;
    }
  });
  return val;
}

function findIconDefinition(iconLookup) {
  var _iconLookup$prefix = iconLookup.prefix,
      prefix = _iconLookup$prefix === void 0 ? 'fa' : _iconLookup$prefix,
      iconName = iconLookup.iconName;
  if (!iconName) return;
  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}

function resolveIcons(next) {
  return function (maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
    var mask = params.mask;

    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }

    return next(iconDefinition, _objectSpread({}, params, {
      mask: mask
    }));
  };
}

var library = new Library();
var noAuto = function noAuto() {
  config.autoReplaceSvg = false;
  config.observeMutations = false;
  disconnect();
};
var _cssInserted = false;
var dom = {
  i2svg: function i2svg() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (IS_DOM) {
      ensureCss();
      var _params$node = params.node,
          node = _params$node === void 0 ? DOCUMENT : _params$node,
          _params$callback = params.callback,
          callback = _params$callback === void 0 ? function () {} : _params$callback;

      if (config.searchPseudoElements) {
        searchPseudoElements(node);
      }

      return onTree(node, callback);
    } else {
      return picked.reject('Operation requires a DOM of some kind.');
    }
  },
  css: css,
  insertCss: function insertCss$$1() {
    if (!_cssInserted) {
      insertCss(css());

      _cssInserted = true;
    }
  },
  watch: function watch() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var autoReplaceSvgRoot = params.autoReplaceSvgRoot,
        observeMutationsRoot = params.observeMutationsRoot;

    if (config.autoReplaceSvg === false) {
      config.autoReplaceSvg = true;
    }

    config.observeMutations = true;
    domready(function () {
      autoReplace({
        autoReplaceSvgRoot: autoReplaceSvgRoot
      });
      observe({
        treeCallback: onTree,
        nodeCallback: onNode,
        pseudoElementsCallback: searchPseudoElements,
        observeMutationsRoot: observeMutationsRoot
      });
    });
  }
};
var parse = {
  transform: function transform(transformString) {
    return parseTransformString(transformString);
  }
};
var icon = resolveIcons(function (iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform = params.transform,
      transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
      _params$symbol = params.symbol,
      symbol = _params$symbol === void 0 ? false : _params$symbol,
      _params$mask = params.mask,
      mask = _params$mask === void 0 ? null : _params$mask,
      _params$maskId = params.maskId,
      maskId = _params$maskId === void 0 ? null : _params$maskId,
      _params$title = params.title,
      title = _params$title === void 0 ? null : _params$title,
      _params$titleId = params.titleId,
      titleId = _params$titleId === void 0 ? null : _params$titleId,
      _params$classes = params.classes,
      classes = _params$classes === void 0 ? [] : _params$classes,
      _params$attributes = params.attributes,
      attributes = _params$attributes === void 0 ? {} : _params$attributes,
      _params$styles = params.styles,
      styles = _params$styles === void 0 ? {} : _params$styles;
  if (!iconDefinition) return;
  var prefix = iconDefinition.prefix,
      iconName = iconDefinition.iconName,
      icon = iconDefinition.icon;
  return apiObject(_objectSpread({
    type: 'icon'
  }, iconDefinition), function () {
    ensureCss();

    if (config.autoA11y) {
      if (title) {
        attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
      } else {
        attributes['aria-hidden'] = 'true';
        attributes['focusable'] = 'false';
      }
    }

    return makeInlineSvgAbstract({
      icons: {
        main: asFoundIcon(icon),
        mask: mask ? asFoundIcon(mask.icon) : {
          found: false,
          width: null,
          height: null,
          icon: {}
        }
      },
      prefix: prefix,
      iconName: iconName,
      transform: _objectSpread({}, meaninglessTransform, transform),
      symbol: symbol,
      title: title,
      maskId: maskId,
      titleId: titleId,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: classes
      }
    });
  });
});
var text = function text(content) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform2 = params.transform,
      transform = _params$transform2 === void 0 ? meaninglessTransform : _params$transform2,
      _params$title2 = params.title,
      title = _params$title2 === void 0 ? null : _params$title2,
      _params$classes2 = params.classes,
      classes = _params$classes2 === void 0 ? [] : _params$classes2,
      _params$attributes2 = params.attributes,
      attributes = _params$attributes2 === void 0 ? {} : _params$attributes2,
      _params$styles2 = params.styles,
      styles = _params$styles2 === void 0 ? {} : _params$styles2;
  return apiObject({
    type: 'text',
    content: content
  }, function () {
    ensureCss();
    return makeLayersTextAbstract({
      content: content,
      transform: _objectSpread({}, meaninglessTransform, transform),
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: ["".concat(config.familyPrefix, "-layers-text")].concat(_toConsumableArray(classes))
      }
    });
  });
};
var counter = function counter(content) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$title3 = params.title,
      title = _params$title3 === void 0 ? null : _params$title3,
      _params$classes3 = params.classes,
      classes = _params$classes3 === void 0 ? [] : _params$classes3,
      _params$attributes3 = params.attributes,
      attributes = _params$attributes3 === void 0 ? {} : _params$attributes3,
      _params$styles3 = params.styles,
      styles = _params$styles3 === void 0 ? {} : _params$styles3;
  return apiObject({
    type: 'counter',
    content: content
  }, function () {
    ensureCss();
    return makeLayersCounterAbstract({
      content: content.toString(),
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: ["".concat(config.familyPrefix, "-layers-counter")].concat(_toConsumableArray(classes))
      }
    });
  });
};
var layer = function layer(assembler) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$classes4 = params.classes,
      classes = _params$classes4 === void 0 ? [] : _params$classes4;
  return apiObject({
    type: 'layer'
  }, function () {
    ensureCss();
    var children = [];
    assembler(function (args) {
      Array.isArray(args) ? args.map(function (a) {
        children = children.concat(a.abstract);
      }) : children = children.concat(args.abstract);
    });
    return [{
      tag: 'span',
      attributes: {
        class: ["".concat(config.familyPrefix, "-layers")].concat(_toConsumableArray(classes)).join(' ')
      },
      children: children
    }];
  });
};
var api = {
  noAuto: noAuto,
  config: config,
  dom: dom,
  library: library,
  parse: parse,
  findIconDefinition: findIconDefinition,
  icon: icon,
  text: text,
  counter: counter,
  layer: layer,
  toHtml: toHtml
};

var autoReplace = function autoReplace() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _params$autoReplaceSv = params.autoReplaceSvgRoot,
      autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
  if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
    node: autoReplaceSvgRoot
  });
};




/***/ }),

/***/ "./node_modules/@fortawesome/react-fontawesome/index.es.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@fortawesome/react-fontawesome/index.es.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FontAwesomeIcon": () => (/* binding */ FontAwesomeIcon)
/* harmony export */ });
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");




function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

// Get CSS class list from a props object
function classList(props) {
  var _classes;

  var spin = props.spin,
      pulse = props.pulse,
      fixedWidth = props.fixedWidth,
      inverse = props.inverse,
      border = props.border,
      listItem = props.listItem,
      flip = props.flip,
      size = props.size,
      rotation = props.rotation,
      pull = props.pull; // map of CSS class names to properties

  var classes = (_classes = {
    'fa-spin': spin,
    'fa-pulse': pulse,
    'fa-fw': fixedWidth,
    'fa-inverse': inverse,
    'fa-border': border,
    'fa-li': listItem,
    'fa-flip-horizontal': flip === 'horizontal' || flip === 'both',
    'fa-flip-vertical': flip === 'vertical' || flip === 'both'
  }, _defineProperty(_classes, "fa-".concat(size), typeof size !== 'undefined' && size !== null), _defineProperty(_classes, "fa-rotate-".concat(rotation), typeof rotation !== 'undefined' && rotation !== null && rotation !== 0), _defineProperty(_classes, "fa-pull-".concat(pull), typeof pull !== 'undefined' && pull !== null), _defineProperty(_classes, 'fa-swap-opacity', props.swapOpacity), _classes); // map over all the keys in the classes object
  // return an array of the keys where the value for the key is not null

  return Object.keys(classes).map(function (key) {
    return classes[key] ? key : null;
  }).filter(function (key) {
    return key;
  });
}

// Camelize taken from humps
// humps is copyright © 2012+ Dom Christie
// Released under the MIT license.
// Performant way to determine if object coerces to a number
function _isNumerical(obj) {
  obj = obj - 0; // eslint-disable-next-line no-self-compare

  return obj === obj;
}

function camelize(string) {
  if (_isNumerical(string)) {
    return string;
  } // eslint-disable-next-line no-useless-escape


  string = string.replace(/[\-_\s]+(.)?/g, function (match, chr) {
    return chr ? chr.toUpperCase() : '';
  }); // Ensure 1st char is always lowercase

  return string.substr(0, 1).toLowerCase() + string.substr(1);
}

function capitalize(val) {
  return val.charAt(0).toUpperCase() + val.slice(1);
}

function styleToObject(style) {
  return style.split(';').map(function (s) {
    return s.trim();
  }).filter(function (s) {
    return s;
  }).reduce(function (acc, pair) {
    var i = pair.indexOf(':');
    var prop = camelize(pair.slice(0, i));
    var value = pair.slice(i + 1).trim();
    prop.startsWith('webkit') ? acc[capitalize(prop)] = value : acc[prop] = value;
    return acc;
  }, {});
}

function convert(createElement, element) {
  var extraProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (typeof element === 'string') {
    return element;
  }

  var children = (element.children || []).map(function (child) {
    return convert(createElement, child);
  });
  /* eslint-disable dot-notation */

  var mixins = Object.keys(element.attributes || {}).reduce(function (acc, key) {
    var val = element.attributes[key];

    switch (key) {
      case 'class':
        acc.attrs['className'] = val;
        delete element.attributes['class'];
        break;

      case 'style':
        acc.attrs['style'] = styleToObject(val);
        break;

      default:
        if (key.indexOf('aria-') === 0 || key.indexOf('data-') === 0) {
          acc.attrs[key.toLowerCase()] = val;
        } else {
          acc.attrs[camelize(key)] = val;
        }

    }

    return acc;
  }, {
    attrs: {}
  });

  var _extraProps$style = extraProps.style,
      existingStyle = _extraProps$style === void 0 ? {} : _extraProps$style,
      remaining = _objectWithoutProperties(extraProps, ["style"]);

  mixins.attrs['style'] = _objectSpread2({}, mixins.attrs['style'], {}, existingStyle);
  /* eslint-enable */

  return createElement.apply(void 0, [element.tag, _objectSpread2({}, mixins.attrs, {}, remaining)].concat(_toConsumableArray(children)));
}

var PRODUCTION = false;

try {
  PRODUCTION = "development" === 'production';
} catch (e) {}

function log () {
  if (!PRODUCTION && console && typeof console.error === 'function') {
    var _console;

    (_console = console).error.apply(_console, arguments);
  }
}

function normalizeIconArgs(icon) {
  // this has everything that it needs to be rendered which means it was probably imported
  // directly from an icon svg package
  if (icon && _typeof(icon) === 'object' && icon.prefix && icon.iconName && icon.icon) {
    return icon;
  }

  if (_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.parse.icon) {
    return _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.parse.icon(icon);
  } // if the icon is null, there's nothing to do


  if (icon === null) {
    return null;
  } // if the icon is an object and has a prefix and an icon name, return it


  if (icon && _typeof(icon) === 'object' && icon.prefix && icon.iconName) {
    return icon;
  } // if it's an array with length of two


  if (Array.isArray(icon) && icon.length === 2) {
    // use the first item as prefix, second as icon name
    return {
      prefix: icon[0],
      iconName: icon[1]
    };
  } // if it's a string, use it as the icon name


  if (typeof icon === 'string') {
    return {
      prefix: 'fas',
      iconName: icon
    };
  }
}

// creates an object with a key of key
// and a value of value
// if certain conditions are met
function objectWithKey(key, value) {
  // if the value is a non-empty array
  // or it's not an array but it is truthy
  // then create the object with the key and the value
  // if not, return an empty array
  return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? _defineProperty({}, key, value) : {};
}

function FontAwesomeIcon(_ref) {
  var forwardedRef = _ref.forwardedRef,
      props = _objectWithoutProperties(_ref, ["forwardedRef"]);

  var iconArgs = props.icon,
      maskArgs = props.mask,
      symbol = props.symbol,
      className = props.className,
      title = props.title,
      titleId = props.titleId;
  var iconLookup = normalizeIconArgs(iconArgs);
  var classes = objectWithKey('classes', [].concat(_toConsumableArray(classList(props)), _toConsumableArray(className.split(' '))));
  var transform = objectWithKey('transform', typeof props.transform === 'string' ? _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.parse.transform(props.transform) : props.transform);
  var mask = objectWithKey('mask', normalizeIconArgs(maskArgs));
  var renderedIcon = (0,_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.icon)(iconLookup, _objectSpread2({}, classes, {}, transform, {}, mask, {
    symbol: symbol,
    title: title,
    titleId: titleId
  }));

  if (!renderedIcon) {
    log('Could not find icon', iconLookup);
    return null;
  }

  var abstract = renderedIcon.abstract;
  var extraProps = {
    ref: forwardedRef
  };
  Object.keys(props).forEach(function (key) {
    // eslint-disable-next-line no-prototype-builtins
    if (!FontAwesomeIcon.defaultProps.hasOwnProperty(key)) {
      extraProps[key] = props[key];
    }
  });
  return convertCurry(abstract[0], extraProps);
}
FontAwesomeIcon.displayName = 'FontAwesomeIcon';
FontAwesomeIcon.propTypes = {
  border: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  mask: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)]),
  fixedWidth: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  inverse: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  flip: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(['horizontal', 'vertical', 'both']),
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)]),
  listItem: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  pull: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(['right', 'left']),
  pulse: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  rotation: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([0, 90, 180, 270]),
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']),
  spin: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  symbol: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)]),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  transform: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)]),
  swapOpacity: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
FontAwesomeIcon.defaultProps = {
  border: false,
  className: '',
  mask: null,
  fixedWidth: false,
  inverse: false,
  flip: null,
  icon: null,
  listItem: false,
  pull: null,
  pulse: false,
  rotation: null,
  size: null,
  spin: false,
  symbol: false,
  title: '',
  transform: null,
  swapOpacity: false
};
var convertCurry = convert.bind(null, react__WEBPACK_IMPORTED_MODULE_2__.createElement);




/***/ }),

/***/ "./javascript/Search/StudentInfo.js":
/*!******************************************!*\
  !*** ./javascript/Search/StudentInfo.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Trip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Trip */ "./javascript/Search/Trip.js");






var StudentInfo = function StudentInfo(_ref) {
  var student = _ref.student,
      searchResult = _ref.searchResult;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Student"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, student.firstName, " ", student.lastName, " |", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "mailto:{student.email}"
  }, student.email), " |", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "tel:+1{student.phone}"
  }, student.phone))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Upcoming trips"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, searchResult.map(function (trip, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-6",
      key: key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "card mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "card-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Trip__WEBPACK_IMPORTED_MODULE_2__["default"], {
      trip: trip,
      key: key
    }))));
  }))));
};

StudentInfo.propTypes = {
  student: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  searchResult: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StudentInfo);

/***/ }),

/***/ "./javascript/Search/Trip.js":
/*!***********************************!*\
  !*** ./javascript/Search/Trip.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);






var Trip = function Trip(_ref) {
  var trip = _ref.trip;
  var contactName = trip.contactName,
      contactEmail = trip.contactEmail,
      contactPhone = trip.contactPhone,
      destinationCity = trip.destinationCity,
      destinationState = trip.destinationState,
      destinationCountry = trip.destinationCountry,
      host = trip.host,
      housingAddress = trip.housingAddress,
      secContactEmail = trip.secContactEmail,
      secContactName = trip.secContactName,
      secContactPhone = trip.secContactPhone,
      submitEmail = trip.submitEmail,
      submitName = trip.submitName,
      submitDate = trip.submitDate,
      timeDeparting = trip.timeDeparting,
      timeEventStarts = trip.timeEventStarts,
      timeReturn = trip.timeReturn,
      visitPurpose = trip.visitPurpose;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Submitted"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Submitted by"), ":", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "mailto:".concat(submitEmail)
  }, submitName), " on", ' ', dayjs__WEBPACK_IMPORTED_MODULE_2___default()().format('MMM D, YYYY', submitDate), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Purpose:"), " ", visitPurpose)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Destination"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Host:"), " ", host, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Location:"), " ", destinationCity, ", ", destinationState, ",", ' ', destinationCountry, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Housing:"), " ", housingAddress)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-6 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Primary contact"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, contactName, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "mailto:{contactEmail}"
  }, contactEmail), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "tel:+1{contactPhone}"
  }, contactPhone))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-6 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Secondary contact"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, secContactName, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "mailto:".concat(secContactEmail)
  }, secContactEmail), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "mailto:".concat(secContactPhone)
  }, secContactPhone)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Itinerary"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Departing:"), ' ', dayjs__WEBPACK_IMPORTED_MODULE_2___default().unix(timeDeparting).format('MMM D, YYYY'), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Event start:"), ' ', dayjs__WEBPACK_IMPORTED_MODULE_2___default().unix(timeEventStarts).format('MMM D, YYYY'), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Returning:"), ' ', dayjs__WEBPACK_IMPORTED_MODULE_2___default().unix(timeReturn).format('MMM D, YYYY'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null))));
};

Trip.propTypes = {
  trip: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Trip);

/***/ }),

/***/ "./javascript/Search/index.jsx":
/*!*************************************!*\
  !*** ./javascript/Search/index.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _api_Fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/Fetch */ "./javascript/api/Fetch.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _StudentInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StudentInfo */ "./javascript/Search/StudentInfo.js");


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var Search = function Search() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      bannerId = _useState4[0],
      setBannerId = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      searchResult = _useState6[0],
      setSearchResult = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      student = _useState8[0],
      setStudent = _useState8[1];

  var idInput = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  var updateBannerId = function updateBannerId(bannerId) {
    if (!isNaN(bannerId) && bannerId.length < 10) {
      setBannerId(bannerId);
    }
  };

  var checkEnter = function checkEnter(event) {
    if (event.keyCode === 13 && !loading) {
      searchForStudent();
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (bannerId.length === 9) {
      searchForStudent();
    }
  }, [bannerId]);

  var searchForStudent = function searchForStudent() {
    setLoading(true);
    setStudent(null);
    (0,_api_Fetch__WEBPACK_IMPORTED_MODULE_2__.getItem)('Search/find', {
      studentBannerId: bannerId
    }).then(function (response) {
      var data = response.data;
      setSearchResult(data.trips);
      setStudent(data.student);
      setLoading(false);
    });
  };

  var resetSearch = function resetSearch() {
    updateBannerId('');
    setSearchResult('');
    setStudent(null);
    idInput.current.focus();
  };

  var backToTop = null;

  if (student !== null) {
    backToTop = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "border-top mt-4 pt-4 text-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "btn btn-outline-dark",
      onClick: function onClick() {
        idInput.current.focus();
      }
    }, "Return to top"));
  }

  var printSearchResult = function printSearchResult() {
    if (!loading) {
      if (searchResult == 'found') {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "alert alert-success"
        }, "Student information below.");
      } else {
        switch (searchResult) {
          case 'noconnect':
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
              className: "alert alert-danger"
            }, "Could not connect to server.");

          case 'timeout':
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
              className: "alert alert-danger"
            }, "Server request timed out. Try again in a few seconds.");

          case 'incomplete':
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
              className: "alert alert-danger"
            }, "Server returned an incomplete result.");

          case 'missing':
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
              className: "alert alert-warning"
            }, "Student not found.");

          case 'unknown':
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
              className: "alert alert-danger"
            }, "Unknown error.");
        }
      }
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row d-print-none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-8 mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "float-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "btn btn-sm btn-outline-danger",
    href: "./secure/logout.php"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-sign-out-alt"
  }), "\xA0Logout")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: "card-title"
  }, "Enter student Banner ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-group mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    ref: idInput,
    type: "text",
    name: "bannerId",
    className: "form-control",
    style: {
      fontSize: '28px'
    },
    onKeyUp: checkEnter,
    onChange: function onChange(e) {
      return updateBannerId(e.target.value);
    },
    value: bannerId
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btn btn-outline-primary",
    type: "button",
    onClick: resetSearch
  }, "Clear")), loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "lead text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
    icon: "spinner",
    size: "lg",
    spin: true
  }), "\xA0Searching for student...") : printSearchResult())))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-12"
  }, student && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_StudentInfo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    student: student,
    searchResult: searchResult
  }), backToTop));
};

react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Search, null), document.getElementById('Search'));

/***/ }),

/***/ "./javascript/api/Fetch.js":
/*!*********************************!*\
  !*** ./javascript/api/Fetch.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getList": () => (/* binding */ getList),
/* harmony export */   "getItem": () => (/* binding */ getItem),
/* harmony export */   "postItem": () => (/* binding */ postItem),
/* harmony export */   "saveDirectory": () => (/* binding */ saveDirectory),
/* harmony export */   "deleteSite": () => (/* binding */ deleteSite)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_1__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var headers = {
  'X-Requested-With': 'XMLHttpRequest'
};

var deleteSite = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(siteId) {
    var url;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = './tripdashboard/Site/' + siteId;
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"](url, {
              headers: headers
            });

          case 3:
            return _context.abrupt("return", _context.sent);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function deleteSite(_x) {
    return _ref.apply(this, arguments);
  };
}();

var saveDirectory = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dir) {
    var url, params;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = './tripdashboard/Setting/saveDirectory';
            params = {
              directory: dir
            };
            _context2.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, {
              params: params,
              headers: headers
            });

          case 4:
            return _context2.abrupt("return", _context2.sent);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function saveDirectory(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var getList = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(url, options) {
    var response;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, {
              params: options,
              headers: headers
            });

          case 2:
            response = _context3.sent;
            return _context3.abrupt("return", response);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getList(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();

var getItem = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(command, params) {
    var url;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            url = "tripdashboard/".concat(command);
            _context4.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, {
              params: params,
              headers: headers
            });

          case 3:
            return _context4.abrupt("return", _context4.sent);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getItem(_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();

var postItem = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(item, itemName) {
    var role,
        url,
        _args5 = arguments;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            role = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : 'Admin';
            url = "triptrack/".concat(role, "/").concat(itemName, "/").concat(item.id > 0 ? item.id : '');
            _context5.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_0___default()({
              method: item.id > 0 ? 'put' : 'post',
              url: url,
              data: item,
              timeout: 3000,
              headers: headers
            });

          case 4:
            return _context5.abrupt("return", _context5.sent);

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function postItem(_x7, _x8) {
    return _ref5.apply(this, arguments);
  };
}();



/***/ }),

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"Search": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktripdashboard"] = self["webpackChunktripdashboard"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./javascript/Search/index.jsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUkscUJBQU07QUFDVjtBQUNBOztBQUVBO0FBQ0EsRUFBRSxxQkFBTTtBQUNSO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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O0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLLElBQUk7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFaERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmlwZGFzaGJvYXJkLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZS9pbmRleC5lcy5qcyIsIndlYnBhY2s6Ly90cmlwZGFzaGJvYXJkLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZS9pbmRleC5lcy5qcyIsIndlYnBhY2s6Ly90cmlwZGFzaGJvYXJkLy4vamF2YXNjcmlwdC9TZWFyY2gvU3R1ZGVudEluZm8uanMiLCJ3ZWJwYWNrOi8vdHJpcGRhc2hib2FyZC8uL2phdmFzY3JpcHQvU2VhcmNoL1RyaXAuanMiLCJ3ZWJwYWNrOi8vdHJpcGRhc2hib2FyZC8uL2phdmFzY3JpcHQvU2VhcmNoL2luZGV4LmpzeCIsIndlYnBhY2s6Ly90cmlwZGFzaGJvYXJkLy4vamF2YXNjcmlwdC9hcGkvRmV0Y2guanMiLCJ3ZWJwYWNrOi8vdHJpcGRhc2hib2FyZC8uL25vZGVfbW9kdWxlcy9kYXlqcy9kYXlqcy5taW4uanMiLCJ3ZWJwYWNrOi8vdHJpcGRhc2hib2FyZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90cmlwZGFzaGJvYXJkL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vdHJpcGRhc2hib2FyZC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90cmlwZGFzaGJvYXJkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90cmlwZGFzaGJvYXJkL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdHJpcGRhc2hib2FyZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RyaXBkYXNoYm9hcmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90cmlwZGFzaGJvYXJkL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RyaXBkYXNoYm9hcmQvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90cmlwZGFzaGJvYXJkL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90cmlwZGFzaGJvYXJkL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEZvbnQgQXdlc29tZSBGcmVlIDUuMTUuNCBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbVxuICogTGljZW5zZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tL2xpY2Vuc2UvZnJlZSAoSWNvbnM6IENDIEJZIDQuMCwgRm9udHM6IFNJTCBPRkwgMS4xLCBDb2RlOiBNSVQgTGljZW5zZSlcbiAqL1xuZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcblxuICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTtcbn1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICAgIHJldHVybiBhcnIyO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVyKSA9PT0gXCJbb2JqZWN0IEFyZ3VtZW50c11cIikgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbn1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG59XG5cbnZhciBub29wID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xuXG52YXIgX1dJTkRPVyA9IHt9O1xudmFyIF9ET0NVTUVOVCA9IHt9O1xudmFyIF9NVVRBVElPTl9PQlNFUlZFUiA9IG51bGw7XG52YXIgX1BFUkZPUk1BTkNFID0ge1xuICBtYXJrOiBub29wLFxuICBtZWFzdXJlOiBub29wXG59O1xuXG50cnkge1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIF9XSU5ET1cgPSB3aW5kb3c7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSBfRE9DVU1FTlQgPSBkb2N1bWVudDtcbiAgaWYgKHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJykgX01VVEFUSU9OX09CU0VSVkVSID0gTXV0YXRpb25PYnNlcnZlcjtcbiAgaWYgKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcpIF9QRVJGT1JNQU5DRSA9IHBlcmZvcm1hbmNlO1xufSBjYXRjaCAoZSkge31cblxudmFyIF9yZWYgPSBfV0lORE9XLm5hdmlnYXRvciB8fCB7fSxcbiAgICBfcmVmJHVzZXJBZ2VudCA9IF9yZWYudXNlckFnZW50LFxuICAgIHVzZXJBZ2VudCA9IF9yZWYkdXNlckFnZW50ID09PSB2b2lkIDAgPyAnJyA6IF9yZWYkdXNlckFnZW50O1xuXG52YXIgV0lORE9XID0gX1dJTkRPVztcbnZhciBET0NVTUVOVCA9IF9ET0NVTUVOVDtcbnZhciBNVVRBVElPTl9PQlNFUlZFUiA9IF9NVVRBVElPTl9PQlNFUlZFUjtcbnZhciBQRVJGT1JNQU5DRSA9IF9QRVJGT1JNQU5DRTtcbnZhciBJU19CUk9XU0VSID0gISFXSU5ET1cuZG9jdW1lbnQ7XG52YXIgSVNfRE9NID0gISFET0NVTUVOVC5kb2N1bWVudEVsZW1lbnQgJiYgISFET0NVTUVOVC5oZWFkICYmIHR5cGVvZiBET0NVTUVOVC5hZGRFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBET0NVTUVOVC5jcmVhdGVFbGVtZW50ID09PSAnZnVuY3Rpb24nO1xudmFyIElTX0lFID0gfnVzZXJBZ2VudC5pbmRleE9mKCdNU0lFJykgfHwgfnVzZXJBZ2VudC5pbmRleE9mKCdUcmlkZW50LycpO1xuXG52YXIgTkFNRVNQQUNFX0lERU5USUZJRVIgPSAnX19fRk9OVF9BV0VTT01FX19fJztcbnZhciBVTklUU19JTl9HUklEID0gMTY7XG52YXIgREVGQVVMVF9GQU1JTFlfUFJFRklYID0gJ2ZhJztcbnZhciBERUZBVUxUX1JFUExBQ0VNRU5UX0NMQVNTID0gJ3N2Zy1pbmxpbmUtLWZhJztcbnZhciBEQVRBX0ZBX0kyU1ZHID0gJ2RhdGEtZmEtaTJzdmcnO1xudmFyIERBVEFfRkFfUFNFVURPX0VMRU1FTlQgPSAnZGF0YS1mYS1wc2V1ZG8tZWxlbWVudCc7XG52YXIgREFUQV9GQV9QU0VVRE9fRUxFTUVOVF9QRU5ESU5HID0gJ2RhdGEtZmEtcHNldWRvLWVsZW1lbnQtcGVuZGluZyc7XG52YXIgREFUQV9QUkVGSVggPSAnZGF0YS1wcmVmaXgnO1xudmFyIERBVEFfSUNPTiA9ICdkYXRhLWljb24nO1xudmFyIEhUTUxfQ0xBU1NfSTJTVkdfQkFTRV9DTEFTUyA9ICdmb250YXdlc29tZS1pMnN2Zyc7XG52YXIgTVVUQVRJT05fQVBQUk9BQ0hfQVNZTkMgPSAnYXN5bmMnO1xudmFyIFRBR05BTUVTX1RPX1NLSVBfRk9SX1BTRVVET0VMRU1FTlRTID0gWydIVE1MJywgJ0hFQUQnLCAnU1RZTEUnLCAnU0NSSVBUJ107XG52YXIgUFJPRFVDVElPTiA9IGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufSgpO1xudmFyIFBSRUZJWF9UT19TVFlMRSA9IHtcbiAgJ2Zhcyc6ICdzb2xpZCcsXG4gICdmYXInOiAncmVndWxhcicsXG4gICdmYWwnOiAnbGlnaHQnLFxuICAnZmFkJzogJ2R1b3RvbmUnLFxuICAnZmFiJzogJ2JyYW5kcycsXG4gICdmYWsnOiAna2l0JyxcbiAgJ2ZhJzogJ3NvbGlkJ1xufTtcbnZhciBTVFlMRV9UT19QUkVGSVggPSB7XG4gICdzb2xpZCc6ICdmYXMnLFxuICAncmVndWxhcic6ICdmYXInLFxuICAnbGlnaHQnOiAnZmFsJyxcbiAgJ2R1b3RvbmUnOiAnZmFkJyxcbiAgJ2JyYW5kcyc6ICdmYWInLFxuICAna2l0JzogJ2Zhaydcbn07XG52YXIgTEFZRVJTX1RFWFRfQ0xBU1NOQU1FID0gJ2ZhLWxheWVycy10ZXh0JztcbnZhciBGT05UX0ZBTUlMWV9QQVRURVJOID0gL0ZvbnQgQXdlc29tZSAoWzUgXSopKFNvbGlkfFJlZ3VsYXJ8TGlnaHR8RHVvdG9uZXxCcmFuZHN8RnJlZXxQcm98S2l0KS4qL2k7IC8vIFRPRE86IGRvIHdlIG5lZWQgdG8gaGFuZGxlIGZvbnQtd2VpZ2h0IGZvciBraXQgU1ZHIHBzZXVkby1lbGVtZW50cz9cblxudmFyIEZPTlRfV0VJR0hUX1RPX1BSRUZJWCA9IHtcbiAgJzkwMCc6ICdmYXMnLFxuICAnNDAwJzogJ2ZhcicsXG4gICdub3JtYWwnOiAnZmFyJyxcbiAgJzMwMCc6ICdmYWwnXG59O1xudmFyIG9uZVRvVGVuID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwXTtcbnZhciBvbmVUb1R3ZW50eSA9IG9uZVRvVGVuLmNvbmNhdChbMTEsIDEyLCAxMywgMTQsIDE1LCAxNiwgMTcsIDE4LCAxOSwgMjBdKTtcbnZhciBBVFRSSUJVVEVTX1dBVENIRURfRk9SX01VVEFUSU9OID0gWydjbGFzcycsICdkYXRhLXByZWZpeCcsICdkYXRhLWljb24nLCAnZGF0YS1mYS10cmFuc2Zvcm0nLCAnZGF0YS1mYS1tYXNrJ107XG52YXIgRFVPVE9ORV9DTEFTU0VTID0ge1xuICBHUk9VUDogJ2dyb3VwJyxcbiAgU1dBUF9PUEFDSVRZOiAnc3dhcC1vcGFjaXR5JyxcbiAgUFJJTUFSWTogJ3ByaW1hcnknLFxuICBTRUNPTkRBUlk6ICdzZWNvbmRhcnknXG59O1xudmFyIFJFU0VSVkVEX0NMQVNTRVMgPSBbJ3hzJywgJ3NtJywgJ2xnJywgJ2Z3JywgJ3VsJywgJ2xpJywgJ2JvcmRlcicsICdwdWxsLWxlZnQnLCAncHVsbC1yaWdodCcsICdzcGluJywgJ3B1bHNlJywgJ3JvdGF0ZS05MCcsICdyb3RhdGUtMTgwJywgJ3JvdGF0ZS0yNzAnLCAnZmxpcC1ob3Jpem9udGFsJywgJ2ZsaXAtdmVydGljYWwnLCAnZmxpcC1ib3RoJywgJ3N0YWNrJywgJ3N0YWNrLTF4JywgJ3N0YWNrLTJ4JywgJ2ludmVyc2UnLCAnbGF5ZXJzJywgJ2xheWVycy10ZXh0JywgJ2xheWVycy1jb3VudGVyJywgRFVPVE9ORV9DTEFTU0VTLkdST1VQLCBEVU9UT05FX0NMQVNTRVMuU1dBUF9PUEFDSVRZLCBEVU9UT05FX0NMQVNTRVMuUFJJTUFSWSwgRFVPVE9ORV9DTEFTU0VTLlNFQ09OREFSWV0uY29uY2F0KG9uZVRvVGVuLm1hcChmdW5jdGlvbiAobikge1xuICByZXR1cm4gXCJcIi5jb25jYXQobiwgXCJ4XCIpO1xufSkpLmNvbmNhdChvbmVUb1R3ZW50eS5tYXAoZnVuY3Rpb24gKG4pIHtcbiAgcmV0dXJuIFwidy1cIi5jb25jYXQobik7XG59KSk7XG5cbnZhciBpbml0aWFsID0gV0lORE9XLkZvbnRBd2Vzb21lQ29uZmlnIHx8IHt9O1xuXG5mdW5jdGlvbiBnZXRBdHRyQ29uZmlnKGF0dHIpIHtcbiAgdmFyIGVsZW1lbnQgPSBET0NVTUVOVC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbJyArIGF0dHIgKyAnXScpO1xuXG4gIGlmIChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvZXJjZSh2YWwpIHtcbiAgLy8gR2V0dGluZyBhbiBlbXB0eSBzdHJpbmcgd2lsbCBvY2N1ciBpZiB0aGUgYXR0cmlidXRlIGlzIHNldCBvbiB0aGUgSFRNTCB0YWcgYnV0IHdpdGhvdXQgYSB2YWx1ZVxuICAvLyBXZSdsbCBhc3N1bWUgdGhhdCB0aGlzIGlzIGFuIGluZGljYXRpb24gdGhhdCBpdCBzaG91bGQgYmUgdG9nZ2xlZCB0byB0cnVlXG4gIC8vIEZvciBleGFtcGxlIDxzY3JpcHQgZGF0YS1zZWFyY2gtcHNldWRvLWVsZW1lbnRzIHNyYz1cIi4uLlwiPjwvc2NyaXB0PlxuICBpZiAodmFsID09PSAnJykgcmV0dXJuIHRydWU7XG4gIGlmICh2YWwgPT09ICdmYWxzZScpIHJldHVybiBmYWxzZTtcbiAgaWYgKHZhbCA9PT0gJ3RydWUnKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIHZhbDtcbn1cblxuaWYgKERPQ1VNRU5UICYmIHR5cGVvZiBET0NVTUVOVC5xdWVyeVNlbGVjdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gIHZhciBhdHRycyA9IFtbJ2RhdGEtZmFtaWx5LXByZWZpeCcsICdmYW1pbHlQcmVmaXgnXSwgWydkYXRhLXJlcGxhY2VtZW50LWNsYXNzJywgJ3JlcGxhY2VtZW50Q2xhc3MnXSwgWydkYXRhLWF1dG8tcmVwbGFjZS1zdmcnLCAnYXV0b1JlcGxhY2VTdmcnXSwgWydkYXRhLWF1dG8tYWRkLWNzcycsICdhdXRvQWRkQ3NzJ10sIFsnZGF0YS1hdXRvLWExMXknLCAnYXV0b0ExMXknXSwgWydkYXRhLXNlYXJjaC1wc2V1ZG8tZWxlbWVudHMnLCAnc2VhcmNoUHNldWRvRWxlbWVudHMnXSwgWydkYXRhLW9ic2VydmUtbXV0YXRpb25zJywgJ29ic2VydmVNdXRhdGlvbnMnXSwgWydkYXRhLW11dGF0ZS1hcHByb2FjaCcsICdtdXRhdGVBcHByb2FjaCddLCBbJ2RhdGEta2VlcC1vcmlnaW5hbC1zb3VyY2UnLCAna2VlcE9yaWdpbmFsU291cmNlJ10sIFsnZGF0YS1tZWFzdXJlLXBlcmZvcm1hbmNlJywgJ21lYXN1cmVQZXJmb3JtYW5jZSddLCBbJ2RhdGEtc2hvdy1taXNzaW5nLWljb25zJywgJ3Nob3dNaXNzaW5nSWNvbnMnXV07XG4gIGF0dHJzLmZvckVhY2goZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgX3JlZjIgPSBfc2xpY2VkVG9BcnJheShfcmVmLCAyKSxcbiAgICAgICAgYXR0ciA9IF9yZWYyWzBdLFxuICAgICAgICBrZXkgPSBfcmVmMlsxXTtcblxuICAgIHZhciB2YWwgPSBjb2VyY2UoZ2V0QXR0ckNvbmZpZyhhdHRyKSk7XG5cbiAgICBpZiAodmFsICE9PSB1bmRlZmluZWQgJiYgdmFsICE9PSBudWxsKSB7XG4gICAgICBpbml0aWFsW2tleV0gPSB2YWw7XG4gICAgfVxuICB9KTtcbn1cblxudmFyIF9kZWZhdWx0ID0ge1xuICBmYW1pbHlQcmVmaXg6IERFRkFVTFRfRkFNSUxZX1BSRUZJWCxcbiAgcmVwbGFjZW1lbnRDbGFzczogREVGQVVMVF9SRVBMQUNFTUVOVF9DTEFTUyxcbiAgYXV0b1JlcGxhY2VTdmc6IHRydWUsXG4gIGF1dG9BZGRDc3M6IHRydWUsXG4gIGF1dG9BMTF5OiB0cnVlLFxuICBzZWFyY2hQc2V1ZG9FbGVtZW50czogZmFsc2UsXG4gIG9ic2VydmVNdXRhdGlvbnM6IHRydWUsXG4gIG11dGF0ZUFwcHJvYWNoOiAnYXN5bmMnLFxuICBrZWVwT3JpZ2luYWxTb3VyY2U6IHRydWUsXG4gIG1lYXN1cmVQZXJmb3JtYW5jZTogZmFsc2UsXG4gIHNob3dNaXNzaW5nSWNvbnM6IHRydWVcbn07XG5cbnZhciBfY29uZmlnID0gX29iamVjdFNwcmVhZCh7fSwgX2RlZmF1bHQsIGluaXRpYWwpO1xuXG5pZiAoIV9jb25maWcuYXV0b1JlcGxhY2VTdmcpIF9jb25maWcub2JzZXJ2ZU11dGF0aW9ucyA9IGZhbHNlO1xuXG52YXIgY29uZmlnID0gX29iamVjdFNwcmVhZCh7fSwgX2NvbmZpZyk7XG5cbldJTkRPVy5Gb250QXdlc29tZUNvbmZpZyA9IGNvbmZpZztcblxudmFyIHcgPSBXSU5ET1cgfHwge307XG5pZiAoIXdbTkFNRVNQQUNFX0lERU5USUZJRVJdKSB3W05BTUVTUEFDRV9JREVOVElGSUVSXSA9IHt9O1xuaWYgKCF3W05BTUVTUEFDRV9JREVOVElGSUVSXS5zdHlsZXMpIHdbTkFNRVNQQUNFX0lERU5USUZJRVJdLnN0eWxlcyA9IHt9O1xuaWYgKCF3W05BTUVTUEFDRV9JREVOVElGSUVSXS5ob29rcykgd1tOQU1FU1BBQ0VfSURFTlRJRklFUl0uaG9va3MgPSB7fTtcbmlmICghd1tOQU1FU1BBQ0VfSURFTlRJRklFUl0uc2hpbXMpIHdbTkFNRVNQQUNFX0lERU5USUZJRVJdLnNoaW1zID0gW107XG52YXIgbmFtZXNwYWNlID0gd1tOQU1FU1BBQ0VfSURFTlRJRklFUl07XG5cbnZhciBmdW5jdGlvbnMgPSBbXTtcblxudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gbGlzdGVuZXIoKSB7XG4gIERPQ1VNRU5ULnJlbW92ZUV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBsaXN0ZW5lcik7XG4gIGxvYWRlZCA9IDE7XG4gIGZ1bmN0aW9ucy5tYXAoZnVuY3Rpb24gKGZuKSB7XG4gICAgcmV0dXJuIGZuKCk7XG4gIH0pO1xufTtcblxudmFyIGxvYWRlZCA9IGZhbHNlO1xuXG5pZiAoSVNfRE9NKSB7XG4gIGxvYWRlZCA9IChET0NVTUVOVC5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGwgPyAvXmxvYWRlZHxeYy8gOiAvXmxvYWRlZHxeaXxeYy8pLnRlc3QoRE9DVU1FTlQucmVhZHlTdGF0ZSk7XG4gIGlmICghbG9hZGVkKSBET0NVTUVOVC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgbGlzdGVuZXIpO1xufVxuXG5mdW5jdGlvbiBkb21yZWFkeSAoZm4pIHtcbiAgaWYgKCFJU19ET00pIHJldHVybjtcbiAgbG9hZGVkID8gc2V0VGltZW91dChmbiwgMCkgOiBmdW5jdGlvbnMucHVzaChmbik7XG59XG5cbnZhciBQRU5ESU5HID0gJ3BlbmRpbmcnO1xudmFyIFNFVFRMRUQgPSAnc2V0dGxlZCc7XG52YXIgRlVMRklMTEVEID0gJ2Z1bGZpbGxlZCc7XG52YXIgUkVKRUNURUQgPSAncmVqZWN0ZWQnO1xuXG52YXIgTk9PUCA9IGZ1bmN0aW9uIE5PT1AoKSB7fTtcblxudmFyIGlzTm9kZSA9IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBnbG9iYWwucHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGdsb2JhbC5wcm9jZXNzLmVtaXQgPT09ICdmdW5jdGlvbic7XG52YXIgYXN5bmNTZXRUaW1lciA9IHR5cGVvZiBzZXRJbW1lZGlhdGUgPT09ICd1bmRlZmluZWQnID8gc2V0VGltZW91dCA6IHNldEltbWVkaWF0ZTtcbnZhciBhc3luY1F1ZXVlID0gW107XG52YXIgYXN5bmNUaW1lcjtcblxuZnVuY3Rpb24gYXN5bmNGbHVzaCgpIHtcbiAgLy8gcnVuIHByb21pc2UgY2FsbGJhY2tzXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXN5bmNRdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgIGFzeW5jUXVldWVbaV1bMF0oYXN5bmNRdWV1ZVtpXVsxXSk7XG4gIH0gLy8gcmVzZXQgYXN5bmMgYXN5bmNRdWV1ZVxuXG5cbiAgYXN5bmNRdWV1ZSA9IFtdO1xuICBhc3luY1RpbWVyID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGFzeW5jQ2FsbChjYWxsYmFjaywgYXJnKSB7XG4gIGFzeW5jUXVldWUucHVzaChbY2FsbGJhY2ssIGFyZ10pO1xuXG4gIGlmICghYXN5bmNUaW1lcikge1xuICAgIGFzeW5jVGltZXIgPSB0cnVlO1xuICAgIGFzeW5jU2V0VGltZXIoYXN5bmNGbHVzaCwgMCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW52b2tlUmVzb2x2ZXIocmVzb2x2ZXIsIHByb21pc2UpIHtcbiAgZnVuY3Rpb24gcmVzb2x2ZVByb21pc2UodmFsdWUpIHtcbiAgICByZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlamVjdFByb21pc2UocmVhc29uKSB7XG4gICAgcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gIH1cblxuICB0cnkge1xuICAgIHJlc29sdmVyKHJlc29sdmVQcm9taXNlLCByZWplY3RQcm9taXNlKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJlamVjdFByb21pc2UoZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW52b2tlQ2FsbGJhY2soc3Vic2NyaWJlcikge1xuICB2YXIgb3duZXIgPSBzdWJzY3JpYmVyLm93bmVyO1xuICB2YXIgc2V0dGxlZCA9IG93bmVyLl9zdGF0ZTtcbiAgdmFyIHZhbHVlID0gb3duZXIuX2RhdGE7XG4gIHZhciBjYWxsYmFjayA9IHN1YnNjcmliZXJbc2V0dGxlZF07XG4gIHZhciBwcm9taXNlID0gc3Vic2NyaWJlci50aGVuO1xuXG4gIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICBzZXR0bGVkID0gRlVMRklMTEVEO1xuXG4gICAgdHJ5IHtcbiAgICAgIHZhbHVlID0gY2FsbGJhY2sodmFsdWUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJlamVjdChwcm9taXNlLCBlKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWhhbmRsZVRoZW5hYmxlKHByb21pc2UsIHZhbHVlKSkge1xuICAgIGlmIChzZXR0bGVkID09PSBGVUxGSUxMRUQpIHtcbiAgICAgIHJlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICAgIH1cblxuICAgIGlmIChzZXR0bGVkID09PSBSRUpFQ1RFRCkge1xuICAgICAgcmVqZWN0KHByb21pc2UsIHZhbHVlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlVGhlbmFibGUocHJvbWlzZSwgdmFsdWUpIHtcbiAgdmFyIHJlc29sdmVkO1xuXG4gIHRyeSB7XG4gICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBIHByb21pc2VzIGNhbGxiYWNrIGNhbm5vdCByZXR1cm4gdGhhdCBzYW1lIHByb21pc2UuJyk7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlICYmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgfHwgX3R5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnKSkge1xuICAgICAgLy8gdGhlbiBzaG91bGQgYmUgcmV0cmlldmVkIG9ubHkgb25jZVxuICAgICAgdmFyIHRoZW4gPSB2YWx1ZS50aGVuO1xuXG4gICAgICBpZiAodHlwZW9mIHRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgaWYgKCFyZXNvbHZlZCkge1xuICAgICAgICAgICAgcmVzb2x2ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IHZhbCkge1xuICAgICAgICAgICAgICBmdWxmaWxsKHByb21pc2UsIHZhbCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXNvbHZlKHByb21pc2UsIHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgICAgaWYgKCFyZXNvbHZlZCkge1xuICAgICAgICAgICAgcmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKCFyZXNvbHZlZCkge1xuICAgICAgcmVqZWN0KHByb21pc2UsIGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlKHByb21pc2UsIHZhbHVlKSB7XG4gIGlmIChwcm9taXNlID09PSB2YWx1ZSB8fCAhaGFuZGxlVGhlbmFibGUocHJvbWlzZSwgdmFsdWUpKSB7XG4gICAgZnVsZmlsbChwcm9taXNlLCB2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZnVsZmlsbChwcm9taXNlLCB2YWx1ZSkge1xuICBpZiAocHJvbWlzZS5fc3RhdGUgPT09IFBFTkRJTkcpIHtcbiAgICBwcm9taXNlLl9zdGF0ZSA9IFNFVFRMRUQ7XG4gICAgcHJvbWlzZS5fZGF0YSA9IHZhbHVlO1xuICAgIGFzeW5jQ2FsbChwdWJsaXNoRnVsZmlsbG1lbnQsIHByb21pc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlamVjdChwcm9taXNlLCByZWFzb24pIHtcbiAgaWYgKHByb21pc2UuX3N0YXRlID09PSBQRU5ESU5HKSB7XG4gICAgcHJvbWlzZS5fc3RhdGUgPSBTRVRUTEVEO1xuICAgIHByb21pc2UuX2RhdGEgPSByZWFzb247XG4gICAgYXN5bmNDYWxsKHB1Ymxpc2hSZWplY3Rpb24sIHByb21pc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHB1Ymxpc2gocHJvbWlzZSkge1xuICBwcm9taXNlLl90aGVuID0gcHJvbWlzZS5fdGhlbi5mb3JFYWNoKGludm9rZUNhbGxiYWNrKTtcbn1cblxuZnVuY3Rpb24gcHVibGlzaEZ1bGZpbGxtZW50KHByb21pc2UpIHtcbiAgcHJvbWlzZS5fc3RhdGUgPSBGVUxGSUxMRUQ7XG4gIHB1Ymxpc2gocHJvbWlzZSk7XG59XG5cbmZ1bmN0aW9uIHB1Ymxpc2hSZWplY3Rpb24ocHJvbWlzZSkge1xuICBwcm9taXNlLl9zdGF0ZSA9IFJFSkVDVEVEO1xuICBwdWJsaXNoKHByb21pc2UpO1xuXG4gIGlmICghcHJvbWlzZS5faGFuZGxlZCAmJiBpc05vZGUpIHtcbiAgICBnbG9iYWwucHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCBwcm9taXNlLl9kYXRhLCBwcm9taXNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBub3RpZnlSZWplY3Rpb25IYW5kbGVkKHByb21pc2UpIHtcbiAgZ2xvYmFsLnByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xufVxuLyoqXG4gKiBAY2xhc3NcbiAqL1xuXG5cbmZ1bmN0aW9uIFAocmVzb2x2ZXIpIHtcbiAgaWYgKHR5cGVvZiByZXNvbHZlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Byb21pc2UgcmVzb2x2ZXIgJyArIHJlc29sdmVyICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xuICB9XG5cbiAgaWYgKHRoaXMgaW5zdGFuY2VvZiBQID09PSBmYWxzZSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZhaWxlZCB0byBjb25zdHJ1Y3QgXFwnUHJvbWlzZVxcJzogUGxlYXNlIHVzZSB0aGUgXFwnbmV3XFwnIG9wZXJhdG9yLCB0aGlzIG9iamVjdCBjb25zdHJ1Y3RvciBjYW5ub3QgYmUgY2FsbGVkIGFzIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB0aGlzLl90aGVuID0gW107XG4gIGludm9rZVJlc29sdmVyKHJlc29sdmVyLCB0aGlzKTtcbn1cblxuUC5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBQLFxuICBfc3RhdGU6IFBFTkRJTkcsXG4gIF90aGVuOiBudWxsLFxuICBfZGF0YTogdW5kZWZpbmVkLFxuICBfaGFuZGxlZDogZmFsc2UsXG4gIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsbWVudCwgb25SZWplY3Rpb24pIHtcbiAgICB2YXIgc3Vic2NyaWJlciA9IHtcbiAgICAgIG93bmVyOiB0aGlzLFxuICAgICAgdGhlbjogbmV3IHRoaXMuY29uc3RydWN0b3IoTk9PUCksXG4gICAgICBmdWxmaWxsZWQ6IG9uRnVsZmlsbG1lbnQsXG4gICAgICByZWplY3RlZDogb25SZWplY3Rpb25cbiAgICB9O1xuXG4gICAgaWYgKChvblJlamVjdGlvbiB8fCBvbkZ1bGZpbGxtZW50KSAmJiAhdGhpcy5faGFuZGxlZCkge1xuICAgICAgdGhpcy5faGFuZGxlZCA9IHRydWU7XG5cbiAgICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gUkVKRUNURUQgJiYgaXNOb2RlKSB7XG4gICAgICAgIGFzeW5jQ2FsbChub3RpZnlSZWplY3Rpb25IYW5kbGVkLCB0aGlzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fc3RhdGUgPT09IEZVTEZJTExFRCB8fCB0aGlzLl9zdGF0ZSA9PT0gUkVKRUNURUQpIHtcbiAgICAgIC8vIGFscmVhZHkgcmVzb2x2ZWQsIGNhbGwgY2FsbGJhY2sgYXN5bmNcbiAgICAgIGFzeW5jQ2FsbChpbnZva2VDYWxsYmFjaywgc3Vic2NyaWJlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHN1YnNjcmliZVxuICAgICAgdGhpcy5fdGhlbi5wdXNoKHN1YnNjcmliZXIpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzY3JpYmVyLnRoZW47XG4gIH0sXG4gIGNhdGNoOiBmdW5jdGlvbiBfY2F0Y2gob25SZWplY3Rpb24pIHtcbiAgICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0aW9uKTtcbiAgfVxufTtcblxuUC5hbGwgPSBmdW5jdGlvbiAocHJvbWlzZXMpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHByb21pc2VzKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1lvdSBtdXN0IHBhc3MgYW4gYXJyYXkgdG8gUHJvbWlzZS5hbGwoKS4nKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICB2YXIgcmVtYWluaW5nID0gMDtcblxuICAgIGZ1bmN0aW9uIHJlc29sdmVyKGluZGV4KSB7XG4gICAgICByZW1haW5pbmcrKztcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmVzdWx0c1tpbmRleF0gPSB2YWx1ZTtcblxuICAgICAgICBpZiAoISAtLXJlbWFpbmluZykge1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0cyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDAsIHByb21pc2U7IGkgPCBwcm9taXNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgcHJvbWlzZSA9IHByb21pc2VzW2ldO1xuXG4gICAgICBpZiAocHJvbWlzZSAmJiB0eXBlb2YgcHJvbWlzZS50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByb21pc2UudGhlbihyZXNvbHZlcihpKSwgcmVqZWN0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdHNbaV0gPSBwcm9taXNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghcmVtYWluaW5nKSB7XG4gICAgICByZXNvbHZlKHJlc3VsdHMpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5QLnJhY2UgPSBmdW5jdGlvbiAocHJvbWlzZXMpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHByb21pc2VzKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1lvdSBtdXN0IHBhc3MgYW4gYXJyYXkgdG8gUHJvbWlzZS5yYWNlKCkuJyk7XG4gIH1cblxuICByZXR1cm4gbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGZvciAodmFyIGkgPSAwLCBwcm9taXNlOyBpIDwgcHJvbWlzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHByb21pc2UgPSBwcm9taXNlc1tpXTtcblxuICAgICAgaWYgKHByb21pc2UgJiYgdHlwZW9mIHByb21pc2UudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcm9taXNlLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUocHJvbWlzZSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cblAucmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBpZiAodmFsdWUgJiYgX3R5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnICYmIHZhbHVlLmNvbnN0cnVjdG9yID09PSBQKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0pO1xufTtcblxuUC5yZWplY3QgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gIHJldHVybiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgcmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufTtcblxudmFyIHBpY2tlZCA9IHR5cGVvZiBQcm9taXNlID09PSAnZnVuY3Rpb24nID8gUHJvbWlzZSA6IFA7XG5cbnZhciBkID0gVU5JVFNfSU5fR1JJRDtcbnZhciBtZWFuaW5nbGVzc1RyYW5zZm9ybSA9IHtcbiAgc2l6ZTogMTYsXG4gIHg6IDAsXG4gIHk6IDAsXG4gIHJvdGF0ZTogMCxcbiAgZmxpcFg6IGZhbHNlLFxuICBmbGlwWTogZmFsc2Vcbn07XG5cbmZ1bmN0aW9uIGlzUmVzZXJ2ZWQobmFtZSkge1xuICByZXR1cm4gflJFU0VSVkVEX0NMQVNTRVMuaW5kZXhPZihuYW1lKTtcbn1cbmZ1bmN0aW9uIGluc2VydENzcyhjc3MpIHtcbiAgaWYgKCFjc3MgfHwgIUlTX0RPTSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBzdHlsZSA9IERPQ1VNRU5ULmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHN0eWxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2NzcycpO1xuICBzdHlsZS5pbm5lckhUTUwgPSBjc3M7XG4gIHZhciBoZWFkQ2hpbGRyZW4gPSBET0NVTUVOVC5oZWFkLmNoaWxkTm9kZXM7XG4gIHZhciBiZWZvcmVDaGlsZCA9IG51bGw7XG5cbiAgZm9yICh2YXIgaSA9IGhlYWRDaGlsZHJlbi5sZW5ndGggLSAxOyBpID4gLTE7IGktLSkge1xuICAgIHZhciBjaGlsZCA9IGhlYWRDaGlsZHJlbltpXTtcbiAgICB2YXIgdGFnTmFtZSA9IChjaGlsZC50YWdOYW1lIHx8ICcnKS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgaWYgKFsnU1RZTEUnLCAnTElOSyddLmluZGV4T2YodGFnTmFtZSkgPiAtMSkge1xuICAgICAgYmVmb3JlQ2hpbGQgPSBjaGlsZDtcbiAgICB9XG4gIH1cblxuICBET0NVTUVOVC5oZWFkLmluc2VydEJlZm9yZShzdHlsZSwgYmVmb3JlQ2hpbGQpO1xuICByZXR1cm4gY3NzO1xufVxudmFyIGlkUG9vbCA9ICcwMTIzNDU2Nzg5YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWic7XG5mdW5jdGlvbiBuZXh0VW5pcXVlSWQoKSB7XG4gIHZhciBzaXplID0gMTI7XG4gIHZhciBpZCA9ICcnO1xuXG4gIHdoaWxlIChzaXplLS0gPiAwKSB7XG4gICAgaWQgKz0gaWRQb29sW01hdGgucmFuZG9tKCkgKiA2MiB8IDBdO1xuICB9XG5cbiAgcmV0dXJuIGlkO1xufVxuZnVuY3Rpb24gdG9BcnJheShvYmopIHtcbiAgdmFyIGFycmF5ID0gW107XG5cbiAgZm9yICh2YXIgaSA9IChvYmogfHwgW10pLmxlbmd0aCA+Pj4gMDsgaS0tOykge1xuICAgIGFycmF5W2ldID0gb2JqW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuZnVuY3Rpb24gY2xhc3NBcnJheShub2RlKSB7XG4gIGlmIChub2RlLmNsYXNzTGlzdCkge1xuICAgIHJldHVybiB0b0FycmF5KG5vZGUuY2xhc3NMaXN0KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKG5vZGUuZ2V0QXR0cmlidXRlKCdjbGFzcycpIHx8ICcnKS5zcGxpdCgnICcpLmZpbHRlcihmdW5jdGlvbiAoaSkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGdldEljb25OYW1lKGZhbWlseVByZWZpeCwgY2xzKSB7XG4gIHZhciBwYXJ0cyA9IGNscy5zcGxpdCgnLScpO1xuICB2YXIgcHJlZml4ID0gcGFydHNbMF07XG4gIHZhciBpY29uTmFtZSA9IHBhcnRzLnNsaWNlKDEpLmpvaW4oJy0nKTtcblxuICBpZiAocHJlZml4ID09PSBmYW1pbHlQcmVmaXggJiYgaWNvbk5hbWUgIT09ICcnICYmICFpc1Jlc2VydmVkKGljb25OYW1lKSkge1xuICAgIHJldHVybiBpY29uTmFtZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuZnVuY3Rpb24gaHRtbEVzY2FwZShzdHIpIHtcbiAgcmV0dXJuIFwiXCIuY29uY2F0KHN0cikucmVwbGFjZSgvJi9nLCAnJmFtcDsnKS5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7JykucmVwbGFjZSgvJy9nLCAnJiMzOTsnKS5yZXBsYWNlKC88L2csICcmbHQ7JykucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xufVxuZnVuY3Rpb24gam9pbkF0dHJpYnV0ZXMoYXR0cmlidXRlcykge1xuICByZXR1cm4gT2JqZWN0LmtleXMoYXR0cmlidXRlcyB8fCB7fSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGF0dHJpYnV0ZU5hbWUpIHtcbiAgICByZXR1cm4gYWNjICsgXCJcIi5jb25jYXQoYXR0cmlidXRlTmFtZSwgXCI9XFxcIlwiKS5jb25jYXQoaHRtbEVzY2FwZShhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdKSwgXCJcXFwiIFwiKTtcbiAgfSwgJycpLnRyaW0oKTtcbn1cbmZ1bmN0aW9uIGpvaW5TdHlsZXMoc3R5bGVzKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhzdHlsZXMgfHwge30pLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBzdHlsZU5hbWUpIHtcbiAgICByZXR1cm4gYWNjICsgXCJcIi5jb25jYXQoc3R5bGVOYW1lLCBcIjogXCIpLmNvbmNhdChzdHlsZXNbc3R5bGVOYW1lXSwgXCI7XCIpO1xuICB9LCAnJyk7XG59XG5mdW5jdGlvbiB0cmFuc2Zvcm1Jc01lYW5pbmdmdWwodHJhbnNmb3JtKSB7XG4gIHJldHVybiB0cmFuc2Zvcm0uc2l6ZSAhPT0gbWVhbmluZ2xlc3NUcmFuc2Zvcm0uc2l6ZSB8fCB0cmFuc2Zvcm0ueCAhPT0gbWVhbmluZ2xlc3NUcmFuc2Zvcm0ueCB8fCB0cmFuc2Zvcm0ueSAhPT0gbWVhbmluZ2xlc3NUcmFuc2Zvcm0ueSB8fCB0cmFuc2Zvcm0ucm90YXRlICE9PSBtZWFuaW5nbGVzc1RyYW5zZm9ybS5yb3RhdGUgfHwgdHJhbnNmb3JtLmZsaXBYIHx8IHRyYW5zZm9ybS5mbGlwWTtcbn1cbmZ1bmN0aW9uIHRyYW5zZm9ybUZvclN2ZyhfcmVmKSB7XG4gIHZhciB0cmFuc2Zvcm0gPSBfcmVmLnRyYW5zZm9ybSxcbiAgICAgIGNvbnRhaW5lcldpZHRoID0gX3JlZi5jb250YWluZXJXaWR0aCxcbiAgICAgIGljb25XaWR0aCA9IF9yZWYuaWNvbldpZHRoO1xuICB2YXIgb3V0ZXIgPSB7XG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZShcIi5jb25jYXQoY29udGFpbmVyV2lkdGggLyAyLCBcIiAyNTYpXCIpXG4gIH07XG4gIHZhciBpbm5lclRyYW5zbGF0ZSA9IFwidHJhbnNsYXRlKFwiLmNvbmNhdCh0cmFuc2Zvcm0ueCAqIDMyLCBcIiwgXCIpLmNvbmNhdCh0cmFuc2Zvcm0ueSAqIDMyLCBcIikgXCIpO1xuICB2YXIgaW5uZXJTY2FsZSA9IFwic2NhbGUoXCIuY29uY2F0KHRyYW5zZm9ybS5zaXplIC8gMTYgKiAodHJhbnNmb3JtLmZsaXBYID8gLTEgOiAxKSwgXCIsIFwiKS5jb25jYXQodHJhbnNmb3JtLnNpemUgLyAxNiAqICh0cmFuc2Zvcm0uZmxpcFkgPyAtMSA6IDEpLCBcIikgXCIpO1xuICB2YXIgaW5uZXJSb3RhdGUgPSBcInJvdGF0ZShcIi5jb25jYXQodHJhbnNmb3JtLnJvdGF0ZSwgXCIgMCAwKVwiKTtcbiAgdmFyIGlubmVyID0ge1xuICAgIHRyYW5zZm9ybTogXCJcIi5jb25jYXQoaW5uZXJUcmFuc2xhdGUsIFwiIFwiKS5jb25jYXQoaW5uZXJTY2FsZSwgXCIgXCIpLmNvbmNhdChpbm5lclJvdGF0ZSlcbiAgfTtcbiAgdmFyIHBhdGggPSB7XG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZShcIi5jb25jYXQoaWNvbldpZHRoIC8gMiAqIC0xLCBcIiAtMjU2KVwiKVxuICB9O1xuICByZXR1cm4ge1xuICAgIG91dGVyOiBvdXRlcixcbiAgICBpbm5lcjogaW5uZXIsXG4gICAgcGF0aDogcGF0aFxuICB9O1xufVxuZnVuY3Rpb24gdHJhbnNmb3JtRm9yQ3NzKF9yZWYyKSB7XG4gIHZhciB0cmFuc2Zvcm0gPSBfcmVmMi50cmFuc2Zvcm0sXG4gICAgICBfcmVmMiR3aWR0aCA9IF9yZWYyLndpZHRoLFxuICAgICAgd2lkdGggPSBfcmVmMiR3aWR0aCA9PT0gdm9pZCAwID8gVU5JVFNfSU5fR1JJRCA6IF9yZWYyJHdpZHRoLFxuICAgICAgX3JlZjIkaGVpZ2h0ID0gX3JlZjIuaGVpZ2h0LFxuICAgICAgaGVpZ2h0ID0gX3JlZjIkaGVpZ2h0ID09PSB2b2lkIDAgPyBVTklUU19JTl9HUklEIDogX3JlZjIkaGVpZ2h0LFxuICAgICAgX3JlZjIkc3RhcnRDZW50ZXJlZCA9IF9yZWYyLnN0YXJ0Q2VudGVyZWQsXG4gICAgICBzdGFydENlbnRlcmVkID0gX3JlZjIkc3RhcnRDZW50ZXJlZCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmMiRzdGFydENlbnRlcmVkO1xuICB2YXIgdmFsID0gJyc7XG5cbiAgaWYgKHN0YXJ0Q2VudGVyZWQgJiYgSVNfSUUpIHtcbiAgICB2YWwgKz0gXCJ0cmFuc2xhdGUoXCIuY29uY2F0KHRyYW5zZm9ybS54IC8gZCAtIHdpZHRoIC8gMiwgXCJlbSwgXCIpLmNvbmNhdCh0cmFuc2Zvcm0ueSAvIGQgLSBoZWlnaHQgLyAyLCBcImVtKSBcIik7XG4gIH0gZWxzZSBpZiAoc3RhcnRDZW50ZXJlZCkge1xuICAgIHZhbCArPSBcInRyYW5zbGF0ZShjYWxjKC01MCUgKyBcIi5jb25jYXQodHJhbnNmb3JtLnggLyBkLCBcImVtKSwgY2FsYygtNTAlICsgXCIpLmNvbmNhdCh0cmFuc2Zvcm0ueSAvIGQsIFwiZW0pKSBcIik7XG4gIH0gZWxzZSB7XG4gICAgdmFsICs9IFwidHJhbnNsYXRlKFwiLmNvbmNhdCh0cmFuc2Zvcm0ueCAvIGQsIFwiZW0sIFwiKS5jb25jYXQodHJhbnNmb3JtLnkgLyBkLCBcImVtKSBcIik7XG4gIH1cblxuICB2YWwgKz0gXCJzY2FsZShcIi5jb25jYXQodHJhbnNmb3JtLnNpemUgLyBkICogKHRyYW5zZm9ybS5mbGlwWCA/IC0xIDogMSksIFwiLCBcIikuY29uY2F0KHRyYW5zZm9ybS5zaXplIC8gZCAqICh0cmFuc2Zvcm0uZmxpcFkgPyAtMSA6IDEpLCBcIikgXCIpO1xuICB2YWwgKz0gXCJyb3RhdGUoXCIuY29uY2F0KHRyYW5zZm9ybS5yb3RhdGUsIFwiZGVnKSBcIik7XG4gIHJldHVybiB2YWw7XG59XG5cbnZhciBBTExfU1BBQ0UgPSB7XG4gIHg6IDAsXG4gIHk6IDAsXG4gIHdpZHRoOiAnMTAwJScsXG4gIGhlaWdodDogJzEwMCUnXG59O1xuXG5mdW5jdGlvbiBmaWxsQmxhY2soYWJzdHJhY3QpIHtcbiAgdmFyIGZvcmNlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0cnVlO1xuXG4gIGlmIChhYnN0cmFjdC5hdHRyaWJ1dGVzICYmIChhYnN0cmFjdC5hdHRyaWJ1dGVzLmZpbGwgfHwgZm9yY2UpKSB7XG4gICAgYWJzdHJhY3QuYXR0cmlidXRlcy5maWxsID0gJ2JsYWNrJztcbiAgfVxuXG4gIHJldHVybiBhYnN0cmFjdDtcbn1cblxuZnVuY3Rpb24gZGVHcm91cChhYnN0cmFjdCkge1xuICBpZiAoYWJzdHJhY3QudGFnID09PSAnZycpIHtcbiAgICByZXR1cm4gYWJzdHJhY3QuY2hpbGRyZW47XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFthYnN0cmFjdF07XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFrZUljb25NYXNraW5nIChfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuICAgICAgbWFpbiA9IF9yZWYubWFpbixcbiAgICAgIG1hc2sgPSBfcmVmLm1hc2ssXG4gICAgICBleHBsaWNpdE1hc2tJZCA9IF9yZWYubWFza0lkLFxuICAgICAgdHJhbnNmb3JtID0gX3JlZi50cmFuc2Zvcm07XG4gIHZhciBtYWluV2lkdGggPSBtYWluLndpZHRoLFxuICAgICAgbWFpblBhdGggPSBtYWluLmljb247XG4gIHZhciBtYXNrV2lkdGggPSBtYXNrLndpZHRoLFxuICAgICAgbWFza1BhdGggPSBtYXNrLmljb247XG4gIHZhciB0cmFucyA9IHRyYW5zZm9ybUZvclN2Zyh7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgY29udGFpbmVyV2lkdGg6IG1hc2tXaWR0aCxcbiAgICBpY29uV2lkdGg6IG1haW5XaWR0aFxuICB9KTtcbiAgdmFyIG1hc2tSZWN0ID0ge1xuICAgIHRhZzogJ3JlY3QnLFxuICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIEFMTF9TUEFDRSwge1xuICAgICAgZmlsbDogJ3doaXRlJ1xuICAgIH0pXG4gIH07XG4gIHZhciBtYXNrSW5uZXJHcm91cENoaWxkcmVuTWl4aW4gPSBtYWluUGF0aC5jaGlsZHJlbiA/IHtcbiAgICBjaGlsZHJlbjogbWFpblBhdGguY2hpbGRyZW4ubWFwKGZpbGxCbGFjaylcbiAgfSA6IHt9O1xuICB2YXIgbWFza0lubmVyR3JvdXAgPSB7XG4gICAgdGFnOiAnZycsXG4gICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgdHJhbnMuaW5uZXIpLFxuICAgIGNoaWxkcmVuOiBbZmlsbEJsYWNrKF9vYmplY3RTcHJlYWQoe1xuICAgICAgdGFnOiBtYWluUGF0aC50YWcsXG4gICAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCBtYWluUGF0aC5hdHRyaWJ1dGVzLCB0cmFucy5wYXRoKVxuICAgIH0sIG1hc2tJbm5lckdyb3VwQ2hpbGRyZW5NaXhpbikpXVxuICB9O1xuICB2YXIgbWFza091dGVyR3JvdXAgPSB7XG4gICAgdGFnOiAnZycsXG4gICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgdHJhbnMub3V0ZXIpLFxuICAgIGNoaWxkcmVuOiBbbWFza0lubmVyR3JvdXBdXG4gIH07XG4gIHZhciBtYXNrSWQgPSBcIm1hc2stXCIuY29uY2F0KGV4cGxpY2l0TWFza0lkIHx8IG5leHRVbmlxdWVJZCgpKTtcbiAgdmFyIGNsaXBJZCA9IFwiY2xpcC1cIi5jb25jYXQoZXhwbGljaXRNYXNrSWQgfHwgbmV4dFVuaXF1ZUlkKCkpO1xuICB2YXIgbWFza1RhZyA9IHtcbiAgICB0YWc6ICdtYXNrJyxcbiAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCBBTExfU1BBQ0UsIHtcbiAgICAgIGlkOiBtYXNrSWQsXG4gICAgICBtYXNrVW5pdHM6ICd1c2VyU3BhY2VPblVzZScsXG4gICAgICBtYXNrQ29udGVudFVuaXRzOiAndXNlclNwYWNlT25Vc2UnXG4gICAgfSksXG4gICAgY2hpbGRyZW46IFttYXNrUmVjdCwgbWFza091dGVyR3JvdXBdXG4gIH07XG4gIHZhciBkZWZzID0ge1xuICAgIHRhZzogJ2RlZnMnLFxuICAgIGNoaWxkcmVuOiBbe1xuICAgICAgdGFnOiAnY2xpcFBhdGgnLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBpZDogY2xpcElkXG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IGRlR3JvdXAobWFza1BhdGgpXG4gICAgfSwgbWFza1RhZ11cbiAgfTtcbiAgY2hpbGRyZW4ucHVzaChkZWZzLCB7XG4gICAgdGFnOiAncmVjdCcsXG4gICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7XG4gICAgICBmaWxsOiAnY3VycmVudENvbG9yJyxcbiAgICAgICdjbGlwLXBhdGgnOiBcInVybCgjXCIuY29uY2F0KGNsaXBJZCwgXCIpXCIpLFxuICAgICAgbWFzazogXCJ1cmwoI1wiLmNvbmNhdChtYXNrSWQsIFwiKVwiKVxuICAgIH0sIEFMTF9TUEFDRSlcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXNcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFrZUljb25TdGFuZGFyZCAoX3JlZikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcbiAgICAgIG1haW4gPSBfcmVmLm1haW4sXG4gICAgICB0cmFuc2Zvcm0gPSBfcmVmLnRyYW5zZm9ybSxcbiAgICAgIHN0eWxlcyA9IF9yZWYuc3R5bGVzO1xuICB2YXIgc3R5bGVTdHJpbmcgPSBqb2luU3R5bGVzKHN0eWxlcyk7XG5cbiAgaWYgKHN0eWxlU3RyaW5nLmxlbmd0aCA+IDApIHtcbiAgICBhdHRyaWJ1dGVzWydzdHlsZSddID0gc3R5bGVTdHJpbmc7XG4gIH1cblxuICBpZiAodHJhbnNmb3JtSXNNZWFuaW5nZnVsKHRyYW5zZm9ybSkpIHtcbiAgICB2YXIgdHJhbnMgPSB0cmFuc2Zvcm1Gb3JTdmcoe1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgICBjb250YWluZXJXaWR0aDogbWFpbi53aWR0aCxcbiAgICAgIGljb25XaWR0aDogbWFpbi53aWR0aFxuICAgIH0pO1xuICAgIGNoaWxkcmVuLnB1c2goe1xuICAgICAgdGFnOiAnZycsXG4gICAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCB0cmFucy5vdXRlciksXG4gICAgICBjaGlsZHJlbjogW3tcbiAgICAgICAgdGFnOiAnZycsXG4gICAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIHRyYW5zLmlubmVyKSxcbiAgICAgICAgY2hpbGRyZW46IFt7XG4gICAgICAgICAgdGFnOiBtYWluLmljb24udGFnLFxuICAgICAgICAgIGNoaWxkcmVuOiBtYWluLmljb24uY2hpbGRyZW4sXG4gICAgICAgICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgbWFpbi5pY29uLmF0dHJpYnV0ZXMsIHRyYW5zLnBhdGgpXG4gICAgICAgIH1dXG4gICAgICB9XVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNoaWxkcmVuLnB1c2gobWFpbi5pY29uKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXNcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXNJY29uIChfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBtYWluID0gX3JlZi5tYWluLFxuICAgICAgbWFzayA9IF9yZWYubWFzayxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfcmVmLmF0dHJpYnV0ZXMsXG4gICAgICBzdHlsZXMgPSBfcmVmLnN0eWxlcyxcbiAgICAgIHRyYW5zZm9ybSA9IF9yZWYudHJhbnNmb3JtO1xuXG4gIGlmICh0cmFuc2Zvcm1Jc01lYW5pbmdmdWwodHJhbnNmb3JtKSAmJiBtYWluLmZvdW5kICYmICFtYXNrLmZvdW5kKSB7XG4gICAgdmFyIHdpZHRoID0gbWFpbi53aWR0aCxcbiAgICAgICAgaGVpZ2h0ID0gbWFpbi5oZWlnaHQ7XG4gICAgdmFyIG9mZnNldCA9IHtcbiAgICAgIHg6IHdpZHRoIC8gaGVpZ2h0IC8gMixcbiAgICAgIHk6IDAuNVxuICAgIH07XG4gICAgYXR0cmlidXRlc1snc3R5bGUnXSA9IGpvaW5TdHlsZXMoX29iamVjdFNwcmVhZCh7fSwgc3R5bGVzLCB7XG4gICAgICAndHJhbnNmb3JtLW9yaWdpbic6IFwiXCIuY29uY2F0KG9mZnNldC54ICsgdHJhbnNmb3JtLnggLyAxNiwgXCJlbSBcIikuY29uY2F0KG9mZnNldC55ICsgdHJhbnNmb3JtLnkgLyAxNiwgXCJlbVwiKVxuICAgIH0pKTtcbiAgfVxuXG4gIHJldHVybiBbe1xuICAgIHRhZzogJ3N2ZycsXG4gICAgYXR0cmlidXRlczogYXR0cmlidXRlcyxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgfV07XG59XG5cbmZ1bmN0aW9uIGFzU3ltYm9sIChfcmVmKSB7XG4gIHZhciBwcmVmaXggPSBfcmVmLnByZWZpeCxcbiAgICAgIGljb25OYW1lID0gX3JlZi5pY29uTmFtZSxcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIGF0dHJpYnV0ZXMgPSBfcmVmLmF0dHJpYnV0ZXMsXG4gICAgICBzeW1ib2wgPSBfcmVmLnN5bWJvbDtcbiAgdmFyIGlkID0gc3ltYm9sID09PSB0cnVlID8gXCJcIi5jb25jYXQocHJlZml4LCBcIi1cIikuY29uY2F0KGNvbmZpZy5mYW1pbHlQcmVmaXgsIFwiLVwiKS5jb25jYXQoaWNvbk5hbWUpIDogc3ltYm9sO1xuICByZXR1cm4gW3tcbiAgICB0YWc6ICdzdmcnLFxuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIHN0eWxlOiAnZGlzcGxheTogbm9uZTsnXG4gICAgfSxcbiAgICBjaGlsZHJlbjogW3tcbiAgICAgIHRhZzogJ3N5bWJvbCcsXG4gICAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgICAgIGlkOiBpZFxuICAgICAgfSksXG4gICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICB9XVxuICB9XTtcbn1cblxuZnVuY3Rpb24gbWFrZUlubGluZVN2Z0Fic3RyYWN0KHBhcmFtcykge1xuICB2YXIgX3BhcmFtcyRpY29ucyA9IHBhcmFtcy5pY29ucyxcbiAgICAgIG1haW4gPSBfcGFyYW1zJGljb25zLm1haW4sXG4gICAgICBtYXNrID0gX3BhcmFtcyRpY29ucy5tYXNrLFxuICAgICAgcHJlZml4ID0gcGFyYW1zLnByZWZpeCxcbiAgICAgIGljb25OYW1lID0gcGFyYW1zLmljb25OYW1lLFxuICAgICAgdHJhbnNmb3JtID0gcGFyYW1zLnRyYW5zZm9ybSxcbiAgICAgIHN5bWJvbCA9IHBhcmFtcy5zeW1ib2wsXG4gICAgICB0aXRsZSA9IHBhcmFtcy50aXRsZSxcbiAgICAgIG1hc2tJZCA9IHBhcmFtcy5tYXNrSWQsXG4gICAgICB0aXRsZUlkID0gcGFyYW1zLnRpdGxlSWQsXG4gICAgICBleHRyYSA9IHBhcmFtcy5leHRyYSxcbiAgICAgIF9wYXJhbXMkd2F0Y2hhYmxlID0gcGFyYW1zLndhdGNoYWJsZSxcbiAgICAgIHdhdGNoYWJsZSA9IF9wYXJhbXMkd2F0Y2hhYmxlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wYXJhbXMkd2F0Y2hhYmxlO1xuXG4gIHZhciBfcmVmID0gbWFzay5mb3VuZCA/IG1hc2sgOiBtYWluLFxuICAgICAgd2lkdGggPSBfcmVmLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gX3JlZi5oZWlnaHQ7XG5cbiAgdmFyIGlzVXBsb2FkZWRJY29uID0gcHJlZml4ID09PSAnZmFrJztcbiAgdmFyIHdpZHRoQ2xhc3MgPSBpc1VwbG9hZGVkSWNvbiA/ICcnIDogXCJmYS13LVwiLmNvbmNhdChNYXRoLmNlaWwod2lkdGggLyBoZWlnaHQgKiAxNikpO1xuICB2YXIgYXR0ckNsYXNzID0gW2NvbmZpZy5yZXBsYWNlbWVudENsYXNzLCBpY29uTmFtZSA/IFwiXCIuY29uY2F0KGNvbmZpZy5mYW1pbHlQcmVmaXgsIFwiLVwiKS5jb25jYXQoaWNvbk5hbWUpIDogJycsIHdpZHRoQ2xhc3NdLmZpbHRlcihmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiBleHRyYS5jbGFzc2VzLmluZGV4T2YoYykgPT09IC0xO1xuICB9KS5maWx0ZXIoZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gYyAhPT0gJycgfHwgISFjO1xuICB9KS5jb25jYXQoZXh0cmEuY2xhc3Nlcykuam9pbignICcpO1xuICB2YXIgY29udGVudCA9IHtcbiAgICBjaGlsZHJlbjogW10sXG4gICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgZXh0cmEuYXR0cmlidXRlcywge1xuICAgICAgJ2RhdGEtcHJlZml4JzogcHJlZml4LFxuICAgICAgJ2RhdGEtaWNvbic6IGljb25OYW1lLFxuICAgICAgJ2NsYXNzJzogYXR0ckNsYXNzLFxuICAgICAgJ3JvbGUnOiBleHRyYS5hdHRyaWJ1dGVzLnJvbGUgfHwgJ2ltZycsXG4gICAgICAneG1sbnMnOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxuICAgICAgJ3ZpZXdCb3gnOiBcIjAgMCBcIi5jb25jYXQod2lkdGgsIFwiIFwiKS5jb25jYXQoaGVpZ2h0KVxuICAgIH0pXG4gIH07XG4gIHZhciB1cGxvYWRlZEljb25XaWR0aFN0eWxlID0gaXNVcGxvYWRlZEljb24gJiYgIX5leHRyYS5jbGFzc2VzLmluZGV4T2YoJ2ZhLWZ3JykgPyB7XG4gICAgd2lkdGg6IFwiXCIuY29uY2F0KHdpZHRoIC8gaGVpZ2h0ICogMTYgKiAwLjA2MjUsIFwiZW1cIilcbiAgfSA6IHt9O1xuXG4gIGlmICh3YXRjaGFibGUpIHtcbiAgICBjb250ZW50LmF0dHJpYnV0ZXNbREFUQV9GQV9JMlNWR10gPSAnJztcbiAgfVxuXG4gIGlmICh0aXRsZSkgY29udGVudC5jaGlsZHJlbi5wdXNoKHtcbiAgICB0YWc6ICd0aXRsZScsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgaWQ6IGNvbnRlbnQuYXR0cmlidXRlc1snYXJpYS1sYWJlbGxlZGJ5J10gfHwgXCJ0aXRsZS1cIi5jb25jYXQodGl0bGVJZCB8fCBuZXh0VW5pcXVlSWQoKSlcbiAgICB9LFxuICAgIGNoaWxkcmVuOiBbdGl0bGVdXG4gIH0pO1xuXG4gIHZhciBhcmdzID0gX29iamVjdFNwcmVhZCh7fSwgY29udGVudCwge1xuICAgIHByZWZpeDogcHJlZml4LFxuICAgIGljb25OYW1lOiBpY29uTmFtZSxcbiAgICBtYWluOiBtYWluLFxuICAgIG1hc2s6IG1hc2ssXG4gICAgbWFza0lkOiBtYXNrSWQsXG4gICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgc3ltYm9sOiBzeW1ib2wsXG4gICAgc3R5bGVzOiBfb2JqZWN0U3ByZWFkKHt9LCB1cGxvYWRlZEljb25XaWR0aFN0eWxlLCBleHRyYS5zdHlsZXMpXG4gIH0pO1xuXG4gIHZhciBfcmVmMiA9IG1hc2suZm91bmQgJiYgbWFpbi5mb3VuZCA/IG1ha2VJY29uTWFza2luZyhhcmdzKSA6IG1ha2VJY29uU3RhbmRhcmQoYXJncyksXG4gICAgICBjaGlsZHJlbiA9IF9yZWYyLmNoaWxkcmVuLFxuICAgICAgYXR0cmlidXRlcyA9IF9yZWYyLmF0dHJpYnV0ZXM7XG5cbiAgYXJncy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICBhcmdzLmF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzO1xuXG4gIGlmIChzeW1ib2wpIHtcbiAgICByZXR1cm4gYXNTeW1ib2woYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGFzSWNvbihhcmdzKTtcbiAgfVxufVxuZnVuY3Rpb24gbWFrZUxheWVyc1RleHRBYnN0cmFjdChwYXJhbXMpIHtcbiAgdmFyIGNvbnRlbnQgPSBwYXJhbXMuY29udGVudCxcbiAgICAgIHdpZHRoID0gcGFyYW1zLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gcGFyYW1zLmhlaWdodCxcbiAgICAgIHRyYW5zZm9ybSA9IHBhcmFtcy50cmFuc2Zvcm0sXG4gICAgICB0aXRsZSA9IHBhcmFtcy50aXRsZSxcbiAgICAgIGV4dHJhID0gcGFyYW1zLmV4dHJhLFxuICAgICAgX3BhcmFtcyR3YXRjaGFibGUyID0gcGFyYW1zLndhdGNoYWJsZSxcbiAgICAgIHdhdGNoYWJsZSA9IF9wYXJhbXMkd2F0Y2hhYmxlMiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcGFyYW1zJHdhdGNoYWJsZTI7XG5cbiAgdmFyIGF0dHJpYnV0ZXMgPSBfb2JqZWN0U3ByZWFkKHt9LCBleHRyYS5hdHRyaWJ1dGVzLCB0aXRsZSA/IHtcbiAgICAndGl0bGUnOiB0aXRsZVxuICB9IDoge30sIHtcbiAgICAnY2xhc3MnOiBleHRyYS5jbGFzc2VzLmpvaW4oJyAnKVxuICB9KTtcblxuICBpZiAod2F0Y2hhYmxlKSB7XG4gICAgYXR0cmlidXRlc1tEQVRBX0ZBX0kyU1ZHXSA9ICcnO1xuICB9XG5cbiAgdmFyIHN0eWxlcyA9IF9vYmplY3RTcHJlYWQoe30sIGV4dHJhLnN0eWxlcyk7XG5cbiAgaWYgKHRyYW5zZm9ybUlzTWVhbmluZ2Z1bCh0cmFuc2Zvcm0pKSB7XG4gICAgc3R5bGVzWyd0cmFuc2Zvcm0nXSA9IHRyYW5zZm9ybUZvckNzcyh7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgIHN0YXJ0Q2VudGVyZWQ6IHRydWUsXG4gICAgICB3aWR0aDogd2lkdGgsXG4gICAgICBoZWlnaHQ6IGhlaWdodFxuICAgIH0pO1xuICAgIHN0eWxlc1snLXdlYmtpdC10cmFuc2Zvcm0nXSA9IHN0eWxlc1sndHJhbnNmb3JtJ107XG4gIH1cblxuICB2YXIgc3R5bGVTdHJpbmcgPSBqb2luU3R5bGVzKHN0eWxlcyk7XG5cbiAgaWYgKHN0eWxlU3RyaW5nLmxlbmd0aCA+IDApIHtcbiAgICBhdHRyaWJ1dGVzWydzdHlsZSddID0gc3R5bGVTdHJpbmc7XG4gIH1cblxuICB2YXIgdmFsID0gW107XG4gIHZhbC5wdXNoKHtcbiAgICB0YWc6ICdzcGFuJyxcbiAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzLFxuICAgIGNoaWxkcmVuOiBbY29udGVudF1cbiAgfSk7XG5cbiAgaWYgKHRpdGxlKSB7XG4gICAgdmFsLnB1c2goe1xuICAgICAgdGFnOiAnc3BhbicsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGNsYXNzOiAnc3Itb25seSdcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogW3RpdGxlXVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn1cbmZ1bmN0aW9uIG1ha2VMYXllcnNDb3VudGVyQWJzdHJhY3QocGFyYW1zKSB7XG4gIHZhciBjb250ZW50ID0gcGFyYW1zLmNvbnRlbnQsXG4gICAgICB0aXRsZSA9IHBhcmFtcy50aXRsZSxcbiAgICAgIGV4dHJhID0gcGFyYW1zLmV4dHJhO1xuXG4gIHZhciBhdHRyaWJ1dGVzID0gX29iamVjdFNwcmVhZCh7fSwgZXh0cmEuYXR0cmlidXRlcywgdGl0bGUgPyB7XG4gICAgJ3RpdGxlJzogdGl0bGVcbiAgfSA6IHt9LCB7XG4gICAgJ2NsYXNzJzogZXh0cmEuY2xhc3Nlcy5qb2luKCcgJylcbiAgfSk7XG5cbiAgdmFyIHN0eWxlU3RyaW5nID0gam9pblN0eWxlcyhleHRyYS5zdHlsZXMpO1xuXG4gIGlmIChzdHlsZVN0cmluZy5sZW5ndGggPiAwKSB7XG4gICAgYXR0cmlidXRlc1snc3R5bGUnXSA9IHN0eWxlU3RyaW5nO1xuICB9XG5cbiAgdmFyIHZhbCA9IFtdO1xuICB2YWwucHVzaCh7XG4gICAgdGFnOiAnc3BhbicsXG4gICAgYXR0cmlidXRlczogYXR0cmlidXRlcyxcbiAgICBjaGlsZHJlbjogW2NvbnRlbnRdXG4gIH0pO1xuXG4gIGlmICh0aXRsZSkge1xuICAgIHZhbC5wdXNoKHtcbiAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBjbGFzczogJ3NyLW9ubHknXG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IFt0aXRsZV1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB2YWw7XG59XG5cbnZhciBub29wJDEgPSBmdW5jdGlvbiBub29wKCkge307XG5cbnZhciBwID0gY29uZmlnLm1lYXN1cmVQZXJmb3JtYW5jZSAmJiBQRVJGT1JNQU5DRSAmJiBQRVJGT1JNQU5DRS5tYXJrICYmIFBFUkZPUk1BTkNFLm1lYXN1cmUgPyBQRVJGT1JNQU5DRSA6IHtcbiAgbWFyazogbm9vcCQxLFxuICBtZWFzdXJlOiBub29wJDFcbn07XG52YXIgcHJlYW1ibGUgPSBcIkZBIFxcXCI1LjE1LjRcXFwiXCI7XG5cbnZhciBiZWdpbiA9IGZ1bmN0aW9uIGJlZ2luKG5hbWUpIHtcbiAgcC5tYXJrKFwiXCIuY29uY2F0KHByZWFtYmxlLCBcIiBcIikuY29uY2F0KG5hbWUsIFwiIGJlZ2luc1wiKSk7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGVuZChuYW1lKTtcbiAgfTtcbn07XG5cbnZhciBlbmQgPSBmdW5jdGlvbiBlbmQobmFtZSkge1xuICBwLm1hcmsoXCJcIi5jb25jYXQocHJlYW1ibGUsIFwiIFwiKS5jb25jYXQobmFtZSwgXCIgZW5kc1wiKSk7XG4gIHAubWVhc3VyZShcIlwiLmNvbmNhdChwcmVhbWJsZSwgXCIgXCIpLmNvbmNhdChuYW1lKSwgXCJcIi5jb25jYXQocHJlYW1ibGUsIFwiIFwiKS5jb25jYXQobmFtZSwgXCIgYmVnaW5zXCIpLCBcIlwiLmNvbmNhdChwcmVhbWJsZSwgXCIgXCIpLmNvbmNhdChuYW1lLCBcIiBlbmRzXCIpKTtcbn07XG5cbnZhciBwZXJmID0ge1xuICBiZWdpbjogYmVnaW4sXG4gIGVuZDogZW5kXG59O1xuXG4vKipcbiAqIEludGVybmFsIGhlbHBlciB0byBiaW5kIGEgZnVuY3Rpb24ga25vd24gdG8gaGF2ZSA0IGFyZ3VtZW50c1xuICogdG8gYSBnaXZlbiBjb250ZXh0LlxuICovXG5cbnZhciBiaW5kSW50ZXJuYWw0ID0gZnVuY3Rpb24gYmluZEludGVybmFsNChmdW5jLCB0aGlzQ29udGV4dCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMsIGQpIHtcbiAgICByZXR1cm4gZnVuYy5jYWxsKHRoaXNDb250ZXh0LCBhLCBiLCBjLCBkKTtcbiAgfTtcbn07XG5cbi8qKlxuICogIyBSZWR1Y2VcbiAqXG4gKiBBIGZhc3Qgb2JqZWN0IGAucmVkdWNlKClgIGltcGxlbWVudGF0aW9uLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gICBzdWJqZWN0ICAgICAgVGhlIG9iamVjdCB0byByZWR1Y2Ugb3Zlci5cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmbiAgICAgICAgICAgVGhlIHJlZHVjZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0gIHttaXhlZH0gICAgaW5pdGlhbFZhbHVlIFRoZSBpbml0aWFsIHZhbHVlIGZvciB0aGUgcmVkdWNlciwgZGVmYXVsdHMgdG8gc3ViamVjdFswXS5cbiAqIEBwYXJhbSAge09iamVjdH0gICB0aGlzQ29udGV4dCAgVGhlIGNvbnRleHQgZm9yIHRoZSByZWR1Y2VyLlxuICogQHJldHVybiB7bWl4ZWR9ICAgICAgICAgICAgICAgICBUaGUgZmluYWwgcmVzdWx0LlxuICovXG5cblxudmFyIHJlZHVjZSA9IGZ1bmN0aW9uIGZhc3RSZWR1Y2VPYmplY3Qoc3ViamVjdCwgZm4sIGluaXRpYWxWYWx1ZSwgdGhpc0NvbnRleHQpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhzdWJqZWN0KSxcbiAgICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoLFxuICAgICAgaXRlcmF0b3IgPSB0aGlzQ29udGV4dCAhPT0gdW5kZWZpbmVkID8gYmluZEludGVybmFsNChmbiwgdGhpc0NvbnRleHQpIDogZm4sXG4gICAgICBpLFxuICAgICAga2V5LFxuICAgICAgcmVzdWx0O1xuXG4gIGlmIChpbml0aWFsVmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIGkgPSAxO1xuICAgIHJlc3VsdCA9IHN1YmplY3Rba2V5c1swXV07XG4gIH0gZWxzZSB7XG4gICAgaSA9IDA7XG4gICAgcmVzdWx0ID0gaW5pdGlhbFZhbHVlO1xuICB9XG5cbiAgZm9yICg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGtleSA9IGtleXNbaV07XG4gICAgcmVzdWx0ID0gaXRlcmF0b3IocmVzdWx0LCBzdWJqZWN0W2tleV0sIGtleSwgc3ViamVjdCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZnVuY3Rpb24gdG9IZXgodW5pY29kZSkge1xuICB2YXIgcmVzdWx0ID0gJyc7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB1bmljb2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGhleCA9IHVuaWNvZGUuY2hhckNvZGVBdChpKS50b1N0cmluZygxNik7XG4gICAgcmVzdWx0ICs9ICgnMDAwJyArIGhleCkuc2xpY2UoLTQpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZGVmaW5lSWNvbnMocHJlZml4LCBpY29ucykge1xuICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgdmFyIF9wYXJhbXMkc2tpcEhvb2tzID0gcGFyYW1zLnNraXBIb29rcyxcbiAgICAgIHNraXBIb29rcyA9IF9wYXJhbXMkc2tpcEhvb2tzID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wYXJhbXMkc2tpcEhvb2tzO1xuICB2YXIgbm9ybWFsaXplZCA9IE9iamVjdC5rZXlzKGljb25zKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgaWNvbk5hbWUpIHtcbiAgICB2YXIgaWNvbiA9IGljb25zW2ljb25OYW1lXTtcbiAgICB2YXIgZXhwYW5kZWQgPSAhIWljb24uaWNvbjtcblxuICAgIGlmIChleHBhbmRlZCkge1xuICAgICAgYWNjW2ljb24uaWNvbk5hbWVdID0gaWNvbi5pY29uO1xuICAgIH0gZWxzZSB7XG4gICAgICBhY2NbaWNvbk5hbWVdID0gaWNvbjtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG5cbiAgaWYgKHR5cGVvZiBuYW1lc3BhY2UuaG9va3MuYWRkUGFjayA9PT0gJ2Z1bmN0aW9uJyAmJiAhc2tpcEhvb2tzKSB7XG4gICAgbmFtZXNwYWNlLmhvb2tzLmFkZFBhY2socHJlZml4LCBub3JtYWxpemVkKTtcbiAgfSBlbHNlIHtcbiAgICBuYW1lc3BhY2Uuc3R5bGVzW3ByZWZpeF0gPSBfb2JqZWN0U3ByZWFkKHt9LCBuYW1lc3BhY2Uuc3R5bGVzW3ByZWZpeF0gfHwge30sIG5vcm1hbGl6ZWQpO1xuICB9XG4gIC8qKlxuICAgKiBGb250IEF3ZXNvbWUgNCB1c2VkIHRoZSBwcmVmaXggb2YgYGZhYCBmb3IgYWxsIGljb25zLiBXaXRoIHRoZSBpbnRyb2R1Y3Rpb25cbiAgICogb2YgbmV3IHN0eWxlcyB3ZSBuZWVkZWQgdG8gZGlmZmVyZW50aWF0ZSBiZXR3ZWVuIHRoZW0uIFByZWZpeCBgZmFgIGlzIG5vdyBhbiBhbGlhc1xuICAgKiBmb3IgYGZhc2Agc28gd2UnbGwgZWFzeSB0aGUgdXBncmFkZSBwcm9jZXNzIGZvciBvdXIgdXNlcnMgYnkgYXV0b21hdGljYWxseSBkZWZpbmluZ1xuICAgKiB0aGlzIGFzIHdlbGwuXG4gICAqL1xuXG5cbiAgaWYgKHByZWZpeCA9PT0gJ2ZhcycpIHtcbiAgICBkZWZpbmVJY29ucygnZmEnLCBpY29ucyk7XG4gIH1cbn1cblxudmFyIHN0eWxlcyA9IG5hbWVzcGFjZS5zdHlsZXMsXG4gICAgc2hpbXMgPSBuYW1lc3BhY2Uuc2hpbXM7XG52YXIgX2J5VW5pY29kZSA9IHt9O1xudmFyIF9ieUxpZ2F0dXJlID0ge307XG52YXIgX2J5T2xkTmFtZSA9IHt9O1xudmFyIGJ1aWxkID0gZnVuY3Rpb24gYnVpbGQoKSB7XG4gIHZhciBsb29rdXAgPSBmdW5jdGlvbiBsb29rdXAocmVkdWNlcikge1xuICAgIHJldHVybiByZWR1Y2Uoc3R5bGVzLCBmdW5jdGlvbiAobywgc3R5bGUsIHByZWZpeCkge1xuICAgICAgb1twcmVmaXhdID0gcmVkdWNlKHN0eWxlLCByZWR1Y2VyLCB7fSk7XG4gICAgICByZXR1cm4gbztcbiAgICB9LCB7fSk7XG4gIH07XG5cbiAgX2J5VW5pY29kZSA9IGxvb2t1cChmdW5jdGlvbiAoYWNjLCBpY29uLCBpY29uTmFtZSkge1xuICAgIGlmIChpY29uWzNdKSB7XG4gICAgICBhY2NbaWNvblszXV0gPSBpY29uTmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9KTtcbiAgX2J5TGlnYXR1cmUgPSBsb29rdXAoZnVuY3Rpb24gKGFjYywgaWNvbiwgaWNvbk5hbWUpIHtcbiAgICB2YXIgbGlnYXR1cmVzID0gaWNvblsyXTtcbiAgICBhY2NbaWNvbk5hbWVdID0gaWNvbk5hbWU7XG4gICAgbGlnYXR1cmVzLmZvckVhY2goZnVuY3Rpb24gKGxpZ2F0dXJlKSB7XG4gICAgICBhY2NbbGlnYXR1cmVdID0gaWNvbk5hbWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFjYztcbiAgfSk7XG4gIHZhciBoYXNSZWd1bGFyID0gJ2ZhcicgaW4gc3R5bGVzO1xuICBfYnlPbGROYW1lID0gcmVkdWNlKHNoaW1zLCBmdW5jdGlvbiAoYWNjLCBzaGltKSB7XG4gICAgdmFyIG9sZE5hbWUgPSBzaGltWzBdO1xuICAgIHZhciBwcmVmaXggPSBzaGltWzFdO1xuICAgIHZhciBpY29uTmFtZSA9IHNoaW1bMl07XG5cbiAgICBpZiAocHJlZml4ID09PSAnZmFyJyAmJiAhaGFzUmVndWxhcikge1xuICAgICAgcHJlZml4ID0gJ2Zhcyc7XG4gICAgfVxuXG4gICAgYWNjW29sZE5hbWVdID0ge1xuICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICBpY29uTmFtZTogaWNvbk5hbWVcbiAgICB9O1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbn07XG5idWlsZCgpO1xuZnVuY3Rpb24gYnlVbmljb2RlKHByZWZpeCwgdW5pY29kZSkge1xuICByZXR1cm4gKF9ieVVuaWNvZGVbcHJlZml4XSB8fCB7fSlbdW5pY29kZV07XG59XG5mdW5jdGlvbiBieUxpZ2F0dXJlKHByZWZpeCwgbGlnYXR1cmUpIHtcbiAgcmV0dXJuIChfYnlMaWdhdHVyZVtwcmVmaXhdIHx8IHt9KVtsaWdhdHVyZV07XG59XG5mdW5jdGlvbiBieU9sZE5hbWUobmFtZSkge1xuICByZXR1cm4gX2J5T2xkTmFtZVtuYW1lXSB8fCB7XG4gICAgcHJlZml4OiBudWxsLFxuICAgIGljb25OYW1lOiBudWxsXG4gIH07XG59XG5cbnZhciBzdHlsZXMkMSA9IG5hbWVzcGFjZS5zdHlsZXM7XG52YXIgZW1wdHlDYW5vbmljYWxJY29uID0gZnVuY3Rpb24gZW1wdHlDYW5vbmljYWxJY29uKCkge1xuICByZXR1cm4ge1xuICAgIHByZWZpeDogbnVsbCxcbiAgICBpY29uTmFtZTogbnVsbCxcbiAgICByZXN0OiBbXVxuICB9O1xufTtcbmZ1bmN0aW9uIGdldENhbm9uaWNhbEljb24odmFsdWVzKSB7XG4gIHJldHVybiB2YWx1ZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGNscykge1xuICAgIHZhciBpY29uTmFtZSA9IGdldEljb25OYW1lKGNvbmZpZy5mYW1pbHlQcmVmaXgsIGNscyk7XG5cbiAgICBpZiAoc3R5bGVzJDFbY2xzXSkge1xuICAgICAgYWNjLnByZWZpeCA9IGNscztcbiAgICB9IGVsc2UgaWYgKGNvbmZpZy5hdXRvRmV0Y2hTdmcgJiYgT2JqZWN0LmtleXMoUFJFRklYX1RPX1NUWUxFKS5pbmRleE9mKGNscykgPiAtMSkge1xuICAgICAgYWNjLnByZWZpeCA9IGNscztcbiAgICB9IGVsc2UgaWYgKGljb25OYW1lKSB7XG4gICAgICB2YXIgc2hpbSA9IGFjYy5wcmVmaXggPT09ICdmYScgPyBieU9sZE5hbWUoaWNvbk5hbWUpIDoge307XG4gICAgICBhY2MuaWNvbk5hbWUgPSBzaGltLmljb25OYW1lIHx8IGljb25OYW1lO1xuICAgICAgYWNjLnByZWZpeCA9IHNoaW0ucHJlZml4IHx8IGFjYy5wcmVmaXg7XG4gICAgfSBlbHNlIGlmIChjbHMgIT09IGNvbmZpZy5yZXBsYWNlbWVudENsYXNzICYmIGNscy5pbmRleE9mKCdmYS13LScpICE9PSAwKSB7XG4gICAgICBhY2MucmVzdC5wdXNoKGNscyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwgZW1wdHlDYW5vbmljYWxJY29uKCkpO1xufVxuZnVuY3Rpb24gaWNvbkZyb21NYXBwaW5nKG1hcHBpbmcsIHByZWZpeCwgaWNvbk5hbWUpIHtcbiAgaWYgKG1hcHBpbmcgJiYgbWFwcGluZ1twcmVmaXhdICYmIG1hcHBpbmdbcHJlZml4XVtpY29uTmFtZV0pIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICBpY29uTmFtZTogaWNvbk5hbWUsXG4gICAgICBpY29uOiBtYXBwaW5nW3ByZWZpeF1baWNvbk5hbWVdXG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0b0h0bWwoYWJzdHJhY3ROb2Rlcykge1xuICB2YXIgdGFnID0gYWJzdHJhY3ROb2Rlcy50YWcsXG4gICAgICBfYWJzdHJhY3ROb2RlcyRhdHRyaWIgPSBhYnN0cmFjdE5vZGVzLmF0dHJpYnV0ZXMsXG4gICAgICBhdHRyaWJ1dGVzID0gX2Fic3RyYWN0Tm9kZXMkYXR0cmliID09PSB2b2lkIDAgPyB7fSA6IF9hYnN0cmFjdE5vZGVzJGF0dHJpYixcbiAgICAgIF9hYnN0cmFjdE5vZGVzJGNoaWxkciA9IGFic3RyYWN0Tm9kZXMuY2hpbGRyZW4sXG4gICAgICBjaGlsZHJlbiA9IF9hYnN0cmFjdE5vZGVzJGNoaWxkciA9PT0gdm9pZCAwID8gW10gOiBfYWJzdHJhY3ROb2RlcyRjaGlsZHI7XG5cbiAgaWYgKHR5cGVvZiBhYnN0cmFjdE5vZGVzID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBodG1sRXNjYXBlKGFic3RyYWN0Tm9kZXMpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBcIjxcIi5jb25jYXQodGFnLCBcIiBcIikuY29uY2F0KGpvaW5BdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpLCBcIj5cIikuY29uY2F0KGNoaWxkcmVuLm1hcCh0b0h0bWwpLmpvaW4oJycpLCBcIjwvXCIpLmNvbmNhdCh0YWcsIFwiPlwiKTtcbiAgfVxufVxuXG52YXIgbm9vcCQyID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xuXG5mdW5jdGlvbiBpc1dhdGNoZWQobm9kZSkge1xuICB2YXIgaTJzdmcgPSBub2RlLmdldEF0dHJpYnV0ZSA/IG5vZGUuZ2V0QXR0cmlidXRlKERBVEFfRkFfSTJTVkcpIDogbnVsbDtcbiAgcmV0dXJuIHR5cGVvZiBpMnN2ZyA9PT0gJ3N0cmluZyc7XG59XG5cbmZ1bmN0aW9uIGdldE11dGF0b3IoKSB7XG4gIGlmIChjb25maWcuYXV0b1JlcGxhY2VTdmcgPT09IHRydWUpIHtcbiAgICByZXR1cm4gbXV0YXRvcnMucmVwbGFjZTtcbiAgfVxuXG4gIHZhciBtdXRhdG9yID0gbXV0YXRvcnNbY29uZmlnLmF1dG9SZXBsYWNlU3ZnXTtcbiAgcmV0dXJuIG11dGF0b3IgfHwgbXV0YXRvcnMucmVwbGFjZTtcbn1cblxudmFyIG11dGF0b3JzID0ge1xuICByZXBsYWNlOiBmdW5jdGlvbiByZXBsYWNlKG11dGF0aW9uKSB7XG4gICAgdmFyIG5vZGUgPSBtdXRhdGlvblswXTtcbiAgICB2YXIgYWJzdHJhY3QgPSBtdXRhdGlvblsxXTtcbiAgICB2YXIgbmV3T3V0ZXJIVE1MID0gYWJzdHJhY3QubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gdG9IdG1sKGEpO1xuICAgIH0pLmpvaW4oJ1xcbicpO1xuXG4gICAgaWYgKG5vZGUucGFyZW50Tm9kZSAmJiBub2RlLm91dGVySFRNTCkge1xuICAgICAgbm9kZS5vdXRlckhUTUwgPSBuZXdPdXRlckhUTUwgKyAoY29uZmlnLmtlZXBPcmlnaW5hbFNvdXJjZSAmJiBub2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ3N2ZycgPyBcIjwhLS0gXCIuY29uY2F0KG5vZGUub3V0ZXJIVE1MLCBcIiBGb250IEF3ZXNvbWUgZm9udGF3ZXNvbWUuY29tIC0tPlwiKSA6ICcnKTtcbiAgICB9IGVsc2UgaWYgKG5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgdmFyIG5ld05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBub2RlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld05vZGUsIG5vZGUpO1xuICAgICAgbmV3Tm9kZS5vdXRlckhUTUwgPSBuZXdPdXRlckhUTUw7XG4gICAgfVxuICB9LFxuICBuZXN0OiBmdW5jdGlvbiBuZXN0KG11dGF0aW9uKSB7XG4gICAgdmFyIG5vZGUgPSBtdXRhdGlvblswXTtcbiAgICB2YXIgYWJzdHJhY3QgPSBtdXRhdGlvblsxXTsgLy8gSWYgd2UgYWxyZWFkeSBoYXZlIGEgcmVwbGFjZWQgbm9kZSB3ZSBkbyBub3Qgd2FudCB0byBjb250aW51ZSBuZXN0aW5nIHdpdGhpbiBpdC5cbiAgICAvLyBTaG9ydC1jaXJjdWl0IHRvIHRoZSBzdGFuZGFyZCByZXBsYWNlbWVudFxuXG4gICAgaWYgKH5jbGFzc0FycmF5KG5vZGUpLmluZGV4T2YoY29uZmlnLnJlcGxhY2VtZW50Q2xhc3MpKSB7XG4gICAgICByZXR1cm4gbXV0YXRvcnMucmVwbGFjZShtdXRhdGlvbik7XG4gICAgfVxuXG4gICAgdmFyIGZvclN2ZyA9IG5ldyBSZWdFeHAoXCJcIi5jb25jYXQoY29uZmlnLmZhbWlseVByZWZpeCwgXCItLipcIikpO1xuICAgIGRlbGV0ZSBhYnN0cmFjdFswXS5hdHRyaWJ1dGVzLnN0eWxlO1xuICAgIGRlbGV0ZSBhYnN0cmFjdFswXS5hdHRyaWJ1dGVzLmlkO1xuICAgIHZhciBzcGxpdENsYXNzZXMgPSBhYnN0cmFjdFswXS5hdHRyaWJ1dGVzLmNsYXNzLnNwbGl0KCcgJykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGNscykge1xuICAgICAgaWYgKGNscyA9PT0gY29uZmlnLnJlcGxhY2VtZW50Q2xhc3MgfHwgY2xzLm1hdGNoKGZvclN2ZykpIHtcbiAgICAgICAgYWNjLnRvU3ZnLnB1c2goY2xzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFjYy50b05vZGUucHVzaChjbHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHtcbiAgICAgIHRvTm9kZTogW10sXG4gICAgICB0b1N2ZzogW11cbiAgICB9KTtcbiAgICBhYnN0cmFjdFswXS5hdHRyaWJ1dGVzLmNsYXNzID0gc3BsaXRDbGFzc2VzLnRvU3ZnLmpvaW4oJyAnKTtcbiAgICB2YXIgbmV3SW5uZXJIVE1MID0gYWJzdHJhY3QubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gdG9IdG1sKGEpO1xuICAgIH0pLmpvaW4oJ1xcbicpO1xuICAgIG5vZGUuc2V0QXR0cmlidXRlKCdjbGFzcycsIHNwbGl0Q2xhc3Nlcy50b05vZGUuam9pbignICcpKTtcbiAgICBub2RlLnNldEF0dHJpYnV0ZShEQVRBX0ZBX0kyU1ZHLCAnJyk7XG4gICAgbm9kZS5pbm5lckhUTUwgPSBuZXdJbm5lckhUTUw7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHBlcmZvcm1PcGVyYXRpb25TeW5jKG9wKSB7XG4gIG9wKCk7XG59XG5cbmZ1bmN0aW9uIHBlcmZvcm0obXV0YXRpb25zLCBjYWxsYmFjaykge1xuICB2YXIgY2FsbGJhY2tGdW5jdGlvbiA9IHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyA/IGNhbGxiYWNrIDogbm9vcCQyO1xuXG4gIGlmIChtdXRhdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgY2FsbGJhY2tGdW5jdGlvbigpO1xuICB9IGVsc2Uge1xuICAgIHZhciBmcmFtZSA9IHBlcmZvcm1PcGVyYXRpb25TeW5jO1xuXG4gICAgaWYgKGNvbmZpZy5tdXRhdGVBcHByb2FjaCA9PT0gTVVUQVRJT05fQVBQUk9BQ0hfQVNZTkMpIHtcbiAgICAgIGZyYW1lID0gV0lORE9XLnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBwZXJmb3JtT3BlcmF0aW9uU3luYztcbiAgICB9XG5cbiAgICBmcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbXV0YXRvciA9IGdldE11dGF0b3IoKTtcbiAgICAgIHZhciBtYXJrID0gcGVyZi5iZWdpbignbXV0YXRlJyk7XG4gICAgICBtdXRhdGlvbnMubWFwKG11dGF0b3IpO1xuICAgICAgbWFyaygpO1xuICAgICAgY2FsbGJhY2tGdW5jdGlvbigpO1xuICAgIH0pO1xuICB9XG59XG52YXIgZGlzYWJsZWQgPSBmYWxzZTtcbmZ1bmN0aW9uIGRpc2FibGVPYnNlcnZhdGlvbigpIHtcbiAgZGlzYWJsZWQgPSB0cnVlO1xufVxuZnVuY3Rpb24gZW5hYmxlT2JzZXJ2YXRpb24oKSB7XG4gIGRpc2FibGVkID0gZmFsc2U7XG59XG52YXIgbW8gPSBudWxsO1xuZnVuY3Rpb24gb2JzZXJ2ZShvcHRpb25zKSB7XG4gIGlmICghTVVUQVRJT05fT0JTRVJWRVIpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIWNvbmZpZy5vYnNlcnZlTXV0YXRpb25zKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHRyZWVDYWxsYmFjayA9IG9wdGlvbnMudHJlZUNhbGxiYWNrLFxuICAgICAgbm9kZUNhbGxiYWNrID0gb3B0aW9ucy5ub2RlQ2FsbGJhY2ssXG4gICAgICBwc2V1ZG9FbGVtZW50c0NhbGxiYWNrID0gb3B0aW9ucy5wc2V1ZG9FbGVtZW50c0NhbGxiYWNrLFxuICAgICAgX29wdGlvbnMkb2JzZXJ2ZU11dGF0ID0gb3B0aW9ucy5vYnNlcnZlTXV0YXRpb25zUm9vdCxcbiAgICAgIG9ic2VydmVNdXRhdGlvbnNSb290ID0gX29wdGlvbnMkb2JzZXJ2ZU11dGF0ID09PSB2b2lkIDAgPyBET0NVTUVOVCA6IF9vcHRpb25zJG9ic2VydmVNdXRhdDtcbiAgbW8gPSBuZXcgTVVUQVRJT05fT0JTRVJWRVIoZnVuY3Rpb24gKG9iamVjdHMpIHtcbiAgICBpZiAoZGlzYWJsZWQpIHJldHVybjtcbiAgICB0b0FycmF5KG9iamVjdHMpLmZvckVhY2goZnVuY3Rpb24gKG11dGF0aW9uUmVjb3JkKSB7XG4gICAgICBpZiAobXV0YXRpb25SZWNvcmQudHlwZSA9PT0gJ2NoaWxkTGlzdCcgJiYgbXV0YXRpb25SZWNvcmQuYWRkZWROb2Rlcy5sZW5ndGggPiAwICYmICFpc1dhdGNoZWQobXV0YXRpb25SZWNvcmQuYWRkZWROb2Rlc1swXSkpIHtcbiAgICAgICAgaWYgKGNvbmZpZy5zZWFyY2hQc2V1ZG9FbGVtZW50cykge1xuICAgICAgICAgIHBzZXVkb0VsZW1lbnRzQ2FsbGJhY2sobXV0YXRpb25SZWNvcmQudGFyZ2V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyZWVDYWxsYmFjayhtdXRhdGlvblJlY29yZC50YXJnZXQpO1xuICAgICAgfVxuXG4gICAgICBpZiAobXV0YXRpb25SZWNvcmQudHlwZSA9PT0gJ2F0dHJpYnV0ZXMnICYmIG11dGF0aW9uUmVjb3JkLnRhcmdldC5wYXJlbnROb2RlICYmIGNvbmZpZy5zZWFyY2hQc2V1ZG9FbGVtZW50cykge1xuICAgICAgICBwc2V1ZG9FbGVtZW50c0NhbGxiYWNrKG11dGF0aW9uUmVjb3JkLnRhcmdldC5wYXJlbnROb2RlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG11dGF0aW9uUmVjb3JkLnR5cGUgPT09ICdhdHRyaWJ1dGVzJyAmJiBpc1dhdGNoZWQobXV0YXRpb25SZWNvcmQudGFyZ2V0KSAmJiB+QVRUUklCVVRFU19XQVRDSEVEX0ZPUl9NVVRBVElPTi5pbmRleE9mKG11dGF0aW9uUmVjb3JkLmF0dHJpYnV0ZU5hbWUpKSB7XG4gICAgICAgIGlmIChtdXRhdGlvblJlY29yZC5hdHRyaWJ1dGVOYW1lID09PSAnY2xhc3MnKSB7XG4gICAgICAgICAgdmFyIF9nZXRDYW5vbmljYWxJY29uID0gZ2V0Q2Fub25pY2FsSWNvbihjbGFzc0FycmF5KG11dGF0aW9uUmVjb3JkLnRhcmdldCkpLFxuICAgICAgICAgICAgICBwcmVmaXggPSBfZ2V0Q2Fub25pY2FsSWNvbi5wcmVmaXgsXG4gICAgICAgICAgICAgIGljb25OYW1lID0gX2dldENhbm9uaWNhbEljb24uaWNvbk5hbWU7XG5cbiAgICAgICAgICBpZiAocHJlZml4KSBtdXRhdGlvblJlY29yZC50YXJnZXQuc2V0QXR0cmlidXRlKCdkYXRhLXByZWZpeCcsIHByZWZpeCk7XG4gICAgICAgICAgaWYgKGljb25OYW1lKSBtdXRhdGlvblJlY29yZC50YXJnZXQuc2V0QXR0cmlidXRlKCdkYXRhLWljb24nLCBpY29uTmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9kZUNhbGxiYWNrKG11dGF0aW9uUmVjb3JkLnRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIGlmICghSVNfRE9NKSByZXR1cm47XG4gIG1vLm9ic2VydmUob2JzZXJ2ZU11dGF0aW9uc1Jvb3QsIHtcbiAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlLFxuICAgIHN1YnRyZWU6IHRydWVcbiAgfSk7XG59XG5mdW5jdGlvbiBkaXNjb25uZWN0KCkge1xuICBpZiAoIW1vKSByZXR1cm47XG4gIG1vLmRpc2Nvbm5lY3QoKTtcbn1cblxuZnVuY3Rpb24gc3R5bGVQYXJzZXIgKG5vZGUpIHtcbiAgdmFyIHN0eWxlID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gIHZhciB2YWwgPSBbXTtcblxuICBpZiAoc3R5bGUpIHtcbiAgICB2YWwgPSBzdHlsZS5zcGxpdCgnOycpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBzdHlsZSkge1xuICAgICAgdmFyIHN0eWxlcyA9IHN0eWxlLnNwbGl0KCc6Jyk7XG4gICAgICB2YXIgcHJvcCA9IHN0eWxlc1swXTtcbiAgICAgIHZhciB2YWx1ZSA9IHN0eWxlcy5zbGljZSgxKTtcblxuICAgICAgaWYgKHByb3AgJiYgdmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICBhY2NbcHJvcF0gPSB2YWx1ZS5qb2luKCc6JykudHJpbSgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbiAgfVxuXG4gIHJldHVybiB2YWw7XG59XG5cbmZ1bmN0aW9uIGNsYXNzUGFyc2VyIChub2RlKSB7XG4gIHZhciBleGlzdGluZ1ByZWZpeCA9IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLXByZWZpeCcpO1xuICB2YXIgZXhpc3RpbmdJY29uTmFtZSA9IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWljb24nKTtcbiAgdmFyIGlubmVyVGV4dCA9IG5vZGUuaW5uZXJUZXh0ICE9PSB1bmRlZmluZWQgPyBub2RlLmlubmVyVGV4dC50cmltKCkgOiAnJztcbiAgdmFyIHZhbCA9IGdldENhbm9uaWNhbEljb24oY2xhc3NBcnJheShub2RlKSk7XG5cbiAgaWYgKGV4aXN0aW5nUHJlZml4ICYmIGV4aXN0aW5nSWNvbk5hbWUpIHtcbiAgICB2YWwucHJlZml4ID0gZXhpc3RpbmdQcmVmaXg7XG4gICAgdmFsLmljb25OYW1lID0gZXhpc3RpbmdJY29uTmFtZTtcbiAgfVxuXG4gIGlmICh2YWwucHJlZml4ICYmIGlubmVyVGV4dC5sZW5ndGggPiAxKSB7XG4gICAgdmFsLmljb25OYW1lID0gYnlMaWdhdHVyZSh2YWwucHJlZml4LCBub2RlLmlubmVyVGV4dCk7XG4gIH0gZWxzZSBpZiAodmFsLnByZWZpeCAmJiBpbm5lclRleHQubGVuZ3RoID09PSAxKSB7XG4gICAgdmFsLmljb25OYW1lID0gYnlVbmljb2RlKHZhbC5wcmVmaXgsIHRvSGV4KG5vZGUuaW5uZXJUZXh0KSk7XG4gIH1cblxuICByZXR1cm4gdmFsO1xufVxuXG52YXIgcGFyc2VUcmFuc2Zvcm1TdHJpbmcgPSBmdW5jdGlvbiBwYXJzZVRyYW5zZm9ybVN0cmluZyh0cmFuc2Zvcm1TdHJpbmcpIHtcbiAgdmFyIHRyYW5zZm9ybSA9IHtcbiAgICBzaXplOiAxNixcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgZmxpcFg6IGZhbHNlLFxuICAgIGZsaXBZOiBmYWxzZSxcbiAgICByb3RhdGU6IDBcbiAgfTtcblxuICBpZiAoIXRyYW5zZm9ybVN0cmluZykge1xuICAgIHJldHVybiB0cmFuc2Zvcm07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRyYW5zZm9ybVN0cmluZy50b0xvd2VyQ2FzZSgpLnNwbGl0KCcgJykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIG4pIHtcbiAgICAgIHZhciBwYXJ0cyA9IG4udG9Mb3dlckNhc2UoKS5zcGxpdCgnLScpO1xuICAgICAgdmFyIGZpcnN0ID0gcGFydHNbMF07XG4gICAgICB2YXIgcmVzdCA9IHBhcnRzLnNsaWNlKDEpLmpvaW4oJy0nKTtcblxuICAgICAgaWYgKGZpcnN0ICYmIHJlc3QgPT09ICdoJykge1xuICAgICAgICBhY2MuZmxpcFggPSB0cnVlO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfVxuXG4gICAgICBpZiAoZmlyc3QgJiYgcmVzdCA9PT0gJ3YnKSB7XG4gICAgICAgIGFjYy5mbGlwWSA9IHRydWU7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9XG5cbiAgICAgIHJlc3QgPSBwYXJzZUZsb2F0KHJlc3QpO1xuXG4gICAgICBpZiAoaXNOYU4ocmVzdCkpIHtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH1cblxuICAgICAgc3dpdGNoIChmaXJzdCkge1xuICAgICAgICBjYXNlICdncm93JzpcbiAgICAgICAgICBhY2Muc2l6ZSA9IGFjYy5zaXplICsgcmVzdDtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdzaHJpbmsnOlxuICAgICAgICAgIGFjYy5zaXplID0gYWNjLnNpemUgLSByZXN0O1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgIGFjYy54ID0gYWNjLnggLSByZXN0O1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICBhY2MueCA9IGFjYy54ICsgcmVzdDtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICd1cCc6XG4gICAgICAgICAgYWNjLnkgPSBhY2MueSAtIHJlc3Q7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZG93bic6XG4gICAgICAgICAgYWNjLnkgPSBhY2MueSArIHJlc3Q7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAncm90YXRlJzpcbiAgICAgICAgICBhY2Mucm90YXRlID0gYWNjLnJvdGF0ZSArIHJlc3Q7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgdHJhbnNmb3JtKTtcbiAgfVxufTtcbmZ1bmN0aW9uIHRyYW5zZm9ybVBhcnNlciAobm9kZSkge1xuICByZXR1cm4gcGFyc2VUcmFuc2Zvcm1TdHJpbmcobm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmEtdHJhbnNmb3JtJykpO1xufVxuXG5mdW5jdGlvbiBzeW1ib2xQYXJzZXIgKG5vZGUpIHtcbiAgdmFyIHN5bWJvbCA9IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWZhLXN5bWJvbCcpO1xuICByZXR1cm4gc3ltYm9sID09PSBudWxsID8gZmFsc2UgOiBzeW1ib2wgPT09ICcnID8gdHJ1ZSA6IHN5bWJvbDtcbn1cblxuZnVuY3Rpb24gYXR0cmlidXRlc1BhcnNlciAobm9kZSkge1xuICB2YXIgZXh0cmFBdHRyaWJ1dGVzID0gdG9BcnJheShub2RlLmF0dHJpYnV0ZXMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBhdHRyKSB7XG4gICAgaWYgKGFjYy5uYW1lICE9PSAnY2xhc3MnICYmIGFjYy5uYW1lICE9PSAnc3R5bGUnKSB7XG4gICAgICBhY2NbYXR0ci5uYW1lXSA9IGF0dHIudmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuICB2YXIgdGl0bGUgPSBub2RlLmdldEF0dHJpYnV0ZSgndGl0bGUnKTtcbiAgdmFyIHRpdGxlSWQgPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1mYS10aXRsZS1pZCcpO1xuXG4gIGlmIChjb25maWcuYXV0b0ExMXkpIHtcbiAgICBpZiAodGl0bGUpIHtcbiAgICAgIGV4dHJhQXR0cmlidXRlc1snYXJpYS1sYWJlbGxlZGJ5J10gPSBcIlwiLmNvbmNhdChjb25maWcucmVwbGFjZW1lbnRDbGFzcywgXCItdGl0bGUtXCIpLmNvbmNhdCh0aXRsZUlkIHx8IG5leHRVbmlxdWVJZCgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXh0cmFBdHRyaWJ1dGVzWydhcmlhLWhpZGRlbiddID0gJ3RydWUnO1xuICAgICAgZXh0cmFBdHRyaWJ1dGVzWydmb2N1c2FibGUnXSA9ICdmYWxzZSc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGV4dHJhQXR0cmlidXRlcztcbn1cblxuZnVuY3Rpb24gbWFza1BhcnNlciAobm9kZSkge1xuICB2YXIgbWFzayA9IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWZhLW1hc2snKTtcblxuICBpZiAoIW1hc2spIHtcbiAgICByZXR1cm4gZW1wdHlDYW5vbmljYWxJY29uKCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGdldENhbm9uaWNhbEljb24obWFzay5zcGxpdCgnICcpLm1hcChmdW5jdGlvbiAoaSkge1xuICAgICAgcmV0dXJuIGkudHJpbSgpO1xuICAgIH0pKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBibGFua01ldGEoKSB7XG4gIHJldHVybiB7XG4gICAgaWNvbk5hbWU6IG51bGwsXG4gICAgdGl0bGU6IG51bGwsXG4gICAgdGl0bGVJZDogbnVsbCxcbiAgICBwcmVmaXg6IG51bGwsXG4gICAgdHJhbnNmb3JtOiBtZWFuaW5nbGVzc1RyYW5zZm9ybSxcbiAgICBzeW1ib2w6IGZhbHNlLFxuICAgIG1hc2s6IG51bGwsXG4gICAgbWFza0lkOiBudWxsLFxuICAgIGV4dHJhOiB7XG4gICAgICBjbGFzc2VzOiBbXSxcbiAgICAgIHN0eWxlczoge30sXG4gICAgICBhdHRyaWJ1dGVzOiB7fVxuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIHBhcnNlTWV0YShub2RlKSB7XG4gIHZhciBfY2xhc3NQYXJzZXIgPSBjbGFzc1BhcnNlcihub2RlKSxcbiAgICAgIGljb25OYW1lID0gX2NsYXNzUGFyc2VyLmljb25OYW1lLFxuICAgICAgcHJlZml4ID0gX2NsYXNzUGFyc2VyLnByZWZpeCxcbiAgICAgIGV4dHJhQ2xhc3NlcyA9IF9jbGFzc1BhcnNlci5yZXN0O1xuXG4gIHZhciBleHRyYVN0eWxlcyA9IHN0eWxlUGFyc2VyKG5vZGUpO1xuICB2YXIgdHJhbnNmb3JtID0gdHJhbnNmb3JtUGFyc2VyKG5vZGUpO1xuICB2YXIgc3ltYm9sID0gc3ltYm9sUGFyc2VyKG5vZGUpO1xuICB2YXIgZXh0cmFBdHRyaWJ1dGVzID0gYXR0cmlidXRlc1BhcnNlcihub2RlKTtcbiAgdmFyIG1hc2sgPSBtYXNrUGFyc2VyKG5vZGUpO1xuICByZXR1cm4ge1xuICAgIGljb25OYW1lOiBpY29uTmFtZSxcbiAgICB0aXRsZTogbm9kZS5nZXRBdHRyaWJ1dGUoJ3RpdGxlJyksXG4gICAgdGl0bGVJZDogbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmEtdGl0bGUtaWQnKSxcbiAgICBwcmVmaXg6IHByZWZpeCxcbiAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICBzeW1ib2w6IHN5bWJvbCxcbiAgICBtYXNrOiBtYXNrLFxuICAgIG1hc2tJZDogbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmEtbWFzay1pZCcpLFxuICAgIGV4dHJhOiB7XG4gICAgICBjbGFzc2VzOiBleHRyYUNsYXNzZXMsXG4gICAgICBzdHlsZXM6IGV4dHJhU3R5bGVzLFxuICAgICAgYXR0cmlidXRlczogZXh0cmFBdHRyaWJ1dGVzXG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBNaXNzaW5nSWNvbihlcnJvcikge1xuICB0aGlzLm5hbWUgPSAnTWlzc2luZ0ljb24nO1xuICB0aGlzLm1lc3NhZ2UgPSBlcnJvciB8fCAnSWNvbiB1bmF2YWlsYWJsZSc7XG4gIHRoaXMuc3RhY2sgPSBuZXcgRXJyb3IoKS5zdGFjaztcbn1cbk1pc3NpbmdJY29uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbk1pc3NpbmdJY29uLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE1pc3NpbmdJY29uO1xuXG52YXIgRklMTCA9IHtcbiAgZmlsbDogJ2N1cnJlbnRDb2xvcidcbn07XG52YXIgQU5JTUFUSU9OX0JBU0UgPSB7XG4gIGF0dHJpYnV0ZVR5cGU6ICdYTUwnLFxuICByZXBlYXRDb3VudDogJ2luZGVmaW5pdGUnLFxuICBkdXI6ICcycydcbn07XG52YXIgUklORyA9IHtcbiAgdGFnOiAncGF0aCcsXG4gIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIEZJTEwsIHtcbiAgICBkOiAnTTE1Ni41LDQ0Ny43bC0xMi42LDI5LjVjLTE4LjctOS41LTM1LjktMjEuMi01MS41LTM0LjlsMjIuNy0yMi43QzEyNy42LDQzMC41LDE0MS41LDQ0MCwxNTYuNSw0NDcuN3ogTTQwLjYsMjcySDguNSBjMS40LDIxLjIsNS40LDQxLjcsMTEuNyw2MS4xTDUwLDMyMS4yQzQ1LjEsMzA1LjUsNDEuOCwyODksNDAuNiwyNzJ6IE00MC42LDI0MGMxLjQtMTguOCw1LjItMzcsMTEuMS01NC4xbC0yOS41LTEyLjYgQzE0LjcsMTk0LjMsMTAsMjE2LjcsOC41LDI0MEg0MC42eiBNNjQuMywxNTYuNWM3LjgtMTQuOSwxNy4yLTI4LjgsMjguMS00MS41TDY5LjcsOTIuM2MtMTMuNywxNS42LTI1LjUsMzIuOC0zNC45LDUxLjUgTDY0LjMsMTU2LjV6IE0zOTcsNDE5LjZjLTEzLjksMTItMjkuNCwyMi4zLTQ2LjEsMzAuNGwxMS45LDI5LjhjMjAuNy05LjksMzkuOC0yMi42LDU2LjktMzcuNkwzOTcsNDE5LjZ6IE0xMTUsOTIuNCBjMTMuOS0xMiwyOS40LTIyLjMsNDYuMS0zMC40bC0xMS45LTI5LjhjLTIwLjcsOS45LTM5LjgsMjIuNi01Ni44LDM3LjZMMTE1LDkyLjR6IE00NDcuNywzNTUuNWMtNy44LDE0LjktMTcuMiwyOC44LTI4LjEsNDEuNSBsMjIuNywyMi43YzEzLjctMTUuNiwyNS41LTMyLjksMzQuOS01MS41TDQ0Ny43LDM1NS41eiBNNDcxLjQsMjcyYy0xLjQsMTguOC01LjIsMzctMTEuMSw1NC4xbDI5LjUsMTIuNiBjNy41LTIxLjEsMTIuMi00My41LDEzLjYtNjYuOEg0NzEuNHogTTMyMS4yLDQ2MmMtMTUuNyw1LTMyLjIsOC4yLTQ5LjIsOS40djMyLjFjMjEuMi0xLjQsNDEuNy01LjQsNjEuMS0xMS43TDMyMS4yLDQ2MnogTTI0MCw0NzEuNGMtMTguOC0xLjQtMzctNS4yLTU0LjEtMTEuMWwtMTIuNiwyOS41YzIxLjEsNy41LDQzLjUsMTIuMiw2Ni44LDEzLjZWNDcxLjR6IE00NjIsMTkwLjhjNSwxNS43LDguMiwzMi4yLDkuNCw0OS4yaDMyLjEgYy0xLjQtMjEuMi01LjQtNDEuNy0xMS43LTYxLjFMNDYyLDE5MC44eiBNOTIuNCwzOTdjLTEyLTEzLjktMjIuMy0yOS40LTMwLjQtNDYuMWwtMjkuOCwxMS45YzkuOSwyMC43LDIyLjYsMzkuOCwzNy42LDU2LjkgTDkyLjQsMzk3eiBNMjcyLDQwLjZjMTguOCwxLjQsMzYuOSw1LjIsNTQuMSwxMS4xbDEyLjYtMjkuNUMzMTcuNywxNC43LDI5NS4zLDEwLDI3Miw4LjVWNDAuNnogTTE5MC44LDUwIGMxNS43LTUsMzIuMi04LjIsNDkuMi05LjRWOC41Yy0yMS4yLDEuNC00MS43LDUuNC02MS4xLDExLjdMMTkwLjgsNTB6IE00NDIuMyw5Mi4zTDQxOS42LDExNWMxMiwxMy45LDIyLjMsMjkuNCwzMC41LDQ2LjEgbDI5LjgtMTEuOUM0NzAsMTI4LjUsNDU3LjMsMTA5LjQsNDQyLjMsOTIuM3ogTTM5Nyw5Mi40bDIyLjctMjIuN2MtMTUuNi0xMy43LTMyLjgtMjUuNS01MS41LTM0LjlsLTEyLjYsMjkuNSBDMzcwLjQsNzIuMSwzODQuNCw4MS41LDM5Nyw5Mi40eidcbiAgfSlcbn07XG5cbnZhciBPUEFDSVRZX0FOSU1BVEUgPSBfb2JqZWN0U3ByZWFkKHt9LCBBTklNQVRJT05fQkFTRSwge1xuICBhdHRyaWJ1dGVOYW1lOiAnb3BhY2l0eSdcbn0pO1xuXG52YXIgRE9UID0ge1xuICB0YWc6ICdjaXJjbGUnLFxuICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCBGSUxMLCB7XG4gICAgY3g6ICcyNTYnLFxuICAgIGN5OiAnMzY0JyxcbiAgICByOiAnMjgnXG4gIH0pLFxuICBjaGlsZHJlbjogW3tcbiAgICB0YWc6ICdhbmltYXRlJyxcbiAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCBBTklNQVRJT05fQkFTRSwge1xuICAgICAgYXR0cmlidXRlTmFtZTogJ3InLFxuICAgICAgdmFsdWVzOiAnMjg7MTQ7Mjg7Mjg7MTQ7Mjg7J1xuICAgIH0pXG4gIH0sIHtcbiAgICB0YWc6ICdhbmltYXRlJyxcbiAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCBPUEFDSVRZX0FOSU1BVEUsIHtcbiAgICAgIHZhbHVlczogJzE7MDsxOzE7MDsxOydcbiAgICB9KVxuICB9XVxufTtcbnZhciBRVUVTVElPTiA9IHtcbiAgdGFnOiAncGF0aCcsXG4gIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIEZJTEwsIHtcbiAgICBvcGFjaXR5OiAnMScsXG4gICAgZDogJ00yNjMuNywzMTJoLTE2Yy02LjYsMC0xMi01LjQtMTItMTJjMC03MSw3Ny40LTYzLjksNzcuNC0xMDcuOGMwLTIwLTE3LjgtNDAuMi01Ny40LTQwLjJjLTI5LjEsMC00NC4zLDkuNi01OS4yLDI4LjcgYy0zLjksNS0xMS4xLDYtMTYuMiwyLjRsLTEzLjEtOS4yYy01LjYtMy45LTYuOS0xMS44LTIuNi0xNy4yYzIxLjItMjcuMiw0Ni40LTQ0LjcsOTEuMi00NC43YzUyLjMsMCw5Ny40LDI5LjgsOTcuNCw4MC4yIGMwLDY3LjYtNzcuNCw2My41LTc3LjQsMTA3LjhDMjc1LjcsMzA2LjYsMjcwLjMsMzEyLDI2My43LDMxMnonXG4gIH0pLFxuICBjaGlsZHJlbjogW3tcbiAgICB0YWc6ICdhbmltYXRlJyxcbiAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCBPUEFDSVRZX0FOSU1BVEUsIHtcbiAgICAgIHZhbHVlczogJzE7MDswOzA7MDsxOydcbiAgICB9KVxuICB9XVxufTtcbnZhciBFWENMQU1BVElPTiA9IHtcbiAgdGFnOiAncGF0aCcsXG4gIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIEZJTEwsIHtcbiAgICBvcGFjaXR5OiAnMCcsXG4gICAgZDogJ00yMzIuNSwxMzQuNWw3LDE2OGMwLjMsNi40LDUuNiwxMS41LDEyLDExLjVoOWM2LjQsMCwxMS43LTUuMSwxMi0xMS41bDctMTY4YzAuMy02LjgtNS4yLTEyLjUtMTItMTIuNWgtMjMgQzIzNy43LDEyMiwyMzIuMiwxMjcuNywyMzIuNSwxMzQuNXonXG4gIH0pLFxuICBjaGlsZHJlbjogW3tcbiAgICB0YWc6ICdhbmltYXRlJyxcbiAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCBPUEFDSVRZX0FOSU1BVEUsIHtcbiAgICAgIHZhbHVlczogJzA7MDsxOzE7MDswOydcbiAgICB9KVxuICB9XVxufTtcbnZhciBtaXNzaW5nID0ge1xuICB0YWc6ICdnJyxcbiAgY2hpbGRyZW46IFtSSU5HLCBET1QsIFFVRVNUSU9OLCBFWENMQU1BVElPTl1cbn07XG5cbnZhciBzdHlsZXMkMiA9IG5hbWVzcGFjZS5zdHlsZXM7XG5mdW5jdGlvbiBhc0ZvdW5kSWNvbihpY29uKSB7XG4gIHZhciB3aWR0aCA9IGljb25bMF07XG4gIHZhciBoZWlnaHQgPSBpY29uWzFdO1xuXG4gIHZhciBfaWNvbiRzbGljZSA9IGljb24uc2xpY2UoNCksXG4gICAgICBfaWNvbiRzbGljZTIgPSBfc2xpY2VkVG9BcnJheShfaWNvbiRzbGljZSwgMSksXG4gICAgICB2ZWN0b3JEYXRhID0gX2ljb24kc2xpY2UyWzBdO1xuXG4gIHZhciBlbGVtZW50ID0gbnVsbDtcblxuICBpZiAoQXJyYXkuaXNBcnJheSh2ZWN0b3JEYXRhKSkge1xuICAgIGVsZW1lbnQgPSB7XG4gICAgICB0YWc6ICdnJyxcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgY2xhc3M6IFwiXCIuY29uY2F0KGNvbmZpZy5mYW1pbHlQcmVmaXgsIFwiLVwiKS5jb25jYXQoRFVPVE9ORV9DTEFTU0VTLkdST1VQKVxuICAgICAgfSxcbiAgICAgIGNoaWxkcmVuOiBbe1xuICAgICAgICB0YWc6ICdwYXRoJyxcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgIGNsYXNzOiBcIlwiLmNvbmNhdChjb25maWcuZmFtaWx5UHJlZml4LCBcIi1cIikuY29uY2F0KERVT1RPTkVfQ0xBU1NFUy5TRUNPTkRBUlkpLFxuICAgICAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgICAgICAgIGQ6IHZlY3RvckRhdGFbMF1cbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICB0YWc6ICdwYXRoJyxcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgIGNsYXNzOiBcIlwiLmNvbmNhdChjb25maWcuZmFtaWx5UHJlZml4LCBcIi1cIikuY29uY2F0KERVT1RPTkVfQ0xBU1NFUy5QUklNQVJZKSxcbiAgICAgICAgICBmaWxsOiAnY3VycmVudENvbG9yJyxcbiAgICAgICAgICBkOiB2ZWN0b3JEYXRhWzFdXG4gICAgICAgIH1cbiAgICAgIH1dXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50ID0ge1xuICAgICAgdGFnOiAncGF0aCcsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgICAgICBkOiB2ZWN0b3JEYXRhXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZm91bmQ6IHRydWUsXG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIGljb246IGVsZW1lbnRcbiAgfTtcbn1cbmZ1bmN0aW9uIGZpbmRJY29uKGljb25OYW1lLCBwcmVmaXgpIHtcbiAgcmV0dXJuIG5ldyBwaWNrZWQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciB2YWwgPSB7XG4gICAgICBmb3VuZDogZmFsc2UsXG4gICAgICB3aWR0aDogNTEyLFxuICAgICAgaGVpZ2h0OiA1MTIsXG4gICAgICBpY29uOiBtaXNzaW5nXG4gICAgfTtcblxuICAgIGlmIChpY29uTmFtZSAmJiBwcmVmaXggJiYgc3R5bGVzJDJbcHJlZml4XSAmJiBzdHlsZXMkMltwcmVmaXhdW2ljb25OYW1lXSkge1xuICAgICAgdmFyIGljb24gPSBzdHlsZXMkMltwcmVmaXhdW2ljb25OYW1lXTtcbiAgICAgIHJldHVybiByZXNvbHZlKGFzRm91bmRJY29uKGljb24pKTtcbiAgICB9XG5cbiAgICBpZiAoaWNvbk5hbWUgJiYgcHJlZml4ICYmICFjb25maWcuc2hvd01pc3NpbmdJY29ucykge1xuICAgICAgcmVqZWN0KG5ldyBNaXNzaW5nSWNvbihcIkljb24gaXMgbWlzc2luZyBmb3IgcHJlZml4IFwiLmNvbmNhdChwcmVmaXgsIFwiIHdpdGggaWNvbiBuYW1lIFwiKS5jb25jYXQoaWNvbk5hbWUpKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc29sdmUodmFsKTtcbiAgICB9XG4gIH0pO1xufVxuXG52YXIgc3R5bGVzJDMgPSBuYW1lc3BhY2Uuc3R5bGVzO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZVN2Z1JlcGxhY2VtZW50TXV0YXRpb24obm9kZSwgbm9kZU1ldGEpIHtcbiAgdmFyIGljb25OYW1lID0gbm9kZU1ldGEuaWNvbk5hbWUsXG4gICAgICB0aXRsZSA9IG5vZGVNZXRhLnRpdGxlLFxuICAgICAgdGl0bGVJZCA9IG5vZGVNZXRhLnRpdGxlSWQsXG4gICAgICBwcmVmaXggPSBub2RlTWV0YS5wcmVmaXgsXG4gICAgICB0cmFuc2Zvcm0gPSBub2RlTWV0YS50cmFuc2Zvcm0sXG4gICAgICBzeW1ib2wgPSBub2RlTWV0YS5zeW1ib2wsXG4gICAgICBtYXNrID0gbm9kZU1ldGEubWFzayxcbiAgICAgIG1hc2tJZCA9IG5vZGVNZXRhLm1hc2tJZCxcbiAgICAgIGV4dHJhID0gbm9kZU1ldGEuZXh0cmE7XG4gIHJldHVybiBuZXcgcGlja2VkKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBwaWNrZWQuYWxsKFtmaW5kSWNvbihpY29uTmFtZSwgcHJlZml4KSwgZmluZEljb24obWFzay5pY29uTmFtZSwgbWFzay5wcmVmaXgpXSkudGhlbihmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIF9yZWYyID0gX3NsaWNlZFRvQXJyYXkoX3JlZiwgMiksXG4gICAgICAgICAgbWFpbiA9IF9yZWYyWzBdLFxuICAgICAgICAgIG1hc2sgPSBfcmVmMlsxXTtcblxuICAgICAgcmVzb2x2ZShbbm9kZSwgbWFrZUlubGluZVN2Z0Fic3RyYWN0KHtcbiAgICAgICAgaWNvbnM6IHtcbiAgICAgICAgICBtYWluOiBtYWluLFxuICAgICAgICAgIG1hc2s6IG1hc2tcbiAgICAgICAgfSxcbiAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgIGljb25OYW1lOiBpY29uTmFtZSxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgICAgIHN5bWJvbDogc3ltYm9sLFxuICAgICAgICBtYXNrOiBtYXNrLFxuICAgICAgICBtYXNrSWQ6IG1hc2tJZCxcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICB0aXRsZUlkOiB0aXRsZUlkLFxuICAgICAgICBleHRyYTogZXh0cmEsXG4gICAgICAgIHdhdGNoYWJsZTogdHJ1ZVxuICAgICAgfSldKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlTGF5ZXJzVGV4dChub2RlLCBub2RlTWV0YSkge1xuICB2YXIgdGl0bGUgPSBub2RlTWV0YS50aXRsZSxcbiAgICAgIHRyYW5zZm9ybSA9IG5vZGVNZXRhLnRyYW5zZm9ybSxcbiAgICAgIGV4dHJhID0gbm9kZU1ldGEuZXh0cmE7XG4gIHZhciB3aWR0aCA9IG51bGw7XG4gIHZhciBoZWlnaHQgPSBudWxsO1xuXG4gIGlmIChJU19JRSkge1xuICAgIHZhciBjb21wdXRlZEZvbnRTaXplID0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS5mb250U2l6ZSwgMTApO1xuICAgIHZhciBib3VuZGluZ0NsaWVudFJlY3QgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHdpZHRoID0gYm91bmRpbmdDbGllbnRSZWN0LndpZHRoIC8gY29tcHV0ZWRGb250U2l6ZTtcbiAgICBoZWlnaHQgPSBib3VuZGluZ0NsaWVudFJlY3QuaGVpZ2h0IC8gY29tcHV0ZWRGb250U2l6ZTtcbiAgfVxuXG4gIGlmIChjb25maWcuYXV0b0ExMXkgJiYgIXRpdGxlKSB7XG4gICAgZXh0cmEuYXR0cmlidXRlc1snYXJpYS1oaWRkZW4nXSA9ICd0cnVlJztcbiAgfVxuXG4gIHJldHVybiBwaWNrZWQucmVzb2x2ZShbbm9kZSwgbWFrZUxheWVyc1RleHRBYnN0cmFjdCh7XG4gICAgY29udGVudDogbm9kZS5pbm5lckhUTUwsXG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgIHRpdGxlOiB0aXRsZSxcbiAgICBleHRyYTogZXh0cmEsXG4gICAgd2F0Y2hhYmxlOiB0cnVlXG4gIH0pXSk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlTXV0YXRpb24obm9kZSkge1xuICB2YXIgbm9kZU1ldGEgPSBwYXJzZU1ldGEobm9kZSk7XG5cbiAgaWYgKH5ub2RlTWV0YS5leHRyYS5jbGFzc2VzLmluZGV4T2YoTEFZRVJTX1RFWFRfQ0xBU1NOQU1FKSkge1xuICAgIHJldHVybiBnZW5lcmF0ZUxheWVyc1RleHQobm9kZSwgbm9kZU1ldGEpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBnZW5lcmF0ZVN2Z1JlcGxhY2VtZW50TXV0YXRpb24obm9kZSwgbm9kZU1ldGEpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9uVHJlZShyb290KSB7XG4gIHZhciBjYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcbiAgaWYgKCFJU19ET00pIHJldHVybjtcbiAgdmFyIGh0bWxDbGFzc0xpc3QgPSBET0NVTUVOVC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0O1xuXG4gIHZhciBoY2xBZGQgPSBmdW5jdGlvbiBoY2xBZGQoc3VmZml4KSB7XG4gICAgcmV0dXJuIGh0bWxDbGFzc0xpc3QuYWRkKFwiXCIuY29uY2F0KEhUTUxfQ0xBU1NfSTJTVkdfQkFTRV9DTEFTUywgXCItXCIpLmNvbmNhdChzdWZmaXgpKTtcbiAgfTtcblxuICB2YXIgaGNsUmVtb3ZlID0gZnVuY3Rpb24gaGNsUmVtb3ZlKHN1ZmZpeCkge1xuICAgIHJldHVybiBodG1sQ2xhc3NMaXN0LnJlbW92ZShcIlwiLmNvbmNhdChIVE1MX0NMQVNTX0kyU1ZHX0JBU0VfQ0xBU1MsIFwiLVwiKS5jb25jYXQoc3VmZml4KSk7XG4gIH07XG5cbiAgdmFyIHByZWZpeGVzID0gY29uZmlnLmF1dG9GZXRjaFN2ZyA/IE9iamVjdC5rZXlzKFBSRUZJWF9UT19TVFlMRSkgOiBPYmplY3Qua2V5cyhzdHlsZXMkMyk7XG4gIHZhciBwcmVmaXhlc0RvbVF1ZXJ5ID0gW1wiLlwiLmNvbmNhdChMQVlFUlNfVEVYVF9DTEFTU05BTUUsIFwiOm5vdChbXCIpLmNvbmNhdChEQVRBX0ZBX0kyU1ZHLCBcIl0pXCIpXS5jb25jYXQocHJlZml4ZXMubWFwKGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIFwiLlwiLmNvbmNhdChwLCBcIjpub3QoW1wiKS5jb25jYXQoREFUQV9GQV9JMlNWRywgXCJdKVwiKTtcbiAgfSkpLmpvaW4oJywgJyk7XG5cbiAgaWYgKHByZWZpeGVzRG9tUXVlcnkubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGNhbmRpZGF0ZXMgPSBbXTtcblxuICB0cnkge1xuICAgIGNhbmRpZGF0ZXMgPSB0b0FycmF5KHJvb3QucXVlcnlTZWxlY3RvckFsbChwcmVmaXhlc0RvbVF1ZXJ5KSk7XG4gIH0gY2F0Y2ggKGUpIHsvLyBub29wXG4gIH1cblxuICBpZiAoY2FuZGlkYXRlcy5sZW5ndGggPiAwKSB7XG4gICAgaGNsQWRkKCdwZW5kaW5nJyk7XG4gICAgaGNsUmVtb3ZlKCdjb21wbGV0ZScpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBtYXJrID0gcGVyZi5iZWdpbignb25UcmVlJyk7XG4gIHZhciBtdXRhdGlvbnMgPSBjYW5kaWRhdGVzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBub2RlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBtdXRhdGlvbiA9IGdlbmVyYXRlTXV0YXRpb24obm9kZSk7XG5cbiAgICAgIGlmIChtdXRhdGlvbikge1xuICAgICAgICBhY2MucHVzaChtdXRhdGlvbik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCFQUk9EVUNUSU9OKSB7XG4gICAgICAgIGlmIChlIGluc3RhbmNlb2YgTWlzc2luZ0ljb24pIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwgW10pO1xuICByZXR1cm4gbmV3IHBpY2tlZChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgcGlja2VkLmFsbChtdXRhdGlvbnMpLnRoZW4oZnVuY3Rpb24gKHJlc29sdmVkTXV0YXRpb25zKSB7XG4gICAgICBwZXJmb3JtKHJlc29sdmVkTXV0YXRpb25zLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGhjbEFkZCgnYWN0aXZlJyk7XG4gICAgICAgIGhjbEFkZCgnY29tcGxldGUnKTtcbiAgICAgICAgaGNsUmVtb3ZlKCdwZW5kaW5nJyk7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIGNhbGxiYWNrKCk7XG4gICAgICAgIG1hcmsoKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgbWFyaygpO1xuICAgICAgcmVqZWN0KCk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gb25Ob2RlKG5vZGUpIHtcbiAgdmFyIGNhbGxiYWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBudWxsO1xuICBnZW5lcmF0ZU11dGF0aW9uKG5vZGUpLnRoZW4oZnVuY3Rpb24gKG11dGF0aW9uKSB7XG4gICAgaWYgKG11dGF0aW9uKSB7XG4gICAgICBwZXJmb3JtKFttdXRhdGlvbl0sIGNhbGxiYWNrKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlRm9yUG9zaXRpb24obm9kZSwgcG9zaXRpb24pIHtcbiAgdmFyIHBlbmRpbmdBdHRyaWJ1dGUgPSBcIlwiLmNvbmNhdChEQVRBX0ZBX1BTRVVET19FTEVNRU5UX1BFTkRJTkcpLmNvbmNhdChwb3NpdGlvbi5yZXBsYWNlKCc6JywgJy0nKSk7XG4gIHJldHVybiBuZXcgcGlja2VkKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBpZiAobm9kZS5nZXRBdHRyaWJ1dGUocGVuZGluZ0F0dHJpYnV0ZSkgIT09IG51bGwpIHtcbiAgICAgIC8vIFRoaXMgbm9kZSBpcyBhbHJlYWR5IGJlaW5nIHByb2Nlc3NlZFxuICAgICAgcmV0dXJuIHJlc29sdmUoKTtcbiAgICB9XG5cbiAgICB2YXIgY2hpbGRyZW4gPSB0b0FycmF5KG5vZGUuY2hpbGRyZW4pO1xuICAgIHZhciBhbHJlYWR5UHJvY2Vzc2VkUHNldWRvRWxlbWVudCA9IGNoaWxkcmVuLmZpbHRlcihmdW5jdGlvbiAoYykge1xuICAgICAgcmV0dXJuIGMuZ2V0QXR0cmlidXRlKERBVEFfRkFfUFNFVURPX0VMRU1FTlQpID09PSBwb3NpdGlvbjtcbiAgICB9KVswXTtcbiAgICB2YXIgc3R5bGVzID0gV0lORE9XLmdldENvbXB1dGVkU3R5bGUobm9kZSwgcG9zaXRpb24pO1xuICAgIHZhciBmb250RmFtaWx5ID0gc3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ2ZvbnQtZmFtaWx5JykubWF0Y2goRk9OVF9GQU1JTFlfUEFUVEVSTik7XG4gICAgdmFyIGZvbnRXZWlnaHQgPSBzdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnZm9udC13ZWlnaHQnKTtcbiAgICB2YXIgY29udGVudCA9IHN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdjb250ZW50Jyk7XG5cbiAgICBpZiAoYWxyZWFkeVByb2Nlc3NlZFBzZXVkb0VsZW1lbnQgJiYgIWZvbnRGYW1pbHkpIHtcbiAgICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgcHJvY2Vzc2VkIGl0IGJ1dCB0aGUgY3VycmVudCBjb21wdXRlZCBzdHlsZSBkb2VzIG5vdCByZXN1bHQgaW4gYSBmb250LWZhbWlseSxcbiAgICAgIC8vIHRoYXQgcHJvYmFibHkgbWVhbnMgdGhhdCBhIGNsYXNzIG5hbWUgdGhhdCB3YXMgcHJldmlvdXNseSBwcmVzZW50IHRvIG1ha2UgdGhlIGljb24gaGFzIGJlZW5cbiAgICAgIC8vIHJlbW92ZWQuIFNvIHdlIG5vdyBzaG91bGQgZGVsZXRlIHRoZSBpY29uLlxuICAgICAgbm9kZS5yZW1vdmVDaGlsZChhbHJlYWR5UHJvY2Vzc2VkUHNldWRvRWxlbWVudCk7XG4gICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgIH0gZWxzZSBpZiAoZm9udEZhbWlseSAmJiBjb250ZW50ICE9PSAnbm9uZScgJiYgY29udGVudCAhPT0gJycpIHtcbiAgICAgIHZhciBfY29udGVudCA9IHN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdjb250ZW50Jyk7XG5cbiAgICAgIHZhciBwcmVmaXggPSB+WydTb2xpZCcsICdSZWd1bGFyJywgJ0xpZ2h0JywgJ0R1b3RvbmUnLCAnQnJhbmRzJywgJ0tpdCddLmluZGV4T2YoZm9udEZhbWlseVsyXSkgPyBTVFlMRV9UT19QUkVGSVhbZm9udEZhbWlseVsyXS50b0xvd2VyQ2FzZSgpXSA6IEZPTlRfV0VJR0hUX1RPX1BSRUZJWFtmb250V2VpZ2h0XTtcbiAgICAgIHZhciBoZXhWYWx1ZSA9IHRvSGV4KF9jb250ZW50Lmxlbmd0aCA9PT0gMyA/IF9jb250ZW50LnN1YnN0cigxLCAxKSA6IF9jb250ZW50KTtcbiAgICAgIHZhciBpY29uTmFtZSA9IGJ5VW5pY29kZShwcmVmaXgsIGhleFZhbHVlKTtcbiAgICAgIHZhciBpY29uSWRlbnRpZmllciA9IGljb25OYW1lOyAvLyBPbmx5IGNvbnZlcnQgdGhlIHBzZXVkbyBlbGVtZW50IGluIHRoaXMgOmJlZm9yZS86YWZ0ZXIgcG9zaXRpb24gaW50byBhbiBpY29uIGlmIHdlIGhhdmVuJ3RcbiAgICAgIC8vIGFscmVhZHkgZG9uZSBzbyB3aXRoIHRoZSBzYW1lIHByZWZpeCBhbmQgaWNvbk5hbWVcblxuICAgICAgaWYgKGljb25OYW1lICYmICghYWxyZWFkeVByb2Nlc3NlZFBzZXVkb0VsZW1lbnQgfHwgYWxyZWFkeVByb2Nlc3NlZFBzZXVkb0VsZW1lbnQuZ2V0QXR0cmlidXRlKERBVEFfUFJFRklYKSAhPT0gcHJlZml4IHx8IGFscmVhZHlQcm9jZXNzZWRQc2V1ZG9FbGVtZW50LmdldEF0dHJpYnV0ZShEQVRBX0lDT04pICE9PSBpY29uSWRlbnRpZmllcikpIHtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUocGVuZGluZ0F0dHJpYnV0ZSwgaWNvbklkZW50aWZpZXIpO1xuXG4gICAgICAgIGlmIChhbHJlYWR5UHJvY2Vzc2VkUHNldWRvRWxlbWVudCkge1xuICAgICAgICAgIC8vIERlbGV0ZSB0aGUgb2xkIG9uZSwgc2luY2Ugd2UncmUgcmVwbGFjaW5nIGl0IHdpdGggYSBuZXcgb25lXG4gICAgICAgICAgbm9kZS5yZW1vdmVDaGlsZChhbHJlYWR5UHJvY2Vzc2VkUHNldWRvRWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbWV0YSA9IGJsYW5rTWV0YSgpO1xuICAgICAgICB2YXIgZXh0cmEgPSBtZXRhLmV4dHJhO1xuICAgICAgICBleHRyYS5hdHRyaWJ1dGVzW0RBVEFfRkFfUFNFVURPX0VMRU1FTlRdID0gcG9zaXRpb247XG4gICAgICAgIGZpbmRJY29uKGljb25OYW1lLCBwcmVmaXgpLnRoZW4oZnVuY3Rpb24gKG1haW4pIHtcbiAgICAgICAgICB2YXIgYWJzdHJhY3QgPSBtYWtlSW5saW5lU3ZnQWJzdHJhY3QoX29iamVjdFNwcmVhZCh7fSwgbWV0YSwge1xuICAgICAgICAgICAgaWNvbnM6IHtcbiAgICAgICAgICAgICAgbWFpbjogbWFpbixcbiAgICAgICAgICAgICAgbWFzazogZW1wdHlDYW5vbmljYWxJY29uKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgIGljb25OYW1lOiBpY29uSWRlbnRpZmllcixcbiAgICAgICAgICAgIGV4dHJhOiBleHRyYSxcbiAgICAgICAgICAgIHdhdGNoYWJsZTogdHJ1ZVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgICB2YXIgZWxlbWVudCA9IERPQ1VNRU5ULmNyZWF0ZUVsZW1lbnQoJ3N2ZycpO1xuXG4gICAgICAgICAgaWYgKHBvc2l0aW9uID09PSAnOmJlZm9yZScpIHtcbiAgICAgICAgICAgIG5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIG5vZGUuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZWxlbWVudC5vdXRlckhUTUwgPSBhYnN0cmFjdC5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgIHJldHVybiB0b0h0bWwoYSk7XG4gICAgICAgICAgfSkuam9pbignXFxuJyk7XG4gICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUocGVuZGluZ0F0dHJpYnV0ZSk7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZShub2RlKSB7XG4gIHJldHVybiBwaWNrZWQuYWxsKFtyZXBsYWNlRm9yUG9zaXRpb24obm9kZSwgJzpiZWZvcmUnKSwgcmVwbGFjZUZvclBvc2l0aW9uKG5vZGUsICc6YWZ0ZXInKV0pO1xufVxuXG5mdW5jdGlvbiBwcm9jZXNzYWJsZShub2RlKSB7XG4gIHJldHVybiBub2RlLnBhcmVudE5vZGUgIT09IGRvY3VtZW50LmhlYWQgJiYgIX5UQUdOQU1FU19UT19TS0lQX0ZPUl9QU0VVRE9FTEVNRU5UUy5pbmRleE9mKG5vZGUudGFnTmFtZS50b1VwcGVyQ2FzZSgpKSAmJiAhbm9kZS5nZXRBdHRyaWJ1dGUoREFUQV9GQV9QU0VVRE9fRUxFTUVOVCkgJiYgKCFub2RlLnBhcmVudE5vZGUgfHwgbm9kZS5wYXJlbnROb2RlLnRhZ05hbWUgIT09ICdzdmcnKTtcbn1cblxuZnVuY3Rpb24gc2VhcmNoUHNldWRvRWxlbWVudHMgKHJvb3QpIHtcbiAgaWYgKCFJU19ET00pIHJldHVybjtcbiAgcmV0dXJuIG5ldyBwaWNrZWQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciBvcGVyYXRpb25zID0gdG9BcnJheShyb290LnF1ZXJ5U2VsZWN0b3JBbGwoJyonKSkuZmlsdGVyKHByb2Nlc3NhYmxlKS5tYXAocmVwbGFjZSk7XG4gICAgdmFyIGVuZCA9IHBlcmYuYmVnaW4oJ3NlYXJjaFBzZXVkb0VsZW1lbnRzJyk7XG4gICAgZGlzYWJsZU9ic2VydmF0aW9uKCk7XG4gICAgcGlja2VkLmFsbChvcGVyYXRpb25zKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIGVuZCgpO1xuICAgICAgZW5hYmxlT2JzZXJ2YXRpb24oKTtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICBlbmQoKTtcbiAgICAgIGVuYWJsZU9ic2VydmF0aW9uKCk7XG4gICAgICByZWplY3QoKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbnZhciBiYXNlU3R5bGVzID0gXCJzdmc6bm90KDpyb290KS5zdmctaW5saW5lLS1mYSB7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLnN2Zy1pbmxpbmUtLWZhIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGhlaWdodDogMWVtO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogLTAuMTI1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS1sZyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogLTAuMjI1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTEge1xcbiAgd2lkdGg6IDAuMDYyNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0yIHtcXG4gIHdpZHRoOiAwLjEyNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0zIHtcXG4gIHdpZHRoOiAwLjE4NzVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctNCB7XFxuICB3aWR0aDogMC4yNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy01IHtcXG4gIHdpZHRoOiAwLjMxMjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctNiB7XFxuICB3aWR0aDogMC4zNzVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctNyB7XFxuICB3aWR0aDogMC40Mzc1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTgge1xcbiAgd2lkdGg6IDAuNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy05IHtcXG4gIHdpZHRoOiAwLjU2MjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMTAge1xcbiAgd2lkdGg6IDAuNjI1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTExIHtcXG4gIHdpZHRoOiAwLjY4NzVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMTIge1xcbiAgd2lkdGg6IDAuNzVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMTMge1xcbiAgd2lkdGg6IDAuODEyNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0xNCB7XFxuICB3aWR0aDogMC44NzVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMTUge1xcbiAgd2lkdGg6IDAuOTM3NWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0xNiB7XFxuICB3aWR0aDogMWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0xNyB7XFxuICB3aWR0aDogMS4wNjI1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTE4IHtcXG4gIHdpZHRoOiAxLjEyNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0xOSB7XFxuICB3aWR0aDogMS4xODc1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTIwIHtcXG4gIHdpZHRoOiAxLjI1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS1wdWxsLWxlZnQge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjNlbTtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtcHVsbC1yaWdodCB7XFxuICBtYXJnaW4tbGVmdDogMC4zZW07XFxuICB3aWR0aDogYXV0bztcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLWJvcmRlciB7XFxuICBoZWlnaHQ6IDEuNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtbGkge1xcbiAgd2lkdGg6IDJlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLWZ3IHtcXG4gIHdpZHRoOiAxLjI1ZW07XFxufVxcblxcbi5mYS1sYXllcnMgc3ZnLnN2Zy1pbmxpbmUtLWZhIHtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBtYXJnaW46IGF1dG87XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG59XFxuXFxuLmZhLWxheWVycyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDFlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHZlcnRpY2FsLWFsaWduOiAtMC4xMjVlbTtcXG4gIHdpZHRoOiAxZW07XFxufVxcbi5mYS1sYXllcnMgc3ZnLnN2Zy1pbmxpbmUtLWZhIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcXG59XFxuXFxuLmZhLWxheWVycy1jb3VudGVyLCAuZmEtbGF5ZXJzLXRleHQge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZmEtbGF5ZXJzLXRleHQge1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcXG59XFxuXFxuLmZhLWxheWVycy1jb3VudGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjI1M2E7XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGhlaWdodDogMS41ZW07XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIG1heC13aWR0aDogNWVtO1xcbiAgbWluLXdpZHRoOiAxLjVlbTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwYWRkaW5nOiAwLjI1ZW07XFxuICByaWdodDogMDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgdG9wOiAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMjUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMjUpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3AgcmlnaHQ7XFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCByaWdodDtcXG59XFxuXFxuLmZhLWxheWVycy1ib3R0b20tcmlnaHQge1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IGF1dG87XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4yNSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC4yNSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSByaWdodDtcXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIHJpZ2h0O1xcbn1cXG5cXG4uZmEtbGF5ZXJzLWJvdHRvbS1sZWZ0IHtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogYXV0bztcXG4gIHRvcDogYXV0bztcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xcbn1cXG5cXG4uZmEtbGF5ZXJzLXRvcC1yaWdodCB7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0O1xcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgcmlnaHQ7XFxufVxcblxcbi5mYS1sYXllcnMtdG9wLWxlZnQge1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiBhdXRvO1xcbiAgdG9wOiAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMjUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMjUpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XFxufVxcblxcbi5mYS1sZyB7XFxuICBmb250LXNpemU6IDEuMzMzMzMzMzMzM2VtO1xcbiAgbGluZS1oZWlnaHQ6IDAuNzVlbTtcXG4gIHZlcnRpY2FsLWFsaWduOiAtMC4wNjY3ZW07XFxufVxcblxcbi5mYS14cyB7XFxuICBmb250LXNpemU6IDAuNzVlbTtcXG59XFxuXFxuLmZhLXNtIHtcXG4gIGZvbnQtc2l6ZTogMC44NzVlbTtcXG59XFxuXFxuLmZhLTF4IHtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG5cXG4uZmEtMngge1xcbiAgZm9udC1zaXplOiAyZW07XFxufVxcblxcbi5mYS0zeCB7XFxuICBmb250LXNpemU6IDNlbTtcXG59XFxuXFxuLmZhLTR4IHtcXG4gIGZvbnQtc2l6ZTogNGVtO1xcbn1cXG5cXG4uZmEtNXgge1xcbiAgZm9udC1zaXplOiA1ZW07XFxufVxcblxcbi5mYS02eCB7XFxuICBmb250LXNpemU6IDZlbTtcXG59XFxuXFxuLmZhLTd4IHtcXG4gIGZvbnQtc2l6ZTogN2VtO1xcbn1cXG5cXG4uZmEtOHgge1xcbiAgZm9udC1zaXplOiA4ZW07XFxufVxcblxcbi5mYS05eCB7XFxuICBmb250LXNpemU6IDllbTtcXG59XFxuXFxuLmZhLTEweCB7XFxuICBmb250LXNpemU6IDEwZW07XFxufVxcblxcbi5mYS1mdyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMS4yNWVtO1xcbn1cXG5cXG4uZmEtdWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgbWFyZ2luLWxlZnQ6IDIuNWVtO1xcbiAgcGFkZGluZy1sZWZ0OiAwO1xcbn1cXG4uZmEtdWwgPiBsaSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5mYS1saSB7XFxuICBsZWZ0OiAtMmVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDJlbTtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4uZmEtYm9yZGVyIHtcXG4gIGJvcmRlcjogc29saWQgMC4wOGVtICNlZWU7XFxuICBib3JkZXItcmFkaXVzOiAwLjFlbTtcXG4gIHBhZGRpbmc6IDAuMmVtIDAuMjVlbSAwLjE1ZW07XFxufVxcblxcbi5mYS1wdWxsLWxlZnQge1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcblxcbi5mYS1wdWxsLXJpZ2h0IHtcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuXFxuLmZhLmZhLXB1bGwtbGVmdCxcXG4uZmFzLmZhLXB1bGwtbGVmdCxcXG4uZmFyLmZhLXB1bGwtbGVmdCxcXG4uZmFsLmZhLXB1bGwtbGVmdCxcXG4uZmFiLmZhLXB1bGwtbGVmdCB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuM2VtO1xcbn1cXG4uZmEuZmEtcHVsbC1yaWdodCxcXG4uZmFzLmZhLXB1bGwtcmlnaHQsXFxuLmZhci5mYS1wdWxsLXJpZ2h0LFxcbi5mYWwuZmEtcHVsbC1yaWdodCxcXG4uZmFiLmZhLXB1bGwtcmlnaHQge1xcbiAgbWFyZ2luLWxlZnQ6IDAuM2VtO1xcbn1cXG5cXG4uZmEtc3BpbiB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZmEtc3BpbiAycyBpbmZpbml0ZSBsaW5lYXI7XFxuICAgICAgICAgIGFuaW1hdGlvbjogZmEtc3BpbiAycyBpbmZpbml0ZSBsaW5lYXI7XFxufVxcblxcbi5mYS1wdWxzZSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZmEtc3BpbiAxcyBpbmZpbml0ZSBzdGVwcyg4KTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBmYS1zcGluIDFzIGluZmluaXRlIHN0ZXBzKDgpO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmEtc3BpbiB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmEtc3BpbiB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcbi5mYS1yb3RhdGUtOTAge1xcbiAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTEpXFxcIjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbi5mYS1yb3RhdGUtMTgwIHtcXG4gIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0yKVxcXCI7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcblxcbi5mYS1yb3RhdGUtMjcwIHtcXG4gIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0zKVxcXCI7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxufVxcblxcbi5mYS1mbGlwLWhvcml6b250YWwge1xcbiAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTAsIG1pcnJvcj0xKVxcXCI7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcXG59XFxuXFxuLmZhLWZsaXAtdmVydGljYWwge1xcbiAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTIsIG1pcnJvcj0xKVxcXCI7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgLTEpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIC0xKTtcXG59XFxuXFxuLmZhLWZsaXAtYm90aCwgLmZhLWZsaXAtaG9yaXpvbnRhbC5mYS1mbGlwLXZlcnRpY2FsIHtcXG4gIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0yLCBtaXJyb3I9MSlcXFwiO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC0xLCAtMSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLTEsIC0xKTtcXG59XFxuXFxuOnJvb3QgLmZhLXJvdGF0ZS05MCxcXG46cm9vdCAuZmEtcm90YXRlLTE4MCxcXG46cm9vdCAuZmEtcm90YXRlLTI3MCxcXG46cm9vdCAuZmEtZmxpcC1ob3Jpem9udGFsLFxcbjpyb290IC5mYS1mbGlwLXZlcnRpY2FsLFxcbjpyb290IC5mYS1mbGlwLWJvdGgge1xcbiAgLXdlYmtpdC1maWx0ZXI6IG5vbmU7XFxuICAgICAgICAgIGZpbHRlcjogbm9uZTtcXG59XFxuXFxuLmZhLXN0YWNrIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGhlaWdodDogMmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDIuNWVtO1xcbn1cXG5cXG4uZmEtc3RhY2stMXgsXFxuLmZhLXN0YWNrLTJ4IHtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBtYXJnaW46IGF1dG87XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG59XFxuXFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXN0YWNrLTF4IHtcXG4gIGhlaWdodDogMWVtO1xcbiAgd2lkdGg6IDEuMjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXN0YWNrLTJ4IHtcXG4gIGhlaWdodDogMmVtO1xcbiAgd2lkdGg6IDIuNWVtO1xcbn1cXG5cXG4uZmEtaW52ZXJzZSB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLnNyLW9ubHkge1xcbiAgYm9yZGVyOiAwO1xcbiAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcXG4gIGhlaWdodDogMXB4O1xcbiAgbWFyZ2luOiAtMXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBhZGRpbmc6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMXB4O1xcbn1cXG5cXG4uc3Itb25seS1mb2N1c2FibGU6YWN0aXZlLCAuc3Itb25seS1mb2N1c2FibGU6Zm9jdXMge1xcbiAgY2xpcDogYXV0bztcXG4gIGhlaWdodDogYXV0bztcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgcG9zaXRpb246IHN0YXRpYztcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4uc3ZnLWlubGluZS0tZmEgLmZhLXByaW1hcnkge1xcbiAgZmlsbDogdmFyKC0tZmEtcHJpbWFyeS1jb2xvciwgY3VycmVudENvbG9yKTtcXG4gIG9wYWNpdHk6IDE7XFxuICBvcGFjaXR5OiB2YXIoLS1mYS1wcmltYXJ5LW9wYWNpdHksIDEpO1xcbn1cXG5cXG4uc3ZnLWlubGluZS0tZmEgLmZhLXNlY29uZGFyeSB7XFxuICBmaWxsOiB2YXIoLS1mYS1zZWNvbmRhcnktY29sb3IsIGN1cnJlbnRDb2xvcik7XFxuICBvcGFjaXR5OiAwLjQ7XFxuICBvcGFjaXR5OiB2YXIoLS1mYS1zZWNvbmRhcnktb3BhY2l0eSwgMC40KTtcXG59XFxuXFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXN3YXAtb3BhY2l0eSAuZmEtcHJpbWFyeSB7XFxuICBvcGFjaXR5OiAwLjQ7XFxuICBvcGFjaXR5OiB2YXIoLS1mYS1zZWNvbmRhcnktb3BhY2l0eSwgMC40KTtcXG59XFxuXFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXN3YXAtb3BhY2l0eSAuZmEtc2Vjb25kYXJ5IHtcXG4gIG9wYWNpdHk6IDE7XFxuICBvcGFjaXR5OiB2YXIoLS1mYS1wcmltYXJ5LW9wYWNpdHksIDEpO1xcbn1cXG5cXG4uc3ZnLWlubGluZS0tZmEgbWFzayAuZmEtcHJpbWFyeSxcXG4uc3ZnLWlubGluZS0tZmEgbWFzayAuZmEtc2Vjb25kYXJ5IHtcXG4gIGZpbGw6IGJsYWNrO1xcbn1cXG5cXG4uZmFkLmZhLWludmVyc2Uge1xcbiAgY29sb3I6ICNmZmY7XFxufVwiO1xuXG5mdW5jdGlvbiBjc3MgKCkge1xuICB2YXIgZGZwID0gREVGQVVMVF9GQU1JTFlfUFJFRklYO1xuICB2YXIgZHJjID0gREVGQVVMVF9SRVBMQUNFTUVOVF9DTEFTUztcbiAgdmFyIGZwID0gY29uZmlnLmZhbWlseVByZWZpeDtcbiAgdmFyIHJjID0gY29uZmlnLnJlcGxhY2VtZW50Q2xhc3M7XG4gIHZhciBzID0gYmFzZVN0eWxlcztcblxuICBpZiAoZnAgIT09IGRmcCB8fCByYyAhPT0gZHJjKSB7XG4gICAgdmFyIGRQYXR0ID0gbmV3IFJlZ0V4cChcIlxcXFwuXCIuY29uY2F0KGRmcCwgXCJcXFxcLVwiKSwgJ2cnKTtcbiAgICB2YXIgY3VzdG9tUHJvcFBhdHQgPSBuZXcgUmVnRXhwKFwiXFxcXC0tXCIuY29uY2F0KGRmcCwgXCJcXFxcLVwiKSwgJ2cnKTtcbiAgICB2YXIgclBhdHQgPSBuZXcgUmVnRXhwKFwiXFxcXC5cIi5jb25jYXQoZHJjKSwgJ2cnKTtcbiAgICBzID0gcy5yZXBsYWNlKGRQYXR0LCBcIi5cIi5jb25jYXQoZnAsIFwiLVwiKSkucmVwbGFjZShjdXN0b21Qcm9wUGF0dCwgXCItLVwiLmNvbmNhdChmcCwgXCItXCIpKS5yZXBsYWNlKHJQYXR0LCBcIi5cIi5jb25jYXQocmMpKTtcbiAgfVxuXG4gIHJldHVybiBzO1xufVxuXG52YXIgTGlicmFyeSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIExpYnJhcnkoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExpYnJhcnkpO1xuXG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IHt9O1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKExpYnJhcnksIFt7XG4gICAga2V5OiBcImFkZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGQoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZGVmaW5pdGlvbnMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGRlZmluaXRpb25zW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICB2YXIgYWRkaXRpb25zID0gZGVmaW5pdGlvbnMucmVkdWNlKHRoaXMuX3B1bGxEZWZpbml0aW9ucywge30pO1xuICAgICAgT2JqZWN0LmtleXMoYWRkaXRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX3RoaXMuZGVmaW5pdGlvbnNba2V5XSA9IF9vYmplY3RTcHJlYWQoe30sIF90aGlzLmRlZmluaXRpb25zW2tleV0gfHwge30sIGFkZGl0aW9uc1trZXldKTtcbiAgICAgICAgZGVmaW5lSWNvbnMoa2V5LCBhZGRpdGlvbnNba2V5XSk7XG4gICAgICAgIGJ1aWxkKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICB0aGlzLmRlZmluaXRpb25zID0ge307XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9wdWxsRGVmaW5pdGlvbnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3B1bGxEZWZpbml0aW9ucyhhZGRpdGlvbnMsIGRlZmluaXRpb24pIHtcbiAgICAgIHZhciBub3JtYWxpemVkID0gZGVmaW5pdGlvbi5wcmVmaXggJiYgZGVmaW5pdGlvbi5pY29uTmFtZSAmJiBkZWZpbml0aW9uLmljb24gPyB7XG4gICAgICAgIDA6IGRlZmluaXRpb25cbiAgICAgIH0gOiBkZWZpbml0aW9uO1xuICAgICAgT2JqZWN0LmtleXMobm9ybWFsaXplZCkubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIF9ub3JtYWxpemVkJGtleSA9IG5vcm1hbGl6ZWRba2V5XSxcbiAgICAgICAgICAgIHByZWZpeCA9IF9ub3JtYWxpemVkJGtleS5wcmVmaXgsXG4gICAgICAgICAgICBpY29uTmFtZSA9IF9ub3JtYWxpemVkJGtleS5pY29uTmFtZSxcbiAgICAgICAgICAgIGljb24gPSBfbm9ybWFsaXplZCRrZXkuaWNvbjtcbiAgICAgICAgaWYgKCFhZGRpdGlvbnNbcHJlZml4XSkgYWRkaXRpb25zW3ByZWZpeF0gPSB7fTtcbiAgICAgICAgYWRkaXRpb25zW3ByZWZpeF1baWNvbk5hbWVdID0gaWNvbjtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGFkZGl0aW9ucztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTGlicmFyeTtcbn0oKTtcblxuZnVuY3Rpb24gZW5zdXJlQ3NzKCkge1xuICBpZiAoY29uZmlnLmF1dG9BZGRDc3MgJiYgIV9jc3NJbnNlcnRlZCkge1xuICAgIGluc2VydENzcyhjc3MoKSk7XG5cbiAgICBfY3NzSW5zZXJ0ZWQgPSB0cnVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFwaU9iamVjdCh2YWwsIGFic3RyYWN0Q3JlYXRvcikge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsLCAnYWJzdHJhY3QnLCB7XG4gICAgZ2V0OiBhYnN0cmFjdENyZWF0b3JcbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWwsICdodG1sJywge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHZhbC5hYnN0cmFjdC5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuIHRvSHRtbChhKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWwsICdub2RlJywge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgaWYgKCFJU19ET00pIHJldHVybjtcbiAgICAgIHZhciBjb250YWluZXIgPSBET0NVTUVOVC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSB2YWwuaHRtbDtcbiAgICAgIHJldHVybiBjb250YWluZXIuY2hpbGRyZW47XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHZhbDtcbn1cblxuZnVuY3Rpb24gZmluZEljb25EZWZpbml0aW9uKGljb25Mb29rdXApIHtcbiAgdmFyIF9pY29uTG9va3VwJHByZWZpeCA9IGljb25Mb29rdXAucHJlZml4LFxuICAgICAgcHJlZml4ID0gX2ljb25Mb29rdXAkcHJlZml4ID09PSB2b2lkIDAgPyAnZmEnIDogX2ljb25Mb29rdXAkcHJlZml4LFxuICAgICAgaWNvbk5hbWUgPSBpY29uTG9va3VwLmljb25OYW1lO1xuICBpZiAoIWljb25OYW1lKSByZXR1cm47XG4gIHJldHVybiBpY29uRnJvbU1hcHBpbmcobGlicmFyeS5kZWZpbml0aW9ucywgcHJlZml4LCBpY29uTmFtZSkgfHwgaWNvbkZyb21NYXBwaW5nKG5hbWVzcGFjZS5zdHlsZXMsIHByZWZpeCwgaWNvbk5hbWUpO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlSWNvbnMobmV4dCkge1xuICByZXR1cm4gZnVuY3Rpb24gKG1heWJlSWNvbkRlZmluaXRpb24pIHtcbiAgICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgaWNvbkRlZmluaXRpb24gPSAobWF5YmVJY29uRGVmaW5pdGlvbiB8fCB7fSkuaWNvbiA/IG1heWJlSWNvbkRlZmluaXRpb24gOiBmaW5kSWNvbkRlZmluaXRpb24obWF5YmVJY29uRGVmaW5pdGlvbiB8fCB7fSk7XG4gICAgdmFyIG1hc2sgPSBwYXJhbXMubWFzaztcblxuICAgIGlmIChtYXNrKSB7XG4gICAgICBtYXNrID0gKG1hc2sgfHwge30pLmljb24gPyBtYXNrIDogZmluZEljb25EZWZpbml0aW9uKG1hc2sgfHwge30pO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0KGljb25EZWZpbml0aW9uLCBfb2JqZWN0U3ByZWFkKHt9LCBwYXJhbXMsIHtcbiAgICAgIG1hc2s6IG1hc2tcbiAgICB9KSk7XG4gIH07XG59XG5cbnZhciBsaWJyYXJ5ID0gbmV3IExpYnJhcnkoKTtcbnZhciBub0F1dG8gPSBmdW5jdGlvbiBub0F1dG8oKSB7XG4gIGNvbmZpZy5hdXRvUmVwbGFjZVN2ZyA9IGZhbHNlO1xuICBjb25maWcub2JzZXJ2ZU11dGF0aW9ucyA9IGZhbHNlO1xuICBkaXNjb25uZWN0KCk7XG59O1xudmFyIF9jc3NJbnNlcnRlZCA9IGZhbHNlO1xudmFyIGRvbSA9IHtcbiAgaTJzdmc6IGZ1bmN0aW9uIGkyc3ZnKCkge1xuICAgIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgaWYgKElTX0RPTSkge1xuICAgICAgZW5zdXJlQ3NzKCk7XG4gICAgICB2YXIgX3BhcmFtcyRub2RlID0gcGFyYW1zLm5vZGUsXG4gICAgICAgICAgbm9kZSA9IF9wYXJhbXMkbm9kZSA9PT0gdm9pZCAwID8gRE9DVU1FTlQgOiBfcGFyYW1zJG5vZGUsXG4gICAgICAgICAgX3BhcmFtcyRjYWxsYmFjayA9IHBhcmFtcy5jYWxsYmFjayxcbiAgICAgICAgICBjYWxsYmFjayA9IF9wYXJhbXMkY2FsbGJhY2sgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICgpIHt9IDogX3BhcmFtcyRjYWxsYmFjaztcblxuICAgICAgaWYgKGNvbmZpZy5zZWFyY2hQc2V1ZG9FbGVtZW50cykge1xuICAgICAgICBzZWFyY2hQc2V1ZG9FbGVtZW50cyhub2RlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9uVHJlZShub2RlLCBjYWxsYmFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwaWNrZWQucmVqZWN0KCdPcGVyYXRpb24gcmVxdWlyZXMgYSBET00gb2Ygc29tZSBraW5kLicpO1xuICAgIH1cbiAgfSxcbiAgY3NzOiBjc3MsXG4gIGluc2VydENzczogZnVuY3Rpb24gaW5zZXJ0Q3NzJCQxKCkge1xuICAgIGlmICghX2Nzc0luc2VydGVkKSB7XG4gICAgICBpbnNlcnRDc3MoY3NzKCkpO1xuXG4gICAgICBfY3NzSW5zZXJ0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IGZ1bmN0aW9uIHdhdGNoKCkge1xuICAgIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIHZhciBhdXRvUmVwbGFjZVN2Z1Jvb3QgPSBwYXJhbXMuYXV0b1JlcGxhY2VTdmdSb290LFxuICAgICAgICBvYnNlcnZlTXV0YXRpb25zUm9vdCA9IHBhcmFtcy5vYnNlcnZlTXV0YXRpb25zUm9vdDtcblxuICAgIGlmIChjb25maWcuYXV0b1JlcGxhY2VTdmcgPT09IGZhbHNlKSB7XG4gICAgICBjb25maWcuYXV0b1JlcGxhY2VTdmcgPSB0cnVlO1xuICAgIH1cblxuICAgIGNvbmZpZy5vYnNlcnZlTXV0YXRpb25zID0gdHJ1ZTtcbiAgICBkb21yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICBhdXRvUmVwbGFjZSh7XG4gICAgICAgIGF1dG9SZXBsYWNlU3ZnUm9vdDogYXV0b1JlcGxhY2VTdmdSb290XG4gICAgICB9KTtcbiAgICAgIG9ic2VydmUoe1xuICAgICAgICB0cmVlQ2FsbGJhY2s6IG9uVHJlZSxcbiAgICAgICAgbm9kZUNhbGxiYWNrOiBvbk5vZGUsXG4gICAgICAgIHBzZXVkb0VsZW1lbnRzQ2FsbGJhY2s6IHNlYXJjaFBzZXVkb0VsZW1lbnRzLFxuICAgICAgICBvYnNlcnZlTXV0YXRpb25zUm9vdDogb2JzZXJ2ZU11dGF0aW9uc1Jvb3RcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59O1xudmFyIHBhcnNlID0ge1xuICB0cmFuc2Zvcm06IGZ1bmN0aW9uIHRyYW5zZm9ybSh0cmFuc2Zvcm1TdHJpbmcpIHtcbiAgICByZXR1cm4gcGFyc2VUcmFuc2Zvcm1TdHJpbmcodHJhbnNmb3JtU3RyaW5nKTtcbiAgfVxufTtcbnZhciBpY29uID0gcmVzb2x2ZUljb25zKGZ1bmN0aW9uIChpY29uRGVmaW5pdGlvbikge1xuICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgdmFyIF9wYXJhbXMkdHJhbnNmb3JtID0gcGFyYW1zLnRyYW5zZm9ybSxcbiAgICAgIHRyYW5zZm9ybSA9IF9wYXJhbXMkdHJhbnNmb3JtID09PSB2b2lkIDAgPyBtZWFuaW5nbGVzc1RyYW5zZm9ybSA6IF9wYXJhbXMkdHJhbnNmb3JtLFxuICAgICAgX3BhcmFtcyRzeW1ib2wgPSBwYXJhbXMuc3ltYm9sLFxuICAgICAgc3ltYm9sID0gX3BhcmFtcyRzeW1ib2wgPT09IHZvaWQgMCA/IGZhbHNlIDogX3BhcmFtcyRzeW1ib2wsXG4gICAgICBfcGFyYW1zJG1hc2sgPSBwYXJhbXMubWFzayxcbiAgICAgIG1hc2sgPSBfcGFyYW1zJG1hc2sgPT09IHZvaWQgMCA/IG51bGwgOiBfcGFyYW1zJG1hc2ssXG4gICAgICBfcGFyYW1zJG1hc2tJZCA9IHBhcmFtcy5tYXNrSWQsXG4gICAgICBtYXNrSWQgPSBfcGFyYW1zJG1hc2tJZCA9PT0gdm9pZCAwID8gbnVsbCA6IF9wYXJhbXMkbWFza0lkLFxuICAgICAgX3BhcmFtcyR0aXRsZSA9IHBhcmFtcy50aXRsZSxcbiAgICAgIHRpdGxlID0gX3BhcmFtcyR0aXRsZSA9PT0gdm9pZCAwID8gbnVsbCA6IF9wYXJhbXMkdGl0bGUsXG4gICAgICBfcGFyYW1zJHRpdGxlSWQgPSBwYXJhbXMudGl0bGVJZCxcbiAgICAgIHRpdGxlSWQgPSBfcGFyYW1zJHRpdGxlSWQgPT09IHZvaWQgMCA/IG51bGwgOiBfcGFyYW1zJHRpdGxlSWQsXG4gICAgICBfcGFyYW1zJGNsYXNzZXMgPSBwYXJhbXMuY2xhc3NlcyxcbiAgICAgIGNsYXNzZXMgPSBfcGFyYW1zJGNsYXNzZXMgPT09IHZvaWQgMCA/IFtdIDogX3BhcmFtcyRjbGFzc2VzLFxuICAgICAgX3BhcmFtcyRhdHRyaWJ1dGVzID0gcGFyYW1zLmF0dHJpYnV0ZXMsXG4gICAgICBhdHRyaWJ1dGVzID0gX3BhcmFtcyRhdHRyaWJ1dGVzID09PSB2b2lkIDAgPyB7fSA6IF9wYXJhbXMkYXR0cmlidXRlcyxcbiAgICAgIF9wYXJhbXMkc3R5bGVzID0gcGFyYW1zLnN0eWxlcyxcbiAgICAgIHN0eWxlcyA9IF9wYXJhbXMkc3R5bGVzID09PSB2b2lkIDAgPyB7fSA6IF9wYXJhbXMkc3R5bGVzO1xuICBpZiAoIWljb25EZWZpbml0aW9uKSByZXR1cm47XG4gIHZhciBwcmVmaXggPSBpY29uRGVmaW5pdGlvbi5wcmVmaXgsXG4gICAgICBpY29uTmFtZSA9IGljb25EZWZpbml0aW9uLmljb25OYW1lLFxuICAgICAgaWNvbiA9IGljb25EZWZpbml0aW9uLmljb247XG4gIHJldHVybiBhcGlPYmplY3QoX29iamVjdFNwcmVhZCh7XG4gICAgdHlwZTogJ2ljb24nXG4gIH0sIGljb25EZWZpbml0aW9uKSwgZnVuY3Rpb24gKCkge1xuICAgIGVuc3VyZUNzcygpO1xuXG4gICAgaWYgKGNvbmZpZy5hdXRvQTExeSkge1xuICAgICAgaWYgKHRpdGxlKSB7XG4gICAgICAgIGF0dHJpYnV0ZXNbJ2FyaWEtbGFiZWxsZWRieSddID0gXCJcIi5jb25jYXQoY29uZmlnLnJlcGxhY2VtZW50Q2xhc3MsIFwiLXRpdGxlLVwiKS5jb25jYXQodGl0bGVJZCB8fCBuZXh0VW5pcXVlSWQoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhdHRyaWJ1dGVzWydhcmlhLWhpZGRlbiddID0gJ3RydWUnO1xuICAgICAgICBhdHRyaWJ1dGVzWydmb2N1c2FibGUnXSA9ICdmYWxzZSc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ha2VJbmxpbmVTdmdBYnN0cmFjdCh7XG4gICAgICBpY29uczoge1xuICAgICAgICBtYWluOiBhc0ZvdW5kSWNvbihpY29uKSxcbiAgICAgICAgbWFzazogbWFzayA/IGFzRm91bmRJY29uKG1hc2suaWNvbikgOiB7XG4gICAgICAgICAgZm91bmQ6IGZhbHNlLFxuICAgICAgICAgIHdpZHRoOiBudWxsLFxuICAgICAgICAgIGhlaWdodDogbnVsbCxcbiAgICAgICAgICBpY29uOiB7fVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICBpY29uTmFtZTogaWNvbk5hbWUsXG4gICAgICB0cmFuc2Zvcm06IF9vYmplY3RTcHJlYWQoe30sIG1lYW5pbmdsZXNzVHJhbnNmb3JtLCB0cmFuc2Zvcm0pLFxuICAgICAgc3ltYm9sOiBzeW1ib2wsXG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBtYXNrSWQ6IG1hc2tJZCxcbiAgICAgIHRpdGxlSWQ6IHRpdGxlSWQsXG4gICAgICBleHRyYToge1xuICAgICAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzLFxuICAgICAgICBzdHlsZXM6IHN0eWxlcyxcbiAgICAgICAgY2xhc3NlczogY2xhc3Nlc1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn0pO1xudmFyIHRleHQgPSBmdW5jdGlvbiB0ZXh0KGNvbnRlbnQpIHtcbiAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHZhciBfcGFyYW1zJHRyYW5zZm9ybTIgPSBwYXJhbXMudHJhbnNmb3JtLFxuICAgICAgdHJhbnNmb3JtID0gX3BhcmFtcyR0cmFuc2Zvcm0yID09PSB2b2lkIDAgPyBtZWFuaW5nbGVzc1RyYW5zZm9ybSA6IF9wYXJhbXMkdHJhbnNmb3JtMixcbiAgICAgIF9wYXJhbXMkdGl0bGUyID0gcGFyYW1zLnRpdGxlLFxuICAgICAgdGl0bGUgPSBfcGFyYW1zJHRpdGxlMiA9PT0gdm9pZCAwID8gbnVsbCA6IF9wYXJhbXMkdGl0bGUyLFxuICAgICAgX3BhcmFtcyRjbGFzc2VzMiA9IHBhcmFtcy5jbGFzc2VzLFxuICAgICAgY2xhc3NlcyA9IF9wYXJhbXMkY2xhc3NlczIgPT09IHZvaWQgMCA/IFtdIDogX3BhcmFtcyRjbGFzc2VzMixcbiAgICAgIF9wYXJhbXMkYXR0cmlidXRlczIgPSBwYXJhbXMuYXR0cmlidXRlcyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfcGFyYW1zJGF0dHJpYnV0ZXMyID09PSB2b2lkIDAgPyB7fSA6IF9wYXJhbXMkYXR0cmlidXRlczIsXG4gICAgICBfcGFyYW1zJHN0eWxlczIgPSBwYXJhbXMuc3R5bGVzLFxuICAgICAgc3R5bGVzID0gX3BhcmFtcyRzdHlsZXMyID09PSB2b2lkIDAgPyB7fSA6IF9wYXJhbXMkc3R5bGVzMjtcbiAgcmV0dXJuIGFwaU9iamVjdCh7XG4gICAgdHlwZTogJ3RleHQnLFxuICAgIGNvbnRlbnQ6IGNvbnRlbnRcbiAgfSwgZnVuY3Rpb24gKCkge1xuICAgIGVuc3VyZUNzcygpO1xuICAgIHJldHVybiBtYWtlTGF5ZXJzVGV4dEFic3RyYWN0KHtcbiAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICB0cmFuc2Zvcm06IF9vYmplY3RTcHJlYWQoe30sIG1lYW5pbmdsZXNzVHJhbnNmb3JtLCB0cmFuc2Zvcm0pLFxuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgZXh0cmE6IHtcbiAgICAgICAgYXR0cmlidXRlczogYXR0cmlidXRlcyxcbiAgICAgICAgc3R5bGVzOiBzdHlsZXMsXG4gICAgICAgIGNsYXNzZXM6IFtcIlwiLmNvbmNhdChjb25maWcuZmFtaWx5UHJlZml4LCBcIi1sYXllcnMtdGV4dFwiKV0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShjbGFzc2VzKSlcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xudmFyIGNvdW50ZXIgPSBmdW5jdGlvbiBjb3VudGVyKGNvbnRlbnQpIHtcbiAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHZhciBfcGFyYW1zJHRpdGxlMyA9IHBhcmFtcy50aXRsZSxcbiAgICAgIHRpdGxlID0gX3BhcmFtcyR0aXRsZTMgPT09IHZvaWQgMCA/IG51bGwgOiBfcGFyYW1zJHRpdGxlMyxcbiAgICAgIF9wYXJhbXMkY2xhc3NlczMgPSBwYXJhbXMuY2xhc3NlcyxcbiAgICAgIGNsYXNzZXMgPSBfcGFyYW1zJGNsYXNzZXMzID09PSB2b2lkIDAgPyBbXSA6IF9wYXJhbXMkY2xhc3NlczMsXG4gICAgICBfcGFyYW1zJGF0dHJpYnV0ZXMzID0gcGFyYW1zLmF0dHJpYnV0ZXMsXG4gICAgICBhdHRyaWJ1dGVzID0gX3BhcmFtcyRhdHRyaWJ1dGVzMyA9PT0gdm9pZCAwID8ge30gOiBfcGFyYW1zJGF0dHJpYnV0ZXMzLFxuICAgICAgX3BhcmFtcyRzdHlsZXMzID0gcGFyYW1zLnN0eWxlcyxcbiAgICAgIHN0eWxlcyA9IF9wYXJhbXMkc3R5bGVzMyA9PT0gdm9pZCAwID8ge30gOiBfcGFyYW1zJHN0eWxlczM7XG4gIHJldHVybiBhcGlPYmplY3Qoe1xuICAgIHR5cGU6ICdjb3VudGVyJyxcbiAgICBjb250ZW50OiBjb250ZW50XG4gIH0sIGZ1bmN0aW9uICgpIHtcbiAgICBlbnN1cmVDc3MoKTtcbiAgICByZXR1cm4gbWFrZUxheWVyc0NvdW50ZXJBYnN0cmFjdCh7XG4gICAgICBjb250ZW50OiBjb250ZW50LnRvU3RyaW5nKCksXG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBleHRyYToge1xuICAgICAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzLFxuICAgICAgICBzdHlsZXM6IHN0eWxlcyxcbiAgICAgICAgY2xhc3NlczogW1wiXCIuY29uY2F0KGNvbmZpZy5mYW1pbHlQcmVmaXgsIFwiLWxheWVycy1jb3VudGVyXCIpXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGNsYXNzZXMpKVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG52YXIgbGF5ZXIgPSBmdW5jdGlvbiBsYXllcihhc3NlbWJsZXIpIHtcbiAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHZhciBfcGFyYW1zJGNsYXNzZXM0ID0gcGFyYW1zLmNsYXNzZXMsXG4gICAgICBjbGFzc2VzID0gX3BhcmFtcyRjbGFzc2VzNCA9PT0gdm9pZCAwID8gW10gOiBfcGFyYW1zJGNsYXNzZXM0O1xuICByZXR1cm4gYXBpT2JqZWN0KHtcbiAgICB0eXBlOiAnbGF5ZXInXG4gIH0sIGZ1bmN0aW9uICgpIHtcbiAgICBlbnN1cmVDc3MoKTtcbiAgICB2YXIgY2hpbGRyZW4gPSBbXTtcbiAgICBhc3NlbWJsZXIoZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgIEFycmF5LmlzQXJyYXkoYXJncykgPyBhcmdzLm1hcChmdW5jdGlvbiAoYSkge1xuICAgICAgICBjaGlsZHJlbiA9IGNoaWxkcmVuLmNvbmNhdChhLmFic3RyYWN0KTtcbiAgICAgIH0pIDogY2hpbGRyZW4gPSBjaGlsZHJlbi5jb25jYXQoYXJncy5hYnN0cmFjdCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIFt7XG4gICAgICB0YWc6ICdzcGFuJyxcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgY2xhc3M6IFtcIlwiLmNvbmNhdChjb25maWcuZmFtaWx5UHJlZml4LCBcIi1sYXllcnNcIildLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoY2xhc3NlcykpLmpvaW4oJyAnKVxuICAgICAgfSxcbiAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgIH1dO1xuICB9KTtcbn07XG52YXIgYXBpID0ge1xuICBub0F1dG86IG5vQXV0byxcbiAgY29uZmlnOiBjb25maWcsXG4gIGRvbTogZG9tLFxuICBsaWJyYXJ5OiBsaWJyYXJ5LFxuICBwYXJzZTogcGFyc2UsXG4gIGZpbmRJY29uRGVmaW5pdGlvbjogZmluZEljb25EZWZpbml0aW9uLFxuICBpY29uOiBpY29uLFxuICB0ZXh0OiB0ZXh0LFxuICBjb3VudGVyOiBjb3VudGVyLFxuICBsYXllcjogbGF5ZXIsXG4gIHRvSHRtbDogdG9IdG1sXG59O1xuXG52YXIgYXV0b1JlcGxhY2UgPSBmdW5jdGlvbiBhdXRvUmVwbGFjZSgpIHtcbiAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gIHZhciBfcGFyYW1zJGF1dG9SZXBsYWNlU3YgPSBwYXJhbXMuYXV0b1JlcGxhY2VTdmdSb290LFxuICAgICAgYXV0b1JlcGxhY2VTdmdSb290ID0gX3BhcmFtcyRhdXRvUmVwbGFjZVN2ID09PSB2b2lkIDAgPyBET0NVTUVOVCA6IF9wYXJhbXMkYXV0b1JlcGxhY2VTdjtcbiAgaWYgKChPYmplY3Qua2V5cyhuYW1lc3BhY2Uuc3R5bGVzKS5sZW5ndGggPiAwIHx8IGNvbmZpZy5hdXRvRmV0Y2hTdmcpICYmIElTX0RPTSAmJiBjb25maWcuYXV0b1JlcGxhY2VTdmcpIGFwaS5kb20uaTJzdmcoe1xuICAgIG5vZGU6IGF1dG9SZXBsYWNlU3ZnUm9vdFxuICB9KTtcbn07XG5cbmV4cG9ydCB7IGljb24sIG5vQXV0bywgY29uZmlnLCB0b0h0bWwsIGxheWVyLCB0ZXh0LCBjb3VudGVyLCBsaWJyYXJ5LCBkb20sIHBhcnNlLCBmaW5kSWNvbkRlZmluaXRpb24gfTtcbiIsImltcG9ydCB7IHBhcnNlLCBpY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG4gICAgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgfSk7XG4gICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICB9XG5cbiAgcmV0dXJuIGtleXM7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgaWYgKGkgJSAyKSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG5cbiAgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuXG4gIHZhciBrZXksIGk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfVxufVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZXIpID09PSBcIltvYmplY3QgQXJndW1lbnRzXVwiKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG59XG5cbi8vIEdldCBDU1MgY2xhc3MgbGlzdCBmcm9tIGEgcHJvcHMgb2JqZWN0XG5mdW5jdGlvbiBjbGFzc0xpc3QocHJvcHMpIHtcbiAgdmFyIF9jbGFzc2VzO1xuXG4gIHZhciBzcGluID0gcHJvcHMuc3BpbixcbiAgICAgIHB1bHNlID0gcHJvcHMucHVsc2UsXG4gICAgICBmaXhlZFdpZHRoID0gcHJvcHMuZml4ZWRXaWR0aCxcbiAgICAgIGludmVyc2UgPSBwcm9wcy5pbnZlcnNlLFxuICAgICAgYm9yZGVyID0gcHJvcHMuYm9yZGVyLFxuICAgICAgbGlzdEl0ZW0gPSBwcm9wcy5saXN0SXRlbSxcbiAgICAgIGZsaXAgPSBwcm9wcy5mbGlwLFxuICAgICAgc2l6ZSA9IHByb3BzLnNpemUsXG4gICAgICByb3RhdGlvbiA9IHByb3BzLnJvdGF0aW9uLFxuICAgICAgcHVsbCA9IHByb3BzLnB1bGw7IC8vIG1hcCBvZiBDU1MgY2xhc3MgbmFtZXMgdG8gcHJvcGVydGllc1xuXG4gIHZhciBjbGFzc2VzID0gKF9jbGFzc2VzID0ge1xuICAgICdmYS1zcGluJzogc3BpbixcbiAgICAnZmEtcHVsc2UnOiBwdWxzZSxcbiAgICAnZmEtZncnOiBmaXhlZFdpZHRoLFxuICAgICdmYS1pbnZlcnNlJzogaW52ZXJzZSxcbiAgICAnZmEtYm9yZGVyJzogYm9yZGVyLFxuICAgICdmYS1saSc6IGxpc3RJdGVtLFxuICAgICdmYS1mbGlwLWhvcml6b250YWwnOiBmbGlwID09PSAnaG9yaXpvbnRhbCcgfHwgZmxpcCA9PT0gJ2JvdGgnLFxuICAgICdmYS1mbGlwLXZlcnRpY2FsJzogZmxpcCA9PT0gJ3ZlcnRpY2FsJyB8fCBmbGlwID09PSAnYm90aCdcbiAgfSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc2VzLCBcImZhLVwiLmNvbmNhdChzaXplKSwgdHlwZW9mIHNpemUgIT09ICd1bmRlZmluZWQnICYmIHNpemUgIT09IG51bGwpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzZXMsIFwiZmEtcm90YXRlLVwiLmNvbmNhdChyb3RhdGlvbiksIHR5cGVvZiByb3RhdGlvbiAhPT0gJ3VuZGVmaW5lZCcgJiYgcm90YXRpb24gIT09IG51bGwgJiYgcm90YXRpb24gIT09IDApLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzZXMsIFwiZmEtcHVsbC1cIi5jb25jYXQocHVsbCksIHR5cGVvZiBwdWxsICE9PSAndW5kZWZpbmVkJyAmJiBwdWxsICE9PSBudWxsKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc2VzLCAnZmEtc3dhcC1vcGFjaXR5JywgcHJvcHMuc3dhcE9wYWNpdHkpLCBfY2xhc3Nlcyk7IC8vIG1hcCBvdmVyIGFsbCB0aGUga2V5cyBpbiB0aGUgY2xhc3NlcyBvYmplY3RcbiAgLy8gcmV0dXJuIGFuIGFycmF5IG9mIHRoZSBrZXlzIHdoZXJlIHRoZSB2YWx1ZSBmb3IgdGhlIGtleSBpcyBub3QgbnVsbFxuXG4gIHJldHVybiBPYmplY3Qua2V5cyhjbGFzc2VzKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBjbGFzc2VzW2tleV0gPyBrZXkgOiBudWxsO1xuICB9KS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBrZXk7XG4gIH0pO1xufVxuXG4vLyBDYW1lbGl6ZSB0YWtlbiBmcm9tIGh1bXBzXG4vLyBodW1wcyBpcyBjb3B5cmlnaHQgwqkgMjAxMisgRG9tIENocmlzdGllXG4vLyBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4vLyBQZXJmb3JtYW50IHdheSB0byBkZXRlcm1pbmUgaWYgb2JqZWN0IGNvZXJjZXMgdG8gYSBudW1iZXJcbmZ1bmN0aW9uIF9pc051bWVyaWNhbChvYmopIHtcbiAgb2JqID0gb2JqIC0gMDsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuXG4gIHJldHVybiBvYmogPT09IG9iajtcbn1cblxuZnVuY3Rpb24gY2FtZWxpemUoc3RyaW5nKSB7XG4gIGlmIChfaXNOdW1lcmljYWwoc3RyaW5nKSkge1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG5cblxuICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvW1xcLV9cXHNdKyguKT8vZywgZnVuY3Rpb24gKG1hdGNoLCBjaHIpIHtcbiAgICByZXR1cm4gY2hyID8gY2hyLnRvVXBwZXJDYXNlKCkgOiAnJztcbiAgfSk7IC8vIEVuc3VyZSAxc3QgY2hhciBpcyBhbHdheXMgbG93ZXJjYXNlXG5cbiAgcmV0dXJuIHN0cmluZy5zdWJzdHIoMCwgMSkudG9Mb3dlckNhc2UoKSArIHN0cmluZy5zdWJzdHIoMSk7XG59XG5cbmZ1bmN0aW9uIGNhcGl0YWxpemUodmFsKSB7XG4gIHJldHVybiB2YWwuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB2YWwuc2xpY2UoMSk7XG59XG5cbmZ1bmN0aW9uIHN0eWxlVG9PYmplY3Qoc3R5bGUpIHtcbiAgcmV0dXJuIHN0eWxlLnNwbGl0KCc7JykubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgcmV0dXJuIHMudHJpbSgpO1xuICB9KS5maWx0ZXIoZnVuY3Rpb24gKHMpIHtcbiAgICByZXR1cm4gcztcbiAgfSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBhaXIpIHtcbiAgICB2YXIgaSA9IHBhaXIuaW5kZXhPZignOicpO1xuICAgIHZhciBwcm9wID0gY2FtZWxpemUocGFpci5zbGljZSgwLCBpKSk7XG4gICAgdmFyIHZhbHVlID0gcGFpci5zbGljZShpICsgMSkudHJpbSgpO1xuICAgIHByb3Auc3RhcnRzV2l0aCgnd2Via2l0JykgPyBhY2NbY2FwaXRhbGl6ZShwcm9wKV0gPSB2YWx1ZSA6IGFjY1twcm9wXSA9IHZhbHVlO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbn1cblxuZnVuY3Rpb24gY29udmVydChjcmVhdGVFbGVtZW50LCBlbGVtZW50KSB7XG4gIHZhciBleHRyYVByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcblxuICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICB2YXIgY2hpbGRyZW4gPSAoZWxlbWVudC5jaGlsZHJlbiB8fCBbXSkubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBjb252ZXJ0KGNyZWF0ZUVsZW1lbnQsIGNoaWxkKTtcbiAgfSk7XG4gIC8qIGVzbGludC1kaXNhYmxlIGRvdC1ub3RhdGlvbiAqL1xuXG4gIHZhciBtaXhpbnMgPSBPYmplY3Qua2V5cyhlbGVtZW50LmF0dHJpYnV0ZXMgfHwge30pLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBrZXkpIHtcbiAgICB2YXIgdmFsID0gZWxlbWVudC5hdHRyaWJ1dGVzW2tleV07XG5cbiAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgY2FzZSAnY2xhc3MnOlxuICAgICAgICBhY2MuYXR0cnNbJ2NsYXNzTmFtZSddID0gdmFsO1xuICAgICAgICBkZWxldGUgZWxlbWVudC5hdHRyaWJ1dGVzWydjbGFzcyddO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnc3R5bGUnOlxuICAgICAgICBhY2MuYXR0cnNbJ3N0eWxlJ10gPSBzdHlsZVRvT2JqZWN0KHZhbCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoa2V5LmluZGV4T2YoJ2FyaWEtJykgPT09IDAgfHwga2V5LmluZGV4T2YoJ2RhdGEtJykgPT09IDApIHtcbiAgICAgICAgICBhY2MuYXR0cnNba2V5LnRvTG93ZXJDYXNlKCldID0gdmFsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFjYy5hdHRyc1tjYW1lbGl6ZShrZXkpXSA9IHZhbDtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwge1xuICAgIGF0dHJzOiB7fVxuICB9KTtcblxuICB2YXIgX2V4dHJhUHJvcHMkc3R5bGUgPSBleHRyYVByb3BzLnN0eWxlLFxuICAgICAgZXhpc3RpbmdTdHlsZSA9IF9leHRyYVByb3BzJHN0eWxlID09PSB2b2lkIDAgPyB7fSA6IF9leHRyYVByb3BzJHN0eWxlLFxuICAgICAgcmVtYWluaW5nID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKGV4dHJhUHJvcHMsIFtcInN0eWxlXCJdKTtcblxuICBtaXhpbnMuYXR0cnNbJ3N0eWxlJ10gPSBfb2JqZWN0U3ByZWFkMih7fSwgbWl4aW5zLmF0dHJzWydzdHlsZSddLCB7fSwgZXhpc3RpbmdTdHlsZSk7XG4gIC8qIGVzbGludC1lbmFibGUgKi9cblxuICByZXR1cm4gY3JlYXRlRWxlbWVudC5hcHBseSh2b2lkIDAsIFtlbGVtZW50LnRhZywgX29iamVjdFNwcmVhZDIoe30sIG1peGlucy5hdHRycywge30sIHJlbWFpbmluZyldLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoY2hpbGRyZW4pKSk7XG59XG5cbnZhciBQUk9EVUNUSU9OID0gZmFsc2U7XG5cbnRyeSB7XG4gIFBST0RVQ1RJT04gPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nO1xufSBjYXRjaCAoZSkge31cblxuZnVuY3Rpb24gbG9nICgpIHtcbiAgaWYgKCFQUk9EVUNUSU9OICYmIGNvbnNvbGUgJiYgdHlwZW9mIGNvbnNvbGUuZXJyb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgX2NvbnNvbGU7XG5cbiAgICAoX2NvbnNvbGUgPSBjb25zb2xlKS5lcnJvci5hcHBseShfY29uc29sZSwgYXJndW1lbnRzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVJY29uQXJncyhpY29uKSB7XG4gIC8vIHRoaXMgaGFzIGV2ZXJ5dGhpbmcgdGhhdCBpdCBuZWVkcyB0byBiZSByZW5kZXJlZCB3aGljaCBtZWFucyBpdCB3YXMgcHJvYmFibHkgaW1wb3J0ZWRcbiAgLy8gZGlyZWN0bHkgZnJvbSBhbiBpY29uIHN2ZyBwYWNrYWdlXG4gIGlmIChpY29uICYmIF90eXBlb2YoaWNvbikgPT09ICdvYmplY3QnICYmIGljb24ucHJlZml4ICYmIGljb24uaWNvbk5hbWUgJiYgaWNvbi5pY29uKSB7XG4gICAgcmV0dXJuIGljb247XG4gIH1cblxuICBpZiAocGFyc2UuaWNvbikge1xuICAgIHJldHVybiBwYXJzZS5pY29uKGljb24pO1xuICB9IC8vIGlmIHRoZSBpY29uIGlzIG51bGwsIHRoZXJlJ3Mgbm90aGluZyB0byBkb1xuXG5cbiAgaWYgKGljb24gPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSAvLyBpZiB0aGUgaWNvbiBpcyBhbiBvYmplY3QgYW5kIGhhcyBhIHByZWZpeCBhbmQgYW4gaWNvbiBuYW1lLCByZXR1cm4gaXRcblxuXG4gIGlmIChpY29uICYmIF90eXBlb2YoaWNvbikgPT09ICdvYmplY3QnICYmIGljb24ucHJlZml4ICYmIGljb24uaWNvbk5hbWUpIHtcbiAgICByZXR1cm4gaWNvbjtcbiAgfSAvLyBpZiBpdCdzIGFuIGFycmF5IHdpdGggbGVuZ3RoIG9mIHR3b1xuXG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoaWNvbikgJiYgaWNvbi5sZW5ndGggPT09IDIpIHtcbiAgICAvLyB1c2UgdGhlIGZpcnN0IGl0ZW0gYXMgcHJlZml4LCBzZWNvbmQgYXMgaWNvbiBuYW1lXG4gICAgcmV0dXJuIHtcbiAgICAgIHByZWZpeDogaWNvblswXSxcbiAgICAgIGljb25OYW1lOiBpY29uWzFdXG4gICAgfTtcbiAgfSAvLyBpZiBpdCdzIGEgc3RyaW5nLCB1c2UgaXQgYXMgdGhlIGljb24gbmFtZVxuXG5cbiAgaWYgKHR5cGVvZiBpY29uID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB7XG4gICAgICBwcmVmaXg6ICdmYXMnLFxuICAgICAgaWNvbk5hbWU6IGljb25cbiAgICB9O1xuICB9XG59XG5cbi8vIGNyZWF0ZXMgYW4gb2JqZWN0IHdpdGggYSBrZXkgb2Yga2V5XG4vLyBhbmQgYSB2YWx1ZSBvZiB2YWx1ZVxuLy8gaWYgY2VydGFpbiBjb25kaXRpb25zIGFyZSBtZXRcbmZ1bmN0aW9uIG9iamVjdFdpdGhLZXkoa2V5LCB2YWx1ZSkge1xuICAvLyBpZiB0aGUgdmFsdWUgaXMgYSBub24tZW1wdHkgYXJyYXlcbiAgLy8gb3IgaXQncyBub3QgYW4gYXJyYXkgYnV0IGl0IGlzIHRydXRoeVxuICAvLyB0aGVuIGNyZWF0ZSB0aGUgb2JqZWN0IHdpdGggdGhlIGtleSBhbmQgdGhlIHZhbHVlXG4gIC8vIGlmIG5vdCwgcmV0dXJuIGFuIGVtcHR5IGFycmF5XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPiAwIHx8ICFBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZSA/IF9kZWZpbmVQcm9wZXJ0eSh7fSwga2V5LCB2YWx1ZSkgOiB7fTtcbn1cblxuZnVuY3Rpb24gRm9udEF3ZXNvbWVJY29uKF9yZWYpIHtcbiAgdmFyIGZvcndhcmRlZFJlZiA9IF9yZWYuZm9yd2FyZGVkUmVmLFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1wiZm9yd2FyZGVkUmVmXCJdKTtcblxuICB2YXIgaWNvbkFyZ3MgPSBwcm9wcy5pY29uLFxuICAgICAgbWFza0FyZ3MgPSBwcm9wcy5tYXNrLFxuICAgICAgc3ltYm9sID0gcHJvcHMuc3ltYm9sLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgdGl0bGUgPSBwcm9wcy50aXRsZSxcbiAgICAgIHRpdGxlSWQgPSBwcm9wcy50aXRsZUlkO1xuICB2YXIgaWNvbkxvb2t1cCA9IG5vcm1hbGl6ZUljb25BcmdzKGljb25BcmdzKTtcbiAgdmFyIGNsYXNzZXMgPSBvYmplY3RXaXRoS2V5KCdjbGFzc2VzJywgW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShjbGFzc0xpc3QocHJvcHMpKSwgX3RvQ29uc3VtYWJsZUFycmF5KGNsYXNzTmFtZS5zcGxpdCgnICcpKSkpO1xuICB2YXIgdHJhbnNmb3JtID0gb2JqZWN0V2l0aEtleSgndHJhbnNmb3JtJywgdHlwZW9mIHByb3BzLnRyYW5zZm9ybSA9PT0gJ3N0cmluZycgPyBwYXJzZS50cmFuc2Zvcm0ocHJvcHMudHJhbnNmb3JtKSA6IHByb3BzLnRyYW5zZm9ybSk7XG4gIHZhciBtYXNrID0gb2JqZWN0V2l0aEtleSgnbWFzaycsIG5vcm1hbGl6ZUljb25BcmdzKG1hc2tBcmdzKSk7XG4gIHZhciByZW5kZXJlZEljb24gPSBpY29uKGljb25Mb29rdXAsIF9vYmplY3RTcHJlYWQyKHt9LCBjbGFzc2VzLCB7fSwgdHJhbnNmb3JtLCB7fSwgbWFzaywge1xuICAgIHN5bWJvbDogc3ltYm9sLFxuICAgIHRpdGxlOiB0aXRsZSxcbiAgICB0aXRsZUlkOiB0aXRsZUlkXG4gIH0pKTtcblxuICBpZiAoIXJlbmRlcmVkSWNvbikge1xuICAgIGxvZygnQ291bGQgbm90IGZpbmQgaWNvbicsIGljb25Mb29rdXApO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIGFic3RyYWN0ID0gcmVuZGVyZWRJY29uLmFic3RyYWN0O1xuICB2YXIgZXh0cmFQcm9wcyA9IHtcbiAgICByZWY6IGZvcndhcmRlZFJlZlxuICB9O1xuICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICAgIGlmICghRm9udEF3ZXNvbWVJY29uLmRlZmF1bHRQcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBleHRyYVByb3BzW2tleV0gPSBwcm9wc1trZXldO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBjb252ZXJ0Q3VycnkoYWJzdHJhY3RbMF0sIGV4dHJhUHJvcHMpO1xufVxuRm9udEF3ZXNvbWVJY29uLmRpc3BsYXlOYW1lID0gJ0ZvbnRBd2Vzb21lSWNvbic7XG5Gb250QXdlc29tZUljb24ucHJvcFR5cGVzID0ge1xuICBib3JkZXI6IFByb3BUeXBlcy5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG1hc2s6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5hcnJheSwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBmaXhlZFdpZHRoOiBQcm9wVHlwZXMuYm9vbCxcbiAgaW52ZXJzZTogUHJvcFR5cGVzLmJvb2wsXG4gIGZsaXA6IFByb3BUeXBlcy5vbmVPZihbJ2hvcml6b250YWwnLCAndmVydGljYWwnLCAnYm90aCddKSxcbiAgaWNvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmFycmF5LCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIGxpc3RJdGVtOiBQcm9wVHlwZXMuYm9vbCxcbiAgcHVsbDogUHJvcFR5cGVzLm9uZU9mKFsncmlnaHQnLCAnbGVmdCddKSxcbiAgcHVsc2U6IFByb3BUeXBlcy5ib29sLFxuICByb3RhdGlvbjogUHJvcFR5cGVzLm9uZU9mKFswLCA5MCwgMTgwLCAyNzBdKSxcbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsnbGcnLCAneHMnLCAnc20nLCAnMXgnLCAnMngnLCAnM3gnLCAnNHgnLCAnNXgnLCAnNngnLCAnN3gnLCAnOHgnLCAnOXgnLCAnMTB4J10pLFxuICBzcGluOiBQcm9wVHlwZXMuYm9vbCxcbiAgc3ltYm9sOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdHJhbnNmb3JtOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gIHN3YXBPcGFjaXR5OiBQcm9wVHlwZXMuYm9vbFxufTtcbkZvbnRBd2Vzb21lSWNvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGJvcmRlcjogZmFsc2UsXG4gIGNsYXNzTmFtZTogJycsXG4gIG1hc2s6IG51bGwsXG4gIGZpeGVkV2lkdGg6IGZhbHNlLFxuICBpbnZlcnNlOiBmYWxzZSxcbiAgZmxpcDogbnVsbCxcbiAgaWNvbjogbnVsbCxcbiAgbGlzdEl0ZW06IGZhbHNlLFxuICBwdWxsOiBudWxsLFxuICBwdWxzZTogZmFsc2UsXG4gIHJvdGF0aW9uOiBudWxsLFxuICBzaXplOiBudWxsLFxuICBzcGluOiBmYWxzZSxcbiAgc3ltYm9sOiBmYWxzZSxcbiAgdGl0bGU6ICcnLFxuICB0cmFuc2Zvcm06IG51bGwsXG4gIHN3YXBPcGFjaXR5OiBmYWxzZVxufTtcbnZhciBjb252ZXJ0Q3VycnkgPSBjb252ZXJ0LmJpbmQobnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudCk7XG5cbmV4cG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9O1xuIiwiJ3VzZSBzdHJpY3QnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgVHJpcCBmcm9tICcuL1RyaXAnXG5cbmNvbnN0IFN0dWRlbnRJbmZvID0gKHtzdHVkZW50LCBzZWFyY2hSZXN1bHR9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMz5TdHVkZW50PC9oMz5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgIHtzdHVkZW50LmZpcnN0TmFtZX0ge3N0dWRlbnQubGFzdE5hbWV9IHx7JyAnfVxuICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzp7c3R1ZGVudC5lbWFpbH1cIj57c3R1ZGVudC5lbWFpbH08L2E+IHx7JyAnfVxuICAgICAgICAgICAgPGEgaHJlZj1cInRlbDorMXtzdHVkZW50LnBob25lfVwiPntzdHVkZW50LnBob25lfTwvYT5cbiAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgPC9wPlxuICAgICAgICA8aHIgLz5cbiAgICAgICAgPGgzPlVwY29taW5nIHRyaXBzPC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICB7c2VhcmNoUmVzdWx0Lm1hcCgodHJpcCwga2V5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCIga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8VHJpcCB0cmlwPXt0cmlwfSBrZXk9e2tleX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5TdHVkZW50SW5mby5wcm9wVHlwZXMgPSB7XG4gIHN0dWRlbnQ6IFByb3BUeXBlcy5vYmplY3QsXG4gIHNlYXJjaFJlc3VsdDogUHJvcFR5cGVzLmFycmF5LFxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHVkZW50SW5mb1xuIiwiJ3VzZSBzdHJpY3QnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnXG5cbmNvbnN0IFRyaXAgPSAoe3RyaXB9KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjb250YWN0TmFtZSxcbiAgICBjb250YWN0RW1haWwsXG4gICAgY29udGFjdFBob25lLFxuICAgIGRlc3RpbmF0aW9uQ2l0eSxcbiAgICBkZXN0aW5hdGlvblN0YXRlLFxuICAgIGRlc3RpbmF0aW9uQ291bnRyeSxcbiAgICBob3N0LFxuICAgIGhvdXNpbmdBZGRyZXNzLFxuICAgIHNlY0NvbnRhY3RFbWFpbCxcbiAgICBzZWNDb250YWN0TmFtZSxcbiAgICBzZWNDb250YWN0UGhvbmUsXG4gICAgc3VibWl0RW1haWwsXG4gICAgc3VibWl0TmFtZSxcbiAgICBzdWJtaXREYXRlLFxuICAgIHRpbWVEZXBhcnRpbmcsXG4gICAgdGltZUV2ZW50U3RhcnRzLFxuICAgIHRpbWVSZXR1cm4sXG4gICAgdmlzaXRQdXJwb3NlLFxuICB9ID0gdHJpcFxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgPGg0PlN1Ym1pdHRlZDwvaDQ+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxzdHJvbmc+U3VibWl0dGVkIGJ5PC9zdHJvbmc+OnsnICd9XG4gICAgICAgICAgPGEgaHJlZj17YG1haWx0bzoke3N1Ym1pdEVtYWlsfWB9PntzdWJtaXROYW1lfTwvYT4gb257JyAnfVxuICAgICAgICAgIHtkYXlqcygpLmZvcm1hdCgnTU1NIEQsIFlZWVknLCBzdWJtaXREYXRlKX1cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8c3Ryb25nPlB1cnBvc2U6PC9zdHJvbmc+IHt2aXNpdFB1cnBvc2V9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgIDxoND5EZXN0aW5hdGlvbjwvaDQ+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxzdHJvbmc+SG9zdDo8L3N0cm9uZz4ge2hvc3R9XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPHN0cm9uZz5Mb2NhdGlvbjo8L3N0cm9uZz4ge2Rlc3RpbmF0aW9uQ2l0eX0sIHtkZXN0aW5hdGlvblN0YXRlfSx7JyAnfVxuICAgICAgICAgIHtkZXN0aW5hdGlvbkNvdW50cnl9XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPHN0cm9uZz5Ib3VzaW5nOjwvc3Ryb25nPiB7aG91c2luZ0FkZHJlc3N9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IG1iLTNcIj5cbiAgICAgICAgICA8aDQ+UHJpbWFyeSBjb250YWN0PC9oND5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIHtjb250YWN0TmFtZX1cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzp7Y29udGFjdEVtYWlsfVwiPntjb250YWN0RW1haWx9PC9hPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8YSBocmVmPVwidGVsOisxe2NvbnRhY3RQaG9uZX1cIj57Y29udGFjdFBob25lfTwvYT5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IG1iLTNcIj5cbiAgICAgICAgICA8aDQ+U2Vjb25kYXJ5IGNvbnRhY3Q8L2g0PlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAge3NlY0NvbnRhY3ROYW1lfVxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8YSBocmVmPXtgbWFpbHRvOiR7c2VjQ29udGFjdEVtYWlsfWB9PntzZWNDb250YWN0RW1haWx9PC9hPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8YSBocmVmPXtgbWFpbHRvOiR7c2VjQ29udGFjdFBob25lfWB9PntzZWNDb250YWN0UGhvbmV9PC9hPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgIDxoND5JdGluZXJhcnk8L2g0PlxuICAgICAgICA8cD5cbiAgICAgICAgICA8c3Ryb25nPkRlcGFydGluZzo8L3N0cm9uZz57JyAnfVxuICAgICAgICAgIHtkYXlqcy51bml4KHRpbWVEZXBhcnRpbmcpLmZvcm1hdCgnTU1NIEQsIFlZWVknKX0gPGJyIC8+XG4gICAgICAgICAgPHN0cm9uZz5FdmVudCBzdGFydDo8L3N0cm9uZz57JyAnfVxuICAgICAgICAgIHtkYXlqcy51bml4KHRpbWVFdmVudFN0YXJ0cykuZm9ybWF0KCdNTU0gRCwgWVlZWScpfSA8YnIgLz5cbiAgICAgICAgICA8c3Ryb25nPlJldHVybmluZzo8L3N0cm9uZz57JyAnfVxuICAgICAgICAgIHtkYXlqcy51bml4KHRpbWVSZXR1cm4pLmZvcm1hdCgnTU1NIEQsIFlZWVknKX1cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuVHJpcC5wcm9wVHlwZXMgPSB7dHJpcDogUHJvcFR5cGVzLm9iamVjdH1cblxuZXhwb3J0IGRlZmF1bHQgVHJpcFxuIiwiJ3VzZSBzdHJpY3QnXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWZ9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7Z2V0SXRlbX0gZnJvbSAnLi4vYXBpL0ZldGNoJ1xuaW1wb3J0IHtGb250QXdlc29tZUljb259IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcbmltcG9ydCBTdHVkZW50SW5mbyBmcm9tICcuL1N0dWRlbnRJbmZvJ1xuXG5jb25zdCBTZWFyY2ggPSAoKSA9PiB7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbYmFubmVySWQsIHNldEJhbm5lcklkXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbc2VhcmNoUmVzdWx0LCBzZXRTZWFyY2hSZXN1bHRdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW3N0dWRlbnQsIHNldFN0dWRlbnRdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgaWRJbnB1dCA9IHVzZVJlZigpXG5cbiAgY29uc3QgdXBkYXRlQmFubmVySWQgPSAoYmFubmVySWQpID0+IHtcbiAgICBpZiAoIWlzTmFOKGJhbm5lcklkKSAmJiBiYW5uZXJJZC5sZW5ndGggPCAxMCkge1xuICAgICAgc2V0QmFubmVySWQoYmFubmVySWQpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgY2hlY2tFbnRlciA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMyAmJiAhbG9hZGluZykge1xuICAgICAgc2VhcmNoRm9yU3R1ZGVudCgpXG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYmFubmVySWQubGVuZ3RoID09PSA5KSB7XG4gICAgICBzZWFyY2hGb3JTdHVkZW50KClcbiAgICB9XG4gIH0sIFtiYW5uZXJJZF0pXG5cbiAgY29uc3Qgc2VhcmNoRm9yU3R1ZGVudCA9ICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgc2V0U3R1ZGVudChudWxsKVxuICAgIGdldEl0ZW0oJ1NlYXJjaC9maW5kJywge3N0dWRlbnRCYW5uZXJJZDogYmFubmVySWR9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgY29uc3Qge2RhdGF9ID0gcmVzcG9uc2VcbiAgICAgIHNldFNlYXJjaFJlc3VsdChkYXRhLnRyaXBzKVxuICAgICAgc2V0U3R1ZGVudChkYXRhLnN0dWRlbnQpXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgIH0pXG4gIH1cblxuICBjb25zdCByZXNldFNlYXJjaCA9ICgpID0+IHtcbiAgICB1cGRhdGVCYW5uZXJJZCgnJylcbiAgICBzZXRTZWFyY2hSZXN1bHQoJycpXG4gICAgc2V0U3R1ZGVudChudWxsKVxuICAgIGlkSW5wdXQuY3VycmVudC5mb2N1cygpXG4gIH1cblxuICBsZXQgYmFja1RvVG9wID0gbnVsbFxuICBpZiAoc3R1ZGVudCAhPT0gbnVsbCkge1xuICAgIGJhY2tUb1RvcCA9IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXRvcCBtdC00IHB0LTQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYXJrXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBpZElucHV0LmN1cnJlbnQuZm9jdXMoKVxuICAgICAgICAgIH19PlxuICAgICAgICAgIFJldHVybiB0byB0b3BcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBjb25zdCBwcmludFNlYXJjaFJlc3VsdCA9ICgpID0+IHtcbiAgICBpZiAoIWxvYWRpbmcpIHtcbiAgICAgIGlmIChzZWFyY2hSZXN1bHQgPT0gJ2ZvdW5kJykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPlN0dWRlbnQgaW5mb3JtYXRpb24gYmVsb3cuPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXRjaCAoc2VhcmNoUmVzdWx0KSB7XG4gICAgICAgICAgY2FzZSAnbm9jb25uZWN0JzpcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+XG4gICAgICAgICAgICAgICAgQ291bGQgbm90IGNvbm5lY3QgdG8gc2VydmVyLlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcblxuICAgICAgICAgIGNhc2UgJ3RpbWVvdXQnOlxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgICBTZXJ2ZXIgcmVxdWVzdCB0aW1lZCBvdXQuIFRyeSBhZ2FpbiBpbiBhIGZldyBzZWNvbmRzLlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcblxuICAgICAgICAgIGNhc2UgJ2luY29tcGxldGUnOlxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgICBTZXJ2ZXIgcmV0dXJuZWQgYW4gaW5jb21wbGV0ZSByZXN1bHQuXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgY2FzZSAnbWlzc2luZyc6XG4gICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC13YXJuaW5nXCI+U3R1ZGVudCBub3QgZm91bmQuPC9kaXY+XG5cbiAgICAgICAgICBjYXNlICd1bmtub3duJzpcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPlVua25vd24gZXJyb3IuPC9kaXY+XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBkLXByaW50LW5vbmVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtOCBteC1hdXRvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLWRhbmdlclwiXG4gICAgICAgICAgICAgICAgICBocmVmPVwiLi9zZWN1cmUvbG9nb3V0LnBocFwiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNpZ24tb3V0LWFsdFwiPjwvaT4mbmJzcDtMb2dvdXRcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5FbnRlciBzdHVkZW50IEJhbm5lciBJRDwvaDM+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICByZWY9e2lkSW5wdXR9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiYmFubmVySWRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Zm9udFNpemU6ICcyOHB4J319XG4gICAgICAgICAgICAgICAgICBvbktleVVwPXtjaGVja0VudGVyfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVCYW5uZXJJZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17YmFubmVySWR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Jlc2V0U2VhcmNofT5cbiAgICAgICAgICAgICAgICAgIENsZWFyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInNwaW5uZXJcIiBzaXplPVwibGdcIiBzcGluIC8+XG4gICAgICAgICAgICAgICAgICAmbmJzcDtTZWFyY2hpbmcgZm9yIHN0dWRlbnQuLi5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgcHJpbnRTZWFyY2hSZXN1bHQoKVxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICB7c3R1ZGVudCAmJiAoXG4gICAgICAgICAgPFN0dWRlbnRJbmZvIHN0dWRlbnQ9e3N0dWRlbnR9IHNlYXJjaFJlc3VsdD17c2VhcmNoUmVzdWx0fSAvPlxuICAgICAgICApfVxuICAgICAgICB7YmFja1RvVG9wfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuUmVhY3RET00ucmVuZGVyKDxTZWFyY2ggLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdTZWFyY2gnKSlcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZSdcblxuY29uc3QgaGVhZGVycyA9IHtcbiAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnLFxufVxuXG5jb25zdCBkZWxldGVTaXRlID0gYXN5bmMgKHNpdGVJZCkgPT4ge1xuICBjb25zdCB1cmwgPSAnLi90cmlwZGFzaGJvYXJkL1NpdGUvJyArIHNpdGVJZFxuICByZXR1cm4gYXdhaXQgYXhpb3MuZGVsZXRlKHVybCwge1xuICAgIGhlYWRlcnMsXG4gIH0pXG59XG5cbmNvbnN0IHNhdmVEaXJlY3RvcnkgPSBhc3luYyAoZGlyKSA9PiB7XG4gIGNvbnN0IHVybCA9ICcuL3RyaXBkYXNoYm9hcmQvU2V0dGluZy9zYXZlRGlyZWN0b3J5J1xuICBjb25zdCBwYXJhbXMgPSB7ZGlyZWN0b3J5OiBkaXJ9XG4gIHJldHVybiBhd2FpdCBheGlvcy5nZXQodXJsLCB7XG4gICAgcGFyYW1zLFxuICAgIGhlYWRlcnMsXG4gIH0pXG59XG5cbmNvbnN0IGdldExpc3QgPSBhc3luYyAodXJsLCBvcHRpb25zKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KHVybCwge1xuICAgIHBhcmFtczogb3B0aW9ucyxcbiAgICBoZWFkZXJzLFxuICB9KVxuICByZXR1cm4gcmVzcG9uc2Vcbn1cblxuY29uc3QgZ2V0SXRlbSA9IGFzeW5jIChjb21tYW5kLCBwYXJhbXMpID0+IHtcbiAgY29uc3QgdXJsID0gYHRyaXBkYXNoYm9hcmQvJHtjb21tYW5kfWBcbiAgcmV0dXJuIGF3YWl0IGF4aW9zLmdldCh1cmwsIHtcbiAgICBwYXJhbXMsXG4gICAgaGVhZGVycyxcbiAgfSlcbn1cblxuY29uc3QgcG9zdEl0ZW0gPSBhc3luYyAoaXRlbSwgaXRlbU5hbWUsIHJvbGUgPSAnQWRtaW4nKSA9PiB7XG4gIGNvbnN0IHVybCA9IGB0cmlwdHJhY2svJHtyb2xlfS8ke2l0ZW1OYW1lfS8ke2l0ZW0uaWQgPiAwID8gaXRlbS5pZCA6ICcnfWBcblxuICByZXR1cm4gYXdhaXQgYXhpb3Moe1xuICAgIG1ldGhvZDogaXRlbS5pZCA+IDAgPyAncHV0JyA6ICdwb3N0JyxcbiAgICB1cmwsXG4gICAgZGF0YTogaXRlbSxcbiAgICB0aW1lb3V0OiAzMDAwLFxuICAgIGhlYWRlcnMsXG4gIH0pXG59XG5cbmV4cG9ydCB7Z2V0TGlzdCwgZ2V0SXRlbSwgcG9zdEl0ZW0sIHNhdmVEaXJlY3RvcnksIGRlbGV0ZVNpdGV9XG4iLCIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKToodD1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOnR8fHNlbGYpLmRheWpzPWUoKX0odGhpcywoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgdD0xZTMsZT02ZTQsbj0zNmU1LHI9XCJtaWxsaXNlY29uZFwiLGk9XCJzZWNvbmRcIixzPVwibWludXRlXCIsdT1cImhvdXJcIixhPVwiZGF5XCIsbz1cIndlZWtcIixmPVwibW9udGhcIixoPVwicXVhcnRlclwiLGM9XCJ5ZWFyXCIsZD1cImRhdGVcIiwkPVwiSW52YWxpZCBEYXRlXCIsbD0vXihcXGR7NH0pWy0vXT8oXFxkezEsMn0pP1stL10/KFxcZHswLDJ9KVtUdFxcc10qKFxcZHsxLDJ9KT86PyhcXGR7MSwyfSk/Oj8oXFxkezEsMn0pP1suOl0/KFxcZCspPyQvLHk9L1xcWyhbXlxcXV0rKV18WXsxLDR9fE17MSw0fXxEezEsMn18ZHsxLDR9fEh7MSwyfXxoezEsMn18YXxBfG17MSwyfXxzezEsMn18WnsxLDJ9fFNTUy9nLE09e25hbWU6XCJlblwiLHdlZWtkYXlzOlwiU3VuZGF5X01vbmRheV9UdWVzZGF5X1dlZG5lc2RheV9UaHVyc2RheV9GcmlkYXlfU2F0dXJkYXlcIi5zcGxpdChcIl9cIiksbW9udGhzOlwiSmFudWFyeV9GZWJydWFyeV9NYXJjaF9BcHJpbF9NYXlfSnVuZV9KdWx5X0F1Z3VzdF9TZXB0ZW1iZXJfT2N0b2Jlcl9Ob3ZlbWJlcl9EZWNlbWJlclwiLnNwbGl0KFwiX1wiKX0sbT1mdW5jdGlvbih0LGUsbil7dmFyIHI9U3RyaW5nKHQpO3JldHVybiFyfHxyLmxlbmd0aD49ZT90OlwiXCIrQXJyYXkoZSsxLXIubGVuZ3RoKS5qb2luKG4pK3R9LGc9e3M6bSx6OmZ1bmN0aW9uKHQpe3ZhciBlPS10LnV0Y09mZnNldCgpLG49TWF0aC5hYnMoZSkscj1NYXRoLmZsb29yKG4vNjApLGk9biU2MDtyZXR1cm4oZTw9MD9cIitcIjpcIi1cIikrbShyLDIsXCIwXCIpK1wiOlwiK20oaSwyLFwiMFwiKX0sbTpmdW5jdGlvbiB0KGUsbil7aWYoZS5kYXRlKCk8bi5kYXRlKCkpcmV0dXJuLXQobixlKTt2YXIgcj0xMioobi55ZWFyKCktZS55ZWFyKCkpKyhuLm1vbnRoKCktZS5tb250aCgpKSxpPWUuY2xvbmUoKS5hZGQocixmKSxzPW4taTwwLHU9ZS5jbG9uZSgpLmFkZChyKyhzPy0xOjEpLGYpO3JldHVybisoLShyKyhuLWkpLyhzP2ktdTp1LWkpKXx8MCl9LGE6ZnVuY3Rpb24odCl7cmV0dXJuIHQ8MD9NYXRoLmNlaWwodCl8fDA6TWF0aC5mbG9vcih0KX0scDpmdW5jdGlvbih0KXtyZXR1cm57TTpmLHk6Yyx3Om8sZDphLEQ6ZCxoOnUsbTpzLHM6aSxtczpyLFE6aH1bdF18fFN0cmluZyh0fHxcIlwiKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL3MkLyxcIlwiKX0sdTpmdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwPT09dH19LEQ9XCJlblwiLHY9e307dltEXT1NO3ZhciBwPWZ1bmN0aW9uKHQpe3JldHVybiB0IGluc3RhbmNlb2YgX30sUz1mdW5jdGlvbih0LGUsbil7dmFyIHI7aWYoIXQpcmV0dXJuIEQ7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpdlt0XSYmKHI9dCksZSYmKHZbdF09ZSxyPXQpO2Vsc2V7dmFyIGk9dC5uYW1lO3ZbaV09dCxyPWl9cmV0dXJuIW4mJnImJihEPXIpLHJ8fCFuJiZEfSx3PWZ1bmN0aW9uKHQsZSl7aWYocCh0KSlyZXR1cm4gdC5jbG9uZSgpO3ZhciBuPVwib2JqZWN0XCI9PXR5cGVvZiBlP2U6e307cmV0dXJuIG4uZGF0ZT10LG4uYXJncz1hcmd1bWVudHMsbmV3IF8obil9LE89ZztPLmw9UyxPLmk9cCxPLnc9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdyh0LHtsb2NhbGU6ZS4kTCx1dGM6ZS4kdSx4OmUuJHgsJG9mZnNldDplLiRvZmZzZXR9KX07dmFyIF89ZnVuY3Rpb24oKXtmdW5jdGlvbiBNKHQpe3RoaXMuJEw9Uyh0LmxvY2FsZSxudWxsLCEwKSx0aGlzLnBhcnNlKHQpfXZhciBtPU0ucHJvdG90eXBlO3JldHVybiBtLnBhcnNlPWZ1bmN0aW9uKHQpe3RoaXMuJGQ9ZnVuY3Rpb24odCl7dmFyIGU9dC5kYXRlLG49dC51dGM7aWYobnVsbD09PWUpcmV0dXJuIG5ldyBEYXRlKE5hTik7aWYoTy51KGUpKXJldHVybiBuZXcgRGF0ZTtpZihlIGluc3RhbmNlb2YgRGF0ZSlyZXR1cm4gbmV3IERhdGUoZSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUmJiEvWiQvaS50ZXN0KGUpKXt2YXIgcj1lLm1hdGNoKGwpO2lmKHIpe3ZhciBpPXJbMl0tMXx8MCxzPShyWzddfHxcIjBcIikuc3Vic3RyaW5nKDAsMyk7cmV0dXJuIG4/bmV3IERhdGUoRGF0ZS5VVEMoclsxXSxpLHJbM118fDEscls0XXx8MCxyWzVdfHwwLHJbNl18fDAscykpOm5ldyBEYXRlKHJbMV0saSxyWzNdfHwxLHJbNF18fDAscls1XXx8MCxyWzZdfHwwLHMpfX1yZXR1cm4gbmV3IERhdGUoZSl9KHQpLHRoaXMuJHg9dC54fHx7fSx0aGlzLmluaXQoKX0sbS5pbml0PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy4kZDt0aGlzLiR5PXQuZ2V0RnVsbFllYXIoKSx0aGlzLiRNPXQuZ2V0TW9udGgoKSx0aGlzLiREPXQuZ2V0RGF0ZSgpLHRoaXMuJFc9dC5nZXREYXkoKSx0aGlzLiRIPXQuZ2V0SG91cnMoKSx0aGlzLiRtPXQuZ2V0TWludXRlcygpLHRoaXMuJHM9dC5nZXRTZWNvbmRzKCksdGhpcy4kbXM9dC5nZXRNaWxsaXNlY29uZHMoKX0sbS4kdXRpbHM9ZnVuY3Rpb24oKXtyZXR1cm4gT30sbS5pc1ZhbGlkPWZ1bmN0aW9uKCl7cmV0dXJuISh0aGlzLiRkLnRvU3RyaW5nKCk9PT0kKX0sbS5pc1NhbWU9ZnVuY3Rpb24odCxlKXt2YXIgbj13KHQpO3JldHVybiB0aGlzLnN0YXJ0T2YoZSk8PW4mJm48PXRoaXMuZW5kT2YoZSl9LG0uaXNBZnRlcj1mdW5jdGlvbih0LGUpe3JldHVybiB3KHQpPHRoaXMuc3RhcnRPZihlKX0sbS5pc0JlZm9yZT1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmVuZE9mKGUpPHcodCl9LG0uJGc9ZnVuY3Rpb24odCxlLG4pe3JldHVybiBPLnUodCk/dGhpc1tlXTp0aGlzLnNldChuLHQpfSxtLnVuaXg9ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5mbG9vcih0aGlzLnZhbHVlT2YoKS8xZTMpfSxtLnZhbHVlT2Y9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC5nZXRUaW1lKCl9LG0uc3RhcnRPZj1mdW5jdGlvbih0LGUpe3ZhciBuPXRoaXMscj0hIU8udShlKXx8ZSxoPU8ucCh0KSwkPWZ1bmN0aW9uKHQsZSl7dmFyIGk9Ty53KG4uJHU/RGF0ZS5VVEMobi4keSxlLHQpOm5ldyBEYXRlKG4uJHksZSx0KSxuKTtyZXR1cm4gcj9pOmkuZW5kT2YoYSl9LGw9ZnVuY3Rpb24odCxlKXtyZXR1cm4gTy53KG4udG9EYXRlKClbdF0uYXBwbHkobi50b0RhdGUoXCJzXCIpLChyP1swLDAsMCwwXTpbMjMsNTksNTksOTk5XSkuc2xpY2UoZSkpLG4pfSx5PXRoaXMuJFcsTT10aGlzLiRNLG09dGhpcy4kRCxnPVwic2V0XCIrKHRoaXMuJHU/XCJVVENcIjpcIlwiKTtzd2l0Y2goaCl7Y2FzZSBjOnJldHVybiByPyQoMSwwKTokKDMxLDExKTtjYXNlIGY6cmV0dXJuIHI/JCgxLE0pOiQoMCxNKzEpO2Nhc2Ugbzp2YXIgRD10aGlzLiRsb2NhbGUoKS53ZWVrU3RhcnR8fDAsdj0oeTxEP3krNzp5KS1EO3JldHVybiAkKHI/bS12Om0rKDYtdiksTSk7Y2FzZSBhOmNhc2UgZDpyZXR1cm4gbChnK1wiSG91cnNcIiwwKTtjYXNlIHU6cmV0dXJuIGwoZytcIk1pbnV0ZXNcIiwxKTtjYXNlIHM6cmV0dXJuIGwoZytcIlNlY29uZHNcIiwyKTtjYXNlIGk6cmV0dXJuIGwoZytcIk1pbGxpc2Vjb25kc1wiLDMpO2RlZmF1bHQ6cmV0dXJuIHRoaXMuY2xvbmUoKX19LG0uZW5kT2Y9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc3RhcnRPZih0LCExKX0sbS4kc2V0PWZ1bmN0aW9uKHQsZSl7dmFyIG4sbz1PLnAodCksaD1cInNldFwiKyh0aGlzLiR1P1wiVVRDXCI6XCJcIiksJD0obj17fSxuW2FdPWgrXCJEYXRlXCIsbltkXT1oK1wiRGF0ZVwiLG5bZl09aCtcIk1vbnRoXCIsbltjXT1oK1wiRnVsbFllYXJcIixuW3VdPWgrXCJIb3Vyc1wiLG5bc109aCtcIk1pbnV0ZXNcIixuW2ldPWgrXCJTZWNvbmRzXCIsbltyXT1oK1wiTWlsbGlzZWNvbmRzXCIsbilbb10sbD1vPT09YT90aGlzLiREKyhlLXRoaXMuJFcpOmU7aWYobz09PWZ8fG89PT1jKXt2YXIgeT10aGlzLmNsb25lKCkuc2V0KGQsMSk7eS4kZFskXShsKSx5LmluaXQoKSx0aGlzLiRkPXkuc2V0KGQsTWF0aC5taW4odGhpcy4kRCx5LmRheXNJbk1vbnRoKCkpKS4kZH1lbHNlICQmJnRoaXMuJGRbJF0obCk7cmV0dXJuIHRoaXMuaW5pdCgpLHRoaXN9LG0uc2V0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuY2xvbmUoKS4kc2V0KHQsZSl9LG0uZ2V0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzW08ucCh0KV0oKX0sbS5hZGQ9ZnVuY3Rpb24ocixoKXt2YXIgZCwkPXRoaXM7cj1OdW1iZXIocik7dmFyIGw9Ty5wKGgpLHk9ZnVuY3Rpb24odCl7dmFyIGU9dygkKTtyZXR1cm4gTy53KGUuZGF0ZShlLmRhdGUoKStNYXRoLnJvdW5kKHQqcikpLCQpfTtpZihsPT09ZilyZXR1cm4gdGhpcy5zZXQoZix0aGlzLiRNK3IpO2lmKGw9PT1jKXJldHVybiB0aGlzLnNldChjLHRoaXMuJHkrcik7aWYobD09PWEpcmV0dXJuIHkoMSk7aWYobD09PW8pcmV0dXJuIHkoNyk7dmFyIE09KGQ9e30sZFtzXT1lLGRbdV09bixkW2ldPXQsZClbbF18fDEsbT10aGlzLiRkLmdldFRpbWUoKStyKk07cmV0dXJuIE8udyhtLHRoaXMpfSxtLnN1YnRyYWN0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuYWRkKC0xKnQsZSl9LG0uZm9ybWF0PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsbj10aGlzLiRsb2NhbGUoKTtpZighdGhpcy5pc1ZhbGlkKCkpcmV0dXJuIG4uaW52YWxpZERhdGV8fCQ7dmFyIHI9dHx8XCJZWVlZLU1NLUREVEhIOm1tOnNzWlwiLGk9Ty56KHRoaXMpLHM9dGhpcy4kSCx1PXRoaXMuJG0sYT10aGlzLiRNLG89bi53ZWVrZGF5cyxmPW4ubW9udGhzLGg9ZnVuY3Rpb24odCxuLGkscyl7cmV0dXJuIHQmJih0W25dfHx0KGUscikpfHxpW25dLnN1YnN0cigwLHMpfSxjPWZ1bmN0aW9uKHQpe3JldHVybiBPLnMocyUxMnx8MTIsdCxcIjBcIil9LGQ9bi5tZXJpZGllbXx8ZnVuY3Rpb24odCxlLG4pe3ZhciByPXQ8MTI/XCJBTVwiOlwiUE1cIjtyZXR1cm4gbj9yLnRvTG93ZXJDYXNlKCk6cn0sbD17WVk6U3RyaW5nKHRoaXMuJHkpLnNsaWNlKC0yKSxZWVlZOnRoaXMuJHksTTphKzEsTU06Ty5zKGErMSwyLFwiMFwiKSxNTU06aChuLm1vbnRoc1Nob3J0LGEsZiwzKSxNTU1NOmgoZixhKSxEOnRoaXMuJEQsREQ6Ty5zKHRoaXMuJEQsMixcIjBcIiksZDpTdHJpbmcodGhpcy4kVyksZGQ6aChuLndlZWtkYXlzTWluLHRoaXMuJFcsbywyKSxkZGQ6aChuLndlZWtkYXlzU2hvcnQsdGhpcy4kVyxvLDMpLGRkZGQ6b1t0aGlzLiRXXSxIOlN0cmluZyhzKSxISDpPLnMocywyLFwiMFwiKSxoOmMoMSksaGg6YygyKSxhOmQocyx1LCEwKSxBOmQocyx1LCExKSxtOlN0cmluZyh1KSxtbTpPLnModSwyLFwiMFwiKSxzOlN0cmluZyh0aGlzLiRzKSxzczpPLnModGhpcy4kcywyLFwiMFwiKSxTU1M6Ty5zKHRoaXMuJG1zLDMsXCIwXCIpLFo6aX07cmV0dXJuIHIucmVwbGFjZSh5LChmdW5jdGlvbih0LGUpe3JldHVybiBlfHxsW3RdfHxpLnJlcGxhY2UoXCI6XCIsXCJcIil9KSl9LG0udXRjT2Zmc2V0PWZ1bmN0aW9uKCl7cmV0dXJuIDE1Ki1NYXRoLnJvdW5kKHRoaXMuJGQuZ2V0VGltZXpvbmVPZmZzZXQoKS8xNSl9LG0uZGlmZj1mdW5jdGlvbihyLGQsJCl7dmFyIGwseT1PLnAoZCksTT13KHIpLG09KE0udXRjT2Zmc2V0KCktdGhpcy51dGNPZmZzZXQoKSkqZSxnPXRoaXMtTSxEPU8ubSh0aGlzLE0pO3JldHVybiBEPShsPXt9LGxbY109RC8xMixsW2ZdPUQsbFtoXT1ELzMsbFtvXT0oZy1tKS82MDQ4ZTUsbFthXT0oZy1tKS84NjRlNSxsW3VdPWcvbixsW3NdPWcvZSxsW2ldPWcvdCxsKVt5XXx8ZywkP0Q6Ty5hKEQpfSxtLmRheXNJbk1vbnRoPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZW5kT2YoZikuJER9LG0uJGxvY2FsZT1mdW5jdGlvbigpe3JldHVybiB2W3RoaXMuJExdfSxtLmxvY2FsZT1mdW5jdGlvbih0LGUpe2lmKCF0KXJldHVybiB0aGlzLiRMO3ZhciBuPXRoaXMuY2xvbmUoKSxyPVModCxlLCEwKTtyZXR1cm4gciYmKG4uJEw9ciksbn0sbS5jbG9uZT1mdW5jdGlvbigpe3JldHVybiBPLncodGhpcy4kZCx0aGlzKX0sbS50b0RhdGU9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IERhdGUodGhpcy52YWx1ZU9mKCkpfSxtLnRvSlNPTj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmlzVmFsaWQoKT90aGlzLnRvSVNPU3RyaW5nKCk6bnVsbH0sbS50b0lTT1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRkLnRvSVNPU3RyaW5nKCl9LG0udG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC50b1VUQ1N0cmluZygpfSxNfSgpLGI9Xy5wcm90b3R5cGU7cmV0dXJuIHcucHJvdG90eXBlPWIsW1tcIiRtc1wiLHJdLFtcIiRzXCIsaV0sW1wiJG1cIixzXSxbXCIkSFwiLHVdLFtcIiRXXCIsYV0sW1wiJE1cIixmXSxbXCIkeVwiLGNdLFtcIiREXCIsZF1dLmZvckVhY2goKGZ1bmN0aW9uKHQpe2JbdFsxXV09ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuJGcoZSx0WzBdLHRbMV0pfX0pKSx3LmV4dGVuZD1mdW5jdGlvbih0LGUpe3JldHVybiB0LiRpfHwodChlLF8sdyksdC4kaT0hMCksd30sdy5sb2NhbGU9Uyx3LmlzRGF5anM9cCx3LnVuaXg9ZnVuY3Rpb24odCl7cmV0dXJuIHcoMWUzKnQpfSx3LmVuPXZbRF0sdy5Mcz12LHcucD17fSx3fSkpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJTZWFyY2hcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3RyaXBkYXNoYm9hcmRcIl0gPSBzZWxmW1wid2VicGFja0NodW5rdHJpcGRhc2hib2FyZFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vamF2YXNjcmlwdC9TZWFyY2gvaW5kZXguanN4XCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJUcmlwIiwiU3R1ZGVudEluZm8iLCJzdHVkZW50Iiwic2VhcmNoUmVzdWx0IiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsInBob25lIiwibWFwIiwidHJpcCIsImtleSIsInByb3BUeXBlcyIsIm9iamVjdCIsImFycmF5IiwiZGF5anMiLCJjb250YWN0TmFtZSIsImNvbnRhY3RFbWFpbCIsImNvbnRhY3RQaG9uZSIsImRlc3RpbmF0aW9uQ2l0eSIsImRlc3RpbmF0aW9uU3RhdGUiLCJkZXN0aW5hdGlvbkNvdW50cnkiLCJob3N0IiwiaG91c2luZ0FkZHJlc3MiLCJzZWNDb250YWN0RW1haWwiLCJzZWNDb250YWN0TmFtZSIsInNlY0NvbnRhY3RQaG9uZSIsInN1Ym1pdEVtYWlsIiwic3VibWl0TmFtZSIsInN1Ym1pdERhdGUiLCJ0aW1lRGVwYXJ0aW5nIiwidGltZUV2ZW50U3RhcnRzIiwidGltZVJldHVybiIsInZpc2l0UHVycG9zZSIsImZvcm1hdCIsInVuaXgiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIlJlYWN0RE9NIiwiZ2V0SXRlbSIsIkZvbnRBd2Vzb21lSWNvbiIsIlNlYXJjaCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiYmFubmVySWQiLCJzZXRCYW5uZXJJZCIsInNldFNlYXJjaFJlc3VsdCIsInNldFN0dWRlbnQiLCJpZElucHV0IiwidXBkYXRlQmFubmVySWQiLCJpc05hTiIsImxlbmd0aCIsImNoZWNrRW50ZXIiLCJldmVudCIsImtleUNvZGUiLCJzZWFyY2hGb3JTdHVkZW50Iiwic3R1ZGVudEJhbm5lcklkIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsInRyaXBzIiwicmVzZXRTZWFyY2giLCJjdXJyZW50IiwiZm9jdXMiLCJiYWNrVG9Ub3AiLCJwcmludFNlYXJjaFJlc3VsdCIsImZvbnRTaXplIiwiZSIsInRhcmdldCIsInZhbHVlIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImF4aW9zIiwiaGVhZGVycyIsImRlbGV0ZVNpdGUiLCJzaXRlSWQiLCJ1cmwiLCJzYXZlRGlyZWN0b3J5IiwiZGlyIiwicGFyYW1zIiwiZGlyZWN0b3J5IiwiZ2V0IiwiZ2V0TGlzdCIsIm9wdGlvbnMiLCJjb21tYW5kIiwicG9zdEl0ZW0iLCJpdGVtIiwiaXRlbU5hbWUiLCJyb2xlIiwiaWQiLCJtZXRob2QiLCJ0aW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==