<template>
  <div class="app-container home">
    <div
      style="
        overflow: hidden;
        background: rgba(0, 0, 40, 0);
        position: relative;
        z-index: 2;
      "
    >
      <div class="mainbox">
        <ul class="clearfix">
          <li>
            <div class="boxall" style="height: 350px">
              <div class="alltitle">标题样式</div>
              <div class="navboxall" id="echart1"></div>
            </div>
            <div class="boxall" style="height: 360px">
              <div class="alltitle">标题样式</div>
              <div class="navboxall">
                <div class="sycm">
                  <ul class="clearfix">
                    <li>
                      <h2>1824</h2>
                      <span>当年销售额</span>
                    </li>
                    <li>
                      <h2>1920</h2>
                      <span>当月销售额</span>
                    </li>
                    <li>
                      <h2>19%</h2>
                      <span>利润额</span>
                    </li>

                    <li>
                      <h2>1824</h2>
                      <span>当年销售额</span>
                    </li>
                    <li>
                      <h2>1920</h2>
                      <span>当月销售额</span>
                    </li>
                    <li>
                      <h2>19%</h2>
                      <span>利润额</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="boxall" style="height: 100px">
              <div class="navboxall">
                <h1>通用大数据可视化展示平台模板</h1>
              </div>
            </div>
            <div class="boxall" style="height: 610px">
              <div class="navboxall" style="overflow: hidden; height: 100%">
                <div
                  style="
                    width: 120%;
                    height: 120%;
                    position: relative;
                    left: -10%;
                    top: -11%;
                  "
                  id="map_container"
                ></div>
              </div>
            </div>
          </li>
          <li>
            <div class="boxall" style="height: 350px">
              <div class="alltitle">标题样式</div>
              <div class="navboxall">
                <table
                  class="table1"
                  width="100%"
                  border="0"
                  cellspacing="0"
                  cellpadding="0"
                >
                  <tbody>
                    <tr>
                      <th scope="col">排名</th>
                      <th scope="col">名称</th>
                      <th scope="col">金额</th>
                    </tr>
                    <tr>
                      <td><span>1</span></td>
                      <td>腾讯科技</td>
                      <td>114万<br /></td>
                    </tr>
                    <tr>
                      <td><span>2</span></td>
                      <td>百度公司</td>
                      <td>923823万</td>
                    </tr>
                    <tr>
                      <td><span>3</span></td>
                      <td>新浪</td>
                      <td>1240253万</td>
                    </tr>
                    <tr>
                      <td><span>4</span></td>
                      <td>网易</td>
                      <td>1.2亿</td>
                    </tr>
                    <tr>
                      <td><span>5</span></td>
                      <td>雅虎</td>
                      <td>13423万</td>
                    </tr>
                    <tr>
                      <td><span>6</span></td>
                      <td>雅虎</td>
                      <td>13423万</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="boxall" style="height: 360px">
              <div class="alltitle">标题样式</div>
              <div class="navboxall">
                <table
                  class="table1"
                  width="100%"
                  border="0"
                  cellspacing="0"
                  cellpadding="0"
                >
                  <tbody>
                    <tr>
                      <th scope="col">排名</th>
                      <th scope="col">名称</th>
                      <th scope="col">金额</th>
                    </tr>
                    <tr>
                      <td><span>1</span></td>
                      <td>腾讯科技</td>
                      <td>114万<br /></td>
                    </tr>
                    <tr>
                      <td><span>2</span></td>
                      <td>百度公司</td>
                      <td>923823万</td>
                    </tr>
                    <tr>
                      <td><span>3</span></td>
                      <td>新浪</td>
                      <td>1240253万</td>
                    </tr>
                    <tr>
                      <td><span>4</span></td>
                      <td>网易</td>
                      <td>1.2亿</td>
                    </tr>
                    <tr>
                      <td><span>5</span></td>
                      <td>雅虎</td>
                      <td>13423万</td>
                    </tr>
                    <tr>
                      <td><span>6</span></td>
                      <td>雅虎</td>
                      <td>13423万</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </li>
        </ul>
        <ul class="clearfix">
          <li style="width: 60%">
            <div class="boxall" style="height: 300px">
              <div class="alltitle">标题样式</div>
              <div class="navboxall" id="echart2"></div>
            </div>
          </li>
          <li style="width: 40%">
            <div class="boxall" style="height: 300px">
              <div class="alltitle">标题样式</div>
              <div class="navboxall" id="echart4"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { listncov, city2xy } from "@/api/index";
