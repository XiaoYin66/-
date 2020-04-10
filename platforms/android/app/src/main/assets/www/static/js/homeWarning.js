export default {
    warningContent(res, index) {
      // console.log(res);
      var warningArray = [];
      var array = res;
      var arrContent = [];
      var pH = [];
      var phosphorus = [];
      var prussiate = [];
      var nitrogen = [];
      var cuprum = [];
      var pHFlag = [];
      var phosphorusFlag = [];
      var chromium = [];
      var nickel = [];
      var ammoniaNitrogen = [];
      var nitrogenFlag = [];
      var nickelFlag = [];
      var chromiumFlag =[];
      var ammoniaNitrogenFlag =[];
      var prussiateFlag = [];
  
  
      // 设备试剂缺失告警
      var ammoniaNitrogenAlert = [];
      var pHAlert = [];
      var cuprumAlert = [];
      var nickelAlert = [];
      var nitrogenAlert = [];
      var phosphorusAlert = [];
      var prussiateAlert = [];
      var chromiumAlert = [];
      var systemAlarm = [];
      // for (let index = 0; index < array.length; index++) {
      var arr = array;
  
      for (const key in arr) {
        if (arr.hasOwnProperty(key)) {
          var value = arr[key];
          switch (key) {
            case "prussiate":
              prussiate.push({
                name: "总氰化物浓度",
                value: value+" "+"mg/L"
              });
              arrContent.push(prussiate);
              break;
              case "pH":
              pH.push({
                name: "pH",
                value: value
              });
              arrContent.push(pH);
              break;
            case "phosphorus":
              phosphorus.push({
                name: "总磷浓度",
                value: value+" "+"mg/L"
              });
              arrContent.push(phosphorus);
              break;
            case "nitrogen":
              nitrogen.push({
                name: "总氮浓度",
                value: value+" "+"mg/L"
              });
              arrContent.push(nitrogen);
              break;
            case "cuprum":
              cuprum.push({
                name: "总铜浓度",
                value: value+" "+"mg/L"
              });
              arrContent.push(cuprum);
              break;
            case "chromium":
              chromium.push({
                name: "总铬浓度",
                value: value+" "+"mg/L"
              });
              arrContent.push(chromium);
              break;
            case "nickel":
              nickel.push({
                name: "总镍浓度",
                value: value+" "+"mg/L"
              });
              arrContent.push(nickel);
              break;
            case "ammoniaNitrogen":
              ammoniaNitrogen.push({
                name: "氨氮浓度",
                value: value+" "+"mg/L"
              });
              arrContent.push(ammoniaNitrogen);
              break;
  
            // 设备
  
            case "pHFlag":
              pHFlag.push({
                name: "pH监测设备",
                value: value
              });
              arrContent.push(pHFlag);
              break;
            case "phosphorusFlag":
              phosphorusFlag.push({
                name: "总磷监测设备",
                value: value
              });
              arrContent.push(phosphorusFlag);
              break;
            case "prussiateFlag":
            prussiateFlag.push({
                name: "总氰化物监测设备",
                value: value
              });
              arrContent.push(prussiateFlag);
              break;
            case "ammoniaNitrogenFlag":
            ammoniaNitrogenFlag.push({
                name: "氨氮监测设备",
                value: value
              });
              arrContent.push(ammoniaNitrogenFlag);
              break;
            case "nickelFlag":
            nickelFlag.push({
                name: "总镍监测设备",
                value: value
              });
              arrContent.push(nickelFlag);
              break;
            case "chromiumFlag":
            chromiumFlag.push({
                name: "总铬监测设备",
                value: value
              });
              arrContent.push(chromiumFlag);
              break;
            case "nitrogenFlag":
            nitrogenFlag.push({
                name: "总氮监测设备",
                value: value
              });
              arrContent.push(nitrogenFlag);
              break;
  
  
              case "ammoniaNitrogenAlert":
                ammoniaNitrogenAlert.push({
                  name: "氨氮监测设备",
                  value: value
                });
                arrContent.push(ammoniaNitrogenAlert);
                break;
  
                case "pHAlert":
                  pHAlert.push({
                  name: "pH监测设备",
                  value: value
                });
                arrContent.push(pHAlert);
                break;
                case "cuprumAlert":
                  cuprumAlert.push({
                  name: "总铜监测设备",
                  value: value
                });
                arrContent.push(cuprumAlert);
                break;
                case "nickelAlert":
                  nickelAlert.push({
                  name: "总镍监测设备",
                  value: value
                });
                arrContent.push(nickelAlert);
                break;
  
                case "nitrogenAlert":
                  nitrogenAlert.push({
                  name: "总铬监测设备",
                  value: value
                });
                arrContent.push(nitrogenAlert);
                break;
                case "nickelAlert":
                  nickelAlert.push({
                  name: "总镍监测设备",
                  value: value
                });
                arrContent.push(nickelAlert);
                break;
                case "phosphorusAlert":
                  phosphorusAlert.push({
                  name: "总磷监测设备",
                  value: value
                });
                arrContent.push(phosphorusAlert);
                break;
                case "prussiateAlert":
                  prussiateAlert.push({
                  name: "总氰化物监测设备",
                  value: value
                });
                arrContent.push(prussiateAlert);
                break;
                case "systemAlarm":
                  systemAlarm.push({
                  name: "系统设备",
                  value: value
                });
                arrContent.push(systemAlarm);
                break;
                // arrContent.push(cuprumAlert);
                // break;
                case "chromiumAlert":
                  chromiumAlert.push({
                  name: "总氮监测设备",
                  value: value
                });
                arrContent.push(chromiumAlert);
                break;
                // phosphorusAlert
          }
          // console.log(arr);
        }
      }
      // }
      return arrContent;
    },
    arr(res, id) {
      var arr = [];
      for (let index = 0; index < res.length; index++) {
        var name = res[index].warningId;
        if (id === name) {
          for (const key in arr) {
            if (arr.hasOwnProperty(key)) {
              var value = arr[key];
              switch (key) {
                case "prussiate":
                  prussiate.push({
                    name: "1",
                    value: value
                  });
                  break;
                case "phosphorus":
                  phosphorus.push({
                    name: "2",
                    value: value
                  });
  
                  break;
                case "nitrogen":
                  nitrogen.push({
                    name: "3",
                    value: value
                  });
                  break;
                case "cuprum":
                  cuprum.push({
                    name: "4",
                    value: value
                  });
                  break;
                case "pHFlag":
                  pHFlag.push({
                    name: "5",
                    value: value
                  });
                  break;
                case "phosphorusFlag":
                  phosphorusFlag.push({
                    name: "6",
                    value: value
                  });
                  break;
              }
              // console.log(arr);
            }
          }
        }
      }
      return arr;
    },
    arrDevice(res, id) {
      var arr = [];
      for (let index = 0; index < res.length; index++) {
        var name = res[index].warningId;
        if (id === name) {
        }
      }
      return arr;
    },
    filterData(res,id){
      var arr = [];
      for (let index = 0; index < res.length; index++) {
        var e = res[index].warningId;
        if (id===e) {
          arr = res[index];
          arr.livePhoto = arr.livePhoto.split(",");
          // debugger
        }
        
      }
      return arr;
    }
  };
  