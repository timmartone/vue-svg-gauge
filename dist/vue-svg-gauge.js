(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("vue-svg-gauge", [], factory);
	else if(typeof exports === 'object')
		exports["vue-svg-gauge"] = factory();
	else
		root["vue-svg-gauge"] = factory();
})(window, function() {
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Gauge.vue");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@tweenjs/tween.js/src/Tween.js":
/*!*****************************************************!*\
  !*** ./node_modules/@tweenjs/tween.js/src/Tween.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(process) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**\n * Tween.js - Licensed under the MIT license\n * https://github.com/tweenjs/tween.js\n * ----------------------------------------------\n *\n * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.\n * Thank you all, you're awesome!\n */\n\n\nvar _Group = function () {\n\tthis._tweens = {};\n\tthis._tweensAddedDuringUpdate = {};\n};\n\n_Group.prototype = {\n\tgetAll: function () {\n\n\t\treturn Object.keys(this._tweens).map(function (tweenId) {\n\t\t\treturn this._tweens[tweenId];\n\t\t}.bind(this));\n\n\t},\n\n\tremoveAll: function () {\n\n\t\tthis._tweens = {};\n\n\t},\n\n\tadd: function (tween) {\n\n\t\tthis._tweens[tween.getId()] = tween;\n\t\tthis._tweensAddedDuringUpdate[tween.getId()] = tween;\n\n\t},\n\n\tremove: function (tween) {\n\n\t\tdelete this._tweens[tween.getId()];\n\t\tdelete this._tweensAddedDuringUpdate[tween.getId()];\n\n\t},\n\n\tupdate: function (time, preserve) {\n\n\t\tvar tweenIds = Object.keys(this._tweens);\n\n\t\tif (tweenIds.length === 0) {\n\t\t\treturn false;\n\t\t}\n\n\t\ttime = time !== undefined ? time : TWEEN.now();\n\n\t\t// Tweens are updated in \"batches\". If you add a new tween during an update, then the\n\t\t// new tween will be updated in the next batch.\n\t\t// If you remove a tween during an update, it may or may not be updated. However,\n\t\t// if the removed tween was added during the current batch, then it will not be updated.\n\t\twhile (tweenIds.length > 0) {\n\t\t\tthis._tweensAddedDuringUpdate = {};\n\n\t\t\tfor (var i = 0; i < tweenIds.length; i++) {\n\n\t\t\t\tvar tween = this._tweens[tweenIds[i]];\n\n\t\t\t\tif (tween && tween.update(time) === false) {\n\t\t\t\t\ttween._isPlaying = false;\n\n\t\t\t\t\tif (!preserve) {\n\t\t\t\t\t\tdelete this._tweens[tweenIds[i]];\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\ttweenIds = Object.keys(this._tweensAddedDuringUpdate);\n\t\t}\n\n\t\treturn true;\n\n\t}\n};\n\nvar TWEEN = new _Group();\n\nTWEEN.Group = _Group;\nTWEEN._nextId = 0;\nTWEEN.nextId = function () {\n\treturn TWEEN._nextId++;\n};\n\n\n// Include a performance.now polyfill.\n// In node.js, use process.hrtime.\nif (typeof (window) === 'undefined' && typeof (process) !== 'undefined' && process.hrtime) {\n\tTWEEN.now = function () {\n\t\tvar time = process.hrtime();\n\n\t\t// Convert [seconds, nanoseconds] to milliseconds.\n\t\treturn time[0] * 1000 + time[1] / 1000000;\n\t};\n}\n// In a browser, use window.performance.now if it is available.\nelse if (typeof (window) !== 'undefined' &&\n         window.performance !== undefined &&\n\t\t window.performance.now !== undefined) {\n\t// This must be bound, because directly assigning this function\n\t// leads to an invocation exception in Chrome.\n\tTWEEN.now = window.performance.now.bind(window.performance);\n}\n// Use Date.now if it is available.\nelse if (Date.now !== undefined) {\n\tTWEEN.now = Date.now;\n}\n// Otherwise, use 'new Date().getTime()'.\nelse {\n\tTWEEN.now = function () {\n\t\treturn new Date().getTime();\n\t};\n}\n\n\nTWEEN.Tween = function (object, group) {\n\tthis._object = object;\n\tthis._valuesStart = {};\n\tthis._valuesEnd = {};\n\tthis._valuesStartRepeat = {};\n\tthis._duration = 1000;\n\tthis._repeat = 0;\n\tthis._repeatDelayTime = undefined;\n\tthis._yoyo = false;\n\tthis._isPlaying = false;\n\tthis._reversed = false;\n\tthis._delayTime = 0;\n\tthis._startTime = null;\n\tthis._easingFunction = TWEEN.Easing.Linear.None;\n\tthis._interpolationFunction = TWEEN.Interpolation.Linear;\n\tthis._chainedTweens = [];\n\tthis._onStartCallback = null;\n\tthis._onStartCallbackFired = false;\n\tthis._onUpdateCallback = null;\n\tthis._onCompleteCallback = null;\n\tthis._onStopCallback = null;\n\tthis._group = group || TWEEN;\n\tthis._id = TWEEN.nextId();\n\n};\n\nTWEEN.Tween.prototype = {\n\tgetId: function getId() {\n\t\treturn this._id;\n\t},\n\n\tisPlaying: function isPlaying() {\n\t\treturn this._isPlaying;\n\t},\n\n\tto: function to(properties, duration) {\n\n\t\tthis._valuesEnd = properties;\n\n\t\tif (duration !== undefined) {\n\t\t\tthis._duration = duration;\n\t\t}\n\n\t\treturn this;\n\n\t},\n\n\tstart: function start(time) {\n\n\t\tthis._group.add(this);\n\n\t\tthis._isPlaying = true;\n\n\t\tthis._onStartCallbackFired = false;\n\n\t\tthis._startTime = time !== undefined ? typeof time === 'string' ? TWEEN.now() + parseFloat(time) : time : TWEEN.now();\n\t\tthis._startTime += this._delayTime;\n\n\t\tfor (var property in this._valuesEnd) {\n\n\t\t\t// Check if an Array was provided as property value\n\t\t\tif (this._valuesEnd[property] instanceof Array) {\n\n\t\t\t\tif (this._valuesEnd[property].length === 0) {\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\n\t\t\t\t// Create a local copy of the Array with the start value at the front\n\t\t\t\tthis._valuesEnd[property] = [this._object[property]].concat(this._valuesEnd[property]);\n\n\t\t\t}\n\n\t\t\t// If `to()` specifies a property that doesn't exist in the source object,\n\t\t\t// we should not set that property in the object\n\t\t\tif (this._object[property] === undefined) {\n\t\t\t\tcontinue;\n\t\t\t}\n\n\t\t\t// Save the starting value.\n\t\t\tthis._valuesStart[property] = this._object[property];\n\n\t\t\tif ((this._valuesStart[property] instanceof Array) === false) {\n\t\t\t\tthis._valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings\n\t\t\t}\n\n\t\t\tthis._valuesStartRepeat[property] = this._valuesStart[property] || 0;\n\n\t\t}\n\n\t\treturn this;\n\n\t},\n\n\tstop: function stop() {\n\n\t\tif (!this._isPlaying) {\n\t\t\treturn this;\n\t\t}\n\n\t\tthis._group.remove(this);\n\t\tthis._isPlaying = false;\n\n\t\tif (this._onStopCallback !== null) {\n\t\t\tthis._onStopCallback(this._object);\n\t\t}\n\n\t\tthis.stopChainedTweens();\n\t\treturn this;\n\n\t},\n\n\tend: function end() {\n\n\t\tthis.update(this._startTime + this._duration);\n\t\treturn this;\n\n\t},\n\n\tstopChainedTweens: function stopChainedTweens() {\n\n\t\tfor (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {\n\t\t\tthis._chainedTweens[i].stop();\n\t\t}\n\n\t},\n\n\tgroup: function group(group) {\n\t\tthis._group = group;\n\t\treturn this;\n\t},\n\n\tdelay: function delay(amount) {\n\n\t\tthis._delayTime = amount;\n\t\treturn this;\n\n\t},\n\n\trepeat: function repeat(times) {\n\n\t\tthis._repeat = times;\n\t\treturn this;\n\n\t},\n\n\trepeatDelay: function repeatDelay(amount) {\n\n\t\tthis._repeatDelayTime = amount;\n\t\treturn this;\n\n\t},\n\n\tyoyo: function yoyo(yy) {\n\n\t\tthis._yoyo = yy;\n\t\treturn this;\n\n\t},\n\n\teasing: function easing(eas) {\n\n\t\tthis._easingFunction = eas;\n\t\treturn this;\n\n\t},\n\n\tinterpolation: function interpolation(inter) {\n\n\t\tthis._interpolationFunction = inter;\n\t\treturn this;\n\n\t},\n\n\tchain: function chain() {\n\n\t\tthis._chainedTweens = arguments;\n\t\treturn this;\n\n\t},\n\n\tonStart: function onStart(callback) {\n\n\t\tthis._onStartCallback = callback;\n\t\treturn this;\n\n\t},\n\n\tonUpdate: function onUpdate(callback) {\n\n\t\tthis._onUpdateCallback = callback;\n\t\treturn this;\n\n\t},\n\n\tonComplete: function onComplete(callback) {\n\n\t\tthis._onCompleteCallback = callback;\n\t\treturn this;\n\n\t},\n\n\tonStop: function onStop(callback) {\n\n\t\tthis._onStopCallback = callback;\n\t\treturn this;\n\n\t},\n\n\tupdate: function update(time) {\n\n\t\tvar property;\n\t\tvar elapsed;\n\t\tvar value;\n\n\t\tif (time < this._startTime) {\n\t\t\treturn true;\n\t\t}\n\n\t\tif (this._onStartCallbackFired === false) {\n\n\t\t\tif (this._onStartCallback !== null) {\n\t\t\t\tthis._onStartCallback(this._object);\n\t\t\t}\n\n\t\t\tthis._onStartCallbackFired = true;\n\t\t}\n\n\t\telapsed = (time - this._startTime) / this._duration;\n\t\telapsed = (this._duration === 0 || elapsed > 1) ? 1 : elapsed;\n\n\t\tvalue = this._easingFunction(elapsed);\n\n\t\tfor (property in this._valuesEnd) {\n\n\t\t\t// Don't update properties that do not exist in the source object\n\t\t\tif (this._valuesStart[property] === undefined) {\n\t\t\t\tcontinue;\n\t\t\t}\n\n\t\t\tvar start = this._valuesStart[property] || 0;\n\t\t\tvar end = this._valuesEnd[property];\n\n\t\t\tif (end instanceof Array) {\n\n\t\t\t\tthis._object[property] = this._interpolationFunction(end, value);\n\n\t\t\t} else {\n\n\t\t\t\t// Parses relative end values with start as base (e.g.: +10, -3)\n\t\t\t\tif (typeof (end) === 'string') {\n\n\t\t\t\t\tif (end.charAt(0) === '+' || end.charAt(0) === '-') {\n\t\t\t\t\t\tend = start + parseFloat(end);\n\t\t\t\t\t} else {\n\t\t\t\t\t\tend = parseFloat(end);\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t// Protect against non numeric properties.\n\t\t\t\tif (typeof (end) === 'number') {\n\t\t\t\t\tthis._object[property] = start + (end - start) * value;\n\t\t\t\t}\n\n\t\t\t}\n\n\t\t}\n\n\t\tif (this._onUpdateCallback !== null) {\n\t\t\tthis._onUpdateCallback(this._object);\n\t\t}\n\n\t\tif (elapsed === 1) {\n\n\t\t\tif (this._repeat > 0) {\n\n\t\t\t\tif (isFinite(this._repeat)) {\n\t\t\t\t\tthis._repeat--;\n\t\t\t\t}\n\n\t\t\t\t// Reassign starting values, restart by making startTime = now\n\t\t\t\tfor (property in this._valuesStartRepeat) {\n\n\t\t\t\t\tif (typeof (this._valuesEnd[property]) === 'string') {\n\t\t\t\t\t\tthis._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);\n\t\t\t\t\t}\n\n\t\t\t\t\tif (this._yoyo) {\n\t\t\t\t\t\tvar tmp = this._valuesStartRepeat[property];\n\n\t\t\t\t\t\tthis._valuesStartRepeat[property] = this._valuesEnd[property];\n\t\t\t\t\t\tthis._valuesEnd[property] = tmp;\n\t\t\t\t\t}\n\n\t\t\t\t\tthis._valuesStart[property] = this._valuesStartRepeat[property];\n\n\t\t\t\t}\n\n\t\t\t\tif (this._yoyo) {\n\t\t\t\t\tthis._reversed = !this._reversed;\n\t\t\t\t}\n\n\t\t\t\tif (this._repeatDelayTime !== undefined) {\n\t\t\t\t\tthis._startTime = time + this._repeatDelayTime;\n\t\t\t\t} else {\n\t\t\t\t\tthis._startTime = time + this._delayTime;\n\t\t\t\t}\n\n\t\t\t\treturn true;\n\n\t\t\t} else {\n\n\t\t\t\tif (this._onCompleteCallback !== null) {\n\n\t\t\t\t\tthis._onCompleteCallback(this._object);\n\t\t\t\t}\n\n\t\t\t\tfor (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {\n\t\t\t\t\t// Make the chained tweens start exactly at the time they should,\n\t\t\t\t\t// even if the `update()` method was called way past the duration of the tween\n\t\t\t\t\tthis._chainedTweens[i].start(this._startTime + this._duration);\n\t\t\t\t}\n\n\t\t\t\treturn false;\n\n\t\t\t}\n\n\t\t}\n\n\t\treturn true;\n\n\t}\n};\n\n\nTWEEN.Easing = {\n\n\tLinear: {\n\n\t\tNone: function (k) {\n\n\t\t\treturn k;\n\n\t\t}\n\n\t},\n\n\tQuadratic: {\n\n\t\tIn: function (k) {\n\n\t\t\treturn k * k;\n\n\t\t},\n\n\t\tOut: function (k) {\n\n\t\t\treturn k * (2 - k);\n\n\t\t},\n\n\t\tInOut: function (k) {\n\n\t\t\tif ((k *= 2) < 1) {\n\t\t\t\treturn 0.5 * k * k;\n\t\t\t}\n\n\t\t\treturn - 0.5 * (--k * (k - 2) - 1);\n\n\t\t}\n\n\t},\n\n\tCubic: {\n\n\t\tIn: function (k) {\n\n\t\t\treturn k * k * k;\n\n\t\t},\n\n\t\tOut: function (k) {\n\n\t\t\treturn --k * k * k + 1;\n\n\t\t},\n\n\t\tInOut: function (k) {\n\n\t\t\tif ((k *= 2) < 1) {\n\t\t\t\treturn 0.5 * k * k * k;\n\t\t\t}\n\n\t\t\treturn 0.5 * ((k -= 2) * k * k + 2);\n\n\t\t}\n\n\t},\n\n\tQuartic: {\n\n\t\tIn: function (k) {\n\n\t\t\treturn k * k * k * k;\n\n\t\t},\n\n\t\tOut: function (k) {\n\n\t\t\treturn 1 - (--k * k * k * k);\n\n\t\t},\n\n\t\tInOut: function (k) {\n\n\t\t\tif ((k *= 2) < 1) {\n\t\t\t\treturn 0.5 * k * k * k * k;\n\t\t\t}\n\n\t\t\treturn - 0.5 * ((k -= 2) * k * k * k - 2);\n\n\t\t}\n\n\t},\n\n\tQuintic: {\n\n\t\tIn: function (k) {\n\n\t\t\treturn k * k * k * k * k;\n\n\t\t},\n\n\t\tOut: function (k) {\n\n\t\t\treturn --k * k * k * k * k + 1;\n\n\t\t},\n\n\t\tInOut: function (k) {\n\n\t\t\tif ((k *= 2) < 1) {\n\t\t\t\treturn 0.5 * k * k * k * k * k;\n\t\t\t}\n\n\t\t\treturn 0.5 * ((k -= 2) * k * k * k * k + 2);\n\n\t\t}\n\n\t},\n\n\tSinusoidal: {\n\n\t\tIn: function (k) {\n\n\t\t\treturn 1 - Math.cos(k * Math.PI / 2);\n\n\t\t},\n\n\t\tOut: function (k) {\n\n\t\t\treturn Math.sin(k * Math.PI / 2);\n\n\t\t},\n\n\t\tInOut: function (k) {\n\n\t\t\treturn 0.5 * (1 - Math.cos(Math.PI * k));\n\n\t\t}\n\n\t},\n\n\tExponential: {\n\n\t\tIn: function (k) {\n\n\t\t\treturn k === 0 ? 0 : Math.pow(1024, k - 1);\n\n\t\t},\n\n\t\tOut: function (k) {\n\n\t\t\treturn k === 1 ? 1 : 1 - Math.pow(2, - 10 * k);\n\n\t\t},\n\n\t\tInOut: function (k) {\n\n\t\t\tif (k === 0) {\n\t\t\t\treturn 0;\n\t\t\t}\n\n\t\t\tif (k === 1) {\n\t\t\t\treturn 1;\n\t\t\t}\n\n\t\t\tif ((k *= 2) < 1) {\n\t\t\t\treturn 0.5 * Math.pow(1024, k - 1);\n\t\t\t}\n\n\t\t\treturn 0.5 * (- Math.pow(2, - 10 * (k - 1)) + 2);\n\n\t\t}\n\n\t},\n\n\tCircular: {\n\n\t\tIn: function (k) {\n\n\t\t\treturn 1 - Math.sqrt(1 - k * k);\n\n\t\t},\n\n\t\tOut: function (k) {\n\n\t\t\treturn Math.sqrt(1 - (--k * k));\n\n\t\t},\n\n\t\tInOut: function (k) {\n\n\t\t\tif ((k *= 2) < 1) {\n\t\t\t\treturn - 0.5 * (Math.sqrt(1 - k * k) - 1);\n\t\t\t}\n\n\t\t\treturn 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);\n\n\t\t}\n\n\t},\n\n\tElastic: {\n\n\t\tIn: function (k) {\n\n\t\t\tif (k === 0) {\n\t\t\t\treturn 0;\n\t\t\t}\n\n\t\t\tif (k === 1) {\n\t\t\t\treturn 1;\n\t\t\t}\n\n\t\t\treturn -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);\n\n\t\t},\n\n\t\tOut: function (k) {\n\n\t\t\tif (k === 0) {\n\t\t\t\treturn 0;\n\t\t\t}\n\n\t\t\tif (k === 1) {\n\t\t\t\treturn 1;\n\t\t\t}\n\n\t\t\treturn Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;\n\n\t\t},\n\n\t\tInOut: function (k) {\n\n\t\t\tif (k === 0) {\n\t\t\t\treturn 0;\n\t\t\t}\n\n\t\t\tif (k === 1) {\n\t\t\t\treturn 1;\n\t\t\t}\n\n\t\t\tk *= 2;\n\n\t\t\tif (k < 1) {\n\t\t\t\treturn -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);\n\t\t\t}\n\n\t\t\treturn 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1;\n\n\t\t}\n\n\t},\n\n\tBack: {\n\n\t\tIn: function (k) {\n\n\t\t\tvar s = 1.70158;\n\n\t\t\treturn k * k * ((s + 1) * k - s);\n\n\t\t},\n\n\t\tOut: function (k) {\n\n\t\t\tvar s = 1.70158;\n\n\t\t\treturn --k * k * ((s + 1) * k + s) + 1;\n\n\t\t},\n\n\t\tInOut: function (k) {\n\n\t\t\tvar s = 1.70158 * 1.525;\n\n\t\t\tif ((k *= 2) < 1) {\n\t\t\t\treturn 0.5 * (k * k * ((s + 1) * k - s));\n\t\t\t}\n\n\t\t\treturn 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);\n\n\t\t}\n\n\t},\n\n\tBounce: {\n\n\t\tIn: function (k) {\n\n\t\t\treturn 1 - TWEEN.Easing.Bounce.Out(1 - k);\n\n\t\t},\n\n\t\tOut: function (k) {\n\n\t\t\tif (k < (1 / 2.75)) {\n\t\t\t\treturn 7.5625 * k * k;\n\t\t\t} else if (k < (2 / 2.75)) {\n\t\t\t\treturn 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;\n\t\t\t} else if (k < (2.5 / 2.75)) {\n\t\t\t\treturn 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;\n\t\t\t} else {\n\t\t\t\treturn 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;\n\t\t\t}\n\n\t\t},\n\n\t\tInOut: function (k) {\n\n\t\t\tif (k < 0.5) {\n\t\t\t\treturn TWEEN.Easing.Bounce.In(k * 2) * 0.5;\n\t\t\t}\n\n\t\t\treturn TWEEN.Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;\n\n\t\t}\n\n\t}\n\n};\n\nTWEEN.Interpolation = {\n\n\tLinear: function (v, k) {\n\n\t\tvar m = v.length - 1;\n\t\tvar f = m * k;\n\t\tvar i = Math.floor(f);\n\t\tvar fn = TWEEN.Interpolation.Utils.Linear;\n\n\t\tif (k < 0) {\n\t\t\treturn fn(v[0], v[1], f);\n\t\t}\n\n\t\tif (k > 1) {\n\t\t\treturn fn(v[m], v[m - 1], m - f);\n\t\t}\n\n\t\treturn fn(v[i], v[i + 1 > m ? m : i + 1], f - i);\n\n\t},\n\n\tBezier: function (v, k) {\n\n\t\tvar b = 0;\n\t\tvar n = v.length - 1;\n\t\tvar pw = Math.pow;\n\t\tvar bn = TWEEN.Interpolation.Utils.Bernstein;\n\n\t\tfor (var i = 0; i <= n; i++) {\n\t\t\tb += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);\n\t\t}\n\n\t\treturn b;\n\n\t},\n\n\tCatmullRom: function (v, k) {\n\n\t\tvar m = v.length - 1;\n\t\tvar f = m * k;\n\t\tvar i = Math.floor(f);\n\t\tvar fn = TWEEN.Interpolation.Utils.CatmullRom;\n\n\t\tif (v[0] === v[m]) {\n\n\t\t\tif (k < 0) {\n\t\t\t\ti = Math.floor(f = m * (1 + k));\n\t\t\t}\n\n\t\t\treturn fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);\n\n\t\t} else {\n\n\t\t\tif (k < 0) {\n\t\t\t\treturn v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);\n\t\t\t}\n\n\t\t\tif (k > 1) {\n\t\t\t\treturn v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);\n\t\t\t}\n\n\t\t\treturn fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);\n\n\t\t}\n\n\t},\n\n\tUtils: {\n\n\t\tLinear: function (p0, p1, t) {\n\n\t\t\treturn (p1 - p0) * t + p0;\n\n\t\t},\n\n\t\tBernstein: function (n, i) {\n\n\t\t\tvar fc = TWEEN.Interpolation.Utils.Factorial;\n\n\t\t\treturn fc(n) / fc(i) / fc(n - i);\n\n\t\t},\n\n\t\tFactorial: (function () {\n\n\t\t\tvar a = [1];\n\n\t\t\treturn function (n) {\n\n\t\t\t\tvar s = 1;\n\n\t\t\t\tif (a[n]) {\n\t\t\t\t\treturn a[n];\n\t\t\t\t}\n\n\t\t\t\tfor (var i = n; i > 1; i--) {\n\t\t\t\t\ts *= i;\n\t\t\t\t}\n\n\t\t\t\ta[n] = s;\n\t\t\t\treturn s;\n\n\t\t\t};\n\n\t\t})(),\n\n\t\tCatmullRom: function (p0, p1, p2, p3, t) {\n\n\t\t\tvar v0 = (p2 - p0) * 0.5;\n\t\t\tvar v1 = (p3 - p1) * 0.5;\n\t\t\tvar t2 = t * t;\n\t\t\tvar t3 = t * t2;\n\n\t\t\treturn (2 * p1 - 2 * p2 + v0 + v1) * t3 + (- 3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;\n\n\t\t}\n\n\t}\n\n};\n\n// UMD (Universal Module Definition)\n(function (root) {\n\n\tif (true) {\n\n\t\t// AMD\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn TWEEN;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\t} else {}\n\n})(this);\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/@tweenjs/tween.js/src/Tween.js?");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/Gauge.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/Gauge.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tweenjs/tween.js */ \"./node_modules/@tweenjs/tween.js/src/Tween.js\");\n/* harmony import */ var _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/get */ \"./node_modules/lodash/get.js\");\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n// Main radius of the gauge\nconst RADIUS = 100;\n\n// Coordinates of the center based on the radius\nconst X_CENTER = 100;\nconst Y_CENTER = 100;\n\n/**\n * Turn polar coordinate to cartesians\n * @param   {Number} centerX - abscisse of the center\n * @param   {Number} centerY - ordinate of the center\n * @param   {Number} radius  - radius of the circle\n * @param   {Number} angle   - angle in degres\n * @returns {String}         - d property of the path\n */\nfunction polarToCartesian(radius, angle) {\n  const angleInRadians = (angle - 90) * Math.PI / 180;\n\n  return {\n    x: X_CENTER + radius * Math.cos(angleInRadians),\n    y: Y_CENTER + radius * Math.sin(angleInRadians)\n  };\n}\n\n/**\n * Describe a gauge path according\n * @param   {Number} radius\n * @param   {Number} startAngle - in degre\n * @param   {Number} endAngle   - in degre\n * @returns {String}            - d property of the path\n */\nfunction describePath(radius, startAngle, endAngle) {\n  const start = polarToCartesian(radius, endAngle);\n  const end = polarToCartesian(radius, startAngle);\n\n  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';\n\n  const d = ['M', start.x, start.y, 'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y, 'L', X_CENTER, Y_CENTER].join(' ');\n\n  return d;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'Gauge',\n  props: {\n    /**\n     * Gauge value\n     */\n    value: {\n      type: Number,\n      default: 70\n    },\n    /**\n     * Gauge min value\n     */\n    min: {\n      type: Number,\n      default: 0\n    },\n    /**\n     * Gauge max value\n     */\n    max: {\n      type: Number,\n      default: 100\n    },\n    /**\n     * Must be between -360 and 360\n     * startAngle MUST be inferior to endAngle\n     */\n    startAngle: {\n      type: Number,\n      default: -90,\n      validator: value => {\n        if (value < -360 || value > 360) {\n          console.warn('GaugeChart - props \"startAngle\" must be between -360 and 360');\n        }\n        return true;\n      }\n    },\n    /**\n     * Must be between -360 and 360\n     * startAngle MUST be inferior to endAngle\n     */\n    endAngle: {\n      type: Number,\n      default: 90,\n      validator: value => {\n        if (value < -360 || value > 360) {\n          console.warn('GaugeChart - props \"endAngle\" must be between -360 and 360');\n        }\n        return true;\n      }\n    },\n    /**\n     * Size of the inner radius between 0 and RADIUS\n     * The closer to RADIUS, the thinner the gauge will be\n     */\n    innerRadius: {\n      type: Number,\n      default: 60,\n      validator: value => {\n        if (value < 0 || value > 100) {\n          console.warn(`GaugeChart - props \"innerRadius\" must be between 0 and ${RADIUS}`);\n        }\n        return true;\n      }\n    },\n    /**\n     * Separator step, will display a separator each min + (n * separatorStep)\n     * Won't display any separator if 0 or null\n     */\n    separatorStep: {\n      type: Number,\n      default: 10,\n      validator: value => {\n        if (value !== null && value < 0) {\n          console.warn('GaugeChart - props \"separatorStep\" must be null or >= 0');\n        }\n        return true;\n      }\n    },\n    /**\n     * Separator Thickness, unit is in degree\n     */\n    separatorThickness: {\n      type: Number,\n      default: 4\n    },\n    /**\n     * Gauge color. Can be :\n     * - a simple color if passed as a 'string'\n     * - a gradient if is an array of objects :\n     * { offset: percentage where the color starts, color: color to display }\n     */\n    gaugeColor: {\n      type: [Array, String],\n      default: () => [{ offset: 0, color: '#347AB0' }, { offset: 100, color: '#8CDFAD' }]\n    },\n    /**\n     * Color of the base of the gauge\n     */\n    baseColor: {\n      type: String,\n      default: '#DDDDDD'\n    },\n    /**\n     * Animation easing option\n     * You can check the Tween.js doc here :\n     * https://github.com/tweenjs/tween.js/blob/master/docs/user_guide.md\n     *\n     * There are a few existing function gourped by equation they represent:\n     * Linear, Quadratic, Cubic, Quartic, Quintic, Sinusoidal, Exponential,\n     * Circular, Elastic, Back and Bounce\n     *\n     * And then by the easing type: In, Out and InOut.\n     * The syntaxe is : equation.easingType\n     */\n    easing: {\n      type: String,\n      default: 'Circular.Out'\n    },\n    /**\n     * Scale interval\n     * Won't display any scall if `null`\n     */\n    scaleInterval: {\n      type: Number,\n      default: 5,\n      validator: value => {\n        if (value !== null && value < 0) {\n          console.warn('GaugeChart - props \"scaleInterval\" must be null or >= 0');\n        }\n        return true;\n      }\n    }\n  },\n  data() {\n    return {\n      X_CENTER: X_CENTER,\n      Y_CENTER: Y_CENTER,\n      RADIUS: RADIUS,\n      /**\n       * Tweened value for the animation of the gauge\n       * Starts at `min`\n       * @type {Number}\n       */\n      tweenedValue: this.min\n    };\n  },\n  computed: {\n    /**\n     * Height of the viewbox calculated by getting\n     * - the lower y between the center and the start and end angle\n     * - (RADIUS * 2) if one of the angle is bigger than 180°\n     * @type {Number}\n     */\n    height() {\n      const { endAngle, startAngle } = this;\n      const { y: yStart } = polarToCartesian(RADIUS, startAngle);\n      const { y: yEnd } = polarToCartesian(RADIUS, endAngle);\n\n      return Math.abs(endAngle) <= 180 && Math.abs(startAngle) <= 180 ? Math.max(Y_CENTER, yStart, yEnd) : RADIUS * 2;\n    },\n    /**\n     * d property of the path of the base gauge (the colored one)\n     * @type {String}\n     */\n    basePath() {\n      const { startAngle, endAngle } = this;\n\n      return describePath(RADIUS, startAngle, endAngle);\n    },\n    /**\n     * d property of the gauge according to the value.\n     * This gauge will hide a part of the base gauge\n     * @type {String}\n     */\n    gaugePath() {\n      const { endAngle, getAngle, tweenedValue } = this;\n\n      return describePath(RADIUS, getAngle(tweenedValue), endAngle);\n    },\n    /**\n     * Total angle of the gauge\n     * @type {Number}\n     */\n    totalAngle() {\n      const { startAngle, endAngle } = this;\n\n      return Math.abs(endAngle - startAngle);\n    },\n    /**\n     * True if the gauge is a full circle\n     * @type {Boolean}\n     */\n    isCircle() {\n      return Math.abs(this.totalAngle) === 360;\n    },\n    /**\n     * True if the gaugeColor is an array\n     * Result in displaying a gradient instead of a simple color\n     * @type {Boolean}\n     */\n    hasGradient() {\n      return Array.isArray(this.gaugeColor);\n    },\n    /**\n     * Array of the path of each separator\n     */\n    separatorPaths() {\n      const {\n        separatorStep, getAngle, min, max, separatorThickness, isCircle\n      } = this;\n\n      if (separatorStep > 0) {\n        const paths = [];\n        // If the gauge is a circle, this will add a separator at the start\n        let i = isCircle ? min : min + separatorStep;\n\n        for (i; i < max; i += separatorStep) {\n          const angle = getAngle(i);\n          const halfAngle = separatorThickness / 2;\n\n          paths.push(describePath(RADIUS + 2, angle - halfAngle, angle + halfAngle));\n        }\n\n        return paths;\n      }\n\n      return null;\n    },\n    /**\n     * Array of line configuration for each scale\n     */\n    scaleLines() {\n      const {\n        scaleInterval, isCircle, min, max, getAngle, innerRadius\n      } = this;\n\n      if (scaleInterval > 0) {\n        const lines = [];\n        // if gauge is a circle, remove the first scale\n        let i = isCircle ? min + scaleInterval : min;\n\n        for (i; i < max + scaleInterval; i += scaleInterval) {\n          const angle = getAngle(i);\n          const startCoordinate = polarToCartesian(innerRadius - 4, angle);\n          const endCoordinate = polarToCartesian(innerRadius - 8, angle);\n\n          lines.push({\n            xS: startCoordinate.x,\n            yS: startCoordinate.y,\n            xE: endCoordinate.x,\n            yE: endCoordinate.y\n          });\n        }\n\n        return lines;\n      }\n\n      return null;\n    }\n  },\n  watch: {\n    /**\n     * Watch the value and tween it to make an animation\n     */\n    value: {\n      immediate: true,\n      handler(next) {\n        const { easing, tweenedValue } = this;\n\n        function animate() {\n          if (_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_0___default.a.update()) {\n            requestAnimationFrame(animate);\n          }\n        }\n\n        new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_0___default.a.Tween({ tweeningValue: tweenedValue }).to({ tweeningValue: next }, 1500).easing(lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_0___default.a.Easing, easing)).onUpdate(object => {\n          this.tweenedValue = object.tweeningValue;\n        }).start();\n\n        animate();\n      }\n    }\n  },\n  methods: {\n    /**\n     * Get an angle for a value\n     * @param   {Number} value\n     * @returns {Number} angle - in degree\n     */\n    getAngle(value) {\n      const { min, max, startAngle, totalAngle } = this;\n      // Make sure not to divide by 0\n      const totalValue = max - min || 1;\n\n      return value * totalAngle / totalValue + startAngle;\n    }\n  }\n});\n\n//# sourceURL=webpack://vue-svg-gauge/./src/Gauge.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/Gauge.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/Gauge.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.gauge {\\n  width: 100%;\\n  height: 100%;\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack://vue-svg-gauge/./src/Gauge.vue?./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function(useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif(item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === \"string\")\n\t\t\tmodules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === \"number\")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var hashClear = __webpack_require__(/*! ./_hashClear */ \"./node_modules/lodash/_hashClear.js\"),\n    hashDelete = __webpack_require__(/*! ./_hashDelete */ \"./node_modules/lodash/_hashDelete.js\"),\n    hashGet = __webpack_require__(/*! ./_hashGet */ \"./node_modules/lodash/_hashGet.js\"),\n    hashHas = __webpack_require__(/*! ./_hashHas */ \"./node_modules/lodash/_hashHas.js\"),\n    hashSet = __webpack_require__(/*! ./_hashSet */ \"./node_modules/lodash/_hashSet.js\");\n\n/**\n * Creates a hash object.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction Hash(entries) {\n  var index = -1,\n      length = entries == null ? 0 : entries.length;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n// Add methods to `Hash`.\nHash.prototype.clear = hashClear;\nHash.prototype['delete'] = hashDelete;\nHash.prototype.get = hashGet;\nHash.prototype.has = hashHas;\nHash.prototype.set = hashSet;\n\nmodule.exports = Hash;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/_Hash.js?");

/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ \"./node_modules/lodash/_listCacheClear.js\"),\n    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ \"./node_modules/lodash/_listCacheDelete.js\"),\n    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ \"./node_modules/lodash/_listCacheGet.js\"),\n    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ \"./node_modules/lodash/_listCacheHas.js\"),\n    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ \"./node_modules/lodash/_listCacheSet.js\");\n\n/**\n * Creates an list cache object.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction ListCache(entries) {\n  var index = -1,\n      length = entries == null ? 0 : entries.length;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n// Add methods to `ListCache`.\nListCache.prototype.clear = listCacheClear;\nListCache.prototype['delete'] = listCacheDelete;\nListCache.prototype.get = listCacheGet;\nListCache.prototype.has = listCacheHas;\nListCache.prototype.set = listCacheSet;\n\nmodule.exports = ListCache;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/_ListCache.js?");

/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\"),\n    root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/* Built-in method references that are verified to be native. */\nvar Map = getNative(root, 'Map');\n\nmodule.exports = Map;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/_Map.js?");

/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ \"./node_modules/lodash/_mapCacheClear.js\"),\n    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ \"./node_modules/lodash/_mapCacheDelete.js\"),\n    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ \"./node_modules/lodash/_mapCacheGet.js\"),\n    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ \"./node_modules/lodash/_mapCacheHas.js\"),\n    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ \"./node_modules/lodash/_mapCacheSet.js\");\n\n/**\n * Creates a map cache object to store key-value pairs.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction MapCache(entries) {\n  var index = -1,\n      length = entries == null ? 0 : entries.length;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n// Add methods to `MapCache`.\nMapCache.prototype.clear = mapCacheClear;\nMapCache.prototype['delete'] = mapCacheDelete;\nMapCache.prototype.get = mapCacheGet;\nMapCache.prototype.has = mapCacheHas;\nMapCache.prototype.set = mapCacheSet;\n\nmodule.exports = MapCache;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/_MapCache.js?");

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Built-in value references. */\nvar Symbol = root.Symbol;\n\nmodule.exports = Symbol;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/_Symbol.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A specialized version of `_.map` for arrays without support for iteratee\n * shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns the new mapped array.\n */\nfunction arrayMap(array, iteratee) {\n  var index = -1,\n      length = array == null ? 0 : array.length,\n      result = Array(length);\n\n  while (++index < length) {\n    result[index] = iteratee(array[index], index, array);\n  }\n  return result;\n}\n\nmodule.exports = arrayMap;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/_arrayMap.js?");

/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var eq = __webpack_require__(/*! ./eq */ \"./node_modules/lodash/eq.js\");\n\n/**\n * Gets the index at which the `key` is found in `array` of key-value pairs.\n *\n * @private\n * @param {Array} array The array to inspect.\n * @param {*} key The key to search for.\n * @returns {number} Returns the index of the matched value, else `-1`.\n */\nfunction assocIndexOf(array, key) {\n  var length = array.length;\n  while (length--) {\n    if (eq(array[length][0], key)) {\n      return length;\n    }\n  }\n  return -1;\n}\n\nmodule.exports = assocIndexOf;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/_assocIndexOf.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var castPath = __webpack_require__(/*! ./_castPath */ \"./node_modules/lodash/_castPath.js\"),\n    toKey = __webpack_require__(/*! ./_toKey */ \"./node_modules/lodash/_toKey.js\");\n\n/**\n * The base implementation of `_.get` without support for default values.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {Array|string} path The path of the property to get.\n * @returns {*} Returns the resolved value.\n */\nfunction baseGet(object, path) {\n  path = castPath(path, object);\n\n  var index = 0,\n      length = path.length;\n\n  while (object != null && index < length) {\n    object = object[toKey(path[index++])];\n  }\n  return (index && index == length) ? object : undefined;\n}\n\nmodule.exports = baseGet;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/_baseGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    getRawTag = __webpack_require__(/*! ./_getRawTag */ \"./node_modules/lodash/_getRawTag.js\"),\n    objectToString = __webpack_require__(/*! ./_objectToString */ \"./node_modules/lodash/_objectToString.js\");\n\n/** `Object#toString` result references. */\nvar nullTag = '[object Null]',\n    undefinedTag = '[object Undefined]';\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * The base implementation of `getTag` without fallbacks for buggy environments.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the `toStringTag`.\n */\nfunction baseGetTag(value) {\n  if (value == null) {\n    return value === undefined ? undefinedTag : nullTag;\n  }\n  return (symToStringTag && symToStringTag in Object(value))\n    ? getRawTag(value)\n    : objectToString(value);\n}\n\nmodule.exports = baseGetTag;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/_baseGetTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isFunction = __webpack_require__(/*! ./isFunction */ \"./node_modules/lodash/isFunction.js\"),\n    isMasked = __webpack_require__(/*! ./_isMasked */ \"./node_modules/lodash/_isMasked.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    toSource = __webpack_require__(/*! ./_toSource */ \"./node_modules/lodash/_toSource.js\");\n\n/**\n * Used to match `RegExp`\n * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).\n */\nvar reRegExpChar = /[\\\\^$.*+?()[\\]{}|]/g;\n\n/** Used to detect host constructors (Safari). */\nvar reIsHostCtor = /^\\[object .+?Constructor\\]$/;\n\n/** Used for built-in method references. */\nvar funcProto = Function.prototype,\n    objectProto = Object.prototype;\n\n/** Used to resolve the decompiled source of functions. */\nvar funcToString = funcProto.toString;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/** Used to detect if a method is native. */\nvar reIsNative = RegExp('^' +\n  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\\\$&')\n  .replace(/hasOwnProperty|(function).*?(?=\\\\\\()| for .+?(?=\\\\\\])/g, '$1.*?') + '$'\n);\n\n/**\n * The base implementation of `_.isNative` without bad shim checks.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a native function,\n *  else `false`.\n */\nfunction baseIsNative(value) {\n  if (!isObject(value) || isMasked(value)) {\n    return false;\n  }\n  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;\n  return pattern.test(toSource(value));\n}\n\nmodule.exports = baseIsNative;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/_baseIsNative.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    arrayMap = __webpack_require__(/*! ./_arrayMap */ \"./node_modules/lodash/_arrayMap.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/** Used as references for various `Number` constants. */\nvar INFINITY = 1 / 0;\n\n/** Used to convert symbols to primitives and strings. */\nvar symbolProto = Symbol ? Symbol.prototype : undefined,\n    symbolToString = symbolProto ? symbolProto.toString : undefined;\n\n/**\n * The base implementation of `_.toString` which doesn't convert nullish\n * values to empty strings.\n *\n * @private\n * @param {*} value The value to process.\n * @returns {string} Returns the string.\n */\nfunction baseToString(value) {\n  // Exit early for strings to avoid a performance hit in some environments.\n  if (typeof value == 'string') {\n    return value;\n  }\n  if (isArray(value)) {\n    // Recursively convert values (susceptible to call stack limits).\n    return arrayMap(value, baseToString) + '';\n  }\n  if (isSymbol(value)) {\n    return symbolToString ? symbolToString.call(value) : '';\n  }\n  var result = (value + '');\n  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;\n}\n\nmodule.exports = baseToString;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/_baseToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isKey = __webpack_require__(/*! ./_isKey */ \"./node_modules/lodash/_isKey.js\"),\n    stringToPath = __webpack_require__(/*! ./_stringToPath */ \"./node_modules/lodash/_stringToPath.js\"),\n    toString = __webpack_require__(/*! ./toString */ \"./node_modules/lodash/toString.js\");\n\n/**\n * Casts `value` to a path array if it's not one.\n *\n * @private\n * @param {*} value The value to inspect.\n * @param {Object} [object] The object to query keys on.\n * @returns {Array} Returns the cast property path array.\n */\nfunction castPath(value, object) {\n  if (isArray(value)) {\n    return value;\n  }\n  return isKey(value, object) ? [value] : stringToPath(toString(value));\n}\n\nmodule.exports = castPath;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/_castPath.js?");

/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Used to detect overreaching core-js shims. */\nvar coreJsData = root['__core-js_shared__'];\n\nmodule.exports = coreJsData;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/_coreJsData.js?");

/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */\nvar freeGlobal = typeof global == 'object' && global && global.Object === Object && global;\n\nmodule.exports = freeGlobal;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/_freeGlobal.js?");

/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isKeyable = __webpack_require__(/*! ./_isKeyable */ \"./node_modules/lodash/_isKeyable.js\");\n\n/**\n * Gets the data for `map`.\n *\n * @private\n * @param {Object} map The map to query.\n * @param {string} key The reference key.\n * @returns {*} Returns the map data.\n */\nfunction getMapData(map, key) {\n  var data = map.__data__;\n  return isKeyable(key)\n    ? data[typeof key == 'string' ? 'string' : 'hash']\n    : data.map;\n}\n\nmodule.exports = getMapData;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/_getMapData.js?");

/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ \"./node_modules/lodash/_baseIsNative.js\"),\n    getValue = __webpack_require__(/*! ./_getValue */ \"./node_modules/lodash/_getValue.js\");\n\n/**\n * Gets the native function at `key` of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {string} key The key of the method to get.\n * @returns {*} Returns the function if it's native, else `undefined`.\n */\nfunction getNative(object, key) {\n  var value = getValue(object, key);\n  return baseIsNative(value) ? value : undefined;\n}\n\nmodule.exports = getNative;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/_getNative.js?");

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the raw `toStringTag`.\n */\nfunction getRawTag(value) {\n  var isOwn = hasOwnProperty.call(value, symToStringTag),\n      tag = value[symToStringTag];\n\n  try {\n    value[symToStringTag] = undefined;\n    var unmasked = true;\n  } catch (e) {}\n\n  var result = nativeObjectToString.call(value);\n  if (unmasked) {\n    if (isOwn) {\n      value[symToStringTag] = tag;\n    } else {\n      delete value[symToStringTag];\n    }\n  }\n  return result;\n}\n\nmodule.exports = getRawTag;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/_getRawTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Gets the value at `key` of `object`.\n *\n * @private\n * @param {Object} [object] The object to query.\n * @param {string} key The key of the property to get.\n * @returns {*} Returns the property value.\n */\nfunction getValue(object, key) {\n  return object == null ? undefined : object[key];\n}\n\nmodule.exports = getValue;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/_getValue.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"./node_modules/lodash/_nativeCreate.js\");\n\n/**\n * Removes all key-value entries from the hash.\n *\n * @private\n * @name clear\n * @memberOf Hash\n */\nfunction hashClear() {\n  this.__data__ = nativeCreate ? nativeCreate(null) : {};\n  this.size = 0;\n}\n\nmodule.exports = hashClear;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/_hashClear.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Removes `key` and its value from the hash.\n *\n * @private\n * @name delete\n * @memberOf Hash\n * @param {Object} hash The hash to modify.\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction hashDelete(key) {\n  var result = this.has(key) && delete this.__data__[key];\n  this.size -= result ? 1 : 0;\n  return result;\n}\n\nmodule.exports = hashDelete;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/_hashDelete.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"./node_modules/lodash/_nativeCreate.js\");\n\n/** Used to stand-in for `undefined` hash values. */\nvar HASH_UNDEFINED = '__lodash_hash_undefined__';\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Gets the hash value for `key`.\n *\n * @private\n * @name get\n * @memberOf Hash\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction hashGet(key) {\n  var data = this.__data__;\n  if (nativeCreate) {\n    var result = data[key];\n    return result === HASH_UNDEFINED ? undefined : result;\n  }\n  return hasOwnProperty.call(data, key) ? data[key] : undefined;\n}\n\nmodule.exports = hashGet;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/_hashGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"./node_modules/lodash/_nativeCreate.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Checks if a hash value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf Hash\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction hashHas(key) {\n  var data = this.__data__;\n  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);\n}\n\nmodule.exports = hashHas;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/_hashHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"./node_modules/lodash/_nativeCreate.js\");\n\n/** Used to stand-in for `undefined` hash values. */\nvar HASH_UNDEFINED = '__lodash_hash_undefined__';\n\n/**\n * Sets the hash `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf Hash\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the hash instance.\n */\nfunction hashSet(key, value) {\n  var data = this.__data__;\n  this.size += this.has(key) ? 0 : 1;\n  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;\n  return this;\n}\n\nmodule.exports = hashSet;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/_hashSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/** Used to match property names within property paths. */\nvar reIsDeepProp = /\\.|\\[(?:[^[\\]]*|([\"'])(?:(?!\\1)[^\\\\]|\\\\.)*?\\1)\\]/,\n    reIsPlainProp = /^\\w*$/;\n\n/**\n * Checks if `value` is a property name and not a property path.\n *\n * @private\n * @param {*} value The value to check.\n * @param {Object} [object] The object to query keys on.\n * @returns {boolean} Returns `true` if `value` is a property name, else `false`.\n */\nfunction isKey(value, object) {\n  if (isArray(value)) {\n    return false;\n  }\n  var type = typeof value;\n  if (type == 'number' || type == 'symbol' || type == 'boolean' ||\n      value == null || isSymbol(value)) {\n    return true;\n  }\n  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||\n    (object != null && value in Object(object));\n}\n\nmodule.exports = isKey;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/_isKey.js?");

