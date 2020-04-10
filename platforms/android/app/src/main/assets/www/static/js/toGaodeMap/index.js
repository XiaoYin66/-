import { Toast } from "vant";
export default {
  toGaoDeMap(slat, slng, sname, dlat, dlng, dname) {
    function hasAndroidPackage() {
      // 存在对应APP
      var sApp = startApp.set(
        {
          //跳转对应APP
          action: "ACTION_VIEW",
          category: "CATEGORY_DEFAULT",
          type: "text/css",
          package: "com.autonavi.minimap", //高德APP包名
          uri:
            "amapuri://route/plan/?sid=BGVIS1&slat=" +
            slat +
            "&slon=" +
            slng +
            "&sname=" +
            sname +
            "&did=BGVIS2&dlat=" +
            dlat +
            "&dlon=" +
            dlng +
            "&dname=B" +
            dname +
            "&dev=0&t=0",
          flags: ["FLAG_ACTIVITY_CLEAR_TOP", "FLAG_ACTIVITY_CLEAR_TASK"],
          intentstart: "startActivity"
        },
        {
          /* extras */

          EXTRA_STREAM: "extraValue1",
          extraKey2: "extraValue2"
        }
      );
      sApp.start(
        function(res) {
          //跳转成功
          Toast(res);
        },
        function(error) {
          //失败
          Toast(err);
        }
      );
    }
    function notAndroidPackage() {
        Toast("请下载安装高德地图！");
      // 不存在对应APP
      //   this.$createDialog({
      //     type: "confirm",
      //     title: "提醒",
      //     content: "请您下载高德地图",
      //     confirmBtn: {
      //       text: "确定",
      //       active: true,
      //       disabled: false,
      //       href: "javascript:;"
      //     },
      //     cancelBtn: {
      //       text: "取消",
      //       active: false,
      //       disabled: false,
      //       href: "javascript:;"
      //     },
      //     onConfirm: () => {},
      //     onCancel: () => {}
      //   }).show();
    }
    appAvailability.check(
      "com.autonavi.minimap",
      hasAndroidPackage,
      notAndroidPackage
    );
  }
};
