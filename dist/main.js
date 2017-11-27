(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("classnames"), require("immutable"), require("prop-types"), require("lodash"), require("recompose"), require("moment"), require("react-date-range"), require("react-dom"), require("react-dropzone"), require("react-onclickoutside"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "classnames", "immutable", "prop-types", "lodash", "recompose", "moment", "react-date-range", "react-dom", "react-dropzone", "react-onclickoutside"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("classnames"), require("immutable"), require("prop-types"), require("lodash"), require("recompose"), require("moment"), require("react-date-range"), require("react-dom"), require("react-dropzone"), require("react-onclickoutside")) : factory(root["React"], root["classnames"], root["Immutable"], root["prop-types"], root["_"], root["Recompose"], root["Moment"], root["ReactDateRange"], root["ReactDOM"], root["ReactDropzone"], root["ReactOnclickoutside"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_30__, __WEBPACK_EXTERNAL_MODULE_31__, __WEBPACK_EXTERNAL_MODULE_66__, __WEBPACK_EXTERNAL_MODULE_67__, __WEBPACK_EXTERNAL_MODULE_68__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 45);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getInputPath */
/* unused harmony export getPrioritisedDefaultValue */
/* unused harmony export getPrioritisedValue */
/* unused harmony export withNeededProps */
/* unused harmony export updateLifcycle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return validationPerformanceWrapper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_immutable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inputHelpers__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Actions_fields__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Form_Helpers_createSpecificShallowEqual__ = __webpack_require__(21);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};




/** Components */



/** Helpers */
var specificShallowEqual = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Form_Helpers_createSpecificShallowEqual__["a" /* default */])("inputInfo", "name", "nameSpace", "type", "id", "disabled", "noValidate", "required", "className", "defaultValue", "defaultChecked", "defaultSelected", "options", "fieldSetNameSpace", "value", "label");
var specificShallowEqualDefault = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Form_Helpers_createSpecificShallowEqual__["a" /* default */])("defaultValue");
var specificShallowEqualValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Form_Helpers_createSpecificShallowEqual__["a" /* default */])("value");
var getUnsetValue = function (_a) {
    var type = _a.type;
    if (type === 'radio' || type === 'checkbox') {
        return undefined;
    }
    else {
        return '';
    }
};
/**
 *
 * @param type The type of grouping - 'input' or 'validation'
 * @param Object The values for each of the items i.e. {name, id, fieldSetNameSpace}
 */
var getInputPath = function (type, _a) {
    var name = _a.name, id = _a.id, fieldSetNameSpace = _a.fieldSetNameSpace;
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__inputHelpers__["a" /* isMultipleValueInput */])(name) && fieldSetNameSpace !== undefined) {
        if (id) {
            return [fieldSetNameSpace, name, type, id];
        }
        else {
            return [fieldSetNameSpace, name, type];
        }
    }
    else if (fieldSetNameSpace !== undefined) {
        return [fieldSetNameSpace, name];
    }
    else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__inputHelpers__["a" /* isMultipleValueInput */])(name)) {
        if (id) {
            return [name, type, id];
        }
        else {
            return [name, type];
        }
    }
    return [name];
};
var getPrioritisedDefaultValue = function (defaultValue, defaultChecked, defaultSelected) { return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__inputHelpers__["b" /* returnCheckedValue */])(function (arg) { return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash__["isUndefined"])(arg) && arg !== false; }, defaultValue, defaultChecked, defaultSelected)); };
var getPrioritisedValue = function (value, inputInfoValue, prioritisedDefaultValue, unsetValue) { return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__inputHelpers__["b" /* returnCheckedValue */])(function (arg) { return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash__["isUndefined"])(arg); }, value, inputInfoValue, prioritisedDefaultValue, unsetValue)); };
var setIdToDefault = function (type, id, defaultSwitch) {
    if ((type === 'radio' || type === 'checkbox') && typeof defaultSwitch === 'boolean' && defaultSwitch !== false) {
        return id;
    }
    return defaultSwitch;
};
var withNeededProps = function () {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_recompose__["withProps"])(function (props) {
        if (props.nameSpace === undefined) {
            throw new Error("nameSpace is undefined ensure that a Form component is a parent of the component with name: \"" + props.name + "\"");
        }
        var inputPath = getInputPath("input", props);
        var inputInfo = props.FormState.getIn([props.nameSpace].concat(inputPath), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_immutable__["Map"])({}));
        var defaultValue = props.defaultValue, defaultChecked = props.defaultChecked, defaultSelected = props.defaultSelected;
        var prioritisedDefaultValue = getPrioritisedDefaultValue(defaultValue, setIdToDefault(props.type, props.id, defaultChecked), setIdToDefault(props.type, props.id, defaultSelected));
        var value = getPrioritisedValue(props.value, inputInfo.get('value'), prioritisedDefaultValue, getUnsetValue(props));
        return {
            inputInfo: inputInfo,
            defaultValue: prioritisedDefaultValue,
            inputPath: inputPath,
            value: value
        };
    });
};
var setValidationWithHandlersObject = {
    setValidation: function (_a) {
        var dispatch = _a.dispatch, nameSpace = _a.nameSpace, props = __rest(_a, ["dispatch", "nameSpace"]);
        return function (type, test) {
            dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__Actions_fields__["b" /* setValidation */])(nameSpace, getInputPath("validation", props), type, test));
        };
    },
    compareAdditionalProps: function (_a) {
        var additionalCompareProps = _a.additionalCompareProps;
        if (additionalCompareProps) {
            return __WEBPACK_IMPORTED_MODULE_6__Form_Helpers_createSpecificShallowEqual__["a" /* default */].apply(void 0, additionalCompareProps)();
        }
        else {
            return false;
        }
    },
};
var updateLifcycle = function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_recompose__["lifecycle"])({
    componentWillMount: function () {
        this.props.inputChanged(this.props.value, false);
    },
    componentWillReceiveProps: function (nextProps) {
        if (!specificShallowEqualDefault(nextProps, this.props)) {
            nextProps.inputChanged(nextProps.defaultValue, false);
        }
        if (!specificShallowEqualValue(nextProps, this.props)) {
            nextProps.inputChanged(nextProps.value, true);
        }
        if (!nextProps.FormState.hasIn([nextProps.nameSpace].concat(nextProps.inputPath))) {
            nextProps.inputChanged(nextProps.value, false);
        }
    }
}); };
var createUniversalCompose = function (withHandlersArgs, type) {
    if (type === void 0) { type = "input"; }
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_recompose__["compose"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_recompose__["getContext"])({
        nameSpace: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
        FormState: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object,
        fieldSetNameSpace: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
        dispatch: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func
    }), withNeededProps(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_recompose__["withHandlers"])(withHandlersArgs), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_recompose__["shouldUpdate"])(function (props, nextProps) {
        return !specificShallowEqual(props, nextProps) || !nextProps.compareAdditionalProps(props, nextProps);
    }));
};
var validationPerformanceWrapper = function (ReactClass) { return (createUniversalCompose(setValidationWithHandlersObject)(ReactClass)); };
/* harmony default export */ __webpack_exports__["a"] = (function (ReactClass) {
    var inputWrapperCompose = createUniversalCompose(__assign({ inputChanged: function (_a) {
            var dispatch = _a.dispatch, nameSpace = _a.nameSpace, name = _a.name, id = _a.id, fieldSetNameSpace = _a.fieldSetNameSpace;
            return function (value, changed) {
                if (changed === void 0) { changed = true; }
                var inputPath = getInputPath("input", { name: name, id: id, fieldSetNameSpace: fieldSetNameSpace });
                dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__Actions_fields__["c" /* setInput */])(nameSpace, inputPath, value));
                dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__Actions_fields__["d" /* setInputInteraction */])(nameSpace, inputPath, 'changed', changed));
            };
        }, setInputBlurred: function (_a) {
            var dispatch = _a.dispatch, nameSpace = _a.nameSpace, props = __rest(_a, ["dispatch", "nameSpace"]);
            return function () {
                dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__Actions_fields__["d" /* setInputInteraction */])(nameSpace, getInputPath("input", props), 'blurred', true));
            };
        } }, setValidationWithHandlersObject));
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_recompose__["compose"])(inputWrapperCompose, updateLifcycle())(ReactClass);
});;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isMultipleValueInput; });
/* harmony export (immutable) */ __webpack_exports__["b"] = returnCheckedValue;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getHTMLAttributes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

/**
 * Checks whether the specified input field is a multi-value
 * input field or not
 * @param inputName The name of the input which needs to be checked
 */
var isMultipleValueInput = function (inputName) {
    return inputName.search(/\[\]$/) !== -1;
};
/**
 * Checks all the supplied values and returns
 * the appropriately validated value
 * @param check Test for the values supplied
 * @param args Values that need to be checked with the test provided
 */
function returnCheckedValue(check) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var innerReturnCheckedValue = function (index) {
        if (index === void 0) { index = 0; }
        if (index === args.length) {
            return undefined;
        }
        else if (check(args[index])) {
            return args[index];
        }
        return innerReturnCheckedValue(index + 1);
    };
    return innerReturnCheckedValue();
}
;
/**
 * getHTMLAttributes
 * @param props All the props on which the 'picking' is performed
 */
var getHTMLAttributes = function (props) {
    var safeProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash__["pick"])(props, "id", "autoFocus", "required", "name", "type", "value", "min", "max", "minLength", "maxLength", "pattern", "accept", "multiple", "placeholder", "disabled", "rows");
    return safeProps;
};


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ErrorWrapper__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__InputWrapper_scss__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__InputWrapper_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__InputWrapper_scss__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/** Libraries */

/** Components */

/** Styles */

/** Class InputWrapper */
var InputWrapper = /** @class */ (function (_super) {
    __extends(InputWrapper, _super);
    function InputWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputWrapper.prototype.render = function () {
        var _a = this.props, className = _a.className, name = _a.name, label = _a.label, labelPrefix = _a.labelPrefix, labelPostfix = _a.labelPostfix, type = _a.type, children = _a.children;
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ErrorWrapper__["a" /* default */], { className: className, type: type },
            (label || labelPostfix || labelPrefix) && (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "input-label-wrapper" },
                labelPrefix && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "input-label-prefix" }, labelPrefix),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "input-label", htmlFor: name }, label),
                labelPostfix && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "input-label-postfix" }, labelPostfix))),
            children));
    };
    return InputWrapper;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));
/* harmony default export */ __webpack_exports__["a"] = (InputWrapper);


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Validation_Validation__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__libs_validate__ = __webpack_require__(12);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
/** Libraries */

/** Components */

/** Helpers */

var childrenValidations = function (children) {
    if (__WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.count(children) > 0) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.map(children, function (child) {
            return child.props.isFor;
        });
    }
    return [];
};
var isSwitch = function (type) { return type === "checkbox" || type === 'radio'; };
var validationsUnused = function (validationsUsed, validationsAvailable, isSwitch) {
    return validationsAvailable.filter(function (validation) {
        if (validation === 'type' && isSwitch)
            return false;
        return validationsUsed.indexOf(validation) === -1;
    });
};
/** Class DisplayValidation */
var DisplayValidation = /** @class */ (function (_super) {
    __extends(DisplayValidation, _super);
    function DisplayValidation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DisplayValidation.prototype.render = function () {
        var _a = this.props, children = _a.children, disabled = _a.disabled, inputInfo = _a.inputInfo, noValidate = _a.noValidate, type = _a.type, props = __rest(_a, ["children", "disabled", "inputInfo", "noValidate", "type"]);
        var validationsAvail = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__libs_validate__["a" /* validationsAvailable */])(props);
        var validationUsed = childrenValidations(children);
        var unusedValidations = validationsUnused(validationUsed, validationsAvail, isSwitch(type));
        if (disabled || noValidate) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("noscript", null);
        }
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.map(children, function (child) {
                var typeOfValidation = child.props.isFor;
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, {
                    test: props[typeOfValidation],
                    inputInfo: inputInfo,
                    type: type,
                    name: props.name,
                    setValidation: props.setValidation
                });
            }),
            unusedValidations.map(function (validation, index) { return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Validation_Validation__["a" /* default */], {
                key: index,
                isFor: validation,
                test: props[validation],
                inputInfo: inputInfo,
                type: type,
                children: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__libs_validate__["b" /* validationsMessages */])(validation, props[validation]),
                name: props.name,
                setValidation: props.setValidation
            }); })));
    };
    return DisplayValidation;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));
/* harmony default export */ __webpack_exports__["a"] = (DisplayValidation);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__InputGroup_scss__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__InputGroup_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__InputGroup_scss__);
/** Libraries */


/** Styles */

/** Internal method to make creation of input boxes with appended or prepended segments easier */
var InputGroup = function (_a) {
    var prepend = _a.prepend, append = _a.append, children = _a.children;
    var inputGroupClass = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('input-group', { 'input-prepend': !!prepend }, { 'input-append': !!append });
    return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: inputGroupClass },
        !!append && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "input-addon" }, append),
        children,
        !!prepend && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "input-addon" }, prepend)));
};
/* harmony default export */ __webpack_exports__["a"] = (InputGroup);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(66);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactInputAutosize = __webpack_require__(60);

var _reactInputAutosize2 = _interopRequireDefault(_reactInputAutosize);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _defaultArrowRenderer = __webpack_require__(64);

var _defaultArrowRenderer2 = _interopRequireDefault(_defaultArrowRenderer);

var _defaultFilterOptions = __webpack_require__(27);

var _defaultFilterOptions2 = _interopRequireDefault(_defaultFilterOptions);

var _defaultMenuRenderer = __webpack_require__(28);

var _defaultMenuRenderer2 = _interopRequireDefault(_defaultMenuRenderer);

var _defaultClearRenderer = __webpack_require__(65);

var _defaultClearRenderer2 = _interopRequireDefault(_defaultClearRenderer);

var _Option = __webpack_require__(62);

var _Option2 = _interopRequireDefault(_Option);

var _Value = __webpack_require__(26);

var _Value2 = _interopRequireDefault(_Value);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*!
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 Copyright (c) 2017 Jed Watson.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 Licensed under the MIT License (MIT), see
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 http://jedwatson.github.io/react-select
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var stringifyValue = function stringifyValue(value) {
	return typeof value === 'string' ? value : value !== null && JSON.stringify(value) || '';
};

var stringOrNode = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]);

var instanceId = 1;

