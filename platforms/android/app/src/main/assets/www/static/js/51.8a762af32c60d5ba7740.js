webpackJsonp([51],{"8VkZ":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Xxa5"),r=a.n(s),n=a("exGp"),i=a.n(n),c=a("M5WX"),o=a("7+uW"),u=a("Fd2+"),l="height:"+(document.documentElement.clientHeight||document.body.clientHeight)+"px";o.default.use(u.J);var d={data:function(){return{user:"",height:l,Car:"",token:"",time:""}},created:function(){var t=this;return i()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.user=sessionStorage.getItem("user"),t.token=sessionStorage.getItem("token"),e.next=4,t.checkStatus();case 4:case"end":return e.stop()}},e,t)}))()},mounted:function(){},methods:{queryTaskStatus:function(){var t=this;if(0===this.$store.state.taskStatus)return null;u.l.confirm({title:"任务执行中...",message:"是否返回到当前任务？",cancelButtonText:"取消",confirmButtonText:"确认"}).then(function(){t.$router.push({path:"/TaskList",query:{id:t.$store.state.routingName,carId:t.$store.state.vehicleIdStatus,time:t.$store.state.time}})}).catch(function(){}),this.initData(this.$store.state.routingName),console.log(this.$store.state.onlineTask)},checkStatus:function(){var t=this;return i()(r.a.mark(function e(){var a,s;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a="/mobile/routing/check",e.next=3,c.a.request(a,"GET",{},t.token);case 3:return s=e.sent,console.log(s.data.status),"true"===s.data.status?(t.$store.state.routingName=s.data.data.routingName,t.$store.state.vehicleIdStatus=s.data.data.vehicleId,t.time=s.data.data.gmtModified,t.$store.state.taskStatus=1):t.$store.state.taskStatus=0,e.next=8,t.queryTaskStatus();case 8:case"end":return e.stop()}},e,t)}))()},back:function(){1!==this.$store.state.taskStatus?Object(u.J)("您还没有创建任务！"):this.$router.push({path:"/TaskList",query:{id:this.$store.state.routingName,carId:this.$store.state.vehicleIdStatus,time:this.$store.state.time}})},DeleteData:function(t){var e=this;return i()(r.a.mark(function a(){var s,n;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return s="/mobile/routing",a.next=3,c.a.Deletedata(s,"DELETE",{routingName:t},e.token);case 3:n=a.sent,console.log(n);case 5:case"end":return a.stop()}},a,e)}))()},SelectCarId:function(){var t=this;new PickerView({bindElem:selectCar,data:this.$store.state.vehicleList,title:"选择站点",leftText:"取消",rightText:"确定",rightFn:function(e){console.log(e[0]),t.Car=e[0]}})},Submit:function(){var t=this;return i()(r.a.mark(function e(){var a,s,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:1===t.$store.state.taskStatus?Object(u.J)("您有一条任务正在执行，请返回当前任务！"):(a=t,s="/mobile/routing",t.user,n=t.Car,t.time=c.a.filterTime(new Date),t.$http.post(s,{vehicleId:n}).then(function(e){"success"===e.data.message&&(a.$store.state.routingName=e.data.routingName,t.$store.state.vehicleIdStatus=n,t.$store.state.time=t.time,t.$store.state.taskId=e.data.id,Object(u.J)({message:"正在出车中...",icon:"static/img/carControlSelect.png"}),Object(u.w)({type:"warning",message:"车辆准备出库，请谨慎驾驶车辆，遵守交规行驶，谢谢！",duration:5e3}),a.$router.push({path:"/TaskList",query:{id:e.data.routingName,carId:n,time:a.time}})),console.log(e),a.$store.state.taskStatus=0}).catch(function(t){console.log(t),Object(u.J)("创建路线失败")}));case 1:case"end":return e.stop()}},e,t)}))()},initData:function(t){var e=this;return i()(r.a.mark(function a(){var s,n;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return s="/mobile/routing/app",a.next=3,c.a.request(s,"get",{},e.token);case 3:return n=a.sent,console.log(n),a.t0=e.$store,a.next=8,e.filterData(n.data.data,t);case 8:a.t1=a.sent,a.t0.commit.call(a.t0,"onlinetaskData",a.t1);case 10:case"end":return a.stop()}},a,e)}))()},filterData:function(t,e){for(var a=0;a<t.length;a++){if(e===t[a].routingName)return console.log(t[a]),t[a]}}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"height"},[a("van-nav-bar",{staticClass:"backgroundNaviBar",attrs:{title:"监测任务","left-arrow":"","z-index":"999",border:!1},on:{"click-left":function(){t.$router.go(-1)}}}),t._v(" "),a("div",{staticClass:"backPadding"},[a("div",{staticClass:"content border-radius"},[t._m(0),t._v(" "),a("div",{staticClass:"contIn"},[a("div",{staticClass:"flexContainer"},[t._m(1),t._v(" "),a("div",{staticClass:"inputBtn",attrs:{id:"selectCar"},on:{click:t.SelectCarId}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.Car,expression:"Car"}],staticClass:"input",attrs:{type:"text",placeholder:"选择当前车辆编号",disabled:""},domProps:{value:t.Car},on:{input:function(e){e.target.composing||(t.Car=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"flexContainer"},[t._m(2),t._v(" "),a("div",{staticClass:"inputBtn"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.user,expression:"user"}],staticClass:"input",attrs:{type:"text",placeholder:"选择当前人员",disabled:""},domProps:{value:t.user},on:{input:function(e){e.target.composing||(t.user=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"btnSubmit"},[a("div",{staticClass:"borderCircle",on:{click:t.Submit}},[a("span",[t._v("开始任务")])])]),t._v(" "),a("div",{staticClass:"backBtnSubmit",on:{click:t.back}},[t._m(3),t._v(" "),t._m(4)])])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"taskCar"},[e("img",{attrs:{src:"static/img/taskCar.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"imgSize"},[e("img",{attrs:{src:"static/img/car.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"imgSize"},[e("img",{attrs:{src:"static/img/carControl.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"backTo"},[e("span",[this._v("返回当前任务")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"imageSized"},[e("img",{attrs:{src:"static/img/toBack.png",alt:""}})])}]};var v=a("VU/8")(d,m,!1,function(t){a("aEtq")},"data-v-764d47c9",null);e.default=v.exports},aEtq:function(t,e){}});
//# sourceMappingURL=51.8a762af32c60d5ba7740.js.map