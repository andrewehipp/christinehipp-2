module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Aspect/aspect.scss":
/***/ (function(module, exports) {

module.exports = {
	"aspect": "_1ptVkeGTING3Z_OwutK9nU",
	"aspect-16x9": "RjZNbDEmLeyesIasbP6ZQ",
	"aspect-1440x900": "_2DRm-WPbEZhZnBxKk5XJZP",
	"aspect-iphone6": "_1r2-pogiv2KwmASvK5QM6P",
	"aspect-ipad": "_2wEKicKFUYpRI8pjTSDdNU"
};

/***/ }),

/***/ "./components/Aspect/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classcat__ = __webpack_require__("classcat");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classcat___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classcat__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aspect_scss__ = __webpack_require__("./components/Aspect/aspect.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aspect_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__aspect_scss__);
var _jsxFileName = "/Users/andrewhipp/Sites/christinehipp-2/components/Aspect/index.jsx";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }





var Aspect = function Aspect(_ref) {
  var children = _ref.children,
      _ref$modifiers = _ref.modifiers,
      modifiers = _ref$modifiers === void 0 ? '' : _ref$modifiers,
      className = _ref.className,
      width = _ref.width,
      height = _ref.height,
      props = _objectWithoutProperties(_ref, ["children", "modifiers", "className", "width", "height"]);

  var classes = __WEBPACK_IMPORTED_MODULE_1_classcat___default()([className, __WEBPACK_IMPORTED_MODULE_2__aspect_scss___default.a.aspect, modifiers.split(' ').map(function (modifier) {
    return __WEBPACK_IMPORTED_MODULE_2__aspect_scss___default.a[modifier];
  })]);
  var styles = width && height && {
    paddingTop: "".concat(height / width * 100, "%")
  };
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", _extends({}, props, {
    className: classes,
    style: styles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), children);
};

/* harmony default export */ __webpack_exports__["a"] = (Aspect);

/***/ }),

/***/ "./components/Filters/context.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Provider */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Consumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return filters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FiltersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_cookie__ = __webpack_require__("js-cookie");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_js_cookie__);
var _jsxFileName = "/Users/andrewhipp/Sites/christinehipp-2/components/Filters/context.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var filters = [{
  label: 'Pencil',
  value: 'pencils'
}, {
  label: 'Ink',
  value: 'inks'
}, {
  label: 'Full Color',
  value: 'fullColor'
}];

var _React$createContext = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createContext({
  filter: __WEBPACK_IMPORTED_MODULE_1_js_cookie___default.a.get('filter') || filters[2].value
}),
    Provider = _React$createContext.Provider,
    Consumer = _React$createContext.Consumer;

var FiltersProvider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FiltersProvider, _React$Component);

  function FiltersProvider() {
    var _this;

    _classCallCheck(this, FiltersProvider);

    _this = _possibleConstructorReturn(this, (FiltersProvider.__proto__ || Object.getPrototypeOf(FiltersProvider)).call(this));
    _this.state = {
      filter: __WEBPACK_IMPORTED_MODULE_1_js_cookie___default.a.get('filter') || filters[2].value
    };
    _this.setFilter = _this.setFilter.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FiltersProvider, [{
    key: "setFilter",
    value: function setFilter(index) {
      __WEBPACK_IMPORTED_MODULE_1_js_cookie___default.a.set('filter', filters[index].value);
      this.setState({
        filter: filters[index].value
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        filter: __WEBPACK_IMPORTED_MODULE_1_js_cookie___default.a.get('filter')
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Provider, {
        value: {
          filter: this.state.filter,
          setFilter: this.setFilter
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, this.props.children);
    }
  }]);

  return FiltersProvider;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ "./components/Filters/filters.scss":
/***/ (function(module, exports) {

module.exports = {
	"filters": "vgpHzr2PqYo3ED7at9_pp",
	"item": "_3ZoW4_bWw3bYgBDaEjqxEw",
	"button": "VCSG61hfDnsxh7nCb02jE",
	"buttonActive": "_1Velnox_Q_Ic2MLdutfpR_"
};

/***/ }),

/***/ "./components/Filters/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classcat__ = __webpack_require__("classcat");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classcat___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classcat__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__context_js__ = __webpack_require__("./components/Filters/context.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filters_scss__ = __webpack_require__("./components/Filters/filters.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filters_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__filters_scss__);
var _jsxFileName = "/Users/andrewhipp/Sites/christinehipp-2/components/Filters/index.jsx";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Filters = function Filters() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__context_js__["a" /* Consumer */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, function (_ref) {
    var filter = _ref.filter,
        setFilter = _ref.setFilter;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
      className: __WEBPACK_IMPORTED_MODULE_3__filters_scss___default.a.filters,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }, __WEBPACK_IMPORTED_MODULE_2__context_js__["c" /* filters */].map(function (f, filterIndex) {
      var handleClick = function handleClick() {
        setFilter(filterIndex);
      };

      var classes = __WEBPACK_IMPORTED_MODULE_1_classcat___default()([__WEBPACK_IMPORTED_MODULE_3__filters_scss___default.a.button, _defineProperty({}, __WEBPACK_IMPORTED_MODULE_3__filters_scss___default.a.buttonActive, f.value === filter)]);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        key: f.value,
        className: __WEBPACK_IMPORTED_MODULE_3__filters_scss___default.a.item,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        type: "button",
        className: classes,
        onClick: handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, f.label));
    }));
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Filters);

/***/ }),

