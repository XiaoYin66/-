webpackJsonp([7],{"0hY3":function(t,e){},"7iVo":function(t,e,a){"use strict";var s=a("Xxa5"),i=a.n(s),o=a("exGp"),r=a.n(o),n=a("J/Nn"),l=a("M5WX"),c=a("Fd2+"),u={data:function(){return{token:"",show:!1}},components:{"float-icons":n.a},props:["lasttime","starttime","waterstation"],methods:{handleIcons:function(t){var e=this;return r()(i.a.mark(function t(){var a,s;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.show=!0,e.token=sessionStorage.getItem("token"),a="/station/water-data/request",t.next=5,l.a.request(a,"POST",{lasttime:e.lasttime,starttime:e.starttime,waterstation:e.waterstation},e.token);case 5:s=t.sent,console.log("res",s),"success"===s.data.message||Object(c.J)("当前网络加载延迟，请重试！");case 8:case"end":return t.stop()}},t,e)}))()},parant:function(){}}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("float-icons",{staticClass:"icons-warp",attrs:{padding:"10 10 60 10"}},[a("div",{staticClass:"float-icon-item",on:{click:function(e){return t.handleIcons("Feedback")}}},[a("div",{staticClass:"historyForData"},[a("span",{staticStyle:{color:"#ffffff"}},[t._v("找回数据")])])])]),t._v(" "),a("van-dialog",{attrs:{title:"找回数据","show-cancel-button":""},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("div",{staticClass:"forData"},[t._v("\n       确认找回 "+t._s(t.starttime)+" 00:00:00~"+t._s(t.lasttime)+" 00:00:00的数据吗 ？（注意时分秒）\n    ")])])],1)},staticRenderFns:[]};var h=a("VU/8")(u,d,!1,function(t){a("Zd57")},"data-v-53d12684",null);e.a=h.exports},BIFW:function(t,e){},J5s1:function(t,e,a){"use strict";var s=a("Xxa5"),i=a.n(s),o=a("exGp"),r=a.n(o),n=a("M5WX");a("fMH3");const l={ph:"±0.1L",cod:"10L",ammoniaNitrogen:"0.05L",nitrogen:"0.05L",phosphorus:"0.01L",cuprum:"0.02L",nickel:"0.02L",chromium:"0.01L",prussiate:"0.02L"};var c={data:function(){return{itemContent:[1,1,1,1,1,1,1,1],num:10,refreshing:!1,loading:!1,token:"",showCod:!1,user:"",green:"color:green",hasCode:0,red:"color:red",huanbao:!1,orange:"color:orange",first:!0,dayTime:[]}},filters:{filter:function(t){return null!==t?"number"==typeof t?t.toFixed(3):t:"--"},filterNews:function(t,e,a,s,i){return"无水"===a?"无水":1==e&&4==s?"无水":4===s?l[i]:5===s?"--":null!==t?"number"==typeof t?t.toFixed(3):t:"--"},filterWater:function(t,e,a){return"无水"!==a&&"超标"!==a&&"黄色"!==a&&"-"!==a?t>e?"color:red":"":"-"===a?"":"无水"===a?"color:red":t>e?"color:red":""},filterYellowtToStyle:function(t,e,a){return"无水"!==a&&"超标"!==a&&"黄色"!==a&&"-"!==a?t>e&&t<1.15*e?"color:orange":t>1.15*e?"color:red":"":"-"===a?"":"无水"===a?"color:red":t>e&&t<1.15*e?"color:orange":t>1.15*e?"color:red":""},filterPhStyle:function(t,e,a,s){return"无水"!==s&&"超标"!==s&&"黄色"!==s&&"-"!==s?null!==t&&(t<e||t>a)?"color:red":"":"-"===s?"":"无水"===s?"color:red":null!==t?t<e||t>a?"color:red":"":"--"}},methods:{backTop:function(){var t=this,e=setInterval(function(){var a=Math.floor(-t.scrollTop/5);document.documentElement.scrollTop=document.body.scrollTop=t.scrollTop+a,0===t.scrollTop&&clearInterval(e)},16)},refresh:function(){this.refreshing=!0,this.$refs.container.scrollTop=0,this.num=10,this.initData(this.$store.state.historyData.starttime,this.$store.state.historyData.lasttime,this.$store.state.historyData.waterstation)},load:function(){this.loading=!0,this.num+=5,this.initData(this.$store.state.historyData.starttime,this.$store.state.historyData.lasttime,this.$store.state.historyData.waterstation)},initData:function(t,e,a){var s=this;return r()(i.a.mark(function o(){var r,l,c,u,d,h,v,m;return i.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return!0===s.$store.state.historyStatus&&(s.itemContent=[],s.$store.state.historyStatus=!1),"",r="/station/water-data/list",s.$store.state.historyData.starttime=t,s.$store.state.historyData.lasttime=e,s.$store.state.historyData.waterstation=a,l=a,c=t,u=e,d="no",h=1,v=s.num,i.next=14,n.a.request(r,"POST",{starttime:c,lasttime:u,waterstation:l,isExcel:d,pageNum:h,pageSize:v},s.token);case 14:m=i.sent,s.loading=!1,s.refreshing=!1,console.log("history",m),s.hasCode=m.data.hasCod,console.log(s.hasCode),s.itemContent=m.data.data;case 21:case"end":return i.stop()}},o,s)}))()}},created:function(){this.token=sessionStorage.getItem("token"),this.user=sessionStorage.getItem("user"),"manager"===this.user&&(this.huanbao=!0)},mounted:function(){},destroyed:function(){}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("mu-container",{ref:"container",staticClass:"demo-loadmore-content",staticStyle:{padding:"0"}},[a("mu-load-more",{attrs:{refreshing:t.refreshing,loading:t.loading},on:{refresh:t.refresh,load:t.load}},t._l(t.itemContent,function(e,s){return a("div",{key:s},[a("div",{staticClass:"borderradius border-radius"},[a("div",{staticClass:"headerTable"},[a("div",{staticClass:"timeStyle",staticStyle:{flex:"2"}},[a("span",[t._v(t._s(e.gmtMonitor))])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"manager"!==t.user,expression:"user!=='manager'"}],staticClass:"device",staticStyle:{flex:"1"}},[a("span",[t._v("设备状态")]),t._v(" "),1===e.systemStatus?a("span",{staticStyle:{color:"black"}},[t._v("正常")]):t._e(),t._v(" "),0===e.systemStatus?a("span",{staticStyle:{color:"red"}},[t._v("异常")]):t._e(),t._v(" "),2===e.systemStatus?a("span",{staticStyle:{color:"red"}},[t._v("维护")]):t._e(),t._v(" "),3===e.systemStatus?a("span",{staticStyle:{color:"red"}},[t._v("离线")]):t._e(),t._v(" "),4===e.systemStatus?a("span",{staticStyle:{color:"red"}},[t._v("无水")]):t._e(),t._v(" "),8===e.systemStatus?a("span",{staticStyle:{color:"red"}},[t._v("停运")]):t._e()]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"manager"===t.user,expression:"user==='manager'"}],staticClass:"device",staticStyle:{flex:"1"}},[a("span",[t._v("水质状态")]),t._v(" "),a("span",{style:"-"!==e.waterQuality&&"达标"!==e.waterQuality?t.red:""},[t._v(t._s("黄色"===e.waterQuality?"超标":"-"==e.waterQuality?"--":e.waterQuality))])])]),t._v(" "),a("div",{staticClass:"flexBox"},[a("div",{staticClass:"left"},[a("span",[t._v("pH：")]),t._v(" "),a("span",{style:t._f("filterPhStyle")(e.ph,t.$store.state.factor.ph,t.$store.state.factor.ph1,e.waterQuality)},[t._v(t._s(t._f("filterNews")(e.ph,t.huanbao,e.waterQuality,e.devicePh,"ph")))])]),t._v(" "),a("div",{staticClass:"left"},[a("span",[t._v("氨氮：")]),t._v(" "),a("span",{style:t._f("filterYellowtToStyle")(e.ammoniaNitrogen,t.$store.state.factor.ammoniaNitrogen,e.waterQuality)},[t._v(t._s(t._f("filterNews")(e.ammoniaNitrogen,t.huanbao,e.waterQuality,e.deviceAn,"ammoniaNitrogen")))])]),t._v(" "),a("div",{staticClass:"left"},[a("span",[t._v("总氮：")]),t._v(" "),a("span",{style:t._f("filterYellowtToStyle")(e.nitrogen,t.$store.state.factor.nitrogen,e.waterQuality)},[t._v(t._s(t._f("filterNews")(e.nitrogen,t.huanbao,e.waterQuality,e.deviceN,"nitrogen")))])])]),t._v(" "),a("div",{staticClass:"flexBox"},[a("div",{staticClass:"left"},[a("span",[t._v("总磷：")]),t._v(" "),a("span",{style:t._f("filterYellowtToStyle")(e.phosphorus,t.$store.state.factor.phosphorus,e.waterQuality)},[t._v(t._s(t._f("filterNews")(e.phosphorus,t.huanbao,e.waterQuality,e.deviceP,"phosphorus")))])]),t._v(" "),a("div",{staticClass:"left"},[a("span",[t._v("总铜：")]),t._v(" "),a("span",{style:t._f("filterWater")(e.cuprum,t.$store.state.factor.cuprum,e.waterQuality)},[t._v(t._s(t._f("filterNews")(e.cuprum,t.huanbao,e.waterQuality,e.deviceCu,"cuprum")))])]),t._v(" "),a("div",{staticClass:"left"},[a("span",[t._v("总镍：")]),t._v(" "),a("span",{style:t._f("filterWater")(e.nickel,t.$store.state.factor.nickel,e.waterQuality)},[t._v(t._s(t._f("filterNews")(e.nickel,t.huanbao,e.waterQuality,e.deviceNi,"nickel")))])])]),t._v(" "),a("div",{staticClass:"flexBox"},[a("div",{directives:[{name:"show",rawName:"v-show",value:1!==t.hasCode,expression:"hasCode!==1"}],staticClass:"left"},[a("span",[t._v("总铬：")]),t._v(" "),a("span",{style:t._f("filterWater")(e.chromium,t.$store.state.factor.chromium,e.waterQuality)},[t._v(t._s(t._f("filterNews")(e.chromium,t.huanbao,e.waterQuality,e.deviceCr,"chromium")))])]),t._v(" "),a("div",{staticClass:"left"},[a("span",[t._v("总氰化物：")]),t._v(" "),a("span",{style:t._f("filterYellowtToStyle")(e.prussiate,t.$store.state.factor.prussiate,e.waterQuality)},[t._v(t._s(t._f("filterNews")(e.prussiate,t.huanbao,e.waterQuality,e.devicePr,"prussiate")))])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:2!==t.hasCode,expression:"hasCode!==2"}],staticClass:"left"},[a("span",[t._v("CODcr:")]),t._v(" "),a("span",{style:t._f("filterYellowtToStyle")(e.cod,t.$store.state.factor.cod,e.waterQuality)},[t._v(t._s(t._f("filterNews")(e.cod,t.huanbao,e.waterQuality,e.deviceCod,"cod")))])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:2===t.hasCode||1===t.hasCode,expression:"hasCode===2||hasCode===1"}],staticClass:"left"})])])])}),0)],1)],1)},staticRenderFns:[]};var d=a("VU/8")(c,u,!1,function(t){a("BIFW")},"data-v-450f7cb5",null);e.a=d.exports},P6NF:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("ekPs"),i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"backColor"},[a("div",{staticClass:"headerHistory backgroundNaviBar"},[a("van-nav-bar",{staticClass:"backgroundNaviBar",attrs:{title:"历史数据","left-arrow":"","z-index":"0",border:!1},on:{"click-left":function(){t.$router.go(-1)}}}),t._v(" "),a("div",{staticClass:"backgroundNaviBar",attrs:{id:"showHeader"}},[a("div",{staticClass:"flexHistoryContainer"},[t._m(0),t._v(" "),a("div",{staticClass:"flexBoxHistory"},[a("div",{staticClass:"left",style:t.leftStyle,on:{click:function(e){return t.leftEchart()}}},[a("span",{staticStyle:{"font-size":"12px"}},[t._v("图表")])]),t._v(" "),a("div",{staticClass:"right",style:t.rightStyle,on:{click:function(e){return t.rightTable()}}},[a("span",{staticStyle:{"font-size":"12px"}},[t._v("表格")])])])]),t._v(" "),a("div",{staticClass:"stationNameHistory"},[a("div",{staticClass:"imageSize",attrs:{id:"selectStation"}},[a("div",{staticClass:"flexBoxDayTime"},[a("div",{style:t.one,on:{click:function(e){return t.Day(0)}}},[t._v("当天")]),t._v(" "),a("div",{style:t.three,on:{click:function(e){return t.Day(3)}}},[t._v("近三天")]),t._v(" "),a("div",{style:t.week,on:{click:function(e){return t.Day(7)}}},[t._v("近一周")]),t._v(" "),a("div",{style:t.month,on:{click:function(e){return t.Day(30)}}},[t._v("近一月")])])]),t._v(" "),a("div",{staticClass:"fontSizeStyle",on:{click:t.selectDataPic}},[a("span",[t._v(t._s(t.normal.value1))])])]),t._v(" "),a("div",{staticClass:"timeSelectHistory",on:{click:function(e){return t.openBotttomSheet()}}},[a("div",[a("span",[t._v(t._s(t.start))]),t._v(" -\n          "),a("span",[t._v(t._s(t.end))])])])])],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.showTable,expression:"!showTable"}],staticClass:"contanerMain",staticStyle:{padding:"10px","margin-top":"224px",background:"#faf8f8"},style:t.margin},[t._m(1)]),t._v(" "),a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showTable,expression:"showTable"}],staticStyle:{padding:"10px","margin-top":"224px",background:"#faf8f8"},style:t.margin},[a("v-table",{ref:"historyTable"})],1)]),t._v(" "),a("mu-container",[a("mu-bottom-sheet",{attrs:{open:t.open},on:{"update:open":function(e){t.open=e}}},[a("mu-list",{on:{"item-click":t.closeBottomSheet}},[a("mu-list-item",[a("div",{staticClass:"titleselect"},[a("span",[t._v("开始时间：")])]),t._v(" "),a("div",{staticClass:"select",on:{click:function(e){return t.selectStartTime("start")}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.value3,expression:"value3"}],staticClass:"input",attrs:{type:"text",disabled:""},domProps:{value:t.value3},on:{input:function(e){e.target.composing||(t.value3=e.target.value)}}})])]),t._v(" "),a("mu-list-item",[a("div",{staticClass:"titleselect"},[a("span",[t._v("结束时间：")])]),t._v(" "),a("div",{staticClass:"select",on:{click:function(e){return t.selectLastTime("end")}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.value4,expression:"value4"}],staticClass:"input",attrs:{type:"text",disabled:""},domProps:{value:t.value4},on:{input:function(e){e.target.composing||(t.value4=e.target.value)}}})])]),t._v(" "),a("mu-list-item",[a("div",{staticClass:"btnBottom"},[a("div",{staticClass:"left",on:{click:function(e){return t.closeBottomSheet()}}},[t._v("取消")]),t._v(" "),a("div",{staticClass:"right backgroundNaviBar",style:"background:"+t.$store.state.color,on:{click:function(e){return t.confirmData()}}},[t._v("确定")])])])],1)],1)],1),t._v(" "),a("mu-container",[a("mu-bottom-sheet",{attrs:{open:t.openTime},on:{"update:open":function(e){t.openTime=e}}},[a("mu-list",{on:{"item-click":t.closeBottomSheet}},[a("van-datetime-picker",{attrs:{type:"date","min-date":t.minDate},on:{confirm:t.confirmDate,cancel:t.closeTime},model:{value:t.currentDate,callback:function(e){t.currentDate=e},expression:"currentDate"}})],1)],1)],1),t._v(" "),a("HistoryForData",{directives:[{name:"show",rawName:"v-show",value:t.showOprate,expression:"showOprate"}],attrs:{lasttime:t.value4,starttime:t.value3,waterstation:t.normal.value1}}),t._v(" "),a("van-popup",{staticStyle:{"z-index":"99999"},attrs:{position:"bottom"},model:{value:t.showStation,callback:function(e){t.showStation=e},expression:"showStation"}},[a("van-picker",{attrs:{columns:t.columns,"show-toolbar":"","close-on-click-overlay":!1,title:"选择站点","default-index":0},on:{cancel:t.closeSelect,confirm:t.onChange}})],1),t._v(" "),a("van-calendar",{attrs:{type:"range","show-confirm":!1,"min-date":t.minDate,"max-date":t.maxDate,"default-date":t.defaultTime,color:"#328efb"},on:{confirm:t.onConfirm},model:{value:t.showTimeRange,callback:function(e){t.showTimeRange=e},expression:"showTimeRange"}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"timeSelectHis"},[e("span",[this._v("筛选条件")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"border-radius"},[a("div",{staticClass:"borderEchart border-radius"},[a("div",{staticClass:"echartHis",attrs:{id:"mainpH"}})]),t._v(" "),a("div",{staticClass:"borderEchart border-radius",attrs:{id:"showCod"}},[a("div",{staticClass:"echartHis",attrs:{id:"maincod"}})]),t._v(" "),a("div",{staticClass:"borderEchart border-radius"},[a("div",{staticClass:"echartHis",attrs:{id:"mainammoniaNitrogen"}})]),t._v(" "),a("div",{staticClass:"borderEchart border-radius"},[a("div",{staticClass:"echartHis",attrs:{id:"mainnitrogen"}})]),t._v(" "),a("div",{staticClass:"borderEchart border-radius"},[a("div",{staticClass:"echartHis",attrs:{id:"mainphosphorus"}})]),t._v(" "),a("div",{staticClass:"borderEchart border-radius"},[a("div",{staticClass:"echartHis",attrs:{id:"maincuprum"}})]),t._v(" "),a("div",{staticClass:"borderEchart border-radius"},[a("div",{staticClass:"echartHis",attrs:{id:"mainnickel"}})]),t._v(" "),a("div",{staticClass:"borderEchart border-radius",attrs:{id:"showGe"}},[a("div",{staticClass:"echartHis",attrs:{id:"mainchromium"}})]),t._v(" "),a("div",{staticClass:"borderEchart border-radius"},[a("div",{staticClass:"echartHis",staticStyle:{"margin-bottom":"0px"},attrs:{id:"mainprussiate"}})])])}]};var o=function(t){a("0hY3")},r=a("VU/8")(s.a,i,!1,o,"data-v-c8a10b4e",null);e.default=r.exports},Zd57:function(t,e){},ekPs:function(t,e,a){"use strict";(function(t){var s=a("Xxa5"),i=a.n(s),o=a("exGp"),r=a.n(o),n=a("bOdI"),l=a.n(n),c=a("J5s1"),u=a("7iVo"),d=a("M5WX"),h=a("vyI7"),v=(a("h8yb"),a("4OWX"),a("NzUi")),m=a("7+uW"),f=a("Fd2+");a("XLwt");m.default.use(f.d),m.default.use(f.J).use(f.z).use(f.A),m.default.use(f.z);var p=document.documentElement.clientHeight||document.body.clientHeight,w=Math.floor((p-249-40)/42);e.a={name:"Assistant",data:function(){var t;return t={btnFlag:!1,month:"border:none;color:rgb(219, 228, 247)",week:"border:none;color:rgb(219, 228, 247)",three:"border:none;color:rgb(219, 228, 247)",start:"",end:"",showOprate:!1,imageListCasoul:[1,2,3,4],status1:!0,status2:!0,msg:"",options:[],now:new Date,value3:d.a.DateTime(0),value4:d.a.DateTime(0),normal:{value1:""},checkbox:{value1:[],value2:!1,value3:!1},checkboxContent:[{id:1,content:"标液标准"},{id:2,content:"标准曲线"},{id:3,content:"精密度检查"}],checkAll:!0,count:0,res:[],num:"",open:!1,currentDate:new Date,minDate:new Date("1970-07-01"),openTime:!1,showTime:"",title:"",factorStatus:"false",leftStyle:"",rightStyle:"border:none;color:#88affd",showTable:!1,pageSize:w,showStation:!1,columns:this.$store.state.menu,colorDay:"border:none;color:rgb(219, 228, 247)",one:"",startx:"",starty:"",margin:"",showTimeRange:!1},l()(t,"minDate",new Date(2019,0,1)),l()(t,"maxDate",new Date),l()(t,"defaultTime",new Date),l()(t,"showGe",!0),l()(t,"showCod",!0),l()(t,"hasCod",0),t},created:function(){var t=this.normal.value1;this.showFactor(t)},methods:{backTop:function(){var t=this,e=setInterval(function(){var a=Math.floor(-t.scrollTop/5);document.documentElement.scrollTop=document.body.scrollTop=t.scrollTop+a,0===t.scrollTop&&clearInterval(e)},16)},showFactor:function(e){"沙井一期进水口"!==e&&"沙井二期进水口"!==e&&"福永水质净化厂前池"!==e&&"固戍水质净化厂"!==e&&"中途泵站"!==e?(t("#showCod").slideUp(200),t("#showGe").slideDown(200)):"中途泵站"===e?(t("#showCod").slideDown(200),t("#showGe").slideDown(200)):(t("#showGe").slideUp(200),t("#showCod").slideDown(200)),console.log(11111111111)},onConfirm:function(t){this.value3=d.a.filter(t[0]),this.value4=d.a.filter(t[1]),this.initData(),this.showTimeRange=!1},closeSelect:function(){this.showStation=!1,this.dataScoll()},Day:function(t){switch(this.value3=d.a.DateTime(t),this.value4=d.a.DateTime(0),this.$store.state.historyStatus=!0,t){case 0:this.one="",this.three=this.colorDay,this.month=this.colorDay,this.week=this.colorDay;break;case 3:this.one=this.colorDay,this.three="",this.month=this.colorDay,this.week=this.colorDay;break;case 7:this.one=this.colorDay,this.three=this.colorDay,this.month=this.colorDay,this.week="";break;case 30:this.one=this.colorDay,this.three=this.colorDay,this.month="",this.week=this.colorDay;break;default:this.one=this.colorDay,this.three=this.colorDay,this.month=this.colorDay,this.week=this.colorDay}this.initData()},onChange:function(t){var e=this;return r()(i.a.mark(function a(){var s;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e.showStation=!1,e.normal.value1=t,s=t,console.log(t),e.dataScoll(),a.next=7,e.initData(t);case 7:return a.next=9,e.showFactor(s);case 9:case"end":return a.stop()}},a,e)}))()},leftEchart:function(){this.initData(),this.rightStyle="border:none;color:#88affd",this.leftStyle="",this.showTable=!1},rightTable:function(){this.leftStyle="border:none;color:#88affd",this.rightStyle="",this.showTable=!0},confirmDate:function(t){switch(this.openTime=!1,this.showTime){case"start":this.value3=d.a.filter(t);break;case"end":this.value4=d.a.filter(t)}},closeTime:function(){this.openTime=!1},selectDataPic:function(){this.open=!1;this.showStation=!0,window.removeEventListener("touchstart",this.startFun,!0),window.removeEventListener("touchend",this.endFunc,!0)},selectStartTime:function(t){this.openTime=!0,this.showTime=t},selectLastTime:function(t){this.openTime=!0,this.showTime=t},confirmData:function(){var t=this;this.open=!1,setTimeout(function(){t.initData(null)},100)},openBotttomSheet:function(){this.showTimeRange=!0},closeBottomSheet:function(){this.open=!1},initData:function(t){var e=this;return r()(i.a.mark(function a(){var s,o,r,n,l,c,u,h,m,p;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return s="",null!==t&&void 0!==t?s=e.formenu(t):(s=e.normal.value1,e.formenu(s)),e.title=s,o=0,r="",n="/station/water-data/form",l=e.value3,c=e.value4,u="no",h=null,m=null,o=d.a.dateTimeDev(l,c),a.next=14,d.a.request(n,"POST",{starttime:l,lasttime:c,waterstation:s,pageNum:h,pageSize:m,isExcel:u},e.token);case 14:if(p=a.sent,e.start=d.a.filterDatePoint(e.value3),e.end=d.a.filterDatePoint(e.value4),e.res=p,e.hasCod=p.data.hasCod,console.log("form",p),v.a.initHistoryDataEchartsPH(p.data.data,e.$store.state.type,p.data.hasCod),e.$refs.historyTable.initData(l,c,e.normal.value1),0!==o){a.next=26;break}o="24小时",a.next=32;break;case 26:if(!(o<0)){a.next=31;break}return Object(f.J)("时间筛选有误，请重新选择"),a.abrupt("return");case 31:o+="天";case 32:0===p.data.data.length&&(r=",当前水站信息数据为空，请调整区间或者查看其他站点"),Object(f.J)("数据为最近"+o+"的历史数据"+r);case 34:case"end":return a.stop()}},a,e)}))()},imageListCasoulClik:function(t){switch(t){case 0:this.status1=!0,this.status2=!1;break;default:this.status1=!1,this.status2=!0}},formenu:function(t){for(var e=this.$store.state.menu,a=0;a<e.length;a++){if(t===e[a].slice(0,7))return e[a]}},dataScoll:function(){window.addEventListener("touchstart",this.startFun,!0),window.addEventListener("touchend",this.endFunc,!0)},getAngle:function(t,e){return 180*Math.atan2(e,t)/Math.PI},startFun:function(t){this.startx=t.touches[0].pageX,this.starty=t.touches[0].pageY},endFunc:function(e){var a,s;switch(a=e.changedTouches[0].pageX,s=e.changedTouches[0].pageY,this.getDirection(this.startx,this.starty,a,s)){case 0:console.log("未滑动！");break;case 1:this.margin="margin-top:50px",t("#showHeader").slideUp(200);break;case 2:t("#showHeader").slideDown(200),this.margin="margin-top:224px";break;case 3:console.log("向左！"),this.leftEchart();break;case 4:console.log("向右！"),this.rightTable()}},getDirection:function(t,e,a,s){var i=a-t,o=s-e,r=0;if(Math.abs(i)<2&&Math.abs(o)<2)return r;var n=this.getAngle(i,o);return n>=-135&&n<=-45?r=1:n>45&&n<135?r=2:n>=135&&n<=180||n>=-180&&n<-135?r=3:n>=-45&&n<=45&&(r=4),r}},mounted:function(){var e=this;return r()(i.a.mark(function a(){var s,o;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t("#showCod").slideUp(200),e.hasCod=0,window.addEventListener("touchstart",e.startFun,!0),window.addEventListener("touchend",e.endFunc,!0),s=sessionStorage.getItem("user"),e.token=sessionStorage.getItem("token"),"operator"!==s&&"admin"!==s||(e.showOprate=!0),o="",o=""!==e.$route.query.stationName&&void 0!==e.$route.query.stationName&&null!==e.$route.query.stationName?e.$route.query.stationName:e.$store.state.menu[0],e.title=o,e.normal.value1=o,a.next=13,e.initData(o);case 13:e.status2=!1,console.log(w),e.rightTable();case 16:case"end":return a.stop()}},a,e)}))()},destroyed:function(){window.removeEventListener("touchstart",this.startFun,!0),window.removeEventListener("touchend",this.endFunc,!0)},components:{myTableData:h.default,HistoryForData:u.a,"v-table":c.a}}}).call(e,a("7t+N"))}});
//# sourceMappingURL=7.72a77c32c2e20fadb27d.js.map