webpackJsonp([6],{

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_newCamera_vue__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0217691b_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_newCamera_vue__ = __webpack_require__(337);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_newCamera_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0217691b_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_newCamera_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\Camera\\newCamera.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] newCamera.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0217691b", Component.options)
  } else {
    hotAPI.reload("data-v-0217691b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
	data() {
		return {};
	},
	mounted() {
		console.log(this.$el);

		navigator.mediaDevices.enumerateDevices().then(devices => {
			devices = devices.filter(v => v.kind == "videoinput");
			console.log("Found " + devices.length + " video devices");

			let lastDevice = devices[devices.length - 1];
			devices = devices.filter(v => v.label.indexOf("back") > 0);

			let device = null;
			if (devices.length > 0) {
				console.log("Taking a 'back' camera");
				device = devices[devices.length - 1];
			} else {
				console.log("Taking last camera");
				device = lastDevice;
			}

			if (!device) {
				console.log("No devices!");
				return;
			}

			let constraints = {
				audio: false,
				video: {
					deviceId: { ideal: device.deviceId },
					width: { ideal: window.innerWidth },
					height: { ideal: window.innerHeight }
				}
			};

			navigator.mediaDevices.getUserMedia(constraints).then(stream => {
				if (!this.$el.srcObject) this.$el.src = URL.createObjectURL(stream);else this.$el.srcObject = stream;

				//info.innerHTML+= "<pre>DONE</pre>";
				console.log("DONE");
			}).catch(err => {
				console.log(err.name + ": " + err.message);
			});
		}).catch(err => {
			console.log(err.name + ": " + err.message);
		});
	}
});

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('video', {
    attrs: {
      "autoplay": ""
    }
  })
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0217691b", esExports)
  }
}

/***/ })

});