/***/ "./components/Header/header.scss":
/***/ (function(module, exports) {

module.exports = {
	"header": "_3xve6MMQ9gJLii25juVMxh",
	"lockup": "_1b1oms_gSuuxd77DsYbgSE",
	"title": "_3AABsY90YsOnisU5wwjhOa",
	"tag": "_3nXcE7mDtBZQWYaYAIzRtc",
	"row": "_1_CB_TG0i3HlJezGGrLGfp",
	"nav": "_2nVmDSvuoPc3ocTjqzDscM",
	"navList": "gXZDnh-rNuH38sTefyW_h",
	"navItem": "nywGVEG2McDEbCkauqaRf",
	"navLink": "_1Yw8kEmQgsk7tvuAizOoV2",
	"c-nav__list": "_1WnUfVw7SlT-3bwsLG1ekz"
};

/***/ }),

/***/ "./components/Header/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_scss__ = __webpack_require__("./components/Header/header.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__header_scss__);
var _jsxFileName = "/Users/andrewhipp/Sites/christinehipp-2/components/Header/index.jsx";




var Header = function Header(_ref) {
  var menu = _ref.menu;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
    className: __WEBPACK_IMPORTED_MODULE_2__header_scss___default.a.header,
    role: "banner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_2__header_scss___default.a.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "c-header__block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: __WEBPACK_IMPORTED_MODULE_2__header_scss___default.a.lockup,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    className: __WEBPACK_IMPORTED_MODULE_2__header_scss___default.a.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "Christine Hipp"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
    className: __WEBPACK_IMPORTED_MODULE_2__header_scss___default.a.tag,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "Comic Artist")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "c-header__block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
    className: __WEBPACK_IMPORTED_MODULE_2__header_scss___default.a.nav,
    role: "navigation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: __WEBPACK_IMPORTED_MODULE_2__header_scss___default.a.navList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: __WEBPACK_IMPORTED_MODULE_2__header_scss___default.a.navItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "mailto:christinelhipp@gmail.com",
    target: "_blank",
    className: __WEBPACK_IMPORTED_MODULE_2__header_scss___default.a.navLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "christinelhipp@gmail.com"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: __WEBPACK_IMPORTED_MODULE_2__header_scss___default.a.navList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, menu.map(function (item) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
      key: item.name,
      className: __WEBPACK_IMPORTED_MODULE_2__header_scss___default.a.navItem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
      href: "/".concat(item.slug),
      className: __WEBPACK_IMPORTED_MODULE_2__header_scss___default.a.navLink,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      }
    }, item.name));
  }))))));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/Page/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Aspect__ = __webpack_require__("./components/Aspect/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Filters_context__ = __webpack_require__("./components/Filters/context.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_scss__ = __webpack_require__("./components/Page/page.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__page_scss__);
var _jsxFileName = "/Users/andrewhipp/Sites/christinehipp-2/components/Page/index.jsx";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






var Page = function Page(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_3__page_scss___default.a.page,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Filters_context__["a" /* Consumer */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, function (_ref) {
    var filter = _ref.filter;
    return props[filter] ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Aspect__["a" /* default */], _extends({}, props[filter].file.details.image, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("picture", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("source", {
      srcSet: "".concat(props[filter].file.url, "?w=850&fm=webp"),
      type: "image/webp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
      src: "".concat(props[filter].file.url, "?w=850"),
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    }))) : null;
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Page);

/***/ }),

/***/ "./components/Page/page.scss":
/***/ (function(module, exports) {

module.exports = {
	"page": "_24c_8_D3hFF0McdxOUrlRL"
};

/***/ }),

/***/ "./pages/project.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Header__ = __webpack_require__("./components/Header/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Page__ = __webpack_require__("./components/Page/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Filters__ = __webpack_require__("./components/Filters/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Filters_context_js__ = __webpack_require__("./components/Filters/context.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__resources_global_scss__ = __webpack_require__("./resources/global.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__resources_global_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__resources_global_scss__);
var _jsxFileName = "/Users/andrewhipp/Sites/christinehipp-2/pages/project.jsx";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








var Project = function Project(_ref) {
  var url = _ref.url;
  var _url$query = url.query,
      menu = _url$query.menu,
      project = _url$query.project;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Header__["a" /* default */], {
    menu: menu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Filters_context_js__["b" /* FiltersProvider */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Filters__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), project.pages.map(function (page) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Page__["a" /* default */], _extends({
      key: page.name
    }, page, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      }
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ }),

/***/ "./resources/global.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/project.jsx");


/***/ }),

/***/ "classcat":
/***/ (function(module, exports) {

module.exports = require("classcat");

/***/ }),

/***/ "js-cookie":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=project.js.map