export default {
  name: "Index",
  data() {
    return {
      // 版本号
      version: "3.7.0",
      data3: [],
      data22: [],
      // geometry:{
      //   type:'Point',
      //   coordinates: []
      // }
    };
  },
  created() {
    this.getList();
  },
  mounted() {
    this.echarts_1();
    this.echarts_2();
    this.map();
  },
  methods: {
    getList() {
      listncov().then((response) => {
        this.data3 = response.chinaTopCity;
        console.dir(this.data3);
        for (let index = 0; index < this.data3.length; index++) {
          city2xy(this.data3[index].city).then((response) => {
            // var geometry = new Object({
            //   type: "Point",
            //   coordinates: [],
            // });
            // this.data22.push(response.geocodes[0].location);
            // geometry.coordinates.push(
            //   response.geocodes[0].location.split(",")[0]
            // );
            // geometry.coordinates.push(
            //   response.geocodes[0].location.split(",")[1]
            // );
            this.data22.push({
              geometry: {
                type: "Point",
                coordinates: [
                  response.geocodes[0].location.split(",")[0],
                  response.geocodes[0].location.split(",")[1],
                ],
              },
            });
          });
        }
        console.dir(this.data22);
      });
    },
    echarts_1() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("echart1"));
      myChart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        series: [
          {
            name: "占比情况",
            type: "pie",
            radius: "50%",
            center: ["50%", "50%"],
            clockwise: false,
            data: [
              {
                value: 25,
                name: "公司1",
              },
              {
                value: 15,
                name: "公司2",
              },
              {
                value: 8,
                name: "公司3",
              },
            ],
            label: {
              normal: {
                textStyle: {
                  color: "rgba(255,255,255,.6)",
                  fontSize: 14,
                },
              },
            },
            labelLine: {
              normal: {
                show: false,
              },
            },
            itemStyle: {
              normal: {
                //borderWidth: 1,
                //borderColor: '#ffffff',
              },
              emphasis: {
                borderWidth: 0,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
        color: ["#62c98d", "#2f89cf", "#4cb9cf"],
        //backgroundColor: '#fff'});
      });

      // 使用刚指定的配置项和数据显示图表。

      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    echarts_2() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("echart2"));
      var vdata = [
        [4, 3, 5, 9, 1, 8, 3, 7, 2, 4, 6, 4],
        [5, 5, 7, 3, 6, 8, 9, 4, 3, 7, 2, 2],
      ];
      var xdata = [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ];
      var ydata = ["计划数量", "销售金额"];
      var series = [];
      $.each(vdata, function (index, val) {
        var series_option = {
          name: ydata[index],
          type: "bar",
          itemStyle: {
            normal: { color: "" },
          },
          barWidth: "30",
          data: val,
        };
        series.push(series_option);
      });
      myChart.setOption({
        legend: {
          data: ydata,
          type: "scroll",
          textStyle: { color: "#fff" },
          top: "0",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        color: ["#62c98d", "#2f89cf"],
        grid: {
          top: "14%",
          left: "15",
          right: "35",
          bottom: "12%",
          containLabel: true,
        },

        xAxis: [
          {
            type: "category",
            axisLabel: { textStyle: { color: "rgba(255,255,255,.6)" } },
            axisLine: { lineStyle: { color: "rgba(255,255,255,.1)" } },
            data: xdata,
          },
        ],
        yAxis: [
          {
            name: "",
            type: "value",
            axisTick: { show: false },
            splitLine: {
              show: true,
              lineStyle: {
                color: "#2f2a7a",
              },
            }, //x轴线
            axisLabel: { textStyle: { color: "rgba(255,255,255,.6)" } },
            axisLine: { lineStyle: { color: "rgba(255,255,255,.1)" } },
          },
        ],
        dataZoom: [
          {
            show: true,
            height: 12,
            xAxisIndex: [0],
            bottom: 5,
            start: 10,
            end: 80,
            handleIcon:
              "path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",
            handleSize: "110%",
            handleStyle: {
              color: "#d3dee5",
            },

            textStyle: {
              color: "#fff",
            },
            borderColor: "rgba(255,255,255,.3)",
          },
        ],
        series: series,
      });

      // 使用刚指定的配置项和数据显示图表。

      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    map() {
      // 1. 创建地图实例
      var bmapgl = new BMapGL.Map("map_container");
      var point = new BMapGL.Point(116.403748, 39.915055);
      bmapgl.centerAndZoom(point, 5);

      // 2. 创建MapVGL图层管理器
      var view = new mapvgl.View({
        map: bmapgl,
      });

      // 3. 创建可视化图层，并添加到图层管理器中
      var layer = new mapvgl.RippleLayer({
        color: "rgba(50, 50, 200, 1)",
        blend: "lighter",
        size: 2,
      });
      view.addLayer(layer);

      var rippleLayer = new mapvgl.RippleLayer({
        size: 500000,
        unit: "m",
        color: "rgb(255, 51, 0)",
        enablePicked: true,
        onClick: (e) => {
          // let htmlStr = `<div>测试InfoBox内容</div>`

          // // 创建infoBox
          // let infoBox = new BMapLib.InfoBox(bmapgl, htmlStr, {
          //    boxStyle: {
          //       width: "240px",
          //       marginleft: "6px",
          //       backgroundColor: "white"
          //    }, // 定义infoBox的style,
          //    closeIconMargin: "12px 8px 4px 4px",   //关闭按钮的margin
          //    closeIconUrl: "",  //关闭按钮的url地址
          //    align: INFOBOX_AT_TOP, //infobox显示位置，目前只有上和下，基于哪个位置进行定位，取值为[INFOBOX_AT_TOP,INFOBOX_AT_BOTTOM]
          // })

          // infoBox.enableAutoPan(); // 是否启动自动平移功能
          // infoBox.open(marker) // 在某个marker处或者point处打开infobox
          for (let index = 0; index < this.data3.length; index++) {
            var opts = {
            width: 250, // 信息窗口宽度
            height: 100, // 信息窗口高度
            title : this.data3[index].province+this.data3[index].city  // 信息窗口标题
          };
          var point = new BMapGL.Point(this.data22[index].coordinates, this.data22[index].coordinates);
          var infoWindow = new BMapGL.InfoWindow("确诊病例:"+this.data3[index].sure_cnt+" 新增病例:"+this.data3[index].sure_new_cnt+" 新增本土病例:"+this.data3[index].sure_new_loc, opts); // 创建信息窗口对象
          bmapgl.openInfoWindow(infoWindow,point);
            
          }
        },
      });
      view.addLayer(rippleLayer);
      rippleLayer.setData(this.data22);
      console.dir(rippleLayer);
      setTimeout(() => {
        rippleLayer.setOptions({
          size: 50,
          duration: 4,
          unit: "px",
          color: "rgb(255, 51, 0)",
        });
      }, 4000);
    },
  },
};
</script>

<style scoped lang="scss">
@charset "utf-8";
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
*,
body {
  padding: 0px;
  margin: 0px;
  color: #222;
  font-family: "微软雅黑";
}
body {
  color: #666;
  font-size: 16px;
}
li {
  list-style-type: none;
}
table {
}
i {
  margin: 0px;
  padding: 0px;
  text-indent: 0px;
}
img {
  border: none;
  max-width: 100%;
}
a {
  text-decoration: none;
  color: #399bff;
}
a.active,
a:focus {
  outline: none !important;
  text-decoration: none;
}
ol,
ul,
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  padding: 0;
  margin: 0;
}
a:hover {
  color: #06c;
  text-decoration: none !important;
}
.clearfix:after,
.clearfix:before {
  display: table;
  content: " ";
}
.clearfix:after {
  clear: both;
}
.pulll_left {
  float: left;
}
.pulll_right {
  float: right;
}

