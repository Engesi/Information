webpackJsonp([6],{"4QV3":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s={data:function(){return{newsInfo:{},myTitle:""}},created:function(){var e=this,n="getnew/"+this.$route.params.id;this.$axios.get(n).then(function(n){e.newsInfo=n.data.message[0]}).catch(function(e){return console.log(e)})},beforeRouteEnter:function(e,n,t){var s="详情";"NewsList"===n.name?s="新闻详情":"GoodsDetail"===n.name&&(s="商品图文信息"),t(function(e){e.myTitle=s})}},i={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("nav-bar",{attrs:{title:e.myTitle}}),e._v(" "),t("div",{staticClass:"news-title"},[t("p",[e._v(e._s(e.newsInfo.title))]),e._v(" "),t("div",[t("span",[e._v(e._s(e.newsInfo.click)+"次点击")]),e._v(" "),t("span",[e._v("分类:民生经济")]),e._v(" "),t("span",[e._v("添加时间:"+e._s(e._f("convertTime")(e.newsInfo.add_time,"YYYY-MM-DD")))])])]),e._v(" "),t("div",{staticClass:"news-content",domProps:{innerHTML:e._s(e.newsInfo.content)}})],1)},staticRenderFns:[]};var a=t("VU/8")(s,i,!1,function(e){t("giV7")},"data-v-788fa911",null);n.default=a.exports},giV7:function(e,n){}});