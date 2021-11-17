/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./javascript/Setting/Listing.js":
/*!***************************************!*\
  !*** ./javascript/Setting/Listing.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);





var Listing = function Listing(_ref) {
  var listing = _ref.listing,
      loading = _ref.loading,
      removeSite = _ref.removeSite;

  if (loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Loading sites...");
  }

  if (listing.length === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "No triptrack sites added.");
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
    className: "table table-striped"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, listing.map(function (value) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
      key: "thing-".concat(value.id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "btn btn-danger btn-sm",
      onClick: function onClick() {
        removeSite(value.id);
      }
    }, "X")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, value.branchDirectory));
  }))));
};

Listing.propTypes = {
  listing: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  loading: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Listing);

/***/ }),

/***/ "./javascript/Setting/index.jsx":
/*!**************************************!*\
  !*** ./javascript/Setting/index.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _api_Fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/Fetch */ "./javascript/api/Fetch.js");
/* harmony import */ var _Listing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Listing */ "./javascript/Setting/Listing.js");


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var Setting = function Setting() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      branchDirectory = _useState2[0],
      setBranchDirectory = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      errorMessage = _useState4[0],
      setErrorMessage = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      successMessage = _useState6[0],
      setSuccessMessage = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState8 = _slicedToArray(_useState7, 2),
      loading = _useState8[0],
      setLoading = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState10 = _slicedToArray(_useState9, 2),
      listing = _useState10[0],
      setListing = _useState10[1];

  var load = function load() {
    (0,_api_Fetch__WEBPACK_IMPORTED_MODULE_2__.getList)('./tripdashboard/Site/list').then(function (response) {
      setListing(response.data);
    });
  };

  var removeSite = function removeSite(id) {
    (0,_api_Fetch__WEBPACK_IMPORTED_MODULE_2__.deleteSite)(id).then(function () {
      load();
      setBranchDirectory('');
    });
  };

  var addDirectory = function addDirectory() {
    (0,_api_Fetch__WEBPACK_IMPORTED_MODULE_2__.saveDirectory)(branchDirectory).then(function (response) {
      if (response.data.success) {
        setErrorMessage(null);
        setSuccessMessage('Branch added');
        setBranchDirectory('');
        load();
        setTimeout(function () {
          setSuccessMessage(null);
        }, 3000);
      } else {
        setErrorMessage(response.data.message);
        setSuccessMessage(null);
      }
    })["catch"](function () {
      setErrorMessage('Could not connect to server');
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    load();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Settings"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-sm-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Trip Track Branch Directory")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-sm-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "e.g. /var/www/branches/branchName",
    value: branchDirectory,
    onChange: function onChange(e) {
      setBranchDirectory(e.target.value);
    }
  }), errorMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "badge badge-danger"
  }, errorMessage), successMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "badge badge-success"
  }, successMessage))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btn btn-success",
    onClick: addDirectory,
    disabled: branchDirectory.length === 0
  }, "Add Trip Track installation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Current Trip Track branches"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Listing__WEBPACK_IMPORTED_MODULE_3__["default"], {
    listing: listing,
    removeSite: removeSite
  }));
};

react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Setting, null), document.getElementById('Setting'));

/***/ }),

