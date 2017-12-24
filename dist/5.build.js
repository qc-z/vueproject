webpackJsonp([5],{

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_newsDetail_vue__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_412445f0_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_newsDetail_vue__ = __webpack_require__(333);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(330)
}
var normalizeComponent = __webpack_require__(26)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-412445f0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_newsDetail_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_412445f0_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_newsDetail_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\news\\newsDetail.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] newsDetail.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-412445f0", Component.options)
  } else {
    hotAPI.reload("data-v-412445f0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(331);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(27)("32c809f1", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-412445f0\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./newsDetail.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-412445f0\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./newsDetail.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, "\n.news-title p[data-v-412445f0] {\r\n    color: #0a87f8;\r\n    font-size: 20px;\r\n    font-weight: bold;\n}\n.news-title span[data-v-412445f0] {\r\n    margin-right: 30px;\n}\n.news-title[data-v-412445f0] {\r\n    margin-top: 5px;\r\n    border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n}\r\n\r\n\r\n/*主体文章的左右距离*/\n.news-content[data-v-412445f0] {\r\n    padding: 10 5;\n}\n.method[data-v-412445f0] {\r\n    float:right;\r\n    margin-right:2rem\n}\n.name[data-v-412445f0] {\r\n    float:left;\r\n    margin-left:2rem\n}\n.img[data-v-412445f0] {\r\n    height: 4.2rem;\r\n    width: 4.2rem;\r\n    max-width:4.2rem;\n}\n.mui-ellipsis[data-v-412445f0]{\r\n    margin-top:.6rem\n}\r\n", ""]);

// exports


/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    data() {
        return {
            newsDetail: {}, //就是为了象征性的表示其数据类型
            url: ""
        };
    }, created() {
        //1:获取路由参数
        let id = this.$route.query.id;
        //2:拼接路由参数成为后台请求的URL
        this.$ajax.get('http://test.legle.cc:82/getOperation?id=' + id).then(res => {

            //3:响应回来渲染页面
            this.newsDetail = res.data.operations;
            if (res.data.operations && res.data.operations.collationschematic && res.data.operations.collationschematic[0]) {
                this.url = res.data.operations.collationschematic[0].url;
            } else {
                this.url = "http://arpt-user.oss-cn-shenzhen.aliyuncs.com/user/ZDa3EmJBYJ.png";
            }
            console.log(this.newsDetail);
        }).catch(err => {
            console.log(err);
        });
    }
});

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tmpl"
  }, [_c('nav-bar', {
    attrs: {
      "title": "项目详情"
    }
  }), _vm._v(" "), _c('ul', {
    staticClass: "mui-table-view"
  }, [_c('li', {
    staticClass: "mui-table-view-cell mui-media"
  }, [_c('a', {
    attrs: {
      "href": "javascript:;"
    }
  }, [_c('img', {
    staticClass: "mui-media-object mui-pull-left img",
    attrs: {
      "src": _vm.url
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "mui-media-body method"
  }, [_vm._v("\n                        方法\n                        "), _c('p', {
    staticClass: "mui-ellipsis"
  }, [_vm._v(_vm._s(_vm.newsDetail.method))])]), _vm._v(" "), _c('div', {
    staticClass: "mui-media-body name"
  }, [_vm._v("\n                        项目名称\n                        "), _c('p', {
    staticClass: "mui-ellipsis"
  }, [_vm._v(_vm._s(_vm.newsDetail.name))])])])])])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-412445f0", esExports)
  }
}

/***/ })

});