/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is suitable for use as unique object key.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is suitable, else `false`.\n */\nfunction isKeyable(value) {\n  var type = typeof value;\n  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')\n    ? (value !== '__proto__')\n    : (value === null);\n}\n\nmodule.exports = isKeyable;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/_isKeyable.js?");

/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var coreJsData = __webpack_require__(/*! ./_coreJsData */ \"./node_modules/lodash/_coreJsData.js\");\n\n/** Used to detect methods masquerading as native. */\nvar maskSrcKey = (function() {\n  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');\n  return uid ? ('Symbol(src)_1.' + uid) : '';\n}());\n\n/**\n * Checks if `func` has its source masked.\n *\n * @private\n * @param {Function} func The function to check.\n * @returns {boolean} Returns `true` if `func` is masked, else `false`.\n */\nfunction isMasked(func) {\n  return !!maskSrcKey && (maskSrcKey in func);\n}\n\nmodule.exports = isMasked;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/_isMasked.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Removes all key-value entries from the list cache.\n *\n * @private\n * @name clear\n * @memberOf ListCache\n */\nfunction listCacheClear() {\n  this.__data__ = [];\n  this.size = 0;\n}\n\nmodule.exports = listCacheClear;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/_listCacheClear.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n\n/** Used for built-in method references. */\nvar arrayProto = Array.prototype;\n\n/** Built-in value references. */\nvar splice = arrayProto.splice;\n\n/**\n * Removes `key` and its value from the list cache.\n *\n * @private\n * @name delete\n * @memberOf ListCache\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction listCacheDelete(key) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  if (index < 0) {\n    return false;\n  }\n  var lastIndex = data.length - 1;\n  if (index == lastIndex) {\n    data.pop();\n  } else {\n    splice.call(data, index, 1);\n  }\n  --this.size;\n  return true;\n}\n\nmodule.exports = listCacheDelete;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/_listCacheDelete.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n\n/**\n * Gets the list cache value for `key`.\n *\n * @private\n * @name get\n * @memberOf ListCache\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction listCacheGet(key) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  return index < 0 ? undefined : data[index][1];\n}\n\nmodule.exports = listCacheGet;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/_listCacheGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n\n/**\n * Checks if a list cache value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf ListCache\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction listCacheHas(key) {\n  return assocIndexOf(this.__data__, key) > -1;\n}\n\nmodule.exports = listCacheHas;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/_listCacheHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n\n/**\n * Sets the list cache `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf ListCache\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the list cache instance.\n */\nfunction listCacheSet(key, value) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  if (index < 0) {\n    ++this.size;\n    data.push([key, value]);\n  } else {\n    data[index][1] = value;\n  }\n  return this;\n}\n\nmodule.exports = listCacheSet;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/_listCacheSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Hash = __webpack_require__(/*! ./_Hash */ \"./node_modules/lodash/_Hash.js\"),\n    ListCache = __webpack_require__(/*! ./_ListCache */ \"./node_modules/lodash/_ListCache.js\"),\n    Map = __webpack_require__(/*! ./_Map */ \"./node_modules/lodash/_Map.js\");\n\n/**\n * Removes all key-value entries from the map.\n *\n * @private\n * @name clear\n * @memberOf MapCache\n */\nfunction mapCacheClear() {\n  this.size = 0;\n  this.__data__ = {\n    'hash': new Hash,\n    'map': new (Map || ListCache),\n    'string': new Hash\n  };\n}\n\nmodule.exports = mapCacheClear;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/_mapCacheClear.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"./node_modules/lodash/_getMapData.js\");\n\n/**\n * Removes `key` and its value from the map.\n *\n * @private\n * @name delete\n * @memberOf MapCache\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction mapCacheDelete(key) {\n  var result = getMapData(this, key)['delete'](key);\n  this.size -= result ? 1 : 0;\n  return result;\n}\n\nmodule.exports = mapCacheDelete;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/_mapCacheDelete.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"./node_modules/lodash/_getMapData.js\");\n\n/**\n * Gets the map value for `key`.\n *\n * @private\n * @name get\n * @memberOf MapCache\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction mapCacheGet(key) {\n  return getMapData(this, key).get(key);\n}\n\nmodule.exports = mapCacheGet;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/_mapCacheGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"./node_modules/lodash/_getMapData.js\");\n\n/**\n * Checks if a map value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf MapCache\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction mapCacheHas(key) {\n  return getMapData(this, key).has(key);\n}\n\nmodule.exports = mapCacheHas;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/_mapCacheHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"./node_modules/lodash/_getMapData.js\");\n\n/**\n * Sets the map `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf MapCache\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the map cache instance.\n */\nfunction mapCacheSet(key, value) {\n  var data = getMapData(this, key),\n      size = data.size;\n\n  data.set(key, value);\n  this.size += data.size == size ? 0 : 1;\n  return this;\n}\n\nmodule.exports = mapCacheSet;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/_mapCacheSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var memoize = __webpack_require__(/*! ./memoize */ \"./node_modules/lodash/memoize.js\");\n\n/** Used as the maximum memoize cache size. */\nvar MAX_MEMOIZE_SIZE = 500;\n\n/**\n * A specialized version of `_.memoize` which clears the memoized function's\n * cache when it exceeds `MAX_MEMOIZE_SIZE`.\n *\n * @private\n * @param {Function} func The function to have its output memoized.\n * @returns {Function} Returns the new memoized function.\n */\nfunction memoizeCapped(func) {\n  var result = memoize(func, function(key) {\n    if (cache.size === MAX_MEMOIZE_SIZE) {\n      cache.clear();\n    }\n    return key;\n  });\n\n  var cache = result.cache;\n  return result;\n}\n\nmodule.exports = memoizeCapped;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/_memoizeCapped.js?");

/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\");\n\n/* Built-in method references that are verified to be native. */\nvar nativeCreate = getNative(Object, 'create');\n\nmodule.exports = nativeCreate;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/_nativeCreate.js?");

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/**\n * Converts `value` to a string using `Object.prototype.toString`.\n *\n * @private\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n */\nfunction objectToString(value) {\n  return nativeObjectToString.call(value);\n}\n\nmodule.exports = objectToString;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/_objectToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ \"./node_modules/lodash/_freeGlobal.js\");\n\n/** Detect free variable `self`. */\nvar freeSelf = typeof self == 'object' && self && self.Object === Object && self;\n\n/** Used as a reference to the global object. */\nvar root = freeGlobal || freeSelf || Function('return this')();\n\nmodule.exports = root;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/_root.js?");

