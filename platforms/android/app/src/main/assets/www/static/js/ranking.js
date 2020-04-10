var Echarts = require("echarts");

export default {
  EchartsRanking1(e, f, color, value, allValue) {
    var name = f;
    var valueData = e;
    let myCharts = Echarts.init(document.getElementById("ranking1"));
    var srData = [];
    srData.push({
      value: value,
      name: name,
      label: {
        normal: {
          formatter: valueData,
          textStyle: {
            fontSize: 18
          }
        }
      }
    });
    srData.push({
      value: allValue,
      name: "收入预期",
      label: {
        normal: {
          formatter: "",
          textStyle: {
            color: "#555",
            fontSize: 13
          }
        }
      }
    });
    var optionRank = {
      tooltip: {
        trigger: "item",
        formatter: "{b}<br/> : {c} ({d}%)"
      },
      color: [color, "#DDDDDD"],
      legend: {
        orient: "vertical",
        x: "center",
        y: "bottom",
        icon: "line",
        data: [name]
      },
      series: [
        {
          name: "访问来源",
          type: "pie",
          silent: true,
          radius: ["60%", "70%"],
          center: ["50%", "50%"],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: true,
              position: "center"
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: "30",
                fontWeight: "bold"
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: srData
        }
      ]
    };
    myCharts.setOption(optionRank);
  },

  EchartsRanking2(e, f, color, value, allValue) {
    var name = f;
    var valueData = e;
    let myCharts = Echarts.init(document.getElementById("ranking2"));
    var srData = [];
    srData.push({
      value: value,
      name: name,
      label: {
        normal: {
          formatter: valueData,
          textStyle: {
            fontSize: 18
          }
        }
      }
    });
    srData.push({
      value: allValue,
      name: "收入预期",
      label: {
        normal: {
          formatter: "",
          textStyle: {
            color: "#555",
            fontSize: 13
          }
        }
      }
    });
    var optionRank = {
      tooltip: {
        trigger: "item",
        formatter: "{b}<br/> : {c} ({d}%)"
      },
      color: [color, "#DDDDDD"],
      legend: {
        orient: "vertical",
        x: "center",
        y: "bottom",
        icon: "line",
        data: [name]
      },
      series: [
        {
          name: "访问来源",
          type: "pie",
          silent: true,
          radius: ["60%", "70%"],
          center: ["50%", "50%"],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: true,
              position: "center"
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: "30",
                fontWeight: "bold"
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: srData
        }
      ]
    };
    myCharts.setOption(optionRank);
  },

  EchartsRanking(e, f, color, value, allValue) {
    var name = f;
    var valueData = e;
    let myCharts = Echarts.init(document.getElementById("ranking"));
    var srData = [];
    srData.push({
      value: value,
      name: name,
      label: {
        normal: {
          formatter: valueData,
          textStyle: {
            fontSize: 18
          }
        }
      }
    });
    srData.push({
      value: allValue,
      name: "收入预期",
      label: {
        normal: {
          formatter: "",
          textStyle: {
            color: "#555",
            fontSize: 13
          }
        }
      }
    });
    var optionRank = {
      tooltip: {
        trigger: "item",
        formatter: "{b}<br/> : {c} ({d}%)"
      },
      color: [color, "#DDDDDD"],
      legend: {
        orient: "vertical",
        x: "center",
        y: "bottom",
        icon: "line",
        data: [name]
      },
      series: [
        {
          name: "访问来源",
          type: "pie",
          silent: true,
          radius: ["60%", "70%"],
          center: ["50%", "50%"],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: true,
              position: "center"
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: "30",
                fontWeight: "bold"
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: srData
        }
      ]
    };
    myCharts.setOption(optionRank);
  },

  EchartsRankingList(e, f, color) {
    var cell = "";
    var xAxisData = [];
    var name = f;
    var data1 = [];
    for (var i = 0; i < e.length; i++) {
      var stationName = "";
      if (e[i].name === "固戍净化厂" || e[i].name === "福永净化厂") {
        stationName = e[i].name.slice(0, 5);
      } else {
        stationName = e[i].name.slice(0, 4);
      }
      xAxisData.push(stationName);
      if (String(e[i].value).indexOf(".") === -1) {
        data1.push(e[i].value);
      } else {
        data1.push(e[i].value.toFixed(1));
      }
    }
    switch (name) {
      case "水质达标天数排名":
        cell = "天";
        break;

      default:
        cell = "数值";
        break;
    }
    let yAxis = {
      name: cell,
      splitArea: { show: true }, //保留网格区域
      splitLine: {
        show: false,
        color: ["#fffffe"]
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false,
        lineStyle: {} // 样式
      },
      axisLabel: {
        // formatter: '{value}',
        textStyle: {
          //改变刻度字体样式
          color: "#000"
        }
      }
    };
    if (cell === "天") {
      yAxis = {
        name: cell,
        splitArea: { show: true }, //保留网格区域
        minInterval: 1,
        // position:"left",
        splitLine: {
          show: false,
          color: ["#ffffff"]
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false,
          lineStyle: {} // 样式
        },
        axisLabel: {
          // formatter: '{value}',
          textStyle: {
            //改变刻度字体样式
            color: "#000"
          }
        }
      };
    }
    let myChart = Echarts.init(document.getElementById("rangkingList"));
    var option = {
      color: [color],
      title: {
        text: ""
      },
      grid: {
        left: "4%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      legend: {
        data: [name],
        align: "left",
        icon: "line",
        textStyle: {
          color: "#000"
        },
        top: 30
      },
      toolbox: {
        // y: 'bottom',
        feature: {
          //   magicType: {
          //     type: ["stack", "tiled"]
          //   },
          //   dataView: {},
          //   saveAsImage: {
          //     pixelRatio: 2
          //   }
        }
      },
      tooltip: {},
      xAxis: {
        // show: false,
        data: xAxisData,
        // axisLabel: {
        //   interval: 0,
        //   formatter: function(value) {
        //     //x轴的文字改为竖版显示
        //     var str = value.split("");
        //     return str.join("\n");
        //   }
        // },
        silent: true,
        splitLine: {
          show: false,
          color: ["#fdfdfd"]
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false,
          lineStyle: {} // 样式
        },
        axisLabel: {
          // formatter: '{value}',
          interval: 0,
          formatter: function(value) {
            //x轴的文字改为竖版显示
            var str = value.split("");
            return str.join("\n");
          },
          textStyle: {
            //改变刻度字体样式
            color: "#000"
          }
        }
      },
      yAxis: yAxis,
      series: [
        {
          name: name,
          type: "bar",
          data: data1,
          itemStyle: {
            emphasis: {
              barBorderRadius: 14
            },
            normal: {
              barBorderRadius: 14,
              color: new Echarts.graphic.LinearGradient(0, 1, 1, 0, [
                { offset: 0, color: "#FFFFFF" },
                { offset: 1, color: color }
              ])
            }
          },

          barWidth: 14, //柱图宽度
          animationDelay: function(idx) {
            return idx * 10;
          }
        }
      ],
      animationEasing: "elasticOut",
      animationDelayUpdate: function(idx) {
        return idx * 5;
      }
    };

    myChart.setOption(option);
  },
  switchData(e) {
    var name = "";
    switch (e) {
      case "pH":
        name = "pH";
        break;
      case "氨氮":
        name = "ammoniaNitrogen";
        break;
      case "总铬":
        name = "chromium";
        break;
      case "总铜":
        name = "cuprum";
        break;
      case "总镍":
        name = "nickel";
        break;
      case "总氮":
        name = "nitrogen";
        break;
      case "总磷":
        name = "phosphorus";
        break;
      case "总氰化物":
        name = "prussiate";
        break;
      case "污染指数":
        name = "pollutionIndex";
        break;
      case "化学含氧量":
        name = "COD";
        break;
      // COD
    }
    console.log(name);
    return name;
  },
  // 显示八大站点的信息柱形图
  EightPic(res, factor) {
    var xdata = [];
    var ydata = [];
    for (let index = 0; index < res.length; index++) {
      var name = res[index].name;
      var value = res[index].value;
      xdata.push(name);
      ydata.push(value === -1 ? 0 : value.toFixed(1));
    }

    var option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: "4%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category", //这是设置的false，就不不显示下方的x轴，默认是true的
          //                 name:'额度',
          show: true, //这里呢，就是每个柱的name了，根据实际情况下就好了，我就先写这三个
          data: xdata,
          // axisLabel: {
          //   //这个是倾斜角度，也是考虑到文字过多的时候，方式覆盖采用倾斜
          //   //                     rotate: 30,
          //   //这里是考虑到x轴文件过多的时候设置的，如果文字太多，默认是间隔显示，设置为0，标示全部显示，当然，如果x轴都不显示，那也就没有意义了
          //   interval: 0
          // },
          axisLabel: {
            // formatter: '{value}',
            interval: 0,
            formatter: function(value) {
              //x轴的文字改为竖版显示
              var str = value.split("");
              return str.join("\n");
            },
            textStyle: {
              //改变刻度字体样式
              color: "#000"
            }
          },
          splitArea: { show: true }, //保留网格区域
          minInterval: 1,
          // position:"left",
          splitLine: {
            show: false,
            color: ["#ffffff"]
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {} // 样式
          }
          // axisLabel: {
          //   // formatter: '{value}',
          //   textStyle: {
          //     //改变刻度字体样式
          //     color: "#000"
          //   }
          // }
        }
      ],
      yAxis: [
        {
          type: "value",
          name: "分污染指数", //下面的就很简单了，最小是多少，最大是多少，默认一次增加多少
          // min: 0,
          // max: 30,
          interval: 6, //下面是显示格式化，一般来说还是用的上的
          axisLabel: {
            formatter: "{value}"
          },
          splitArea: { show: true }, //保留网格区域
          minInterval: 1,
          // position:"left",
          splitLine: {
            show: false,
            color: ["#ffffff"]
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {} // 样式
          }
          // axisLabel: {
          //   // formatter: '{value}',
          //   textStyle: {
          //     //改变刻度字体样式
          //     color: "#000"
          //   }
          // }
        }
      ],
      series: [
        {
          name: factor + "污染指数",
          type: "bar",
          itemStyle: {
            normal: {
              barBorderRadius: 14,
              color: new Echarts.graphic.LinearGradient(0, 1, 1, 0, [
                { offset: 0, color: "#FFFFFF" },
                { offset: 1, color: "#26C0C0" }
              ]),
              //好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，
              // color: function(params) {
              //   // build a color map as your need.
              //   var colorList = [
              //     "#26C0C0",
              //     // "#B5C334",
              //     // "#FCCE10",
              //     // "#E87C25",
              //     // "#27727B",
              //     // "#FE8463",
              //     // "#9BCA63",
              //     // "#FAD860",
              //     // "#C1232B",
              //     // "#F3A43B",
              //     // "#60C0DD",
              //     // "#D7504B",
              //     // "#C6E579",
              //     // "#F4E001",
              //     // "#F0805A",
              //     // "#26C0C0"
              //   ];
              //   return colorList[params.dataIndex];
              // }, //以下为是否显示，显示位置和显示格式的设置了
              label: {
                show: true,
                position: "top",
                formatter: "{c}",
                color: "#26C0C0"
                // formatter: "{b}\n{c}"
              }
            }
          }, //设置柱的宽度，要是数据太少，柱子太宽不美观~
          barWidth: 14,
          data: ydata
        }
      ]
    };
    let myCharts = Echarts.init(document.getElementById("rankingZhu"));
    myCharts.setOption(option);
  }
};
