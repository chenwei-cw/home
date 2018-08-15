(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["article"],{

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/js/containers/article/article.less":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./src/js/containers/article/article.less ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".article {\n  max-width: 650px;\n  margin: auto;\n  padding: 0 15px 20px 15px;\n  line-height: 26px;\n  color: #555;\n  word-wrap: break-word;\n}\n.article a {\n  font-size: 14px;\n}\n.article img {\n  display: block;\n  margin: 8px auto;\n  max-width: 100%;\n  border-radius: 2px;\n}\n.article-content {\n  margin-top: -6px;\n  margin-bottom: -26px;\n}\n.article-content p {\n  margin-bottom: 16px;\n}\n.article-content p code,\n.article-content ul code {\n  display: inline-block;\n  margin: 0 2px;\n  padding: 0 4px;\n  color: #dd0055;\n  border-radius: 3px;\n  line-height: 20px;\n  background: #fafafa;\n  border: 1px solid #ddd;\n}\n.article-content pre code {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  background: #3f3f3f;\n  color: #dcdcdc;\n  margin-bottom: 16px;\n  padding: 10px 15px;\n  font-family: Menlo, 'Bitstream Vera Sans Mono', 'DejaVu Sans Mono', Monaco, Consolas, monospace;\n  font-size: 13px;\n  font-style: normal;\n  line-height: 1.5;\n  overflow: auto;\n  border-radius: 4px;\n}\n.article-content strong {\n  color: #333;\n  font-weight: bold;\n}\n.article-content h1,\n.article-content h2,\n.article-content h3,\n.article-content h4,\n.article-content h5,\n.article-content h6 {\n  margin-top: 18px;\n  margin-bottom: 12px;\n  color: #454545;\n}\n.article-content h1 {\n  font-size: 21px;\n}\n.article-content h2 {\n  padding: 0 0 6px 0;\n  border-bottom: 1px solid #eee;\n  font-size: 20px;\n}\n.article-content h3 {\n  font-size: 18px;\n}\n.article-content h4 {\n  font-size: 16px;\n}\n.article-content h5 {\n  font-size: 14px;\n}\n.article-content h6 {\n  font-size: 12px;\n}\n.article-content ul {\n  margin-left: 2em;\n  margin-bottom: 16px;\n}\n.article-content ol {\n  padding-left: 28px;\n}\n.article-title {\n  color: #ff001f;\n  font-size: 22px;\n  text-align: center;\n  line-height: 30px;\n}\n.article-time {\n  color: #9b9b9b;\n  font-size: 14px;\n  margin: 5px 0 16px 0;\n  text-align: center;\n}\n.article-comment {\n  margin: 15px 0 50px 0;\n  display: block;\n  width: 100%;\n  height: 32px;\n  line-height: 32px;\n  text-align: center;\n  color: #aaa;\n  cursor: pointer;\n  border-radius: 4px;\n  border: 0;\n  outline: none;\n  background: #ddd;\n}\n.article-comment:hover {\n  color: #555;\n  background: #ccc;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/js/components/article.js/article.js":
/*!*************************************************!*\
  !*** ./src/js/components/article.js/article.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _marked = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");

var _marked2 = _interopRequireDefault(_marked);

var _highlight = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

var _highlight2 = _interopRequireDefault(_highlight);

var _config = __webpack_require__(/*! ../../ajax/config */ "./src/js/ajax/config.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Article = function (_Component) {
  _inherits(Article, _Component);

  function Article() {
    _classCallCheck(this, Article);

    return _possibleConstructorReturn(this, (Article.__proto__ || Object.getPrototypeOf(Article)).apply(this, arguments));
  }

  _createClass(Article, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      window.scrollTo(0, 0);

      // 代码高亮
      _marked2.default.setOptions({
        highlight: function highlight(code) {
          return _highlight2.default.highlightAuto(code).value;
        }
      });
      this.handleClick = this.handleClick.bind(this);
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      var url = 'https://github.com/' + _config.config.owner + '/' + _config.config.repo + '/issues/' + this.props.number;
      window.location.href = url;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'article' },
          _react2.default.createElement(
            'h1',
            { className: 'article-title' },
            this.props.title
          ),
          _react2.default.createElement(
            'p',
            { className: 'article-time' },
            this.props.created_at.substr(0, 10)
          ),
          _react2.default.createElement('div', { className: 'article-desc article-content',
            dangerouslySetInnerHTML: { __html: (0, _marked2.default)(this.props.body) } })
        ),
        _react2.default.createElement(
          'div',
          { className: 'article' },
          _react2.default.createElement(
            'button',
            { className: 'article-comment', onClick: this.handleClick },
            '\u70B9\u51FB\u8BC4\u8BBA'
          )
        )
      );
    }
  }]);

  return Article;
}(_react.Component);

