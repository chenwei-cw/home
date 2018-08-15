(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["all"],{

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/js/components/cellview/cellView.less":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./src/js/components/cellview/cellView.less ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list {\n  max-width: 650px;\n  margin: auto;\n}\n.category {\n  color: #666;\n  text-align: center;\n  height: 50px;\n  line-height: 50px;\n  border-bottom: 1px solid #e5e5e5;\n  font-weight: 400;\n  font-size: 100%;\n}\n.list-post {\n  padding: 0 5px;\n  height: 45px;\n  line-height: 45px;\n  border-bottom: 1px solid #e5e5e5;\n  font-size: 14px;\n  overflow: hidden;\n}\n.list-post:hover {\n  background: #f6f6f6;\n}\n.list-post .date-long {\n  display: inline-block;\n  float: right;\n  color: #999;\n  text-align: right;\n}\n.list-post a {\n  text-decoration: none;\n}\n.title {\n  font-size: 14px;\n  color: #44a340;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/js/components/cellview/Cell.js":
/*!********************************************!*\
  !*** ./src/js/components/cellview/Cell.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cell = function (_Component) {
  _inherits(Cell, _Component);

  function Cell() {
    _classCallCheck(this, Cell);

    return _possibleConstructorReturn(this, (Cell.__proto__ || Object.getPrototypeOf(Cell)).apply(this, arguments));
  }

  _createClass(Cell, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "li",
        { className: "list-post" },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: { pathname: "/article", search: "" + this.props.number } },
          _react2.default.createElement(
            "span",
            { className: "date-long" },
            this.props.created_at.substr(0, 10)
          ),
          _react2.default.createElement(
            "span",
            { className: "title" },
            this.props.title
          )
        )
      );
    }
  }]);

  return Cell;
}(_react.Component);

exports.default = Cell;
;

/***/ }),

/***/ "./src/js/components/cellview/CellView.js":
/*!************************************************!*\
  !*** ./src/js/components/cellview/CellView.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Cell = __webpack_require__(/*! ./Cell.js */ "./src/js/components/cellview/Cell.js");

var _Cell2 = _interopRequireDefault(_Cell);

__webpack_require__(/*! ./cellView.less */ "./src/js/components/cellview/cellView.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CellView = function (_Component) {
  _inherits(CellView, _Component);

  function CellView() {
    _classCallCheck(this, CellView);

    return _possibleConstructorReturn(this, (CellView.__proto__ || Object.getPrototypeOf(CellView)).apply(this, arguments));
  }

  _createClass(CellView, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          { className: 'category' },
          this.props.title
        ),
        _react2.default.createElement(
          'ul',
          null,
          this.props.items.map(function (item, index) {
            return _react2.default.createElement(_Cell2.default, _extends({}, item, { key: index }));
          })
        )
      );
    }
  }]);

  return CellView;
}(_react.Component);

exports.default = CellView;
;

/***/ }),

/***/ "./src/js/components/cellview/cellView.less":
/*!**************************************************!*\
  !*** ./src/js/components/cellview/cellView.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!./cellView.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/js/components/cellview/cellView.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/js/containers/all/all.js":
/*!**************************************!*\
  !*** ./src/js/containers/all/all.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _reducers = __webpack_require__(/*! ../../reducers/reducers */ "./src/js/reducers/reducers.js");

var _ajax = __webpack_require__(/*! ../../ajax */ "./src/js/ajax/index.js");

var _CellView = __webpack_require__(/*! ../../components/cellview/CellView */ "./src/js/components/cellview/CellView.js");

var _CellView2 = _interopRequireDefault(_CellView);

var _Logo = __webpack_require__(/*! ../../components/logo/Logo */ "./src/js/components/logo/Logo.js");

