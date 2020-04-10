export default {
  GaodeApiCallNavito() {
    appAvailability.check(
      "com.autonavi.minimap",
      hasAndroidPackage,
      notAndroidPackage
    );
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
            lat +
            "&slon=" +
            lng +
            "&sname=A&did=BGVIS2&dlat=" +
            lat +
            "&dlon=" +
            lng +
            "&dname=B&dev=0&t=0",
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
        function() {
          //跳转成功
        },
        function(error) {
          //失败
        }
      );
    }
    function notAndroidPackage() {
      // 不存在对应APP
      this.$createDialog({
        type: "confirm",
        title: "提醒",
        content: "请您下载高德地图",
        confirmBtn: {
          text: "确定",
          active: true,
          disabled: false,
          href: "javascript:;"
        },
        cancelBtn: {
          text: "取消",
          active: false,
          disabled: false,
          href: "javascript:;"
        },
        onConfirm: () => {},
        onCancel: () => {}
      }).show();
    }
  }
};
