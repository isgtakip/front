(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{548:function(e,t,n){"use strict";n.r(t);var r=n(3),o=(n(35),n(30),n(58),n(115));n.n(o).a.defaults.withCredentials=!0;var l={auth:"guest",layout:"empty",data:function(){return{login:{email:"sari.okan@gmail.com",password:"sa123456"}}},methods:{userLogin:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$auth.loginWith("laravelSanctum",{data:e.login}).then((function(){e.$router.replace("/").catch((function(e){console.log(e)}))}));case 3:t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()}}},c=n(69),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("form",{on:{submit:function(t){return t.preventDefault(),e.userLogin(t)}}},[n("div",[n("label",[e._v("Username")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.login.username,expression:"login.username"}],attrs:{type:"text"},domProps:{value:e.login.username},on:{input:function(t){t.target.composing||e.$set(e.login,"username",t.target.value)}}})]),e._v(" "),n("div",[n("label",[e._v("Password")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.login.password,expression:"login.password"}],attrs:{type:"text"},domProps:{value:e.login.password},on:{input:function(t){t.target.composing||e.$set(e.login,"password",t.target.value)}}})]),e._v(" "),e._m(0)])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("button",{attrs:{type:"submit"}},[e._v("Submit")])])}],!1,null,null,null);t.default=component.exports}}]);