var Select = function (_React$Component) {
	_inherits(Select, _React$Component);

	function Select(props) {
		_classCallCheck(this, Select);

		var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

		['clearValue', 'focusOption', 'handleInputBlur', 'handleInputChange', 'handleInputFocus', 'handleInputValueChange', 'handleKeyDown', 'handleMenuScroll', 'handleMouseDown', 'handleMouseDownOnArrow', 'handleMouseDownOnMenu', 'handleRequired', 'handleTouchOutside', 'handleTouchMove', 'handleTouchStart', 'handleTouchEnd', 'handleTouchEndClearValue', 'handleValueClick', 'getOptionLabel', 'onOptionRef', 'removeValue', 'selectValue'].forEach(function (fn) {
			return _this[fn] = _this[fn].bind(_this);
		});

		_this.state = {
			inputValue: '',
			isFocused: false,
			isOpen: false,
			isPseudoFocused: false,
			required: false
		};
		return _this;
	}

	_createClass(Select, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this._instancePrefix = 'react-select-' + (this.props.instanceId || ++instanceId) + '-';
			var valueArray = this.getValueArray(this.props.value);

			if (this.props.required) {
				this.setState({
					required: this.handleRequired(valueArray[0], this.props.multi)
				});
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (this.props.autofocus) {
				this.focus();
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var valueArray = this.getValueArray(nextProps.value, nextProps);

			if (nextProps.required) {
				this.setState({
					required: this.handleRequired(valueArray[0], nextProps.multi)
				});
			} else if (this.props.required) {
				// Used to be required but it's not any more
				this.setState({ required: false });
			}
		}
	}, {
		key: 'componentWillUpdate',
		value: function componentWillUpdate(nextProps, nextState) {
			if (nextState.isOpen !== this.state.isOpen) {
				this.toggleTouchOutsideEvent(nextState.isOpen);
				var handler = nextState.isOpen ? nextProps.onOpen : nextProps.onClose;
				handler && handler();
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			// focus to the selected option
			if (this.menu && this.focused && this.state.isOpen && !this.hasScrolledToOption) {
				var focusedOptionNode = _reactDom2.default.findDOMNode(this.focused);
				var menuNode = _reactDom2.default.findDOMNode(this.menu);
				menuNode.scrollTop = focusedOptionNode.offsetTop;
				this.hasScrolledToOption = true;
			} else if (!this.state.isOpen) {
				this.hasScrolledToOption = false;
			}

			if (this._scrollToFocusedOptionOnUpdate && this.focused && this.menu) {
				this._scrollToFocusedOptionOnUpdate = false;
				var focusedDOM = _reactDom2.default.findDOMNode(this.focused);
				var menuDOM = _reactDom2.default.findDOMNode(this.menu);
				var focusedRect = focusedDOM.getBoundingClientRect();
				var menuRect = menuDOM.getBoundingClientRect();
				if (focusedRect.bottom > menuRect.bottom) {
					menuDOM.scrollTop = focusedDOM.offsetTop + focusedDOM.clientHeight - menuDOM.offsetHeight;
				} else if (focusedRect.top < menuRect.top) {
					menuDOM.scrollTop = focusedDOM.offsetTop;
				}
			}
			if (this.props.scrollMenuIntoView && this.menuContainer) {
				var menuContainerRect = this.menuContainer.getBoundingClientRect();
				if (window.innerHeight < menuContainerRect.bottom + this.props.menuBuffer) {
					window.scrollBy(0, menuContainerRect.bottom + this.props.menuBuffer - window.innerHeight);
				}
			}
			if (prevProps.disabled !== this.props.disabled) {
				this.setState({ isFocused: false }); // eslint-disable-line react/no-did-update-set-state
				this.closeMenu();
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			if (!document.removeEventListener && document.detachEvent) {
				document.detachEvent('ontouchstart', this.handleTouchOutside);
			} else {
				document.removeEventListener('touchstart', this.handleTouchOutside);
			}
		}
	}, {
		key: 'toggleTouchOutsideEvent',
		value: function toggleTouchOutsideEvent(enabled) {
			if (enabled) {
				if (!document.addEventListener && document.attachEvent) {
					document.attachEvent('ontouchstart', this.handleTouchOutside);
				} else {
					document.addEventListener('touchstart', this.handleTouchOutside);
				}
			} else {
				if (!document.removeEventListener && document.detachEvent) {
					document.detachEvent('ontouchstart', this.handleTouchOutside);
				} else {
					document.removeEventListener('touchstart', this.handleTouchOutside);
				}
			}
		}
	}, {
		key: 'handleTouchOutside',
		value: function handleTouchOutside(event) {
			// handle touch outside on ios to dismiss menu
			if (this.wrapper && !this.wrapper.contains(event.target)) {
				this.closeMenu();
			}
		}
	}, {
		key: 'focus',
		value: function focus() {
			if (!this.input) return;
			this.input.focus();
		}
	}, {
		key: 'blurInput',
		value: function blurInput() {
			if (!this.input) return;
			this.input.blur();
		}
	}, {
		key: 'handleTouchMove',
		value: function handleTouchMove(event) {
			// Set a flag that the view is being dragged
			this.dragging = true;
		}
	}, {
		key: 'handleTouchStart',
		value: function handleTouchStart(event) {
			// Set a flag that the view is not being dragged
			this.dragging = false;
		}
	}, {
		key: 'handleTouchEnd',
		value: function handleTouchEnd(event) {
			// Check if the view is being dragged, In this case
			// we don't want to fire the click event (because the user only wants to scroll)
			if (this.dragging) return;

			// Fire the mouse events
			this.handleMouseDown(event);
		}
	}, {
		key: 'handleTouchEndClearValue',
		value: function handleTouchEndClearValue(event) {
			// Check if the view is being dragged, In this case
			// we don't want to fire the click event (because the user only wants to scroll)
			if (this.dragging) return;

			// Clear the value
			this.clearValue(event);
		}
	}, {
		key: 'handleMouseDown',
		value: function handleMouseDown(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, or if the component is disabled, ignore it.
			if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
				return;
			}

			if (event.target.tagName === 'INPUT') {
				return;
			}

			// prevent default event handlers
			event.stopPropagation();
			event.preventDefault();

			// for the non-searchable select, toggle the menu
			if (!this.props.searchable) {
				// TODO: This code means that if a select is searchable, onClick the options menu will not appear, only on subsequent click will it open.
				this.focus();
				return this.setState({
					isOpen: !this.state.isOpen
				});
			}

			if (this.state.isFocused) {
				// On iOS, we can get into a state where we think the input is focused but it isn't really,
				// since iOS ignores programmatic calls to input.focus() that weren't triggered by a click event.
				// Call focus() again here to be safe.
				this.focus();

				var input = this.input;
				if (typeof input.getInput === 'function') {
					// Get the actual DOM input if the ref is an <AutosizeInput /> component
					input = input.getInput();
				}

				// clears the value so that the cursor will be at the end of input when the component re-renders
				input.value = '';

				// if the input is focused, ensure the menu is open
				this.setState({
					isOpen: true,
					isPseudoFocused: false
				});
			} else {
				// otherwise, focus the input and open the menu
				this._openAfterFocus = this.props.openOnClick;
				this.focus();
			}
		}
	}, {
		key: 'handleMouseDownOnArrow',
		value: function handleMouseDownOnArrow(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, or if the component is disabled, ignore it.
			if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
				return;
			}
			// If the menu isn't open, let the event bubble to the main handleMouseDown
			if (!this.state.isOpen) {
				return;
			}
			// prevent default event handlers
			event.stopPropagation();
			event.preventDefault();
			// close the menu
			this.closeMenu();
		}
	}, {
		key: 'handleMouseDownOnMenu',
		value: function handleMouseDownOnMenu(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, or if the component is disabled, ignore it.
			if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
				return;
			}
			event.stopPropagation();
			event.preventDefault();

			this._openAfterFocus = true;
			this.focus();
		}
	}, {
		key: 'closeMenu',
		value: function closeMenu() {
			if (this.props.onCloseResetsInput) {
				this.setState({
					isOpen: false,
					isPseudoFocused: this.state.isFocused && !this.props.multi,
					inputValue: this.handleInputValueChange('')
				});
			} else {
				this.setState({
					isOpen: false,
					isPseudoFocused: this.state.isFocused && !this.props.multi
				});
			}
			this.hasScrolledToOption = false;
		}
	}, {
		key: 'handleInputFocus',
		value: function handleInputFocus(event) {
			if (this.props.disabled) return;
			var isOpen = this.state.isOpen || this._openAfterFocus || this.props.openOnFocus;
			if (this.props.onFocus) {
				this.props.onFocus(event);
			}
			this.setState({
				isFocused: true,
				isOpen: isOpen
			});
			this._openAfterFocus = false;
		}
	}, {
		key: 'handleInputBlur',
		value: function handleInputBlur(event) {
			// The check for menu.contains(activeElement) is necessary to prevent IE11's scrollbar from closing the menu in certain contexts.
			if (this.menu && (this.menu === document.activeElement || this.menu.contains(document.activeElement))) {
				this.focus();
				return;
			}

			if (this.props.onBlur) {
				this.props.onBlur(event);
			}
			var onBlurredState = {
				isFocused: false,
				isOpen: false,
				isPseudoFocused: false
			};
			if (this.props.onBlurResetsInput) {
				onBlurredState.inputValue = this.handleInputValueChange('');
			}
			this.setState(onBlurredState);
		}
	}, {
		key: 'handleInputChange',
		value: function handleInputChange(event) {
			var newInputValue = event.target.value;

			if (this.state.inputValue !== event.target.value) {
				newInputValue = this.handleInputValueChange(newInputValue);
			}

			this.setState({
				isOpen: true,
				isPseudoFocused: false,
				inputValue: newInputValue
			});
		}
	}, {
		key: 'handleInputValueChange',
		value: function handleInputValueChange(newValue) {
			if (this.props.onInputChange) {
				var nextState = this.props.onInputChange(newValue);
				// Note: != used deliberately here to catch undefined and null
				if (nextState != null && (typeof nextState === 'undefined' ? 'undefined' : _typeof(nextState)) !== 'object') {
					newValue = '' + nextState;
				}
			}
			return newValue;
		}
	}, {
		key: 'handleKeyDown',
		value: function handleKeyDown(event) {
			if (this.props.disabled) return;

			if (typeof this.props.onInputKeyDown === 'function') {
				this.props.onInputKeyDown(event);
				if (event.defaultPrevented) {
					return;
				}
			}

			switch (event.keyCode) {
				case 8:
					// backspace
					if (!this.state.inputValue && this.props.backspaceRemoves) {
						event.preventDefault();
						this.popValue();
					}
					return;
				case 9:
					// tab
					if (event.shiftKey || !this.state.isOpen || !this.props.tabSelectsValue) {
						return;
					}
					this.selectFocusedOption();
					return;
				case 13:
					// enter
					if (!this.state.isOpen) return;
					event.stopPropagation();
					this.selectFocusedOption();
					break;
				case 27:
					// escape
					if (this.state.isOpen) {
						this.closeMenu();
						event.stopPropagation();
					} else if (this.props.clearable && this.props.escapeClearsValue) {
						this.clearValue(event);
						event.stopPropagation();
					}
					break;
				case 38:
					// up
					this.focusPreviousOption();
					break;
				case 40:
					// down
					this.focusNextOption();
					break;
				case 33:
					// page up
					this.focusPageUpOption();
					break;
				case 34:
					// page down
					this.focusPageDownOption();
					break;
				case 35:
					// end key
					if (event.shiftKey) {
						return;
					}
					this.focusEndOption();
					break;
				case 36:
					// home key
					if (event.shiftKey) {
						return;
					}
					this.focusStartOption();
					break;
				case 46:
					// backspace
					if (!this.state.inputValue && this.props.deleteRemoves) {
						event.preventDefault();
						this.popValue();
					}
					return;
				default:
					return;
			}
			event.preventDefault();
		}
	}, {
		key: 'handleValueClick',
		value: function handleValueClick(option, event) {
			if (!this.props.onValueClick) return;
			this.props.onValueClick(option, event);
		}
	}, {
		key: 'handleMenuScroll',
		value: function handleMenuScroll(event) {
			if (!this.props.onMenuScrollToBottom) return;
			var target = event.target;

			if (target.scrollHeight > target.offsetHeight && target.scrollHeight - target.offsetHeight - target.scrollTop <= 0) {
				this.props.onMenuScrollToBottom();
			}
		}
	}, {
		key: 'handleRequired',
		value: function handleRequired(value, multi) {
			if (!value) return true;
			return multi ? value.length === 0 : Object.keys(value).length === 0;
		}
	}, {
		key: 'getOptionLabel',
		value: function getOptionLabel(op) {
			return op[this.props.labelKey];
		}

		/**
   * Turns a value into an array from the given options
   * @param	{String|Number|Array}	value		- the value of the select input
   * @param	{Object}		nextProps	- optionally specify the nextProps so the returned array uses the latest configuration
   * @returns	{Array}	the value of the select represented in an array
   */

	}, {
		key: 'getValueArray',
		value: function getValueArray(value, nextProps) {
			var _this2 = this;

			/** support optionally passing in the `nextProps` so `componentWillReceiveProps` updates will function as expected */
			var props = (typeof nextProps === 'undefined' ? 'undefined' : _typeof(nextProps)) === 'object' ? nextProps : this.props;
			if (props.multi) {
				if (typeof value === 'string') value = value.split(props.delimiter);
				if (!Array.isArray(value)) {
					if (value === null || value === undefined) return [];
					value = [value];
				}
				return value.map(function (value) {
					return _this2.expandValue(value, props);
				}).filter(function (i) {
					return i;
				});
			}
			var expandedValue = this.expandValue(value, props);
			return expandedValue ? [expandedValue] : [];
		}

		/**
   * Retrieve a value from the given options and valueKey
   * @param	{String|Number|Array}	value	- the selected value(s)
   * @param	{Object}		props	- the Select component's props (or nextProps)
   */

	}, {
		key: 'expandValue',
		value: function expandValue(value, props) {
			var valueType = typeof value === 'undefined' ? 'undefined' : _typeof(value);
			if (valueType !== 'string' && valueType !== 'number' && valueType !== 'boolean') return value;
			var options = props.options,
			    valueKey = props.valueKey;

			if (!options) return;
			for (var i = 0; i < options.length; i++) {
				if (options[i][valueKey] === value) return options[i];
			}
		}
	}, {
		key: 'setValue',
		value: function setValue(value) {
			var _this3 = this;

			if (this.props.autoBlur) {
				this.blurInput();
			}
			if (this.props.required) {
				var required = this.handleRequired(value, this.props.multi);
				this.setState({ required: required });
			}
			if (this.props.onChange) {
				if (this.props.simpleValue && value) {
					value = this.props.multi ? value.map(function (i) {
						return i[_this3.props.valueKey];
					}).join(this.props.delimiter) : value[this.props.valueKey];
				}
				this.props.onChange(value);
			}
		}
	}, {
		key: 'selectValue',
		value: function selectValue(value) {
			var _this4 = this;

			// NOTE: we actually add/set the value in a callback to make sure the
			// input value is empty to avoid styling issues in Chrome
			if (this.props.closeOnSelect) {
				this.hasScrolledToOption = false;
			}
			if (this.props.multi) {
				var updatedValue = this.props.onSelectResetsInput ? '' : this.state.inputValue;
				this.setState({
					focusedIndex: null,
					inputValue: this.handleInputValueChange(updatedValue),
					isOpen: !this.props.closeOnSelect
				}, function () {
					_this4.addValue(value);
				});
			} else {
				this.setState({
					inputValue: this.handleInputValueChange(''),
					isOpen: !this.props.closeOnSelect,
					isPseudoFocused: this.state.isFocused
				}, function () {
					_this4.setValue(value);
				});
			}
		}
	}, {
		key: 'addValue',
		value: function addValue(value) {
			var valueArray = this.getValueArray(this.props.value);
			var visibleOptions = this._visibleOptions.filter(function (val) {
				return !val.disabled;
			});
			var lastValueIndex = visibleOptions.indexOf(value);
			this.setValue(valueArray.concat(value));
			if (visibleOptions.length - 1 === lastValueIndex) {
				// the last option was selected; focus the second-last one
				this.focusOption(visibleOptions[lastValueIndex - 1]);
			} else if (visibleOptions.length > lastValueIndex) {
				// focus the option below the selected one
				this.focusOption(visibleOptions[lastValueIndex + 1]);
			}
		}
	}, {
		key: 'popValue',
		value: function popValue() {
			var valueArray = this.getValueArray(this.props.value);
			if (!valueArray.length) return;
			if (valueArray[valueArray.length - 1].clearableValue === false) return;
			this.setValue(this.props.multi ? valueArray.slice(0, valueArray.length - 1) : null);
		}
	}, {
		key: 'removeValue',
		value: function removeValue(value) {
			var valueArray = this.getValueArray(this.props.value);
			this.setValue(valueArray.filter(function (i) {
				return i !== value;
			}));
			this.focus();
		}
	}, {
		key: 'clearValue',
		value: function clearValue(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, ignore it.
			if (event && event.type === 'mousedown' && event.button !== 0) {
				return;
			}
			event.stopPropagation();
			event.preventDefault();
			this.setValue(this.getResetValue());
			this.setState({
				isOpen: false,
				inputValue: this.handleInputValueChange('')
			}, this.focus);
		}
	}, {
		key: 'getResetValue',
		value: function getResetValue() {
			if (this.props.resetValue !== undefined) {
				return this.props.resetValue;
			} else if (this.props.multi) {
				return [];
			} else {
				return null;
			}
		}
	}, {
		key: 'focusOption',
		value: function focusOption(option) {
			this.setState({
				focusedOption: option
			});
		}
	}, {
		key: 'focusNextOption',
		value: function focusNextOption() {
			this.focusAdjacentOption('next');
		}
	}, {
		key: 'focusPreviousOption',
		value: function focusPreviousOption() {
			this.focusAdjacentOption('previous');
		}
	}, {
		key: 'focusPageUpOption',
		value: function focusPageUpOption() {
			this.focusAdjacentOption('page_up');
		}
	}, {
		key: 'focusPageDownOption',
		value: function focusPageDownOption() {
			this.focusAdjacentOption('page_down');
		}
	}, {
		key: 'focusStartOption',
		value: function focusStartOption() {
			this.focusAdjacentOption('start');
		}
	}, {
		key: 'focusEndOption',
		value: function focusEndOption() {
			this.focusAdjacentOption('end');
		}
	}, {
		key: 'focusAdjacentOption',
		value: function focusAdjacentOption(dir) {
			var options = this._visibleOptions.map(function (option, index) {
				return { option: option, index: index };
			}).filter(function (option) {
				return !option.option.disabled;
			});
			this._scrollToFocusedOptionOnUpdate = true;
			if (!this.state.isOpen) {
				this.setState({
					isOpen: true,
					inputValue: '',
					focusedOption: this._focusedOption || (options.length ? options[dir === 'next' ? 0 : options.length - 1].option : null)
				});
				return;
			}
			if (!options.length) return;
			var focusedIndex = -1;
			for (var i = 0; i < options.length; i++) {
				if (this._focusedOption === options[i].option) {
					focusedIndex = i;
					break;
				}
			}
			if (dir === 'next' && focusedIndex !== -1) {
				focusedIndex = (focusedIndex + 1) % options.length;
			} else if (dir === 'previous') {
				if (focusedIndex > 0) {
					focusedIndex = focusedIndex - 1;
				} else {
					focusedIndex = options.length - 1;
				}
			} else if (dir === 'start') {
				focusedIndex = 0;
			} else if (dir === 'end') {
				focusedIndex = options.length - 1;
			} else if (dir === 'page_up') {
				var potentialIndex = focusedIndex - this.props.pageSize;
				if (potentialIndex < 0) {
					focusedIndex = 0;
				} else {
					focusedIndex = potentialIndex;
				}
			} else if (dir === 'page_down') {
				var potentialIndex = focusedIndex + this.props.pageSize;
				if (potentialIndex > options.length - 1) {
					focusedIndex = options.length - 1;
				} else {
					focusedIndex = potentialIndex;
				}
			}

			if (focusedIndex === -1) {
				focusedIndex = 0;
			}

			this.setState({
				focusedIndex: options[focusedIndex].index,
				focusedOption: options[focusedIndex].option
			});
		}
	}, {
		key: 'getFocusedOption',
		value: function getFocusedOption() {
			return this._focusedOption;
		}
	}, {
		key: 'getInputValue',
		value: function getInputValue() {
			return this.state.inputValue;
		}
	}, {
		key: 'selectFocusedOption',
		value: function selectFocusedOption() {
			if (this._focusedOption) {
				return this.selectValue(this._focusedOption);
			}
		}
	}, {
		key: 'renderLoading',
		value: function renderLoading() {
			if (!this.props.isLoading) return;
			return _react2.default.createElement(
				'span',
				{ className: 'Select-loading-zone', 'aria-hidden': 'true' },
				_react2.default.createElement('span', { className: 'Select-loading' })
			);
		}
	}, {
		key: 'renderValue',
		value: function renderValue(valueArray, isOpen) {
			var _this5 = this;

			var renderLabel = this.props.valueRenderer || this.getOptionLabel;
			var ValueComponent = this.props.valueComponent;
			if (!valueArray.length) {
				return !this.state.inputValue ? _react2.default.createElement(
					'div',
					{ className: 'Select-placeholder' },
					this.props.placeholder
				) : null;
			}
			var onClick = this.props.onValueClick ? this.handleValueClick : null;
			if (this.props.multi) {
				return valueArray.map(function (value, i) {
					return _react2.default.createElement(
						ValueComponent,
						{
							id: _this5._instancePrefix + '-value-' + i,
							instancePrefix: _this5._instancePrefix,
							disabled: _this5.props.disabled || value.clearableValue === false,
							key: 'value-' + i + '-' + value[_this5.props.valueKey],
							onClick: onClick,
							onRemove: _this5.removeValue,
							value: value
						},
						renderLabel(value, i),
						_react2.default.createElement(
							'span',
							{ className: 'Select-aria-only' },
							'\xA0'
						)
					);
				});
			} else if (!this.state.inputValue) {
				if (isOpen) onClick = null;
				return _react2.default.createElement(
					ValueComponent,
					{
						id: this._instancePrefix + '-value-item',
						disabled: this.props.disabled,
						instancePrefix: this._instancePrefix,
						onClick: onClick,
						value: valueArray[0]
					},
					renderLabel(valueArray[0])
				);
			}
		}
	}, {
		key: 'renderInput',
		value: function renderInput(valueArray, focusedOptionIndex) {
			var _classNames,
			    _this6 = this;

			var className = (0, _classnames2.default)('Select-input', this.props.inputProps.className);
			var isOpen = !!this.state.isOpen;

			var ariaOwns = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, this._instancePrefix + '-list', isOpen), _defineProperty(_classNames, this._instancePrefix + '-backspace-remove-message', this.props.multi && !this.props.disabled && this.state.isFocused && !this.state.inputValue), _classNames));

			var inputProps = _extends({}, this.props.inputProps, {
				role: 'combobox',
				'aria-expanded': '' + isOpen,
				'aria-owns': ariaOwns,
				'aria-haspopup': '' + isOpen,
				'aria-activedescendant': isOpen ? this._instancePrefix + '-option-' + focusedOptionIndex : this._instancePrefix + '-value',
				'aria-describedby': this.props['aria-describedby'],
				'aria-labelledby': this.props['aria-labelledby'],
				'aria-label': this.props['aria-label'],
				className: className,
				tabIndex: this.props.tabIndex,
				onBlur: this.handleInputBlur,
				onChange: this.handleInputChange,
				onFocus: this.handleInputFocus,
				ref: function ref(_ref) {
					return _this6.input = _ref;
				},
				required: this.state.required,
				value: this.state.inputValue
			});

			if (this.props.inputRenderer) {
				return this.props.inputRenderer(inputProps);
			}

			if (this.props.disabled || !this.props.searchable) {
				var _props$inputProps = this.props.inputProps,
				    inputClassName = _props$inputProps.inputClassName,
				    divProps = _objectWithoutProperties(_props$inputProps, ['inputClassName']);

				var _ariaOwns = (0, _classnames2.default)(_defineProperty({}, this._instancePrefix + '-list', isOpen));

				return _react2.default.createElement('div', _extends({}, divProps, {
					role: 'combobox',
					'aria-expanded': isOpen,
					'aria-owns': _ariaOwns,
					'aria-activedescendant': isOpen ? this._instancePrefix + '-option-' + focusedOptionIndex : this._instancePrefix + '-value',
					className: className,
					tabIndex: this.props.tabIndex || 0,
					onBlur: this.handleInputBlur,
					onFocus: this.handleInputFocus,
					ref: function ref(_ref2) {
						return _this6.input = _ref2;
					},
					'aria-readonly': '' + !!this.props.disabled,
					style: { border: 0, width: 1, display: 'inline-block' } }));
			}

			if (this.props.autosize) {
				return _react2.default.createElement(_reactInputAutosize2.default, _extends({}, inputProps, { minWidth: '5' }));
			}
			return _react2.default.createElement(
				'div',
				{ className: className },
				_react2.default.createElement('input', inputProps)
			);
		}
	}, {
		key: 'renderClear',
		value: function renderClear() {
			if (!this.props.clearable || this.props.value === undefined || this.props.value === null || this.props.multi && !this.props.value.length || this.props.disabled || this.props.isLoading) return;
			var clear = this.props.clearRenderer();

			return _react2.default.createElement(
				'span',
				{ className: 'Select-clear-zone', title: this.props.multi ? this.props.clearAllText : this.props.clearValueText,
					'aria-label': this.props.multi ? this.props.clearAllText : this.props.clearValueText,
					onMouseDown: this.clearValue,
					onTouchStart: this.handleTouchStart,
					onTouchMove: this.handleTouchMove,
					onTouchEnd: this.handleTouchEndClearValue
				},
				clear
			);
		}
	}, {
		key: 'renderArrow',
		value: function renderArrow() {
			var onMouseDown = this.handleMouseDownOnArrow;
			var isOpen = this.state.isOpen;
			var arrow = this.props.arrowRenderer({ onMouseDown: onMouseDown, isOpen: isOpen });

			return _react2.default.createElement(
				'span',
				{
					className: 'Select-arrow-zone',
					onMouseDown: onMouseDown
				},
				arrow
			);
		}
	}, {
		key: 'filterOptions',
		value: function filterOptions(excludeOptions) {
			var filterValue = this.state.inputValue;
			var options = this.props.options || [];
			if (this.props.filterOptions) {
				// Maintain backwards compatibility with boolean attribute
				var filterOptions = typeof this.props.filterOptions === 'function' ? this.props.filterOptions : _defaultFilterOptions2.default;

				return filterOptions(options, filterValue, excludeOptions, {
					filterOption: this.props.filterOption,
					ignoreAccents: this.props.ignoreAccents,
					ignoreCase: this.props.ignoreCase,
					labelKey: this.props.labelKey,
					matchPos: this.props.matchPos,
					matchProp: this.props.matchProp,
					valueKey: this.props.valueKey
				});
			} else {
				return options;
			}
		}
	}, {
		key: 'onOptionRef',
		value: function onOptionRef(ref, isFocused) {
			if (isFocused) {
				this.focused = ref;
			}
		}
	}, {
		key: 'renderMenu',
		value: function renderMenu(options, valueArray, focusedOption) {
			if (options && options.length) {
				return this.props.menuRenderer({
					focusedOption: focusedOption,
					focusOption: this.focusOption,
					instancePrefix: this._instancePrefix,
					labelKey: this.props.labelKey,
					onFocus: this.focusOption,
					onSelect: this.selectValue,
					optionClassName: this.props.optionClassName,
					optionComponent: this.props.optionComponent,
					optionRenderer: this.props.optionRenderer || this.getOptionLabel,
					options: options,
					selectValue: this.selectValue,
					valueArray: valueArray,
					valueKey: this.props.valueKey,
					onOptionRef: this.onOptionRef
				});
			} else if (this.props.noResultsText) {
				return _react2.default.createElement(
					'div',
					{ className: 'Select-noresults' },
					this.props.noResultsText
				);
			} else {
				return null;
			}
		}
	}, {
		key: 'renderHiddenField',
		value: function renderHiddenField(valueArray) {
			var _this7 = this;

			if (!this.props.name) return;
			if (this.props.joinValues) {
				var value = valueArray.map(function (i) {
					return stringifyValue(i[_this7.props.valueKey]);
				}).join(this.props.delimiter);
				return _react2.default.createElement('input', {
					type: 'hidden',
					ref: function ref(_ref3) {
						return _this7.value = _ref3;
					},
					name: this.props.name,
					value: value,
					disabled: this.props.disabled });
			}
			return valueArray.map(function (item, index) {
				return _react2.default.createElement('input', { key: 'hidden.' + index,
					type: 'hidden',
					ref: 'value' + index,
					name: _this7.props.name,
					value: stringifyValue(item[_this7.props.valueKey]),
					disabled: _this7.props.disabled });
			});
		}
	}, {
		key: 'getFocusableOptionIndex',
		value: function getFocusableOptionIndex(selectedOption) {
			var options = this._visibleOptions;
			if (!options.length) return null;

			var valueKey = this.props.valueKey;
			var focusedOption = this.state.focusedOption || selectedOption;
			if (focusedOption && !focusedOption.disabled) {
				var focusedOptionIndex = -1;
				options.some(function (option, index) {
					var isOptionEqual = option[valueKey] === focusedOption[valueKey];
					if (isOptionEqual) {
						focusedOptionIndex = index;
					}
					return isOptionEqual;
				});
				if (focusedOptionIndex !== -1) {
					return focusedOptionIndex;
				}
			}

			for (var i = 0; i < options.length; i++) {
				if (!options[i].disabled) return i;
			}
			return null;
		}
	}, {
		key: 'renderOuter',
		value: function renderOuter(options, valueArray, focusedOption) {
			var _this8 = this;

			var menu = this.renderMenu(options, valueArray, focusedOption);
			if (!menu) {
				return null;
			}

			return _react2.default.createElement(
				'div',
				{ ref: function ref(_ref5) {
						return _this8.menuContainer = _ref5;
					}, className: 'Select-menu-outer', style: this.props.menuContainerStyle },
				_react2.default.createElement(
					'div',
					{ ref: function ref(_ref4) {
							return _this8.menu = _ref4;
						}, role: 'listbox', tabIndex: -1, className: 'Select-menu', id: this._instancePrefix + '-list',
						style: this.props.menuStyle,
						onScroll: this.handleMenuScroll,
						onMouseDown: this.handleMouseDownOnMenu },
					menu
				)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this9 = this;

			var valueArray = this.getValueArray(this.props.value);
			var options = this._visibleOptions = this.filterOptions(this.props.multi ? this.getValueArray(this.props.value) : null);
			var isOpen = this.state.isOpen;
			if (this.props.multi && !options.length && valueArray.length && !this.state.inputValue) isOpen = false;
			var focusedOptionIndex = this.getFocusableOptionIndex(valueArray[0]);

			var focusedOption = null;
			if (focusedOptionIndex !== null) {
				focusedOption = this._focusedOption = options[focusedOptionIndex];
			} else {
				focusedOption = this._focusedOption = null;
			}
			var className = (0, _classnames2.default)('Select', this.props.className, {
				'Select--multi': this.props.multi,
				'Select--single': !this.props.multi,
				'is-clearable': this.props.clearable,
				'is-disabled': this.props.disabled,
				'is-focused': this.state.isFocused,
				'is-loading': this.props.isLoading,
				'is-open': isOpen,
				'is-pseudo-focused': this.state.isPseudoFocused,
				'is-searchable': this.props.searchable,
				'has-value': valueArray.length
			});

			var removeMessage = null;
			if (this.props.multi && !this.props.disabled && valueArray.length && !this.state.inputValue && this.state.isFocused && this.props.backspaceRemoves) {
				removeMessage = _react2.default.createElement(
					'span',
					{ id: this._instancePrefix + '-backspace-remove-message', className: 'Select-aria-only', 'aria-live': 'assertive' },
					this.props.backspaceToRemoveMessage.replace('{label}', valueArray[valueArray.length - 1][this.props.labelKey])
				);
			}

			return _react2.default.createElement(
				'div',
				{ ref: function ref(_ref7) {
						return _this9.wrapper = _ref7;
					},
					className: className,
					style: this.props.wrapperStyle },
				this.renderHiddenField(valueArray),
				_react2.default.createElement(
					'div',
					{ ref: function ref(_ref6) {
							return _this9.control = _ref6;
						},
						className: 'Select-control',
						style: this.props.style,
						onKeyDown: this.handleKeyDown,
						onMouseDown: this.handleMouseDown,
						onTouchEnd: this.handleTouchEnd,
						onTouchStart: this.handleTouchStart,
						onTouchMove: this.handleTouchMove
					},
					_react2.default.createElement(
						'span',
						{ className: 'Select-multi-value-wrapper', id: this._instancePrefix + '-value' },
						this.renderValue(valueArray, isOpen),
						this.renderInput(valueArray, focusedOptionIndex)
					),
					removeMessage,
					this.renderLoading(),
					this.renderClear(),
					this.renderArrow()
				),
				isOpen ? this.renderOuter(options, !this.props.multi ? valueArray : null, focusedOption) : null
			);
		}
	}]);

	return Select;
}(_react2.default.Component);