exports.default = Article;
;

/***/ }),

/***/ "./src/js/containers/article/article.js":
/*!**********************************************!*\
  !*** ./src/js/containers/article/article.js ***!
  \**********************************************/
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

var _article = __webpack_require__(/*! ../../components/article.js/article.js */ "./src/js/components/article.js/article.js");

var _article2 = _interopRequireDefault(_article);

var _Logo = __webpack_require__(/*! ../../components/logo/Logo */ "./src/js/components/logo/Logo.js");

var _Logo2 = _interopRequireDefault(_Logo);

__webpack_require__(/*! ./article.less */ "./src/js/containers/article/article.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArticleCon = function (_Component) {
    _inherits(ArticleCon, _Component);

    function ArticleCon() {
        _classCallCheck(this, ArticleCon);

        var _this = _possibleConstructorReturn(this, (ArticleCon.__proto__ || Object.getPrototypeOf(ArticleCon)).call(this));

        _this.state = {
            title: '',
            created_at: '',
            body: ""
        };
        _this.variate = {};
        return _this;
    }

    _createClass(ArticleCon, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.init();
        }
    }, {
        key: 'init',
        value: function init() {
            //没本地数据就请求服务器
            this.props.issuesData ? this.view() : this.serverData();
        }
    }, {
        key: 'serverData',
        value: function serverData() {
            var _this2 = this;

            //获取issues的数据
            (0, _ajax.issuesData)().then(function (result) {
                _this2.props.getIssuesData(result.data);
                _this2.view();
            });
        }
    }, {
        key: 'view',
        value: function view() {
            var number = parseInt(this.props.location.search.split('?')[1]),
                length = this.props.issuesData.length,
                articleData = this.props.issuesData[length - number];
            this.variate = {
                number: number,
                articleData: articleData,
                issuesData: this.props.issuesData
            };
            this.setState({
                number: number,
                title: articleData.title,
                created_at: articleData.created_at,
                body: articleData.body
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _react.Fragment,
                null,
                _react2.default.createElement(_Logo2.default, null),
                _react2.default.createElement(_article2.default, this.state)
            );
        }
    }]);

    return ArticleCon;
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

exports.default = (0, _reactRedux.connect)(getData, getDispatch)(ArticleCon);

/***/ }),

