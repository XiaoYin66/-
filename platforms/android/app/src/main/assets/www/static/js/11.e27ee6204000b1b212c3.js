webpackJsonp([11],{"+MLA":function(t,e,s){var a=s("EqjI"),i=s("06OY").onFreeze;s("uqUo")("freeze",function(t){return function(e){return t&&a(e)?t(i(e)):e}})},O4R0:function(t,e,s){s("+MLA"),t.exports=s("FeBl").Object.freeze},Wgqz:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("u2KI"),i=s.n(a),n=s("Xxa5"),o=s.n(n),l=s("exGp"),c=s.n(l),r=s("M5WX"),u=s("kiaj"),d=s("Fd2+");s("7+uW").default.use(d.l);var m={data:function(){return{station:"",dateTime:r.a.filterTime(new Date),arr:[],itemListContent:[],open:!1,itemRecentData:[],select:0,colorB:"",address:"",lng:"",lat:"",token:"",carId:0,show:!1,openFullscreen:!1,result:[],list:[],showCamera:!1,actions:[{name:"拍照"},{name:"相册"}]}},created:function(){var t=this;return c()(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.token=sessionStorage.getItem("token"),t.arr=t.$store.state.enterpriseNum,t.list=t.$store.state.menu,e.next=5,t.initData();case 5:case"end":return e.stop()}},e,t)}))()},mounted:function(){},methods:{selectBtn:function(t,e){console.log(t.name),this.showCamera=!1,0!==this.carId?u.a.cameraTakePoint(e,this.carId):Object(d.J)("请选择当前最新的数据，再上传图片")},onCancel:function(){this.showCamera=!1,Object(d.J)("cancel")},toggle:function(t){this.$refs.checkboxes[t].toggle()},initData:function(){var t=this;return c()(o.a.mark(function e(){var s,a,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s="/mobile/point/data",a=t.$store.state.vehicleIdStatus,e.next=4,r.a.request(s,"GET",{vehicleId:a},t.token);case 4:n=e.sent,console.log(n),t.itemListContent=i()(n.data.data),t.itemRecentData=i()(n.data.data);case 8:case"end":return e.stop()}},e,t)}))()},selectDataPicStation:function(){var t=this;new PickerView({bindElem:classPicstation,data:this.arr,title:"选择点位",leftText:"取消",rightText:"确定",rightFn:function(e){switch(console.log(e[0]),e[0]){case"其他":t.show=!0;break;default:t.station=e[0]}}})},submit:function(){var t=this;return c()(o.a.mark(function e(){var s,a,i,n,l,c;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.carId){e.next=4;break}Object(d.J)("请选择当前最新数据！"),e.next=16;break;case 4:return e.next=6,r.a.filterTime(new Date);case 6:return t.dataTime=e.sent,console.log(t.dataTime),s=t.carId,a=t.station,i=t.$store.state.routingName,n="/mobile/point",l=[],c=[],e.next=16,t.$http.post(n,{pollutantName:a,routingName:i,dataId:s}).then(function(e){if(console.log("dian",e),"success"===e.data.message){if(""!==t.$route.query.name&&void 0!==t.$route.query.name){console.log("store",t.$store.state.pointName),c=t.$store.state.pointName;for(var n=0;n<c.length;n++){var o=c[n].id;t.$route.query.id===o&&(c[n]={time:r.a.filterTime(new Date),pollutantName:a,routingName:i,dataId:s,id:t.$store.state.id++})}t.$store.commit("pointDataList",c),Object(d.J)("点位信息已经重新修改"),Object(d.w)({type:"warning",message:"车辆准备出库，请谨慎驾驶车辆，遵守交规行驶，谢谢！",duration:5e3})}else(l=t.$store.state.pointName).push({time:r.a.filterTime(new Date),pollutantName:a,routingName:i,dataId:s,id:t.$store.state.id++}),Object(d.J)("新增点位成功"),t.$store.commit("pointDataList",l);t.$router.go(-1)}}).catch(function(t){console.log(t)});case 16:case"end":return e.stop()}},e,t)}))()},closeBottomSheet:function(){this.open=!1},clickDataBottom:function(t,e){this.open=!0,this.select=t;var s;s=this.itemListContent;for(var a=0;a<s.length;a++){e===s[a].id&&(this.itemListContent=[],this.itemListContent.push(s[a]),this.carId=e)}},btnSelect:function(t,e){console.log(this.select),this.open=!1;for(var s=0;s<this.itemRecentData.length;s++)this.itemRecentData[s].imgShow=!1;this.itemRecentData[this.select].imgShow=!0},getposition:function(t){var e=this;navigator.vibrate(500);var s={msg:""};navigator.geolocation.getCurrentPosition(function(t){console.log("position",t);var s=coordtransform.wgs84togcj02(Number(t.coords.longitude),Number(t.coords.latitude));console.log(s),e.lng=s[0],e.lat=s[1],e.getGaoDE(s[0],s[1])},function(t){s.msg="code: "+t.code+"\nmessage: "+t.message+"\n",alert(s.msg),console.log(s.msg)},{maximumAge:3e4,timeout:3e4,enableHighAccuracy:!0})},getGaoDE:function(t,e){var s,a=this,i=new AMap.LngLat(Number(t),Number(e));function n(t){console.log("params",t),a.address=t.regeocode.formattedAddress}AMap.plugin(["AMap.Geocoder"],function(){s=new AMap.Geocoder({radius:1e3,extensions:"all"}),AMap.event.addListener(s,"complete",n),s.getAddress(i)})}}},v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("mu-appbar",{staticClass:"header",staticStyle:{width:"100%"},attrs:{color:"#4ed995"}},[s("a",{on:{click:function(){t.$router.go(-1)}}},[s("mu-button",{staticClass:"icon",attrs:{slot:"left",icon:"",size:"20"},slot:"left"},[s("mu-icon",{attrs:{value:"keyboard_arrow_left"}})],1)],1),t._v(" "),s("span",[t._v("点位信息")])]),t._v(" "),s("div",{staticClass:"Content"},[t._m(0),t._v(" "),s("div",[s("div",{staticClass:"containerMain"},[s("div",{staticClass:"flexContainer"},[t._m(1),t._v(" "),s("div",{staticClass:"select",attrs:{id:"classPicstation"},on:{click:t.selectDataPicStation}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.station,expression:"station"}],staticClass:"input",attrs:{type:"text",placeholder:"请输入当前的站点名称",disabled:""},domProps:{value:t.station},on:{input:function(e){e.target.composing||(t.station=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"flexContainer"},[t._m(2),t._v(" "),s("div",{staticClass:"select"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.dateTime,expression:"dateTime"}],staticClass:"input",staticStyle:{background:"white"},attrs:{type:"text",disabled:"",placeholder:"时间为当前系统提交时间"},domProps:{value:t.dateTime},on:{input:function(e){e.target.composing||(t.dateTime=e.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"containerMain"},[s("div",{staticClass:"flexContainer"},[t._m(3),t._v(" "),s("div",{staticClass:"select",on:{click:t.getposition}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],staticClass:"input",staticStyle:{background:"white"},attrs:{type:"text",disabled:"",placeholder:"点击获取当前地址"},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"flexContainer"},[t._m(4),t._v(" "),s("div",{staticClass:"select"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.lng,expression:"lng"}],staticClass:"input",attrs:{type:"text",placeholder:"当前经度",disabled:""},domProps:{value:t.lng},on:{input:function(e){e.target.composing||(t.lng=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"flexContainer"},[t._m(5),t._v(" "),s("div",{staticClass:"select"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.lat,expression:"lat"}],staticClass:"input",staticStyle:{background:"white"},attrs:{type:"text",disabled:"",placeholder:"当前纬度"},domProps:{value:t.lat},on:{input:function(e){e.target.composing||(t.lat=e.target.value)}}})])])]),t._v(" "),t._m(6),t._v(" "),t._l(t.itemRecentData,function(e,a){return s("div",{key:a,staticClass:"containerMain"},[s("div",{staticClass:"flexContainer",on:{click:function(s){return t.clickDataBottom(a,e.id)}}},[s("div",[t._v("时间：")]),t._v(" "),s("div",{staticClass:"flex"},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.imgShow,expression:"item.imgShow"}],staticClass:"imageSize"},[s("img",{attrs:{src:"static/img/15.png",alt:""}})]),t._v(" "),t._m(7,!0)])])])}),t._v(" "),t._m(8),t._v(" "),s("div",{staticClass:"backPic"},[s("div",{on:{click:function(){t.showCamera=!0}}},[s("img",{attrs:{src:"static/img/110.png",alt:""}})])]),t._v(" "),s("div",{staticClass:"submit",on:{click:t.submit}},[s("span",[t._v("提交点位信息")])])],2)]),t._v(" "),s("mu-container",[s("mu-bottom-sheet",{attrs:{open:t.open},on:{"update:open":function(e){t.open=e}}},t._l(t.itemListContent,function(e,a){return s("mu-list",{key:a,on:{"item-click":t.closeBottomSheet}},[s("mu-sub-header",[t._v("时间："+t._s(e.gmtCreate))]),t._v(" "),s("mu-list-item",{staticClass:"bottomBorder"},[s("div",{staticClass:"flexContent"},[s("div",{staticClass:"titleselect"},[t._v("pH")]),t._v(" "),s("div",{staticClass:"select"},[s("input",{staticClass:"input right",attrs:{type:"text",disabled:""},domProps:{value:e.ph}})])])]),t._v(" "),s("mu-list-item",{staticClass:"bottomBorder"},[s("div",{staticClass:"flexContent"},[s("div",{staticClass:"titleselect"},[t._v("总铜")]),t._v(" "),s("div",{staticClass:"select"},[s("input",{staticClass:"input right",attrs:{type:"text",disabled:""},domProps:{value:e.cuprum+"  mg/L"}})])])]),t._v(" "),s("mu-list-item",{staticClass:"bottomBorder"},[s("div",{staticClass:"flexContent"},[s("div",{staticClass:"titleselect"},[t._v("总氮")]),t._v(" "),s("div",{staticClass:"select"},[s("input",{staticClass:"input right",attrs:{type:"text",disabled:""},domProps:{value:e.nitrogen+"  mg/L"}})])])]),t._v(" "),s("mu-list-item",{staticClass:"bottomBorder"},[s("div",{staticClass:"flexContent"},[s("div",{staticClass:"titleselect"},[t._v("总磷")]),t._v(" "),s("div",{staticClass:"select"},[s("input",{staticClass:"input right",attrs:{type:"text",disabled:""},domProps:{value:e.phosphorus+"  mg/L"}})])])]),t._v(" "),s("mu-list-item",{staticClass:"bottomBorder"},[s("div",{staticClass:"flexContent"},[s("div",{staticClass:"titleselect"},[t._v("总铬")]),t._v(" "),s("div",{staticClass:"select"},[s("input",{staticClass:"input right",attrs:{type:"text",disabled:""},domProps:{value:e.chromium+"  mg/L"}})])])]),t._v(" "),s("mu-list-item",{staticClass:"bottomBorder"},[s("div",{staticClass:"flexContent"},[s("div",{staticClass:"titleselect"},[t._v("总镍")]),t._v(" "),s("div",{staticClass:"select"},[s("input",{staticClass:"input right",attrs:{type:"text",disabled:""},domProps:{value:e.nickel+"  mg/L"}})])])]),t._v(" "),s("mu-list-item",{staticClass:"bottomBorder"},[s("div",{staticClass:"flexContent"},[s("div",{staticClass:"titleselect"},[t._v("总氰化物")]),t._v(" "),s("div",{staticClass:"select"},[s("input",{staticClass:"input right",attrs:{type:"text",disabled:""},domProps:{value:e.prussiate+"  mg/L"}})])])]),t._v(" "),s("mu-list-item",{staticClass:"bottomBorder"},[s("div",{staticClass:"flexContent"},[s("div",{staticClass:"titleselect"},[t._v("氨氮")]),t._v(" "),s("div",{staticClass:"select"},[s("input",{staticClass:"input right",attrs:{type:"text",disabled:""},domProps:{value:e.ammoniaNitrogen+"  mg/L"}})])])]),t._v(" "),s("mu-list-item",{staticClass:"bottomBorder"},[s("div",{staticClass:"flexContent"},[s("div",{staticClass:"titleselect"},[t._v("污染指数")]),t._v(" "),s("div",{staticClass:"select"},[s("input",{staticClass:"input right",attrs:{type:"text",disabled:""},domProps:{value:e.pollutionIndex+"  mg/L"}})])])]),t._v(" "),s("mu-list-item",[s("div",{staticClass:"btn",on:{click:function(s){return t.btnSelect(a,e.id)}}},[s("span",[t._v("确认当前数据")])])])],1)}),1)],1),t._v(" "),s("van-dialog",{attrs:{title:"请手动输入污染源名称","show-cancel-button":""},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[s("div",{staticClass:"select centerBorder",staticStyle:{height:"60px"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.station,expression:"station"}],staticClass:"input",staticStyle:{width:"80%"},attrs:{type:"text",placeholder:"请输入您的污染源名称"},domProps:{value:t.station},on:{input:function(e){e.target.composing||(t.station=e.target.value)}}})])]),t._v(" "),s("van-action-sheet",{attrs:{actions:t.actions,"cancel-text":"取消"},on:{cancel:t.onCancel,select:t.selectBtn},model:{value:t.showCamera,callback:function(e){t.showCamera=e},expression:"showCamera"}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"Title"},[e("span",[this._v("编辑当前点位信息")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"titleselect"},[e("span",[this._v("点位名称：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"titleselect"},[e("span",[this._v("时间：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"titleselect"},[e("span",[this._v("地址：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"titleselect"},[e("span",[this._v("经度：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"titleselect"},[e("span",[this._v("纬度：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"Title"},[e("span",[this._v("确认最新的数据")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"imageSize"},[e("img",{attrs:{src:"static/img/right.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"Title"},[e("span",[this._v("上传点位图片")])])}]};var p=s("VU/8")(m,v,!1,function(t){s("fJk/")},"data-v-6496913a",null);e.default=p.exports},"fJk/":function(t,e){},u2KI:function(t,e,s){t.exports={default:s("O4R0"),__esModule:!0}},uqUo:function(t,e,s){var a=s("kM2E"),i=s("FeBl"),n=s("S82l");t.exports=function(t,e){var s=(i.Object||{})[t]||Object[t],o={};o[t]=e(s),a(a.S+a.F*n(function(){s(1)}),"Object",o)}}});
//# sourceMappingURL=11.e27ee6204000b1b212c3.js.map