var _Logo2 = _interopRequireDefault(_Logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var All = function (_Component) {
    _inherits(All, _Component);

    function All() {
        _classCallCheck(this, All);

        var _this = _possibleConstructorReturn(this, (All.__proto__ || Object.getPrototypeOf(All)).call(this));

        _this.state = {};
        _this.variate = {};
        return _this;
    }

    _createClass(All, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.issuesData ? null : this.serverData();
        }
    }, {
        key: 'serverData',
        value: function serverData() {
            var _this2 = this;

            //获取issues的数据
            (0, _ajax.issuesData)().then(function (result) {
                _this2.props.getIssuesData(result.data);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _react.Fragment,
                null,
                _react2.default.createElement(_Logo2.default, null),
                _react2.default.createElement(
                    'div',
                    { className: 'list' },
                    _react2.default.createElement(_CellView2.default, {
                        title: '\u5168\u90E8',
                        items: this.props.issuesData ? this.props.issuesData : [] })
                )
            );
        }
    }]);

    return All;
}(_react.Component);

var getData = function getData(state) {
    return {
        issuesData: state.issuesData
    };
};
var getDispatch = function getDispatch(dispatch) {
    return {
        getIssuesData: function getIssuesData(mess) {
            dispatch((0, _reducers.getIssuesData)(mess));
        }
    };
};

