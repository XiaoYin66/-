export default {
  MapToApp(item) {
    //item是传递过来的高德地图、百度地图、腾讯地图
    var baiduPackageName = "com.baidu.BaiduMap"; //百度地图包名
    var gaodePackageName = "com.autonavi.minimap"; //高德地图包名
    var destination = new Array(
      this.fromBottomBoxMsg[0].latitude.toFixed(6),
      this.fromBottomBoxMsg[0].longitude.toFixed(6)
    ); //获取vuex中的想去目的地的经纬度参数
    var u = navigator.userAgent; //判断是android系统还是IOS系统
    var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    var Destination = this.fromBottomBoxMsg[0].address;
    var geoCoordinates = this.$store.state.geoCoordinates;
    if (item.name == "高德地图") {
      let scheme;
      if (isAndroid == true) {
        scheme = "com.autonavi.minimap"; //获取对应系统的高德地图包名
      } else {
        scheme = "iosamap://";
      }
      appAvailability.check(
        scheme,
        function() {
          //使用插件的检测包名的函数，判断手机是否安装该第三方APP!!!!!最重要的地方
          if (isAndroid == true) {
            var sApp = startApp.set({
              action: "ACTION_VIEW",
              category: "CATEGORY_DEFAULT",
              type: "text/css",
              package: "com.autonavi.minimap",
              uri:
                "amapuri://route/plan/?dlat=" +
                destination[0] +
                "&dlon=" +
                destination[1] +
                "&dname=" +
                Destination +
                "&dev=0&t=0", //传递经纬度参数
              flags: ["FLAG_ACTIVITY_CLEAR_TOP", "FLAG_ACTIVITY_CLEAR_TASK"],
              intentstart: "startActivity"
            });
            sApp.start(
              function() {
                /* success */
                //alert("OK");
              },
              function(error) {
                /* fail */
                this.$toast(error);
              }
            );
          } else {
            //若是IOS,则调起ios版本的
            window.location.href =
              "iosamap://navi?sourceApplication=applicationName&poiname=" +
              Destination +
              "&poiid=BGVIS&lat=" +
              destination[0] +
              "&lon=" +
              destination[1] +
              "&dev=1&style=2";
          }
        },
        function() {
          //若没有相应安装相应第三方APP，则弹出链接，提醒下载相应APK
          if (isAndroid == true) {
            cordova.InAppBrowser.open(
              "http://amapdownload.autonavi.com/down6/C3060/Amap_V8.75.1.2600_android_C3060_(Build1811010937).apk",
              "_system",
              "hardwareback=no"
            );
          } else {
            window.location.href =
              "itms-apps://itunes.apple.com/cn/app/%E9%AB%98%E5%BE%B7%E5%9C%B0%E5%9B%BE-%E7%B2%BE%E5%87%86%E5%9C%B0%E5%9B%BE-%E5%AF%BC%E8%88%AA%E5%87%BA%E8%A1%8C%E5%BF%85%E5%A4%87/id461703208?mt=8";
          }
        }
      );
    } else if (item.name == "百度地图") {
      let scheme;
      if (isAndroid == true) {
        scheme = "com.baidu.BaiduMap";
      } else {
        scheme = "baidumap://";
      }
      appAvailability.check(
        scheme,
        function() {
          //success callback
          if (isAndroid == true) {
            var sApp = startApp.set({
              /* params */
              action: "ACTION_VIEW",
              category: "CATEGORY_DEFAULT",
              type: "text/css",
              package: "com.baidu.BaiduMap",
              uri:
                "baidumap://map/direction?destination=name:" +
                Destination +
                "|latlng:" +
                destination[0] +
                "," +
                destination[1] +
                "&mode=driving",
              flags: ["FLAG_ACTIVITY_CLEAR_TOP", "FLAG_ACTIVITY_CLEAR_TASK"],
              intentstart: "startActivity"
            });
            sApp.start(
              function() {
                /* success */
                //alert("OK");
              },
              function(error) {
                /* fail */
                this.$toast(error);
              }
            );
          } else {
            window.location.href =
              "baidumap://map/direction?origin=" +
              geoCoordinates +
              "&destination=" +
              Destination +
              "&mode=driving&src=webapp.navi.yourCompanyName.yourAppName";
          }
        },
        function() {
          //
          if (isAndroid == true) {
            cordova.InAppBrowser.open(
              "https://map-mobile-lbsapp.cdn.bcebos.com/baidumaplite_AndroidPhone_v10.8.23(2.1.2)_1021366a.apk",
              "_system",
              "hardwareback=no"
            );
          } else {
            window.location.href =
              "itms-apps://itunes.apple.com/cn/app/%E7%99%BE%E5%BA%A6%E5%9C%B0%E5%9B%BE-%E6%99%BA%E8%83%BD%E5%AF%BC%E8%88%AA%E8%B7%AF%E7%BA%BF%E8%A7%84%E5%88%92%E6%97%85%E6%B8%B8%E5%87%BA%E8%A1%8C/id452186370?mt=8";
          }
        }
      );
    } else if (item.name == "腾讯地图") {
      let scheme;
      if (isAndroid == true) {
        scheme = "com.tencent.map";
      } else {
        scheme = "sosomap://";
      }
      appAvailability.check(
        scheme,
        function() {
          //success callback
          if (isAndroid == true) {
            var sApp = startApp.set({
              /* params */
              action: "ACTION_VIEW",
              category: "CATEGORY_DEFAULT",
              type: "text/css",
              package: "com.tencent.map",
              uri:
                "qqmap://map/routeplan?type=drive&to=" +
                Destination +
                "&tocoord=" +
                destination[0] +
                "," +
                destination[1] +
                "&coord_type=1&policy=0",
              flags: ["FLAG_ACTIVITY_CLEAR_TOP", "FLAG_ACTIVITY_CLEAR_TASK"],
              intentstart: "startActivity"
            });
            sApp.start(
              function() {
                /* success */
                //alert("OK");
              },
              function(error) {
                /* fail */
                this.$toast(error);
              }
            );
          } else {
            window.location.href =
              "qqmap://map/routeplan?type=drive&fromcoord=CurrentLocation&to=" +
              address +
              "&tocoord=" +
              destination[0] +
              "," +
              destination[1] +
              "";
          }
        },
        function() {
          //
          if (isAndroid == true) {
            cordova.InAppBrowser.open(
              "https://map.myapp.com/myapp/map/tencentmap_8.1.5.544_android_00002.apk",
              "_system",
              "hardwareback=no"
            );
          } else {
            window.location.href =
              "itms-apps://itunes.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%9C%B0%E5%9B%BE-%E8%B7%AF%E5%86%B5%E7%B2%BE%E5%87%86%E5%87%BA%E8%A1%8C%E5%BF%85%E5%A4%87%E7%9A%84%E5%AF%BC%E8%88%AA%E8%BD%AF%E4%BB%B6/id481623196?mt=8";
          }
        }
      );
    } else if (item.name == "苹果地图") {
      window.location.href =
        "http://maps.apple.com/?daddr=" + Destination + "&dirflg=d&t=h";
    } else {
      this.show = false;
    }
  }
};