/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ \"./node_modules/lodash/_memoizeCapped.js\");\n\n/** Used to match property names within property paths. */\nvar rePropName = /[^.[\\]]+|\\[(?:(-?\\d+(?:\\.\\d+)?)|([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))/g;\n\n/** Used to match backslashes in property paths. */\nvar reEscapeChar = /\\\\(\\\\)?/g;\n\n/**\n * Converts `string` to a property path array.\n *\n * @private\n * @param {string} string The string to convert.\n * @returns {Array} Returns the property path array.\n */\nvar stringToPath = memoizeCapped(function(string) {\n  var result = [];\n  if (string.charCodeAt(0) === 46 /* . */) {\n    result.push('');\n  }\n  string.replace(rePropName, function(match, number, quote, subString) {\n    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));\n  });\n  return result;\n});\n\nmodule.exports = stringToPath;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/_stringToPath.js?");

/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/** Used as references for various `Number` constants. */\nvar INFINITY = 1 / 0;\n\n/**\n * Converts `value` to a string key if it's not a string or symbol.\n *\n * @private\n * @param {*} value The value to inspect.\n * @returns {string|symbol} Returns the key.\n */\nfunction toKey(value) {\n  if (typeof value == 'string' || isSymbol(value)) {\n    return value;\n  }\n  var result = (value + '');\n  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;\n}\n\nmodule.exports = toKey;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/_toKey.js?");