;

Select.propTypes = {
	'aria-describedby': _propTypes2.default.string, // HTML ID(s) of element(s) that should be used to describe this input (for assistive tech)
	'aria-label': _propTypes2.default.string, // Aria label (for assistive tech)
	'aria-labelledby': _propTypes2.default.string, // HTML ID of an element that should be used as the label (for assistive tech)
	addLabelText: _propTypes2.default.string, // placeholder displayed when you want to add a label on a multi-value input
	arrowRenderer: _propTypes2.default.func, // Create drop-down caret element
	autoBlur: _propTypes2.default.bool, // automatically blur the component when an option is selected
	autofocus: _propTypes2.default.bool, // autofocus the component on mount
	autosize: _propTypes2.default.bool, // whether to enable autosizing or not
	backspaceRemoves: _propTypes2.default.bool, // whether backspace removes an item if there is no text input
	backspaceToRemoveMessage: _propTypes2.default.string, // Message to use for screenreaders to press backspace to remove the current item - {label} is replaced with the item label
	className: _propTypes2.default.string, // className for the outer element
	clearAllText: stringOrNode, // title for the "clear" control when multi: true
	clearRenderer: _propTypes2.default.func, // create clearable x element
	clearValueText: stringOrNode, // title for the "clear" control
	clearable: _propTypes2.default.bool, // should it be possible to reset value
	closeOnSelect: _propTypes2.default.bool, // whether to close the menu when a value is selected
	deleteRemoves: _propTypes2.default.bool, // whether backspace removes an item if there is no text input
	delimiter: _propTypes2.default.string, // delimiter to use to join multiple values for the hidden field value
	disabled: _propTypes2.default.bool, // whether the Select is disabled or not
	escapeClearsValue: _propTypes2.default.bool, // whether escape clears the value when the menu is closed
	filterOption: _propTypes2.default.func, // method to filter a single option (option, filterString)
	filterOptions: _propTypes2.default.any, // boolean to enable default filtering or function to filter the options array ([options], filterString, [values])
	ignoreAccents: _propTypes2.default.bool, // whether to strip diacritics when filtering
	ignoreCase: _propTypes2.default.bool, // whether to perform case-insensitive filtering
	inputProps: _propTypes2.default.object, // custom attributes for the Input
	inputRenderer: _propTypes2.default.func, // returns a custom input component
	instanceId: _propTypes2.default.string, // set the components instanceId
	isLoading: _propTypes2.default.bool, // whether the Select is loading externally or not (such as options being loaded)
	joinValues: _propTypes2.default.bool, // joins multiple values into a single form field with the delimiter (legacy mode)
	labelKey: _propTypes2.default.string, // path of the label value in option objects
	matchPos: _propTypes2.default.string, // (any|start) match the start or entire string when filtering
	matchProp: _propTypes2.default.string, // (any|label|value) which option property to filter on
	menuBuffer: _propTypes2.default.number, // optional buffer (in px) between the bottom of the viewport and the bottom of the menu
	menuContainerStyle: _propTypes2.default.object, // optional style to apply to the menu container
	menuRenderer: _propTypes2.default.func, // renders a custom menu with options
	menuStyle: _propTypes2.default.object, // optional style to apply to the menu
	multi: _propTypes2.default.bool, // multi-value input
	name: _propTypes2.default.string, // generates a hidden <input /> tag with this field name for html forms
	noResultsText: stringOrNode, // placeholder displayed when there are no matching search results
	onBlur: _propTypes2.default.func, // onBlur handler: function (event) {}
	onBlurResetsInput: _propTypes2.default.bool, // whether input is cleared on blur
	onChange: _propTypes2.default.func, // onChange handler: function (newValue) {}
	onClose: _propTypes2.default.func, // fires when the menu is closed
	onCloseResetsInput: _propTypes2.default.bool, // whether input is cleared when menu is closed through the arrow
	onFocus: _propTypes2.default.func, // onFocus handler: function (event) {}
	onInputChange: _propTypes2.default.func, // onInputChange handler: function (inputValue) {}
	onInputKeyDown: _propTypes2.default.func, // input keyDown handler: function (event) {}
	onMenuScrollToBottom: _propTypes2.default.func, // fires when the menu is scrolled to the bottom; can be used to paginate options
	onOpen: _propTypes2.default.func, // fires when the menu is opened
	onSelectResetsInput: _propTypes2.default.bool, // whether input is cleared on select (works only for multiselect)
	onValueClick: _propTypes2.default.func, // onClick handler for value labels: function (value, event) {}
	openOnClick: _propTypes2.default.bool, // boolean to control opening the menu when the control is clicked
	openOnFocus: _propTypes2.default.bool, // always open options menu on focus
	optionClassName: _propTypes2.default.string, // additional class(es) to apply to the <Option /> elements
	optionComponent: _propTypes2.default.func, // option component to render in dropdown
	optionRenderer: _propTypes2.default.func, // optionRenderer: function (option) {}
	options: _propTypes2.default.array, // array of options
	pageSize: _propTypes2.default.number, // number of entries to page when using page up/down keys
	placeholder: stringOrNode, // field placeholder, displayed when there's no value
	required: _propTypes2.default.bool, // applies HTML5 required attribute when needed
	resetValue: _propTypes2.default.any, // value to use when you clear the control
	scrollMenuIntoView: _propTypes2.default.bool, // boolean to enable the viewport to shift so that the full menu fully visible when engaged
	searchable: _propTypes2.default.bool, // whether to enable searching feature or not
	simpleValue: _propTypes2.default.bool, // pass the value to onChange as a simple value (legacy pre 1.0 mode), defaults to false
	style: _propTypes2.default.object, // optional style to apply to the control
	tabIndex: _propTypes2.default.string, // optional tab index of the control
	tabSelectsValue: _propTypes2.default.bool, // whether to treat tabbing out while focused to be value selection
	value: _propTypes2.default.any, // initial field value
	valueComponent: _propTypes2.default.func, // value component to render
	valueKey: _propTypes2.default.string, // path of the label value in option objects
	valueRenderer: _propTypes2.default.func, // valueRenderer: function (option) {}
	wrapperStyle: _propTypes2.default.object // optional style to apply to the component wrapper
};

Select.defaultProps = {
	addLabelText: 'Add "{label}"?',
	arrowRenderer: _defaultArrowRenderer2.default,
	autosize: true,
	backspaceRemoves: true,
	backspaceToRemoveMessage: 'Press backspace to remove {label}',
	clearable: true,
	clearAllText: 'Clear all',
	clearRenderer: _defaultClearRenderer2.default,
	clearValueText: 'Clear value',
	closeOnSelect: true,
	deleteRemoves: true,
	delimiter: ',',
	disabled: false,
	escapeClearsValue: true,
	filterOptions: _defaultFilterOptions2.default,
	ignoreAccents: true,
	ignoreCase: true,
	inputProps: {},
	isLoading: false,
	joinValues: false,
	labelKey: 'label',
	matchPos: 'any',
	matchProp: 'any',
	menuBuffer: 0,
	menuRenderer: _defaultMenuRenderer2.default,
	multi: false,
	noResultsText: 'No results found',
	onBlurResetsInput: true,
	onSelectResetsInput: true,
	onCloseResetsInput: true,
	openOnClick: true,
	optionComponent: _Option2.default,
	pageSize: 5,
	placeholder: 'Select...',
	required: false,
	scrollMenuIntoView: true,
	searchable: true,
	simpleValue: false,
	tabSelectsValue: true,
	valueComponent: _Value2.default,
	valueKey: 'value'
};

exports.default = Select;

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return validations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return validationsMessages; });
/* unused harmony export testValidation */
/* harmony export (immutable) */ __webpack_exports__["a"] = validationsAvailable;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return testElement; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validationRegExps__ = __webpack_require__(46);


