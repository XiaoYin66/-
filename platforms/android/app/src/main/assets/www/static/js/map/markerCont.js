import Vue from "vue";
import { stringify } from "querystring";
var warningid = "";
var _this = this;
var content = "";
var img = "static/img/NaviTo.png";
var imgSize = `width: 30px;height: 30px;display: flex;flex-direction: row;justify-content: center;align-items: center;`;
var flexStyle = `display: flex;flex-direction: row;align-items: center;`;
var MyComponent = Vue.extend({
  template: content,
  methods: {
    world: function() {
      console.log(_this, "MyComponent");
      //点击事件 使用 组件对象
    }
  }
});
var component = new MyComponent().$mount();
var style = "border-radius: 10px;color:green;background:white;padding:5px;";

export default {
  data: {
    abc: "111"
  },

  mapMarkerNormal(
    stationName,
    systemName,
    waterInfo,
    address,
    lng,
    lat,
    handleStatus,
    color1,
    id,
    deviceStatus
  ) {
    var addressName = "";
    if (address.length>14) {
      addressName =  address.slice(0,14)+"...";
    }
    var device = "";
    var color = "";
    switch (deviceStatus) {
      case 0:
          device = "异常";
          color = "red";
        break;
      case 1:
        device = "正常";
        color = "green";
        break;

      default:
        device = "维护";
        color = "orange";
        break;
    }
    // console.log(id);
    // warningid = id;
    var iphone = "13277383444";
    content = `<div class="TextPosition">
    <div class="flexCont">
       <div style="flex:1">
       <span class="Markertitle">站点名称：</span>
       <span >${stationName}</span>
     </div>
    </div> 
    <div class="flexCont">
        <div style="flex:1">
        <span class="Markertitle">水质状况：</span>
        <span style="color:${
          waterInfo === "超标" ? "red" : "blue"
        }">${waterInfo}</span>
    </div>
      <div style="flex:1">
        <span class="Markertitle">设备状况：</span>
        <span style="color:${color}">${device}</span>
      </div>
    </div>
    <div class="flexCont">
       <div style="flex:1">
          <span class="Markertitle">处理状态：</span>
          <span style="color:${color1}" v-on:click="handleWarning('${
      id === undefined || id === "" ? "" : id.toString()
    },${stationName},${handleStatus}')">${handleStatus}</span>
       </div>
        <div style="flex:1">
          <span class="Markertitle">实时数据：</span>
          <span style="color:blue" id="realDataLookFor" v-on:click="LookReaData('${stationName}')">查看</span>
        </div>
    </div>
    <div class="flexCont">
      <div style="flex:1">
        <span class="Markertitle">站点负责人：</span>
        <span>瞿凡清</span>
      </div>
      <div style="flex:1">
        <span class="Markertitle">电话号码：</span>
        <span style="color:blue" v-on:click="callStation(${iphone})">13277383444</span>
      </div>
    </div>
    <div class="addressHeight">
      <div>
        <span class="Markertitle">详细地址：</span>
        <span>${address}</span>
      </div>
    </div>
    <div class="positionAbMapCar" v-on:click="world(${lng},${lat})" > 
      <div v-on:click="world(${lng},${lat})">
      <img src="static/img/NaviTo.png" alt="">
    </div>
     
    </div>
  </div>`;

    //   <div v-on:click="world(${lng},${lat})">
    //   <img src="static/img/NaviTo.png" alt="">
    // </div>
    // <div v-on:click="toBim('${systemName},${stationName}')" class="bimImage">
    // <img src="static/imgs/bim.png" alt="">
    // </div>
    // <div>
    //      <span class="Markertitle">实时数据：</span>
    //      <span style="color:blue" v-on:click="LookReaData('${1}')">查看</span>
    //    </div>
    return content;
  },
  // <span style="color:#6e92f2">正常</span>
  mapMarkerErr(
    stationName,
    systemName,
    waterInfo,
    address,
    lng,
    lat,
    handleStatus,
    color,
    id
  ) {
    var content = `<div class="TextPosition">
    
    <div class="flexCont">
      <div>
        <span class="Markertitle">水站名称：</span>
        <span >${stationName}</span>
      </div>
      <div>
        <span class="Markertitle">水质状况：</span>
        <span>${waterInfo}</span>
      </div>
    </div>
    <div class="flexCont">
      <div>
        <span class="Markertitle">设备系统号：</span>
        <span>${systemName}</span>
      </div>
      <div>
        <span class="Markertitle">设备状况：</span>
        
        <span style="color:#ff8888">异常</span>
      </div>
    </div>
    <div class="flexCont">
      <div>
        <span class="Markertitle">处理状态：</span>
        <span style="color:${color}" v-on:click="handleWarning(id)">${handleStatus}</span>
      </div>
    </div>
    <div class="flexCont">
      <div>
        <span class="Markertitle">详细地址：</span>
        <span>${address}</span>
      </div>
    </div>
    <div class="positionAbMap" v-on:click="world(${lng},${lat})">
      <img src="static/img/NaviTo.png" alt="">
    </div>
  </div>`;
    return content;
  },
  mapCarContent(
    lng,
    lat,
    pollutionIndex,
    pollutantName,
    waterStatus,
    person,
    vehicleId,
    routingName,
    i
  ) {
    var content =
      "<div id='markerContent'> " +
      "<div><span>地理位置：</span>" +
      "经度:" +
      lng +
      "<br/>" +
      "纬度:" +
      lat +
      "</div>" +
      // "<div><span>地理位置：</span>"+ "纬度113.00" + "</div>"
      "<div><span>综合污染指数：</span>" +
      pollutionIndex.toFixed(2) +
      "</div>" +
      "<div><span>超标因子：</span>" +
      pollutantName +
      "</div>" +
      "<div><span>状态：</span>" +
      waterStatus +
      "</div>" +
      "<div><span>监测人员：</span>" +
      person +
      "</div>" +
      "<div><span>车辆编号：</span>" +
      vehicleId +
      "</div>" +
      "<div><a href='#/Details?routingName=" +
      routingName +
      "&&id=" +
      i +
      "'>查看详情</a></div>" +
      `<div v-on:click="world('${lng}','${lat}')" style='${flexStyle}'>
        
        <div style='${imgSize}' id='imgSize'>
          <img src='${img}' />
        </div>
      </div>`;

    return content;
  },
  mapCarStatus(
    stationName,
    deviceName,
    carStatus,
    deviceStatus,
    address,
    lng,
    lat,
    waterInfo,
    systemStatus
  ) {
    var warningStatus = "";
    var color = "";
    switch (systemStatus) {
      case 0:
        warningStatus = "待处理";
        color = "red";
        break;
      case 2:
        warningStatus = "已处理";
        color = "green";
        break;
      case 1:
        warningStatus = "正在处理";
        color = "orange";
        break;
      default:
        warningStatus = "暂无";
        color = "";
        break;
    }
    var content = `<div class="TextPosition">
       
        <div class="flexCont">
          <div style="flex:1">
            <span class="Markertitle">站点名称：</span>
            <span >${stationName}</span>
          </div>
          <div style="flex:1">
            <span class="Markertitle">车辆状态：</span>
            <span style="${
              carStatus === "1" ? "color:green" : "color:orange"
            }">${carStatus === "1" ? "任务中" : "待命中"}</span>
          </div>
        </div>
        <div class="flexCont">
          <div style="flex:1">
            <span class="Markertitle">设备系统号：</span>
            <span>${deviceName}</span>
          </div>
          <div style="flex:1">
            <span class="Markertitle">设备状态：</span>

            <span style="${deviceStatus === 0 ? "color:red" : "color:green"}">${
      deviceStatus === 0 ? "异常" : "正常"
    }</span>
          </div>
        </div>
        <div class="flexCont">
          <div style="flex:1">
            <span class="Markertitle">水质状况：</span>
            <span>${waterInfo}</span>
          </div>
          <div style="flex:1">
            <span class="Markertitle">处理状态：</span>

            <span style="${"color:" + color}">${warningStatus}</span>
          </div>
        </div>
        <div class="flexCont">
          <div style="flex:1">
            <span class="Markertitle">详细地址：</span>
            <span>${address}</span>
          </div>
        </div>
        <div class="positionAbMapCar " >
          <div v-on:click="world(${lng},${lat})">
            <img src="static/img/NaviTo.png" alt="">
          </div> 
        </div>
      </div>`;
    return content;
  },

  // 正常
  mapCarStatusNormal(res) {
    var arr = res;
    var content =
      "<div id='markerContent'> " +
      "<div><span>站点名称：</span>" +
      arr.pollutantName +
      "</div>" +
      "<div><span>设备状态：</span>" +
      "暂无" +
      "<div><span>污染指数：</span>" +
      arr.pollutionIndex +
      "</div>" +
      "<div><span>pH：</span>" +
      arr.ph +
      "</div>" +
      "<div><span>化学含氧量：</span>" +
      arr.cod +
      "</div>" +
      // lastMonitor
      "<div><span>氨氮：</span>" +
      arr.ammoniaNitrogen +
      "</div>" +
      "<div><span>总氮：</span>" +
      arr.nitrogen +
      "</div>" +
      "<div><span>总磷：</span>" +
      arr.phosphorus +
      "</div>" +
      "<div><span>总镍：</span>" +
      arr.nickel +
      "</div>" +
      "<div><span>总铬：</span>" +
      arr.chromium +
      "</div>" +
      "<div><span>总铜：</span>" +
      arr.cuprum +
      "</div>" +
      "<div><span>总氰化物：</span>" +
      arr.prussiate +
      "</div>" +
      "</div>" +
      "<div><span>详细地址：</span>" +
      "暂无" +
      "</div>" +
      `<div v-on:click="world('${res.longitude}','${res.latitude}')" style='${flexStyle}'>
       
        <div style='${imgSize}' id='imgSize'>
        <img src='${img}' />
        </div>
      </div></div>`;
    return content;
  }

  //   站点名称、设备系统号、车辆状态、设备状态、详细地址
};
