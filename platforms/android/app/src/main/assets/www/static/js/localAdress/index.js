

export default {
  getposition: function(val) {
    var _this = this;

    navigator.vibrate(500);
    var me = {
      msg: ""
    };
    var onSuccess = function(position) {
      console.log("position", position);
      var lat = "";
      var lng = "";
      var wgs84togcj02 = coordtransform.wgs84togcj02(
        Number(position.coords.longitude),
        Number(position.coords.latitude)
      );
      console.log(wgs84togcj02);
      _this.getGaoDE(wgs84togcj02[0], wgs84togcj02[1]);
      //   return arr;
    };
    var error = function(error) {
      me.msg =
        "code: " + error.code + "\n" + "message: " + error.message + "\n";

      alert(me.msg);
      console.log(me.msg);
    };

    navigator.geolocation.getCurrentPosition(onSuccess, error, {
      maximumAge: 30000,
      timeout: 30000,
      enableHighAccuracy: true
    });
  },
  getGaoDE(e, f) {
    var geocoder;
    var that = this;
    var lnglatXY = new AMap.LngLat(Number(e), Number(f));
    //加载地理编码插件
    AMap.plugin(["AMap.Geocoder"], function() {
      geocoder = new AMap.Geocoder({
        radius: 1000, //以已知坐标为中心点，radius为半径，返回范围内兴趣点和道路信息
        extensions: "all" //返回地址描述以及附近兴趣点和道路信息，默认"base"
      });
      //返回地理编码结果
      AMap.event.addListener(geocoder, "complete", geocoder_callBack);
      //逆地理编码
      geocoder.getAddress(lnglatXY);
    });
    function geocoder_callBack(params) {
      console.log("params", params);
    //   that.input.inputValue9 = params.regeocode.formattedAddress;
      // alert("当前" + params.regeocode.formattedAddress);
      // alert("状态" + params.info);
      // alert(params.type);
      // alert("数组" + params.regeocode, addressComponent);
    }
  }
};