var validations = {
    required: function (value, test, type) {
        if (__WEBPACK_IMPORTED_MODULE_0_immutable__["Iterable"].isIterable(value)) {
            if (type === 'checkbox') {
                return value.size > 0;
            }
        }
        else if (type === "checkbox") {
            return value === true;
        }
        return value.toString().length > 0 && value !== false;
    },
    pattern: function (value, test) {
        if (value !== undefined && value !== null && (value + "").length > 0) {
            var patternRegExp = new RegExp(test);
            return patternRegExp.test(value);
        }
        return true;
    },
    type: function (value, test) {
        if (test === 'number' || test === 'email') {
            var typeRegExp = new RegExp(__WEBPACK_IMPORTED_MODULE_1__validationRegExps__["a" /* default */][test]);
            return typeRegExp.test(value);
        }
        return true;
    },
    minLength: function (value, test) {
        return value.toString().length >= parseInt(test);
    },
    maxLength: function (value, test) {
        return value.toString().length <= parseInt(test);
    },
    min: function (value, test) {
        return parseInt(value) >= parseInt(test);
    },
    max: function (value, test) {
        return parseInt(value) <= parseInt(test);
    },
    'default': function () {
        return false;
    }
};
var validationsMessages = function (type, test) {
    switch (type) {
        case "required":
            return "This is a required field.";
        case "minLength":
            return "This is too short, it must have at least " + test + " characters.";
        case "maxLength":
            return "This is too long, it cannot have more then " + test + " characters.";
        case "min":
            return "This must be at least " + test + ".";
        case "max":
            return "This must not be greater than " + test + ".";
        case "type":
            return "That's not a valid " + test + ".";
        default:
            return '';
    }
};
function testValidation(value, typeOfTest, typeOfInput, test) {
    if (value !== undefined && value !== null) {
        if (validations[typeOfTest] !== undefined) {
            if (typeOfTest === 'required') {
                return validations[typeOfTest](value, test, typeOfInput);
            }
            else {
                return validations[typeOfTest](value, test);
            }
        }
        else {
            return validations['default']();
        }
    }
    return validations['default']();
}
function validationsAvailable(inputAttributes) {
    var validationsAvail = Object.keys(validations);
    return validationsAvail.filter(function (validation) { return inputAttributes.hasOwnProperty(validation) && validation !== 'default'; });
}
var testElement = function (_a) {
    var value = _a.value, test = _a.test, isFor = _a.isFor, type = _a.type, setValid = _a.setValid;
    if (test === false || test === 'false') {
        return setValid(true);
    }
    else if (isFor !== 'customValidation' && typeof test !== "function") {
        return setValid(testValidation(value, isFor, type, test));
    }
    else {
        if (typeof test === "function") {
            var customValidation = test(value);
            if (typeof customValidation === "boolean" || customValidation === "undefined") {
                return setValid(!!customValidation);
            }
            else if (customValidation instanceof Promise) {
                customValidation.then(function (res) { return setValid(!!res); }).catch(function (res) { return setValid(!!res); });
                return setValid(true);
            }
            else {
                return console.error("Custom validation functions must return a bool, undefined or a promise");
            }
        }
        return setValid(false);
    }
};


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SET_INPUT */
/* unused harmony export SET_VALIDATION */
/* unused harmony export SET_INPUT_INTERACTION */
/* unused harmony export SET_ALL_INPUT_INTERACTIONS */
/* unused harmony export CLEAR_ALL_INPUTS */
/* harmony export (immutable) */ __webpack_exports__["c"] = setInput;
/* harmony export (immutable) */ __webpack_exports__["b"] = setValidation;
/* harmony export (immutable) */ __webpack_exports__["d"] = setInputInteraction;
/* harmony export (immutable) */ __webpack_exports__["e"] = setAllInputInteractions;
/* harmony export (immutable) */ __webpack_exports__["a"] = clearAllInputs;
/* unused harmony export setDefaultValue */
/** Constants */
var SET_INPUT = 'SET_INPUT';
var SET_VALIDATION = 'SET_VALIDATION';
var SET_INPUT_INTERACTION = 'SET_INPUT_INTERACTION';
var SET_ALL_INPUT_INTERACTIONS = 'SET_ALL_INPUT_INTERACTIONS';
var CLEAR_ALL_INPUTS = 'CLEAR_ALL_INPUTS';
function setInput(nameSpace, inputName, value) {
    return {
        type: SET_INPUT,
        payload: {
            nameSpace: nameSpace,
            inputName: inputName,
            value: value
        }
    };
}
function setValidation(nameSpace, inputName, type, test) {
    return {
        type: SET_VALIDATION,
        payload: {
            nameSpace: nameSpace,
            inputName: inputName,
            type: type,
            test: test
        }
    };
}
function setInputInteraction(nameSpace, inputName, interaction, value) {
    return {
        type: SET_INPUT_INTERACTION,
        payload: {
            nameSpace: nameSpace,
            inputName: inputName,
            interaction: interaction,
            value: value,
        }
    };
}
function setAllInputInteractions(nameSpace, interaction, value) {
    return {
        type: SET_ALL_INPUT_INTERACTIONS,
        payload: {
            nameSpace: nameSpace,
            interaction: interaction,
            value: value
        }
    };
}
function clearAllInputs(nameSpace) {
    return {
        type: CLEAR_ALL_INPUTS,
        payload: {
            nameSpace: nameSpace
        }
    };
}
function setDefaultValue(nameSpace, inputName, value) {
    return function (dispatch, getState) {
        var currentValue = getState().getIn(['FormState', nameSpace, inputName, 'value'], false);
        if (!currentValue) {
            dispatch(setInput(nameSpace, inputName, value));
        }
    };
}


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/** Libraries */


/** Class ErrorWrapper */
var ErrorWrapper = /** @class */ (function (_super) {
    __extends(ErrorWrapper, _super);
    function ErrorWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ErrorWrapper.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, type = _a.type, children = _a.children;
        var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(className, {
            'input-hidden': type === 'hidden'
        });
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: classes, style: style }, children));
    };
    return ErrorWrapper;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));
/* harmony default export */ __webpack_exports__["a"] = (ErrorWrapper);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return convertToFormData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return normalizeFields; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__inputHelpers__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_immutable__);


var convertToFormData = function (formMap) {
    var formData = new FormData();
    if (__WEBPACK_IMPORTED_MODULE_1_immutable__["Iterable"].isIterable(formMap)) {
        formMap.forEach(function (value, key) {
            if (__WEBPACK_IMPORTED_MODULE_1_immutable__["Iterable"].isIterable(value) && value.size === 1 && value.first() instanceof File) {
                formData.append(key, value.first());
            }
            else if (__WEBPACK_IMPORTED_MODULE_1_immutable__["Map"].isMap(value)) {
                value.map(function (innerVal, index) {
                    if (innerVal !== null) {
                        formData.append(key + ("." + index), innerVal);
                    }
                });
            }
            else if (__WEBPACK_IMPORTED_MODULE_1_immutable__["List"].isList(value)) {
                value.map(function (innerVal, index) {
                    if (innerVal !== null) {
                        formData.append(key + ("[" + index + "]"), innerVal);
                    }
                });
            }
            else {
                if (value !== null) {
                    formData.append(key, value);
                }
            }
        });
        return formData;
    }
    throw new Error("convertToFormData requires a Immutable Iterable object");
};
var normalizeFields = function (fields) {
    return fields.map(function (input, inputName) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__inputHelpers__["a" /* isMultipleValueInput */])(inputName)) {
            return input.map(function (innerInput) {
                return innerInput.get('value');
            });
        }
        return input.get('value');
    });
};


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return basicReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return withReducerState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Helpers_path__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Helpers_inputHelpers__ = __webpack_require__(5);
/** Libraries */

/** Helpers */


var basicReducer = {
    SET_INPUT: function (state, _a) {
        var payload = _a.payload;
        var valuePath = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Helpers_path__["a" /* getInputValue */])(payload.nameSpace, payload.inputName);
        return state.setIn(valuePath, payload.value);
    },
    SET_VALIDATION: function (state, _a) {
        var payload = _a.payload;
        var validationPath = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Helpers_path__["b" /* getInputValidation */])(payload.nameSpace, payload.inputName);
        return state.updateIn(validationPath, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])(), function (validationMap) {
            return validationMap.set(payload.type, payload.test);
        });
    },
    SET_INPUT_INTERACTION: function (state, _a) {
        var payload = _a.payload;
        var interactionPath = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Helpers_path__["c" /* getInputState */])(payload.nameSpace, payload.inputName, payload.interaction);
        return state.setIn(interactionPath, payload.value);
    },
    SET_ALL_INPUT_INTERACTIONS: function (state, _a) {
        var payload = _a.payload;
        var inputs = state.get(payload.nameSpace, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({}));
        if (inputs.size && inputs.size === 0) {
            return state;
        }
        var updatedFields = inputs.map(function (input, key) {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Helpers_inputHelpers__["a" /* isMultipleValueInput */])(key)) {
                return input.map(function (innerInput) {
                    return innerInput.setIn(["input", payload.interaction], payload.value);
                });
            }
            return input.set(payload.interaction, payload.value);
        });
        return state.set(payload.nameSpace, updatedFields);
    },
    CLEAR_ALL_INPUTS: function (state, _a) {
        var payload = _a.payload;
        return state.set(payload.nameSpace, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({}));
    }
};
var withReducerState = function (state, action) {
    if (state === void 0) { state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])(); }
    var reducerFunc = basicReducer[action.type];
    if (typeof reducerFunc === 'function') {
        return reducerFunc(state, action);
    }
    else {
        return state;
    }
};


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Input */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Form_InputGroup__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Form_InputWrapper__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Base__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Validation_DisplayValidation__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Form_Helpers_performanceWrapper__ = __webpack_require__(3);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
/** Libraries */


/** Components */





/** Class Input */
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Input.prototype.render = function () {
        var _a = this.props, className = _a.className, label = _a.label, labelPostfix = _a.labelPostfix, labelPrefix = _a.labelPrefix, prepend = _a.prepend, append = _a.append, props = __rest(_a, ["className", "label", "labelPostfix", "labelPrefix", "prepend", "append"]);
        var autoFocus = props.autoFocus, onChange = props.onChange, onBlur = props.onBlur, id = props.id, value = props.value, validationProps = __rest(props, ["autoFocus", "onChange", "onBlur", "id", "value"]);
        var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(className, 'input');
        if (props.type !== 'hidden') {
            return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Form_InputWrapper__["a" /* default */], { className: classes, type: props.type, name: props.name, labelPrefix: labelPrefix, labelPostfix: labelPostfix, label: label },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Form_InputGroup__["a" /* default */], { prepend: prepend, append: append },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Base__["a" /* default */], __assign({}, props))),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Validation_DisplayValidation__["a" /* default */], __assign({}, validationProps))));
        }
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Base__["a" /* default */], __assign({}, props));
    };
    return Input;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));

;
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Form_Helpers_performanceWrapper__["a" /* default */])(Input));


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Switch_Switch__ = __webpack_require__(22);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
/** Libraries */


/** Components */

/**
 * Class Radio
 * Creates a radio button connected to forms
 * state management. All HTML5 attributes apply.
 */
var Radio = /** @class */ (function (_super) {
    __extends(Radio, _super);
    function Radio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Radio.prototype.render = function () {
        var _a = this.props, className = _a.className, other = __rest(_a, ["className"]);
        var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(className, 'radio');
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Switch_Switch__["a" /* default */], __assign({ className: classes }, other, { type: "radio" })));
    };
    return Radio;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));
/* harmony default export */ __webpack_exports__["a"] = (Radio);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Form_Helpers_createSpecificShallowEqual__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__libs_validate__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Form_Helpers_inputHelpers__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Validation_scss__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Validation_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Validation_scss__);
/** Libraries */





/** Helpers */


var specificShallowEqual = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Form_Helpers_createSpecificShallowEqual__["a" /* default */])('value', 'changed', 'type');
var specificShallowEqualDisplayed = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Form_Helpers_createSpecificShallowEqual__["a" /* default */])('displayed', 'className');
var specificShallowEqualTestElement = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Form_Helpers_createSpecificShallowEqual__["a" /* default */])("value", "typeOfValidation", "type");
var availableValidationsShallowEqual = __WEBPACK_IMPORTED_MODULE_4__Form_Helpers_createSpecificShallowEqual__["a" /* default */].apply(void 0, ["isFor", "test"].concat(Object.keys(__WEBPACK_IMPORTED_MODULE_5__libs_validate__["c" /* validations */])));
var Validation = function (_a) {
    var displayed = _a.displayed, className = _a.className, children = _a.children;
    var classes = __WEBPACK_IMPORTED_MODULE_3_classnames___default()('validation', className, {
        'invalid': displayed
    });
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: classes }, children);
};
var getValue = function (name, inputInfo) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Form_Helpers_inputHelpers__["a" /* isMultipleValueInput */])(name) && __WEBPACK_IMPORTED_MODULE_1_immutable__["Map"].isMap(inputInfo)) {
        return __WEBPACK_IMPORTED_MODULE_6__Form_Helpers_inputHelpers__["b" /* returnCheckedValue */].apply(void 0, [function (arg) { return typeof arg !== "undefined" && arg !== false; }].concat(inputInfo.map(function (item) { return item.get('value', false); }).toArray()));
    }
    else {
        return inputInfo.get('value') || false;
    }
};
/** Styles */

/** Class Validation */
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_recompose__["compose"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_recompose__["withProps"])(function (ownerProps) {
    var name = ownerProps.name, inputInfo = ownerProps.inputInfo, type = ownerProps.type;
    var changed = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Form_Helpers_inputHelpers__["a" /* isMultipleValueInput */])(name) ? inputInfo.some(function (item) { return item.get('changed', false); }) : inputInfo.get('changed', false);
    var value = getValue(name, inputInfo);
    return {
        changed: changed,
        value: value
    };
}), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_recompose__["shouldUpdate"])(function (currentProps, nextProps) {
    return !specificShallowEqual(currentProps, nextProps) || !availableValidationsShallowEqual(currentProps, nextProps);
}), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_recompose__["withState"])('valid', 'setValid', false), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_recompose__["withHandlers"])({
    testElement: function () { return __WEBPACK_IMPORTED_MODULE_5__libs_validate__["d" /* testElement */]; }
}), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_recompose__["lifecycle"])({
    componentWillMount: function () {
        var _a = this.props, testElement = _a.testElement, setValidation = _a.setValidation, value = _a.value, type = _a.type, isFor = _a.isFor, test = _a.test;
        setValidation(isFor, test);
        // value, test, isFor, type, setValid
        testElement(this.props);
    },
    componentWillReceiveProps: function (nextProps) {
        if (!specificShallowEqualTestElement(this.props, nextProps)) {
            nextProps.testElement(nextProps);
        }
        if (!availableValidationsShallowEqual(this.props, nextProps)) {
            nextProps.setValidation(nextProps.isFor, nextProps.test);
        }
    }
}), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_recompose__["mapProps"])(function (ownerProps) {
    var valid = ownerProps.valid, value = ownerProps.value, className = ownerProps.className, changed = ownerProps.changed, children = ownerProps.children, test = ownerProps.test;
    return {
        displayed: !valid && changed,
        className: className,
        children: children
    };
}), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_recompose__["shouldUpdate"])(function (currentProps, nextProps) {
    return !specificShallowEqualDisplayed(currentProps, nextProps);
}))(Validation));


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DateWrapper */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_onclickoutside__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_onclickoutside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_onclickoutside__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Form_InputWrapper__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Form_InputGroup__ = __webpack_require__(10);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/** Libraries */



/** Components */


/** Class DateWrapper */
var DateWrapper = /** @class */ (function (_super) {
    __extends(DateWrapper, _super);
    function DateWrapper(props) {
        var _this = _super.call(this, props) || this;
        _this.handleFocus = function (event) {
            event.preventDefault();
            _this.setState({ hidden: false });
        };
        _this.handleClickOutside = function () {
            _this.setState({ hidden: true });
        };
        _this.closeInput = function () {
            _this.setState({ hidden: true });
            _this.refs[_this.props.name].blur();
        };
        _this.state = {
            hidden: true
        };
        return _this;
    }
    DateWrapper.prototype.render = function () {
        var dateRangeClasses = __WEBPACK_IMPORTED_MODULE_1_classnames___default()({ hidden: this.state.hidden }, 'date-range-container');
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "date-range-wrapper" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Form_InputWrapper__["a" /* default */], { className: "input date-picker", name: this.props.name, labelPostfix: this.props.labelPostfix, label: this.props.label },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Form_InputGroup__["a" /* default */], { prepend: this.props.prepend, append: this.props.append },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { onFocus: this.handleFocus, placeholder: this.props.placeholder, value: this.props.valueString, ref: this.props.name, readOnly: true }))),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: dateRangeClasses }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(this.props.children, {
                close: this.closeInput
            }))));
    };
    return DateWrapper;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
;
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_react_onclickoutside___default()(DateWrapper));



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);


/* harmony default export */ __webpack_exports__["a"] = (function () {
    var keysToTest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        keysToTest[_i] = arguments[_i];
    }
    /**
     * Creates a function that checks to see if the passed in properties are equal
     * {string} ...keysToTest - Properties to check if equal
     */
    return function (props, nextProps) {
        return keysToTest.every(function (value) {
            var currentVal = props[value];
            var nextVal = nextProps[value];
            if (__WEBPACK_IMPORTED_MODULE_0_immutable__["Iterable"].isIterable(currentVal) || __WEBPACK_IMPORTED_MODULE_0_immutable__["Iterable"].isIterable(nextVal)) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["is"])(currentVal, nextVal);
            }
            else {
                if (nextVal !== null && nextVal !== undefined) {
                    if ((__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash__["isArray"])(nextVal) || (Object.keys(nextVal).length > 0 && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash__["isObject"])(nextVal)) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash__["isNaN"])(nextVal)) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash__["isFunction"])(nextVal)) {
                        throw new Error("Specific shallow equal does not support plain old JS objects, Arrays and NaN: prop " + nextVal + " is a " + typeof nextVal);
                    }
                }
                return currentVal === nextVal;
            }
        });
    };
});;


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Switch */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Base__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Validation_DisplayValidation__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Form_ErrorWrapper__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Form_Helpers_performanceWrapper__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Switch_scss__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Switch_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Switch_scss__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
/** Libraries */


/** Components */




/** Styles */

