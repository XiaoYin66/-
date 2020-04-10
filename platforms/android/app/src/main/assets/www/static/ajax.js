import Vue from "vue";
import HTTP from "axios";
import Router from "../src/router/index";
import { Toast } from "vant";
Vue.use(Toast);
import "vant/lib/toast/style";
import { urlRequest, bimUrl } from "./js/requestUrl";
// const testUrl = "http://192.168.50.227:8802";
// const testUrl = "http://192.168.50.78:8802";
// const onlineUrl = "http://47.112.16.168:8802";

export default {
  date() {
    console.log(1);
  },
  /**
   *
   * @param {天数} e
   */
  DateTime(e) {
    var nowDate = new Date();
    var yesterdayDate = new Date(nowDate.getTime() - e * 24 * 60 * 60 * 1000); //前一天
    return this.filter(yesterdayDate);
  },
  DateTime1(e,currentTime) {
    var nowDate = new Date(currentTime);
    var yesterdayDate = new Date(nowDate.getTime() - e * 24 * 60 * 60 * 1000); //前一天
    return this.filter(yesterdayDate);
  },
  /**
   *
   * @param {开始时间} s
   * @param {结束时间} e
   * 计算时间差
   */
  dateTimeDev(s, e) {
    var date1 = new Date(s);
    var date2 = new Date(e);
    var date = (date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24);
    return date;
  },
  filter(e) {
    const d = new Date(e);
    return (
      d.getFullYear() +
      "-" +
      this.p(d.getMonth() + 1) +
      "-" +
      this.p(d.getDate())
    );
  },
  filterDateYue(e) {
    const d = new Date(e);
    return d.getFullYear() + "年" + this.p(d.getMonth() + 1)+"月"+this.p(d.getDate())+"日";
  },
  filterDatePoint(e) {
    const d = new Date(e);
    return d.getFullYear() + "." + this.p(d.getMonth() + 1)+"."+this.p(d.getDate());
  },
  filterDate(e) {
    const d = new Date(e);
    return d.getFullYear() + "-" + this.p(d.getMonth() + 1);
  },
  filterTime(e) {
    const d = new Date(e);
    return (
      d.getFullYear() +
      "-" +
      this.p(d.getMonth() + 1) +
      "-" +
      this.p(d.getDate()) +
      " " +
      this.p(d.getHours()) +
      ":" +
      this.p(d.getMinutes()) +
      ":" +
      this.p(d.getSeconds())
    );
  },
  filterTime1(e) {
    const d = new Date(e);
    return (
      d.getFullYear() +
      "-" +
      this.p(d.getMonth() + 1) +
      "-" +
      this.p(d.getDate()) +
      " " +
      "23" +
      ":" +
      "59" +
      ":" +
      "59"
    );
  },
  p(s) {
    return s < 10 ? "0" + s : s;
  },
  request(Url, method, params = {}, token) {
    // 首先判断是get请求还是post请求
    // const testUrl = "http://192.168.50.152:8802";
    // // const testUrl = "http://192.168.50.78:8802";
    // const onlineUrl = "http://47.112.16.168:8802";
    let data = method.toLocaleLowerCase() === "get" ? "params" : "data";
    // let url = OnlineUrl + Url;
    let url = urlRequest + Url;
    return HTTP({
      method,
      url,
      [data]: params,
      headers: {
        token: token
      }
      // [data]: params, // 差异点在于data的值,
    })
      .then(res => {
        // return Promise.resolve(res.data);
        return res;
        // return resolve(res);
      })
      .catch(err => {
        console.log(err);
        console.log(err.response.status);
        if (err.response.status === 401) {
          Router.replace("/");
          Toast("您的身份已过期，请重新登录APP");
        }else{
          // Router.replace("/");
          Toast("请求超时")
        }
        return err;
      });
  },
  btnNavigationTo(e, routerUrl) {
    switch (e) {
      case "事件管理":
        $router.push("/EventControl");
        break;
      case "任务管理":
        // this.$router.replace('/EventControl');

        break;
      case "日志管理":
        // this.$router.replace('/EventControl');

        break;
      case "数据管理":
        // this.$router.replace('/EventControl');

        break;
    }
  },
  DataFor(e, f) {
    for (let index = 0; index < e.length; index++) {}
    return;
  },
  spliceString(e) {
    for (let index = 0; index < e.length; index++) {
      var element = e[index].waterstation;
      e[index].waterstation = element.slice(0, 4);
    }
    return e;
  },
  typeFunction(e) {
    var name = "";
    if (e == "定期巡检") {
      name = "inspect";
    } else if (e == "保养检修") {
      name = "repair";
    } else if (e === "故障维修") {
      name = "maintenance";
    } else {
      name = null;
    }
    return name;
  },
  add(e, f) {
    var Name = "Name";
    var Num = "Num";
    var Model = "Model";
    var Brand = "Brand";
    e.push({
      [f + Name]: "",
      [f + Num]: "",
      [f + Model]: "",
      [f + Brand]: "",
      

    });
    return e;
  },
  remove(e, index) {
    var array = [];
    array = e;
    // console.log(array);
    array.splice(index, 1);
    // console.log(array);
    return (e = array);
  },
  forFunc(e, f) {
    for (var key1 in f) {
      if (f.hasOwnProperty(key1)) {
        var element = f[key1];
        for (var key2 in element) {
          if (element.hasOwnProperty(key2)) {
            var element1 = element[key2];
            if (key2 === e) {
              return element1;
            }
          }
        }
      }
    }
  },
  putdata(Url, method, params = {}, token) {
    // let url = onlineUrl + Url;
    let url = urlRequest + Url;
    return HTTP({
      method,
      url,
      data: params,
      headers: {
        token: token
      }
      // [data]: params, // 差异点在于data的值,
    })
      .then(res => {
        // return Promise.resolve(res.data);
        return res;
        // return resolve(res);
      })
      .catch(err => {
        return err;
      });
  },
  getDay(day) {
    var today = new Date();

    var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;

    today.setTime(targetday_milliseconds); //注意，这行是关键代码

    var tYear = today.getFullYear();

    var tMonth = today.getMonth();

    var tDate = today.getDate();

    tMonth = this.doHandleMonth(tMonth + 1);

    tDate = this.doHandleMonth(tDate);

    return tYear + "-" + tMonth + "-" + tDate;
  },
  doHandleMonth(month) {
    var m = month;

    if (month.toString().length == 1) {
      m = "0" + month;
    }

    return m;
  },
  /**
   *
   * @param {格式化时间的显示位数} res是一个数组
   */
  TimeFor(res) {
    for (let index = 0; index < res.length; index++) {
      var time = res[index].gmtDispatch;
      res[index].gmtDispatch = time.slice(0, 10);
    }
    return res;
  },
  // requestPost(url,method,params = {}){
  //   const testUrl = "http://192.168.50.151:8802";
  //   let url = testUrl+Url;
  //   return $HTTP({
  //     method,
  //     url,
  //     [data]: params, // 差异点在于data的值,

  // }).then((res) => {
  //     // return Promise.resolve(res.data);
  //     console.lor(res);
  // }).catch((err) => {
  //     console.log(err);
  // })
  // }
  Deletedata(Url, method, params = {}, token) {
    // let url = onlineUrl + Url;
    let url = testUrl + Url;
    return HTTP({
      method,
      url,
      data: params,
      headers: {
        token: token
      }
      // [data]: params, // 差异点在于data的值,
    })
      .then(res => {
        // return Promise.resolve(res.data);
        return res;
        // return resolve(res);
      })
      .catch(err => {
        return err;
      });
  },
  // 预警处理
  warningDataHandle(name) {
    var factor = "";
    switch (name) {
      case "cuprum":
        factor = "总铜";
        break;
      case "pH":
        factor = "pH";
        break;
      case "cod":
        factor = "化学需氧量";
        break;
      case "ammoniaNitrogen":
        factor = "氨氮";
        break;
      case "nitrogen":
        factor = "总氮";
        break;
      case "phosphorus":
        factor = "总磷";
        break;
      case "nickel":
        factor = "总镍";
        break;
      case "chromium":
        factor = "总铬";
        break;
      case "prussiate":
        factor = "总氰化物";
        break;
      case "cuprumFlag":
        factor = "总铜设备";
        break;
      case "pHFlag":
        factor = "pH设备";
        break;
      case "codFlag":
        factor = "COD设备";
        break;
      case "ammoniaNitrogenFlag":
        factor = "氨氮设备";
        break;
      case "nitrogenFlag":
        factor = "总氮设备";
        break;
      case "phosphorusFlag":
        factor = "总磷设备";
        break;
      case "nickelFlag":
        factor = "总镍设备";
        break;
      case "chromiumFlag":
        factor = "总铬设备";
        break;
      case "prussiateFlag":
        factor = "总氰化物设备";
        break;
      // prussiateFlag
    }
    return factor;
  }
};
// es6语法
// export default class AppBase{
//   static date(){
//  console.log(1)
//   }
// }
