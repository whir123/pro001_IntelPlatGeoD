// import { ref ,onMounted,computed} from 'vue'
import * as Cesium from 'cesium'
import * as echarts from 'echarts';
// import { getElement } from 'element-plus/es/utils/index.mjs';
// import { ref } from 'vue'
export default function () {
    function drawdeformation (viewer:any){
        // let timedata=ref({time1:'',time2:'',time3:'',time4:'',time5:'',time6:'',time7:'',time8:'',time9:'',time10:'',time11:'',time12:'',time13:'',time14:'',time15:'',time16:'',time17:'',time18:'',time19:'',time20:'',time21:'',time22:'',time23:'',time24:'',time25:'',time26:'',time27:'',time28:''})
        let data2: any[]=[] //存储点击的形变点数据
        let handler = new Cesium.ScreenSpaceEventHandler(viewer.canvas);
        var mychart
        var TimedataList
        handler.setInputAction(async function (event:any) {
            viewer.selectedEntity = undefined;
            let pickRay = viewer.camera.getPickRay(event.position);
            let featuresPromise = await viewer.imageryLayers.pickImageryLayerFeatures(pickRay, viewer.scene);
            // console.log(featuresPromise[0].properties);
            // console.log(Object.keys(featuresPromise[0].properties)[10]);
            // console.log(featuresPromise[0].properties.D_20230221);
            
            let properties =featuresPromise[0].properties //获得点击图层的属性信息
            console.log(properties);
            TimedataList = Object.keys(properties)
            console.log("TimedataList",TimedataList);
            var dTimedataArray = TimedataList.filter(function(item) {
                return item.indexOf("D_") === 0;
            });
            console.log(dTimedataArray);
            // let asz =dTimedataArray[2]
            // console.log(properties.D_20221105);
            
            // for(let i=0;i++;i<=dTimedataArray.length){
            //   console.log("###",properties.dTimedataArray[i])
            // }
            dTimedataArray.forEach(key=>{
              // console.log(properties[key]);
              data2.push(properties[key])
            })
            console.log(data2);
            
            const formattedDateList = dTimedataArray.map(dateStr => {
              const year = dateStr.substring(2, 6);  // 提取年份
              const month = dateStr.substring(6, 8);  // 提取月份
              const day = dateStr.substring(8, 10);  // 提取日期
          
              return `${year}-${month}-${day}`;  // 格式化为“年-月-日”
            });
            
            console.log("formattedDateList",formattedDateList);

            // timedata.value.time1 =properties.D_20211231
            // timedata.value.time2 =properties.D_20220124
            // timedata.value.time3 =properties.D_20220205
            // timedata.value.time4 =properties.D_20220217
            // timedata.value.time5 =properties.D_20220313
            // timedata.value.time6 =properties.D_20220325
            // timedata.value.time7 =properties.D_20220406
            // timedata.value.time8 =properties.D_20220418
            // timedata.value.time9 =properties.D_20220430
            // timedata.value.time10 =properties.D_20220512  //把属性表数据存储到响应式数据中
            // timedata.value.time11 =properties.D_20220524
            // timedata.value.time12 =properties.D_20220605
            // timedata.value.time13 =properties.D_20220617
            // timedata.value.time14 =properties.D_20220629
            // timedata.value.time15 =properties.D_20220711
            // timedata.value.time16 =properties.D_20220723
            // timedata.value.time17 =properties.D_20220804
            // timedata.value.time18 =properties.D_20220816
            // timedata.value.time19 =properties.D_20220828
            // timedata.value.time20 =properties.D_20220909
            // timedata.value.time21 =properties.D_20221003
            // timedata.value.time22 =properties.D_20221027
            // timedata.value.time23 =properties.D_20221108
            // timedata.value.time24 =properties.D_20221120
            // timedata.value.time25 =properties.D_20221202
            // timedata.value.time26 =properties.D_20221226
            // timedata.value.time27 =properties.D_20230107
            // let data1=[timedata.value.time1,timedata.value.time2,timedata.value.time3,timedata.value.time4,timedata.value.time5,timedata.value.time6,timedata.value.time7,timedata.value.time8,timedata.value.time9,timedata.value.time10,
            //   timedata.value.time11,timedata.value.time12,timedata.value.time13,timedata.value.time14,timedata.value.time15,timedata.value.time16,timedata.value.time17,timedata.value.time18,timedata.value.time19,timedata.value.time20,
            //   timedata.value.time21,timedata.value.time22,timedata.value.time23,timedata.value.time24,timedata.value.time25,timedata.value.time26,timedata.value.time27
            // ]
            // data2.push(data1) //将当前点击点的数据存储到 存放形变数据的数组中，方便后续成图
            var charts = document.getElementById('trendChart')
            var acharts = document.getElementsByClassName('charts')
            console.log(acharts);
            // console.log(charts);
            // acharts[0].style.display = 'flex'
            // charts.style.top =100 +'px'
            // charts.style.left =1200+ 'px'
            
            //形变速率点绘图
            mychart = echarts.init(charts);
            var option = {
                title: {
                  text: 'InSAR时序',
                  left: 'center',	// 可选为：'left' | 'center' | 'right'
                  textStyle: {
                    fontWeight: 'normal',              
                    color: '#00FFFF'  // 标题颜色
                  } 
                },
                tooltip: { 
                  trigger: 'axis', // 触发类型，在饼形图中为item
                  axisPointer : {// 坐标轴指示器，坐标轴触发有效
                    type : 'line' // 默认为直线，可选为：'line' | 'shadow'
                  },
                },
                grid: {
                  top:'10%',
                  left: '3%',
                  right: '4%',
                  bottom: '3%',
                  containLabel: true
                },
                toolbox: {
                  feature: {
                    saveAsImage: {}
                  },
                  padding: [0,15,0,0]
                },
                xAxis: {
                  type: 'category',
                  boundaryGap: true,
                  axisLine: { // 改变x轴颜色 默认不写为黑色
                    lineStyle: {
                      color: '#00FFFF',
                      // width: 1 // 这里是为了突出显示加上的
                    }
                  },
                  // data: [ '2021-11-31','2022-01-24', '2022-02-05', '2022-02-17', '2022-03-13', '2022-03-25', '2022-04-06', '2022-04-18', '2022-04-30', '2022-05-12',
                  //   '2022-05-24','2022-06-05','2022-06-17','2022-06-29','2022-07-11','2022-07-23','2022-08-04','2022-08-16','2022-08-28','2022-09-09','2022-10-03',
                  //   '2022-10-27','2022-11-08','2022-11-20','2022-12-02','2022-12-26','2023-01-07',
                  // ]
                  data:formattedDateList
                },
          
                yAxis: {
                  axisLine: { // 改变y轴颜色 默认不写为黑色
                    lineStyle: {
                      color: '#00FFFF',
                      // width: 1 // 这里是为了突出显示加上的
                    }
                  }, 
                  // type: 'velocity'
                },
                series: [
                  {
                    name: '形变点形变速率',
                    type: 'line',
                    // stack: '加速度',
                    lineStyle: {//折线颜色
                      normal: {
                        color: '#00FFFF',
                        width: 2
                      }
                    },
                    data:data2,
                    smooth: true
                    // data: data.ctzd1
                  }
                ]
              }
            option && mychart.setOption(option);
            if(data2.length>=1){
              data2=[]
            }
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
        return {viewer,handler}
    }
  return drawdeformation
}