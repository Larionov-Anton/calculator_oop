/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/model.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// *Модель данных (взаимодействие с данными)
var Model = /*#__PURE__*/function () {
  function Model() {
    _classCallCheck(this, Model);

    this.state = {
      firstNumber: '',
      mathSign: '',
      secondNumber: '',
      finish: false,
      error: false
    }; // Служебные массивы

    this.numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
    this.mathActions = ['+/-', '%', '/', 'x', '-', '+'];
  } // Очистить все


  _createClass(Model, [{
    key: "clear",
    value: function clear() {
      this.state = {
        firstNumber: '',
        mathSign: '',
        secondNumber: '',
        finish: false,
        error: false
      };
      console.log(this.state);
    }
  }, {
    key: "addData",
    value: // Добавить данные
    function addData(char, error) {
      console.log(error);
      this.state.error = error;
      var number = this.numbers.includes(char);
      var mathAction = this.mathActions.includes(char);

      if (number) {
        if (this.state.secondNumber === '' && this.state.mathSign === '' && !this.state.error) {
          this.state.firstNumber += char;
        } else if (!this.state.error) {
          this.state.secondNumber += char;
        }

        console.log(this.state);
        return this.state;
      }

      ;

      if (mathAction) {
        this.state.mathSign = char;
        this.state.error = false;
        this.state.finish = false;
        this.state.secondNumber = '';

        if (char === '+/-') {
          this.equal();
        }

        console.log(this.state);
        return this.state;
      }

      ;

      if (char === '=') {
        this.state.error = false;
        this.equal();
        console.log(this.state);
        return this.state;
      }

      ;
    }
  }, {
    key: "equal",
    value: // Произвести вычисления
    function equal() {
      if (this.state.secondNumber === '') this.state.secondNumber = this.state.firstNumber;

      switch (this.state.mathSign) {
        case '+':
          this.state.firstNumber = +this.state.firstNumber + +this.state.secondNumber;
          break;

        case '-':
          this.state.firstNumber = this.state.firstNumber - this.state.secondNumber;
          break;

        case '/':
          this.state.firstNumber = this.state.firstNumber / this.state.secondNumber;
          break;

        case 'x':
          this.state.firstNumber = this.state.firstNumber * this.state.secondNumber;
          break;

        case '+/-':
          this.state.firstNumber = -this.state.firstNumber;
          break;

        case '%':
          this.state.firstNumber = this.state.firstNumber / 100 * this.state.secondNumber;
          break;
      }

      this.state.finish = true;
    }
  }]);

  return Model;
}();

/* harmony default export */ var model = (Model);
;// CONCATENATED MODULE: ./src/js/eventEmmiter.js
function eventEmmiter_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function eventEmmiter_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function eventEmmiter_createClass(Constructor, protoProps, staticProps) { if (protoProps) eventEmmiter_defineProperties(Constructor.prototype, protoProps); if (staticProps) eventEmmiter_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var EventEmmiter = /*#__PURE__*/function () {
  function EventEmmiter() {
    eventEmmiter_classCallCheck(this, EventEmmiter);

    this.events = {};
  }

  eventEmmiter_createClass(EventEmmiter, [{
    key: "on",
    value: function on(type, calback) {
      this.events[type] = this.events[type] || [];
      this.events[type].push(calback); // console.log(this.events);
    }
  }, {
    key: "emit",
    value: function emit(type, arg, arg2) {
      if (this.events[type]) {
        this.events[type].forEach(function (calback) {
          return calback(arg, arg2);
        });
      } // console.log(this.events);

    }
  }]);

  return EventEmmiter;
}();

;
/* harmony default export */ var eventEmmiter = (EventEmmiter);
;// CONCATENATED MODULE: ./src/js/view.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function view_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function view_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function view_createClass(Constructor, protoProps, staticProps) { if (protoProps) view_defineProperties(Constructor.prototype, protoProps); if (staticProps) view_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

 // *Представление (взаимодействие с дом)

var View = /*#__PURE__*/function (_EventEmmiter) {
  _inherits(View, _EventEmmiter);

  var _super = _createSuper(View);

  function View() {
    var _this;

    view_classCallCheck(this, View);

    _this = _super.call(this);
    _this.screen = document.querySelector('.calc-screen p');
    _this.ac = document.querySelector('.ac');
    _this.buttons = document.querySelector('.calc-buttons');
    _this.error = false; // Отливливает событие нажатия на все кнопки

    _this.buttons.addEventListener('click', _this.addChar.bind(_assertThisInitialized(_this)));

    _this.ac.addEventListener('click', _this.clearAll.bind(_assertThisInitialized(_this)));

    return _this;
  }

  view_createClass(View, [{
    key: "screenLength",
    value: function screenLength(string) {
      this.error = false;
      var length = string.length;

      if (length < 7) {
        this.screen.style.fontSize = '4rem';
      } else if (length < 10) {
        this.screen.style.fontSize = '3rem';
      } else if (length < 13) {
        this.screen.style.fontSize = '2.5rem';
      } else if (length < 16) {
        this.screen.style.fontSize = '2rem';
      } else if (length < 21) {
        this.screen.style.fontSize = '1.5rem';
      } else {
        this.screen.style.fontSize = '1.5rem';
        return this.error = true;
      }
    }
  }, {
    key: "clearAll",
    value: function clearAll() {
      this.screen.textContent = '0';
      this.screen.style.fontSize = '4rem';
      this.emit('clear');
    }
  }, {
    key: "addChar",
    value: function addChar() {
      if (!event.target.classList.contains('btn')) return;
      if (event.target.classList.contains('ac')) return;
      var char = event.target.textContent;
      this.emit('add', char, this.error);
    }
  }, {
    key: "showData",
    value: function showData(state) {
      if (state.secondNumber === '' && state.mathSign === '') {
        this.screen.textContent = state.firstNumber;
      } else if (state.finish) {
        this.screen.textContent = state.firstNumber;
      } else if (state.firstNumber !== '' && state.mathSign !== '' && state.secondNumber === '') {
        this.screen.textContent = state.mathSign;
      } else {
        this.screen.textContent = state.secondNumber;
      }

      this.screenLength(this.screen.textContent);
      return;
    }
  }]);

  return View;
}(eventEmmiter);

/* harmony default export */ var view = (View);
;// CONCATENATED MODULE: ./src/js/controller.js
function controller_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function controller_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function controller_createClass(Constructor, protoProps, staticProps) { if (protoProps) controller_defineProperties(Constructor.prototype, protoProps); if (staticProps) controller_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// Обьединяет модель и представление
var Controller = /*#__PURE__*/function () {
  function Controller(model, view) {
    controller_classCallCheck(this, Controller);

    this.model = model;
    this.view = view;
    view.on('add', this.addChars.bind(this));
    view.on('clear', this.clearAll.bind(this)); // Подписаться на события представления
  }

  controller_createClass(Controller, [{
    key: "addChars",
    value: function addChars(char, error) {
      var state = this.model.addData(char, error);
      this.view.showData(state); // console.log(state);
    }
  }, {
    key: "clearAll",
    value: function clearAll() {
      this.model.clear();
    }
  }]);

  return Controller;
}();

/* harmony default export */ var controller = (Controller);
;// CONCATENATED MODULE: ./src/index.js
// Стили
 // Логика
// Императивный стиль
// import './js/common.js';
// ООП в патерне MVC




var src_view = new view();
var src_model = new model();
var src_controller = new controller(src_model, src_view); // view.addData('9', false);
/******/ })()
;