/** Class Switch */
var Switch = /** @class */ (function (_super) {
    __extends(Switch, _super);
    function Switch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Switch.prototype.render = function () {
        var _a = this.props, className = _a.className, label = _a.label, style = _a.style, props = __rest(_a, ["className", "label", "style"]);
        var autoFocus = props.autoFocus, onChange = props.onChange, onBlur = props.onBlur, id = props.id, defaultChecked = props.defaultChecked, defaultSelected = props.defaultSelected, defaultValue = props.defaultValue, value = props.value, validationProps = __rest(props, ["autoFocus", "onChange", "onBlur", "id", "defaultChecked", "defaultSelected", "defaultValue", "value"]);
        var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()("switch", className);
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Form_ErrorWrapper__["a" /* default */], { className: classes, type: props.type, style: style },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Base__["a" /* default */], __assign({}, props, { id: id || this.props.name })),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: id || this.props.name },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "box" }),
                label),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Validation_DisplayValidation__["a" /* default */], __assign({}, validationProps))));
    };
    return Switch;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));

;
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__Form_Helpers_performanceWrapper__["a" /* default */])(Switch));


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Select = __webpack_require__(11);

var _Select2 = _interopRequireDefault(_Select);

var _stripDiacritics = __webpack_require__(29);

var _stripDiacritics2 = _interopRequireDefault(_stripDiacritics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
	autoload: _propTypes2.default.bool.isRequired, // automatically call the `loadOptions` prop on-mount; defaults to true
	cache: _propTypes2.default.any, // object to use to cache results; set to null/false to disable caching
	children: _propTypes2.default.func.isRequired, // Child function responsible for creating the inner Select component; (props: Object): PropTypes.element
	ignoreAccents: _propTypes2.default.bool, // strip diacritics when filtering; defaults to true
	ignoreCase: _propTypes2.default.bool, // perform case-insensitive filtering; defaults to true
	loadOptions: _propTypes2.default.func.isRequired, // callback to load options asynchronously; (inputValue: string, callback: Function): ?Promise
	loadingPlaceholder: _propTypes2.default.oneOfType([// replaces the placeholder while options are loading
	_propTypes2.default.string, _propTypes2.default.node]),
	multi: _propTypes2.default.bool, // multi-value input
	noResultsText: _propTypes2.default.oneOfType([// field noResultsText, displayed when no options come back from the server
	_propTypes2.default.string, _propTypes2.default.node]),
	onChange: _propTypes2.default.func, // onChange handler: function (newValue) {}
	onInputChange: _propTypes2.default.func, // optional for keeping track of what is being typed
	options: _propTypes2.default.array.isRequired, // array of options
	placeholder: _propTypes2.default.oneOfType([// field placeholder, displayed when there's no value (shared with Select)
	_propTypes2.default.string, _propTypes2.default.node]),
	searchPromptText: _propTypes2.default.oneOfType([// label to prompt for search input
	_propTypes2.default.string, _propTypes2.default.node]),
	value: _propTypes2.default.any // initial field value
};

var defaultCache = {};

var defaultProps = {
	autoload: true,
	cache: defaultCache,
	children: defaultChildren,
	ignoreAccents: true,
	ignoreCase: true,
	loadingPlaceholder: 'Loading...',
	options: [],
	searchPromptText: 'Type to search'
};

var Async = function (_Component) {
	_inherits(Async, _Component);

	function Async(props, context) {
		_classCallCheck(this, Async);

		var _this = _possibleConstructorReturn(this, (Async.__proto__ || Object.getPrototypeOf(Async)).call(this, props, context));

		_this._cache = props.cache === defaultCache ? {} : props.cache;

		_this.state = {
			inputValue: '',
			isLoading: false,
			options: props.options
		};

		_this.onInputChange = _this.onInputChange.bind(_this);
		return _this;
	}

	_createClass(Async, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var autoload = this.props.autoload;


			if (autoload) {
				this.loadOptions('');
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.options !== this.props.options) {
				this.setState({
					options: nextProps.options
				});
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this._callback = null;
		}
	}, {
		key: 'loadOptions',
		value: function loadOptions(inputValue) {
			var _this2 = this;

			var loadOptions = this.props.loadOptions;

			var cache = this._cache;

			if (cache && Object.prototype.hasOwnProperty.call(cache, inputValue)) {
				this.setState({
					options: cache[inputValue]
				});

				return;
			}

			var callback = function callback(error, data) {
				if (callback === _this2._callback) {
					_this2._callback = null;

					var options = data && data.options || [];

					if (cache) {
						cache[inputValue] = options;
					}

					_this2.setState({
						isLoading: false,
						options: options
					});
				}
			};

			// Ignore all but the most recent request
			this._callback = callback;

			var promise = loadOptions(inputValue, callback);
			if (promise) {
				promise.then(function (data) {
					return callback(null, data);
				}, function (error) {
					return callback(error);
				});
			}

			if (this._callback && !this.state.isLoading) {
				this.setState({
					isLoading: true
				});
			}
		}
	}, {
		key: 'onInputChange',
		value: function onInputChange(inputValue) {
			var _props = this.props,
			    ignoreAccents = _props.ignoreAccents,
			    ignoreCase = _props.ignoreCase,
			    onInputChange = _props.onInputChange;

			var transformedInputValue = inputValue;

			if (ignoreAccents) {
				transformedInputValue = (0, _stripDiacritics2.default)(transformedInputValue);
			}

			if (ignoreCase) {
				transformedInputValue = transformedInputValue.toLowerCase();
			}

			if (onInputChange) {
				onInputChange(transformedInputValue);
			}

			this.setState({ inputValue: inputValue });
			this.loadOptions(transformedInputValue);

			// Return the original input value to avoid modifying the user's view of the input while typing.
			return inputValue;
		}
	}, {
		key: 'noResultsText',
		value: function noResultsText() {
			var _props2 = this.props,
			    loadingPlaceholder = _props2.loadingPlaceholder,
			    noResultsText = _props2.noResultsText,
			    searchPromptText = _props2.searchPromptText;
			var _state = this.state,
			    inputValue = _state.inputValue,
			    isLoading = _state.isLoading;


			if (isLoading) {
				return loadingPlaceholder;
			}
			if (inputValue && noResultsText) {
				return noResultsText;
			}
			return searchPromptText;
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.select.focus();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var _props3 = this.props,
			    children = _props3.children,
			    loadingPlaceholder = _props3.loadingPlaceholder,
			    multi = _props3.multi,
			    onChange = _props3.onChange,
			    placeholder = _props3.placeholder,
			    value = _props3.value;
			var _state2 = this.state,
			    isLoading = _state2.isLoading,
			    options = _state2.options;


			var props = {
				noResultsText: this.noResultsText(),
				placeholder: isLoading ? loadingPlaceholder : placeholder,
				options: isLoading && loadingPlaceholder ? [] : options,
				ref: function ref(_ref) {
					return _this3.select = _ref;
				}
			};

			return children(_extends({}, this.props, props, {
				isLoading: isLoading,
				onInputChange: this.onInputChange
			}));
		}
	}]);

	return Async;
}(_react.Component);

exports.default = Async;


Async.propTypes = propTypes;
Async.defaultProps = defaultProps;

function defaultChildren(props) {
	return _react2.default.createElement(_Select2.default, props);
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Select = __webpack_require__(11);

var _Select2 = _interopRequireDefault(_Select);

var _defaultFilterOptions = __webpack_require__(27);

var _defaultFilterOptions2 = _interopRequireDefault(_defaultFilterOptions);

var _defaultMenuRenderer = __webpack_require__(28);

var _defaultMenuRenderer2 = _interopRequireDefault(_defaultMenuRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreatableSelect = function (_React$Component) {
	_inherits(CreatableSelect, _React$Component);

	function CreatableSelect(props, context) {
		_classCallCheck(this, CreatableSelect);

		var _this = _possibleConstructorReturn(this, (CreatableSelect.__proto__ || Object.getPrototypeOf(CreatableSelect)).call(this, props, context));

		_this.filterOptions = _this.filterOptions.bind(_this);
		_this.menuRenderer = _this.menuRenderer.bind(_this);
		_this.onInputKeyDown = _this.onInputKeyDown.bind(_this);
		_this.onInputChange = _this.onInputChange.bind(_this);
		_this.onOptionSelect = _this.onOptionSelect.bind(_this);
		return _this;
	}

	_createClass(CreatableSelect, [{
		key: 'createNewOption',
		value: function createNewOption() {
			var _props = this.props,
			    isValidNewOption = _props.isValidNewOption,
			    newOptionCreator = _props.newOptionCreator,
			    onNewOptionClick = _props.onNewOptionClick,
			    _props$options = _props.options,
			    options = _props$options === undefined ? [] : _props$options,
			    shouldKeyDownEventCreateNewOption = _props.shouldKeyDownEventCreateNewOption;


			if (isValidNewOption({ label: this.inputValue })) {
				var option = newOptionCreator({ label: this.inputValue, labelKey: this.labelKey, valueKey: this.valueKey });
				var _isOptionUnique = this.isOptionUnique({ option: option });

				// Don't add the same option twice.
				if (_isOptionUnique) {
					if (onNewOptionClick) {
						onNewOptionClick(option);
					} else {
						options.unshift(option);

						this.select.selectValue(option);
					}
				}
			}
		}
	}, {
		key: 'filterOptions',
		value: function filterOptions() {
			var _props2 = this.props,
			    filterOptions = _props2.filterOptions,
			    isValidNewOption = _props2.isValidNewOption,
			    options = _props2.options,
			    promptTextCreator = _props2.promptTextCreator;

			// TRICKY Check currently selected options as well.
			// Don't display a create-prompt for a value that's selected.
			// This covers async edge-cases where a newly-created Option isn't yet in the async-loaded array.

			var excludeOptions = (arguments.length <= 2 ? undefined : arguments[2]) || [];

			var filteredOptions = filterOptions.apply(undefined, arguments) || [];

			if (isValidNewOption({ label: this.inputValue })) {
				var _newOptionCreator = this.props.newOptionCreator;


				var option = _newOptionCreator({
					label: this.inputValue,
					labelKey: this.labelKey,
					valueKey: this.valueKey
				});

				// TRICKY Compare to all options (not just filtered options) in case option has already been selected).
				// For multi-selects, this would remove it from the filtered list.
				var _isOptionUnique2 = this.isOptionUnique({
					option: option,
					options: excludeOptions.concat(filteredOptions)
				});

				if (_isOptionUnique2) {
					var prompt = promptTextCreator(this.inputValue);

					this._createPlaceholderOption = _newOptionCreator({
						label: prompt,
						labelKey: this.labelKey,
						valueKey: this.valueKey
					});

					filteredOptions.unshift(this._createPlaceholderOption);
				}
			}

			return filteredOptions;
		}
	}, {
		key: 'isOptionUnique',
		value: function isOptionUnique(_ref) {
			var option = _ref.option,
			    options = _ref.options;
			var isOptionUnique = this.props.isOptionUnique;


			options = options || this.select.filterOptions();

			return isOptionUnique({
				labelKey: this.labelKey,
				option: option,
				options: options,
				valueKey: this.valueKey
			});
		}
	}, {
		key: 'menuRenderer',
		value: function menuRenderer(params) {
			var menuRenderer = this.props.menuRenderer;


			return menuRenderer(_extends({}, params, {
				onSelect: this.onOptionSelect,
				selectValue: this.onOptionSelect
			}));
		}
	}, {
		key: 'onInputChange',
		value: function onInputChange(input) {
			var onInputChange = this.props.onInputChange;


			if (onInputChange) {
				onInputChange(input);
			}

			// This value may be needed in between Select mounts (when this.select is null)
			this.inputValue = input;
		}
	}, {
		key: 'onInputKeyDown',
		value: function onInputKeyDown(event) {
			var _props3 = this.props,
			    shouldKeyDownEventCreateNewOption = _props3.shouldKeyDownEventCreateNewOption,
			    onInputKeyDown = _props3.onInputKeyDown;

			var focusedOption = this.select.getFocusedOption();

			if (focusedOption && focusedOption === this._createPlaceholderOption && shouldKeyDownEventCreateNewOption({ keyCode: event.keyCode })) {
				this.createNewOption();

				// Prevent decorated Select from doing anything additional with this keyDown event
				event.preventDefault();
			} else if (onInputKeyDown) {
				onInputKeyDown(event);
			}
		}
	}, {
		key: 'onOptionSelect',
		value: function onOptionSelect(option, event) {
			if (option === this._createPlaceholderOption) {
				this.createNewOption();
			} else {
				this.select.selectValue(option);
			}
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.select.focus();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props4 = this.props,
			    newOptionCreator = _props4.newOptionCreator,
			    shouldKeyDownEventCreateNewOption = _props4.shouldKeyDownEventCreateNewOption,
			    restProps = _objectWithoutProperties(_props4, ['newOptionCreator', 'shouldKeyDownEventCreateNewOption']);

			var children = this.props.children;

			// We can't use destructuring default values to set the children,
			// because it won't apply work if `children` is null. A falsy check is
			// more reliable in real world use-cases.

			if (!children) {
				children = defaultChildren;
			}

			var props = _extends({}, restProps, {
				allowCreate: true,
				filterOptions: this.filterOptions,
				menuRenderer: this.menuRenderer,
				onInputChange: this.onInputChange,
				onInputKeyDown: this.onInputKeyDown,
				ref: function ref(_ref2) {
					_this2.select = _ref2;

					// These values may be needed in between Select mounts (when this.select is null)
					if (_ref2) {
						_this2.labelKey = _ref2.props.labelKey;
						_this2.valueKey = _ref2.props.valueKey;
					}
				}
			});

			return children(props);
		}
	}]);

	return CreatableSelect;
}(_react2.default.Component);

;

function defaultChildren(props) {
	return _react2.default.createElement(_Select2.default, props);
};

function isOptionUnique(_ref3) {
	var option = _ref3.option,
	    options = _ref3.options,
	    labelKey = _ref3.labelKey,
	    valueKey = _ref3.valueKey;

	return options.filter(function (existingOption) {
		return existingOption[labelKey] === option[labelKey] || existingOption[valueKey] === option[valueKey];
	}).length === 0;
};

function isValidNewOption(_ref4) {
	var label = _ref4.label;

	return !!label;
};

function newOptionCreator(_ref5) {
	var label = _ref5.label,
	    labelKey = _ref5.labelKey,
	    valueKey = _ref5.valueKey;

	var option = {};
	option[valueKey] = label;
	option[labelKey] = label;
	option.className = 'Select-create-option-placeholder';
	return option;
};

function promptTextCreator(label) {
	return 'Create option "' + label + '"';
}

function shouldKeyDownEventCreateNewOption(_ref6) {
	var keyCode = _ref6.keyCode;

	switch (keyCode) {
		case 9: // TAB
		case 13: // ENTER
		case 188:
			// COMMA
			return true;
	}

	return false;
};

// Default prop methods
CreatableSelect.isOptionUnique = isOptionUnique;
CreatableSelect.isValidNewOption = isValidNewOption;
CreatableSelect.newOptionCreator = newOptionCreator;
CreatableSelect.promptTextCreator = promptTextCreator;
CreatableSelect.shouldKeyDownEventCreateNewOption = shouldKeyDownEventCreateNewOption;

CreatableSelect.defaultProps = {
	filterOptions: _defaultFilterOptions2.default,
	isOptionUnique: isOptionUnique,
	isValidNewOption: isValidNewOption,
	menuRenderer: _defaultMenuRenderer2.default,
	newOptionCreator: newOptionCreator,
	promptTextCreator: promptTextCreator,
	shouldKeyDownEventCreateNewOption: shouldKeyDownEventCreateNewOption
};

CreatableSelect.propTypes = {
	// Child function responsible for creating the inner Select component
	// This component can be used to compose HOCs (eg Creatable and Async)
	// (props: Object): PropTypes.element
	children: _propTypes2.default.func,

	// See Select.propTypes.filterOptions
	filterOptions: _propTypes2.default.any,

	// Searches for any matching option within the set of options.
	// This function prevents duplicate options from being created.
	// ({ option: Object, options: Array, labelKey: string, valueKey: string }): boolean
	isOptionUnique: _propTypes2.default.func,

	// Determines if the current input text represents a valid option.
	// ({ label: string }): boolean
	isValidNewOption: _propTypes2.default.func,

	// See Select.propTypes.menuRenderer
	menuRenderer: _propTypes2.default.any,

	// Factory to create new option.
	// ({ label: string, labelKey: string, valueKey: string }): Object
	newOptionCreator: _propTypes2.default.func,

	// input change handler: function (inputValue) {}
	onInputChange: _propTypes2.default.func,

	// input keyDown handler: function (event) {}
	onInputKeyDown: _propTypes2.default.func,

	// new option click handler: function (option) {}
	onNewOptionClick: _propTypes2.default.func,

	// See Select.propTypes.options
	options: _propTypes2.default.array,

	// Creates prompt/placeholder option text.
	// (filterText: string): string
	promptTextCreator: _propTypes2.default.func,

	// Decides if a keyDown event (eg its `keyCode`) should result in the creation of a new option.
	shouldKeyDownEventCreateNewOption: _propTypes2.default.func
};

exports.default = CreatableSelect;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Value = function (_React$Component) {
	_inherits(Value, _React$Component);

	function Value(props) {
		_classCallCheck(this, Value);

		var _this = _possibleConstructorReturn(this, (Value.__proto__ || Object.getPrototypeOf(Value)).call(this, props));

		_this.handleMouseDown = _this.handleMouseDown.bind(_this);
		_this.onRemove = _this.onRemove.bind(_this);
		_this.handleTouchEndRemove = _this.handleTouchEndRemove.bind(_this);
		_this.handleTouchMove = _this.handleTouchMove.bind(_this);
		_this.handleTouchStart = _this.handleTouchStart.bind(_this);
		return _this;
	}

	_createClass(Value, [{
		key: 'handleMouseDown',
		value: function handleMouseDown(event) {
			if (event.type === 'mousedown' && event.button !== 0) {
				return;
			}
			if (this.props.onClick) {
				event.stopPropagation();
				this.props.onClick(this.props.value, event);
				return;
			}
			if (this.props.value.href) {
				event.stopPropagation();
			}
		}
	}, {
		key: 'onRemove',
		value: function onRemove(event) {
			event.preventDefault();
			event.stopPropagation();
			this.props.onRemove(this.props.value);
		}
	}, {
		key: 'handleTouchEndRemove',
		value: function handleTouchEndRemove(event) {
			// Check if the view is being dragged, In this case
			// we don't want to fire the click event (because the user only wants to scroll)
			if (this.dragging) return;

			// Fire the mouse events
			this.onRemove(event);
		}
	}, {
		key: 'handleTouchMove',
		value: function handleTouchMove(event) {
			// Set a flag that the view is being dragged
			this.dragging = true;
		}
	}, {
		key: 'handleTouchStart',
		value: function handleTouchStart(event) {
			// Set a flag that the view is not being dragged
			this.dragging = false;
		}
	}, {
		key: 'renderRemoveIcon',
		value: function renderRemoveIcon() {
			if (this.props.disabled || !this.props.onRemove) return;
			return _react2.default.createElement(
				'span',
				{ className: 'Select-value-icon',
					'aria-hidden': 'true',
					onMouseDown: this.onRemove,
					onTouchEnd: this.handleTouchEndRemove,
					onTouchStart: this.handleTouchStart,
					onTouchMove: this.handleTouchMove },
				'\xD7'
			);
		}
	}, {
		key: 'renderLabel',
		value: function renderLabel() {
			var className = 'Select-value-label';
			return this.props.onClick || this.props.value.href ? _react2.default.createElement(
				'a',
				{ className: className, href: this.props.value.href, target: this.props.value.target, onMouseDown: this.handleMouseDown, onTouchEnd: this.handleMouseDown },
				this.props.children
			) : _react2.default.createElement(
				'span',
				{ className: className, role: 'option', 'aria-selected': 'true', id: this.props.id },
				this.props.children
			);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: (0, _classnames2.default)('Select-value', this.props.value.className),
					style: this.props.value.style,
					title: this.props.value.title
				},
				this.renderRemoveIcon(),
				this.renderLabel()
			);
		}
	}]);

	return Value;
}(_react2.default.Component);