/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used for built-in method references. */\nvar funcProto = Function.prototype;\n\n/** Used to resolve the decompiled source of functions. */\nvar funcToString = funcProto.toString;\n\n/**\n * Converts `func` to its source code.\n *\n * @private\n * @param {Function} func The function to convert.\n * @returns {string} Returns the source code.\n */\nfunction toSource(func) {\n  if (func != null) {\n    try {\n      return funcToString.call(func);\n    } catch (e) {}\n    try {\n      return (func + '');\n    } catch (e) {}\n  }\n  return '';\n}\n\nmodule.exports = toSource;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/_toSource.js?");

/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Performs a\n * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)\n * comparison between two values to determine if they are equivalent.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to compare.\n * @param {*} other The other value to compare.\n * @returns {boolean} Returns `true` if the values are equivalent, else `false`.\n * @example\n *\n * var object = { 'a': 1 };\n * var other = { 'a': 1 };\n *\n * _.eq(object, object);\n * // => true\n *\n * _.eq(object, other);\n * // => false\n *\n * _.eq('a', 'a');\n * // => true\n *\n * _.eq('a', Object('a'));\n * // => false\n *\n * _.eq(NaN, NaN);\n * // => true\n */\nfunction eq(value, other) {\n  return value === other || (value !== value && other !== other);\n}\n\nmodule.exports = eq;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/eq.js?");

