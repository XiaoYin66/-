webpackJsonp([13],{"6agX":function(t,e,a){"use strict";var n=a("XLwt");e.a={EchartsRanking1(t,e,a,i,r){var o=e,s=t;let c=n.init(document.getElementById("ranking1"));var l=[];l.push({value:i,name:o,label:{normal:{formatter:s,textStyle:{fontSize:18}}}}),l.push({value:r,name:"收入预期",label:{normal:{formatter:"",textStyle:{color:"#555",fontSize:13}}}});var h={tooltip:{trigger:"item",formatter:"{b}<br/> : {c} ({d}%)"},color:[a,"#DDDDDD"],legend:{orient:"vertical",x:"center",y:"bottom",icon:"line",data:[o]},series:[{name:"访问来源",type:"pie",silent:!0,radius:["60%","70%"],center:["50%","50%"],avoidLabelOverlap:!1,label:{normal:{show:!0,position:"center"},emphasis:{show:!0,textStyle:{fontSize:"30",fontWeight:"bold"}}},labelLine:{normal:{show:!1}},data:l}]};c.setOption(h)},EchartsRanking2(t,e,a,i,r){var o=e,s=t;let c=n.init(document.getElementById("ranking2"));var l=[];l.push({value:i,name:o,label:{normal:{formatter:s,textStyle:{fontSize:18}}}}),l.push({value:r,name:"收入预期",label:{normal:{formatter:"",textStyle:{color:"#555",fontSize:13}}}});var h={tooltip:{trigger:"item",formatter:"{b}<br/> : {c} ({d}%)"},color:[a,"#DDDDDD"],legend:{orient:"vertical",x:"center",y:"bottom",icon:"line",data:[o]},series:[{name:"访问来源",type:"pie",silent:!0,radius:["60%","70%"],center:["50%","50%"],avoidLabelOverlap:!1,label:{normal:{show:!0,position:"center"},emphasis:{show:!0,textStyle:{fontSize:"30",fontWeight:"bold"}}},labelLine:{normal:{show:!1}},data:l}]};c.setOption(h)},EchartsRanking(t,e,a,i,r){var o=e,s=t;let c=n.init(document.getElementById("ranking"));var l=[];l.push({value:i,name:o,label:{normal:{formatter:s,textStyle:{fontSize:18}}}}),l.push({value:r,name:"收入预期",label:{normal:{formatter:"",textStyle:{color:"#555",fontSize:13}}}});var h={tooltip:{trigger:"item",formatter:"{b}<br/> : {c} ({d}%)"},color:[a,"#DDDDDD"],legend:{orient:"vertical",x:"center",y:"bottom",icon:"line",data:[o]},series:[{name:"访问来源",type:"pie",silent:!0,radius:["60%","70%"],center:["50%","50%"],avoidLabelOverlap:!1,label:{normal:{show:!0,position:"center"},emphasis:{show:!0,textStyle:{fontSize:"30",fontWeight:"bold"}}},labelLine:{normal:{show:!1}},data:l}]};c.setOption(h)},EchartsRankingList(t,e,a){for(var i="",r=[],o=e,s=[],c=0;c<t.length;c++){var l="";l="固戍净化厂"===t[c].name||"福永净化厂"===t[c].name?t[c].name.slice(0,5):t[c].name.slice(0,4),r.push(l),-1===String(t[c].value).indexOf(".")?s.push(t[c].value):s.push(t[c].value.toFixed(1))}switch(o){case"水质达标天数排名":i="天";break;default:i="数值"}let h={name:i,splitArea:{show:!0},splitLine:{show:!1,color:["#fffffe"]},axisTick:{show:!1},axisLine:{show:!1,lineStyle:{}},axisLabel:{textStyle:{color:"#000"}}};"天"===i&&(h={name:i,splitArea:{show:!0},minInterval:1,splitLine:{show:!1,color:["#ffffff"]},axisTick:{show:!1},axisLine:{show:!1,lineStyle:{}},axisLabel:{textStyle:{color:"#000"}}});let u=n.init(document.getElementById("rangkingList"));var d={color:[a],title:{text:""},grid:{left:"4%",right:"4%",bottom:"3%",containLabel:!0},legend:{data:[o],align:"left",icon:"line",textStyle:{color:"#000"},top:30},toolbox:{feature:{}},tooltip:{},xAxis:{data:r,silent:!0,splitLine:{show:!1,color:["#fdfdfd"]},axisTick:{show:!1},axisLine:{show:!1,lineStyle:{}},axisLabel:{interval:0,formatter:function(t){return t.split("").join("\n")},textStyle:{color:"#000"}}},yAxis:h,series:[{name:o,type:"bar",data:s,itemStyle:{emphasis:{barBorderRadius:14},normal:{barBorderRadius:14,color:new n.graphic.LinearGradient(0,1,1,0,[{offset:0,color:"#FFFFFF"},{offset:1,color:a}])}},barWidth:14,animationDelay:function(t){return 10*t}}],animationEasing:"elasticOut",animationDelayUpdate:function(t){return 5*t}};u.setOption(d)},switchData(t){var e="";switch(t){case"pH":e="pH";break;case"氨氮":e="ammoniaNitrogen";break;case"总铬":e="chromium";break;case"总铜":e="cuprum";break;case"总镍":e="nickel";break;case"总氮":e="nitrogen";break;case"总磷":e="phosphorus";break;case"总氰化物":e="prussiate";break;case"污染指数":e="pollutionIndex";break;case"化学含氧量":e="COD"}return console.log(e),e},EightPic(t,e){var a=[],i=[];for(let e=0;e<t.length;e++){var r=t[e].name,o=t[e].value;a.push(r),i.push(-1===o?0:o.toFixed(1))}var s={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"4%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",show:!0,data:a,axisLabel:{interval:0,formatter:function(t){return t.split("").join("\n")},textStyle:{color:"#000"}},splitArea:{show:!0},minInterval:1,splitLine:{show:!1,color:["#ffffff"]},axisTick:{show:!1},axisLine:{show:!1,lineStyle:{}}}],yAxis:[{type:"value",name:"分污染指数",interval:6,axisLabel:{formatter:"{value}"},splitArea:{show:!0},minInterval:1,splitLine:{show:!1,color:["#ffffff"]},axisTick:{show:!1},axisLine:{show:!1,lineStyle:{}}}],series:[{name:e+"污染指数",type:"bar",itemStyle:{normal:{barBorderRadius:14,color:new n.graphic.LinearGradient(0,1,1,0,[{offset:0,color:"#FFFFFF"},{offset:1,color:"#26C0C0"}]),label:{show:!0,position:"top",formatter:"{c}",color:"#26C0C0"}}},barWidth:14,data:i}]};n.init(document.getElementById("rankingZhu")).setOption(s)}}},FYws:function(t,e,a){"use strict";(function(t){var n=a("Xxa5"),i=a.n(n),r=a("exGp"),o=a.n(r),s=a("6agX"),c=a("M5WX"),l=a("Tm+r"),h=a("7+uW"),u=a("Fd2+");h.default.use(u.J),h.default.use(u.A),e.a={data:function(){return{startx:"",starty:"",showStartTimeQuery:!1,threeStyle:"",weekStyle:"",monthStyle:"",station:"pH",stationContent:["pH","氨氮","总氮","总磷","总铜","总镍","总氰化物","总铬"],startTime:"",lastTime:"",openTime:!1,token:"",index:0,list:[],color:"",value:0,search:"ph",array:[],i:0,backStreet:"",background:"",type:"0",showBtn:!1,arrayBtn:[{name:"监测值排名",colorBtn:"background:#b4d0ff;color:#005cff"},{name:"水质达标天数",colorBtn:""},{name:"环比变化量排名",colorBtn:""},{name:"环比排名变化量",colorBtn:""}],openedTime:!1,currentDate:new Date,minDate:new Date("1970-07-01"),TimeValue:"",endTime:"",factor:"",factorName:"",showStartTime:"",showEndTime:"",currentDate1:new Date,minDate1:new Date("2017-07-01"),maxDate1:new Date,timeDates:0,margin:""}},methods:{confirmTimeque:function(t){this.showStartTimeQuery=!1,this.endTime=c.a.filter(t);var e=this.timeDates;this.Day(e,this.endTime)},selectStartTime:function(){this.showStartTimeQuery=!0},Day:function(t,e){if(0===e){var a=c.a.DateTime(e);this.startTime=c.a.DateTime1(t,a),this.endTime=a}else this.startTime=c.a.DateTime1(t,e);switch(t){case 3:this.threeStyle="",this.weekStyle=" border:none;color:rgb(221, 230, 249)",this.monthStyle="border:none;color:rgb(221, 230, 249)";break;case 7:this.threeStyle="border:none;color:rgb(221, 230, 249)",this.weekStyle="",this.monthStyle="border:none;color:rgb(221, 230, 249)";break;default:this.threeStyle="border:none;color:rgb(221, 230, 249)",this.weekStyle="border:none;color:rgb(221, 230, 249)",this.monthStyle=""}this.timeDates=t,this.showStartTime=c.a.filterDatePoint(this.startTime),this.showEndTime=c.a.filterDatePoint(this.endTime),this.initData(this.factor,this.factorName),this.initDataRanking()},confirmTime:function(t){switch(this.openedTime=!1,this.TimeValue){case"start":this.startTime=c.a.filter(t);break;default:this.endTime=c.a.filter(t)}},closeTime:function(){this.openedTime=!1},selectBtn:function(t,e){console.log(e),this.arrayBtn=l.a.selectBtn(t,e),this.changeRankingData(t)},selectValuePic:function(){var t=this;new PickerView({bindElem:selectYinzi,data:this.stationContent,title:"筛选项",leftText:"取消",rightText:"确定",rightFn:function(e){console.log(e[0]),t.station=e[0];var a=s.a.switchData(e[0]);t.initData(a,e[0])}})},close:function(){this.openTime=!1},confirmQuery:function(){this.openTime=!1,console.log(this.station),this.initData(this.search),this.initDataRanking()},closeBottomSheet:function(){this.openTime=!1},changeRankingData:function(t){switch(t){case 0:this.color="#4ed995";break;case 1:this.color="#fbc02d";break;case 2:this.color="#ef6c00";break;case 3:this.color="#2196f3"}s.a.EchartsRankingList(this.array[t].arrData,this.array[t].arrName,this.color)},toBack:function(){this.$router.go(-1)},openBotttomSheet:function(){this.openTime=!0},initData:function(t,e){var a=this;return o()(i.a.mark(function n(){var r,o,l,h,d,m;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r="/station/water-data/gridRanking",o=a.startTime,l=a.endTime,""===t||void 0===t?(h="pH",d="pH"):(h=t,d=e),a.factor=h,a.factorName=d,n.next=8,c.a.request(r,"POST",{endTime:l,startTime:o,search:h},a.token);case 8:m=n.sent,console.log(m),0===m.data.data.length?Object(u.J)("此时间段，"+a.station+"的数据为空，请重新选择"):(s.a.EightPic(m.data.data,d),console.log("res",m),a.list=m.data.data);case 11:case"end":return n.stop()}},n,a)}))()},forData:function(t){for(var e=0,a=0;a<t.length;a++){var n=t[a].value;t[a].value=n.toFixed(1),e+=n=Number(t[a].value)}this.value=e,s.a.EchartsRanking(t[0].value,t[0].name,"#4ed995",t[0].value,e),s.a.EchartsRanking1(t[1].value,t[1].name,"#fbc02d",t[1].value,e),s.a.EchartsRanking2(t[2].value,t[2].name,"#ef6c00",t[2].value,e)},initDataRanking:function(){var t=this;return o()(i.a.mark(function e(){var a,n,r,o,s,l;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a="/station/water-data/gridRanking/analysis",n=t.endTime,r=t.station,o=t.startTime,s=t.type,e.next=7,c.a.request(a,"POST",{endTime:n,search:r,startTime:o,type:s},t.token);case 7:l=e.sent,console.log("街道",l),e.t0=s,e.next="0"===e.t0?12:15;break;case 12:return t.background="color: #0051de;background: #b4d0ff;",t.backStreet="color:#000;background:white",e.abrupt("break",18);case 15:return t.backStreet="color:#0051de;background:#b4d0ff;",t.background="color:#000;background:#FFffff",e.abrupt("break",18);case 18:t.forRankingData(l.data.data);case 19:case"end":return e.stop()}},e,t)}))()},forRankingData:function(t){for(var e in this.array=[],t)if(t.hasOwnProperty(e)){var a=t[e];console.log(a),console.log(e),this.array.push({arrName:e,arrData:a,colorBtn:"background:white"})}s.a.EchartsRankingList(this.array[0].arrData,this.array[0].arrName,"#4ed995")},dataScoll:function(){window.addEventListener("touchstart",this.startFun,!0),window.addEventListener("touchend",this.endFunc,!0)},getAngle:function(t,e){return 180*Math.atan2(e,t)/Math.PI},startFun:function(t){this.startx=t.touches[0].pageX,this.starty=t.touches[0].pageY},endFunc:function(e){var a,n;switch(a=e.changedTouches[0].pageX,n=e.changedTouches[0].pageY,this.getDirection(this.startx,this.starty,a,n)){case 0:console.log("未滑动！");break;case 1:this.margin="margin-top:50px",t("#showHeader").slideUp(200);break;case 2:t("#showHeader").slideDown(200),this.margin="margin-top:145px";break;case 3:console.log("向左！");break;case 4:console.log("向右！")}},getDirection:function(t,e,a,n){var i=a-t,r=n-e,o=0;if(Math.abs(i)<2&&Math.abs(r)<2)return o;var s=this.getAngle(i,r);return s>=-135&&s<=-45?o=1:s>45&&s<135?o=2:s>=135&&s<=180||s>=-180&&s<-135?o=3:s>=-45&&s<=45&&(o=4),o}},mounted:function(){var t=this;return o()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return window.addEventListener("touchstart",t.startFun,!0),window.addEventListener("touchend",t.endFunc,!0),t.token=sessionStorage.getItem("token"),e.next=5,c.a.DateTime(7);case 5:return t.startTime=e.sent,e.next=8,c.a.DateTime(0);case 8:t.endTime=e.sent,t.Day(7,t.endTime);case 10:case"end":return e.stop()}},e,t)}))()},destroyed:function(){window.removeEventListener("touchstart",this.startFun,!0),window.removeEventListener("touchend",this.endFunc,!0)}}}).call(e,a("7t+N"))},LFgQ:function(t,e){},REzS:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("FYws"),i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("van-nav-bar",{staticClass:"backgroundNaviBar",attrs:{fixed:!0,title:"水环境质量排名","left-arrow":"","z-index":"999",border:!1},on:{"click-left":function(){t.$router.go(-1)}}}),t._v(" "),a("div",{staticClass:"fixedRanking backgroundNaviBar"},[a("div",{staticClass:"backgroundNaviBar",staticStyle:{color:"white"},attrs:{id:"showHeader"}},[a("div",{staticClass:"selectTimeFast"},[a("div",{staticClass:"three",style:t.threeStyle,on:{click:function(e){return t.Day(3,0)}}},[a("span",[t._v("近三天")])]),t._v(" "),a("div",{staticClass:"week",style:t.weekStyle,on:{click:function(e){return t.Day(7,0)}}},[a("span",[t._v("近一周")])]),t._v(" "),a("div",{staticClass:"month",style:t.monthStyle,on:{click:function(e){return t.Day(30,0)}}},[a("span",[t._v("近一月")])])]),t._v(" "),a("div",{staticClass:"imageSizeTime"},[a("div",{staticClass:"flexTime",staticStyle:{width:"100%"},on:{click:function(e){return t.selectStartTime()}}},[a("span",{staticClass:"leftTime"},[t._v(t._s(t.showStartTime))]),t._v(" "),a("span",[t._v("-")]),t._v(" "),a("span",{staticClass:"rightTime"},[t._v(t._s(t.showEndTime))]),t._v(" "),t._m(0)])])])]),t._v(" "),a("div",{staticClass:"headerRanking border-radius",style:t.margin},[a("div",{staticClass:"cont"},[t._m(1),t._v(" "),a("div",{staticClass:"headerTitle",attrs:{id:"selectYinzi"},on:{click:t.selectValuePic}},[a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.station,expression:"station"}],attrs:{type:"text",placeholder:"因子名称",disabled:""},domProps:{value:t.station},on:{input:function(e){e.target.composing||(t.station=e.target.value)}}})]),t._v(" "),t._m(2)])]),t._v(" "),a("div",{attrs:{id:"rankingZhu"}})]),t._v(" "),a("div",{staticClass:"btnRanking"},[t._m(3),t._v(" "),a("div",{staticClass:"btn"},[a("span",{staticClass:"left",style:t.background,on:{click:function(){t.type="0",t.initDataRanking()}}},[t._v("站点")]),t._v(" "),a("span",{staticClass:"spanRight",style:t.backStreet,on:{click:function(){t.type="1",t.initDataRanking()}}},[t._v("街道")])])]),t._v(" "),a("div",{staticClass:"rankingCont"},[a("div",{attrs:{id:"rangkingList"}}),t._v(" "),a("div",{staticClass:"btnToSelect border-radius"},t._l(t.arrayBtn,function(e,n){return a("div",{key:n,staticClass:"Forbtn border-radius",style:e.colorBtn,on:{click:function(e){return t.selectBtn(n,t.arrayBtn)}}},[a("span",[t._v(t._s(e.name))])])}),0)]),t._v(" "),a("van-popup",{attrs:{position:"bottom"},model:{value:t.showStartTimeQuery,callback:function(e){t.showStartTimeQuery=e},expression:"showStartTimeQuery"}},[a("van-datetime-picker",{attrs:{type:"date","min-date":t.minDate1,"max-date":t.maxDate1},on:{confirm:t.confirmTimeque,cancel:function(){t.showStartTimeQuery=!1}},model:{value:t.currentDate1,callback:function(e){t.currentDate1=e},expression:"currentDate1"}})],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"img"},[e("img",{staticStyle:{"margin-left":"5px"},attrs:{src:"static/imgs/historyToBottom.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"headerThree",staticStyle:{border:"none"}},[e("span",{staticClass:"borderLeft"},[this._v("实时污染排名统计")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"imageSize"},[e("img",{attrs:{src:"static/img/toBottom.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"headerThree"},[e("span",{staticClass:"borderLeft"},[this._v("排名统计")])])}]};var r=function(t){a("LFgQ")},o=a("VU/8")(n.a,i,!1,r,"data-v-3ac4bf3b",null);e.default=o.exports},"Tm+r":function(t,e,a){"use strict";e.a={selectBtn(t,e){switch(t){case 0:e[0].colorBtn="background:#b4d0ff;color:#005cff",e[1].colorBtn="background:white",e[2].colorBtn="background:white",e[3].colorBtn="background:white";break;case 1:e[0].colorBtn="background:white",e[1].colorBtn="background:#b4d0ff;color:#005cff",e[2].colorBtn="background:white",e[3].colorBtn="background:white";break;case 2:e[0].colorBtn="background:white",e[1].colorBtn="background:white",e[2].colorBtn="background:#b4d0ff;color:#005cff",e[3].colorBtn="background:white";break;case 3:e[0].colorBtn="background:white",e[1].colorBtn="background:white",e[2].colorBtn="background:white",e[3].colorBtn="background:#b4d0ff;color:#005cff"}return e}}}});
//# sourceMappingURL=13.b1e272f03b07f8679802.js.map