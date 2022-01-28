$(window).load(function () {
    $(".loading").fadeOut()
})
$(function () {
    echarts_1();
    echarts_2();
    map();
    echarts_4();

    
    function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));

        option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            series: [{
                name: '占比情况',
                type: 'pie',
                radius: '50%',
                center: ['50%', '50%'],
                clockwise: false,
                data: [{
                    value: 25,
                    name: '公司1'
                }, {
                    value: 15,
                    name: '公司2'
                }, {
                    value: 8,
                    name: '公司3'
                }],
                label: {
                    normal: {
                        textStyle: {
                            color: 'rgba(255,255,255,.6)',
                            fontSize: 14,
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
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
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }],
            color: ['#62c98d', '#2f89cf', '#4cb9cf'],
            //backgroundColor: '#fff'
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));
        var vdata = [
            [4, 3, 5, 9, 1, 8, 3, 7, 2, 4, 6, 4],
            [5, 5, 7, 3, 6, 8, 9, 4, 3, 7, 2, 2],
        ];
        var xdata = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
        var ydata = ['计划数量', '销售金额'];
        var series = [];
        $.each(vdata, function (index, val) {
            var series_option = {
                name: ydata[index],
                type: 'bar',
                itemStyle: {
                    normal: { color: '' }
                },
                barWidth: '30',
                data: val
            };
            series.push(series_option);
        })
        option = {
            legend: {
                data: ydata,
                type: 'scroll',
                textStyle: { color: "#fff" },
                top: '0'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            "color": ["#62c98d", "#2f89cf"],
            grid: {
                top: '14%',
                left: '15',
                right: '35',
                bottom: '12%',
                containLabel: true
            },

            xAxis: [{
                type: 'category',
                axisLabel: { textStyle: { color: "rgba(255,255,255,.6)", } },
                axisLine: { lineStyle: { color: 'rgba(255,255,255,.1)' } },
                data: xdata,
            }],
            yAxis: [{
                name: '',
                type: 'value',
                axisTick: { show: false },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: "#2f2a7a"
                    }
                }, //x轴线
                axisLabel: { textStyle: { color: 'rgba(255,255,255,.6)' } },
                axisLine: { lineStyle: { color: 'rgba(255,255,255,.1)' } },
            }],
            "dataZoom": [{
                "show": true,
                "height": 12,
                "xAxisIndex": [
                    0
                ],
                bottom: 5,
                "start": 10,
                "end": 80,
                handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
                handleSize: '110%',
                handleStyle: {
                    color: "#d3dee5",
                },

                textStyle: {
                    color: "#fff"
                },
                borderColor: "rgba(255,255,255,.3)"

            }],
            series: series
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function map() {
        var data = null;
        $.ajax({
            url:"http://localhost:8957/apis/rest?format=json&method=Huoshenshan.ncov2022&type=latest&news_type=ncp&uc_param_str=dsdnfrpfbivesscpgimibtbmnijblauputogpintnwktprchmt",
            type:"POST",
            // headers:{'Access-Control-Allow-Origin':'*'},
            success:function(data1){
               console.dir(data1)
            }
        })
        // 1. 创建地图实例
        var bmapgl = new BMapGL.Map('map_container');
        var point = new BMapGL.Point(116.403748, 39.915055);
        bmapgl.centerAndZoom(point, 5);

        // 2. 创建MapVGL图层管理器
        var view = new mapvgl.View({
            map: bmapgl
        });

        // 3. 创建可视化图层，并添加到图层管理器中
        var layer = new mapvgl.PointLayer({
            color: 'rgba(50, 50, 200, 1)',
            blend: 'lighter',
            size: 2
        });
        view.addLayer(layer);

        

        var pointLayer = new mapvgl.PointLayer({
            blend: 'lighter',
            size: 15,
            color: 'rgba(102, 0, 204, 0.6)',
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
                var opts = {    
                    width : 250,     // 信息窗口宽度    
                    height: 100,     // 信息窗口高度    
                    // title : "Hello"  // 信息窗口标题   
                }    
                var infoWindow = new BMapGL.InfoWindow("World", opts);  // 创建信息窗口对象    
                bmapgl.openInfoWindow(infoWindow, bmapgl.getCenter());
            },
        });
        view.addLayer(pointLayer);
        pointLayer.setData(data);


    }
    function echarts_4() {
        var myChart = echarts.init(document.getElementById('echart4'));

        option = {
            tooltip: {

                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#57617B'
                    }
                },
                formatter: '{b}:<br/> 完成率{c}%'
            },

            grid: {
                left: '0',
                right: '20',
                top: '10',
                bottom: '20',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba(255,255,255,.6)'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                },
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
            }],
            yAxis: [{
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba(255,255,255,.6)'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                }
            }],
            series: [{
                name: '完成率',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 3
                    }
                },

                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(98, 201, 141, 0.5)'
                        }, {
                            offset: 1,
                            color: 'rgba(98, 201, 141, 0.1)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#4cb9cf',
                        borderColor: 'rgba(98, 201, 141,0.27)',
                        borderWidth: 12
                    }
                },
                data: [91, 60, 70, 54, 80, 40, 99, 33, 80, 20, 60, 10]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function clearPly(mapobj, plyList, type) {
        for (var ply in plyList) {
            mapobj.removeOverlay(plyList[ply]);
            delete plyList[ply];
        }
    }
   
})