/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGet = __webpack_require__(/*! ./_baseGet */ \"./node_modules/lodash/_baseGet.js\");\n\n/**\n * Gets the value at `path` of `object`. If the resolved value is\n * `undefined`, the `defaultValue` is returned in its place.\n *\n * @static\n * @memberOf _\n * @since 3.7.0\n * @category Object\n * @param {Object} object The object to query.\n * @param {Array|string} path The path of the property to get.\n * @param {*} [defaultValue] The value returned for `undefined` resolved values.\n * @returns {*} Returns the resolved value.\n * @example\n *\n * var object = { 'a': [{ 'b': { 'c': 3 } }] };\n *\n * _.get(object, 'a[0].b.c');\n * // => 3\n *\n * _.get(object, ['a', '0', 'b', 'c']);\n * // => 3\n *\n * _.get(object, 'a.b.c', 'default');\n * // => 'default'\n */\nfunction get(object, path, defaultValue) {\n  var result = object == null ? undefined : baseGet(object, path);\n  return result === undefined ? defaultValue : result;\n}\n\nmodule.exports = get;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/get.js?");

/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is classified as an `Array` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an array, else `false`.\n * @example\n *\n * _.isArray([1, 2, 3]);\n * // => true\n *\n * _.isArray(document.body.children);\n * // => false\n *\n * _.isArray('abc');\n * // => false\n *\n * _.isArray(_.noop);\n * // => false\n */\nvar isArray = Array.isArray;\n\nmodule.exports = isArray;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/isArray.js?");

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\");\n\n/** `Object#toString` result references. */\nvar asyncTag = '[object AsyncFunction]',\n    funcTag = '[object Function]',\n    genTag = '[object GeneratorFunction]',\n    proxyTag = '[object Proxy]';\n\n/**\n * Checks if `value` is classified as a `Function` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a function, else `false`.\n * @example\n *\n * _.isFunction(_);\n * // => true\n *\n * _.isFunction(/abc/);\n * // => false\n */\nfunction isFunction(value) {\n  if (!isObject(value)) {\n    return false;\n  }\n  // The use of `Object#toString` avoids issues with the `typeof` operator\n  // in Safari 9 which returns 'object' for typed arrays and other constructors.\n  var tag = baseGetTag(value);\n  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;\n}\n\nmodule.exports = isFunction;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/isFunction.js?");