;

Value.propTypes = {
	children: _propTypes2.default.node,
	disabled: _propTypes2.default.bool, // disabled prop passed to ReactSelect
	id: _propTypes2.default.string, // Unique id for the value - used for aria
	onClick: _propTypes2.default.func, // method to handle click on value label
	onRemove: _propTypes2.default.func, // method to handle removal of the value
	value: _propTypes2.default.object.isRequired // the option object for this value
};

exports.default = Value;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _stripDiacritics = __webpack_require__(29);

var _stripDiacritics2 = _interopRequireDefault(_stripDiacritics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function filterOptions(options, filterValue, excludeOptions, props) {
	var _this = this;

	if (props.ignoreAccents) {
		filterValue = (0, _stripDiacritics2.default)(filterValue);
	}

	if (props.ignoreCase) {
		filterValue = filterValue.toLowerCase();
	}

	if (excludeOptions) excludeOptions = excludeOptions.map(function (i) {
		return i[props.valueKey];
	});

	return options.filter(function (option) {
		if (excludeOptions && excludeOptions.indexOf(option[props.valueKey]) > -1) return false;
		if (props.filterOption) return props.filterOption.call(_this, option, filterValue);
		if (!filterValue) return true;
		var valueTest = String(option[props.valueKey]);
		var labelTest = String(option[props.labelKey]);
		if (props.ignoreAccents) {
			if (props.matchProp !== 'label') valueTest = (0, _stripDiacritics2.default)(valueTest);
			if (props.matchProp !== 'value') labelTest = (0, _stripDiacritics2.default)(labelTest);
		}
		if (props.ignoreCase) {
			if (props.matchProp !== 'label') valueTest = valueTest.toLowerCase();
			if (props.matchProp !== 'value') labelTest = labelTest.toLowerCase();
		}
		return props.matchPos === 'start' ? props.matchProp !== 'label' && valueTest.substr(0, filterValue.length) === filterValue || props.matchProp !== 'value' && labelTest.substr(0, filterValue.length) === filterValue : props.matchProp !== 'label' && valueTest.indexOf(filterValue) >= 0 || props.matchProp !== 'value' && labelTest.indexOf(filterValue) >= 0;
	});
}

exports.default = filterOptions;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function menuRenderer(_ref) {
	var focusedOption = _ref.focusedOption,
	    instancePrefix = _ref.instancePrefix,
	    labelKey = _ref.labelKey,
	    onFocus = _ref.onFocus,
	    onSelect = _ref.onSelect,
	    optionClassName = _ref.optionClassName,
	    optionComponent = _ref.optionComponent,
	    optionRenderer = _ref.optionRenderer,
	    options = _ref.options,
	    valueArray = _ref.valueArray,
	    valueKey = _ref.valueKey,
	    onOptionRef = _ref.onOptionRef;

	var Option = optionComponent;

	return options.map(function (option, i) {
		var isSelected = valueArray && valueArray.indexOf(option) > -1;
		var isFocused = option === focusedOption;
		var optionClass = (0, _classnames2.default)(optionClassName, {
			'Select-option': true,
			'is-selected': isSelected,
			'is-focused': isFocused,
			'is-disabled': option.disabled
		});

		return _react2.default.createElement(
			Option,
			{
				className: optionClass,
				instancePrefix: instancePrefix,
				isDisabled: option.disabled,
				isFocused: isFocused,
				isSelected: isSelected,
				key: 'option-' + i + '-' + option[valueKey],
				onFocus: onFocus,
				onSelect: onSelect,
				option: option,
				optionIndex: i,
				ref: function ref(_ref2) {
					onOptionRef(_ref2, isFocused);
				}
			},
			optionRenderer(option, i)
		);
	});
}

exports.default = menuRenderer;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = stripDiacritics;
var map = [{ 'base': 'A', 'letters': /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g }, { 'base': 'AA', 'letters': /[\uA732]/g }, { 'base': 'AE', 'letters': /[\u00C6\u01FC\u01E2]/g }, { 'base': 'AO', 'letters': /[\uA734]/g }, { 'base': 'AU', 'letters': /[\uA736]/g }, { 'base': 'AV', 'letters': /[\uA738\uA73A]/g }, { 'base': 'AY', 'letters': /[\uA73C]/g }, { 'base': 'B', 'letters': /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g }, { 'base': 'C', 'letters': /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g }, { 'base': 'D', 'letters': /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g }, { 'base': 'DZ', 'letters': /[\u01F1\u01C4]/g }, { 'base': 'Dz', 'letters': /[\u01F2\u01C5]/g }, { 'base': 'E', 'letters': /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g }, { 'base': 'F', 'letters': /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g }, { 'base': 'G', 'letters': /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g }, { 'base': 'H', 'letters': /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g }, { 'base': 'I', 'letters': /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g }, { 'base': 'J', 'letters': /[\u004A\u24BF\uFF2A\u0134\u0248]/g }, { 'base': 'K', 'letters': /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g }, { 'base': 'L', 'letters': /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g }, { 'base': 'LJ', 'letters': /[\u01C7]/g }, { 'base': 'Lj', 'letters': /[\u01C8]/g }, { 'base': 'M', 'letters': /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g }, { 'base': 'N', 'letters': /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g }, { 'base': 'NJ', 'letters': /[\u01CA]/g }, { 'base': 'Nj', 'letters': /[\u01CB]/g }, { 'base': 'O', 'letters': /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g }, { 'base': 'OI', 'letters': /[\u01A2]/g }, { 'base': 'OO', 'letters': /[\uA74E]/g }, { 'base': 'OU', 'letters': /[\u0222]/g }, { 'base': 'P', 'letters': /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g }, { 'base': 'Q', 'letters': /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g }, { 'base': 'R', 'letters': /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g }, { 'base': 'S', 'letters': /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g }, { 'base': 'T', 'letters': /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g }, { 'base': 'TZ', 'letters': /[\uA728]/g }, { 'base': 'U', 'letters': /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g }, { 'base': 'V', 'letters': /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g }, { 'base': 'VY', 'letters': /[\uA760]/g }, { 'base': 'W', 'letters': /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g }, { 'base': 'X', 'letters': /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g }, { 'base': 'Y', 'letters': /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g }, { 'base': 'Z', 'letters': /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g }, { 'base': 'a', 'letters': /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g }, { 'base': 'aa', 'letters': /[\uA733]/g }, { 'base': 'ae', 'letters': /[\u00E6\u01FD\u01E3]/g }, { 'base': 'ao', 'letters': /[\uA735]/g }, { 'base': 'au', 'letters': /[\uA737]/g }, { 'base': 'av', 'letters': /[\uA739\uA73B]/g }, { 'base': 'ay', 'letters': /[\uA73D]/g }, { 'base': 'b', 'letters': /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g }, { 'base': 'c', 'letters': /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g }, { 'base': 'd', 'letters': /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g }, { 'base': 'dz', 'letters': /[\u01F3\u01C6]/g }, { 'base': 'e', 'letters': /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g }, { 'base': 'f', 'letters': /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g }, { 'base': 'g', 'letters': /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g }, { 'base': 'h', 'letters': /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g }, { 'base': 'hv', 'letters': /[\u0195]/g }, { 'base': 'i', 'letters': /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g }, { 'base': 'j', 'letters': /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g }, { 'base': 'k', 'letters': /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g }, { 'base': 'l', 'letters': /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g }, { 'base': 'lj', 'letters': /[\u01C9]/g }, { 'base': 'm', 'letters': /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g }, { 'base': 'n', 'letters': /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g }, { 'base': 'nj', 'letters': /[\u01CC]/g }, { 'base': 'o', 'letters': /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g }, { 'base': 'oi', 'letters': /[\u01A3]/g }, { 'base': 'ou', 'letters': /[\u0223]/g }, { 'base': 'oo', 'letters': /[\uA74F]/g }, { 'base': 'p', 'letters': /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g }, { 'base': 'q', 'letters': /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g }, { 'base': 'r', 'letters': /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g }, { 'base': 's', 'letters': /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g }, { 'base': 't', 'letters': /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g }, { 'base': 'tz', 'letters': /[\uA729]/g }, { 'base': 'u', 'letters': /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g }, { 'base': 'v', 'letters': /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g }, { 'base': 'vy', 'letters': /[\uA761]/g }, { 'base': 'w', 'letters': /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g }, { 'base': 'x', 'letters': /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g }, { 'base': 'y', 'letters': /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g }, { 'base': 'z', 'letters': /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g }];

function stripDiacritics(str) {
	for (var i = 0; i < map.length; i++) {
		str = str.replace(map[i].letters, map[i].base);
	}
	return str;
};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_30__;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_31__;

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Switch_Switch__ = __webpack_require__(22);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
/** Libraries */


/** Components */

/**
 * Class CheckBox
 * Creates a Checkbox connected to forms state management.
 * All HTML5 attributes apply.
 */
var CheckBox = /** @class */ (function (_super) {
    __extends(CheckBox, _super);
    function CheckBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckBox.prototype.render = function () {
        var _a = this.props, className = _a.className, other = __rest(_a, ["className"]);
        var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(className, 'checkbox');
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Switch_Switch__["a" /* default */], __assign({ className: classes }, other, { type: "checkbox" })));
    };
    return CheckBox;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));
/* harmony default export */ __webpack_exports__["a"] = (CheckBox);


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DatePicker */
/* unused harmony export CalendarBase */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_date_range__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_date_range___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_date_range__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DateWrapper__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Form_Helpers_performanceWrapper__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__DateRange_scss__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__DateRange_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__DateRange_scss__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
/** Libraries */




/** Components */


/** Styles */

/** Class CalendarBase */
var CalendarBase = /** @class */ (function (_super) {
    __extends(CalendarBase, _super);
    function CalendarBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleChange = function (dateRange) {
            var _a = _this.props, inputChanged = _a.inputChanged, close = _a.close;
            inputChanged(dateRange.format(_this.props.serverFormat));
            if (typeof close === 'function') {
                close();
            }
            if (typeof _this.props.onChange === 'function') {
                _this.props.onChange(dateRange);
            }
        };
        return _this;
    }
    CalendarBase.prototype.render = function () {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_date_range__["Calendar"], __assign({}, this.props, { onChange: this.handleChange }));
    };
    return CalendarBase;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));
/** Class DatePicker */
var DatePicker = /** @class */ (function (_super) {
    __extends(DatePicker, _super);
    function DatePicker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getValue = function () {
            var _a = _this.props, value = _a.value, defaultValue = _a.defaultValue, dateFormat = _a.dateFormat;
            var parsedValue = __WEBPACK_IMPORTED_MODULE_1_moment___default()(value || defaultValue);
            if (parsedValue.isValid()) {
                return parsedValue.format(dateFormat);
            }
            else {
                return value || defaultValue || "";
            }
        };
        return _this;
    }
    DatePicker.prototype.render = function () {
        var _a = this.props, children = _a.children, props = __rest(_a, ["children"]);
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__DateWrapper__["a" /* default */], __assign({}, props, { valueString: this.getValue() }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CalendarBase, __assign({}, this.props))));
    };
    return DatePicker;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_recompose__["compose"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_recompose__["defaultProps"])({
    defaultValue: __WEBPACK_IMPORTED_MODULE_1_moment___default()().format(),
    dateFormat: 'DD/MM/YYYY',
    serverFormat: null
}), __WEBPACK_IMPORTED_MODULE_5__Form_Helpers_performanceWrapper__["a" /* default */])(DatePicker));



/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DateRangeBase */
/* unused harmony export DateRangePicker */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_immutable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_date_range__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_date_range___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_date_range__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DateWrapper__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Form_Helpers_performanceWrapper__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__DateRange_scss__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__DateRange_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__DateRange_scss__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
/** Libraries */




/** Components */


/** Helpers */
var getValue = function (dateRange, dateFormat) {
    if (dateFormat === void 0) { dateFormat = 'DD/MM/YYYY'; }
    if (__WEBPACK_IMPORTED_MODULE_2_immutable__["Map"].isMap(dateRange) && dateRange) {
        return __WEBPACK_IMPORTED_MODULE_1_moment___default()(dateRange.get('startDate'), 'DD/MM/YYYY').format(dateFormat) + " to " + __WEBPACK_IMPORTED_MODULE_1_moment___default()(dateRange.get('endDate'), 'DD/MM/YYYY').format(dateFormat);
    }
    return __WEBPACK_IMPORTED_MODULE_1_moment___default()().format(dateFormat) + " to " + __WEBPACK_IMPORTED_MODULE_1_moment___default()().format(dateFormat);
};
/** Styles */

/** Class DateRangeBase */
var DateRangeBase = /** @class */ (function (_super) {
    __extends(DateRangeBase, _super);
    function DateRangeBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleChange = function (dateRange) {
            _this.props.inputChanged(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_immutable__["Map"])({
                startDate: dateRange.startDate.format('DD/MM/YYYY'),
                endDate: dateRange.endDate.format('DD/MM/YYYY')
            }));
            if (typeof _this.props.onChange === 'function') {
                _this.props.onChange(dateRange);
            }
        };
        return _this;
    }
    DateRangeBase.prototype.render = function () {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_date_range__["DateRange"], __assign({}, this.props, { calendars: 1, onChange: this.handleChange }));
    };
    return DateRangeBase;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));
;
/** Class DateRangePicker */
var DateRangePicker = /** @class */ (function (_super) {
    __extends(DateRangePicker, _super);
    function DateRangePicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateRangePicker.prototype.render = function () {
        var _a = this.props, children = _a.children, props = __rest(_a, ["children"]);
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__DateWrapper__["a" /* default */], __assign({}, props, { valueString: getValue(props.value, props.dateFormat) }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(DateRangeBase, __assign({}, props))));
    };
    return DateRangePicker;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__Form_Helpers_performanceWrapper__["a" /* default */])(DateRangePicker));



/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DropZone */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dropzone__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dropzone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dropzone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Form_Helpers_performanceWrapper__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Form_Helpers_inputHelpers__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__DropZone_scss__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__DropZone_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__DropZone_scss__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
/** Libraries */





/** * Components */


/** Styles */

/** Helpers */
var isFileArray = function (files) {
    return __WEBPACK_IMPORTED_MODULE_1_immutable__["Set"].isSet(files) && files.size > 1;
};
var isSingleFile = function (files) {
    return __WEBPACK_IMPORTED_MODULE_1_immutable__["Set"].isSet(files) && files.size === 1;
};
var PassDownProps = function (props, children) {
    if (children.type === 'span' || children.type === 'div') {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(children);
    }
    else {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(children, __assign({}, props));
    }
};
/** Class DropZone */
var DropZone = /** @class */ (function (_super) {
    __extends(DropZone, _super);
    function DropZone() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getFiles = function () {
            var value = _this.props.value;
            if (isFileArray(value)) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_immutable__["Set"])(value);
            }
            else if (isSingleFile(value)) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_immutable__["Set"])([value.first()]);
            }
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_immutable__["Set"])();
        };
        _this.onDrop = function (files) {
            var _a = _this.props, _b = _a.multiple, multiple = _b === void 0 ? false : _b, inputChanged = _a.inputChanged, onDrop = _a.onDrop;
            if (multiple) {
                var allFiles = _this.getFiles().concat(files);
                inputChanged(allFiles);
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_lodash__["isFunction"])(onDrop)) {
                    onDrop(allFiles);
                }
            }
            else {
                inputChanged(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_immutable__["Set"])([files]));
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_lodash__["isFunction"])(onDrop)) {
                    onDrop(files);
                }
            }
        };
        _this.deleteFile = function (index) {
            var _a = _this.props, _b = _a.multiple, multiple = _b === void 0 ? false : _b, inputChanged = _a.inputChanged;
            var stateFiles = _this.getFiles();
            inputChanged(stateFiles.delete(index));
        };
        return _this;
    }
    DropZone.prototype.componentDidMount = function () {
        var files = this.getFiles();
        if (files.size > 0) {
            this.props.inputChanged(this.getFiles(), false);
        }
    };
    DropZone.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, _b = _a.placeholder, placeholder = _b === void 0 ? "Drop here" : _b, _c = _a.multiple, multiple = _c === void 0 ? false : _c, _d = _a.showList, showList = _d === void 0 ? true : _d, fileListComponent = _a.fileListComponent;
        var attributes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Form_Helpers_inputHelpers__["c" /* getHTMLAttributes */])(this.props);
        var files = this.getFiles();
        var classes = __WEBPACK_IMPORTED_MODULE_3_classnames___default()("drop-zone-box", className);
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "drop-zone" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_dropzone___default.a, __assign({ className: classes, onDrop: this.onDrop, multiple: multiple }, attributes), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_lodash__["isFunction"])(children) ? (children(this.getFiles(), this.deleteFile)) : (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, children && PassDownProps({ files: files }, children))))),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_lodash__["isFunction"])(fileListComponent) && (fileListComponent(this.getFiles(), this.deleteFile))));
    };
    DropZone.defaultProps = {
        children: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("noscript", null)
    };
    return DropZone;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__Form_Helpers_performanceWrapper__["a" /* default */])(DropZone));



/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
/** Libraries */



/** Class Fieldset */
var Fieldset = /** @class */ (function (_super) {
    __extends(Fieldset, _super);
    function Fieldset() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Fieldset.prototype.render = function () {
        var _a = this.props, children = _a.children, props = __rest(_a, ["children"]);
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("fieldset", __assign({}, props), children));
    };
    return Fieldset;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_recompose__["withContext"])({
    fieldSetNameSpace: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
}, function (_a) {
    var name = _a.name, id = _a.id;
    return ({
        fieldSetNameSpace: id ? name + "/" + id : name
    });
})(Fieldset));


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_immutable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_recompose__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Actions_fields__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Reducers__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Helpers_formHelpers__ = __webpack_require__(15);
/* unused harmony reexport clearAllInputs */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
/** Libraries */






