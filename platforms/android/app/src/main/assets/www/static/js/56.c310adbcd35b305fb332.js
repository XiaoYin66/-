webpackJsonp([56],{BDrN:function(t,e){},U447:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("Xxa5"),s=i.n(a),n=i("exGp"),o=i.n(n),c=i("M5WX"),l=i("7+uW"),r=i("Fd2+");i("MHRi");l.default.use(r.J);var u={name:"addDataList",data:function(){return{value6:null,options:["定期","不定期"],token:"",carNum:"",person:"",taskId:"",pointNum:"",normal:{value1:""},loading:!1,openTime:!1,currentDate:new Date,minDate:new Date("1970-07-01"),optionscarNum:[],optionsperson:["代璐","周瑞斌","谢子琪","宁东成","魏晓宁"]}},methods:{selectDataPicoptions:function(){var t=this;new PickerView({bindElem:classPicoptions,data:this.options,title:"选择类型",leftText:"取消",rightText:"确定",rightFn:function(e){console.log(e[0]),t.normal.value1=e[0]}})},selectDataPicCar:function(){var t=this;new PickerView({bindElem:classPicCar,data:this.$store.state.vehicleList,title:"选择类型",leftText:"取消",rightText:"确定",rightFn:function(e){console.log(e[0]),t.carNum=e[0]}})},confirmSubmit:function(){var t=this;r.l.confirm({title:"请确认是否提交数据？",message:"监测人员为："+this.person}).then(function(){t.addRoad()}).catch(function(){Object(r.J)("您点击了取消")})},selectDataPicPerson:function(){var t=this;new PickerView({bindElem:classPicPerson,data:this.optionsperson,title:"选择类型",leftText:"取消",rightText:"确定",rightFn:function(e){console.log(e[0]),t.person=e[0]}})},closeBottomSheetTime:function(){this.openTime=!1},confirmTime:function(t){this.openTime=!1,this.value6=c.a.filter(t)},close:function(){this.openTime=!1},selectTime:function(){this.openTime=!0},fullscreen:function(){this.loading=this.$loading()},addRoad:function(){var t=this;return o()(s.a.mark(function e(){var i,a,n,o,l,u,d,m,v;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.fullscreen(),i="/mobile/routing",a=c.a.filter(t.value6),n=t.person,o=t.pointNum,l=t.taskId,u=t.normal.value1,d=t.carNum,e.next=10,c.a.request(i,"POST",{name:a,person:n,pointNumber:o,taskId:l,type:u,vehicleId:d},t.token);case 10:m=e.sent,console.log(m),"success"===(v=m.data.message)?(t.loading.close(),Object(r.J)(v),t.$router.replace("/dataListControl")):(t.loading.close(),Object(r.J)(m.data.info));case 14:case"end":return e.stop()}},e,t)}))()}},mounted:function(){this.token=sessionStorage.getItem("token"),this.optionscarNum=this.$store.state.vehicleList}},d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("mu-appbar",{staticClass:"header",staticStyle:{width:"100%"},attrs:{color:"#4ed995"}},[i("a",{on:{click:function(){t.$router.go(-1)}}},[i("mu-button",{staticClass:"icon",attrs:{slot:"left",icon:"",size:"20"},slot:"left"},[i("mu-icon",{attrs:{value:"keyboard_arrow_left"}})],1)],1),t._v(" "),i("span",[t._v("路线录入")])]),t._v(" "),i("div",[t._m(0),t._v(" "),i("div",{staticClass:"contentAdd"},[i("div",{staticClass:"flexdis"},[i("div",{staticStyle:{width:"100px"}},[t._v("监测时间")]),t._v(" "),i("div",{staticClass:"dateTime",on:{click:function(e){return t.selectTime()}}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.value6,expression:"value6"}],attrs:{type:"text",id:"input",placeholder:"请选择录入时间",disabled:""},domProps:{value:t.value6},on:{input:function(e){e.target.composing||(t.value6=e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"flexdis"},[i("div",{staticStyle:{width:"100px"}},[t._v("监测类型")]),t._v(" "),i("div",{staticClass:"dateTime",attrs:{id:"classPicoptions"},on:{click:t.selectDataPicoptions}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.normal.value1,expression:"normal.value1"}],staticClass:"input",attrs:{type:"text",disabled:"",placeholder:"请选择监测类型"},domProps:{value:t.normal.value1},on:{input:function(e){e.target.composing||t.$set(t.normal,"value1",e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"flexdis"},[i("div",{staticStyle:{width:"100px"}},[t._v("车辆编号")]),t._v(" "),i("div",{staticClass:"dateTime",attrs:{id:"classPicCar"},on:{click:t.selectDataPicCar}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.carNum,expression:"carNum"}],staticClass:"input",attrs:{type:"text",placeholder:"请选择车辆编号",disabled:""},domProps:{value:t.carNum},on:{input:function(e){e.target.composing||(t.carNum=e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"flexdis"},[i("div",{staticStyle:{width:"100px"}},[t._v("监测人员")]),t._v(" "),i("div",{staticClass:"dateTime",attrs:{id:"classPicPerson"},on:{click:t.selectDataPicPerson}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.person,expression:"person"}],staticClass:"input",attrs:{type:"text",name:"",placeholder:"请选择监测人员",disabled:""},domProps:{value:t.person},on:{input:function(e){e.target.composing||(t.person=e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"flexdis"},[i("div",{staticStyle:{width:"100px"}},[t._v("任务编号")]),t._v(" "),i("div",{staticClass:"dateTime"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.taskId,expression:"taskId"}],attrs:{type:"text",id:"input",disabled:"",placeholder:"请输入任务编号"},domProps:{value:t.taskId},on:{input:function(e){e.target.composing||(t.taskId=e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"flexdis"},[i("div",{staticStyle:{width:"100px"}},[t._v("点位数量")]),t._v(" "),i("div",{staticClass:"dateTime"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.pointNum,expression:"pointNum"}],attrs:{type:"text",id:"input",placeholder:"请输入点位数"},domProps:{value:t.pointNum},on:{input:function(e){e.target.composing||(t.pointNum=e.target.value)}}})])])]),t._v(" "),i("div",{staticClass:"subBack"},[i("div",{staticClass:"divWidth",on:{click:function(e){return t.confirmSubmit()}}},[i("span",[t._v("提交")])])])]),t._v(" "),i("mu-container",[i("mu-bottom-sheet",{attrs:{open:t.openTime},on:{"update:open":function(e){t.openTime=e}}},[i("mu-list",{on:{"item-click":t.closeBottomSheetTime}},[i("mu-sub-header",[t._v("筛选时间")]),t._v(" "),i("van-datetime-picker",{attrs:{type:"date","min-date":t.minDate},on:{confirm:t.confirmTime,cancel:t.close},model:{value:t.currentDate,callback:function(e){t.currentDate=e},expression:"currentDate"}})],1)],1)],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"naviTitle"},[e("span",[this._v("线路信息")])])}]};var m=i("VU/8")(u,d,!1,function(t){i("BDrN")},"data-v-66e1d1ee",null);e.default=m.exports}});
//# sourceMappingURL=56.c310adbcd35b305fb332.js.map