.canvas {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  height: 100%;
  z-index: 1;
}
.loading {
  position: fixed;
  left: 0;
  top: 0;
  font-size: 16px;
  z-index: 100000000;
  width: 100%;
  height: 100%;
  background: #1a1a1c;
  text-align: center;
}
.loadbox {
  position: absolute;
  width: 160px;
  height: 150px;
  color: rgba(255, 255, 255, 0.6);
  left: 50%;
  top: 50%;
  margin-top: -100px;
  margin-left: -75px;
}
.loadbox img {
  margin: 10px auto;
  display: block;
  width: 40px;
}

// .head{ height:105px; background: url(./images/head_bg.png) no-repeat center center; position: relative}
h1 {
  color: #fff;
  text-align: left;
  font-size: 40px;
  line-height: 64px;
  text-align: center;
}

.weather {
  position: absolute;
  right: 20px;
  top: 0;
  line-height: 70px;
}
.weather span {
  color: rgba(255, 255, 255, 0.7) !important;
  font-size: 18px;
}

.mainbox {
  padding: 20px 20px 0px 20px;
}
.mainbox > ul {
  margin-left: -0.4rem;
  margin-right: -0.4rem;
}
.mainbox > ul > li {
  float: left;
  padding: 0 0.4rem;
}
.mainbox > ul > li {
  width: 24%;
}
.mainbox > ul > li:nth-child(2) {
  width: 52%;
}

