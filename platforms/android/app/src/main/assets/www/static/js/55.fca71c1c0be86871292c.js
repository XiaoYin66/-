webpackJsonp([55],{Fo2z:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("Xxa5"),i=a.n(n),s=a("exGp"),l=a.n(s),o=a("M5WX"),r=a("7+uW"),c=a("Fd2+"),u=(a("MHRi"),a("kiaj"));r.default.use(c.J);var v={name:"maintenanceChild3",data:function(){return{loading:!1,citys:[],filterable:{value1:""},token:"",textvalueMainremark:"",content:{},textvalueMain:"",input:{valuePerson:"",valueEventType:"",valueEventName:"",valueAddress:"",valuesendPerson:""},dialogImageUrl:"",dialogVisible:!1,options:["沙井一期进水口水质监测站"],value3:null,normal:{value1:null,value2:null},checkbox:{value1:[],value2:!1,value3:!1},arrPerson:["周瑞斌","谢子琪"],checkAll:!0,open:!1,minDate:new Date("1970-07-01"),maxDate:new Date(2050,10,1),currentDate:new Date,openCamera:!1,actions:[{name:"手机拍照"},{name:"本地相册"}],show:!1}},methods:{confirmSubmit:function(){var e=this;c.l.confirm({title:"请确认是否提交数据？",message:"提交用户为："+sessionStorage.getItem("username")}).then(function(){e.submit()}).catch(function(){Object(c.J)("您点击了取消")})},selectDataPicStation:function(){var e=this;new PickerView({bindElem:classPicstation,data:this.$store.state.menu,title:"选择站点",leftText:"取消",rightText:"确定",rightFn:function(t){console.log(t[0]),e.input.valueAddress=t[0]}})},selectDataPicPerson:function(){var e=this;new PickerView({bindElem:classPicPerson,data:this.arrPerson,title:"选择接收人",leftText:"取消",rightText:"确定",rightFn:function(t){console.log(t[0]),e.input.valuePerson=t[0]}})},selectConfirm:function(e){switch(console.log(e.name),e.name){case"手机拍照":u.a.cameraTakeEvent(0);break;case"本地相册":u.a.cameraTakeEvent(1)}},onCancel:function(){this.show=!1,Object(c.J)("cancel")},closeBottomSheetCamera:function(){},timeConfirm:function(e){this.value3=o.a.filterTime(e),this.open=!1},close:function(){this.open=!1},closeBottomSheet:function(){},timeSelect:function(){this.open=!0},fullscreen:function(){this.loading=this.$loading()},limitStatus:function(){},handleRemove:function(e,t){console.log("filelist",t)},uploadFile:function(e){this.formDate.append("files",e.file),console.log(e.file)},submit:function(){var e=this;return l()(i.a.mark(function t(){var a,n,s;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=e,e.fullscreen(),e.formDate=new FormData,e.content={hello:"112121"},e.$refs.upload.submit(),e.formDate.append("address",e.input.valueAddress),e.formDate.append("createUser",e.input.valuesendPerson),e.formDate.append("eventName",e.input.valueEventName),e.formDate.append("remark",e.textvalueMainremark),e.formDate.append("type",e.input.valueEventType),e.formDate.append("receUser",e.input.valuePerson),e.formDate.append("content",e.textvalueMain),e.formDate.append("gmtEvent",o.a.filter(e.value3)),n="/job/event",t.next=16,o.a.request(n,"POST",e.formDate,e.token);case 16:"success"==(s=t.sent).data.message?(Object(c.J)(s.data.info),e.$router.go(-1),a.loading.close()):(Object(c.J)(s.data.info),a.loading.close());case 18:case"end":return t.stop()}},t,e)}))()}},mounted:function(){this.token=sessionStorage.getItem("token"),this.input.valuesendPerson=sessionStorage.getItem("username"),this.citys=this.$store.state.menu}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{"padding-bottom":"20px",background:"rgb(247, 247, 247)"}},[a("van-nav-bar",{staticClass:"backgroundNaviBar",attrs:{fixed:!0,title:"事件上报","left-arrow":"","z-index":"999",border:!1},on:{"click-left":function(){e.$router.go(-1)}}}),e._v(" "),a("div",{staticStyle:{padding:"10px","margin-top":"-18px"}},[a("div",{staticClass:"containerMain contanerMain"},[a("div",{staticClass:"flexContainer"},[e._m(0),e._v(" "),a("div",{staticClass:"select",attrs:{id:"classPicstation"},on:{click:e.selectDataPicStation}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.input.valueAddress,expression:"input.valueAddress"}],staticClass:"input",attrs:{type:"text",disabled:"",placeholder:"请选择当前站点"},domProps:{value:e.input.valueAddress},on:{input:function(t){t.target.composing||e.$set(e.input,"valueAddress",t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"flexContainer"},[e._m(1),e._v(" "),a("div",{staticClass:"select",on:{click:e.timeSelect}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.value3,expression:"value3"}],staticClass:"input",staticStyle:{background:"white"},attrs:{type:"text",disabled:"",placeholder:"选择录入的时间"},domProps:{value:e.value3},on:{input:function(t){t.target.composing||(e.value3=t.target.value)}}})])])]),e._v(" "),a("div",{staticClass:"containerMain"},[a("div",{staticClass:"flexContainer"},[e._m(2),e._v(" "),a("div",{staticClass:"select"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.input.valueEventName,expression:"input.valueEventName"}],staticClass:"input",attrs:{type:"text",placeholder:"请输入事件名称"},domProps:{value:e.input.valueEventName},on:{input:function(t){t.target.composing||e.$set(e.input,"valueEventName",t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"flexContainer"},[e._m(3),e._v(" "),a("div",{staticClass:"select"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.input.valueEventType,expression:"input.valueEventType"}],staticClass:"input",staticStyle:{background:"white"},attrs:{type:"text",placeholder:"请输入事件类型"},domProps:{value:e.input.valueEventType},on:{input:function(t){t.target.composing||e.$set(e.input,"valueEventType",t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"flexContainer"},[e._m(4),e._v(" "),a("div",{staticClass:"select",attrs:{id:"classPicPerson"},on:{click:e.selectDataPicPerson}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.input.valuePerson,expression:"input.valuePerson"}],staticClass:"input",staticStyle:{background:"white"},attrs:{type:"text",disabled:"",placeholder:"请输入事件接收人"},domProps:{value:e.input.valuePerson},on:{input:function(t){t.target.composing||e.$set(e.input,"valuePerson",t.target.value)}}})])])]),e._v(" "),a("div",{staticClass:"containerMain"},[e._m(5),e._v(" "),a("div",[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.textvalueMain,expression:"textvalueMain"}],attrs:{name:"",id:"textvalueMain",cols:"40",rows:"10",placeholder:"简要说明事件的内容"},domProps:{value:e.textvalueMain},on:{input:function(t){t.target.composing||(e.textvalueMain=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"containerMain",staticStyle:{"margin-bottom":"20px"}},[e._m(6),e._v(" "),a("div",[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.textvalueMainremark,expression:"textvalueMainremark"}],attrs:{name:"",id:"textvalueMain",cols:"40",rows:"10",placeholder:"如有补充请在此处备注说明"},domProps:{value:e.textvalueMainremark},on:{input:function(t){t.target.composing||(e.textvalueMainremark=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"cont"},[a("el-upload",{ref:"upload",attrs:{action:"http://192.168.50.152:8802/job/event",multiple:"",name:"files","list-type":"picture-card","on-change":e.handleRemove,"http-request":e.uploadFile,"auto-upload":!1,limit:4,"on-exceed":e.limitStatus}},[a("i",{staticClass:"el-icon-plus"})]),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogVisible,size:"tiny"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1),e._v(" "),a("div",{staticClass:"containerMain"},[a("div",{staticClass:"flexContainer"},[e._m(7),e._v(" "),a("div",{staticClass:"select"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.input.valuesendPerson,expression:"input.valuesendPerson"}],staticClass:"input",attrs:{type:"text",name:"",placeholder:"请输入发起人名字"},domProps:{value:e.input.valuesendPerson},on:{input:function(t){t.target.composing||e.$set(e.input,"valuesendPerson",t.target.value)}}})])])])]),e._v(" "),a("div",{staticStyle:{padding:"10px"}},[a("div",{staticClass:"backgroundNaviBar borderSubmit",on:{click:function(t){return e.confirmSubmit()}}},[a("span",[e._v("提交")])])]),e._v(" "),a("mu-container",[a("mu-bottom-sheet",{attrs:{open:e.open},on:{"update:open":function(t){e.open=t}}},[a("mu-list",{on:{"item-click":e.closeBottomSheet}},[a("mu-sub-header",[e._v("时间筛选")]),e._v(" "),a("van-datetime-picker",{attrs:{type:"datetime","min-date":e.minDate,"max-date":e.maxDate},on:{confirm:e.timeConfirm,cancel:e.close},model:{value:e.currentDate,callback:function(t){e.currentDate=t},expression:"currentDate"}})],1)],1)],1),e._v(" "),a("van-action-sheet",{attrs:{actions:e.actions,"cancel-text":"取消"},on:{cancel:e.onCancel,select:e.selectConfirm},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}})],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"titleselect"},[t("span",[this._v("监控站点：")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"titleselect"},[t("span",[this._v("时间：")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"titleselect"},[t("span",[this._v("事件名称：")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"titleselect"},[t("span",[this._v("事件类型：")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"titleselect"},[t("span",[this._v("接收人：")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("span",[this._v("事件内容：")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("span",[this._v("备注：")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"titleselect"},[t("span",[this._v("发起人：")])])}]};var m=a("VU/8")(v,d,!1,function(e){a("kekY")},"data-v-67d7681c",null);t.default=m.exports},kekY:function(e,t){}});
//# sourceMappingURL=55.fca71c1c0be86871292c.js.map