exports.default = (0, _reactRedux.connect)(getData, getDispatch)(All);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9jZWxsdmlldy9jZWxsVmlldy5sZXNzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2NlbGx2aWV3L0NlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvY2VsbHZpZXcvQ2VsbFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvY2VsbHZpZXcvY2VsbFZpZXcubGVzcz9kZGFhIiwid2VicGFjazovLy8uL3NyYy9qcy9jb250YWluZXJzL2FsbC9hbGwuanMiXSwibmFtZXMiOlsiQ2VsbCIsInBhdGhuYW1lIiwic2VhcmNoIiwicHJvcHMiLCJudW1iZXIiLCJjcmVhdGVkX2F0Iiwic3Vic3RyIiwidGl0bGUiLCJDb21wb25lbnQiLCJDZWxsVmlldyIsIml0ZW1zIiwibWFwIiwiaXRlbSIsImluZGV4IiwiQWxsIiwic3RhdGUiLCJ2YXJpYXRlIiwiaXNzdWVzRGF0YSIsInNlcnZlckRhdGEiLCJ0aGVuIiwicmVzdWx0IiwiZ2V0SXNzdWVzRGF0YSIsImRhdGEiLCJnZXREYXRhIiwiZ2V0RGlzcGF0Y2giLCJkaXNwYXRjaCIsIm1lc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUdBO0FBQ0EsZ0NBQWlDLHFCQUFxQixpQkFBaUIsR0FBRyxhQUFhLGdCQUFnQix1QkFBdUIsaUJBQWlCLHNCQUFzQixxQ0FBcUMscUJBQXFCLG9CQUFvQixHQUFHLGNBQWMsbUJBQW1CLGlCQUFpQixzQkFBc0IscUNBQXFDLG9CQUFvQixxQkFBcUIsR0FBRyxvQkFBb0Isd0JBQXdCLEdBQUcseUJBQXlCLDBCQUEwQixpQkFBaUIsZ0JBQWdCLHNCQUFzQixHQUFHLGdCQUFnQiwwQkFBMEIsR0FBRyxVQUFVLG9CQUFvQixtQkFBbUIsR0FBRzs7QUFFNW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7Ozs2QkFDVjtBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUksV0FBVSxXQUFkO0FBQ0U7QUFBQyw4QkFBRDtBQUFBLFlBQU0sSUFBSSxFQUFDQyxvQkFBRCxFQUFxQkMsYUFBVSxLQUFLQyxLQUFMLENBQVdDLE1BQTFDLEVBQVY7QUFDRTtBQUFBO0FBQUEsY0FBTSxXQUFVLFdBQWhCO0FBQTZCLGlCQUFLRCxLQUFMLENBQVdFLFVBQVgsQ0FBc0JDLE1BQXRCLENBQTZCLENBQTdCLEVBQWdDLEVBQWhDO0FBQTdCLFdBREY7QUFFRTtBQUFBO0FBQUEsY0FBTSxXQUFVLE9BQWhCO0FBQXlCLGlCQUFLSCxLQUFMLENBQVdJO0FBQXBDO0FBRkY7QUFERixPQURGO0FBUUQ7Ozs7RUFWK0JDLGdCOztrQkFBYlIsSTtBQVdwQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEQ7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCUyxROzs7Ozs7Ozs7Ozs2QkFDVjtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUksV0FBVSxVQUFkO0FBQTBCLGVBQUtOLEtBQUwsQ0FBV0k7QUFBckMsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUVJLGVBQUtKLEtBQUwsQ0FBV08sS0FBWCxDQUFpQkMsR0FBakIsQ0FBcUIsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsbUJBQ25CLDhCQUFDLGNBQUQsZUFBVUQsSUFBVixJQUFnQixLQUFLQyxLQUFyQixJQURtQjtBQUFBLFdBQXJCO0FBRko7QUFGRixPQURGO0FBWUQ7Ozs7RUFkbUNMLGdCOztrQkFBakJDLFE7QUFlcEIsQzs7Ozs7Ozs7Ozs7O0FDbEJEOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDTUssRzs7O0FBQ0YsbUJBQWE7QUFBQTs7QUFBQTs7QUFFVCxjQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUdBLGNBQUtDLE9BQUwsR0FBZSxFQUFmO0FBTFM7QUFRWjs7Ozs0Q0FDa0I7QUFDZixpQkFBS2IsS0FBTCxDQUFXYyxVQUFYLEdBQXVCLElBQXZCLEdBQThCLEtBQUtDLFVBQUwsRUFBOUI7QUFDSDs7O3FDQUNXO0FBQUE7O0FBQ1I7QUFDQSxvQ0FBYUMsSUFBYixDQUFrQixVQUFDQyxNQUFELEVBQVU7QUFDeEIsdUJBQUtqQixLQUFMLENBQVdrQixhQUFYLENBQXlCRCxPQUFPRSxJQUFoQztBQUNILGFBRkQ7QUFHSDs7O2lDQUNPO0FBQ0osbUJBQ0k7QUFBQywrQkFBRDtBQUFBO0FBQ0ksOENBQUMsY0FBRCxPQURKO0FBRUk7QUFBQTtBQUFBLHNCQUFLLFdBQVUsTUFBZjtBQUNJLGtEQUFDLGtCQUFEO0FBQ0ksK0JBQVEsY0FEWjtBQUVJLCtCQUFTLEtBQUtuQixLQUFMLENBQVdjLFVBQVgsR0FBdUIsS0FBS2QsS0FBTCxDQUFXYyxVQUFsQyxHQUErQyxFQUY1RDtBQURKO0FBRkosYUFESjtBQVVIOzs7O0VBOUJhVCxnQjs7QUFpQ2xCLElBQU1lLFVBQVUsU0FBVkEsT0FBVSxDQUFDUixLQUFELEVBQVU7QUFDdEIsV0FBTztBQUNIRSxvQkFBV0YsTUFBTUU7QUFEZCxLQUFQO0FBR0gsQ0FKRDtBQUtBLElBQU1PLGNBQWMsU0FBZEEsV0FBYyxDQUFDQyxRQUFELEVBQWE7QUFDN0IsV0FBTztBQUNISix1QkFBYyx1QkFBQ0ssSUFBRCxFQUFRO0FBQ2xCRCxxQkFBUyw2QkFBY0MsSUFBZCxDQUFUO0FBQ0g7QUFIRSxLQUFQO0FBS0gsQ0FORDs7a0JBUWUseUJBQVFILE9BQVIsRUFBZ0JDLFdBQWhCLEVBQTZCVixHQUE3QixDIiwiZmlsZSI6ImFsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmxpc3Qge1xcbiAgbWF4LXdpZHRoOiA2NTBweDtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuLmNhdGVnb3J5IHtcXG4gIGNvbG9yOiAjNjY2O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U1ZTVlNTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxufVxcbi5saXN0LXBvc3Qge1xcbiAgcGFkZGluZzogMCA1cHg7XFxuICBoZWlnaHQ6IDQ1cHg7XFxuICBsaW5lLWhlaWdodDogNDVweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTVlNWU1O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmxpc3QtcG9zdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xcbn1cXG4ubGlzdC1wb3N0IC5kYXRlLWxvbmcge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgY29sb3I6ICM5OTk7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuLmxpc3QtcG9zdCBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiAjNDRhMzQwO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENlbGwgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LXBvc3RcIj5cbiAgICAgICAgPExpbmsgdG89e3twYXRobmFtZTpgL2FydGljbGVgLHNlYXJjaDpgJHt0aGlzLnByb3BzLm51bWJlcn1gfX0+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGF0ZS1sb25nXCI+e3RoaXMucHJvcHMuY3JlYXRlZF9hdC5zdWJzdHIoMCwgMTApfTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RpdGxlJz57dGhpcy5wcm9wcy50aXRsZX08L3NwYW4+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgfVxufTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENlbGwgZnJvbSAnLi9DZWxsLmpzJztcbmltcG9ydCAnLi9jZWxsVmlldy5sZXNzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDZWxsVmlldyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImNhdGVnb3J5XCI+e3RoaXMucHJvcHMudGl0bGV9PC9oMj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gXG4gICAgICAgICAgICAgIDxDZWxsIHsuLi5pdGVtfSBrZXk9e2luZGV4fSAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn07IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NlbGxWaWV3Lmxlc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NlbGxWaWV3Lmxlc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jZWxsVmlldy5sZXNzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IFJlYWN0LHtGcmFnbWVudCxDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHtnZXRJc3N1ZXNEYXRhfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9yZWR1Y2VycydcbmltcG9ydCB7aXNzdWVzRGF0YX0gZnJvbSAnLi4vLi4vYWpheCdcbmltcG9ydCBDZWxsVmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NlbGx2aWV3L0NlbGxWaWV3J1xuaW1wb3J0IExvZ28gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sb2dvL0xvZ28nXG5jbGFzcyBBbGwgZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52YXJpYXRlID0ge1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgdGhpcy5wcm9wcy5pc3N1ZXNEYXRhPyBudWxsIDogdGhpcy5zZXJ2ZXJEYXRhKCk7XG4gICAgfVxuICAgIHNlcnZlckRhdGEoKXtcbiAgICAgICAgLy/ojrflj5Zpc3N1ZXPnmoTmlbDmja5cbiAgICAgICAgaXNzdWVzRGF0YSgpLnRoZW4oKHJlc3VsdCk9PntcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0SXNzdWVzRGF0YShyZXN1bHQuZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxMb2dvIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3QnPlxuICAgICAgICAgICAgICAgICAgICA8Q2VsbFZpZXcgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA9ICflhajpg6gnXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcyA9IHt0aGlzLnByb3BzLmlzc3Vlc0RhdGE/IHRoaXMucHJvcHMuaXNzdWVzRGF0YSA6IFtdfSAvPiBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmNvbnN0IGdldERhdGEgPSAoc3RhdGUpID0+e1xuICAgIHJldHVybiB7XG4gICAgICAgIGlzc3Vlc0RhdGE6c3RhdGUuaXNzdWVzRGF0YVxuICAgIH1cbn1cbmNvbnN0IGdldERpc3BhdGNoID0gKGRpc3BhdGNoKSA9PntcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRJc3N1ZXNEYXRhOihtZXNzKT0+e1xuICAgICAgICAgICAgZGlzcGF0Y2goZ2V0SXNzdWVzRGF0YShtZXNzKSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChnZXREYXRhLGdldERpc3BhdGNoKShBbGwpICJdLCJzb3VyY2VSb290IjoiIn0=