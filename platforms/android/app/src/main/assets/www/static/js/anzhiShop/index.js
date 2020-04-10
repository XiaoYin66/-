import { Toast } from "vant";
export default {
  updataApp() {
    function hasAndroidPackage() {
      var sApp = startApp.set(
        {
          /* params */
          action: "ACTION_VIEW",
          category: "CATEGORY_DEFAULT",
          type: "text/css",
          package: "cn.goapk.market",
          uri: "market://details?id=io.cordova.testNews",
          flags: ["FLAG_ACTIVITY_CLEAR_TOP", "FLAG_ACTIVITY_CLEAR_TASK"], // "component": ["com.android.GoBallistic","com.android.GoBallistic.Activity"],
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
          /* success */
          console.log("open  success");
          Toast("成功");
        },
        function(error) {
          /* fail */
          console.log("open  failed");
          Toast("下载失败");
        }
      );
    }
    function notAndroidPackage() {
      Toast("请安装安志市场应用！");
    }
    appAvailability.check(
      "cn.goapk.market",
      hasAndroidPackage,
      notAndroidPackage
    );
  }
};