/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is the\n * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)\n * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(_.noop);\n * // => true\n *\n * _.isObject(null);\n * // => false\n */\nfunction isObject(value) {\n  var type = typeof value;\n  return value != null && (type == 'object' || type == 'function');\n}\n\nmodule.exports = isObject;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/isObject.js?");

/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return value != null && typeof value == 'object';\n}\n\nmodule.exports = isObjectLike;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/isObjectLike.js?");

/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar symbolTag = '[object Symbol]';\n\n/**\n * Checks if `value` is classified as a `Symbol` primitive or object.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.\n * @example\n *\n * _.isSymbol(Symbol.iterator);\n * // => true\n *\n * _.isSymbol('abc');\n * // => false\n */\nfunction isSymbol(value) {\n  return typeof value == 'symbol' ||\n    (isObjectLike(value) && baseGetTag(value) == symbolTag);\n}\n\nmodule.exports = isSymbol;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/isSymbol.js?");

/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var MapCache = __webpack_require__(/*! ./_MapCache */ \"./node_modules/lodash/_MapCache.js\");\n\n/** Error message constants. */\nvar FUNC_ERROR_TEXT = 'Expected a function';\n\n/**\n * Creates a function that memoizes the result of `func`. If `resolver` is\n * provided, it determines the cache key for storing the result based on the\n * arguments provided to the memoized function. By default, the first argument\n * provided to the memoized function is used as the map cache key. The `func`\n * is invoked with the `this` binding of the memoized function.\n *\n * **Note:** The cache is exposed as the `cache` property on the memoized\n * function. Its creation may be customized by replacing the `_.memoize.Cache`\n * constructor with one whose instances implement the\n * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)\n * method interface of `clear`, `delete`, `get`, `has`, and `set`.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Function\n * @param {Function} func The function to have its output memoized.\n * @param {Function} [resolver] The function to resolve the cache key.\n * @returns {Function} Returns the new memoized function.\n * @example\n *\n * var object = { 'a': 1, 'b': 2 };\n * var other = { 'c': 3, 'd': 4 };\n *\n * var values = _.memoize(_.values);\n * values(object);\n * // => [1, 2]\n *\n * values(other);\n * // => [3, 4]\n *\n * object.a = 2;\n * values(object);\n * // => [1, 2]\n *\n * // Modify the result cache.\n * values.cache.set(object, ['a', 'b']);\n * values(object);\n * // => ['a', 'b']\n *\n * // Replace `_.memoize.Cache`.\n * _.memoize.Cache = WeakMap;\n */\nfunction memoize(func, resolver) {\n  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {\n    throw new TypeError(FUNC_ERROR_TEXT);\n  }\n  var memoized = function() {\n    var args = arguments,\n        key = resolver ? resolver.apply(this, args) : args[0],\n        cache = memoized.cache;\n\n    if (cache.has(key)) {\n      return cache.get(key);\n    }\n    var result = func.apply(this, args);\n    memoized.cache = cache.set(key, result) || cache;\n    return result;\n  };\n  memoized.cache = new (memoize.Cache || MapCache);\n  return memoized;\n}\n\n// Expose `MapCache`.\nmemoize.Cache = MapCache;\n\nmodule.exports = memoize;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/memoize.js?");

