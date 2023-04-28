(function() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".bar .chart"));
    // 指定配置和数据
    var option = {
    //   color: ["#2f89cf"],
      color: ["#0EFCFF"],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: "0%",
        top: "10px",
        right: "0%",
        bottom: "4%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
          ],
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "12"
            }
          },
          axisLine: {
            show: false
          }
        }
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "12"
            }
          },
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)"
              // width: 1,
              // type: "solid"
            }
          },
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)"
            }
          }
        }
      ],
      series: [
        {
          name: "直接访问",
          type: "bar",
          barWidth: "35%",
          data: [120, 110, 75, 20, 15, 60, 90],
          itemStyle: {
            barBorderRadius: 5
          }
        }
      ]
    };
  
    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  
    // 数据变化
    var dataAll = [
      { year: "firstHalfYear", data: [120, 110, 75, 20, 15, 60, 90] },
      { year: "secondHalfYear", data: [143, 86, 105, 90, 120, 140] },
      { year: "2019", data: [120, 110, 75, 20, 15, 60, 90]},
      { year: "2020", data: [143, 86, 105, 90, 120, 140] },
    ];
  
    $(".bar").on("click", "a", function() {
      option.series[0].data = dataAll[$(this).index()].data;
      myChart.setOption(option);
    });
  })();