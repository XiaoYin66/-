webpackJsonp([70],{"+jIG":function(t,e){},xJsL:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s("Xxa5"),a=s.n(o),i=s("exGp"),n=s.n(i),r=s("M5WX"),u=s("7+uW"),c=s("Fd2+");u.default.use(c.J);var l={data:function(){return{showCopy:!0,inputflag:!1,resetcolor:"color:#ccc",passwordFalse:!0,tips:"",listGo:[],type:"",loading:!1,inputpasswordValue:"",form:{input:""},inputValue:"",loading1:!1,color:"",index:0,validateForm:{username:"",password:"",isAgree:!0,memorry:!1},token:"",user:[],checked:!0,colorPassword:"color:#0052d6",LoginStatus:!1,background:""}},created:function(){this.background={}},mounted:function(){this.getCookie()},methods:{LoginlocalStorage:function(){},RegisterTo:function(){this.$router.push("/Register")},forget:function(){},localtionNews:function(){cordova.plugins.notification.local.schedule([{id:0,title:"宝安区治水提质动态监测系统",text:"感谢使用我们的监测系统，使用的意见欢迎给我留言！",foreground:!0},{id:1,title:"版权所属(版本1.0.0)",text:"深圳安志生态环境有限公司",foreground:!0}])},resetLoginPassword:function(){localStorage.clear(),this.inputValue="",this.inputpasswordValue="",this.$router.push("/Forget")},clearPassword:function(){this.inputpasswordValue=""},clearTips:function(){this.passwordFalse=!1,this.inputValue=""},submit:function(t){var e=this;return n()(a.a.mark(function t(){var s,o,i,n,u;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.submitForm(),e.fullscreen(),setTimeout(function(){!1===e.LoginStatus&&(e.loading.close(),Object(c.J)("登录超时，请重试！"))},1e4),console.log(e.$store.state.menu),e.$store.commit("deleteDataMenu",1),s=e.inputpasswordValue,o=e.inputValue,i="/login?account="+o+"&&password="+s,t.next=10,r.a.request(i,"POST");case 10:n=t.sent,console.log("login",n),"Network Error"==n.message&&(e.passwordFalse=!0,e.tips="网络错误！！！",Object(c.J)(e.tips),e.loading.close(),setTimeout(function(){e.clearTips()},3e3)),e.loading.close(),"success"===(u=n.data.message)?(e.LoginStatus=!0,e.$router.push("/Home"),Object(c.J)(n.data.info),sessionStorage.setItem("user",n.data.data.roles),sessionStorage.setItem("username",n.data.data.user.username),sessionStorage.setItem("token",n.data.data.token),sessionStorage.setItem("name",n.data.data.user.account),sessionStorage.setItem("phone",n.data.data.user.phone),localStorage.setItem("token",n.data.data.token),localStorage.setItem("user",n.data.data.roles),localStorage.setItem("username",n.data.data.user.username),localStorage.setItem("name",n.data.data.user.account),localStorage.setItem("destination",n.data.data.destination),e.$store.commit("permisions",n.data.data.app.children),e.loading.close()):"fail"==u?(e.passwordFalse=!0,e.tips=n.data.info,Object(c.J)(e.tips),setTimeout(function(){e.clearTips()},3e3)):"用户名或密码错误"===u?(e.passwordFalse=!0,e.tips=u,Object(c.J)(u),setTimeout(function(){e.clearTips()},3e3),e.loading.close()):(Object(c.J)(n.data.info),e.tips=n.data.info,setTimeout(function(){e.clearTips()},3e3),e.loading.close());case 16:case"end":return t.stop()}},t,e)}))()},fullscreen:function(){this.loading=this.$loading()},submitForm:function(t){!0===this.checked?(console.log("checked == true"),this.setCookie(this.inputValue,this.inputpasswordValue,7)):""===this.inputValue&&this.clearCookie()},setCookie:function(t,e,s){var o=new Date;o.setTime(o.getTime()+864e5*s),window.document.cookie="userName="+t+";path=/;expires="+o.toGMTString(),window.document.cookie="userPwd="+e+";path=/;expires="+o.toGMTString()},getCookie:function(){if(document.cookie.length>0){console.log("cookie",document.cookie);for(var t=document.cookie.split("; "),e=0;e<t.length;e++){var s=t[e].split("=");"userName"==s[0]?this.inputValue=s[1]:"userPwd"==s[0]&&(this.inputpasswordValue=s[1])}}},clearCookie:function(){this.setCookie("","",-1)}}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"backImage",staticStyle:{width:"100%",height:"100%"},style:t.background},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"containerLogin"},[s("div",{staticClass:"borderBottom"},[s("div",{staticStyle:{flex:"1"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],staticClass:"input",attrs:{type:"text",placeholder:"用户名"},domProps:{value:t.inputValue},on:{focus:function(e){t.showCopy=!1},blur:function(e){t.showCopy=!0},input:function(e){e.target.composing||(t.inputValue=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"borderBottom"},[s("div",{staticStyle:{flex:"1"}},["checkbox"==(t.inputflag?"text":"password")?s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputpasswordValue,expression:"inputpasswordValue"}],staticClass:"input",attrs:{placeholder:"密码",type:"checkbox"},domProps:{checked:Array.isArray(t.inputpasswordValue)?t._i(t.inputpasswordValue,null)>-1:t.inputpasswordValue},on:{focus:function(e){t.showCopy=!1},blur:function(e){t.showCopy=!0},change:function(e){var s=t.inputpasswordValue,o=e.target,a=!!o.checked;if(Array.isArray(s)){var i=t._i(s,null);o.checked?i<0&&(t.inputpasswordValue=s.concat([null])):i>-1&&(t.inputpasswordValue=s.slice(0,i).concat(s.slice(i+1)))}else t.inputpasswordValue=a}}}):"radio"==(t.inputflag?"text":"password")?s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputpasswordValue,expression:"inputpasswordValue"}],staticClass:"input",attrs:{placeholder:"密码",type:"radio"},domProps:{checked:t._q(t.inputpasswordValue,null)},on:{focus:function(e){t.showCopy=!1},blur:function(e){t.showCopy=!0},change:function(e){t.inputpasswordValue=null}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputpasswordValue,expression:"inputpasswordValue"}],staticClass:"input",attrs:{placeholder:"密码",type:t.inputflag?"text":"password"},domProps:{value:t.inputpasswordValue},on:{focus:function(e){t.showCopy=!1},blur:function(e){t.showCopy=!0},input:function(e){e.target.composing||(t.inputpasswordValue=e.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"Login"},[s("div",{staticClass:"submitBtn",on:{click:function(e){return t.submit()}}},[t._m(2)])]),t._v(" "),s("div",{staticClass:"Login"},[s("div",{staticClass:"bottomBtn"},[s("span",{on:{click:function(e){return t.RegisterTo()}}},[t._v("注册")]),t._v(" "),s("span",{on:{click:function(e){return t.resetLoginPassword()}}},[t._v("忘记密码？")])])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!0===t.showCopy,expression:"showCopy===true"}],staticClass:"bottomAbBottom"},[s("span",[t._v("copyright©安志生态2019")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logoImag"},[e("img",{attrs:{src:"static/imgs/login.png",alt:"",srcset:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"APPTitle"},[e("div",[this._v("宝安区治水提质水质动态监测系统")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("span",[this._v("登录")])])}]};var p=s("VU/8")(l,d,!1,function(t){s("+jIG")},"data-v-3f6346e7",null);e.default=p.exports}});
//# sourceMappingURL=70.55711c832fd55ce6345b.js.map