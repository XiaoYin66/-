import store from "./js/vuex/store";
let Echarts = require("echarts");
export default {
  AnalysisOfWater(res) {
    var arrDataRate = [];
    var arrDataRateno = [];
    var arrName = [];
    var stateName = [];
    for (const key in res) {
      if (res.hasOwnProperty(key)) {
        var dataRate = res[key];
        var name = key;
        // if (res[key]===null) {
        //   dataRate = 0;
        // }else{
        //   dataRate = res[key];
        // }

        arrDataRate.push(dataRate === null ? 0 : (dataRate * 100).toFixed(1));
        arrDataRateno.push(
          dataRate === null ? 0 : ((1 - dataRate) * 100).toFixed(1)
        );
        stateName.push(name);
        store.commit("stateNameStation", stateName);
        var stationName = "";
        // debugger
        if (name === "固戍净化厂") {
          stationName = name;
        } else if (name === "福永净化厂") {
          stationName = name;
        } else {
          stationName = name.slice(0, 4);
        }
        arrName.push(stationName);
      }
    }

    var option = {
      color: ["#69f0ae", "#e53935"],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        },
        // formatter:"{c}%"
        formatter: function(params, trigger) {
          //提示框自定义
          var htmlStr = "";
          var _color = ["#2eb4e9", "#ff2c3b"];
          htmlStr +=
            '<div><span style="color:#fff;">' +
            params[0].name +
            "</span><br/> ";
          for (var i = 0; i < params.length; i++) {
            //前面的原点和他的颜色
            htmlStr +=
              '<span style="width: 8px;height: 8px;display:inline-block;border-radius: 50%;background-color:' +
              _color[i] +
              '"></span>&nbsp&nbsp<span style="color:#fff;">' +
              params[i].seriesName +
              ":</span>" +
              '<span style="color:#fff;">' +
              params[i].value +
              "&nbsp%</span><br/>";
          }
          htmlStr += "</div>";
          return htmlStr;
          // return `<div>
          //    <div>
          //       <span>${params[0].name}</span>
          //    </div>
          //    <div>
          //    ${params[0].marker}
          //    </div>
          // </div>` ;
        }
      },
      legend: {
        data: ["超标率", "达标率"]
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          data: arrName,
          axisLabel: {
            interval: 0,
            formatter: function(value) {
              //x轴的文字改为竖版显示
              var str = value.split("");
              return str.join("\n");
            }
          },
          axisLine: {
            //y轴
            show: true,
            lineStyle: {
              color: "#757575"
            }
          },
          axisTick: {
            //y轴刻度线
            show: false,
            lineStyle: {
              color: "#ccc"
            }
          },
          splitLine: {
            //网格线
            show: false,
            lineStyle: {
              color: "#ccc"
            }
          }
        }
      ],
      yAxis: [
        {
          type: "value",
          min: 0,
          max: 100,
          splitArea: { show: true }, //保留网格区域

          axisLabel: {
            show: true,
            formatter: "{value}%" //给Y轴数值添加百分号
          },
          axisLine: {
            //y轴
            show: false,
            lineStyle: {
              color: "#757575"
            }
          },
          axisTick: {
            //y轴刻度线
            show: false,
            lineStyle: {
              color: "#ccc"
            }
          },
          splitLine: {
            //网格线
            show: true,
            lineStyle: {
              color: "#e0e0e0"
            }
          }
        }
      ],
      series: [
        {
          name: "达标率",
          type: "bar",
          stack: "超标率",
          barGap: "-100%",
          barWidth: 12, //柱图宽度
          data: arrDataRateno,
          //   formatter: "{a} <br/>{b}: {c}",
          itemStyle: {
            normal: {
              color: new Echarts.graphic.LinearGradient(0, 1, 1, 0, [
                { offset: 0, color: "#26d6d6" },
                { offset: 1, color: "#2eb4e9" }
              ]),
              label: {
                show: false, //开启显示
                position: "inside",
                formatter: "{c}%",
                textStyle: {
                  //数值样式
                  color: "white",
                  fontSize: 10
                }
              }
            }
          }
        },
        {
          name: "超标率",
          type: "bar",
          barWidth: 12, //柱图宽度
          stack: "超标率",
          data: arrDataRate,
          label: {
            normal: {
              show: true,
              position: "top",
              formatter: "{c}%" // 这里是数据展示的时候显示的数据
            }
          },
          itemStyle: {
            normal: {
              color: new Echarts.graphic.LinearGradient(0, 1, 1, 0, [
                { offset: 0, color: "#ff2c3b" },
                { offset: 1, color: "#fd9745" }
              ]),
              label: {
                show: false, //开启显示
                position: "inside",
                formatter: "{c}",
                textStyle: {
                  //数值样式
                  color: "white",
                  fontSize: 10
                  // fd9745
                }
              }
            }
          }
        }
      ]
    };

    return option;
  },
  StationTime(res) {
    var arrData = [];
    var arrName = [
      "2:00",
      "4:00",
      "6:00",
      "8:00",
      "10:00",
      "12:00",
      "14:00",
      "16:00",
      "18:00",
      "20:00",
      "22:00",
      "24:00"
    ];
    // for (let index = 0; index < res.length; index++) {
    //   var acount = res[index].counts;
    //   arrData.push(acount);
    // }
    for (const key in res) {
      if (res.hasOwnProperty(key)) {
        // const element = res[key];
        var acount = res[key];
        arrData.push(acount);
      }
    }
    var Echarts = require("echarts");
    let myCharts = Echarts.init(document.getElementById("Time"));
    var option = {
      color: ["#b39ddb", "#e53935"],
      title: {
        text: "超标时段分析",
        x: "center",
        y: "top",
        textStyle: {
          color: "#CCC",
          fontSize: 12
        }
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        }
        // formatter: function (params,trigger) {
        //     //提示框自定义
        //     return ;
        // },
      },
      legend: {
        data: ["超标时段分析"]
      },
      grid: {
        left: "4%",
        right: "4%",
        bottom: "8%",
        containLabel: true
      },
      xAxis: [
        {
          // type: "category",
          name: "超标次数/次",
          nameTextStyle: {
            padding: [20, 0, 0, 0] // 四个数字分别为上右下左与原位置距离
          },
          type: "value",
          nameLocation: "center",
          // axisLabel: {
          //   interval: 0,
          //   formatter: function(value) {
          //     //x轴的文字改为竖版显示
          //     var str = value.split("");
          //     return str.join("\n");
          //   }
          // },
          splitArea: { show: true }, //保留网格区域
          axisLine: {
            //y轴
            show: true,
            lineStyle: {
              color: "#ccc"
            }
          },
          axisTick: {
            //y轴刻度线
            show: false,
            lineStyle: {
              color: "#ccc"
            }
          },
          splitLine: {
            //网格线
            show: true,
            lineStyle: {
              color: "#e0e0e0"
            }
          }
        }
      ],
      yAxis: [
        {
          name: "时间",
          // type: "value",
          type: "category",
          data: arrName,

          axisLabel: {
            show: true,
            formatter: "{value}" //给Y轴数值添加百分号
          },
          axisLine: {
            //y轴
            show: false,
            lineStyle: {
              color: "#434343"
            }
          },
          axisTick: {
            //y轴刻度线
            show: false,
            lineStyle: {
              color: "#ccc"
            }
          },
          splitLine: {
            //网格线
            show: false,
            lineStyle: {
              color: "#e0e0e0"
            }
          }
        }
      ],
      series: [
        {
          name: "超标次数",
          type: "bar",
          stack: "超标率",
          barWidth: 12, //柱图宽度
          data: arrData,
          //   formatter: "{a} <br/>{b}: {c}",
          itemStyle: {
            normal: {
              label: {
                show: true, //开启显示
                position: "top",
                formatter: "{c}",
                textStyle: {
                  //数值样式
                  color: "blue",
                  fontSize: 8
                }
              }
            }
          },
          itemStyle: {
            emphasis: {
              barBorderRadius: 14
            },
            normal: {
              // barBorderRadius: 14,
              color: new Echarts.graphic.LinearGradient(0, 1, 1, 0, [
                { offset: 0, color: "#5feac8" },
                { offset: 1, color: "#5feac8" }
              ])
            }
          }
        }
      ]
    };
    myCharts.setOption(option);
  },
  StationRates(res) {
    var arrData = [];
    var arrName = [];
    for (const key in res) {
      if (res.hasOwnProperty(key)) {
        var data = res[key];
        arrData.push(data);
        var name = this.forMenu(key);
        arrName.push(name);
      }
    }

    var Echarts = require("echarts");
    let myCharts = Echarts.init(document.getElementById("rates"));
    var option = {
      color: ["#4527a0", "#e53935"],
      title: {
        text: "超标站点数",
        x: "center",
        y: "top",
        textStyle: {
          color: "#CCC",
          fontSize: 12
        }
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        }
        // formatter: function (params,trigger) {
        //     //提示框自定义
        //     return ;
        // },
      },
      legend: {
        data: ["超标时段"]
      },
      grid: {
        left: "6%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          data: arrName,
          axisLabel: {
            interval: 0,
            formatter: function(value) {
              //x轴的文字改为竖版显示
              var str = value.split("");
              return str.join("\n");
            }
          },
          axisLine: {
            //y轴
            show: true,
            lineStyle: {
              color: "#ccc"
            }
          },
          axisTick: {
            //y轴刻度线
            show: false,
            lineStyle: {
              color: "#ccc"
            }
          },
          splitLine: {
            //网格线
            show: false
          }
        }
      ],
      yAxis: [
        {
          name: "超标站点数/个",
          type: "value",
          splitArea: { show: true }, //保留网格区域
          axisLabel: {
            show: true,
            formatter: "{value}" //给Y轴数值添加百分号
          },
          axisLine: {
            //y轴
            show: false,
            lineStyle: {
              color: "#757575"
            }
          },
          axisTick: {
            //y轴刻度线
            show: false,
            lineStyle: {
              color: "#ccc"
            }
          },
          splitLine: {
            //网格线
            show: true,
            lineStyle: {
              color: "#e0e0e0"
            }
          }
        }
      ],
      series: [
        {
          name: "超标数",
          type: "bar",
          stack: "超标率",
          barWidth: 12, //柱图宽度
          data: arrData,
          //   formatter: "{a} <br/>{b}: {c}",
          //   itemStyle: {
          //     normal: {
          //       label: {
          //         show: true, //开启显示
          //         position: "top",
          //         formatter: "{c}",
          //         textStyle: {
          //           //数值样式
          //           color: "blue",
          //           fontSize: 8
          //         }
          //       }
          //     }
          //   },
          itemStyle: {
            emphasis: {
              barBorderRadius: 14
            },
            normal: {
              // barBorderRadius: 14,
              color: new Echarts.graphic.LinearGradient(0, 1, 1, 0, [
                { offset: 0, color: "#ffecb3" },
                { offset: 1, color: "#feac40" }
              ])
            }
          }
        }
      ]
    };
    myCharts.setOption(option);
  },
  forMenu(name) {
    var nameAR = "";
    switch (name) {
      case "ammoniaNitrogen":
        nameAR = "氨氮";
        break;
      case "nitrogen":
        nameAR = "总氮";
        break;
      case "cuprum":
        nameAR = "总铜";
        break;
      case "nickel":
        nameAR = "总镍";
        break;
      case "chromium":
        nameAR = "总铬";
        break;
      case "pH":
        nameAR = "pH";
        break;
      case "phosphorus":
        nameAR = "总磷";
        break;
      case "prussiate":
        nameAR = "总氰化物";
        break;
      case "COD":
        nameAR = "CODcr";
        break;
    }
    return nameAR;
  }
};