/***/ "./src/js/containers/article/article.less":
/*!************************************************!*\
  !*** ./src/js/containers/article/article.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!./article.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/js/containers/article/article.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29udGFpbmVycy9hcnRpY2xlL2FydGljbGUubGVzcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9hcnRpY2xlLmpzL2FydGljbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbnRhaW5lcnMvYXJ0aWNsZS9hcnRpY2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb250YWluZXJzL2FydGljbGUvYXJ0aWNsZS5sZXNzP2MyMGUiXSwibmFtZXMiOlsiQXJ0aWNsZSIsIndpbmRvdyIsInNjcm9sbFRvIiwibWFya2VkIiwic2V0T3B0aW9ucyIsImhpZ2hsaWdodCIsImhsanMiLCJoaWdobGlnaHRBdXRvIiwiY29kZSIsInZhbHVlIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwidXJsIiwiY29uZmlnIiwib3duZXIiLCJyZXBvIiwicHJvcHMiLCJudW1iZXIiLCJsb2NhdGlvbiIsImhyZWYiLCJ0aXRsZSIsImNyZWF0ZWRfYXQiLCJzdWJzdHIiLCJfX2h0bWwiLCJib2R5IiwiQ29tcG9uZW50IiwiQXJ0aWNsZUNvbiIsInN0YXRlIiwidmFyaWF0ZSIsImluaXQiLCJpc3N1ZXNEYXRhIiwidmlldyIsInNlcnZlckRhdGEiLCJ0aGVuIiwicmVzdWx0IiwiZ2V0SXNzdWVzRGF0YSIsImRhdGEiLCJwYXJzZUludCIsInNlYXJjaCIsInNwbGl0IiwibGVuZ3RoIiwiYXJ0aWNsZURhdGEiLCJzZXRTdGF0ZSIsImdldERhdGEiLCJnZXREaXNwYXRjaCIsImRpc3BhdGNoIiwibWVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBR0E7QUFDQSxtQ0FBb0MscUJBQXFCLGlCQUFpQiw4QkFBOEIsc0JBQXNCLGdCQUFnQiwwQkFBMEIsR0FBRyxjQUFjLG9CQUFvQixHQUFHLGdCQUFnQixtQkFBbUIscUJBQXFCLG9CQUFvQix1QkFBdUIsR0FBRyxvQkFBb0IscUJBQXFCLHlCQUF5QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzREFBc0QsMEJBQTBCLGtCQUFrQixtQkFBbUIsbUJBQW1CLHVCQUF1QixzQkFBc0Isd0JBQXdCLDJCQUEyQixHQUFHLDZCQUE2QixtQkFBbUIscUJBQXFCLG1CQUFtQix3QkFBd0IsbUJBQW1CLHdCQUF3Qix1QkFBdUIsb0dBQW9HLG9CQUFvQix1QkFBdUIscUJBQXFCLG1CQUFtQix1QkFBdUIsR0FBRywyQkFBMkIsZ0JBQWdCLHNCQUFzQixHQUFHLHFJQUFxSSxxQkFBcUIsd0JBQXdCLG1CQUFtQixHQUFHLHVCQUF1QixvQkFBb0IsR0FBRyx1QkFBdUIsdUJBQXVCLGtDQUFrQyxvQkFBb0IsR0FBRyx1QkFBdUIsb0JBQW9CLEdBQUcsdUJBQXVCLG9CQUFvQixHQUFHLHVCQUF1QixvQkFBb0IsR0FBRyx1QkFBdUIsb0JBQW9CLEdBQUcsdUJBQXVCLHFCQUFxQix3QkFBd0IsR0FBRyx1QkFBdUIsdUJBQXVCLEdBQUcsa0JBQWtCLG1CQUFtQixvQkFBb0IsdUJBQXVCLHNCQUFzQixHQUFHLGlCQUFpQixtQkFBbUIsb0JBQW9CLHlCQUF5Qix1QkFBdUIsR0FBRyxvQkFBb0IsMEJBQTBCLG1CQUFtQixnQkFBZ0IsaUJBQWlCLHNCQUFzQix1QkFBdUIsZ0JBQWdCLG9CQUFvQix1QkFBdUIsY0FBYyxrQkFBa0IscUJBQXFCLEdBQUcsMEJBQTBCLGdCQUFnQixxQkFBcUIsR0FBRzs7QUFFbndFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsTzs7Ozs7Ozs7Ozs7eUNBQ0U7QUFDbkJDLGFBQU9DLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkI7O0FBRUE7QUFDQUMsdUJBQU9DLFVBQVAsQ0FBa0I7QUFDaEJDLG1CQUFXLHlCQUFRO0FBQ2pCLGlCQUFPQyxvQkFBS0MsYUFBTCxDQUFtQkMsSUFBbkIsRUFBeUJDLEtBQWhDO0FBQ0Q7QUFIZSxPQUFsQjtBQUtBLFdBQUtDLFdBQUwsR0FBbUIsS0FBS0EsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBbkI7QUFDRDs7O2tDQUVhO0FBQ1osVUFBSUMsOEJBQTRCQyxlQUFPQyxLQUFuQyxTQUE0Q0QsZUFBT0UsSUFBbkQsZ0JBQWtFLEtBQUtDLEtBQUwsQ0FBV0MsTUFBakY7QUFDQWhCLGFBQU9pQixRQUFQLENBQWdCQyxJQUFoQixHQUF1QlAsR0FBdkI7QUFDRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFNBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSSxXQUFVLGVBQWQ7QUFBK0IsaUJBQUtJLEtBQUwsQ0FBV0k7QUFBMUMsV0FERjtBQUVFO0FBQUE7QUFBQSxjQUFHLFdBQVUsY0FBYjtBQUE2QixpQkFBS0osS0FBTCxDQUFXSyxVQUFYLENBQXNCQyxNQUF0QixDQUE2QixDQUE3QixFQUFnQyxFQUFoQztBQUE3QixXQUZGO0FBR0UsaURBQUssV0FBVSw4QkFBZjtBQUNLLHFDQUF5QixFQUFDQyxRQUFRLHNCQUFPLEtBQUtQLEtBQUwsQ0FBV1EsSUFBbEIsQ0FBVCxFQUQ5QjtBQUhGLFNBREY7QUFRRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFNBQWY7QUFDRTtBQUFBO0FBQUEsY0FBUSxXQUFVLGlCQUFsQixFQUFvQyxTQUFTLEtBQUtkLFdBQWxEO0FBQUE7QUFBQTtBQURGO0FBUkYsT0FERjtBQWNEOzs7O0VBakNrQ2UsZ0I7O2tCQUFoQnpCLE87QUFrQ3BCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNEOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRU0wQixVOzs7QUFDRiwwQkFBYTtBQUFBOztBQUFBOztBQUVULGNBQUtDLEtBQUwsR0FBYTtBQUNUUCxtQkFBTSxFQURHO0FBRVRDLHdCQUFXLEVBRkY7QUFHVEcsa0JBQUs7QUFISSxTQUFiO0FBS0EsY0FBS0ksT0FBTCxHQUFlLEVBQWY7QUFQUztBQVVaOzs7OzRDQUNrQjtBQUNmLGlCQUFLQyxJQUFMO0FBQ0g7OzsrQkFDSztBQUNGO0FBQ0EsaUJBQUtiLEtBQUwsQ0FBV2MsVUFBWCxHQUF1QixLQUFLQyxJQUFMLEVBQXZCLEdBQXFDLEtBQUtDLFVBQUwsRUFBckM7QUFDSDs7O3FDQUVXO0FBQUE7O0FBQ1I7QUFDQSxvQ0FBYUMsSUFBYixDQUFrQixVQUFDQyxNQUFELEVBQVU7QUFDeEIsdUJBQUtsQixLQUFMLENBQVdtQixhQUFYLENBQXlCRCxPQUFPRSxJQUFoQztBQUNBLHVCQUFLTCxJQUFMO0FBQ0gsYUFIRDtBQUlIOzs7K0JBQ0s7QUFDRixnQkFBSWQsU0FBU29CLFNBQVMsS0FBS3JCLEtBQUwsQ0FBV0UsUUFBWCxDQUFvQm9CLE1BQXBCLENBQTJCQyxLQUEzQixDQUFpQyxHQUFqQyxFQUFzQyxDQUF0QyxDQUFULENBQWI7QUFBQSxnQkFDSUMsU0FBUyxLQUFLeEIsS0FBTCxDQUFXYyxVQUFYLENBQXNCVSxNQURuQztBQUFBLGdCQUVJQyxjQUFjLEtBQUt6QixLQUFMLENBQVdjLFVBQVgsQ0FBc0JVLFNBQVN2QixNQUEvQixDQUZsQjtBQUdBLGlCQUFLVyxPQUFMLEdBQWU7QUFDWFgsOEJBRFc7QUFFWHdCLHdDQUZXO0FBR1hYLDRCQUFXLEtBQUtkLEtBQUwsQ0FBV2M7QUFIWCxhQUFmO0FBS0EsaUJBQUtZLFFBQUwsQ0FBYztBQUNWekIsOEJBRFU7QUFFVkcsdUJBQU1xQixZQUFZckIsS0FGUjtBQUdWQyw0QkFBV29CLFlBQVlwQixVQUhiO0FBSVZHLHNCQUFLaUIsWUFBWWpCO0FBSlAsYUFBZDtBQU1IOzs7aUNBRU87QUFDSixtQkFDSTtBQUFDLCtCQUFEO0FBQUE7QUFDSSw4Q0FBQyxjQUFELE9BREo7QUFFSSw4Q0FBQyxpQkFBRCxFQUFhLEtBQUtHLEtBQWxCO0FBRkosYUFESjtBQU1IOzs7O0VBbkRvQkYsZ0I7O0FBc0R6QixJQUFNa0IsVUFBVSxTQUFWQSxPQUFVLENBQUNoQixLQUFELEVBQVU7QUFDdEIsV0FBTztBQUNIRyxvQkFBV0gsTUFBTUc7QUFEZCxLQUFQO0FBR0gsQ0FKRDtBQUtBLElBQU1jLGNBQWMsU0FBZEEsV0FBYyxDQUFDQyxRQUFELEVBQWE7QUFDN0IsV0FBTztBQUNIVix1QkFBYyx1QkFBQ1csSUFBRCxFQUFRO0FBQ2xCRCxxQkFBUyw2QkFBY0MsSUFBZCxDQUFUO0FBQ0g7QUFIRSxLQUFQO0FBS0gsQ0FORDs7a0JBUWUseUJBQVFILE9BQVIsRUFBZ0JDLFdBQWhCLEVBQTZCbEIsVUFBN0IsQzs7Ozs7Ozs7Ozs7O0FDMUVmOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsWSIsImZpbGUiOiJhcnRpY2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYXJ0aWNsZSB7XFxuICBtYXgtd2lkdGg6IDY1MHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMCAxNXB4IDIwcHggMTVweDtcXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xcbiAgY29sb3I6ICM1NTU7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcbi5hcnRpY2xlIGEge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4uYXJ0aWNsZSBpbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDhweCBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG4uYXJ0aWNsZS1jb250ZW50IHtcXG4gIG1hcmdpbi10b3A6IC02cHg7XFxuICBtYXJnaW4tYm90dG9tOiAtMjZweDtcXG59XFxuLmFydGljbGUtY29udGVudCBwIHtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcbi5hcnRpY2xlLWNvbnRlbnQgcCBjb2RlLFxcbi5hcnRpY2xlLWNvbnRlbnQgdWwgY29kZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW46IDAgMnB4O1xcbiAgcGFkZGluZzogMCA0cHg7XFxuICBjb2xvcjogI2RkMDA1NTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxufVxcbi5hcnRpY2xlLWNvbnRlbnQgcHJlIGNvZGUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBiYWNrZ3JvdW5kOiAjM2YzZjNmO1xcbiAgY29sb3I6ICNkY2RjZGM7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgZm9udC1mYW1pbHk6IE1lbmxvLCAnQml0c3RyZWFtIFZlcmEgU2FucyBNb25vJywgJ0RlamFWdSBTYW5zIE1vbm8nLCBNb25hY28sIENvbnNvbGFzLCBtb25vc3BhY2U7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcbi5hcnRpY2xlLWNvbnRlbnQgc3Ryb25nIHtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5hcnRpY2xlLWNvbnRlbnQgaDEsXFxuLmFydGljbGUtY29udGVudCBoMixcXG4uYXJ0aWNsZS1jb250ZW50IGgzLFxcbi5hcnRpY2xlLWNvbnRlbnQgaDQsXFxuLmFydGljbGUtY29udGVudCBoNSxcXG4uYXJ0aWNsZS1jb250ZW50IGg2IHtcXG4gIG1hcmdpbi10b3A6IDE4cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbiAgY29sb3I6ICM0NTQ1NDU7XFxufVxcbi5hcnRpY2xlLWNvbnRlbnQgaDEge1xcbiAgZm9udC1zaXplOiAyMXB4O1xcbn1cXG4uYXJ0aWNsZS1jb250ZW50IGgyIHtcXG4gIHBhZGRpbmc6IDAgMCA2cHggMDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4uYXJ0aWNsZS1jb250ZW50IGgzIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuLmFydGljbGUtY29udGVudCBoNCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5hcnRpY2xlLWNvbnRlbnQgaDUge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4uYXJ0aWNsZS1jb250ZW50IGg2IHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLmFydGljbGUtY29udGVudCB1bCB7XFxuICBtYXJnaW4tbGVmdDogMmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuLmFydGljbGUtY29udGVudCBvbCB7XFxuICBwYWRkaW5nLWxlZnQ6IDI4cHg7XFxufVxcbi5hcnRpY2xlLXRpdGxlIHtcXG4gIGNvbG9yOiAjZmYwMDFmO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxufVxcbi5hcnRpY2xlLXRpbWUge1xcbiAgY29sb3I6ICM5YjliOWI7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBtYXJnaW46IDVweCAwIDE2cHggMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmFydGljbGUtY29tbWVudCB7XFxuICBtYXJnaW46IDE1cHggMCA1MHB4IDA7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDMycHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogI2FhYTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjZGRkO1xcbn1cXG4uYXJ0aWNsZS1jb21tZW50OmhvdmVyIHtcXG4gIGNvbG9yOiAjNTU1O1xcbiAgYmFja2dyb3VuZDogI2NjYztcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBtYXJrZWQgZnJvbSAnbWFya2VkJztcbmltcG9ydCBobGpzIGZyb20gJ2hpZ2hsaWdodC5qcyc7XG5pbXBvcnQge2NvbmZpZ30gZnJvbSAnLi4vLi4vYWpheC9jb25maWcnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFydGljbGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuXG4gICAgLy8g5Luj56CB6auY5LquXG4gICAgbWFya2VkLnNldE9wdGlvbnMoe1xuICAgICAgaGlnaGxpZ2h0OiBjb2RlID0+IHtcbiAgICAgICAgcmV0dXJuIGhsanMuaGlnaGxpZ2h0QXV0byhjb2RlKS52YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgbGV0IHVybCA9IGBodHRwczovL2dpdGh1Yi5jb20vJHtjb25maWcub3duZXJ9LyR7Y29uZmlnLnJlcG99L2lzc3Vlcy8ke3RoaXMucHJvcHMubnVtYmVyfWA7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZVwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJhcnRpY2xlLXRpdGxlXCI+e3RoaXMucHJvcHMudGl0bGV9PC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhcnRpY2xlLXRpbWVcIj57dGhpcy5wcm9wcy5jcmVhdGVkX2F0LnN1YnN0cigwLCAxMCl9PC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1kZXNjIGFydGljbGUtY29udGVudFwiXG4gICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogbWFya2VkKHRoaXMucHJvcHMuYm9keSl9fT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZVwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYXJ0aWNsZS1jb21tZW50XCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+54K55Ye76K+E6K66PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufTsiLCJpbXBvcnQgUmVhY3Qse0ZyYWdtZW50LENvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge2dldElzc3Vlc0RhdGF9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3JlZHVjZXJzJ1xuaW1wb3J0IHtpc3N1ZXNEYXRhfSBmcm9tICcuLi8uLi9hamF4J1xuaW1wb3J0IEFydGljbGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hcnRpY2xlLmpzL2FydGljbGUuanMnXG5pbXBvcnQgTG9nbyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xvZ28vTG9nbydcbmltcG9ydCAnLi9hcnRpY2xlLmxlc3MnXG5cbmNsYXNzIEFydGljbGVDb24gZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdGl0bGU6JycsXG4gICAgICAgICAgICBjcmVhdGVkX2F0OicnLFxuICAgICAgICAgICAgYm9keTpcIlwiXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52YXJpYXRlID0ge1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuICAgIGluaXQoKXtcbiAgICAgICAgLy/msqHmnKzlnLDmlbDmja7lsLHor7fmsYLmnI3liqHlmahcbiAgICAgICAgdGhpcy5wcm9wcy5pc3N1ZXNEYXRhPyB0aGlzLnZpZXcoKSA6IHRoaXMuc2VydmVyRGF0YSgpO1xuICAgIH1cblxuICAgIHNlcnZlckRhdGEoKXtcbiAgICAgICAgLy/ojrflj5Zpc3N1ZXPnmoTmlbDmja5cbiAgICAgICAgaXNzdWVzRGF0YSgpLnRoZW4oKHJlc3VsdCk9PntcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0SXNzdWVzRGF0YShyZXN1bHQuZGF0YSk7XG4gICAgICAgICAgICB0aGlzLnZpZXcoKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgdmlldygpe1xuICAgICAgICBsZXQgbnVtYmVyID0gcGFyc2VJbnQodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2guc3BsaXQoJz8nKVsxXSksXG4gICAgICAgICAgICBsZW5ndGggPSB0aGlzLnByb3BzLmlzc3Vlc0RhdGEubGVuZ3RoLFxuICAgICAgICAgICAgYXJ0aWNsZURhdGEgPSB0aGlzLnByb3BzLmlzc3Vlc0RhdGFbbGVuZ3RoIC0gbnVtYmVyXTtcbiAgICAgICAgdGhpcy52YXJpYXRlID0ge1xuICAgICAgICAgICAgbnVtYmVyLFxuICAgICAgICAgICAgYXJ0aWNsZURhdGEsXG4gICAgICAgICAgICBpc3N1ZXNEYXRhOnRoaXMucHJvcHMuaXNzdWVzRGF0YVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG51bWJlcixcbiAgICAgICAgICAgIHRpdGxlOmFydGljbGVEYXRhLnRpdGxlLFxuICAgICAgICAgICAgY3JlYXRlZF9hdDphcnRpY2xlRGF0YS5jcmVhdGVkX2F0LFxuICAgICAgICAgICAgYm9keTphcnRpY2xlRGF0YS5ib2R5XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPExvZ28gLz5cbiAgICAgICAgICAgICAgICA8QXJ0aWNsZSB7Li4udGhpcy5zdGF0ZX0vPlxuICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuY29uc3QgZ2V0RGF0YSA9IChzdGF0ZSkgPT57XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaXNzdWVzRGF0YTpzdGF0ZS5pc3N1ZXNEYXRhXG4gICAgfVxufVxuY29uc3QgZ2V0RGlzcGF0Y2ggPSAoZGlzcGF0Y2gpID0+e1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldElzc3Vlc0RhdGE6KG1lc3MpPT57XG4gICAgICAgICAgICBkaXNwYXRjaChnZXRJc3N1ZXNEYXRhKG1lc3MpKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KGdldERhdGEsZ2V0RGlzcGF0Y2gpKEFydGljbGVDb24pICIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hcnRpY2xlLmxlc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FydGljbGUubGVzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FydGljbGUubGVzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=