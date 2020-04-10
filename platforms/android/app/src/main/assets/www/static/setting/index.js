var itemList = [
  {
    name: "数据查看管理",
    status: true
  },
  {
    name: "预警方式管理",
    status: true
  },
  {
    name: "清理缓存",
    status: false
  },
  {
    name: "联系客服",
    status: true
  },
  {
    name: "关于我们",
    status: true
  },
  {
    name: "版本信息",
    status: true
  },
  {
    name: "用户反馈",
    status: false
  },
  {
    name: "标准值设定",
    status: false
  },
  {
    name: "反馈列表",
    status: false
  },
  {
    name: "转运目的地录入",
    status: false
  },
  // {
  //   name: "退出登录",
  //   status: true
  // },

]
export default {
  initMenu(e) {
    var arr = itemList;
    
    if (e === "admin") {
      for (let index = 0; index < arr.length; index++) {
        if (arr[index].name === "标准值设定") {
          arr[index].status = true;
        }
        if (arr[index].name === "转运目的地录入") {

          arr[index].status = true;
        }
      }

    }else if(e === "station"){
      for (let index = 0; index < arr.length; index++) {
        if (arr[index].name === "标准值设定") {
          arr[index].status = false;
        }
        if (arr[index].name === "转运目的地录入") {

          arr[index].status = true;
        }
      }
    }
    else{
      for (let index = 0; index < arr.length; index++) {
        if (arr[index].name === "标准值设定") {
          arr[index].status = false;
        }
        if (arr[index].name === "转运目的地录入") {

          arr[index].status = false;
        }
      }
    }
    return arr;
  }
};