/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseToString = __webpack_require__(/*! ./_baseToString */ \"./node_modules/lodash/_baseToString.js\");\n\n/**\n * Converts `value` to a string. An empty string is returned for `null`\n * and `undefined` values. The sign of `-0` is preserved.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n * @example\n *\n * _.toString(null);\n * // => ''\n *\n * _.toString(-0);\n * // => '-0'\n *\n * _.toString([1, 2, 3]);\n * // => '1,2,3'\n */\nfunction toString(value) {\n  return value == null ? '' : baseToString(value);\n}\n\nmodule.exports = toString;\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/lodash/toString.js?");

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/process/browser.js?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/Gauge.vue?vue&type=template&id=90f2ef60&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/Gauge.vue?vue&type=template&id=90f2ef60& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"gauge\" }, [\n    _vm.height\n      ? _c(\n          \"svg\",\n          {\n            attrs: {\n              viewBox: \"0 0 \" + _vm.RADIUS * 2 + \" \" + _vm.height,\n              height: \"100%\",\n              width: \"100%\",\n              xmlns: \"http://www.w3.org/2000/svg\"\n            }\n          },\n          [\n            _c(\n              \"defs\",\n              [\n                _c(\n                  \"filter\",\n                  { attrs: { id: \"innershadow\" } },\n                  [\n                    _c(\"feFlood\", { attrs: { \"flood-color\": \"#c7c6c6\" } }),\n                    _vm._v(\" \"),\n                    _c(\"feComposite\", {\n                      attrs: { in2: \"SourceAlpha\", operator: \"out\" }\n                    }),\n                    _vm._v(\" \"),\n                    _c(\"feGaussianBlur\", {\n                      attrs: { stdDeviation: \"2\", result: \"blur\" }\n                    }),\n                    _vm._v(\" \"),\n                    _c(\"feComposite\", {\n                      attrs: { operator: \"atop\", in2: \"SourceGraphic\" }\n                    })\n                  ],\n                  1\n                ),\n                _vm._v(\" \"),\n                _vm.hasGradient\n                  ? _c(\n                      \"linearGradient\",\n                      { attrs: { id: \"gaugeGradient\" } },\n                      _vm._l(_vm.gaugeColor, function(color, index) {\n                        return _c(\"stop\", {\n                          key: color.color + \"-\" + index,\n                          attrs: {\n                            offset: color.offset + \"%\",\n                            \"stop-color\": color.color\n                          }\n                        })\n                      }),\n                      1\n                    )\n                  : _vm._e(),\n                _vm._v(\" \"),\n                _c(\n                  \"mask\",\n                  { attrs: { id: \"innerCircle\" } },\n                  [\n                    _c(\"circle\", {\n                      attrs: {\n                        r: _vm.RADIUS - 0.5,\n                        cx: _vm.X_CENTER,\n                        cy: _vm.Y_CENTER,\n                        fill: \"white\"\n                      }\n                    }),\n                    _vm._v(\" \"),\n                    _c(\"circle\", {\n                      attrs: {\n                        r: _vm.innerRadius,\n                        cx: _vm.X_CENTER,\n                        cy: _vm.Y_CENTER,\n                        fill: \"black\"\n                      }\n                    }),\n                    _vm._v(\" \"),\n                    _vm.separatorPaths\n                      ? _vm._l(_vm.separatorPaths, function(separator, index) {\n                          return _c(\"path\", {\n                            key: index,\n                            attrs: { d: separator, fill: \"black\" }\n                          })\n                        })\n                      : _vm._e()\n                  ],\n                  2\n                )\n              ],\n              1\n            ),\n            _vm._v(\" \"),\n            _c(\"g\", { attrs: { mask: \"url(#innerCircle)\" } }, [\n              _vm.isCircle\n                ? _c(\"circle\", {\n                    attrs: {\n                      r: _vm.RADIUS,\n                      cx: _vm.X_CENTER,\n                      cy: _vm.Y_CENTER,\n                      fill: _vm.hasGradient\n                        ? \"url(#gaugeGradient)\"\n                        : _vm.gaugeColor\n                    }\n                  })\n                : _c(\"path\", {\n                    attrs: {\n                      d: _vm.basePath,\n                      fill: _vm.hasGradient\n                        ? \"url(#gaugeGradient)\"\n                        : _vm.gaugeColor\n                    }\n                  }),\n              _vm._v(\" \"),\n              _vm.value === _vm.min && _vm.isCircle\n                ? _c(\"circle\", {\n                    attrs: {\n                      r: _vm.RADIUS,\n                      cx: _vm.X_CENTER,\n                      cy: _vm.Y_CENTER,\n                      fill: _vm.baseColor\n                    }\n                  })\n                : _c(\"path\", {\n                    attrs: {\n                      d: _vm.gaugePath,\n                      fill: _vm.baseColor,\n                      filter: \"url(#innershadow)\"\n                    }\n                  })\n            ]),\n            _vm._v(\" \"),\n            _vm.scaleLines\n              ? _vm._l(_vm.scaleLines, function(line, index) {\n                  return _c(\"line\", {\n                    key: line.xE + \"-\" + index,\n                    attrs: {\n                      x1: line.xS,\n                      y1: line.yS,\n                      x2: line.xE,\n                      y2: line.yE,\n                      \"stroke-width\": \"1\",\n                      stroke: _vm.baseColor\n                    }\n                  })\n                })\n              : _vm._e(),\n            _vm._v(\" \"),\n            _c(\n              \"foreignObject\",\n              { attrs: { x: \"0\", y: \"0\", width: \"100%\", height: _vm.height } },\n              [_vm._t(\"default\")],\n              2\n            )\n          ],\n          2\n        )\n      : _vm._e()\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://vue-svg-gauge/./src/Gauge.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return normalizeComponent; });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functioal component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack://vue-svg-gauge/./node_modules/vue-loader/lib/runtime/componentNormalizer.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack://vue-svg-gauge/(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/Gauge.vue":
/*!***********************!*\
  !*** ./src/Gauge.vue ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Gauge_vue_vue_type_template_id_90f2ef60___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gauge.vue?vue&type=template&id=90f2ef60& */ \"./src/Gauge.vue?vue&type=template&id=90f2ef60&\");\n/* harmony import */ var _Gauge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gauge.vue?vue&type=script&lang=js& */ \"./src/Gauge.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _Gauge_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Gauge.vue?vue&type=style&index=0&lang=css& */ \"./src/Gauge.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _Gauge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Gauge_vue_vue_type_template_id_90f2ef60___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Gauge_vue_vue_type_template_id_90f2ef60___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/Gauge.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://vue-svg-gauge/./src/Gauge.vue?");

