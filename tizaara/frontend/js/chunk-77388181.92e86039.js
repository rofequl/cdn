(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77388181"],{"0190":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"product-list-wrapper",staticStyle:{"min-height":"80vh","font-family":"'Noto Sans JP', sans-serif","font-size":"12px"}},[s("div",{staticClass:"container my-4"},[s("div",{staticClass:"row"},[s("h5",{staticClass:"font-weight-bold",staticStyle:{color:"#7e7474"}},[t._v(t._s(t.$t("message.help.help_center")))])])]),s("b-container",[s("b-row",[s("b-col",{attrs:{cols:"12",md:"4",xl:"3"}},[s("div",{staticClass:"sidebar-item-wrapper"},[s("div",{staticClass:"collapse show",attrs:{id:"related-category"}},[s("ul",t._l(t.helpCategoryList,(function(e,i){return s("li",{key:i},[s("router-link",{staticClass:"font-weight-bold",attrs:{to:{name:"help-category",query:{cat:e.slug}}}},[t._v(" "+t._s(e.name)+" ")]),s("ul",{staticClass:"pl-2"},t._l(t.getHelpSubcategoryById(e.id),(function(e,i){return s("li",{key:i},[s("router-link",{attrs:{to:{name:"help-category",query:{sub:e.slug}}}},[t._v(t._s(e.name)+" ")])],1)})),0)],1)})),0)])])]),s("b-col",{attrs:{cols:"12",md:"8",xl:"9"}},[s("div",{staticClass:"py-2 px-4",staticStyle:{"background-color":"white"}},[s("div",{staticClass:"border-bottom pb-2"},[s("router-link",{attrs:{to:"/"}},[t._v(t._s(t.$t("message.help.home")))]),""!==t.category?s("router-link",{attrs:{to:{name:"help-category",query:{cat:t.category.slug}}}},[s("i",{staticClass:"fas fa-chevron-right mx-2"}),t._v(" "+t._s(t.category.name)+" ")]):t._e(),""!==t.subcategory?s("router-link",{attrs:{to:{name:"help-category",query:{sub:t.subcategory.slug}}}},[s("i",{staticClass:"fas fa-chevron-right mx-2"}),t._v(" "+t._s(t.subcategory.name)+" ")]):t._e(),""!==t.question?s("router-link",{attrs:{to:{name:"help-category",query:{qu:t.question.slug}}}},[s("i",{staticClass:"fas fa-chevron-right mx-2"}),t._v(" "+t._s(t.question.question)+" ")]):t._e()],1),s("div",[1===t.child_position&&t.subcategory_list.length>0?s("div",{staticClass:"py-2 my-2",staticStyle:{"background-color":"#f0f0fa"}},t._l(t.subcategory_list,(function(e,i){return s("router-link",{key:i,staticClass:"text-success mx-3",attrs:{to:{name:"help-category",query:{sub:e.slug}}}},[t._v(" "+t._s(e.name)+" ")])})),1):t._e(),3!==t.child_position?s("div",{staticClass:"py-2 my-4"},t._l(t.question_list,(function(e,i){return s("div",{key:i,staticClass:"mb-2"},[s("router-link",{attrs:{to:{name:"help-category",query:{qu:e.slug}}}},[s("i",{staticClass:"fas fa-question-circle text-success"}),t._v(" "+t._s(e.question)+" ")])],1)})),0):t._e(),3===t.child_position?s("div",{staticClass:"deepselectors",domProps:{innerHTML:t._s(t.question.answer)}}):t._e()])])])],1)],1)],1)},o=[],r=s("5530"),a=(s("4c53"),s("4c6a")),n=s("2f62"),c={name:"HelpCategory",data:function(){return{category:"",subcategory:"",subcategory_list:[],question:"",question_list:[],child_position:""}},methods:{loadQuery:function(){if(this.$route.query.qu){if(this.helpQuestionList.length>0){this.child_position=3;var t=this.getQuestionBySlug(this.$route.query.qu);t?(this.question=t,this.loadCategory(),this.loadSubcategory()):this.$router.push({name:"error"})}}else if(this.$route.query.sub){if(this.helpQuestionList.length>0){this.child_position=2;var e=this.getHelpSubcategoryBySlug(this.$route.query.sub);e?(this.question="",this.category="",this.subcategory=e,this.loadCategory(),this.loadQuestion()):this.$router.push({name:"error"})}}else if(this.helpCategoryList.length>0){this.child_position=1;var s=this.getHelpCategoryBySlug(this.$route.query.cat);s?(this.question="",this.subcategory="",this.category=s,this.loadSubcategory(),this.loadQuestion()):this.$router.push({name:"error"})}},loadCategory:function(){this.helpCategoryList.length>0&&(2===this.child_position&&(this.category=this.findHelpCategoryById(this.subcategory.category_id)),3===this.child_position&&(this.category=this.findHelpCategoryById(this.question.category_id)))},loadSubcategory:function(){this.helpSubcategoryList.length>0&&(1===this.child_position&&(this.subcategory_list=this.getHelpSubcategoryById(this.category.id)),3===this.child_position&&(this.subcategory=this.findHelpSubcategoryById(this.question.subcategory_id)))},loadQuestion:function(){this.helpQuestionList.length>0&&(1===this.child_position&&(this.question_list=this.getQuestionByCategory(this.category.id)),2===this.child_position&&(this.question_list=this.getQuestionBySubcategory(this.subcategory.id)))}},created:function(){this.loadQuery(),this.helpCategoryList.length<1&&this.$store.dispatch(a["a"]),this.helpSubcategoryList.length<1&&this.$store.dispatch(a["c"]),this.helpQuestionList.length<1&&this.$store.dispatch(a["b"])},computed:Object(r["a"])({},Object(n["b"])(["helpCategoryList","getTopQuestion","helpQuestionList","getHelpSubcategoryById","helpSubcategoryList","getQuestionBySlug","findHelpCategoryById","findHelpSubcategoryById","getHelpSubcategoryBySlug","getHelpCategoryBySlug","getQuestionByCategory","getQuestionBySubcategory"])),watch:{helpQuestionList:function(){this.loadQuery(),this.loadQuestion()},helpSubcategoryList:function(){this.loadSubcategory()},helpCategoryList:function(){this.loadCategory()},"$route.query":function(){this.loadQuery()}}},u=c,l=(s("4b8e"),s("2877")),h=Object(l["a"])(u,i,o,!1,null,"cc124ac2",null);e["default"]=h.exports},"3c35":function(t,e,s){},"4b8e":function(t,e,s){"use strict";s("3c35")},"4c53":function(t,e,s){"use strict";var i=s("23e7"),o=s("857a"),r=s("af03");i({target:"String",proto:!0,forced:r("sub")},{sub:function(){return o(this,"sub","","")}})},5530:function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));s("b64b"),s("a4d3"),s("4de4"),s("e439"),s("159b"),s("dbb4");var i=s("ade3");function o(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function r(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?o(Object(s),!0).forEach((function(e){Object(i["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}},"857a":function(t,e,s){var i=s("1d80"),o=/"/g;t.exports=function(t,e,s,r){var a=String(i(t)),n="<"+e;return""!==s&&(n+=" "+s+'="'+String(r).replace(o,"&quot;")+'"'),n+">"+a+"</"+e+">"}},af03:function(t,e,s){var i=s("d039");t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},b64b:function(t,e,s){var i=s("23e7"),o=s("7b0b"),r=s("df75"),a=s("d039"),n=a((function(){r(1)}));i({target:"Object",stat:!0,forced:n},{keys:function(t){return r(o(t))}})},dbb4:function(t,e,s){var i=s("23e7"),o=s("83ab"),r=s("56ef"),a=s("fc6a"),n=s("06cf"),c=s("8418");i({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,s,i=a(t),o=n.f,u=r(i),l={},h=0;while(u.length>h)s=o(i,e=u[h++]),void 0!==s&&c(l,e,s);return l}})},e439:function(t,e,s){var i=s("23e7"),o=s("d039"),r=s("fc6a"),a=s("06cf").f,n=s("83ab"),c=o((function(){a(1)})),u=!n||c;i({target:"Object",stat:!0,forced:u,sham:!n},{getOwnPropertyDescriptor:function(t,e){return a(r(t),e)}})}}]);
//# sourceMappingURL=chunk-77388181.92e86039.js.map