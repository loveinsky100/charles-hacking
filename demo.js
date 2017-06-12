// { "framework": "Vue" }
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(1)
	)

	/* script */
	__vue_exports__ = __webpack_require__(2)

	/* template */
	var __vue_template__ = __webpack_require__(24)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/Leo/Desktop/归档/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-5c711e58"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__
	module.exports.el = 'true'
	new Vue(module.exports)


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = {
	  "navigationBar": {
	    "position": "absolute",
	    "width": 750,
	    "height": 90
	  },
	  "navigationBackGround": {
	    "position": "absolute",
	    "width": 750,
	    "height": 90,
	    "backgroundColor": "#FFFFFF"
	  },
	  "navigationBackItem": {
	    "position": "absolute",
	    "height": 60,
	    "width": 60,
	    "backgroundColor": "#0000FF"
	  },
	  "wrapper": {
	    "width": 750,
	    "backgroundColor": "#4b2093"
	  },
	  "productinfolist": {
	    "position": "absolute",
	    "width": 750,
	    "left": 0,
	    "right": 0,
	    "bottom": 0
	  },
	  "coupontitle": {
	    "position": "absolute",
	    "left": 0,
	    "bottom": 227,
	    "width": 182,
	    "height": 44
	  },
	  "pcoupon": {
	    "width": 750,
	    "height": 250,
	    "backgroundColor": "#efeff4",
	    "alignItems": "center"
	  },
	  "pcoupon1": {
	    "height": 180,
	    "marginTop": 30,
	    "flexDirection": "row"
	  },
	  "pcouponintroduce": {
	    "width": 750,
	    "height": 40,
	    "backgroundColor": "#efeff4",
	    "alignItems": "center",
	    "marginBottom": 18
	  },
	  "couponintroduce": {
	    "fontSize": 20,
	    "fontFamily": "'PingFang SC'",
	    "color": "#7c7c7c"
	  },
	  "bhelpimage": {
	    "position": "absolute",
	    "width": 220,
	    "height": 110,
	    "left": 340,
	    "top": 0
	  },
	  "ptab": {
	    "width": 750,
	    "height": 80,
	    "flexDirection": "row"
	  },
	  "ptabpanel": {
	    "width": 296,
	    "height": 80,
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "ptabtext": {
	    "fontSize": 30,
	    "fontFamily": "'PingFang SC'",
	    "color": "#fffeff"
	  },
	  "ptabimage": {
	    "position": "absolute",
	    "left": 0,
	    "width": 296,
	    "height": 80
	  },
	  "ptab2icon": {
	    "marginLeft": 10,
	    "width": 28,
	    "height": 28
	  },
	  "introduce": {
	    "width": 750,
	    "height": 129,
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "introduceinfo": {
	    "width": 542,
	    "height": 54,
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "productpanel": {
	    "width": 750
	  },
	  "bintroduce": {
	    "width": 750,
	    "height": 131,
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "background": "center"
	  },
	  "introducebgimage": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "width": 542,
	    "height": 54
	  },
	  "introducetextpanel": {
	    "flexDirection": "row",
	    "alignItems": "center"
	  },
	  "introducetext1": {
	    "fontSize": 26,
	    "fontFamily": "'PingFang SC'",
	    "color": "#ffffff"
	  },
	  "introducetext2": {
	    "fontSize": 26,
	    "fontFamily": "'PingFang SC'",
	    "color": "#FF0000"
	  },
	  "seperatelineleft": {
	    "marginTop": 50,
	    "height": 1,
	    "width": 208,
	    "marginRight": 44,
	    "backgroundColor": "#ffffff"
	  },
	  "seperatelineright": {
	    "marginTop": 50,
	    "height": 1,
	    "width": 208,
	    "marginLeft": 44,
	    "backgroundColor": "#ffffff"
	  },
	  "b1header": {
	    "fontSize": 30,
	    "fontFamily": "'PingFang SC'",
	    "color": "#ffffff",
	    "marginTop": 30
	  },
	  "bproductpanel": {
	    "justifyContent": "center"
	  },
	  "bproductcell": {
	    "marginLeft": 0,
	    "marginRight": 0,
	    "height": 488,
	    "flexDirection": "row"
	  },
	  "bproductcellitemleft": {
	    "marginLeft": 9
	  }
	}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _zscoupon = __webpack_require__(3);

	var _zscoupon2 = _interopRequireDefault(_zscoupon);

	var _zslproduct = __webpack_require__(8);

	var _zslproduct2 = _interopRequireDefault(_zslproduct);

	var _zsbproduct = __webpack_require__(12);

	var _zsbproduct2 = _interopRequireDefault(_zsbproduct);

	var _zsheader = __webpack_require__(16);

	var _zsheader2 = _interopRequireDefault(_zsheader);

	var _zstailer = __webpack_require__(20);

	var _zstailer2 = _interopRequireDefault(_zstailer);

	var _judapi = __webpack_require__(6);

	var _judapi2 = _interopRequireDefault(_judapi);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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


	var modal = jud.requireModule('modal');
	var wdom = jud.requireModule('dom');
	var communicate = jud.requireModule('communicate');
	var timer = jud.requireModule('timer');

	var tabsimage = _judapi2.default.apiurl.resourceurl + 'zs_d_button_04b.png';
	var tabnimage = _judapi2.default.apiurl.resourceurl + 'zs_d_button_04c.png';

	exports.default = {

	    components: {
	        BProductItem: _zsbproduct2.default,
	        ProductItem: _zslproduct2.default,
	        CouponItem: _zscoupon2.default,
	        zsHeader: _zsheader2.default,
	        zsTailer: _zstailer2.default
	    },

	    data: {
	        listTop: 0,
	        navigationHeight: 0,
	        navigationOpacity: 0,
	        firstcoupon: 0,
	        heightofintroduce: 60,
	        showhelpimage: 0,
	        screenHeight: 0,
	        brandinfo: {
	            icon: 'https://img11.360buyimg.com/popshop/jfs/t2737/220/3291057896/23392/c7e869db/5786128bN6232ac1b.jpg',
	            bgimageurl: 'https://img1.360buyimg.com/da/jfs/t5794/225/2364002661/71831/8e6666b3/592fc70aN2deaabcf.jpg',
	            introduce: '这是一句诚意满满的介绍'
	        },
	        coupontitle: _judapi2.default.apiurl.resourceurl + 'zs_d_button_03.png',
	        ptab1image: tabsimage,
	        ptab2image: tabnimage,
	        ptab2icon: _judapi2.default.apiurl.resourceurl + 'zs_d_icon_01.png',
	        introductbg: _judapi2.default.apiurl.resourceurl + 'zs_d_introduce_bg.png',
	        b1helpimageurl: _judapi2.default.apiurl.resourceurl + 'zs_d_prompt_01.png',
	        introducenumber: '10%',
	        couponlist: [{
	            "batchKey": "1D234sSd234", // 优惠券批次号
	            "amount": "", // 额度
	            "threshold": "", // 使用门槛
	            "cateRule": "", // 品类规则
	            "received": 0 }],
	        lproductlist: [{
	            "skuId": "", // SKU ID
	            "pCode": "", // 促销码
	            "canSell": "Y", // 是否可卖，Y：有库存可卖，N或其他：不可卖
	            "name": "", // 商品名称
	            "pic": "", // 商品图片
	            "pPrice": "", // 无线价
	            "opPrice": "" }],
	        bproductlist: [{
	            "skuId": "", // SKU ID
	            "pCode": "", // 促销码
	            "canSell": "Y", // 是否可卖，Y：有库存可卖，N或其他：不可卖
	            "name": "", // 商品名称
	            "pic": "", // 商品图片
	            "pPrice": "", // 无线价
	            "opPrice": "" }]
	    },

	    methods: {
	        paneloffsetappear: function paneloffsetappear(event) {
	            this.heightofintroduce = 60;

	            modal.toast({
	                message: 'head cell appear',
	                duration: 0.3
	            });
	        },

	        paneloffsetdisappear: function paneloffsetdisappear(event) {
	            this.heightofintroduce = 96;

	            modal.toast({
	                message: 'head cell disappear',
	                duration: 0.3
	            });
	        },
	        didscroll: function didscroll(event) {
	            modal.toast({ message: event, duration: 1 });
	        },
	        clicktab1: function clicktab1() {

	            var el = this.$refs.introducecell;
	            wdom.scrollToElement(el, { offset: 0 });

	            modal.toast({
	                message: 'clicktab1',
	                duration: 0.3
	            });

	            if (this.ptab1image !== tabsimage) {
	                this.ptab1image = tabsimage;
	                this.ptab2image = tabnimage;
	            }
	        },
	        clicktab2: function clicktab2() {

	            var el = this.$refs.bintroducecell;
	            wdom.scrollToElement(el, { offset: 0 });

	            modal.toast({
	                message: 'clicktab2',
	                duration: 0.3
	            });

	            if (this.ptab2image !== tabsimage) {
	                this.ptab2image = tabsimage;
	                this.ptab1image = tabnimage;
	            }
	        },
	        clickl1product: function clickl1product(item) {

	            modal.toast({
	                message: "click L1 product ：" + item.pPrice,
	                duration: 0.3
	            });

	            communicate.send("ZS_BRAND_CALLBACK", {
	                "domain": "product",
	                "info": item
	            }, function (result) {});
	        },
	        clickb1product: function clickb1product(index) {

	            var bitem = this.bproductlist[index];

	            modal.toast({
	                message: "click B1 product ：" + bitem.pPrice,
	                duration: 0.3
	            });

	            communicate.send("ZS_BRAND_CALLBACK", {
	                "domain": "product",
	                "info": bitem
	            }, function (result) {});
	        },
	        refeshcoupon: function refeshcoupon(coupon, index) {

	            if (this.firstcoupon === 0) {

	                this.firstcoupon = 1;

	                this.showhelpimage = 1;

	                var self = this;
	                setTimeout(function () {
	                    self.showhelpimage = 0;
	                }, 3000);
	            }

	            coupon.received = 1;

	            this.couponlist.splice(index, 1, coupon);
	        },
	        clickcoupon: function clickcoupon(coupon, index) {

	            //                this.refeshcoupon(coupon,index);

	            var self = this;

	            communicate.send("ZS_BRAND_CALLBACK", {
	                "domain": "coupon",
	                "info": coupon
	            }, function (result) {

	                if (result.code == 1 && coupon.received == 0) {

	                    self.refeshcoupon(coupon, index);
	                }
	            });
	        },
	        headcelldisappear: function headcelldisappear(event) {},
	        headcellappear: function headcellappear(event) {},
	        clickBack: function clickBack() {
	            communicate.send("ZS_BRAND_CALLBACK", {
	                "domain": "back",
	                "info": ""
	            });
	        },
	        onScroll: function onScroll(event) {
	            var alpha = -event.contentOffset.y / 415;
	            if (alpha < 0) {
	                alpha = 0;
	            }

	            if (alpha > 1) {
	                alpha = 1;
	            }

	            this.navigationOpacity = alpha * alpha;

	            var el = this.$refs.introducecell;

	            var offsetHeight = -event.contentOffset.y - 511 + 90; // 得到具体的位置，511是悬浮的header距离顶部的位置，暂时不知道怎么动态获取。。。这个是具体的偏移量
	            if (offsetHeight >= 0) {
	                this.listTop = 90;
	                this.listBottom = -90;
	            } else {
	                this.listTop = 0;
	                this.listBottom = 0;
	            }
	        }
	    },
	    created: function created() {

	        //测试数据，实际 result 回调获取
	        var result = _judapi2.default.apiurl.testdata;

	        this.couponlist = result.floorList[0].coupons.slice(0, 4);
	        this.lproductlist = result.floorList[1].tabList[0].wareList;
	        this.bproductlist = result.floorList[1].tabList[1].wareList;

	        communicate.send("ZS_BRAND_CALLBACK", {
	            "domain": "init",
	            "info": ""
	        }, function (result) {});
	    }
	};
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(4)
	)

	/* script */
	__vue_exports__ = __webpack_require__(5)

	/* template */
	var __vue_template__ = __webpack_require__(7)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/Leo/Desktop/归档/zscoupon.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-30ac7909"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = {
	  "coupon": {
	    "width": 178,
	    "height": 178
	  },
	  "couponbg": {
	    "position": "absolute",
	    "width": 178,
	    "height": 178
	  },
	  "couponinfo": {
	    "alignItems": "center"
	  },
	  "couponvaluepanel": {
	    "height": 58,
	    "marginTop": 10,
	    "flexDirection": "row"
	  },
	  "pricevalue": {
	    "height": 60,
	    "fontSize": 46,
	    "fontFamily": "'PingFang SC'"
	  },
	  "priceicon": {
	    "width": 26,
	    "height": 26,
	    "float": "right"
	  },
	  "priceicon-p": {
	    "width": 26,
	    "height": 26,
	    "float": "right"
	  },
	  "pricecondition": {
	    "fontSize": 20,
	    "fontFamily": "'PingFang SC'",
	    "color": "#2d2d2e",
	    "width": 178,
	    "textAlign": "center"
	  }
	}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _judapi = __webpack_require__(6);

	var _judapi2 = _interopRequireDefault(_judapi);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var modal = jud.requireModule('modal'); //
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


	exports.default = {

	    data: function data() {
	        return {
	            baseurl: _judapi2.default.apiurl.resourceurl,
	            couponbgurl: this.received,
	            priceiconurl: 'zs_d_price_icon_02.png'
	        };
	    },
	    name: 'coupon',
	    props: {
	        item: {
	            type: Object,
	            default: {
	                "batchKey": "1D234sSd234", // 优惠券批次号
	                "amount": "", // 额度
	                "threshold": "", // 使用门槛
	                "cateRule": "", // 品类规则
	                "received": 0 }
	        }
	    },
	    computed: {
	        recouponbgurl: function recouponbgurl() {

	            return this.baseurl + (this.item.received === 0 ? 'zs_d_voucher_01a.png' : 'zs_d_voucher_01c.png');
	        }
	    }
	};
	module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Created by viktyz on 17/6/5.
	 */

	// http://cf.jd.com/pages/viewpage.action?pageId=83331857
	// - 线上：http://api.m.jd.com/client.action?functionId=qryBrandActDetail&body={"activityId":"","brandId": "4300222"}&client=wh5&clientVersion=1.0.0
	// - 预发：http://beta-api.m.jd.com/client.action?functionId=qryBrandActDetail&body={"activityId":"","brandId": "4300222"}&client=wh5&clientVersion=1.0.0

	exports.apiurl = {
	    // resourceurl:'http://127.0.0.1/wpd/'
	    // resourceurl: 'http://192.168.191.6/wpd/'
	    // resourceurl:api.apiurl.resourceurl + ''
	    // resourceurl: 'http://192.168.191.1/wpd/'
	    resourceurl: 'http://10.8.141.124/wpd/',
	    // resourceurl: 'native://',

	    testdata: {
	        "activityId": "00000756", // 活动ID
	        "encodedActivityId": "2hqsQcyM5bEUVSStkN3BwrBHqVLd", // 加密活动ID
	        "pageId": "198009", // 页面ID
	        "biImpr": "", // PV埋点
	        "code": "0", // 代码code，0：正常，1：失败
	        "logo": "https://m.360buyimg.com/babel/jfs/t5902/1/1192851772/9294/ce0991b/592fe710Nfd18c278.png", // 品牌logo
	        "titleAtmoPic": "https://m.360buyimg.com/babel/jfs/t5974/354/1177185128/12920/98799996/592fe715N6c6ec4f5.png", // 活动标题氛围图（内外页通用）
	        "name": "", // 活动标题名称
	        "middlePic": "https://m.360buyimg.com/babel/jfs/t5902/1/1192851772/9294/ce0991b/592fe710Nfd18c278.png", // 中间展示大图
	        "floorList": [// 页面楼层
	        {
	            "ttemplate": "couponAdvert", // 模板类型
	            "styleId": 0, // 默认样式
	            "moduleId": "2384", // 楼层标识
	            "ofn": 1, // 原始楼层号
	            "floorNum": 1, // 展示楼层号
	            "config": {
	                "showCountdown": 1 // 是否展示倒计时，0：不展示，1：展示
	            },
	            "coupons": [{
	                "batchKey": "1D234sSd234", // 优惠券批次号
	                "amount": "10", // 额度
	                "threshold": "100", // 使用门槛
	                "cateRule": "", // 品类规则
	                "received": 0 }, {
	                "batchKey": "1D234sSd234", // 优惠券批次号
	                "amount": "20", // 额度
	                "threshold": "200", // 使用门槛
	                "cateRule": "", // 品类规则
	                "received": 1 }, {
	                "batchKey": "1D234sSd234", // 优惠券批次号
	                "amount": "30", // 额度
	                "threshold": "300", // 使用门槛
	                "cateRule": "", // 品类规则
	                "received": 0 }, {
	                "batchKey": "1D234sSd234", // 优惠券批次号
	                "amount": "40", // 额度
	                "threshold": "400", // 使用门槛
	                "cateRule": "", // 品类规则
	                "received": 0 }, {
	                "batchKey": "1D234sSd234", // 优惠券批次号
	                "amount": "50", // 额度
	                "threshold": "500", // 使用门槛
	                "cateRule": "", // 品类规则
	                "received": 0 }]
	        }, {
	            "template": "brandProduct", // 模板类型
	            "styleId": 0, // 展示样式，0：默认
	            "moduleId": "2384", // 楼层标识
	            "ofn": 2, // 原始楼层号
	            "floorNum": 2, // 展示楼层号
	            "config": {},
	            "tabList": [// Tab列表
	            {
	                "groupId": "", // 商品组ID
	                "name": "", // 名称
	                "wareList": [// 商品
	                {
	                    "skuId": "3882453", // SKU ID
	                    "pCode": "11111", // 促销码
	                    "canSell": "Y", // 是否可卖，Y：有库存可卖，N或其他：不可卖
	                    "name": "荣耀 V9 全网通 尊享版 6GB+128GB 铂光金 移动联通电信4G手机 双卡双待", // 商品名称
	                    "pic": "http://img13.360buyimg.com/n1/s450x450_jfs/t4135/344/714185011/287980/f865d2b3/58b8bddeN30cffe5e.jpg", // 商品图片
	                    "pPrice": "3499.00", // 无线价
	                    "opPrice": "4000.00" }, {
	                    "skuId": "12261336038", // SKU ID
	                    "pCode": "11111", // 促销码
	                    "canSell": "Y", // 是否可卖，Y：有库存可卖，N或其他：不可卖
	                    "name": "Apple MacBook Air 13.3英寸笔记本电脑 银色(Core i5 处理器/8GB内存/256GB SSD闪存 MMGG2CH/A)", // 商品名称
	                    "pic": "http://img12.360buyimg.com/n4/s260x260_jfs/t3049/267/321414843/238650/70df281e/57b12a70N8c7a9741.jpg", // 商品图片
	                    "pPrice": "8168.00", // 无线价
	                    "opPrice": "8488.00" }, {
	                    "skuId": "3882453", // SKU ID
	                    "pCode": "11111", // 促销码
	                    "canSell": "Y", // 是否可卖，Y：有库存可卖，N或其他：不可卖
	                    "name": "荣耀 V9 全网通 尊享版 6GB+128GB 铂光金 移动联通电信4G手机 双卡双待", // 商品名称
	                    "pic": "http://img13.360buyimg.com/n1/s450x450_jfs/t4135/344/714185011/287980/f865d2b3/58b8bddeN30cffe5e.jpg", // 商品图片
	                    "pPrice": "3499.00", // 无线价
	                    "opPrice": "4000.00" }, {
	                    "skuId": "12261336038", // SKU ID
	                    "pCode": "11111", // 促销码
	                    "canSell": "Y", // 是否可卖，Y：有库存可卖，N或其他：不可卖
	                    "name": "Apple MacBook Air 13.3英寸笔记本电脑 银色(Core i5 处理器/8GB内存/256GB SSD闪存 MMGG2CH/A)", // 商品名称
	                    "pic": "http://img12.360buyimg.com/n4/s260x260_jfs/t3049/267/321414843/238650/70df281e/57b12a70N8c7a9741.jpg", // 商品图片
	                    "pPrice": "8168.00", // 无线价
	                    "opPrice": "8488.00" }, {
	                    "skuId": "3882453", // SKU ID
	                    "pCode": "11111", // 促销码
	                    "canSell": "Y", // 是否可卖，Y：有库存可卖，N或其他：不可卖
	                    "name": "荣耀 V9 全网通 尊享版 6GB+128GB 铂光金 移动联通电信4G手机 双卡双待", // 商品名称
	                    "pic": "http://img13.360buyimg.com/n1/s450x450_jfs/t4135/344/714185011/287980/f865d2b3/58b8bddeN30cffe5e.jpg", // 商品图片
	                    "pPrice": "3499.00", // 无线价
	                    "opPrice": "4000.00" }, {
	                    "skuId": "12261336038", // SKU ID
	                    "pCode": "11111", // 促销码
	                    "canSell": "Y", // 是否可卖，Y：有库存可卖，N或其他：不可卖
	                    "name": "Apple MacBook Air 13.3英寸笔记本电脑 银色(Core i5 处理器/8GB内存/256GB SSD闪存 MMGG2CH/A)", // 商品名称
	                    "pic": "http://img12.360buyimg.com/n4/s260x260_jfs/t3049/267/321414843/238650/70df281e/57b12a70N8c7a9741.jpg", // 商品图片
	                    "pPrice": "8168.00", // 无线价
	                    "opPrice": "8488.00" }, {
	                    "skuId": "3882453", // SKU ID
	                    "pCode": "11111", // 促销码
	                    "canSell": "Y", // 是否可卖，Y：有库存可卖，N或其他：不可卖
	                    "name": "荣耀 V9 全网通 尊享版 6GB+128GB 铂光金 移动联通电信4G手机 双卡双待", // 商品名称
	                    "pic": "http://img13.360buyimg.com/n1/s450x450_jfs/t4135/344/714185011/287980/f865d2b3/58b8bddeN30cffe5e.jpg", // 商品图片
	                    "pPrice": "3499.00", // 无线价
	                    "opPrice": "4000.00" }, {
	                    "skuId": "12261336038", // SKU ID
	                    "pCode": "11111", // 促销码
	                    "canSell": "Y", // 是否可卖，Y：有库存可卖，N或其他：不可卖
	                    "name": "Apple MacBook Air 13.3英寸笔记本电脑 银色(Core i5 处理器/8GB内存/256GB SSD闪存 MMGG2CH/A)", // 商品名称
	                    "pic": "http://img12.360buyimg.com/n4/s260x260_jfs/t3049/267/321414843/238650/70df281e/57b12a70N8c7a9741.jpg", // 商品图片
	                    "pPrice": "8168.00", // 无线价
	                    "opPrice": "8488.00" }]
	            }, {
	                "groupId": "", // 商品组ID
	                "name": "", // 名称
	                "wareList": [// 商品
	                {
	                    "skuId": "3882453", // SKU ID
	                    "pCode": "11111", // 促销码
	                    "canSell": "Y", // 是否可卖，Y：有库存可卖，N或其他：不可卖
	                    "name": "荣耀 V9 全网通 尊享版 6GB+128GB 铂光金 移动联通电信4G手机 双卡双待", // 商品名称
	                    "pic": "http://img13.360buyimg.com/n1/s450x450_jfs/t4135/344/714185011/287980/f865d2b3/58b8bddeN30cffe5e.jpg", // 商品图片
	                    "pPrice": "3499.00", // 无线价
	                    "opPrice": "4000.00" }, {
	                    "skuId": "12261336038", // SKU ID
	                    "pCode": "11111", // 促销码
	                    "canSell": "Y", // 是否可卖，Y：有库存可卖，N或其他：不可卖
	                    "name": "Apple MacBook Air 13.3英寸笔记本电脑 银色(Core i5 处理器/8GB内存/256GB SSD闪存 MMGG2CH/A)", // 商品名称
	                    "pic": "http://img12.360buyimg.com/n4/s260x260_jfs/t3049/267/321414843/238650/70df281e/57b12a70N8c7a9741.jpg", // 商品图片
	                    "pPrice": "8168.00", // 无线价
	                    "opPrice": "8488.00" }, {
	                    "skuId": "3882453", // SKU ID
	                    "pCode": "11111", // 促销码
	                    "canSell": "Y", // 是否可卖，Y：有库存可卖，N或其他：不可卖
	                    "name": "荣耀 V9 全网通 尊享版 6GB+128GB 铂光金 移动联通电信4G手机 双卡双待", // 商品名称
	                    "pic": "http://img13.360buyimg.com/n1/s450x450_jfs/t4135/344/714185011/287980/f865d2b3/58b8bddeN30cffe5e.jpg", // 商品图片
	                    "pPrice": "3499.00", // 无线价
	                    "opPrice": "4000.00" }, {
	                    "skuId": "12261336038", // SKU ID
	                    "pCode": "11111", // 促销码
	                    "canSell": "Y", // 是否可卖，Y：有库存可卖，N或其他：不可卖
	                    "name": "Apple MacBook Air 13.3英寸笔记本电脑 银色(Core i5 处理器/8GB内存/256GB SSD闪存 MMGG2CH/A)", // 商品名称
	                    "pic": "http://img12.360buyimg.com/n4/s260x260_jfs/t3049/267/321414843/238650/70df281e/57b12a70N8c7a9741.jpg", // 商品图片
	                    "pPrice": "8168.00", // 无线价
	                    "opPrice": "8488.00" }, {
	                    "skuId": "3882453", // SKU ID
	                    "pCode": "11111", // 促销码
	                    "canSell": "Y", // 是否可卖，Y：有库存可卖，N或其他：不可卖
	                    "name": "荣耀 V9 全网通 尊享版 6GB+128GB 铂光金 移动联通电信4G手机 双卡双待", // 商品名称
	                    "pic": "http://img13.360buyimg.com/n1/s450x450_jfs/t4135/344/714185011/287980/f865d2b3/58b8bddeN30cffe5e.jpg", // 商品图片
	                    "pPrice": "3499.00", // 无线价
	                    "opPrice": "4000.00" }, {
	                    "skuId": "12261336038", // SKU ID
	                    "pCode": "11111", // 促销码
	                    "canSell": "Y", // 是否可卖，Y：有库存可卖，N或其他：不可卖
	                    "name": "Apple MacBook Air 13.3英寸笔记本电脑 银色(Core i5 处理器/8GB内存/256GB SSD闪存 MMGG2CH/A)", // 商品名称
	                    "pic": "http://img12.360buyimg.com/n4/s260x260_jfs/t3049/267/321414843/238650/70df281e/57b12a70N8c7a9741.jpg", // 商品图片
	                    "pPrice": "8168.00", // 无线价
	                    "opPrice": "8488.00" }, {
	                    "skuId": "3882453", // SKU ID
	                    "pCode": "11111", // 促销码
	                    "canSell": "Y", // 是否可卖，Y：有库存可卖，N或其他：不可卖
	                    "name": "荣耀 V9 全网通 尊享版 6GB+128GB 铂光金 移动联通电信4G手机 双卡双待", // 商品名称
	                    "pic": "http://img13.360buyimg.com/n1/s450x450_jfs/t4135/344/714185011/287980/f865d2b3/58b8bddeN30cffe5e.jpg", // 商品图片
	                    "pPrice": "3499.00", // 无线价
	                    "opPrice": "4000.00" }, {
	                    "skuId": "12261336038", // SKU ID
	                    "pCode": "11111", // 促销码
	                    "canSell": "Y", // 是否可卖，Y：有库存可卖，N或其他：不可卖
	                    "name": "Apple MacBook Air 13.3英寸笔记本电脑 银色(Core i5 处理器/8GB内存/256GB SSD闪存 MMGG2CH/A)", // 商品名称
	                    "pic": "http://img12.360buyimg.com/n4/s260x260_jfs/t3049/267/321414843/238650/70df281e/57b12a70N8c7a9741.jpg", // 商品图片
	                    "pPrice": "8168.00", // 无线价
	                    "opPrice": "8488.00" }, {
	                    "skuId": "12261336038", // SKU ID
	                    "pCode": "11111", // 促销码
	                    "canSell": "Y", // 是否可卖，Y：有库存可卖，N或其他：不可卖
	                    "name": "Apple MacBook Air 13.3英寸笔记本电脑 银色(Core i5 处理器/8GB内存/256GB SSD闪存 MMGG2CH/A)", // 商品名称
	                    "pic": "http://img12.360buyimg.com/n4/s260x260_jfs/t3049/267/321414843/238650/70df281e/57b12a70N8c7a9741.jpg", // 商品图片
	                    "pPrice": "8168.00", // 无线价
	                    "opPrice": "8488.00" }]
	            }]
	        }]
	    }
	};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["coupon"]
	  }, [_c('image', {
	    staticClass: ["couponbg"],
	    attrs: {
	      "src": _vm.recouponbgurl
	    }
	  }), _c('div', {
	    staticClass: ["couponinfo"]
	  }, [_c('div', {
	    staticClass: ["couponvaluepanel"]
	  }, [_c('image', {
	    staticClass: ["priceicon"],
	    attrs: {
	      "src": _vm.baseurl + _vm.priceiconurl
	    }
	  }), _c('text', {
	    staticClass: ["pricevalue"]
	  }, [_vm._v(_vm._s(_vm.item.amount))]), _c('div', {
	    staticClass: ["priceicon-p"]
	  })]), _c('text', {
	    staticClass: ["pricecondition"]
	  }, [_vm._v("满" + _vm._s(_vm.item.threshold) + "元可使用")])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(9)
	)

	/* script */
	__vue_exports__ = __webpack_require__(10)

	/* template */
	var __vue_template__ = __webpack_require__(11)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/Leo/Desktop/归档/zslproduct.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-76487ea6"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = {
	  "product": {
	    "height": 290,
	    "width": 750,
	    "backgroundColor": "#4b2093",
	    "flexDirection": "row"
	  },
	  "productimagepanel": {
	    "marginLeft": 30,
	    "width": 250,
	    "height": 250
	  },
	  "productimageback": {
	    "position": "absolute",
	    "left": 0,
	    "top": 0,
	    "width": 250,
	    "height": 250
	  },
	  "productimage": {
	    "position": "absolute",
	    "marginTop": 20,
	    "left": 20,
	    "width": 230,
	    "height": 230
	  },
	  "productinfo": {
	    "left": 28,
	    "right": 18,
	    "height": 250,
	    "justifyContent": "space-between"
	  },
	  "productname": {
	    "fontSize": 30,
	    "fontFamily": "'PingFang SC'",
	    "width": 376,
	    "lines": 2,
	    "textOverflow": "ellipsis",
	    "color": "#ffffff",
	    "marginTop": 20
	  },
	  "productpricepanel": {
	    "marginBottom": 0,
	    "width": 376,
	    "height": 130,
	    "justifyContent": "flex-end"
	  },
	  "producticon": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "marginLeft": 0,
	    "height": 42
	  },
	  "producezsicon": {
	    "width": 100,
	    "height": 28,
	    "marginLeft": 0,
	    "marginRight": 20
	  },
	  "productprice": {
	    "fontSize": 42,
	    "fontFamily": "'PingFang SC'",
	    "color": "#FFFFFF"
	  },
	  "productjdprice": {
	    "fontFamily": "'PingFang SC'",
	    "fontSize": 20,
	    "color": "#FFFFFF",
	    "marginTop": 10,
	    "marginBottom": 10
	  }
	}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _judapi = __webpack_require__(6);

	var _judapi2 = _interopRequireDefault(_judapi);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {

	    data: function data() {
	        return {
	            productimage: _judapi2.default.apiurl.resourceurl + 'zs_d_icon_04.png',
	            productzsicon: _judapi2.default.apiurl.resourceurl + 'zs_d_icon_03.png'
	        };
	    },
	    name: 'product',
	    props: {
	        item: {
	            type: Object,
	            default: {
	                "skuId": "", // SKU ID
	                "pCode": "", // 促销码
	                "canSell": "Y", // 是否可卖，Y：有库存可卖，N或其他：不可卖
	                "name": "", // 商品名称
	                "pic": "", // 商品图片
	                "pPrice": "", // 无线价
	                "opPrice": "" }
	        }
	    }
	}; //
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
	//
	//
	//
	//


	module.exports = exports['default'];

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["product"]
	  }, [_c('div', {
	    staticClass: ["productimagepanel"]
	  }, [_c('image', {
	    staticClass: ["productimageback"],
	    attrs: {
	      "src": _vm.productimage
	    }
	  }), _c('image', {
	    staticClass: ["productimage"],
	    attrs: {
	      "src": _vm.item.pic
	    }
	  })]), _c('div', {
	    staticClass: ["productinfo"]
	  }, [_c('text', {
	    staticClass: ["productname"]
	  }, [_vm._v(_vm._s(_vm.item.name))]), _c('div', {
	    staticClass: ["productpricepanel"]
	  }, [_c('div', {
	    staticClass: ["producticon"]
	  }, [_c('image', {
	    staticClass: ["producezsicon"],
	    attrs: {
	      "src": _vm.productzsicon
	    }
	  }), _c('text', {
	    staticClass: ["productprice"]
	  }, [_vm._v(_vm._s(_vm.item.pPrice))])]), _c('text', {
	    staticClass: ["productjdprice"]
	  }, [_vm._v("京东价 " + _vm._s(_vm.item.opPrice))])])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(13)
	)

	/* script */
	__vue_exports__ = __webpack_require__(14)

	/* template */
	var __vue_template__ = __webpack_require__(15)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/Leo/Desktop/归档/zsbproduct.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-295808f0"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = {
	  "productitem": {
	    "height": 488,
	    "width": 366,
	    "justifyContent": "space-between"
	  },
	  "productimage": {
	    "width": 324,
	    "height": 324,
	    "marginLeft": 21
	  },
	  "productname": {
	    "marginLeft": 21,
	    "fontFamily": "'PingFang SC'",
	    "fontSize": 24,
	    "maxWidth": 324,
	    "lines": 2,
	    "textOverflow": "ellipsis",
	    "color": "#ffffff",
	    "marginTop": 19
	  },
	  "productprice": {
	    "marginLeft": 21,
	    "fontSize": 30,
	    "fontFamily": "'PingFang SC'",
	    "marginBottom": 36,
	    "color": "#ffffff"
	  }
	}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
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


	exports.default = {
	    name: 'productitem',
	    props: {
	        item: {
	            type: Object,
	            default: {
	                "skuId": "", // SKU ID
	                "pCode": "", // 促销码
	                "canSell": "Y", // 是否可卖，Y：有库存可卖，N或其他：不可卖
	                "name": "", // 商品名称
	                "pic": "", // 商品图片
	                "pPrice": "", // 无线价
	                "opPrice": "" }
	        }
	    },
	    methods: {
	        _click: function _click() {
	            this.$emit('click');
	        }
	    }
	};
	module.exports = exports["default"];

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["productitem"],
	    on: {
	      "click": _vm._click
	    }
	  }, [_c('div', {
	    staticClass: ["productheader"]
	  }, [_c('image', {
	    staticClass: ["productimage"],
	    attrs: {
	      "src": _vm.item.pic
	    }
	  }), _c('text', {
	    staticClass: ["productname"]
	  }, [_vm._v(_vm._s(_vm.item.name))])]), _c('text', {
	    staticClass: ["productprice"]
	  }, [_vm._v(_vm._s(_vm.item.pPrice))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(17)
	)

	/* script */
	__vue_exports__ = __webpack_require__(18)

	/* template */
	var __vue_template__ = __webpack_require__(19)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/Leo/Desktop/归档/zsheader.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-fb961020"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = {
	  "zsheader": {
	    "width": 750
	  },
	  "brandimage": {
	    "top": -40,
	    "height": 300,
	    "width": 750,
	    "position": "absolute"
	  },
	  "brandpanel": {
	    "width": 750,
	    "alignItems": "center"
	  },
	  "brandicon": {
	    "marginTop": 60,
	    "height": 70,
	    "width": 212,
	    "backgroundColor": "#afddff"
	  },
	  "seperateicon": {
	    "marginTop": 20,
	    "height": 8,
	    "width": 60
	  },
	  "brandinfo": {
	    "marginTop": 22,
	    "flexDirection": "row",
	    "marginBottom": 50
	  },
	  "brandtext-p": {
	    "flex": 0.8,
	    "maxWidth": 448
	  },
	  "brandtexticon-p": {
	    "flex": 0.1,
	    "width": 39
	  },
	  "brandtext": {
	    "fontSize": 30,
	    "color": "#ffffff",
	    "maxWidth": 448,
	    "textAlign": "center",
	    "verticalAlign": "center",
	    "paddingTop": 0
	  },
	  "brandtexticonleft": {
	    "position": "absolute",
	    "width": 9,
	    "height": 20,
	    "left": 0,
	    "top": 5,
	    "marginRight": 20
	  },
	  "brandtexticonright": {
	    "position": "absolute",
	    "bottom": 0,
	    "right": 0,
	    "width": 9,
	    "height": 20,
	    "marginLeft": 20
	  }
	}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _judapi = __webpack_require__(6);

	var _judapi2 = _interopRequireDefault(_judapi);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var modal = jud.requireModule('modal'); //
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


	var communicate = jud.requireModule('communicate');

	exports.default = {
	    name: 'product',
	    props: {
	        brandinfo: {
	            type: Object,
	            default: {
	                icon: '',
	                bgimageurl: '',
	                introduce: ''
	            }
	        }
	    },
	    data: function data() {
	        return {
	            seperateicon: _judapi2.default.apiurl.resourceurl + 'zs_d_icon_05.png',
	            brandtexticonleft: _judapi2.default.apiurl.resourceurl + 'zs_d_icon_06_left.png',
	            brandtexticonright: _judapi2.default.apiurl.resourceurl + 'zs_d_icon_06_right.png'
	        };
	    },
	    methods: {
	        headcelldisappear: function headcelldisappear(event) {

	            //                modal.toast({
	            //                    message: 'Navigationbar Should Appear',
	            //                    duration: 0.3
	            //                });

	            communicate.send("ZS_BRAND_CALLBACK", {
	                "domain": "scroller",
	                "info": "NavigationbarShouldAppear"
	            }, function (result) {});
	        }
	    }
	};
	module.exports = exports['default'];

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["zsheader"]
	  }, [_c('image', {
	    staticClass: ["brandimage"],
	    attrs: {
	      "src": _vm.brandinfo.bgimageurl
	    }
	  }), _c('div', {
	    staticClass: ["brandpanel"]
	  }, [_c('image', {
	    staticClass: ["brandicon"],
	    attrs: {
	      "src": _vm.brandinfo.icon
	    },
	    on: {
	      "disappear": _vm.headcelldisappear
	    }
	  }), _c('image', {
	    staticClass: ["seperateicon"],
	    attrs: {
	      "src": _vm.seperateicon
	    }
	  }), _c('div', {
	    staticClass: ["brandinfo"]
	  }, [_c('div', {
	    staticClass: ["brandtexticon-p"]
	  }), _c('div', {
	    staticClass: ["brandtext-p"]
	  }, [_c('text', {
	    staticClass: ["brandtext"]
	  }, [_vm._v(_vm._s(_vm.brandinfo.introduce))])]), _c('div', {
	    staticClass: ["brandtexticon-p"]
	  }), _c('image', {
	    staticClass: ["brandtexticonleft"],
	    attrs: {
	      "src": _vm.brandtexticonleft
	    }
	  }), _c('image', {
	    staticClass: ["brandtexticonright"],
	    attrs: {
	      "src": _vm.brandtexticonright
	    }
	  })])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(21)
	)

	/* script */
	__vue_exports__ = __webpack_require__(22)

	/* template */
	var __vue_template__ = __webpack_require__(23)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/Leo/Desktop/归档/zstailer.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-ea606b40"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 21 */
/***/ (function(module, exports) {

	module.exports = {
	  "zstailer": {
	    "width": 750,
	    "height": 220,
	    "backgroundColor": "#342667",
	    "alignItems": "center"
	  },
	  "producttailinfo": {
	    "color": "#80789c",
	    "marginTop": 42,
	    "fontSize": 24,
	    "fontFamily": "'PingFang SC'"
	  },
	  "producttailback": {
	    "width": 400,
	    "height": 80,
	    "marginTop": 30,
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "producttailimage": {
	    "position": "absolute",
	    "width": 400,
	    "height": 80,
	    "left": 0,
	    "top": 0
	  },
	  "producttailtitle": {
	    "fontSize": 30,
	    "fontFamily": "'PingFang SC'",
	    "color": "#ffffff"
	  }
	}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _judapi = __webpack_require__(6);

	var _judapi2 = _interopRequireDefault(_judapi);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var communicate = jud.requireModule('communicate'); //
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


	exports.default = {
	    name: 'zstailer',
	    data: function data() {
	        return {
	            producttailimageurl: _judapi2.default.apiurl.resourceurl + 'zs_d_button_07.png'
	        };
	    },
	    methods: {
	        clickbackbtn: function clickbackbtn() {

	            communicate.send("ZS_BRAND_CALLBACK", {
	                "domain": "tailer",
	                "info": "backhome"
	            }, function (result) {});
	        }
	    }
	};
	module.exports = exports['default'];

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["zstailer"]
	  }, [_c('text', {
	    staticClass: ["producttailinfo"]
	  }, [_vm._v("以上就是今天的全部内容")]), _c('div', {
	    staticClass: ["producttailback"],
	    on: {
	      "click": _vm.clickbackbtn
	    }
	  }, [_c('image', {
	    staticClass: ["producttailimage"],
	    attrs: {
	      "src": _vm.producttailimageurl
	    }
	  }), _c('text', {
	    staticClass: ["producttailtitle"]
	  }, [_vm._v("回首页查看其它活动")])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('list', {
	    staticClass: ["productinfolist"],
	    style: {
	      top: _vm.listTop
	    },
	    attrs: {
	      "offsetAccuracy": "5"
	    },
	    on: {
	      "scroll": function($event) {
	        _vm.onScroll($event)
	      }
	    }
	  }, [_c('cell', {
	    staticClass: ["headcell"],
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('div', {
	    staticClass: ["pdheader"]
	  }, [_c('zs-header', {
	    staticClass: ["pheader"],
	    attrs: {
	      "brandinfo": _vm.brandinfo
	    },
	    on: {
	      "disappear": _vm.headcelldisappear
	    }
	  }), _c('div', {
	    staticClass: ["pcoupon"]
	  }, [_c('div', {
	    staticClass: ["pcoupon1"]
	  }, _vm._l((_vm.couponlist), function(item, index) {
	    return _c('div', {
	      staticClass: ["pcoupon2"],
	      on: {
	        "click": function($event) {
	          _vm.clickcoupon(item, index)
	        }
	      }
	    }, [((index <= 4)) ? _c('coupon-item', {
	      ref: 'coupon' + index,
	      refInFor: true,
	      attrs: {
	        "item": item
	      }
	    }) : _vm._e()], 1)
	  })), _c('div', {
	    ref: "pcouponintroduce",
	    staticClass: ["pcouponintroduce"]
	  }, [_c('text', {
	    staticClass: ["couponintroduce"],
	    on: {
	      "appear": _vm.headcellappear
	    }
	  }, [_vm._v("注：福利券仅适用于B1福利区商品")])])]), _c('image', {
	    staticClass: ["coupontitle"],
	    attrs: {
	      "src": _vm.coupontitle
	    }
	  })], 1)]), _c('header', [_c('div', {
	    staticClass: ["ptab"]
	  }, [_c('div', {
	    staticClass: ["ptabpanel"],
	    on: {
	      "click": _vm.clicktab1
	    }
	  }, [_c('image', {
	    staticClass: ["ptabimage"],
	    attrs: {
	      "src": _vm.ptab1image
	    }
	  }), _c('text', {
	    staticClass: ["ptabtext"]
	  }, [_vm._v("L1专属精品区")])]), _c('div', {
	    staticClass: ["ptabpanel"],
	    on: {
	      "click": _vm.clicktab2
	    }
	  }, [_c('image', {
	    staticClass: ["ptabimage"],
	    attrs: {
	      "src": _vm.ptab2image
	    }
	  }), _c('text', {
	    staticClass: ["ptabtext"]
	  }, [_vm._v("B1地下福利区")]), _c('image', {
	    staticClass: ["ptab2icon"],
	    attrs: {
	      "src": _vm.ptab2icon
	    }
	  })])]), (_vm.showhelpimage) ? _c('image', {
	    ref: "bhelpimageref",
	    staticClass: ["bhelpimage"],
	    attrs: {
	      "src": _vm.b1helpimageurl
	    }
	  }) : _vm._e()]), _c('cell', {
	    ref: "introducecell",
	    staticClass: ["cell"],
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('div', {
	    staticClass: ["productpanel"]
	  }, [_c('div', {
	    staticClass: ["introduce"]
	  }, [_c('div', {
	    staticClass: ["introduceinfo"]
	  }, [_c('image', {
	    staticClass: ["introducebgimage"],
	    attrs: {
	      "src": _vm.introductbg
	    }
	  }), _c('div', {
	    staticClass: ["introducetextpanel"]
	  }, [_c('text', {
	    staticClass: ["introducetext1"]
	  }, [_vm._v("[ 仅有")]), _c('text', {
	    staticClass: ["introducetext2"]
	  }, [_vm._v(_vm._s(_vm.introducenumber))]), _c('text', {
	    staticClass: ["introducetext1"]
	  }, [_vm._v("的人能享受的专属价，就有你 ]")])])])]), _vm._l((_vm.lproductlist), function(item) {
	    return _c('div', {
	      on: {
	        "click": function($event) {
	          _vm.clickl1product(item)
	        }
	      }
	    }, [(item) ? _c('product-item', {
	      attrs: {
	        "item": item
	      }
	    }) : _vm._e()], 1)
	  })], 2)]), _c('cell', {
	    ref: "bintroducecell",
	    staticClass: ["cell"],
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_vm._m(0)]), _c('cell', {
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('div', {
	    staticClass: ["bproductpanel"]
	  }, _vm._l((_vm.bproductlist), function(item, index) {
	    return _c('div', [((index % 2 === 0)) ? _c('div', {
	      staticClass: ["bproductcell"]
	    }, [(_vm.bproductlist[index]) ? _c('b-product-item', {
	      staticClass: ["bproductcellitemleft"],
	      attrs: {
	        "item": _vm.bproductlist[index]
	      },
	      on: {
	        "click": function($event) {
	          _vm.clickb1product(index)
	        }
	      }
	    }) : _vm._e(), (_vm.bproductlist[index + 1]) ? _c('b-product-item', {
	      staticClass: ["bproductcellitemright"],
	      attrs: {
	        "item": _vm.bproductlist[index + 1]
	      },
	      on: {
	        "click": function($event) {
	          _vm.clickb1product(index + 1)
	        }
	      }
	    }) : _vm._e()], 1) : _vm._e()])
	  }))]), _c('cell', {
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('zs-tailer', {
	    staticClass: ["ptailer"]
	  })], 1)], 1), _c('div', {
	    ref: "navigation",
	    staticClass: ["navigationBar"]
	  }, [_c('div', {
	    staticClass: ["navigationBackGround"],
	    style: {
	      opacity: _vm.navigationOpacity
	    }
	  }), _c('div', {
	    staticClass: ["navigationBackItem"],
	    on: {
	      "click": _vm.clickBack
	    }
	  })])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["bintroduce"]
	  }, [_c('div', {
	    staticClass: ["seperatelineleft"]
	  }), _c('text', {
	    staticClass: ["b1header"]
	  }, [_vm._v("B1地下福利区")]), _c('div', {
	    staticClass: ["seperatelineright"]
	  })])
	}]}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);