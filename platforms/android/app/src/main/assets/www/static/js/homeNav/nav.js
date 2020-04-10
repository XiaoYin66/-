var ImageListContentDailyAdmin = [
  {
    image: "static/imgs/warningControl.png",
    name: "预警管理",
    state: true
  },
  {
    image: "static/imgs/eventControl.png",
    name: "事件上报",
    state: true
  },
  { image: "static/imgs/taskControl.png", name: "任务管理", state: true },
  // { image: "static/imgs/dataControl.png", name: "数据管理", state: true },
  {
    image: "static/imgs/dailyControl.png",
    name: "监测任务",
    state: true
  },
  // {
  //   image: "static/imgs/Vehiclemanagement.png",
  //   name: "车辆管理",
  //   state: true
  // },

  { image: "static/imgs/Userfeedback.png", name: "反馈列表", state: true },
  { image: "static/imgs/Useraudit.png", name: "用户审核", state: true },
  // {
  //   image: "static/imgs/dailyControl.png",
  //   name: "日志管理",
  //   state: true
  // }

  // { image: "static/imgs/more.png", name: "更多", state: true }
];

var ImageListContentDailyOprate = [
  {
    image: "static/imgs/warningControl.png",
    name: "预警管理",
    state: true
  },
  {
    image: "static/imgs/eventControl.png",
    name: "事件上报",
    state: true
  },
  { image: "static/imgs/taskControl.png", name: "任务管理", state: true },
  // { image: "static/imgs/dataControl.png", name: "数据管理", state: true },
  {
    image: "static/imgs/dailyControl.png",
    name: "监测任务",
    state: true
  },

  // {
  //   image: "static/imgs/dailyControl.png",
  //   name: "更多.",
  //   state: true
  // }
  // { image: "static/img/Vehiclemanagement.png", name: "车辆管理", state: false },
  // { image: "static/img/Useraudit.png", name: "用户审核", state: false },
  // { image: "static/img/Userfeedback.png", name: "反馈列表", state: false },
  // { image: "static/img/more.png", name: "更多", state: false }
];

var ImageListContentDailyManager = [
  {
    image: "static/imgs/eventControl.png",
    name: "事件上报",
    state: true
  },
  { image: "static/imgs/taskControl.png", name: "任务管理", state: true },
  {
    image: "static/imgs/dailyControl.png",
    name: "日志管理",
    state: true
  },
  // { image: "static/imgs/dataControl.png", name: "数据管理", state: true },
  {
    image: "static/imgs/warningControl.png",
    name: "预警管理",
    state: true
  },
  // { image: "static/img/Vehiclemanagement.png", name: "车辆管理", state: false },
  // { image: "static/img/Useraudit.png", name: "用户审核", state: false },
  // { image: "static/img/Userfeedback.png", name: "反馈列表", state: false },
  { image: "static/imgs/more.png", name: "更多", state: true }
];

var ImageListContentDailyStation = [
  {
    image: "static/imgs/warningControl.png",
    name: "预警管理",
    state: true
  },
  {
    image: "static/imgs/eventControl.png",
    name: "事件上报",
    state: true
  },
  { image: "static/imgs/taskControl.png", name: "任务管理", state: true },
  // { image: "static/imgs/dataControl.png", name: "数据管理", state: true },
  // { image: "static/imgs/Vehiclemanagement.png", name: "车辆管理", state: true },
  // {
  //   image: "static/imgs/dailyControl.png",
  //   name: "日志管理",
  //   state: false
  // },

  // { image: "static/imgs/Useraudit.png", name: "用户审核", state: false },
  // { image: "static/imgs/Userfeedback.png", name: "反馈列表", state: false },
  { image: "static/imgs/Vehiclemanagement.png", name: "监测调度", state: true }
];
export default {
  ImageListContentDaily(e) {
    var ImageListContentDaily = [];
    switch (e) {
      case "admin":
        ImageListContentDaily = ImageListContentDailyAdmin;
        break;
      case "station":
        ImageListContentDaily = ImageListContentDailyStation;
        break;
      case "operator":
        ImageListContentDaily = ImageListContentDailyOprate;
        break;
    }
    return ImageListContentDaily;
  }
};
