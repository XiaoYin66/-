webpackJsonp([86],{"2dD+":function(t,e){},SQUt:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("Xxa5"),o=a.n(r),n=a("exGp"),i=a.n(n),s=a("M5WX"),c=a("7+uW"),h=a("Fd2+");c.default.use(h.s).use(h.B);var m={data:function(){return{itemContentList:[],token:"",name:"",rateData:[],normalData:[],nameFactor:"",colorStyle:"color:white",colorStyleNo:"color:#CCC;border:none",rateStatus:!0,normalStatus:!0,list:[],loading:!1,finished:!1,refreshing:!1,num:1,buttonTrue:!1,pageSize:20,dataMapLength:40,showMore:!1}},filters:{filterCell:function(t){return null!==t?"number"==typeof t?t.toFixed(3)+"mg/L":t+"mg/L":"--"}},methods:{rateBtnNew:function(){this.colorStyle="color:white",this.colorStyleNo="color:#CCC;border:none",this.num=1,this.initData()},normalBtnNew:function(){this.num=0,this.colorStyleNo="color:white",this.colorStyle="color:#CCC;border:none",this.initData()},onLoad:function(){this.refreshing&&(this.itemContentList=[],this.refreshing=!1,this.pageSize=20),this.pageSize=this.pageSize+10,this.loading=!1,this.initData(),this.itemContentList.length>=this.dataMapLength&&(this.finished=!0)},onRefresh:function(){this.finished=!1,this.loading=!0,this.onLoad()},initData:function(){var t=this;return i()(o.a.mark(function e(){var a,r,n,i,c,h,m,l,u,f,d,p;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a="/station/water-data/exceedAndStandard",r=t.$route.query.station,t.name=r,n=t.$route.query.startTime,i=t.$route.query.endTime,c=t.$route.query.name,h=t.num,m="no",l=1,u=t.pageSize,e.next=12,s.a.request(a,"POST",{starttime:n,lasttime:i,waterstation:r,isExcel:m,pageNum:l,pageSize:u,specifyFactor:c,isExceeds:h},t.token);case 12:if(f=e.sent,console.log("11111111111111",f),200!==f.status){e.next=45;break}t.rateData=[],t.normalData=[],d="",d=0==h?"upStandard":"overStandard",p=f.data.data.dataMap[d],t.dataMapLength=f.data.data.dataMap.total,e.t0=t.$route.query.name,e.next="ph"===e.t0?24:"cod"===e.t0?26:"ammoniaNitrogen"===e.t0?28:"nitrogen"===e.t0?30:"phosphorus"===e.t0?32:"cuprum"===e.t0?34:"nickel"===e.t0?36:"chromium"===e.t0?38:"prussiate"===e.t0?40:42;break;case 24:return t.handleData(t.$route.query.name,p),e.abrupt("break",43);case 26:return t.handleDataCod(t.$route.query.name,p),e.abrupt("break",43);case 28:return t.handleDataAmmoniaNitrogen(t.$route.query.name,p),e.abrupt("break",43);case 30:return t.handleDataNitrogen(t.$route.query.name,p),e.abrupt("break",43);case 32:return t.handleDataPhosphorus(t.$route.query.name,p),e.abrupt("break",43);case 34:return t.handleDataCuprum(t.$route.query.name,p),e.abrupt("break",43);case 36:return t.handleDataNickel(t.$route.query.name,p),e.abrupt("break",43);case 38:return t.handleDataChromium(t.$route.query.name,p),e.abrupt("break",43);case 40:return t.handleDataPrussiate(t.$route.query.name,p),e.abrupt("break",43);case 42:return e.abrupt("break",43);case 43:t.itemContentList=t.rateData.concat(t.normalData),0==t.itemContentList.length&&(t.finished=!0);case 45:case"end":return e.stop()}},e,t)}))()},forMenuName:function(t){for(var e=this.$store.state.menu,a=0;a<e.length;a++){if(e[a].slice(0,4)===t)return t=e[a],this.name=t,t}},handleData:function(t,e){this.nameFactor="pH";for(var a=[],r=[],o=0;o<e.length;o++){var n=e[o].ph;n<this.$store.state.factor.ph||n>this.$store.state.factor.ph1?r.push({factor:n,name:"pH",time:e[o].gmtMonitor,color:"red"}):a.push({factor:n,name:"pH",time:e[o].gmtMonitor,color:""})}this.rateData=r,this.normalData=a},handleDataCod:function(t,e){for(var a=[],r=[],o=0;o<e.length;o++){var n=e[o].cod;n>1.15*this.$store.state.factor.cod?r.push({factor:n,name:"COD",time:e[o].gmtMonitor,color:"red"}):n<1.15*this.$store.state.factor.cod&&n>this.$store.state.factor.cod?r.push({factor:n,name:"COD",time:e[o].gmtMonitor,color:"orange"}):a.push({factor:n,name:"COD",time:e[o].gmtMonitor,color:""})}this.rateData=r,this.normalData=a,this.itemContentList=this.rateData},handleDataAmmoniaNitrogen:function(t,e){for(var a=[],r=[],o=0;o<e.length;o++){var n=e[o].ammoniaNitrogen;n>1.15*this.$store.state.factor.ammoniaNitrogen?r.push({factor:n,name:"氨氮",time:e[o].gmtMonitor,color:"red"}):n<1.15*this.$store.state.factor.ammoniaNitrogen&&n>this.$store.state.factor.ammoniaNitrogen?r.push({factor:n,name:"氨氮",time:e[o].gmtMonitor,color:"orange"}):a.push({factor:n,name:"氨氮",time:e[o].gmtMonitor,color:""})}this.rateData=r,this.normalData=a},handleDataNitrogen:function(t,e){for(var a=[],r=[],o=0;o<e.length;o++){var n=e[o].nitrogen;n>this.$store.state.factor.nitrogen&&n<1.15*this.$store.state.factor.nitrogen?r.push({factor:n,name:"总氮",time:e[o].gmtMonitor,color:"orange"}):n>1.15*this.$store.state.factor.nitrogen?r.push({factor:n,name:"总氮",time:e[o].gmtMonitor,color:"red"}):a.push({factor:n,name:"总氮",time:e[o].gmtMonitor,color:""})}this.rateData=r,this.normalData=a},handleDataPhosphorus:function(t,e){for(var a=[],r=[],o=0;o<e.length;o++){var n=e[o].phosphorus;n>this.$store.state.factor.phosphorus&&n<1.15*this.$store.state.factor.phosphorus?r.push({factor:n,name:"总磷",time:e[o].gmtMonitor,color:"orange"}):n>1.15*this.$store.state.factor.phosphorus?r.push({factor:n,name:"总磷",time:e[o].gmtMonitor,color:"red"}):a.push({factor:n,name:"总磷",time:e[o].gmtMonitor,color:""})}this.rateData=r,this.normalData=a},handleDataCuprum:function(t,e){for(var a=[],r=[],o=0;o<e.length;o++){var n=e[o].cuprum;n>this.$store.state.factor.cuprum?r.push({factor:n,name:"总铜",time:e[o].gmtMonitor,color:"red"}):a.push({factor:n,name:"总铜",time:e[o].gmtMonitor,color:""})}this.rateData=r,this.normalData=a},handleDataNickel:function(t,e){for(var a=[],r=[],o=0;o<e.length;o++){var n=e[o].nickel;n>this.$store.state.factor.nickel?r.push({factor:n,name:"总镍",time:e[o].gmtMonitor,color:"red"}):a.push({factor:n,name:"总镍",time:e[o].gmtMonitor,color:""})}this.rateData=r,this.normalData=a},handleDataChromium:function(t,e){for(var a=[],r=[],o=0;o<e.length;o++){var n=e[o].chromium;n>this.$store.state.factor.chromium&&n<1.15*this.$store.state.factor.chromium?r.push({factor:n,name:"总铬",time:e[o].gmtMonitor,color:"orange"}):n>1.15*this.$store.state.factor.chromium?r.push({factor:n,name:"总铬",time:e[o].gmtMonitor,color:"red"}):a.push({factor:n,name:"总铬",time:e[o].gmtMonitor,color:""})}this.rateData=r,this.normalData=a},handleDataPrussiate:function(t,e){for(var a=[],r=[],o=0;o<e.length;o++){var n=e[o].prussiate;n>this.$store.state.factor.prussiate?r.push({factor:n,name:"总氰化物",time:e[o].gmtMonitor,color:"red"}):a.push({factor:n,name:"总氰化物",time:e[o].gmtMonitor,color:""})}this.rateData=r,this.normalData=a},rateBtn:function(){this.rateStatus=!this.rateStatus,this.rateStatus?(this.colorStyle="",!0===this.normalStatus?this.itemContentList=this.rateData.concat(this.normalData):this.itemContentList=this.rateData):(this.colorStyle="border:none;color: #ccc;",!0===this.normalStatus?this.itemContentList=this.normalData:this.itemContentList=this.rateData),this.itemContentList.sort(function(t,e){return t.time<e.time?1:-1})},normalBtn:function(){this.normalStatus=!this.normalStatus,this.normalStatus?(this.colorStyleNo="",!0===this.rateStatus?this.itemContentList=this.rateData.concat(this.normalData):this.itemContentList=this.normalData):(this.colorStyleNo="border:none;color:#ccc",!0===this.rateStatus?this.itemContentList=this.rateData:this.itemContentList=[]),this.itemContentList.sort(function(t,e){return t.time<e.time?1:-1})}},mounted:function(){this.token=sessionStorage.getItem("token"),this.initData()}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("van-nav-bar",{staticClass:"backgroundNaviBar",attrs:{fixed:!0,title:t.name,"left-arrow":"","z-index":"999",border:!1},on:{"click-left":function(){t.$router.go(-1)}}}),t._v(" "),a("div",{staticClass:"flexTitle backgroundNaviBar",staticStyle:{"z-index":"999"}},[a("div",{staticClass:"rate",style:t.colorStyle,on:{click:function(e){return t.rateBtnNew()}}},[t._v("超标")]),t._v(" "),a("div",{staticClass:"noRate",style:t.colorStyleNo,on:{click:function(e){return t.normalBtnNew()}}},[t._v("达标")])]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"containerContentFactor"},[a("div",{staticClass:"backContent"},[a("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.refreshing,callback:function(e){t.refreshing=e},expression:"refreshing"}},[a("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[t._l(t.itemContentList,function(e,r){return a("div",{key:r,staticClass:"flexBox borderStyle",attrs:{title:e}},[a("div",{staticStyle:{width:"200px"}},[t._v(t._s(e.time))]),t._v(" "),a("div",[t._v(t._s(e.name))]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"pH"===e.name,expression:"item.name==='pH'"}],style:"color:"+e.color},[t._v(t._s(e.factor))]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"pH"!==e.name,expression:"item.name!=='pH'"}],style:"color:"+e.color},[t._v(t._s(t._f("filterCell")(e.factor)))])])}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:1==t.showMore,expression:"showMore==true"}],staticClass:"flexBoxNew"})],2)],1)],1)])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"titleFactor"},[e("div",{staticStyle:{width:"200px"}},[this._v("时间")]),this._v(" "),e("div",[this._v("因子名称")]),this._v(" "),e("div",[this._v("监测值")])])}]};var u=a("VU/8")(m,l,!1,function(t){a("2dD+")},"data-v-142cc11b",null);e.default=u.exports}});
//# sourceMappingURL=86.d02d017383a25e83cd4a.js.map