/** Helpers */



var mapOutput = function (data, mapOutputFunc) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_lodash__["isFunction"])(mapOutputFunc)) {
        var mappedData = mapOutputFunc(data);
        if (!__WEBPACK_IMPORTED_MODULE_2_immutable__["Iterable"].isIterable(mappedData)) {
            throw new Error("mapOutput must return an Immutable Iterable");
        }
        return mappedData;
    }
    else {
        return data;
    }
};
var randomString = function (length) { return Math.random().toString(36).substring(length); };
/** Displays a form component, inserts all user input into redux state and ensures that all inputs are validated
 * before allowing the user to submit the form. */
var Form = /** @class */ (function (_super) {
    __extends(Form, _super);
    function Form(props) {
        var _this = _super.call(this, props) || this;
        _this.lastSumbittedString = null;
        _this.handleFormSubmit = function (event) {
            event.preventDefault();
            if (_this.state.canSubmitString !== _this.lastSumbittedString) {
                var _a = _this.props, dispatch = _a.dispatch, onSubmit_1 = _a.onSubmit, FormState_1 = _a.FormState, name_1 = _a.name, encType_1 = _a.encType, onInvalid_1 = _a.onInvalid;
                // INSERT COMMENT HERE
                dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Actions_fields__["e" /* setAllInputInteractions */])(name_1, "changed", true));
                // INSERT COMMENT HERE
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_lodash__["defer"])(function () {
                    var form = _this.refs[name_1];
                    var firstError = form.querySelector('.invalid');
                    if (firstError === null) {
                        if (onSubmit_1) {
                            var fields = FormState_1.get(name_1);
                            var normalizedFields = mapOutput(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__Helpers_formHelpers__["b" /* normalizeFields */])(fields), _this.props.mapOutput);
                            if (encType_1 === "multipart/form-data") {
                                onSubmit_1(event, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__Helpers_formHelpers__["a" /* convertToFormData */])(normalizedFields));
                            }
                            else {
                                onSubmit_1(event, normalizedFields);
                            }
                            // update state so users cannot submit again
                            _this.lastSumbittedString = _this.state.canSubmitString;
                        }
                    }
                    else {
                        var scrollTo_1 = firstError.getBoundingClientRect().top - 50;
                        if (typeof window === 'object' && scrollTo_1 < 0) {
                            window.scrollTo(0, document.body.scrollTop + scrollTo_1 - 5);
                        }
                        if (onInvalid_1) {
                            onInvalid_1();
                        }
                    }
                });
            }
        };
        _this.state = {
            canSubmitString: randomString(10)
        };
        return _this;
    }
    Form.prototype.getChildContext = function () {
        return {
            FormState: this.props.FormState,
            nameSpace: this.props.name,
            dispatch: this.props.dispatch
        };
    };
    Form.prototype.componentWillReceiveProps = function (nextProps) {
        if (this.props.name !== nextProps.name) {
            this.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Actions_fields__["a" /* clearAllInputs */])(nextProps.name));
            // make the new form unsubmit-able
            this.setState({
                canSubmitString: randomString(10)
            });
        }
        else {
            this.setState({
                canSubmitString: randomString(10)
            });
        }
    };
    Form.prototype.componentWillUnmount = function () {
        this.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Actions_fields__["a" /* clearAllInputs */])(this.props.name));
    };
    Form.prototype.render = function () {
        var _a = this.props, FormState = _a.FormState, dispatch = _a.dispatch, onSubmit = _a.onSubmit, className = _a.className, name = _a.name, encType = _a.encType, safeProps = __rest(_a, ["FormState", "dispatch", "onSubmit", "className", "name", "encType"]);
        var classes = __WEBPACK_IMPORTED_MODULE_3_classnames___default()('form', className);
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", { name: name, ref: name, onSubmit: this.handleFormSubmit, className: classes, noValidate: true, encType: encType }, this.props.children));
    };
    Form.childContextTypes = {
        FormState: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
        nameSpace: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
        dispatch: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
    };
    //FIXME: any to make TS happy unsure why it needs to be this way
    Form.defaultProps = {
        encType: 'application/json',
        mapOutput: function (data) { return data; }
    };
    return Form;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));
;
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_recompose__["branch"])(function (props) {
    return !(props.FormState && props.dispatch);
}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_recompose__["withReducer"])("FormState", "dispatch", __WEBPACK_IMPORTED_MODULE_7__Reducers__["b" /* withReducerState */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_immutable__["Map"])())) //"any" is a short term fix till recompose types are updated
(Form));



/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Input_Input__ = __webpack_require__(17);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
/** Libraries */

/** Components */

var Number = /** @class */ (function (_super) {
    __extends(Number, _super);
    function Number() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Number.prototype.render = function () {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Input_Input__["a" /* default */], __assign({}, this.props));
    };
    Number.defaultProps = {
        pattern: '[0-9]+.?[0-9]*',
        type: 'number',
    };
    return Number;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));
/* harmony default export */ __webpack_exports__["a"] = (Number);


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Radio_Radio__ = __webpack_require__(18);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
/** Libraries */




/** Components */

var RadioTab = /** @class */ (function (_super) {
    __extends(RadioTab, _super);
    function RadioTab() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.setId = function (id) {
            var setId = _this.props.setId;
            if (!setId)
                throw new Error("setId is not pass down from RadioTabs. please check RadioTab - " + id + " is direct child of RadioTabs or create the wrapper to pass the props from RadioTabs");
            if (setId && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_lodash__["isFunction"])(setId))
                setId(id);
        };
        _this.onClick = function () {
            var id = _this.props.id;
            _this.setId(id);
        };
        return _this;
    }
    RadioTab.prototype.componentWillMount = function () {
        if (this.props.defaultSelected) {
            this.setId(this.props.id);
        }
    };
    RadioTab.prototype.componentWillReceiveProps = function (nextProps) {
        if (this.props.defaultSelected !== nextProps.defaultSelected) {
            this.setId(nextProps.id);
        }
    };
    RadioTab.prototype.render = function () {
        var _a = this.props, className = _a.className, children = _a.children, chosenId = _a.chosenId, props = __rest(_a, ["className", "children", "chosenId"]);
        var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(className, 'radio-tab', { active: chosenId === props.id });
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: classes, onClick: this.onClick },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Radio_Radio__["a" /* default */], __assign({}, props)),
            children));
    };
    return RadioTab;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));
// This is a hack to ensure that proper types are passed down. Need a better way to type React.cloneElement
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_recompose__["compose"])(function (radioTab) { return radioTab; })(RadioTab));


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Form_InputWrapper__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__RadioTabs_scss__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__RadioTabs_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__RadioTabs_scss__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/** Libraries */


/** Components */

/** Styles */

/** Class RadioTabs */
var RadioTabs = /** @class */ (function (_super) {
    __extends(RadioTabs, _super);
    function RadioTabs(props) {
        var _this = _super.call(this, props) || this;
        _this.setId = function (chosenId) {
            _this.setState({
                chosenId: chosenId
            });
        };
        _this.state = {
            chosenId: ""
        };
        return _this;
    }
    RadioTabs.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, _b = _a.radioClasses, radioClasses = _b === void 0 ? undefined : _b, name = _a.name, label = _a.label, children = _a.children;
        var chosenId = this.state.chosenId;
        var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(className, 'input', 'radio-tabs');
        // Deprecation warning, v1.0.x
        if (radioClasses != undefined) {
            throw new Error("radioClasses prop has been replaced with className");
        }
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Form_InputWrapper__["a" /* default */], { className: classes, name: name, label: label }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.map(children, function (child) {
            {
            }
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, {
                name: name,
                chosenId: chosenId,
                setId: _this.setId
            });
        })));
    };
    return RadioTabs;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));
/* harmony default export */ __webpack_exports__["a"] = (RadioTabs);


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MultiSelect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_select__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_immutable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_select_dist_react_select_css__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_select_dist_react_select_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_select_dist_react_select_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Form_InputWrapper__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Form_Helpers_performanceWrapper__ = __webpack_require__(3);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
/** Libraries */





/** Components */


/** Class MultiSelect */
var MultiSelect = /** @class */ (function (_super) {
    __extends(MultiSelect, _super);
    function MultiSelect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleChange = function (values) {
            var _a = _this.props, inputChanged = _a.inputChanged, onChange = _a.onChange;
            var newValues = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_immutable__["List"])([]).concat(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_immutable__["fromJS"])(values)).toList();
            inputChanged(newValues);
            if (typeof onChange === 'function') {
                onChange(newValues);
            }
        };
        return _this;
    }
    MultiSelect.prototype.componentWillMount = function () {
        var _a = this.props, inputChanged = _a.inputChanged, defaultValue = _a.defaultValue;
        inputChanged(defaultValue || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_immutable__["List"])([]), false);
    };
    MultiSelect.prototype.render = function () {
        var _a = this.props, options = _a.options, value = _a.value, className = _a.className, label = _a.label, labelPrefix = _a.labelPrefix, labelPostfix = _a.labelPostfix, noResultsText = _a.noResultsText, placeholder = _a.placeholder, props = __rest(_a, ["options", "value", "className", "label", "labelPrefix", "labelPostfix", "noResultsText", "placeholder"]);
        var safeValue = value !== '' ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_immutable__["List"])(value) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_immutable__["List"])();
        var classes = __WEBPACK_IMPORTED_MODULE_4_classnames___default()(className, 'input');
        if (!__WEBPACK_IMPORTED_MODULE_2_immutable__["Iterable"].isIterable(options)) {
            throw new Error("options must be an Immutable List()");
        }
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Form_InputWrapper__["a" /* default */], { name: props.name, label: label, labelPrefix: labelPrefix, labelPostfix: labelPostfix, className: classes },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_select___default.a, { value: safeValue.toJS(), options: options.toJS(), multi: true, onChange: this.handleChange, noResultsText: noResultsText, placeholder: placeholder })));
    };
    MultiSelect.defaultProps = {
        options: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_immutable__["List"])([])
    };
    return MultiSelect;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Form_Helpers_performanceWrapper__["a" /* default */])(MultiSelect));


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Form_InputWrapper__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Form_Helpers_performanceWrapper__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Validation_DisplayValidation__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Base__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Select_scss__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Select_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Select_scss__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
/** Libraries */


/** Components */




/** Styles */

/** Class Select */
var Select = /** @class */ (function (_super) {
    __extends(Select, _super);
    function Select() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Select.prototype.render = function () {
        var _a = this.props, className = _a.className, label = _a.label, labelPostfix = _a.labelPostfix, labelPrefix = _a.labelPrefix, arrow = _a.arrow, props = __rest(_a, ["className", "label", "labelPostfix", "labelPrefix", "arrow"]);
        var autoFocus = props.autoFocus, onChange = props.onChange, onBlur = props.onBlur, id = props.id, defaultChecked = props.defaultChecked, defaultSelected = props.defaultSelected, value = props.value, children = props.children, validationProps = __rest(props, ["autoFocus", "onChange", "onBlur", "id", "defaultChecked", "defaultSelected", "value", "children"]);
        var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(className, "select", "input");
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Form_InputWrapper__["a" /* default */], { className: classes, name: props.name, labelPrefix: labelPrefix, labelPostfix: labelPostfix, label: label },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "input-group" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "styled-select" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Base__["a" /* default */], __assign({}, props)),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "arrow" }, arrow))),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Validation_DisplayValidation__["a" /* default */], __assign({}, validationProps))));
    };
    return Select;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));
;
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__Form_Helpers_performanceWrapper__["a" /* default */])(Select));


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TextArea */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Form_InputWrapper__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Form_InputGroup__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Base__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Validation_DisplayValidation__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Form_Helpers_performanceWrapper__ = __webpack_require__(3);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
/** Libraries */


/** Components */





/** Class TextArea */
var TextArea = /** @class */ (function (_super) {
    __extends(TextArea, _super);
    function TextArea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextArea.prototype.render = function () {
        var _a = this.props, className = _a.className, label = _a.label, labelPrefix = _a.labelPrefix, labelPostfix = _a.labelPostfix, props = __rest(_a, ["className", "label", "labelPrefix", "labelPostfix"]);
        var autoFocus = props.autoFocus, onChange = props.onChange, onBlur = props.onBlur, id = props.id, value = props.value, validationProps = __rest(props, ["autoFocus", "onChange", "onBlur", "id", "value"]);
        var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(className, 'textarea', 'input');
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Form_InputWrapper__["a" /* default */], { className: classes, name: props.name, labelPrefix: labelPrefix, labelPostfix: labelPostfix, label: label },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Form_InputGroup__["a" /* default */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Base__["a" /* default */], __assign({}, props))),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Validation_DisplayValidation__["a" /* default */], __assign({}, validationProps))));
    };
    return TextArea;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));

;
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Form_Helpers_performanceWrapper__["a" /* default */])(TextArea));


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Form_Helpers_performanceWrapper__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DisplayValidation__ = __webpack_require__(9);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
/** Libraries */

/** Components */


/**
 * Class Validate
 *
 * A component to allow validation anywhere inside of a form component
 * for input elements in that same component
 */
var Validate = /** @class */ (function (_super) {
    __extends(Validate, _super);
    function Validate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Validate.prototype.render = function () {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__DisplayValidation__["a" /* default */], __assign({}, this.props));
    };
    return Validate;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Form_Helpers_performanceWrapper__["b" /* validationPerformanceWrapper */])(Validate));


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_CheckBox_CheckBox__ = __webpack_require__(32);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CheckBox", function() { return __WEBPACK_IMPORTED_MODULE_0__src_CheckBox_CheckBox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_DatePicker_DatePicker__ = __webpack_require__(33);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DatePicker", function() { return __WEBPACK_IMPORTED_MODULE_1__src_DatePicker_DatePicker__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_DatePicker_DateRange__ = __webpack_require__(34);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DateRange", function() { return __WEBPACK_IMPORTED_MODULE_2__src_DatePicker_DateRange__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_DropZone_DropZone__ = __webpack_require__(35);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DropZone", function() { return __WEBPACK_IMPORTED_MODULE_3__src_DropZone_DropZone__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_Input_Input__ = __webpack_require__(17);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return __WEBPACK_IMPORTED_MODULE_4__src_Input_Input__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_Number_Number__ = __webpack_require__(38);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Number", function() { return __WEBPACK_IMPORTED_MODULE_5__src_Number_Number__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_Radio_Radio__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return __WEBPACK_IMPORTED_MODULE_6__src_Radio_Radio__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_Radio_RadioTabs__ = __webpack_require__(40);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RadioTabs", function() { return __WEBPACK_IMPORTED_MODULE_7__src_Radio_RadioTabs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_Radio_RadioTab__ = __webpack_require__(39);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RadioTab", function() { return __WEBPACK_IMPORTED_MODULE_8__src_Radio_RadioTab__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_Select_Select__ = __webpack_require__(42);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return __WEBPACK_IMPORTED_MODULE_9__src_Select_Select__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_Select_MultiSelect__ = __webpack_require__(41);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MultiSelect", function() { return __WEBPACK_IMPORTED_MODULE_10__src_Select_MultiSelect__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_TextArea_TextArea__ = __webpack_require__(43);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TextArea", function() { return __WEBPACK_IMPORTED_MODULE_11__src_TextArea_TextArea__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_Validation_Validation__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Validation", function() { return __WEBPACK_IMPORTED_MODULE_12__src_Validation_Validation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_Validation_Validate__ = __webpack_require__(44);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Validate", function() { return __WEBPACK_IMPORTED_MODULE_13__src_Validation_Validate__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_Form_Form__ = __webpack_require__(37);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return __WEBPACK_IMPORTED_MODULE_14__src_Form_Form__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_Form_Reducers_index__ = __webpack_require__(16);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ReduxReducer", function() { return __WEBPACK_IMPORTED_MODULE_15__src_Form_Reducers_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_Form_Helpers_performanceWrapper__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "performanceWrapper", function() { return __WEBPACK_IMPORTED_MODULE_16__src_Form_Helpers_performanceWrapper__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_Form_Fieldset__ = __webpack_require__(36);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Fieldset", function() { return __WEBPACK_IMPORTED_MODULE_17__src_Form_Fieldset__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__src_Form_InputGroup__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "InputGroup", function() { return __WEBPACK_IMPORTED_MODULE_18__src_Form_InputGroup__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__src_Form_InputWrapper__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "InputWrapper", function() { return __WEBPACK_IMPORTED_MODULE_19__src_Form_InputWrapper__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__src_Form_ErrorWrapper__ = __webpack_require__(14);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorWrapper", function() { return __WEBPACK_IMPORTED_MODULE_20__src_Form_ErrorWrapper__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__src_Validation_DisplayValidation__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayValidation", function() { return __WEBPACK_IMPORTED_MODULE_21__src_Validation_DisplayValidation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__src_Form_Helpers_formHelpers__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "convertToFormData", function() { return __WEBPACK_IMPORTED_MODULE_22__src_Form_Helpers_formHelpers__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__libs_validate__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "validationsAvailable", function() { return __WEBPACK_IMPORTED_MODULE_23__libs_validate__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__src_Form_Actions_fields__ = __webpack_require__(13);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "clearAllInputs", function() { return __WEBPACK_IMPORTED_MODULE_24__src_Form_Actions_fields__["a"]; });



























/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var validations = {
    'email': '([\\w-\\.]+)@((?:[\\w]+\\.)+)([a-zA-Z]{2,24})$',
    'number': '^[0-9]+.?[0-9]*$'
};
/* harmony default export */ __webpack_exports__["a"] = (validations);


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getInputValue;
/* harmony export (immutable) */ __webpack_exports__["b"] = getInputValidation;
/* harmony export (immutable) */ __webpack_exports__["c"] = getInputState;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);

function getInputValue(nameSpace, inputName) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["List"])([nameSpace].concat(inputName, ['value']));
}
function getInputValidation(nameSpace, inputName) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["List"])([nameSpace].concat(inputName));
}
function getInputState(nameSpace, inputName, state) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["List"])([nameSpace].concat(inputName, [state]));
}


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Form_Helpers_inputHelpers__ = __webpack_require__(5);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
/** Libraries */


/** Helpers */

/** Class InputBase */
var InputBase = /** @class */ (function (_super) {
    __extends(InputBase, _super);
    function InputBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleChange = function (event) {
            var value = _this.props.type === 'file' ? event.target.files : event.target.value;
            _this.props.inputChanged(value);
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash__["isFunction"])(_this.props.onChange)) {
                _this.props.onChange(event);
            }
        };
        _this.handleBlured = function (event) {
            _this.props.setInputBlurred();
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash__["isFunction"])(_this.props.onBlur)) {
                _this.props.onBlur(event);
            }
        };
        return _this;
    }
    InputBase.prototype.render = function () {
        var attributes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Form_Helpers_inputHelpers__["c" /* getHTMLAttributes */])(this.props);
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", __assign({ onBlur: this.handleBlured }, attributes, { onChange: this.handleChange }));
    };
    return InputBase;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));
