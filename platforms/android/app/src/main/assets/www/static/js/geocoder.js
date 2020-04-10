var arr = [];
export default {
  getposition: function(val) {
    var _this = this;

    navigator.vibrate(500);
    var me = {
      msg: ""
    };
    var onSuccess = function(position) {
      me.msg =
        "Latitude:\t" +
        position.coords.latitude +
        "\n" +
        "Longitude:\t" +
        position.coords.longitude +
        "\n" +
        "Altitude:\t" +
        position.coords.altitude +
        "\n" +
        "Accuracy:\t" +
        position.coords.accuracy +
        "\n" +
        "Altitude Accuracy:\t" +
        position.coords.altitudeAccuracy +
        "\n" +
        "Heading:\t" +
        position.coords.heading +
        "\n" +
        "Speed:\t" +
        position.coords.speed +
        "\n" +
        "Timestamp:\t" +
        position.timestamp +
        "\n";
      alert(me.msg);
      _this.getGaoDE(position.coords.longitude, position.coords.latitude);
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
      enableHighAccuracy: val
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
      alert("当前" + params.regeocode.formattedAddress);
      alert("状态" + params.info);
      alert(params.type);
      alert("数组" + params.regeocode, addressComponent);
      alert(params);
      //   that.input.inputValue9 = params.regeocode.formattedAddress;
      arr = params;
    }

  }
};