/***/ }),

/***/ "./src/Gauge.vue?vue&type=script&lang=js&":
/*!************************************************!*\
  !*** ./src/Gauge.vue?vue&type=script&lang=js& ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Gauge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib!../node_modules/vue-loader/lib??vue-loader-options!./Gauge.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/Gauge.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Gauge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://vue-svg-gauge/./src/Gauge.vue?");

/***/ }),

/***/ "./src/Gauge.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************!*\
  !*** ./src/Gauge.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Gauge_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/css-loader!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./Gauge.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/Gauge.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Gauge_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Gauge_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Gauge_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Gauge_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Gauge_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack://vue-svg-gauge/./src/Gauge.vue?");

/***/ }),

/***/ "./src/Gauge.vue?vue&type=template&id=90f2ef60&":
/*!******************************************************!*\
  !*** ./src/Gauge.vue?vue&type=template&id=90f2ef60& ***!
  \******************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gauge_vue_vue_type_template_id_90f2ef60___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./Gauge.vue?vue&type=template&id=90f2ef60& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/Gauge.vue?vue&type=template&id=90f2ef60&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gauge_vue_vue_type_template_id_90f2ef60___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gauge_vue_vue_type_template_id_90f2ef60___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://vue-svg-gauge/./src/Gauge.vue?");

/***/ })

/******/ });
});