/* harmony default export */ __webpack_exports__["a"] = (InputBase);


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SelectBase */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Form_Helpers_inputHelpers__ = __webpack_require__(5);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
/** Libraries */


/** Components */

/** Helpers */
var getDefaultSelected = function (_a) {
    var children = _a.children, defaultValue = _a.defaultValue;
    if (__WEBPACK_IMPORTED_MODULE_0_react__["Children"].count(children) < 1) {
        return '';
    }
    else if (defaultValue) {
        return defaultValue;
    }
    else {
        return __WEBPACK_IMPORTED_MODULE_0_react__["Children"].toArray(children)[0].props.value;
    }
};
/** Class SelectBase */
var SelectBase = /** @class */ (function (_super) {
    __extends(SelectBase, _super);
    function SelectBase() {
        /*displayName: 'SelectBase'*/
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleChange = function (event) {
            var _a = _this.props, inputChanged = _a.inputChanged, onChange = _a.onChange;
            inputChanged(event.target.value);
            if (typeof onChange === 'function') {
                onChange(event);
            }
        };
        _this.handleBlur = function (event) {
            var onBlur = _this.props.onBlur;
            if (typeof onBlur === 'function') {
                onBlur(event);
            }
        };
        return _this;
    }
    SelectBase.prototype.render = function () {
        var attributes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Form_Helpers_inputHelpers__["c" /* getHTMLAttributes */])(this.props);
        var children = this.props.children;
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select", __assign({}, attributes, { onBlur: this.handleBlur, onChange: this.handleChange }), children));
    };
    return SelectBase;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_recompose__["withProps"])(function (props) {
    return {
        defaultSelected: getDefaultSelected(props)
    };
})(SelectBase));



/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Form_Helpers_inputHelpers__ = __webpack_require__(5);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
/** Libraries */

/** Helpers */

var isChecked = function (props) {
    if (props.type === 'radio') {
        return props.id + "" === props.value + "";
    }
    else {
        return !!props.value;
    }
};
/** {Internal} Method used internally to display a switch component(radio or checkbox)  */
var SwitchBase = /** @class */ (function (_super) {
    __extends(SwitchBase, _super);
    function SwitchBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getChecked = function (event) {
            if (_this.props.type === 'radio') {
                return _this.props.id;
            }
            else {
                return event.target.checked;
            }
        };
        _this.handleChange = function (event) {
            var _a = _this.props, inputChanged = _a.inputChanged, onChange = _a.onChange;
            inputChanged(_this.getChecked(event));
            if (typeof onChange === 'function') {
                onChange(event);
            }
        };
        _this.handleBlur = function (event) {
            var _a = _this.props, onBlur = _a.onBlur, setInputBlurred = _a.setInputBlurred;
            setInputBlurred();
            if (typeof onBlur === 'function') {
                onBlur(event);
            }
        };
        return _this;
    }
    SwitchBase.prototype.render = function () {
        var attributes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Form_Helpers_inputHelpers__["c" /* getHTMLAttributes */])(this.props);
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", __assign({ onBlur: this.handleBlur, onChange: this.handleChange, checked: isChecked(this.props), ref: this.props.name, value: attributes.id }, attributes, { id: this.props.id }));
    };
    return SwitchBase;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));
;
/* harmony default export */ __webpack_exports__["a"] = (SwitchBase);


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Form_Helpers_inputHelpers__ = __webpack_require__(5);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
/** Libraries */

/** Helpers */

/** Class TextAreaBase */
var TextAreaBase = /** @class */ (function (_super) {
    __extends(TextAreaBase, _super);
    function TextAreaBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleChange = function (event) {
            var _a = _this.props, inputChanged = _a.inputChanged, onChange = _a.onChange;
            inputChanged(event.target.value);
            if (typeof onChange === 'function') {
                onChange(event);
            }
        };
        _this.handleBlur = function (event) {
            var _a = _this.props, setInputBlurred = _a.setInputBlurred, onBlur = _a.onBlur;
            setInputBlurred();
            if (typeof onBlur === 'function') {
                onBlur(event);
            }
        };
        return _this;
    }
    TextAreaBase.prototype.render = function () {
        var attributes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Form_Helpers_inputHelpers__["c" /* getHTMLAttributes */])(this.props);
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("textarea", __assign({ onBlur: this.handleBlur, onChange: this.handleChange }, attributes));
    };
    return TextAreaBase;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (TextAreaBase);


/***/ }),
/* 52 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 53 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 54 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 55 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 56 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 57 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 58 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 59 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sizerStyle = {
	position: 'absolute',
	top: 0,
	left: 0,
	visibility: 'hidden',
	height: 0,
	overflow: 'scroll',
	whiteSpace: 'pre'
};

var AutosizeInput = function (_Component) {
	_inherits(AutosizeInput, _Component);

	function AutosizeInput(props) {
		_classCallCheck(this, AutosizeInput);

		var _this = _possibleConstructorReturn(this, (AutosizeInput.__proto__ || Object.getPrototypeOf(AutosizeInput)).call(this, props));

		_this.inputRef = function (el) {
			_this.input = el;
			if (typeof _this.props.inputRef === 'function') {
				_this.props.inputRef(el);
			}
		};

		_this.placeHolderSizerRef = function (el) {
			_this.placeHolderSizer = el;
		};

		_this.sizerRef = function (el) {
			_this.sizer = el;
		};

		_this.state = {
			inputWidth: props.minWidth,
			inputId: '_' + Math.random().toString(36).substr(2, 12)
		};
		return _this;
	}

	_createClass(AutosizeInput, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.mounted = true;
			this.copyInputStyles();
			this.updateInputWidth();
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (prevState.inputWidth !== this.state.inputWidth) {
				if (typeof this.props.onAutosize === 'function') {
					this.props.onAutosize(this.state.inputWidth);
				}
			}
			this.updateInputWidth();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.mounted = false;
		}
	}, {
		key: 'copyInputStyles',
		value: function copyInputStyles() {
			if (!this.mounted || !window.getComputedStyle) {
				return;
			}
			var inputStyle = this.input && window.getComputedStyle(this.input);
			if (!inputStyle) {
				return;
			}
			var widthNode = this.sizer;
			widthNode.style.fontSize = inputStyle.fontSize;
			widthNode.style.fontFamily = inputStyle.fontFamily;
			widthNode.style.fontWeight = inputStyle.fontWeight;
			widthNode.style.fontStyle = inputStyle.fontStyle;
			widthNode.style.letterSpacing = inputStyle.letterSpacing;
			widthNode.style.textTransform = inputStyle.textTransform;
			if (this.props.placeholder) {
				var placeholderNode = this.placeHolderSizer;
				placeholderNode.style.fontSize = inputStyle.fontSize;
				placeholderNode.style.fontFamily = inputStyle.fontFamily;
				placeholderNode.style.fontWeight = inputStyle.fontWeight;
				placeholderNode.style.fontStyle = inputStyle.fontStyle;
				placeholderNode.style.letterSpacing = inputStyle.letterSpacing;
				placeholderNode.style.textTransform = inputStyle.textTransform;
			}
		}
	}, {
		key: 'updateInputWidth',
		value: function updateInputWidth() {
			if (!this.mounted || !this.sizer || typeof this.sizer.scrollWidth === 'undefined') {
				return;
			}
			var newInputWidth = void 0;
			if (this.props.placeholder && (!this.props.value || this.props.value && this.props.placeholderIsMinWidth)) {
				newInputWidth = Math.max(this.sizer.scrollWidth, this.placeHolderSizer.scrollWidth) + 2;
			} else {
				newInputWidth = this.sizer.scrollWidth + 2;
			}
			if (newInputWidth < this.props.minWidth) {
				newInputWidth = this.props.minWidth;
			}
			if (newInputWidth !== this.state.inputWidth) {
				this.setState({
					inputWidth: newInputWidth
				});
			}
		}
	}, {
		key: 'getInput',
		value: function getInput() {
			return this.input;
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.input.focus();
		}
	}, {
		key: 'blur',
		value: function blur() {
			this.input.blur();
		}
	}, {
		key: 'select',
		value: function select() {
			this.input.select();
		}
	}, {
		key: 'render',
		value: function render() {
			var sizerValue = [this.props.defaultValue, this.props.value, ''].reduce(function (previousValue, currentValue) {
				if (previousValue !== null && previousValue !== undefined) {
					return previousValue;
				}
				return currentValue;
			});

			var wrapperStyle = _extends({}, this.props.style);
			if (!wrapperStyle.display) wrapperStyle.display = 'inline-block';
			var inputStyle = _extends({}, this.props.inputStyle);
			inputStyle.width = this.state.inputWidth + 'px';
			inputStyle.boxSizing = 'content-box';

			var inputProps = _objectWithoutProperties(this.props, []);

			inputProps.className = this.props.inputClassName;
			inputProps.style = inputStyle;
			// ensure props meant for `AutosizeInput` don't end up on the `input`
			delete inputProps.inputClassName;
			delete inputProps.inputStyle;
			delete inputProps.minWidth;
			delete inputProps.onAutosize;
			delete inputProps.placeholderIsMinWidth;
			delete inputProps.inputRef;
			return _react2.default.createElement(
				'div',
				{ className: this.props.className, style: wrapperStyle },
				_react2.default.createElement('style', { dangerouslySetInnerHTML: {
						__html: ['input#' + this.state.id + '::-ms-clear {display: none;}'].join('\n')
					} }),
				_react2.default.createElement('input', _extends({ id: this.state.id }, inputProps, { ref: this.inputRef })),
				_react2.default.createElement(
					'div',
					{ ref: this.sizerRef, style: sizerStyle },
					sizerValue
				),
				this.props.placeholder ? _react2.default.createElement(
					'div',
					{ ref: this.placeHolderSizerRef, style: sizerStyle },
					this.props.placeholder
				) : null
			);
		}
	}]);

	return AutosizeInput;
}(_react.Component);

;

AutosizeInput.propTypes = {
	className: _propTypes2.default.string, // className for the outer element
	defaultValue: _propTypes2.default.any, // default field value
	inputClassName: _propTypes2.default.string, // className for the input element
	inputRef: _propTypes2.default.func, // ref callback for the input element
	inputStyle: _propTypes2.default.object, // css styles for the input element
	minWidth: _propTypes2.default.oneOfType([// minimum width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	onAutosize: _propTypes2.default.func, // onAutosize handler: function(newWidth) {}
	onChange: _propTypes2.default.func, // onChange handler: function(newValue) {}
	placeholder: _propTypes2.default.string, // placeholder text
	placeholderIsMinWidth: _propTypes2.default.bool, // don't collapse size to less than the placeholder
	style: _propTypes2.default.object, // css styles for the outer element
	value: _propTypes2.default.any // field value
};
AutosizeInput.defaultProps = {
	minWidth: 1
};

exports.default = AutosizeInput;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Select = __webpack_require__(11);

var _Select2 = _interopRequireDefault(_Select);

var _Async = __webpack_require__(24);

var _Async2 = _interopRequireDefault(_Async);

var _Creatable = __webpack_require__(25);

var _Creatable2 = _interopRequireDefault(_Creatable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function reduce(obj) {
	var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	return Object.keys(obj).reduce(function (props, key) {
		var value = obj[key];
		if (value !== undefined) props[key] = value;
		return props;
	}, props);
}

var AsyncCreatableSelect = function (_React$Component) {
	_inherits(AsyncCreatableSelect, _React$Component);

	function AsyncCreatableSelect() {
		_classCallCheck(this, AsyncCreatableSelect);

		return _possibleConstructorReturn(this, (AsyncCreatableSelect.__proto__ || Object.getPrototypeOf(AsyncCreatableSelect)).apply(this, arguments));
	}

	_createClass(AsyncCreatableSelect, [{
		key: 'focus',
		value: function focus() {
			this.select.focus();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				_Async2.default,
				this.props,
				function (asyncProps) {
					return _react2.default.createElement(
						_Creatable2.default,
						_this2.props,
						function (creatableProps) {
							return _react2.default.createElement(_Select2.default, _extends({}, reduce(asyncProps, reduce(creatableProps, {})), {
								onInputChange: function onInputChange(input) {
									creatableProps.onInputChange(input);
									return asyncProps.onInputChange(input);
								},
								ref: function ref(_ref) {
									_this2.select = _ref;
									creatableProps.ref(_ref);
									asyncProps.ref(_ref);
								}
							}));
						}
					);
				}
			);
		}
	}]);

	return AsyncCreatableSelect;
}(_react2.default.Component);

;

exports.default = AsyncCreatableSelect;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = function (_React$Component) {
	_inherits(Option, _React$Component);

	function Option(props) {
		_classCallCheck(this, Option);

		var _this = _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, props));

		_this.handleMouseDown = _this.handleMouseDown.bind(_this);
		_this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
		_this.handleMouseMove = _this.handleMouseMove.bind(_this);
		_this.handleTouchStart = _this.handleTouchStart.bind(_this);
		_this.handleTouchEnd = _this.handleTouchEnd.bind(_this);
		_this.handleTouchMove = _this.handleTouchMove.bind(_this);
		_this.onFocus = _this.onFocus.bind(_this);
		return _this;
	}

	_createClass(Option, [{
		key: 'blockEvent',
		value: function blockEvent(event) {
			event.preventDefault();
			event.stopPropagation();
			if (event.target.tagName !== 'A' || !('href' in event.target)) {
				return;
			}
			if (event.target.target) {
				window.open(event.target.href, event.target.target);
			} else {
				window.location.href = event.target.href;
			}
		}
	}, {
		key: 'handleMouseDown',
		value: function handleMouseDown(event) {
			event.preventDefault();
			event.stopPropagation();
			this.props.onSelect(this.props.option, event);
		}
	}, {
		key: 'handleMouseEnter',
		value: function handleMouseEnter(event) {
			this.onFocus(event);
		}
	}, {
		key: 'handleMouseMove',
		value: function handleMouseMove(event) {
			this.onFocus(event);
		}
	}, {
		key: 'handleTouchEnd',
		value: function handleTouchEnd(event) {
			// Check if the view is being dragged, In this case
			// we don't want to fire the click event (because the user only wants to scroll)
			if (this.dragging) return;

			this.handleMouseDown(event);
		}
	}, {
		key: 'handleTouchMove',
		value: function handleTouchMove(event) {
			// Set a flag that the view is being dragged
			this.dragging = true;
		}
	}, {
		key: 'handleTouchStart',
		value: function handleTouchStart(event) {
			// Set a flag that the view is not being dragged
			this.dragging = false;
		}
	}, {
		key: 'onFocus',
		value: function onFocus(event) {
			if (!this.props.isFocused) {
				this.props.onFocus(this.props.option, event);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    option = _props.option,
			    instancePrefix = _props.instancePrefix,
			    optionIndex = _props.optionIndex;

			var className = (0, _classnames2.default)(this.props.className, option.className);

			return option.disabled ? _react2.default.createElement(
				'div',
				{ className: className,
					onMouseDown: this.blockEvent,
					onClick: this.blockEvent },
				this.props.children
			) : _react2.default.createElement(
				'div',
				{ className: className,
					style: option.style,
					role: 'option',
					onMouseDown: this.handleMouseDown,
					onMouseEnter: this.handleMouseEnter,
					onMouseMove: this.handleMouseMove,
					onTouchStart: this.handleTouchStart,
					onTouchMove: this.handleTouchMove,
					onTouchEnd: this.handleTouchEnd,
					id: instancePrefix + '-option-' + optionIndex,
					title: option.title },
				this.props.children
			);
		}
	}]);

	return Option;
}(_react2.default.Component);

;

Option.propTypes = {
	children: _propTypes2.default.node,
	className: _propTypes2.default.string, // className (based on mouse position)
	instancePrefix: _propTypes2.default.string.isRequired, // unique prefix for the ids (used for aria)
	isDisabled: _propTypes2.default.bool, // the option is disabled
	isFocused: _propTypes2.default.bool, // the option is focused
	isSelected: _propTypes2.default.bool, // the option is selected
	onFocus: _propTypes2.default.func, // method to handle mouseEnter on option element
	onSelect: _propTypes2.default.func, // method to handle click on option element
	onUnfocus: _propTypes2.default.func, // method to handle mouseLeave on option element
	option: _propTypes2.default.object.isRequired, // object that is base for that option
	optionIndex: _propTypes2.default.number // index of the option, used to generate unique ids for aria
};

exports.default = Option;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Value = exports.Creatable = exports.AsyncCreatable = exports.Async = undefined;

var _Select = __webpack_require__(11);

var _Select2 = _interopRequireDefault(_Select);

var _Async = __webpack_require__(24);

var _Async2 = _interopRequireDefault(_Async);

var _AsyncCreatable = __webpack_require__(61);

var _AsyncCreatable2 = _interopRequireDefault(_AsyncCreatable);

var _Creatable = __webpack_require__(25);

var _Creatable2 = _interopRequireDefault(_Creatable);

var _Value = __webpack_require__(26);

var _Value2 = _interopRequireDefault(_Value);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Select2.default.Async = _Async2.default;
_Select2.default.AsyncCreatable = _AsyncCreatable2.default;
_Select2.default.Creatable = _Creatable2.default;
_Select2.default.Value = _Value2.default;

exports.default = _Select2.default;
exports.Async = _Async2.default;
exports.AsyncCreatable = _AsyncCreatable2.default;
exports.Creatable = _Creatable2.default;
exports.Value = _Value2.default;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = arrowRenderer;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function arrowRenderer(_ref) {
	var onMouseDown = _ref.onMouseDown;

	return _react2.default.createElement('span', {
		className: 'Select-arrow',
		onMouseDown: onMouseDown
	});
};

arrowRenderer.propTypes = {
	onMouseDown: _propTypes2.default.func
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = clearRenderer;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function clearRenderer() {
	return _react2.default.createElement('span', {
		className: 'Select-clear',
		dangerouslySetInnerHTML: { __html: '&times;' }
	});
};

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_66__;

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_67__;

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_68__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=main.js.map