.boxall {
  padding: 15px;
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  margin-bottom: 15px;
  z-index: 10;
}
.alltitle {
  font-size: 18px;
  color: #fff;
  position: relative;
  margin-bottom: 10px;
}
.alltitle:before {
  width: 90%;
  height: 1px;
  top: 12px;
  position: absolute;
  content: "";
  border-bottom: dashed #fff 1px;
  right: 0;
  opacity: 0.2;
}
.alltitle:after {
  width: 8px;
  height: 10px;
  top: 8px;
  position: absolute;
  content: "";
  border-radius: 20px;
  right: 0;
  background: #0c51f9;
}

.navboxall {
  height: calc(100% - 30px);
}
.num,
.zhibiao {
  height: 100%;
  width: 50%;
}
.zb1,
.zb2,
.zb3 {
  float: left;
  width: 33.3333%;
  height: 100%;
}
#zb1,
#zb2,
#zb3 {
  height: calc(100% - 30px);
}
.zhibiao span {
  padding-top: 20px;
  display: block;
  text-align: center;
  color: #fff;
  font-size: 16px;
}
.num {
  padding-right: 20px;
}
.numbt {
  font-size: 24px;
  color: #fff;
  padding-top: 14px;
}
.numbt span {
  font-size: 18px;
  padding-left: 10px;
  color: #fff;
}
.numtxt {
  color: #fef000;
  font-size: 80px;
  font-family: arial;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 10px 0;
  margin: 18px 0;
  font-weight: bold;
  letter-spacing: 2px;
}

.table1 th {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
  font-weight: normal;
  padding: 10px 0 10px 0;
}
.table1 td {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.4);
  padding: 15px 0 0 0;
}
.table1 span {
  width: 24px;
  height: 24px;
  border-radius: 53px;
  display: block;
  background: #878787;
  color: #fff;
  line-height: 24px;
  text-align: center;
}

.table1 tr:nth-child(2) span {
  background: #ed405d;
}
.table1 tr:nth-child(3) span {
  background: #f78c44;
}
.table1 tr:nth-child(4) span {
  background: #49bcf7;
}

/*Plugin CSS*/
.sycm ul {
}
.sycm li {
  text-align: center;
  padding: 10px 0;
  position: relative;
  float: left;
  width: 50%;
  padding: 20px 0;
}

.sycm ul li:nth-child(odd):before {
  position: absolute;
  content: "";
  height: 30%;
  width: 1px;
  background: rgba(255, 255, 255, 0.2);
  right: 0;
  top: 30%;
}

.sycm li h2 {
  font-size: 24px;
  color: #c5ccff;
}
.sycm li span {
  font-size: 18px;
  color: #fff;
  opacity: 0.5;
}
.sycm p {
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  margin: 10px;
  border-radius: 5px;
  padding: 8px;
  position: relative;
}
.sycm p:before {
  content: "";
  position: absolute;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid rgba(255, 255, 255, 0.3);
  bottom: -8px;
  left: 49%;
}

.ncov_active {
}
</style>

