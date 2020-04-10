import Store from "../vuex/store";
var echarts = require("echarts");
export default {
  /**
   *
   * @param {*纵坐标的数组} e
   * @param {*横轴坐标数据} g
   * @param {*因子类型} h
   * @param {*单位} a
   * @param {*标准值} c
   */
  initHistoryDataEchartsPH(res, type, hasCod) {
    var arrPH = [];
    var arrAmmoniaNitrogen = [];
    var arrChromium = [];
    var arrCuprum = [];
    var arrNickel = [];
    var arrNitrogen = [];
    var arrPhosphorus = [];
    var arrPrussiate = [];
    var arrTime = [];
    var arrCod = [];
    let myChartph = echarts.init(document.getElementById("mainpH"));
    let myChartammoniaNitrogen = echarts.init(
      document.getElementById("mainammoniaNitrogen")
    );
    // let myChartchromium = echarts.init(document.getElementById("mainchromium"));
    let myChartchromium = null;
    // if (hasCod !== 1) {
      myChartchromium = echarts.init(document.getElementById("mainchromium"));
    // }
   
    let myChartcuprum = echarts.init(document.getElementById("maincuprum"));

    let myChartnickel = echarts.init(document.getElementById("mainnickel"));
    let myChartnitrogen = echarts.init(document.getElementById("mainnitrogen"));

    let myChartphosphorus = echarts.init(
      document.getElementById("mainphosphorus")
    );
    let myChartprussiate = echarts.init(
      document.getElementById("mainprussiate")
    );
    // cod
    let myChartcod = null;
    // if (hasCod !== 2) {
      myChartcod = echarts.init(document.getElementById("maincod"));
    // }
    console.log(res);
    for (let index = 0; index < res.length; index++) {
      // time
      var time = res[index].gmtMonitor;
      time = time.slice(5, 16);
      arrTime.push(time);
      // ph
      var pHData = res[index].ph;
      arrPH.push(pHData);
      // ammoniaNitrogen
      var ammoniaNitrogen = res[index].ammoniaNitrogen;
      arrAmmoniaNitrogen.push(ammoniaNitrogen);
      // chromium
      var chromium = res[index].chromium;
      arrChromium.push(chromium);
      // cuprum
      var cuprum = res[index].cuprum;
      arrCuprum.push(cuprum);
      // nickel
      var nickel = res[index].nickel;
      arrNickel.push(nickel);
      // nitrogen
      var nitrogen = res[index].nitrogen;
      arrNitrogen.push(nitrogen);
      // phosphorus
      var phosphorus = res[index].phosphorus;
      arrPhosphorus.push(phosphorus);
      // prussiate
      var prussiate = res[index].prussiate;
      arrPrussiate.push(prussiate);
      // cod

      if (res[index].cod !== undefined && res[index].cod !== null) {
        var cod = res[index].cod;
        arrCod.push(cod);
      } else {
        var cod = 0;
        arrCod.push(cod);
      }
    }
    // PH
    var optionPH = this.optionFuncPH(
      arrPH,
      arrTime,
      "pH",
      "",
      Store.state.factor.ph1,
      "#b298e1",
      Store.state.factor.ph,
      "#f44336"
    );
    myChartph.setOption(optionPH);
    // cod 化学需氧量
    var optionCod = this.optionFunc(
      arrCod,
      arrTime,
      "CODcr",
      "mg/L",
      Store.state.factor.cod,
      "#f48fb1",
      1000
    );
    // if (hasCod !== 2) {
      myChartcod.setOption(optionCod);
    // }

    // ammoniaNitrogen 氨氮
    var optionAmmoniaNitrogen = this.optionFunc(
      arrAmmoniaNitrogen,
      arrTime,
      "氨氮",
      "mg/L",
      Store.state.factor.ammoniaNitrogen,
      "#5bb0f0",
      80
    );
    myChartammoniaNitrogen.setOption(optionAmmoniaNitrogen);
    // chromium
    var optionChromium = this.optionFunc(
      arrChromium,
      arrTime,
      "总铬",
      "mg/L",
      Store.state.factor.chromium,
      "#eee000",
      2
    );
    // if (hasCod !== 1) {
    myChartchromium.setOption(optionChromium);
    // }
    // cuprum
    var optionCuprum = this.optionFunc(
      arrCuprum,
      arrTime,
      "总铜",
      "mg/L",
      Store.state.factor.cuprum,
      "#e44545",
      12
    );
    myChartcuprum.setOption(optionCuprum);
    // nickel
    var optionNickel = this.optionFunc(
      arrNickel,
      arrTime,
      "总镍",
      "mg/L",
      Store.state.factor.nickel,
      "#fe8864",
      10
    );
    myChartnickel.setOption(optionNickel);
    // nitrogen
    var optionNitrogen = this.optionFunc(
      arrNitrogen,
      arrTime,
      "总氮",
      "mg/L",
      Store.state.factor.nitrogen,
      "#07ab12",
      100
    );
    myChartnitrogen.setOption(optionNitrogen);
    // phosphorus
    var optionPhosphorus = this.optionFunc(
      arrPhosphorus,
      arrTime,
      "总磷",
      "mg/L",
      Store.state.factor.phosphorus,
      "#2823e0",
      40
    );
    myChartphosphorus.setOption(optionPhosphorus);
    // prussiate
    var optionPrussiate = this.optionFunc(
      arrPrussiate,
      arrTime,
      "总氰化物",
      "mg/L",
      Store.state.factor.prussiate,
      "#2ec8ca",
      2
    );
    myChartprussiate.setOption(optionPrussiate);
  },

  initHistoryDataEcharts(res) {
    var arrPH = [];
    let myChart1 = echarts.init(document.getElementById("mainpH"));
    console.log(res);
    for (let index = 0; index < res.length; index++) {
      var pHData = res[index].ph;
      arrPH.push(pHData);
    }
    var option = this.optionFunc(arrPH, f, g, h, i, a, b, c, d);
    myChart1.setOption(option);
  },

  optionFunc(e, g, h, a, c, color, max) {
    var arrG = g;
    // arrG = g;
    //  var dataX  = function(params) {
    // for (let index = 0; index < g.length; index++) {
    //   var nameX = g[index];
    //   arrG.push(nameX.slice(0,5));
    // }

    // return arrG
    // }
    var option = {
      color: [color],
      title: {
        text: h,
        x: "center",
        y: "top",
        padding: 20,
        //   subtext: "纯属虚构",
        textStyle: {
          fontWeight: 600,
          fontSize: 12
        }
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        show: false,
        data: [h]
      },
      grid: {
        left: 60,
        top: 60,
        right: 60
      },
      xAxis: [
        {
          type: "category",
          data: arrG,
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            // inside: true,
            textStyle: {
              color: "#000"
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            //网格线
            show: true,
            lineStyle: {
              color: "#e0e0e0"
            }
          }
          // z: -200
        }
      ],
      yAxis: [
        {
          name: "单位：" + a,
          max: max,
          min: 0, // 最小值
          splitArea: { show: false }, //保留网格区域
          nameLocation: "end",
          scale: true,
          nameTextStyle: {
            color: "#ccc",
            fontStyle: "oblique"
          },
          type: "value",
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "#999"
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
      toolbox: {
        show: false,
        feature: {
          dataZoom: {
            yAxisIndex: "none"
          } //其他功能性按钮查看官网进行增加，包括（显示数据，下载图片，改为柱状图等）
        }
      },
      dataZoom: [
        {
          type: "slider", //图表下方的伸缩条
          show: true, //是否显示
          realtime: true, //拖动时，是否实时更新系列的视图
          start: 0, //伸缩条开始位置（1-100），可以随时更改
          end: 100 //伸缩条结束位置（1-100），可以随时更改
        }
      ],

      // visualMap: {
      //   show: true,
      //   pieces: [
      //     {
      //       gt: 0,
      //       lte: Number(c),
      //       color: color
      //     },
      //     {
      //       gt: Number(c),
      //       color: "#6a1b9a"
      //     }
      //   ],
      //   seriesIndex: 0
      // },
      series: [
        {
          name: h,
          type: "line",
          barWidth: 2,
          data: e,

          animationDelay: function(idx) {
            return idx * 10;
          },
          symbol: "circle", // 拐点类型
          smooth: true, //
          symbolSize: 2, // 拐点圆的大小
          // areaStyle: {
          //   normal: {
          //     // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          //     //   { offset: 0, color: color },
          //     //   { offset: 0.5, color: color },
          //     //   { offset: 1, color: "#ddd" }
          //     // ])
          //     // color:color
          //   }
          // },
          itemStyle: {
            emphasis: {
              barBorderRadius: 10
            },
            normal: {
              barBorderRadius: 10
            }
          },
          markLine: {
            silent: true,
            lineStyle: {
              normal: {
                color: "#880e4f" // 这儿设置安全基线颜色
              }
            },
            data: [
              {
                yAxis: c,
                label: {
                  normal: {
                    formatter: c // 这儿设置安全基线
                  }
                }
              }
              // {
              //   yAxis: 6,
              //   label: {
              //     normal: {
              //       formatter: "pH" + ":" + 6 // 这儿设置安全基线
              //     }
              //   }
              // }
            ]
            // label: {
            //   normal: {
            //     formatter: h + ":" + c // 这儿设置安全基线
            //   }
            // }
          }
        }
      ],
      animationEasing: "elasticOut",
      animationDelayUpdate: function(idx) {
        return idx * 5;
      }
    };
    return option;
  },
  optionFuncPH(e, g, h, a, c, color, line, colorLine) {
    var option = {
      color: [color],
      title: {
        text: h,
        x: "center",
        y: "top",
        padding: 20,
        //   subtext: "纯属虚构",
        textStyle: {
          fontWeight: 600,
          fontSize: 12
        }
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        show: false,
        data: [h]
      },
      grid: {
        left: 60,
        top: 60,
        right: 60
      },
      xAxis: [
        {
          type: "category",
          data: g,
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            // inside: true,
            textStyle: {
              color: "#000"
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            //网格线
            show: true,
            lineStyle: {
              color: "#e0e0e0"
            }
          }
          // z: -200
        }
      ],
      yAxis: [
        {
          // name:   "浓度值" + a,
          min: 0, // 最小值
          max: 14,
          // minInterval: 0,
          interval: 2, //每次增加几个
          splitArea: { show: false }, //保留网格区域
          nameLocation: "end",
          scale: true,
          nameTextStyle: {
            color: "#ccc",
            fontStyle: "oblique"
          },
          type: "value",
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "#999"
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
      toolbox: {
        show: false,
        feature: {
          dataZoom: {
            yAxisIndex: "none"
          } //其他功能性按钮查看官网进行增加，包括（显示数据，下载图片，改为柱状图等）
        }
      },
      dataZoom: [
        {
          type: "slider", //图表下方的伸缩条
          show: true, //是否显示
          realtime: true, //拖动时，是否实时更新系列的视图
          start: 0, //伸缩条开始位置（1-100），可以随时更改
          end: 100 //伸缩条结束位置（1-100），可以随时更改
        }
      ],

      // visualMap: {
      //   show: true,
      //   pieces: [
      //     {
      //       gt: 0,
      //       lte: Number(c),
      //       color: color
      //     },
      //     {
      //       gt: Number(c),
      //       color: "#6a1b9a"
      //     }
      //   ],
      //   seriesIndex: 0
      // },
      series: [
        {
          name: h,
          type: "line",
          barWidth: 2,
          data: e,

          animationDelay: function(idx) {
            return idx * 10;
          },
          symbol: "circle", // 拐点类型
          smooth: true, //
          symbolSize: 2, // 拐点圆的大小
          // areaStyle: {
          //   normal: {
          //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          //       { offset: 0, color: color },
          //       { offset: 0.5, color: color },
          //       { offset: 1, color: "#ddd" }
          //     ])
          //   }
          // },
          itemStyle: {
            emphasis: {
              barBorderRadius: 10
            },
            normal: {
              barBorderRadius: 10
            }
          },
          markLine: {
            silent: true,

            data: [
              {
                yAxis: c,
                label: {
                  normal: {
                    formatter: c // 这儿设置安全基线
                  }
                },
                lineStyle: {
                  normal: {
                    color: "#880e4f" // 这儿设置安全基线颜色
                  }
                }
              },
              {
                yAxis: line,
                label: {
                  normal: {
                    formatter: "pH" + ":" + line // 这儿设置安全基线
                  }
                },
                lineStyle: {
                  normal: {
                    color: colorLine // 这儿设置安全基线颜色
                  }
                }
              }
            ]
            // label: {
            //   normal: {
            //     formatter: h + ":" + c // 这儿设置安全基线
            //   }
            // }
          }
        }
      ],
      animationEasing: "elasticOut",
      animationDelayUpdate: function(idx) {
        return idx * 5;
      }
    };
    return option;
  }
};
