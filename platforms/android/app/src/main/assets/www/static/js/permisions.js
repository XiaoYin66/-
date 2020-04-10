// 超级管理员
var menuListAdmin = [
  {
    // img: "static/imgs/realDataHome.png",
    img: {
      backgroundImage:
        "url(static/backNavi/realData.png)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100% 100%"
    },
    name: "实时数据",
    status: true,
    color: "#68a4e6",

  },
  {
    // img: "static/imgs/historyData.png",
    img: {
      backgroundImage:
        "url(static/backNavi/historyData.png)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100% 100%"
    },
    name: "历史数据",
    status: true,
    color: "#f77f62"
  },
  {
    // img: "static/img/navigationFuzu.png",
    img: {
      backgroundImage:
        "url(static/backNavi/fuzhu.png)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100% 100%"
    },
    name: "辅助决策",
    status: true,
    color: "#2cbe55"
  },
  {
    img: {
      backgroundImage:
        "url(static/backNavi/control.png)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100% 100%"
    },
    // img: "static/img/Maintenance.png",
    name: "维护维修",
    status: true,
    color: "#852cbe"
  },
  {
    img: {
      backgroundImage:
        "url(static/backNavi/control.png)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100% 100%"
    },
    name: "运维管理",
    status: true,
    color: "#852cbe"
  },
  {
    // img: "static/img/controlListBtn.png",
    img: {
      backgroundImage:
        "url(static/backNavi/runControl.png)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100% 100%"
    },
    name: "运维列表",
    status: true,
    color: "#f762b3"

  },
  
  {
    // img: "static/imgs/DailyControlBtn.png",
    img: {
      backgroundImage:
        "url(static/backNavi/dailyControl.png)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100% 100%"
    },
    name: "日常管理",
    status: true,
    color: '#e6811f'
  },
  {
    img: {
      backgroundImage:
        "url(static/imgs/Wasteliquid.png)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100% 100%"
    },
    name: "废液管理",
    status: true,
    color: 'rgb(78, 48, 199)'
  },
  {
    // img: "static/img/NewsControlBtn.png",
    img: {
      backgroundImage:
        "url(static/backNavi/publicNews.png)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100% 100%"
    },
    name: "信息公开",
    status: true,
    color: '#f15151'
  },
  {
    // img: "static/img/NewsControlBtn.png",
    img: {
      backgroundImage:
        "url(static/img/system.png)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100% 100%"
    },
    name: "设备列表",
    status: true,
    color: 'rgb(241, 81, 236)'
  },
  {
    img: {
      backgroundImage:
        "url(static/backNavi/Monitorhb.png)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100% 100%"
    },
    name: "监测调度",
    status: true,
    color: "#e6811f"
  },
];
// 运维权限
var menuListOperator = [
  {
    // img: "static/imgs/realDataHome.png",
    img: {
      backgroundImage:
        "url(static/backNavi/realData.png)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100% 100%"
    },
    // img:
    //   "https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1843027213,4091283601&fm=58&app=83&f=JPG?w=400&h=533&s=C1C5D30E1A37BEDE4ED14A9F0300F086",
    name: "实时数据",
    status: true,
    color: "#68a4e6",
  },
  {
    // img: "static/imgs/historyData.png",
    img: {
      backgroundImage:
        "url(static/backNavi/historyData.png)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100% 100%"
    },
    name: "历史数据",
    status: true,
    color: "#f77f62"
  },
  // {
  //   img: "static/imgs/evaluateHome.png",
  //   name: "历史数据",
  //   status: true
  // },
  {
    // img: "static/img/Maintenance.png",
    img: {
      backgroundImage:
        "url(static/backNavi/control.png)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100% 100%"
    },
    // img: "static/img/Maintenance.png",
    name: "运维列表",
    status: true,
    color: "#852cbe"
  },
  {
    img: {
      backgroundImage:
        "url(static/backNavi/control.png)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100% 100%"
    },
    name: "运维管理",
    status: true,
    color: "#852cbe"
  },
  {
    img: {
      backgroundImage:
        "url(static/imgs/Wasteliquid.png)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100% 100%"
    },
    name: "废液管理",
    status: true,
    color: 'rgb(78, 48, 199)'
  },
  {
    img: {
      backgroundImage:
        "url(static/backNavi/polution.png)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100% 100%"
    },
    name: "污染溯源",
    status: true,
    color: "#f15151",
  },
  // {
  //   img: "static/img/controlListBtn.png",
  //   name: "运维列表",
  //   status: true
  // },
  {
    img: {
      backgroundImage:
        "url(static/backNavi/dailyControl.png)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100% 100%"
    },
    name: "日常管理",
    status: true,
    color: '#e6811f'
  },
  {
    img: {
      backgroundImage:
        "url(static/backNavi/publicNews.png)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100% 100%"
    },
    name: "信息公开",
    status: true,
    color: '#f15151'
  },

];
// 环保端
var menuListManager = [
  {
    img: {
      backgroundImage:
        "url(static/backNavi/realData.png)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100% 100%"
    },
    name: "实时数据",
    status: true,
    color: "#68a4e6",
  },
  {
    img: {
      backgroundImage:
        "url(static/backNavi/historyData.png)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100% 100%"
    },
    name: "历史数据",
    status: true,
    color: "#f77f62"
  },
  // {
  //   img: "static/imgs/evaluateHome.png",
  //   name: "历史数据",
  //   status: true
  // },



  // 暂时隐藏start
  // {
  //   img: {
  //     backgroundImage:
  //       "url(static/backNavi/waterEnv.png)",
  //     backgroundRepeat: "no-repeat",
  //     backgroundPosition: "center",
  //     backgroundSize: "100% 100%"
  //   },
  //   name: "水环境评价",
  //   status: true,
  //   color: '#2cbe55'
  // },
// end

  // {
  //   img: {
  //     backgroundImage:
  //       "url(static/backNavi/waterRanking.png)",
  //     backgroundRepeat: "no-repeat",
  //     backgroundPosition: "center",
  //     backgroundSize:"100% 100%"
  //   },
  //   name: "水环境排名",
  //   status: true,
  //   color:"#852cbe"
  // },
  {
    img: {
      backgroundImage:
        "url(static/backNavi/warningControl.png)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100% 100%"
    },
    name: "预警管理",
    status: true,
    color: "#f15151"
  },


  // 暂时隐藏start
  // {
  //   img: {
  //     backgroundImage:
  //       "url(static/backNavi/Monitorhb.png)",
  //     backgroundRepeat: "no-repeat",
  //     backgroundPosition: "center",
  //     backgroundSize: "100% 100%"
  //   },
  //   name: "监测调度",
  //   status: true,
  //   color: "#e6811f"
  // },
  // {
  //   // img: "static/imgs/Reportforms.png",
  //   img: {
  //     backgroundImage:
  //       "url(static/backNavi/Reportforms.png)",
  //     backgroundRepeat: "no-repeat",
  //     backgroundPosition: "center",
  //     backgroundSize: "100% 100%"
  //   },
  //   name: "报告报表",
  //   status: true,
  //   color: "#f15151"
  // },
  // end








  
  // {
  //   // img: "static/imgs/Reportforms.png",
  //   img: {
  //     backgroundImage:
  //       "url(static/backNavi/Reportforms.png)",
  //     backgroundRepeat: "no-repeat",
  //     backgroundPosition: "center",
  //     backgroundSize:"100% 100%"
  //   },
  //   name: "报告报表",
  //   status: true,
  //   color:"#f15151"
  // },
  // {
  //   img: "static/img/NewsControlBtn.png",
  //   name: "信息公开",
  //   status: true
  // }

  // Monitoring and dispatching
];
// 水站管理员
var menuListStation = [
  {
    img: {
      backgroundImage:
        "url(static/backNavi/realData.png)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100% 100%"
    },
    name: "实时数据",
    status: true,
    color: "#68a4e6",
  },
  {
    img: {
      backgroundImage:
        "url(static/backNavi/historyData.png)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100% 100%"
    },
    name: "历史数据",
    status: true,
    color: "#f77f62"
  },
  {
    img: {
      backgroundImage:
        "url(static/backNavi/fuzhu.png)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100% 100%"
    },
    name: "辅助决策",
    status: true,
    color: "#2cbe55"
  },
  {
    img: {
      backgroundImage:
        "url(static/backNavi/polution.png)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100% 100%"
    },
    name: "污染溯源",
    status: true,
    color: "#f15151",
  },
  // {
  //   img: "static/img/controlListBtn.png",
  //   name: "运维列表",
  //   status: true
  // },
  {
    img: {
      backgroundImage:
        "url(static/backNavi/dailyControl.png)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100% 100%"
    },
    name: "日常管理",
    status: true,
    color: '#e6811f'
  },
  {
    img: {
      backgroundImage:
        "url(static/backNavi/publicNews.png)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100% 100%"
    },
    name: "信息公开",
    status: true,
    color: '#f15151'
  }
];

export default {
  userPermision(e) {
    console.log("e", e);
    var tab = [];
    for (let index = 0; index < e.length; index++) {
      const element = e[index].name;
      tab.push(element);
    }
    // this.$store.state.tab = tab;
    return tab;
    // console.log("tab",tab)
  },
  userPermisionHomeNavi(e) {
    console.log("e", e);

    var navi = [];
    for (let index = 0; index < e.length; index++) {
      const element = e[index].name;
      if (element === "首页") {
        navi.push(e[index].children);
        let tab = [];
        for (let i = 0; i < navi.length; i++) {
          const element1 = navi[i].name;
          tab.push(element1);
        }
        return tab;
      } else {
      }
    }

    console.log("tab", tab);
    // this.$store.state.tab = tab;
    return tab;
  },
  userMenu(e) {
    var arr = [];
    console.log(e);
    switch (e) {
      case "admin":
        arr = menuListAdmin;
        break;
      case "operator":
        arr = menuListOperator;
        break;
      case "manager":
        arr = menuListManager;
        break;
      case "station":
        arr = menuListStation;
        break;
    }
    return arr;
  }
};
