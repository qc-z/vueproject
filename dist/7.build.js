webpackJsonp([7],{

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Camera_vue__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_843f6802_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Camera_vue__ = __webpack_require__(335);
var disposed = false
var normalizeComponent = __webpack_require__(26)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Camera_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_843f6802_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Camera_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\Camera\\Camera.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Camera.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-843f6802", Component.options)
  } else {
    hotAPI.reload("data-v-843f6802", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 334:
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
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
	data: function () {
		return {
			imgUrls: [],
			urlArr: [],
			isPhoto: true,
			btnTitle: '',
			isModify: false,
			previewImg: '',
			isPreview: false
		};
	},
	watch: {
		imgUrls: 'toggleAddPic'
	},
	methods: {
		toggleAddPic: function () {
			let vm = this;
			if (vm.imgUrls.length >= 1) {
				vm.isPhoto = false;
			} else {
				vm.isPhoto = true;
			}
		},
		addPic: function (e) {
			let vm = this;
			$('input[type=file]').trigger('click');
			return false;
		},
		onFileChange: function (e) {
			var files = e.target.files || e.dataTransfer.files;
			if (!files.length) return;
			this.createImage(files, e);
		},
		createImage: function (file, e) {
			let vm = this;
			lrz(file[0], { width: 480 }).then(function (rst) {
				vm.imgUrls.push(rst.base64);
				return rst;
			}).always(function () {
				// 清空文件上传控件的值
				e.target.value = null;
			});
		},
		delImage: function (index) {
			let vm = this;
			let btnArray = ['取消', '确定'];
			mui.confirm('确定删除该图片?', '提示', btnArray, function (e) {
				if (e.index == 1) {
					vm.imgUrls.splice(index, 1);
				}
			});
		},
		previewImage: function (url) {
			let vm = this;
			vm.isPreview = true;
			vm.previewImg = url;
		},
		closePreview: function () {
			let vm = this;
			vm.isPreview = false;
			vm.previewImg = "";
		},
		saveImage: function () {
			let vm = this;
			let urlArr = [],
			    imgUrls = this.imgUrls;

			for (let i = 0; i < imgUrls.length; i++) {
				if (imgUrls[i].indexOf('file') == -1) {
					urlArr.push(imgUrls[i].split(',')[1]);
				} else {
					urlArr.push(imgUrls[i]);
				}
			}

			//数据传输操作
		}
	}
});

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h5', {
    staticClass: "content-header"
  }, [_vm._v("图片列表")]), _vm._v(" "), _c('div', {
    staticClass: "image-list"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isPhoto),
      expression: "isPhoto"
    }],
    staticClass: "list-default-img",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.addPic($event)
      }
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(186)
    }
  }), _vm._v(" "), _c('span', [_vm._v("请选择或者拍照上传照片")]), _vm._v(" "), _c('input', {
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "type": "file",
      "accept": "image/jpeg,image/jpg,image/png",
      "capture": "camera"
    },
    on: {
      "change": _vm.onFileChange
    }
  })]), _vm._v(" "), _c('ul', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.isPhoto),
      expression: "!isPhoto"
    }],
    staticClass: "list-ul"
  }, [_vm._l((_vm.imgUrls), function(iu, index) {
    return _c('li', {
      staticClass: "list-li"
    }, [_c('a', {
      staticClass: "list-link",
      on: {
        "click": function($event) {
          _vm.previewImage(iu)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": iu
      }
    })]), _vm._v(" "), _c('span', {
      staticClass: "list-img-close",
      on: {
        "click": function($event) {
          _vm.delImage(index)
        }
      }
    })])
  }), _vm._v(" "), _c('li', {
    staticClass: "list-li-add"
  }, [_c('span', {
    staticClass: "add-img",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.addPic($event)
      }
    }
  })])], 2)]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isPreview),
      expression: "isPreview"
    }],
    staticClass: "add-preview",
    on: {
      "click": _vm.closePreview
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.previewImg
    }
  })])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-843f6802", esExports)
  }
}

/***/ })

});