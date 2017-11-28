(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("classnames"), require("immutable"), require("lodash"), require("recompose"), require("prop-types"), require("moment"), require("react-date-range"), require("react-dropzone"), require("react-onclickoutside"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "classnames", "immutable", "lodash", "recompose", "prop-types", "moment", "react-date-range", "react-dropzone", "react-onclickoutside"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("classnames"), require("immutable"), require("lodash"), require("recompose"), require("prop-types"), require("moment"), require("react-date-range"), require("react-dropzone"), require("react-onclickoutside")) : factory(root["React"], root["classnames"], root["Immutable"], root["_"], root["Recompose"], root["prop-types"], root["Moment"], root["ReactDateRange"], root["ReactDropzone"], root["ReactOnclickoutside"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_23__, __WEBPACK_EXTERNAL_MODULE_24__, __WEBPACK_EXTERNAL_MODULE_51__, __WEBPACK_EXTERNAL_MODULE_52__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_immutable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inputHelpers__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Actions_fields__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Form_Helpers_createSpecificShallowEqual__ = __webpack_require__(20);
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
            return __WEBPACK_IMPORTED_MODULE_6__Form_Helpers_createSpecificShallowEqual__["a" /* default */].apply(void 0, additionalCompareProps);
        }
        else {
            return function () { return false; };
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isMultipleValueInput; });
/* harmony export (immutable) */ __webpack_exports__["b"] = returnCheckedValue;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getHTMLAttributes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(5);
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
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ErrorWrapper__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__InputWrapper_scss__ = __webpack_require__(46);
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Validation_Validation__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__libs_validate__ = __webpack_require__(10);
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__InputGroup_scss__ = __webpack_require__(45);
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return validations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return validationsMessages; });
/* unused harmony export testValidation */
/* harmony export (immutable) */ __webpack_exports__["a"] = validationsAvailable;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return testElement; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validationRegExps__ = __webpack_require__(38);


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
/* 11 */
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
/* 12 */
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
/* 13 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return convertToFormData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return normalizeFields; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__inputHelpers__ = __webpack_require__(4);
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
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return basicReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return withReducerState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Helpers_path__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Helpers_inputHelpers__ = __webpack_require__(4);
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
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Input */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Form_InputGroup__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Form_InputWrapper__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Base__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Validation_DisplayValidation__ = __webpack_require__(8);
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
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Switch_Switch__ = __webpack_require__(21);
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
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Form_Helpers_createSpecificShallowEqual__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__libs_validate__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Form_Helpers_inputHelpers__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Validation_scss__ = __webpack_require__(50);
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
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DateWrapper */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_onclickoutside__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_onclickoutside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_onclickoutside__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Form_InputWrapper__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Form_InputGroup__ = __webpack_require__(9);
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
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(5);
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
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Switch */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Base__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Validation_DisplayValidation__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Form_ErrorWrapper__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Form_Helpers_performanceWrapper__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Switch_scss__ = __webpack_require__(49);
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
/* 22 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_23__;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_24__;

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Switch_Switch__ = __webpack_require__(21);
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
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DatePicker */
/* unused harmony export CalendarBase */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_date_range__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_date_range___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_date_range__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DateWrapper__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Form_Helpers_performanceWrapper__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__DateRange_scss__ = __webpack_require__(22);
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
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DateRangeBase */
/* unused harmony export DateRangePicker */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_immutable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_date_range__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_date_range___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_date_range__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DateWrapper__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Form_Helpers_performanceWrapper__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__DateRange_scss__ = __webpack_require__(22);
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
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DropZone */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dropzone__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dropzone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dropzone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Form_Helpers_performanceWrapper__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Form_Helpers_inputHelpers__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__DropZone_scss__ = __webpack_require__(44);
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
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose__ = __webpack_require__(6);
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
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_immutable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_recompose__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Actions_fields__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Reducers__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Helpers_formHelpers__ = __webpack_require__(14);
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
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Input_Input__ = __webpack_require__(16);
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
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Radio_Radio__ = __webpack_require__(17);
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
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Form_InputWrapper__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__RadioTabs_scss__ = __webpack_require__(47);
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
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Form_InputWrapper__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Form_Helpers_performanceWrapper__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Validation_DisplayValidation__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Base__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Select_scss__ = __webpack_require__(48);
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
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TextArea */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Form_InputWrapper__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Form_InputGroup__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Base__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Validation_DisplayValidation__ = __webpack_require__(8);
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
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Form_Helpers_performanceWrapper__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DisplayValidation__ = __webpack_require__(8);
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
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_CheckBox_CheckBox__ = __webpack_require__(25);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CheckBox", function() { return __WEBPACK_IMPORTED_MODULE_0__src_CheckBox_CheckBox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_DatePicker_DatePicker__ = __webpack_require__(26);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DatePicker", function() { return __WEBPACK_IMPORTED_MODULE_1__src_DatePicker_DatePicker__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_DatePicker_DateRange__ = __webpack_require__(27);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DateRange", function() { return __WEBPACK_IMPORTED_MODULE_2__src_DatePicker_DateRange__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_DropZone_DropZone__ = __webpack_require__(28);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DropZone", function() { return __WEBPACK_IMPORTED_MODULE_3__src_DropZone_DropZone__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_Input_Input__ = __webpack_require__(16);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return __WEBPACK_IMPORTED_MODULE_4__src_Input_Input__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_Number_Number__ = __webpack_require__(31);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Number", function() { return __WEBPACK_IMPORTED_MODULE_5__src_Number_Number__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_Radio_Radio__ = __webpack_require__(17);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return __WEBPACK_IMPORTED_MODULE_6__src_Radio_Radio__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_Radio_RadioTabs__ = __webpack_require__(33);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RadioTabs", function() { return __WEBPACK_IMPORTED_MODULE_7__src_Radio_RadioTabs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_Radio_RadioTab__ = __webpack_require__(32);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RadioTab", function() { return __WEBPACK_IMPORTED_MODULE_8__src_Radio_RadioTab__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_Select_Select__ = __webpack_require__(34);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return __WEBPACK_IMPORTED_MODULE_9__src_Select_Select__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_TextArea_TextArea__ = __webpack_require__(35);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TextArea", function() { return __WEBPACK_IMPORTED_MODULE_10__src_TextArea_TextArea__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_Validation_Validation__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Validation", function() { return __WEBPACK_IMPORTED_MODULE_11__src_Validation_Validation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_Validation_Validate__ = __webpack_require__(36);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Validate", function() { return __WEBPACK_IMPORTED_MODULE_12__src_Validation_Validate__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_Form_Form__ = __webpack_require__(30);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return __WEBPACK_IMPORTED_MODULE_13__src_Form_Form__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_Form_Reducers_index__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ReduxReducer", function() { return __WEBPACK_IMPORTED_MODULE_14__src_Form_Reducers_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_Form_Helpers_performanceWrapper__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "performanceWrapper", function() { return __WEBPACK_IMPORTED_MODULE_15__src_Form_Helpers_performanceWrapper__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_Form_Fieldset__ = __webpack_require__(29);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Fieldset", function() { return __WEBPACK_IMPORTED_MODULE_16__src_Form_Fieldset__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_Form_InputGroup__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "InputGroup", function() { return __WEBPACK_IMPORTED_MODULE_17__src_Form_InputGroup__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__src_Form_InputWrapper__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "InputWrapper", function() { return __WEBPACK_IMPORTED_MODULE_18__src_Form_InputWrapper__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__src_Form_ErrorWrapper__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorWrapper", function() { return __WEBPACK_IMPORTED_MODULE_19__src_Form_ErrorWrapper__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__src_Validation_DisplayValidation__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayValidation", function() { return __WEBPACK_IMPORTED_MODULE_20__src_Validation_DisplayValidation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__src_Form_Helpers_formHelpers__ = __webpack_require__(14);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "convertToFormData", function() { return __WEBPACK_IMPORTED_MODULE_21__src_Form_Helpers_formHelpers__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__libs_validate__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "validationsAvailable", function() { return __WEBPACK_IMPORTED_MODULE_22__libs_validate__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__src_Form_Actions_fields__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "clearAllInputs", function() { return __WEBPACK_IMPORTED_MODULE_23__src_Form_Actions_fields__["a"]; });


























/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var validations = {
    'email': '([\\w-\\.]+)@((?:[\\w]+\\.)+)([a-zA-Z]{2,24})$',
    'number': '^[0-9]+.?[0-9]*$'
};
/* harmony default export */ __webpack_exports__["a"] = (validations);


/***/ }),
/* 39 */
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
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Form_Helpers_inputHelpers__ = __webpack_require__(4);
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
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SelectBase */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Form_Helpers_inputHelpers__ = __webpack_require__(4);
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
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Form_Helpers_inputHelpers__ = __webpack_require__(4);
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
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Form_Helpers_inputHelpers__ = __webpack_require__(4);
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
/* 44 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 45 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 46 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 47 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 48 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 49 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 50 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_51__;

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_52__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=main.js.map