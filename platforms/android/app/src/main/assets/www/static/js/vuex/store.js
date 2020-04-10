import Vue from "vue";
import Vuex from "vuex";
import AppBace from "../../ajax";
Vue.use(Vuex);
var state = {
  // 管理地图状态
  mapStatus:true,
  // 管理历史数据刷新状态
  historyStatus:false,
  status:0,
  // 运维详情内容
  controlContent:[],
  // 更新状态
  upDateStatus:false,
  // 更新的数据内容
  uadataContent:[],
  appVersion:0,
  // 历史数据
  historyData:{
    starttime:"",
    lastTime:"",
    waterstation:""
  },
  // 背景
  bacground: `background: -webkit-linear-gradient(to left, #328efb, #4abbfe);
  background: linear-gradient(to left, #328efb, #4abbfe);`,
  // tab
  tabBarPage: 0,
  showStaion: false,
  // showGaode
  showGaode: false,
  // 主界面的按钮状态
  btnStatus: false,
  type: "true",
  token: "",
  user: "",
  deviceId: "",
  warningId: "",
  menu: [],
  permisions: [],
  tab: [],
  ziqiUrl: "http://192.168.50.152:",
  enterprise: [],
  vehicleList: [],
  handle: [],
  cameraPic: [],
  username: "",
  headerImage: "",
  dispatching: [],
  enterpriseNum: [],
  taskStatus: 0,
  routingName: "",
  onlineTask: [],
  vehicleIdStatus: "",
  time: "",
  taskId: 0,
  pointName: [],
  id: 0,
  stateName: [],
  pointPictrue: [],
  // 默认设置的开始与结束时间
  startTime: AppBace.DateTime(7),
  lastTime: AppBace.filter(new Date()),
  // 主题色
  color: "#3572fe",
  // 预警站点
  warningStation: "",
  // showCod 移动与固定站定的区别
  showCod: false,

  // 九大因子的标准值
  factor: {
    ph: 6,
    ph1: 9,
    cod: 280,
    // 氨氮
    ammoniaNitrogen: 35,
    // 总氮
    nitrogen: 40,
    // 总磷
    phosphorus: 6,
    // 总铜
    cuprum: 1,
    // 总镍
    nickel: 0.5,
    // 总铬
    chromium: 0.5,
    // 总氰化物
    prussiate: 0.4
  },
  // 污染溯源
  pollutionData: [],
  // yinzi
  stationContent: [
    "pH",
    "COD",
    "氨氮",
    "总氮",
    "总磷",
    "总铜",
    "总镍",
    "总氰化物",
    "总铬"
  ],
  standardTable: [
    {
      item: "pH",
      standard: "6.0 ~ 9.0",
      basis: "沙井污水处理厂进水水质设计标准"
    },
    {
      item: "COD",
      standard: "260.0 mg/L",
      basis: "沙井污水处理厂进水水质设计标准"
    },
    {
      item: "氨氮",
      standard: "30.0 mg/L",
      basis: "沙井污水处理厂进水水质设计标准"
    },
    {
      item: "总磷",
      standard: "4.0 mg/L",
      basis: "沙井污水处理厂进水水质设计标准"
    },
    {
      item: "总氮",
      standard: "40.0 mg/L",
      basis: "沙井污水处理厂进水水质设计标准"
    },
    {
      item: "总铜",
      standard: "2.0 mg/L",
      basis: "《污水综合排放标准》三级标准"
    },
    {
      item: "总镍",
      standard: "1.0 mg/L",
      basis: "《污水综合排放标准》三级标准"
    },
    {
      item: "总铬",
      standard: "1.5 mg/L",
      basis: "《污水综合排放标准》三级标准"
    },
    {
      item: "总氰化物",
      standard: "1.0 mg/L",
      basis: "《污水综合排放标准》三级标准"
    }
  ],
  // websocket的预警提醒推送内容
  websocketWarningData: [],
  // websocket的任务提醒推送内容
  websocketTaskData: [],
  // 选择器
  dropDownData: "",
  // 预警管理的批量处理
  warningIdList: []
};

var mutations = {
  // 运维
  controlFunc(state,data){
    state.controlContent = data;
  },
  // 批量处理
  warningIdListCommit(state, data) {
    state.warningIdList = data;
  },
  // websocket
  websocketWarningDataFuc(state, data) {
    state.websocketWarningData = data;
  },
  websocketTaskDataFuc(state, data) {
    state.websocketTaskData = data;
  },

  cun: function(a, b) {
    // console.log(a, b, "mutations");
    a.token = b;
  },
  add: function(a, b) {
    // console.log(a, b, "mutations");
    // console.log(a)
  },
  menu: function(a, b) {
    // console.log(a, b, "menu");
    // console.log(a.menu);
  },
  deleteData(state) {
    // console.log(1,"垃圾");
    // console.log(state.deviceId);
  },
  deleteDataMenu(state, a) {
    // console.log(1,"垃圾");
    // console.log(state);
    state.menu = a;
    // console.log(a);
  },
  enterprise(state, a) {
    state.enterprise = a;
    // console.log(a);
  },
  permisions(state, a) {
    // console.log(state);
    state.permisions = a;
    // console.log("a",a);
  },
  vehicleListContent(state, a) {
    // console.log(state);
    state.vehicleList = a;
    // console.log("a213", a);
  },
  warningContent(state, a) {
    // console.log(state);
    state.handle = a;
    // console.log("a1", a);
  },
  // 保存相机的数据
  cameraPicture(state, pic) {
    state.cameraPic.push(pic);
    state.headerImage = pic;
  },
  // 储存用户名称
  usernameLocal(state, user) {
    state.username = user;
  },
  // 监测调度数据储存
  dispatchingData(state, data) {
    state.dispatching = data;
  },
  // 企业名称
  enterpriseData(state, data) {
    state.enterpriseNum = data;
    //  pollutantSource
  },
  // 任务状态
  onlinetaskData(state, data) {
    state.onlineTask = data;
  },
  // 新增的点位数据列表
  pointDataList(state, data) {
    state.pointName = data;
  },

  // 点位上传图片
  pointPicUpload(state, data) {
    state.pointPictrue = data;
  },
  // 存储水站名称
  stateNameStation(state, data) {
    state.stateName = data;
  },
  // 开始与结束时间
  startTimeCommit(state, data) {
    state.startTime = data;
  },
  lastTimeCommit(state, data) {
    state.lastTime = data;
  },
  // 预警站点
  warningStationHandle(state, data) {
    state.warningStation = data;
  },
  pollutionDataListID(state, data) {
    state.pollutionData = data;
  }

  
  // 污染溯源
  // pollutionData:[],
};
var actions = {
  cun({ commit }, i) {
    commit("cun", i);
  },
  add({ commit }, j) {
    commit("add", j);
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions
});