/***/ "./javascript/api/Fetch.js":
/*!*********************************!*\
  !*** ./javascript/api/Fetch.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 			"Setting": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./javascript/Setting/index.jsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFaERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmlwZGFzaGJvYXJkLy4vamF2YXNjcmlwdC9TZXR0aW5nL0xpc3RpbmcuanMiLCJ3ZWJwYWNrOi8vdHJpcGRhc2hib2FyZC8uL2phdmFzY3JpcHQvU2V0dGluZy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vdHJpcGRhc2hib2FyZC8uL2phdmFzY3JpcHQvYXBpL0ZldGNoLmpzIiwid2VicGFjazovL3RyaXBkYXNoYm9hcmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHJpcGRhc2hib2FyZC93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3RyaXBkYXNoYm9hcmQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdHJpcGRhc2hib2FyZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHJpcGRhc2hib2FyZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RyaXBkYXNoYm9hcmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90cmlwZGFzaGJvYXJkL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RyaXBkYXNoYm9hcmQvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90cmlwZGFzaGJvYXJkL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90cmlwZGFzaGJvYXJkL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuY29uc3QgTGlzdGluZyA9ICh7bGlzdGluZywgbG9hZGluZywgcmVtb3ZlU2l0ZX0pID0+IHtcbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nIHNpdGVzLi4uPC9kaXY+XG4gIH1cbiAgaWYgKGxpc3RpbmcubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIDxkaXY+Tm8gdHJpcHRyYWNrIHNpdGVzIGFkZGVkLjwvZGl2PlxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkXCI+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7bGlzdGluZy5tYXAoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8dHIga2V5PXtgdGhpbmctJHt2YWx1ZS5pZH1gfT5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIGJ0bi1zbVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZW1vdmVTaXRlKHZhbHVlLmlkKVxuICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3ZhbHVlLmJyYW5jaERpcmVjdG9yeX08L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5MaXN0aW5nLnByb3BUeXBlcyA9IHtsaXN0aW5nOiBQcm9wVHlwZXMuYXJyYXksIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sfVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0aW5nXG4iLCIndXNlIHN0cmljdCdcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7c2F2ZURpcmVjdG9yeSwgZ2V0TGlzdCwgZGVsZXRlU2l0ZX0gZnJvbSAnLi4vYXBpL0ZldGNoJ1xuaW1wb3J0IExpc3RpbmcgZnJvbSAnLi9MaXN0aW5nJ1xuXG5jb25zdCBTZXR0aW5nID0gKCkgPT4ge1xuICBjb25zdCBbYnJhbmNoRGlyZWN0b3J5LCBzZXRCcmFuY2hEaXJlY3RvcnldID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbc3VjY2Vzc01lc3NhZ2UsIHNldFN1Y2Nlc3NNZXNzYWdlXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IFtsaXN0aW5nLCBzZXRMaXN0aW5nXSA9IHVzZVN0YXRlKFtdKVxuXG4gIGNvbnN0IGxvYWQgPSAoKSA9PiB7XG4gICAgZ2V0TGlzdCgnLi90cmlwZGFzaGJvYXJkL1NpdGUvbGlzdCcpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBzZXRMaXN0aW5nKHJlc3BvbnNlLmRhdGEpXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IHJlbW92ZVNpdGUgPSAoaWQpID0+IHtcbiAgICBkZWxldGVTaXRlKGlkKS50aGVuKCgpID0+IHtcbiAgICAgIGxvYWQoKVxuICAgICAgc2V0QnJhbmNoRGlyZWN0b3J5KCcnKVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBhZGREaXJlY3RvcnkgPSAoKSA9PiB7XG4gICAgc2F2ZURpcmVjdG9yeShicmFuY2hEaXJlY3RvcnkpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgIHNldEVycm9yTWVzc2FnZShudWxsKVxuICAgICAgICAgIHNldFN1Y2Nlc3NNZXNzYWdlKCdCcmFuY2ggYWRkZWQnKVxuICAgICAgICAgIHNldEJyYW5jaERpcmVjdG9yeSgnJylcbiAgICAgICAgICBsb2FkKClcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldFN1Y2Nlc3NNZXNzYWdlKG51bGwpXG4gICAgICAgICAgfSwgMzAwMClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UocmVzcG9uc2UuZGF0YS5tZXNzYWdlKVxuICAgICAgICAgIHNldFN1Y2Nlc3NNZXNzYWdlKG51bGwpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICBzZXRFcnJvck1lc3NhZ2UoJ0NvdWxkIG5vdCBjb25uZWN0IHRvIHNlcnZlcicpXG4gICAgICB9KVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2FkKClcbiAgfSwgW10pXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMz5TZXR0aW5nczwvaDM+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XG4gICAgICAgICAgPGxhYmVsPlRyaXAgVHJhY2sgQnJhbmNoIERpcmVjdG9yeTwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS04XCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuIC92YXIvd3d3L2JyYW5jaGVzL2JyYW5jaE5hbWVcIlxuICAgICAgICAgICAgdmFsdWU9e2JyYW5jaERpcmVjdG9yeX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBzZXRCcmFuY2hEaXJlY3RvcnkoZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2Vycm9yTWVzc2FnZSAmJiAoXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1kYW5nZXJcIj57ZXJyb3JNZXNzYWdlfTwvc3Bhbj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtzdWNjZXNzTWVzc2FnZSAmJiAoXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1zdWNjZXNzXCI+e3N1Y2Nlc3NNZXNzYWdlfTwvc3Bhbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIlxuICAgICAgICBvbkNsaWNrPXthZGREaXJlY3Rvcnl9XG4gICAgICAgIGRpc2FibGVkPXticmFuY2hEaXJlY3RvcnkubGVuZ3RoID09PSAwfT5cbiAgICAgICAgQWRkIFRyaXAgVHJhY2sgaW5zdGFsbGF0aW9uXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxociAvPlxuICAgICAgPGgzPkN1cnJlbnQgVHJpcCBUcmFjayBicmFuY2hlczwvaDM+XG4gICAgICA8TGlzdGluZyB7Li4ue2xpc3RpbmcsIHJlbW92ZVNpdGV9fSAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cblJlYWN0RE9NLnJlbmRlcig8U2V0dGluZyAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1NldHRpbmcnKSlcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZSdcblxuY29uc3QgaGVhZGVycyA9IHtcbiAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnLFxufVxuXG5jb25zdCBkZWxldGVTaXRlID0gYXN5bmMgKHNpdGVJZCkgPT4ge1xuICBjb25zdCB1cmwgPSAnLi90cmlwZGFzaGJvYXJkL1NpdGUvJyArIHNpdGVJZFxuICByZXR1cm4gYXdhaXQgYXhpb3MuZGVsZXRlKHVybCwge1xuICAgIGhlYWRlcnMsXG4gIH0pXG59XG5cbmNvbnN0IHNhdmVEaXJlY3RvcnkgPSBhc3luYyAoZGlyKSA9PiB7XG4gIGNvbnN0IHVybCA9ICcuL3RyaXBkYXNoYm9hcmQvU2V0dGluZy9zYXZlRGlyZWN0b3J5J1xuICBjb25zdCBwYXJhbXMgPSB7ZGlyZWN0b3J5OiBkaXJ9XG4gIHJldHVybiBhd2FpdCBheGlvcy5nZXQodXJsLCB7XG4gICAgcGFyYW1zLFxuICAgIGhlYWRlcnMsXG4gIH0pXG59XG5cbmNvbnN0IGdldExpc3QgPSBhc3luYyAodXJsLCBvcHRpb25zKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KHVybCwge1xuICAgIHBhcmFtczogb3B0aW9ucyxcbiAgICBoZWFkZXJzLFxuICB9KVxuICByZXR1cm4gcmVzcG9uc2Vcbn1cblxuY29uc3QgZ2V0SXRlbSA9IGFzeW5jIChjb21tYW5kLCBwYXJhbXMpID0+IHtcbiAgY29uc3QgdXJsID0gYHRyaXBkYXNoYm9hcmQvJHtjb21tYW5kfWBcbiAgcmV0dXJuIGF3YWl0IGF4aW9zLmdldCh1cmwsIHtcbiAgICBwYXJhbXMsXG4gICAgaGVhZGVycyxcbiAgfSlcbn1cblxuY29uc3QgcG9zdEl0ZW0gPSBhc3luYyAoaXRlbSwgaXRlbU5hbWUsIHJvbGUgPSAnQWRtaW4nKSA9PiB7XG4gIGNvbnN0IHVybCA9IGB0cmlwdHJhY2svJHtyb2xlfS8ke2l0ZW1OYW1lfS8ke2l0ZW0uaWQgPiAwID8gaXRlbS5pZCA6ICcnfWBcblxuICByZXR1cm4gYXdhaXQgYXhpb3Moe1xuICAgIG1ldGhvZDogaXRlbS5pZCA+IDAgPyAncHV0JyA6ICdwb3N0JyxcbiAgICB1cmwsXG4gICAgZGF0YTogaXRlbSxcbiAgICB0aW1lb3V0OiAzMDAwLFxuICAgIGhlYWRlcnMsXG4gIH0pXG59XG5cbmV4cG9ydCB7Z2V0TGlzdCwgZ2V0SXRlbSwgcG9zdEl0ZW0sIHNhdmVEaXJlY3RvcnksIGRlbGV0ZVNpdGV9XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIlNldHRpbmdcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3RyaXBkYXNoYm9hcmRcIl0gPSBzZWxmW1wid2VicGFja0NodW5rdHJpcGRhc2hib2FyZFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vamF2YXNjcmlwdC9TZXR0aW5nL2luZGV4LmpzeFwiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJQcm9wVHlwZXMiLCJMaXN0aW5nIiwibGlzdGluZyIsImxvYWRpbmciLCJyZW1vdmVTaXRlIiwibGVuZ3RoIiwibWFwIiwidmFsdWUiLCJpZCIsImJyYW5jaERpcmVjdG9yeSIsInByb3BUeXBlcyIsImFycmF5IiwiYm9vbCIsInVzZUVmZmVjdCIsIlJlYWN0RE9NIiwic2F2ZURpcmVjdG9yeSIsImdldExpc3QiLCJkZWxldGVTaXRlIiwiU2V0dGluZyIsInNldEJyYW5jaERpcmVjdG9yeSIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsInN1Y2Nlc3NNZXNzYWdlIiwic2V0U3VjY2Vzc01lc3NhZ2UiLCJzZXRMb2FkaW5nIiwic2V0TGlzdGluZyIsImxvYWQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiYWRkRGlyZWN0b3J5Iiwic3VjY2VzcyIsInNldFRpbWVvdXQiLCJtZXNzYWdlIiwiZSIsInRhcmdldCIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJheGlvcyIsImhlYWRlcnMiLCJzaXRlSWQiLCJ1cmwiLCJkaXIiLCJwYXJhbXMiLCJkaXJlY3RvcnkiLCJnZXQiLCJvcHRpb25zIiwiZ2V0SXRlbSIsImNvbW1hbmQiLCJwb3N0SXRlbSIsIml0ZW0iLCJpdGVtTmFtZSIsInJvbGUiLCJtZXRob2QiLCJ0aW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==