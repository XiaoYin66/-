export default {
  initEcharts(e, f,name,value) {
    var echarts = require("echarts");
    let myChart1 = echarts.init(document.getElementById("mainHis"));
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
        left: 40,
        top: 10
      },
      title: {
        text: "",
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
        data: [name],
        selectedMode: true,
        show: true,
        top:0
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
          name: "",
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
          name: name,
          type: "line",
          smooth: true,
          itemStyle: { normal: { areaStyle: { type: "default" } } },
          data: e,
          markLine: {
            silent: true,
            lineStyle: {
              normal: {
                color: "red" // 这儿设置安全基线颜色
              }
            },
            data: [
              {
                yAxis: value
              }
            ],
            label: {
              normal: {
                formatter: value // 这儿设置安全基线
              }
            }
          }
        }
      ]
    });
  }
};
