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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/pages/analytic/css/main.scss
var main = __webpack_require__(5);

// CONCATENATED MODULE: ./src/pages/analytic/js/Chart.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Chart =
/*#__PURE__*/
function () {
  function Chart(day, dayOfWeek, count) {
    _classCallCheck(this, Chart);

    this.day = day;
    this.dayOfWeek = dayOfWeek;
    this.count = count;
  }

  _createClass(Chart, [{
    key: "render",
    value: function render() {}
  }]);

  return Chart;
}();

/* harmony default export */ var js_Chart = (Chart);
// CONCATENATED MODULE: ./src/pages/analytic/js/Analytic.js
function Analytic_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Analytic_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Analytic_createClass(Constructor, protoProps, staticProps) { if (protoProps) Analytic_defineProperties(Constructor.prototype, protoProps); if (staticProps) Analytic_defineProperties(Constructor, staticProps); return Constructor; }



var Analytic_Analytic =
/*#__PURE__*/
function () {
  function Analytic(date) {
    Analytic_classCallCheck(this, Analytic);

    this.date = date;
    this.charts = [];
  }

  Analytic_createClass(Analytic, [{
    key: "initCharts",
    value: function initCharts() {
      this.addChart(19, 'пн', 15);
      this.addChart(20, 'вт', 11);
      this.addChart(21, 'ср', 18);
      this.addChart(22, 'чт', 39);
      this.addChart(23, 'пт', 45);
      this.addChart(24, 'сб', 73);
      this.addChart(25, 'вс', 34);
    }
  }, {
    key: "addChart",
    value: function addChart(day, dayOfWeek, count) {
      var newChart = new js_Chart(day, dayOfWeek, count);
      this.charts.push(newChart);
    } // Фунация подсчета процентов у каждого чарта

  }, {
    key: "calcChartsWidth",
    value: function calcChartsWidth() {
      // находим максимум - это будет 100 % величина
      var maxCount = 0;

      for (var i = 0; i < this.charts.length; i++) {
        if (this.charts[i].count > maxCount) {
          maxCount = this.charts[i].count;
        }
      } // выставляем процент у каждого чарта


      for (var _i = 0; _i < this.charts.length; _i++) {
        this.charts[_i].width = Math.floor(this.charts[_i].count * 100 / maxCount);
      }
    }
  }]);

  return Analytic;
}();

/* harmony default export */ var js_Analytic = (Analytic_Analytic);
// CONCATENATED MODULE: ./src/pages/analytic/analytic.js


console.log('analytic.js'); // тесты аналитики

var analytic = new js_Analytic('август');
analytic.initCharts();
analytic.calcChartsWidth();
console.log(analytic);

/***/ })

/******/ });