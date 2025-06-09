
export function creatOptionForLineChart(Xdata:any  , Ydata:any ) {
    let option = {
        title: {
            text: 'InSAR时序', // 设置标题文本
            left: 'center', // 设置标题位置
            top: '5%', // 设置标题位置
            textStyle: {
                color: '#00b9ff', // 字体颜色

                fontWeight: 'bold', // 字体粗细
                fontFamily: 'sans-serif', // 字体系列
                fontSize: 21 // 字体大小
            }
        },
        grid: {
            bottom: '10%'
        },
        dataZoom: [
            {
                type: 'inside'  // 启用滚轮缩放
            }
        ],
        xAxis: {
            type: 'category',
            // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            data: Xdata,
            axisLabel: {
                textStyle: {
                    color: '#00b9ff' // x轴标签颜色
                }
            }

        },
        yAxis: {
            type: 'value',
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#00a2ff', // 网格线的颜色
                    width: 1.5,
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#00b9ff' // x轴标签颜色
                }
            }
        },
        series: [
            {
                // data: [820, 932, 901, 934, 1290, 1330, 1320],
                data: Ydata,
                type: 'line',
                smooth: true,
                lineStyle: {
                    color: '#fec250', // 线的颜色
                    width: 2, // 线的粗细
                },
                showSymbol: false,
            }
        ]
    };
    return option;
}
export function creatOptionForLineChart_Line(Xdata:any, Ydata:any) {
    let option = {
        title: {
            text: 'InSAR剖面数据', // 设置标题文本
            left: 'center', // 设置标题位置
            top: '5%', // 设置标题位置
            textStyle: {
                color: '#00b9ff', // 字体颜色

                fontWeight: 'bold', // 字体粗细
                fontFamily: 'sans-serif', // 字体系列
                fontSize: 21 // 字体大小
            }
        },
        grid: {
            bottom: '10%'
        },
        dataZoom: [
            {
                type: 'inside'  // 启用滚轮缩放
            }
        ],
        xAxis: {
            type: 'category',
            // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            data: Xdata,
            axisLabel: {
                textStyle: {
                    color: '#00b9ff' // x轴标签颜色
                }
            }

        },
        yAxis: {
            type: 'value',
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#00a2ff', // 网格线的颜色
                    width: 1.5,
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#00b9ff' // x轴标签颜色
                }
            }
        },
        series: [
            {
                // data: [820, 932, 901, 934, 1290, 1330, 1320],
                data: Ydata,
                type: 'line',
                smooth: true,
                lineStyle: {
                    color: '#fec250', // 线的颜色
                    width: 2, // 线的粗细
                },
                showSymbol: false,
            }
        ]
    };
    return option;
}