webpackJsonp([15],{"4tmx":function(t,e){},g2eO:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={data:function(){return{selectShopModel:!1}},methods:{receiveSelected:function(t){console.log(t),this.selectShopModel=!1}},created:function(){},mounted:function(){}},a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Header",{attrs:{isBackShow:!0,title:"商品SKU选择组件",border:!0},on:{backClick:function(e){t.$router.push("/demo")}}}),t._v(" "),t._m(0),t._v(" "),s("h4",[t._v("展示")]),t._v(" "),s("p",{staticStyle:{width:"94%",margin:"0 auto"}},[s("SelectCommodity",{attrs:{selectShopModel:t.selectShopModel},on:{submitSelected:t.receiveSelected}}),t._v(" "),s("Button",{staticStyle:{width:"1.8rem",height:"0.6rem"},attrs:{type:"primary",plain:!0},on:{click:function(e){t.selectShopModel=!0}}},[t._v("打开选择框")])],1),t._v(" "),s("h4",[t._v("调用实例")]),t._v(" "),t._m(1),t._v(" "),s("h4",[t._v("API")]),t._v(" "),t._m(2),t._v(" "),s("h4",[t._v("方法")]),t._v(" "),t._m(3)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"section"},[e("h2",[this._v("SelectCommodity")]),this._v(" "),e("p",[this._v("商品SKU选择组件，这里只是一个展示，需要根据各自商城情况及接口数据编辑组件内部源码")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("pre",[t._v("\n  <"),s("span",{staticClass:"tag-name"},[t._v("SelectCommodity ")]),t._v("\n  "),s("span",{staticClass:"tag-attr"},[t._v(":selectShopModel")]),t._v("="),s("span",{staticClass:"tag-value"},[t._v('"selectShopModel" ')]),t._v("\n  "),s("span",{staticClass:"tag-attr"},[t._v("@submitSelected")]),t._v("="),s("span",{staticClass:"tag-value"},[t._v('"receiveSelected"')]),t._v("\n  />\n  "),s("span",{staticClass:"tag-methods"},[t._v("\n  "),s("span",{staticClass:"tag-name"},[t._v("methods")]),t._v(" {\n   receiveSelected(selected) {\n     console.log(selected);\n     this.selectShopModel = false;\n   }\n  } ")]),t._v(" \n\n\n")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",{staticClass:"section-table"},[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("selectShopModel")]),t._v(" "),s("td",[t._v("显示/隐藏选择框")]),t._v(" "),s("td",[t._v("Boolean")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",{staticClass:"section-table"},[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("receiveSelected")]),t._v(" "),s("td",[t._v("接收用户的选择项")]),t._v(" "),s("td",[t._v("Function")])])])])}]};var c=s("vSla")(n,a,!1,function(t){s("4tmx")},null,null);e.default=c.exports}});