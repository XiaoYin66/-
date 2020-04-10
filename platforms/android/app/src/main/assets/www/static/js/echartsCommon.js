export default {
  initEcharts(e, f) {
    var echarts = require("echarts");
    let myChart1 = echarts.init(document.getElementById("main"));
    myChart1.setOption({
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: "#ffa902 " // 0% 处的颜色
        },
        {
          offset: 0.4,
          color: "#ffb74d" // 100% 处的颜色
        },
        {
          offset: 1,
          color: "#fff3e0" // 100% 处的颜色
        }
      ]),
      grid: {
        left: 60,
        top: 60
      },
      title: {
        text: "水质变化情况趋势图",
        //   subtext: "纯属虚构",
        textStyle: {
          fontWeight: 600,
          fontSize: 12
        }
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        data: ["水质"],
        selectedMode: true,
        show: false
      },
      // toolbox: {
      //   show: true,
      //   feature: {
      //     mark: { show: true },
      //     // dataView: { show: true, readOnly: false },
      //     // magicType: { show: true, type: ["line", "bar", "stack", "tiled"] },
      //     restore: { show: true }
      //     // saveAsImage: { show: true }
      //   }
      // },
      toolbox: {
        show: true,
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
          start: 40, //伸缩条开始位置（1-100），可以随时更改
          end: 50 //伸缩条结束位置（1-100），可以随时更改
        }
      ],
      calculable: true,
      xAxis: [
        {
          type: "category",
          boundaryGap: false,
          axisTick: {
            alignWithLabel: true
          },
          // axisLabel: {
          //   // inside: true,
          //   textStyle: {
          //     color: "#000"
          //   }
          // },
          axisTick: {
            show: false
          },
          // axisLine: {
          //   show: false
          // },
          axisLine: {
            lineStyle: {
              type: "dotted",
              color: "#c6c6c6", //左边线的颜色
              width: "2" //坐标线的宽度
            }
          },
          data: f
        }
      ],
      yAxis: [
        {
          name: "污染指数",
          nameLocation: "end",
          nameTextStyle: {
            color: "#ccc",
            fontStyle: "oblique"
          },
          type: "value",
          splitLine: { show: false }, //去除网格线
          splitArea: { show: true }, //保留网格区域
          axisLine: {
            lineStyle: {
              type: "solid",
              // shadowColor:"red",
              color: "#fff" //左边线的颜色
              // width:'2'//坐标线的宽度
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "#999"
            }
          }
        }
      ],
      series: [
        //
        {
          name: "水质",
          type: "line",
          smooth: true,
          itemStyle: { normal: { areaStyle: { type: "default" } } },
          data: e,
          markLine: {
            silent: true,
            lineStyle: {
              normal: {
                color: "#ec407a" // 这儿设置安全基线颜色
              }
            },
            data: [
              {
                yAxis: 1
              }
            ],
            label: {
              normal: {
                formatter: 1 // 这儿设置安全基线
              }
            }
          }
        }
      ]
    });
  },
  initTest(e, f) {
    var echarts = require("echarts");
    let myChart1 = echarts.init(document.getElementById("mainTest"));
    myChart1.setOption({
      // color: ["#3398DB"],

      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: "#4ed995" },
        // 83bff6
        { offset: 0.5, color: "#69f0ae" },
        { offset: 1, color: "#b9f6ca" }
      ]),
      title: {
        text: "站点排名",
        //   subtext: "纯属虚构",
        textStyle: {
          fontWeight: 600,
          fontSize: 12
        }
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: 40,
        top: 60,
        right: 30
      },
      xAxis: [
        {
          type: "category",
          data: f,
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
          }
          // z: -200
        }
      ],
      yAxis: [
        {
          name: "污染指数",
          nameLocation: "end",
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
          }
        }
      ],
      series: [
        {
          name: "污染指数",
          type: "bar",
          barWidth: 20,
          data: e,
          //   itemStyle: {
          //     emphasis: {
          //       barBorderRadius: 10
          //     },
          //     normal: {
          //       barBorderRadius: 10
          //     }
          //   },
          markLine: {
            silent: true,
            lineStyle: {
              normal: {
                color: "red" // 这儿设置安全基线颜色
              }
            },
            data: [
              {
                yAxis: 1
              }
            ],
            label: {
              normal: {
                formatter: 1 // 这儿设置安全基线
              }
            }
          },
          itemStyle: {
            normal: {
              barBorderRadius: 5,
              color: function(params) {
                var index_color = params.value;

                if (index_color >= 1.2) {
                  //   return "#fe4365";
                  return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "#880e4f" },
                    // 83bff6
                    { offset: 0.5, color: "#ec407a" },
                    { offset: 1, color: "#fce4ec" }
                  ]);
                } else if (index_color >= 1 && index_color <= 1.2) {
                  return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "#e65100" },
                    // 83bff6
                    { offset: 0.5, color: "#ffa726" },
                    { offset: 1, color: "#fff3e0" }
                  ]);
                } else {
                  //   return "#4ed995";
                  return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "#4ed995" },
                    // 83bff6
                    { offset: 0.5, color: "#69f0ae" },
                    { offset: 1, color: "#b9f6ca" }
                  ]);
                }
              }
            }
          }
        }
      ]
    });
  },
  initPHEcharts(e, f, g) {
    // console.log(e, f, g, 'efg')
    var echarts = require("echarts");
    let myChart = echarts.init(document.getElementById("mainPh"));
    myChart.setOption({
      grid: {
        // top: "30%"
      },
      title: {
        text: g,
        left: "5%",
        // fontSize:16
        textStyle: {
          fontWeight: "normal",
          fontSize: 14
        },
        subtextStyle: {
          color: "#000",
          // fontWeight: "bolder",
          fontSize: "14"
        }
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} :({d}%)"
      },
      color: ["#2de778", "#ffa902"],
      legend: {
        show: false,
        orient: "vertical",
        right: "0",
        bottom: "0",
        // data: ["达标:" + e + "%", "超标:" + f + "%"],
        // data: ["达标:" + e + "%", "超标:" + f + "%"],
        textStyle: {}

        // show: false
      },
      series: [
        {
          label: {
            normal: {
              fontSize: 14,
              position: "inner",
              formatter: "{d}%"
              // formatter: "{b}:{d}%"
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
              show: true
            }
          },
          name: g,
          type: "pie",
          // radius: ["55%", "70%"],
          data: [
            { value: e, name: "达标:" + e + "%" },
            { value: f, name: "超标:" + f + "%" }
          ],

          itemStyle: {
            // normal: {
            //   fontSize: 14,
            //   position: 'inner',
            //   formatter: "{b}:{d}%"
            // },
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }
      ]
    });
    // myChart.on("click", function(param) {
    //   console.log(param);
    // });
  },
  initTest2(e, f, g, h, i, a, b, c, d) {
    var echarts = require("echarts");
    let myChart1 = echarts.init(document.getElementById("mainTest"));
    myChart1.setOption({
      color: ["#ef6c00", "#00c853"],
      title: {
        // text: h+"、"+i,
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
        data: [h, i]
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
          }
          // z: -200
        }
      ],
      yAxis: [
        {
          name: h + a,
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
          }
        },
        {
          name: i + b,
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
          }
        }
      ],
      toolbox: {
        show: true,
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
          start: 40, //伸缩条开始位置（1-100），可以随时更改
          end: 50 //伸缩条结束位置（1-100），可以随时更改
        }
      ],

      // visualMap: {
      //   show: false,
      //   pieces: [
      //     {
      //       gt: 0,
      //       lte: Number(c),
      //       color: "red"
      //     },
      //     {
      //       gt: Number(c),
      //       color: "green"
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
          // visualMap: {
          //   show: false,
          //   pieces: [
          //     {
          //       gt: 0,
          //       lte: Number(c),
          //       color: "green"
          //     },
          //     {
          //       gt: Number(c),
          //       color: "green"
          //     }
          //   ],
          //   seriesIndex: 0
          // },
          animationDelay: function(idx) {
            return idx * 10;
          },
          symbol: "circle", // 拐点类型
          smooth: true, //
          symbolSize: 2, // 拐点圆的大小
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "red" },
                { offset: 0.5, color: "pink" },
                { offset: 1, color: "#ddd" }
              ])
            }
          },
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
                yAxis: c
              }
            ],
            label: {
              normal: {
                formatter: h + ":" + c // 这儿设置安全基线
              }
            }
          }
        },
        {
          name: i,
          type: "line",
          barWidth: 2,
          yAxisIndex: 1,
          data: f,
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#fb8c00" },
                { offset: 0.2, color: "#fb8c00" },
                { offset: 1, color: "#ddd" }
              ])
            }
          },
          // visualMap: {
          //   show: false,
          //   pieces: [
          //     {
          //       gt: 0,
          //       lte: Number(d),
          //       color: "#cccccc"
          //     },
          //     {
          //       gt: Number(d),
          //       color: "green"
          //     }
          //   ],
          //   seriesIndex: 0
          // },
          animationDelay: function(idx) {
            return idx * 10 + 100;
          },
          symbol: "circle", // 拐点类型
          smooth: true, //
          symbolSize: 2, // 拐点圆的大小
          itemStyle: {
            emphasis: {
              barBorderRadius: 2
            },
            normal: {
              barBorderRadius: 2
            }
          },
          markLine: {
            silent: true,
            lineStyle: {
              normal: {
                color: "#bf360c" // 这儿设置安全基线颜色
              }
            },
            data: [
              {
                yAxis: d
              }
            ],
            label: {
              normal: {
                formatter: i + ":" + d // 这儿设置安全基线
              }
            }
          }
        }
      ],
      animationEasing: "elasticOut",
      animationDelayUpdate: function(idx) {
        return idx * 5;
      }
    });
  },

  // 八个饼图
  echartPie() {
    var option = {
      //   var echarts = require("echarts");
      // let myChart = echarts.init(document.getElementById("mainPh"));
      // myChart.setOption({
      grid: {
        top: "30%"
      },
      title: {
        text: g,
        left: "5%",
        // fontSize:16
        textStyle: {
          fontWeight: "normal",
          fontSize: 14
        },
        subtextStyle: {
          color: "#000",
          // fontWeight: "bolder",
          fontSize: "14"
        }
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} :({d}%)"
      },
      color: ["#2de778", "#ffa902"],
      legend: {
        show: false,
        orient: "vertical",
        right: "0",
        bottom: "0",
        // data: ["达标:" + e + "%", "超标:" + f + "%"],
        // data: ["达标:" + e + "%", "超标:" + f + "%"],
        textStyle: {}

        // show: false
      },
      series: [
        {
          label: {
            normal: {
              fontSize: 14,
              position: "inner",
              formatter: "{d}%"
              // formatter: "{b}:{d}%"
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
              show: true
            }
          },
          name: g,
          type: "pie",
          // radius: ["55%", "70%"],
          data: [
            { value: e, name: "达标:" + e + "%" },
            { value: f, name: "超标:" + f + "%" }
          ],

          itemStyle: {
            // normal: {
            //   fontSize: 14,
            //   position: 'inner',
            //   formatter: "{b}:{d}%"
            // },
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }
      ]
    };
    return option;
  }
};
