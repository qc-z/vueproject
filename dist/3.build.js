webpackJsonp([3],{

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_home_vue__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3120e2bf_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_home_vue__ = __webpack_require__(309);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(306)
}
var normalizeComponent = __webpack_require__(26)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3120e2bf"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_home_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3120e2bf_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_home_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\home\\home.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] home.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3120e2bf", Component.options)
  } else {
    hotAPI.reload("data-v-3120e2bf", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "news.png";

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "picShare.png";

/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "goodShow.png";

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "feedback.png";

/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "search.png";

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "callme.png";

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(307);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(27)("47ba4bb9", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3120e2bf\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./home.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3120e2bf\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./home.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n/*轮播图*/\n.mint-swipe[data-v-3120e2bf]{\r\n\t\tmax-height: 8.2rem;\n}\n.mint-swipe img[data-v-3120e2bf]{\r\n\t\theight: 100%;\n}\r\n\t/*九宫格*/\n.mui-table-view .mui-grid-view .mui-grid-9[data-v-3120e2bf] {\n}\r\n\t/*九宫格清除字体图标*/\n.mui-icon-home[data-v-3120e2bf]:before,\r\n\t.mui-icon-email[data-v-3120e2bf]:before,\r\n\t.mui-icon-chatbubble[data-v-3120e2bf]:before,\r\n\t.mui-icon-location[data-v-3120e2bf]:before,\r\n\t.mui-icon-search[data-v-3120e2bf]:before,\r\n\t.mui-icon-phone[data-v-3120e2bf]:before{\r\n\t    content: '';\n}\r\n\t/*九宫格背景图片*/\n.mui-icon-home[data-v-3120e2bf]{\r\n    background-image: url(" + __webpack_require__(300) + ");\r\n    background-repeat: round;\n}\n.mui-icon-email[data-v-3120e2bf]{\r\n    background-image: url(" + __webpack_require__(301) + ");\r\n    background-repeat: round;\n}\n.mui-icon-chatbubble[data-v-3120e2bf]{\r\n    background-image: url(" + __webpack_require__(302) + ");\r\n    background-repeat: round;\n}\n.mui-icon-location[data-v-3120e2bf]{\r\n    background-image: url(" + __webpack_require__(303) + ");\r\n    background-repeat: round;\n}\n.mui-icon-search[data-v-3120e2bf]{\r\n    background-image: url(" + __webpack_require__(304) + ");\r\n    background-repeat: round;\n}\n.mui-icon-phone[data-v-3120e2bf]{\r\n    background-image: url(" + __webpack_require__(305) + ");\r\n    background-repeat: round;\n}\r\n/*九宫格图标宽高*/\n.mui-icon[data-v-3120e2bf]{\r\n    height: 50px;\r\n    width:50px;\n}\n.scollImg[data-v-3120e2bf]{\r\n\twidth: 100%;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_getData__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_getData___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__api_getData__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_selfAjax_js__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_selfAjax_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__config_selfAjax_js__);
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
			imgs: []
		};
	}, created() {
		//获取图片
		// this.$ajax.get('getAdvertisementList',
		// ).then(res=>{

		// 	if(res.data.code == 1){
		// 		this.imgs = res.data.results
		// 		if(this.imgs.length == 0){
		// 			this.imgs = [{imgUrl:"http://arpt-user.oss-cn-shenzhen.aliyuncs.com/user/yNT8z4xrac.jpg"},{imgUrl:"http://arpt-user.oss-cn-shenzhen.aliyuncs.com/user/Kc7D6PD45E.jpg"},{imgUrl:"http://arpt-user.oss-cn-shenzhen.aliyuncs.com/user/6KYKjZJR7T.jpg"}]
		// 		}
		// 		console.log(this.imgs)


		// 	}
		// }).catch(error=> {
		//     console.log(error);
		//   });

		// this.ajax('GET', this.baseUrl+'getAdvertisementList',{username:'jige',password:"123321"}).then(res=>{
		// 	console.log("res",res)
		// }).catch(err=>{
		// 	console.log("err",err)

		// })
		this.get();
	}, methods: {
		async get() {
			let ad = await Object(__WEBPACK_IMPORTED_MODULE_0__api_getData__["getAdvertisementList"])();
			console.log("fetch", ad);
			if (ad.code == 1 && ad.results.length !== 0) {
				this.imgs = ad.results;
			} else {
				this.imgs = [{ imgUrl: "http://arpt-user.oss-cn-shenzhen.aliyuncs.com/user/yNT8z4xrac.jpg" }, { imgUrl: "http://arpt-user.oss-cn-shenzhen.aliyuncs.com/user/Kc7D6PD45E.jpg" }, { imgUrl: "http://arpt-user.oss-cn-shenzhen.aliyuncs.com/user/6KYKjZJR7T.jpg" }];
			}
		}
	}
});

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('mt-swipe', {
    attrs: {
      "auto": 4000
    }
  }, _vm._l((_vm.imgs), function(img, index) {
    return _c('mt-swipe-item', {
      key: index
    }, [_c('a', {
      attrs: {
        "href": img.adUrl
      }
    }, [_c('img', {
      staticClass: "scollImg",
      attrs: {
        "src": img.imgUrl
      }
    })])])
  })), _vm._v(" "), _c('div', {
    staticClass: "mui-content"
  }, [_c('ul', {
    staticClass: "mui-table-view mui-grid-view mui-grid-9"
  }, [_c('li', {
    staticClass: "mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"
  }, [_c('router-link', {
    attrs: {
      "to": {
        name: 'news.list'
      }
    }
  }, [_c('span', {
    staticClass: "mui-icon mui-icon-home"
  }), _vm._v(" "), _c('div', {
    staticClass: "mui-media-body"
  }, [_vm._v("微整百科")])])], 1), _vm._v(" "), _c('li', {
    staticClass: "mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"
  }, [_c('router-link', {
    attrs: {
      "to": {
        name: 'news.list'
      }
    }
  }, [_c('span', {
    staticClass: "mui-icon mui-icon-email"
  }), _vm._v(" "), _c('div', {
    staticClass: "mui-media-body"
  }, [_vm._v("明星面对面")])])], 1), _vm._v(" "), _c('li', {
    staticClass: "mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"
  }, [_c('router-link', {
    attrs: {
      "to": {
        name: 'newCamera'
      }
    }
  }, [_c('span', {
    staticClass: "mui-icon mui-icon-chatbubble"
  }), _vm._v(" "), _c('div', {
    staticClass: "mui-media-body"
  }, [_vm._v("照相机")])])], 1), _vm._v(" "), _c('li', {
    staticClass: "mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"
  }, [_c('router-link', {
    attrs: {
      "to": {
        name: 'news.list'
      }
    }
  }, [_c('span', {
    staticClass: "mui-icon mui-icon-location"
  }), _vm._v(" "), _c('div', {
    staticClass: "mui-media-body"
  }, [_vm._v("留言反馈")])])], 1), _vm._v(" "), _c('li', {
    staticClass: "mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"
  }, [_c('a', {
    attrs: {
      "to": {
        name: 'news.list'
      }
    }
  }, [_c('span', {
    staticClass: "mui-icon mui-icon-search"
  }), _vm._v(" "), _c('div', {
    staticClass: "mui-media-body"
  }, [_vm._v("搜索资讯")])])]), _vm._v(" "), _c('li', {
    staticClass: "mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"
  }, [_c('a', {
    attrs: {
      "to": {
        name: 'news.list'
      }
    }
  }, [_c('span', {
    staticClass: "mui-icon mui-icon-phone"
  }), _vm._v(" "), _c('div', {
    staticClass: "mui-media-body"
  }, [_vm._v("联系我们")])])])])])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3120e2bf", esExports)
  }
}

/***/ })

});