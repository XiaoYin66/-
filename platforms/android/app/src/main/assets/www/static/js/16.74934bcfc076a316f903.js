webpackJsonp([16],{"43vw":function(t,e){},Ijnd:function(t,e){},Ks7w:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});s("fRk2");var n=s("bOdI"),a=s.n(n),o={data:function(){var t;return t={show:!1,msg:"hello",list1:[{name:"总览",icon:"language"}],menuArr:[{HomeStatus:!1,DayStatus:!1,RunControlStatus:!1,systemStatus:!1,realData:!1,warningControl:!1,eventControl:!1,deviceControl:!1,deviceAbnormal:!1}],menu2:[]},a()(t,"msg","hello 数据详情"),a()(t,"shift","0"),t},props:{shiftProps:String},methods:{change:function(t){console.log(t),"0"==t?this.$router.replace("/Home"):"1"==t?this.$router.replace("/DayControl"):"2"==t?this.$router.replace("/MonitorPoint"):"3"==t?this.$router.replace("/Control"):"4"==t&&this.$router.replace("/Settings"),this.shift=t,sessionStorage.setItem("navItem",t)},initmenu:function(){var t;t=sessionStorage.getItem("user").split(","),console.log(t),this.menu2.push(t),console.log("user111",this.menu2);for(var e=0;e<this.menu2.length;e++)this.Menu=this.menu2[e],console.log("32",this.Menu);var s=[];s=this.Menu,console.log("hello",s),-1!=s.indexOf("实时数据")?this.menuArr.realData=!0:this.menuArr.realData=!1,-1!=s.indexOf("预警管理")?this.menuArr.warningControl=!0:this.menuArr.warningControl=!1,-1!=s.indexOf("事件管理")?this.menuArr.eventControl=!0:this.menuArr.eventControl=!1,-1!=s.indexOf("设备异常管理")?this.menuArr.deviceControl=!0:this.menuArr.deviceControl=!1,-1!=s.indexOf("设备异常统计")&&"运维人员"==this.user?this.menuArr.deviceAbnormal=!0:this.menuArr.deviceAbnormal=!1},Data:function(){this.$router.replace("/RealData")},calls:function(){this.$router.replace("/WarningControl")},event:function(){this.$router.replace("/Event")},equipment:function(){},device:function(){this.$router.replace("/Data")},menu:function(){this.menuArr.HomeStatus=sessionStorage.getItem("HomeStatus"),"false"==this.menuArr.HomeStatus?this.menuArr.HomeStatus=!1:this.menuArr.HomeStatus=!0,console.log(this.menuArr.HomeStatus),this.menuArr.DayStatus=sessionStorage.getItem("DayStatus"),"false"==this.menuArr.DayStatus?this.menuArr.DayStatus=!1:this.menuArr.DayStatus=!0,this.menuArr.RunControlStatus=sessionStorage.getItem("RunControlStatus"),"false"==this.menuArr.RunControlStatus?this.menuArr.RunControlStatus=!1:this.menuArr.RunControlStatus=!0,this.menuArr.systemStatus=sessionStorage.getItem("systemStatus"),"false"==this.menuArr.systemStatus?this.menuArr.systemStatus=!1:this.menuArr.systemStatus=!0}},created:function(){this.user=sessionStorage.getItem("lastname"),this.menu(),this.initmenu(),console.log("0",sessionStorage.getItem("navItem")),null==sessionStorage.getItem("navItem")?this.shift="0":this.shift=sessionStorage.getItem("navItem")},mounted:function(){}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"bottomFooter"}},t._l(t.list1,function(e,n){return s("mu-container",{key:n,staticStyle:{"max-width":"100vw",width:"100vw"},attrs:{id:"bottomFooter"}},[s("mu-bottom-nav",{attrs:{value:t.shift},on:{"update:value":function(e){t.shift=e},change:t.change}},[s("mu-bottom-nav-item",{directives:[{name:"show",rawName:"v-show",value:t.menuArr.HomeStatus,expression:"menuArr.HomeStatus"}],attrs:{value:"0",title:"总览",icon:"language"}}),t._v(" "),s("mu-bottom-nav-item",{directives:[{name:"show",rawName:"v-show",value:t.menuArr.DayStatus,expression:"menuArr.DayStatus"}],attrs:{value:"1",title:"日常管理",icon:"event"}}),t._v(" "),s("mu-bottom-nav-item",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],attrs:{value:"2",title:"监控点",icon:"visibility"}}),t._v(" "),s("mu-bottom-nav-item",{directives:[{name:"show",rawName:"v-show",value:t.menuArr.RunControlStatus,expression:"menuArr.RunControlStatus"}],attrs:{value:"3",title:"运维管理",icon:"build"}}),t._v(" "),s("mu-bottom-nav-item",{directives:[{name:"show",rawName:"v-show",value:t.menuArr.systemStatus,expression:"menuArr.systemStatus"}],attrs:{value:"4",title:"设置",icon:"settings"}})],1)],1)}),1)},staticRenderFns:[]};var i=s("VU/8")(o,r,!1,function(t){s("Ijnd")},null,null).exports,u=(sessionStorage.getItem("token"),{data:function(){return{citys:["川菜店","鲁菜店","粤菜店","湘菜店"],filterable:{value1:"",value2:[],value3:[]},menuArr:[{HomeStatus:!1,DayStatus:!1,RunControlStatus:!1,systemStatus:!1}],list:[],color:"color:green",number:0,msg:"hello 数据详情",list1:[{name:"总览",icon:"language"}],labelPosition:"top",form:{input:"",select:"",date:"",radio:"",checkbox:[],switch:!1,slider:30,textarea:"",token:""},name:null}},methods:{fullscreen:function(){this.loading=this.$loading()},reset:function(){this.name=null,this.filterable.value1="",this.http()},menu:function(){var t=sessionStorage.getItem("HomeStatus");this.menuArr.HomeStatus="false"!=t,console.log(this.menuArr.HomeStatus);var e=sessionStorage.getItem("DayStatus");this.menuArr.DayStatus="false"!=e;var s=sessionStorage.getItem("RunControlStatus");this.menuArr.RunControlStatus="false"!=s;var n=sessionStorage.getItem("systemStatus");this.menuArr.systemStatus="false"!=n},http:function(){var t=this;console.log("token",e);var e=this.token,s=this.name;this.$http.post("http://47.112.16.168:8800/app/monitoring",{name:s},{headers:{token:e}}).then(function(e){console.log("res.data",e.data),t.list=e.data.devices,t.citys=e.data.name,console.log(t.list),t.number=t.list.length,t.numberInit(),t.loading.close()}).catch(function(t){console.log(t)})},search:function(t){this.name=t,this.http()},details:function(t){this.$router.push({path:"/PointDetails",query:{devicenoname:t}})},numberInit:function(){this.number>100&&this.number<1e3?this.number="0"+this.number:this.number>10&&this.number<100?this.number="00"+this.number:this.number="000"+this.number}},beforeCreate:function(){},created:function(){this.fullscreen(),this.menu(),this.http()},mounted:function(){this.numberInit()},components:{MyFooter:i}}),l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("mu-appbar",{staticClass:"header",staticStyle:{width:"100%"},attrs:{color:"primary"}},[s("span",[t._v("监控点")]),t._v(" "),s("mu-menu",{attrs:{slot:"right"},slot:"right"},[s("mu-button",{attrs:{flat:""},on:{click:t.reset}},[s("mu-icon",{attrs:{value:"loop"}})],1)],1)],1),t._v(" "),s("div",{staticClass:"header1"},[t._m(0),t._v(" "),s("div",{staticClass:"number"},[s("p",[t._v(t._s(t.number))])]),t._v(" "),t._m(1)]),t._v(" "),s("div",{staticClass:"content"},[s("mu-row",[s("mu-col",{attrs:{span:"1"}}),t._v(" "),s("mu-col",{attrs:{span:"9"}},[s("mu-form",{staticClass:"mu-demo-form",attrs:{model:t.form,"label-position":t.labelPosition,"label-width":"100"}},[s("mu-select",{attrs:{label:"",filterable:"","full-width":""},on:{change:t.search},model:{value:t.filterable.value1,callback:function(e){t.$set(t.filterable,"value1",e)},expression:"filterable.value1"}},t._l(t.citys,function(t,e){return s("mu-option",{key:e,attrs:{label:t,value:t}})}),1)],1)],1),t._v(" "),s("mu-col",{attrs:{span:"2"}})],1)],1),t._v(" "),s("div",{staticClass:"dataContent"},t._l(t.list,function(e,n){return s("div",{key:n},[s("div",{staticClass:"title1"},[s("span",[t._v(t._s(e.monitoringpoint))])]),t._v(" "),s("div",[s("mu-row",[s("mu-col",{attrs:{span:"5",offset:"2"}},[s("div",[s("span",[t._v("公司：")]),t._v(" "),s("span",[t._v(t._s(e.restaurant))])])]),t._v(" "),s("mu-col",{attrs:{span:"5",offset:""}},[s("div",[s("span",[t._v("区域：")]),t._v(" "),s("span",[t._v(t._s(e.area))])])]),t._v(" "),s("mu-col",{attrs:{span:"5",offset:"2"}},[s("div",[s("span",[t._v("菜系：")]),t._v(" "),s("span",[t._v(t._s(e.foodType))])])]),t._v(" "),s("mu-col",{attrs:{span:"5",offset:""}},[s("div",[s("span",[t._v("街道：")]),t._v(" "),s("span",[t._v(t._s(e.street))])])]),t._v(" "),s("mu-col",{attrs:{span:"5",offset:"2"}},[s("div",[s("span",[t._v("设备号：")]),t._v(" "),s("span",[t._v(t._s(e.devicenoname))])])]),t._v(" "),s("mu-col",{attrs:{span:"5",offset:""}},[s("div",[s("span",[t._v("状态：")]),t._v(" "),1==e.di0&&1==e.di1?s("span",{style:t.color},[t._v("正常")]):t._e(),t._v(" "),1!=e.di0&&1==e.di1||1==e.di0&&1!=e.di1?s("span",{style:t.color},[t._v("异常")]):t._e(),t._v(" "),0==e.di0&&0==e.di1?s("span",{style:t.color},[t._v("离线")]):t._e()])]),t._v(" "),s("mu-col",{attrs:{span:"5",offset:"2"}},[s("div",[s("span",[t._v("详情：")])])]),t._v(" "),s("mu-col",{attrs:{span:"5",offset:""}},[s("div",[s("a",{on:{click:function(s){return t.details(e.devicenoname)}}},[t._v("点击查看>")])])])],1)],1)])}),0),t._v(" "),s("MyFooter")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("span",[this._v("餐饮油烟在线监控")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("span",[this._v("接入监控点数")])])}]};var m=s("VU/8")(u,l,!1,function(t){s("43vw")},"data-v-f8ae67f8",null);e.default=m.exports},fRk2:function(t,e,s){t.exports=s.p+"static/img/details5.b7df1f9.jpg"}});
//# sourceMappingURL=16.74934bcfc076a316f903.js.map