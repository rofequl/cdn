(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-93521b84"],{3100:function(t,a,s){"use strict";s("670a")},"670a":function(t,a,s){},f6c2:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"container mt-5"},[s("div",{staticClass:"row"},[t.isCheckout?s("div",{staticClass:"row",attrs:{id:"checkout"}},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"checkout-panel"},[t._m(0),s("div",{staticClass:"panel-footer"},[s("button",{staticClass:"btn back-btn",on:{click:function(a){t.isCheckout=!1}}},[t._v("Back")]),s("button",{staticClass:"btn next-btn",on:{click:t.handlePayment}},[t._v("Submit")])])])])]):t._l(t.membershipPlans,(function(a,e){return s("div",{key:e,staticClass:"col-md-4 col-sm-6 plan-card"},[s("div",{class:["pricingTable",{blue:1==e},{green:2==e}]},[s("div",{staticClass:"pricingTable-header"},[s("h3",{staticClass:"title"},[t._v(t._s(a.name))]),s("div",{staticClass:"price-value"},[s("span",{staticClass:"duration"},[t._v(t._s(a.duration)+" "+t._s(t.$t("message.membership_plan.days")))])])]),s("ul",{staticClass:"pricing-content"},[s("li",[s("b",[t._v(t._s(a.no_of_allowed_products))]),t._v(" "+t._s(t.$t("message.membership_plan.allowed_products")))]),s("li",[s("b",[t._v(t._s(a.no_of_allowed_keywords))]),t._v(" "+t._s(t.$t("message.membership_plan.allowed_keywords")))])]),s("div",{staticClass:"pricingTable-signup"},[s("a",{attrs:{href:"javascript:void(0)"},on:{click:function(s){return t.handleSignup(a)}}},[t._v(t._s(t.$t("message.membership_plan.purchase")))])])])])}))],2)])])])},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"panel-body"},[s("h2",{staticClass:"title"},[t._v("Checkout")]),s("div",{staticClass:"payment-method"},[s("label",{staticClass:"method card",attrs:{for:"card"}},[s("div",{staticClass:"card-logos"},[s("img",{attrs:{src:"/images/visa_logo.png"}}),s("img",{attrs:{src:"/images/mastercard_logo.png"}})]),s("div",{staticClass:"radio-input"},[s("input",{attrs:{id:"card",type:"radio",name:"payment"}}),t._v(" Pay with credit card ")])]),s("label",{staticClass:"method paypal",attrs:{for:"paypal"}},[s("img",{attrs:{src:"/images/paypal_logo.png"}}),s("div",{staticClass:"radio-input"},[s("input",{attrs:{id:"paypal",type:"radio",name:"payment"}}),t._v(" Pay with PayPal ")])])]),s("div",{staticClass:"input-fields"},[s("div",{staticClass:"column-1"},[s("label",{attrs:{for:"cardholder"}},[t._v("Cardholder's Name")]),s("input",{attrs:{type:"text",id:"cardholder"}}),s("div",{staticClass:"small-inputs"},[s("div",[s("label",{attrs:{for:"date"}},[t._v("Valid thru")]),s("input",{attrs:{type:"text",id:"date",placeholder:"MM / YY"}})]),s("div",[s("label",{attrs:{for:"verification"}},[t._v("CVV / CVC *")]),s("input",{attrs:{type:"password",id:"verification"}})])])]),s("div",{staticClass:"column-2"},[s("label",{attrs:{for:"cardnumber"}},[t._v("Card Number")]),s("input",{attrs:{type:"password",id:"cardnumber"}}),s("span",{staticClass:"info"},[t._v("* CVV or CVC is the card security code, unique three digits number on the back of your card separate from its number.")])])])])}],n=s("7b99"),r={name:"Profile",data:function(){return{loadActive:!1,isCheckout:!1,membershipPlans:[]}},created:function(){this.getMembershipPlan()},methods:{getMembershipPlan:function(){var t=this;n["a"].get("user/get/all/membership/plan").then((function(a){t.membershipPlans=a.data})).catch((function(a){t.membershipPlans=[]}))},handleSignup:function(t){this.choosePlan=t,this.isCheckout=!0},handlePayment:function(){var t=this;n["a"].post("user/register-membership-plan/"+this.choosePlan.id).then((function(a){"Error"===a.data.result?swal.fire("Failed!",a.data.message,"warning"):swal.fire({title:t.$t("message.common.register_successfully"),icon:"success",showCancelButton:!1,confirmButtonColor:"#3085d6",confirmButtonText:"Ok"}).then((function(a){a.value&&t.$router.push({name:"Dashboard"})}))})).catch((function(){swal.fire(t.$t("message.common.error"),t.$t("message.common.something_wrong"),"warning")}))}},computed:{user:function(){return this.$store.getters.user}}},c=r,l=(s("3100"),s("2877")),o=Object(l["a"])(c,e,i,!1,null,"b6cd3b2a",null);a["default"]=o.exports}}]);
//# sourceMappingURL=chunk-93521b84.653f2b72.js.map