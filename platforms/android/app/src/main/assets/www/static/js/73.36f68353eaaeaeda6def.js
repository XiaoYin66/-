webpackJsonp([73],{cAxP:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={data:function(){return{taskItem:[],user:""}},mounted:function(){this.user=sessionStorage.getItem("user"),this.taskItem=this.$store.state.websocketTaskData;for(var t=0;t<this.taskItem.length;t++){switch(this.taskItem[t].type){case"mobile":this.taskItem[t].type="保养检修";break;case"maintenance":this.taskItem[t].type="故障维修";break;case"inspect":this.taskItem[t].type="例行巡检"}}},methods:{toHandle:function(t){console.log(t),"manager"!==this.user&&"station"!==this.user&&this.$router.push({path:"maintenance",query:{taskId:t.taskId,stationName:t.station,type:t.type}})}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("mu-appbar",{staticClass:"header backgroundNaviBar",staticStyle:{width:"100%"}},[a("a",{on:{click:function(){t.$router.go(-1)}}},[a("mu-button",{staticClass:"icon",attrs:{slot:"left",icon:"",size:"20"},slot:"left"},[a("mu-icon",{attrs:{value:"keyboard_arrow_left"}})],1)],1),t._v(" "),a("span",{staticStyle:{color:"white"}},[t._v("任务推送列表")])]),t._v(" "),a("div",{staticClass:"warningContent"},t._l(t.taskItem,function(e,s){return a("div",{key:s,on:{click:function(a){return t.toHandle(e)}}},[a("van-cell-group",[a("van-cell",{attrs:{title:e.station,value:e.type,label:"任务编号："+e.taskId}})],1)],1)}),0)],1)},staticRenderFns:[]};var i=a("VU/8")(s,n,!1,function(t){a("g6s9")},"data-v-389db77a",null);e.default=i.exports},g6s9:function(t,e){}});
//# sourceMappingURL=73.36f68353eaaeaeda6def.js.map