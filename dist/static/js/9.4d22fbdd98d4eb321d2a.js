webpackJsonp([9],{"7xLU":function(t,a,v){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var _={data:function(){return{code:[]}},methods:{codeComplete:function(t){console.log(t)}},created:function(){},mounted:function(){}},e={render:function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("div",[v("Header",{attrs:{isBackShow:!0,title:"验证码输入组件",border:!0},on:{backClick:function(a){t.$router.push("/demo")}}}),t._v(" "),t._m(0),t._v(" "),v("h4",[t._v("展示")]),t._v(" "),v("p",{staticStyle:{width:"94%",margin:"0 auto"}},[v("VerificationCode",{attrs:{"span-size":"0.2rem",type:"text",number:6,height:"0.5rem","span-color":"#f35252","input-color":"#3498db","input-size":"0.24rem",code:t.code},on:{complete:t.codeComplete}})],1),t._v(" "),v("h4",[t._v("调用实例")]),t._v(" "),t._m(1),t._v(" "),v("h4",[t._v("API")]),t._v(" "),t._m(2),t._v(" "),v("h4",[t._v("方法")]),t._v(" "),t._m(3)],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("section",{staticClass:"section"},[a("h2",[this._v("VerificationCode")]),this._v(" "),a("p",[this._v("6位数验证码输入框，可拓展为密码输入框等")])])},function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("pre",[t._v("\n  <"),v("span",{staticClass:"tag-name"},[t._v("VerificationCode ")]),t._v("\n    "),v("span",{staticClass:"tag-attr"},[t._v("span-size")]),t._v("="),v("span",{staticClass:"tag-value"},[t._v('"0.2rem" ')]),t._v("\n    "),v("span",{staticClass:"tag-attr"},[t._v("type")]),t._v("="),v("span",{staticClass:"tag-value"},[t._v('"number" ')]),t._v("\n    "),v("span",{staticClass:"tag-attr"},[t._v(":number")]),t._v("="),v("span",{staticClass:"tag-value"},[t._v('"6" ')]),t._v("\n    "),v("span",{staticClass:"tag-attr"},[t._v("height")]),t._v("="),v("span",{staticClass:"tag-value"},[t._v('"0.5rem" ')]),t._v("\n    "),v("span",{staticClass:"tag-attr"},[t._v("span-color")]),t._v("="),v("span",{staticClass:"tag-value"},[t._v('"#f35252" ')]),t._v("\n    "),v("span",{staticClass:"tag-attr"},[t._v("input-color")]),t._v("="),v("span",{staticClass:"tag-value"},[t._v('"#3498db" ')]),t._v("\n    "),v("span",{staticClass:"tag-attr"},[t._v("input-size")]),t._v("="),v("span",{staticClass:"tag-value"},[t._v('"0.24rem" ')]),t._v("\n    "),v("span",{staticClass:"tag-attr"},[t._v(":code")]),t._v("="),v("span",{staticClass:"tag-value"},[t._v('"code" ')]),t._v("\n    "),v("span",{staticClass:"tag-methods"},[t._v("@complete")]),t._v("="),v("span",{staticClass:"tag-value"},[t._v('"codeComplete"')]),t._v("\n  /></"),v("span",{staticClass:"tag-name"},[t._v("VerificationCode")]),t._v("> \n  "),v("span",{staticClass:"tag-methods"},[t._v("\n  "),v("span",{staticClass:"tag-name"},[t._v("methods")]),t._v(" {\n    codeComplete(code) {\n      console.log(code);\n    },\n  } ")]),t._v(" \n\n\n")])},function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("table",{staticClass:"section-table"},[v("thead",[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("类型")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("code")]),t._v(" "),v("td",[t._v("用户输入的验证码数组")]),t._v(" "),v("td",[t._v("Array")])]),t._v(" "),v("tr",[v("td",[t._v("number")]),t._v(" "),v("td",[t._v("验证码位数")]),t._v(" "),v("td",[t._v("Number")])]),t._v(" "),v("tr",[v("td",[t._v("type")]),t._v(" "),v("td",[t._v("用户输入类型（支持 number、text）")]),t._v(" "),v("td",[t._v("String")])]),t._v(" "),v("tr",[v("td",[t._v("span-size")]),t._v(" "),v("td",[t._v("输入后的字体显示大小（默认20px,接受任意单位）")]),t._v(" "),v("td",[t._v("String")])]),t._v(" "),v("tr",[v("td",[t._v("span-color")]),t._v(" "),v("td",[t._v("输入后的字体显示颜色（默认#f35252）")]),t._v(" "),v("td",[t._v("String")])]),t._v(" "),v("tr",[v("td",[t._v("input-size")]),t._v(" "),v("td",[t._v("输入框的字体显示大小（默认20px,接受任意单位）")]),t._v(" "),v("td",[t._v("String")])]),t._v(" "),v("tr",[v("td",[t._v("input-color")]),t._v(" "),v("td",[t._v("输入框的字体显示颜色（默认#f35252）")]),t._v(" "),v("td",[t._v("String")])]),t._v(" "),v("tr",[v("td",[t._v("height")]),t._v(" "),v("td",[t._v("整个框的显示高度（默认60px）")]),t._v(" "),v("td",[t._v("String")])])])])},function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("table",{staticClass:"section-table"},[v("thead",[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("类型")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("getinput")]),t._v(" "),v("td",[t._v("用户每次输入后的回调函数,接受一个验证码字符串")]),t._v(" "),v("td",[t._v("Function")])]),t._v(" "),v("tr",[v("td",[t._v("complete")]),t._v(" "),v("td",[t._v("用户输入完成后的回调函数,接受一个验证码字符串")]),t._v(" "),v("td",[t._v("Function")])])])])}]};var s=v("vSla")(_,e,!1,function(t){v("mC7S")},null,null);a.default=s.exports},mC7S:function(t,a){}});