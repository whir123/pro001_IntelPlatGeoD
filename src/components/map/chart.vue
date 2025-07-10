<template>
    <div class="back">
        <div class="chart1" id="chart1">

        </div>
        <!-- <div class="chart2" id="chart2">

        </div> -->
    </div>

</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import { onMounted } from "vue";
import { creatOptionForLineChart_Line, creatOptionForLineChart } from "../../class/function/chart.ts";

let value0 = [
    { "Value": 9.0609, "Source": "20210117" }, { "Value": 9.5662, "Source": "20210123" }, {
        "Value": 9.3772,
        "Source": "20210129"
    }, { "Value": 8.5426, "Source": "20210204" }, { "Value": 9.0841, "Source": "20210210" }, {
        "Value": 7.8647,
        "Source": "20210216"
    }, { "Value": 0, "Source": "20200901" }, { "Value": 8.334, "Source": "20210105" }, {
        "Value": 9.0165,
        "Source": "20210111"
    }, { "Value": 0.645, "Source": "20200907" }, { "Value": 6.2526, "Source": "20200913" }, {
        "Value": 4.2348,
        "Source": "20200919"
    }, { "Value": 5.3822, "Source": "20200925" }, { "Value": 4.7349, "Source": "20201001" }, {
        "Value": 6.6621,
        "Source": "20201013"
    }, { "Value": 7.8355, "Source": "20201025" }, { "Value": 8.3675, "Source": "20201124" }, {
        "Value": 8.4585,
        "Source": "20201031"
    }, { "Value": 6.3547, "Source": "20201106" }, { "Value": 8.4796, "Source": "20201112" }, {
        "Value": 9.6712,
        "Source": "20201118"
    }, { "Value": 8.4841, "Source": "20201130" }, { "Value": 9.2513, "Source": "20201206" }, {
        "Value": 9.5808,
        "Source": "20201212"
    }, { "Value": 9.7432, "Source": "20201218" }, { "Value": 8.6458, "Source": "20201224" }, {
        "Value": 9.2342,
        "Source": "20201230"
    }, { "Value": 8.8074, "Source": "20210222" }, { "Value": 7.9566, "Source": "20210228" }, {
        "Value": 6.9911,
        "Source": "20210306"
    }, { "Value": 3.4841, "Source": "20210411" }, { "Value": 7.0131, "Source": "20210312" }, {
        "Value": 6.1636,
        "Source": "20210324"
    }, { "Value": 3.4909, "Source": "20210330" }, { "Value": 4.389, "Source": "20210405" }, {
        "Value": 4.7058,
        "Source": "20210417"
    }, { "Value": 2.2512, "Source": "20210429" }, { "Value": 1.2538, "Source": "20210505" }, {
        "Value": 1.452,
        "Source": "20210511"
    }, { "Value": 2.7163, "Source": "20210517" }, { "Value": -9.0971, "Source": "20210809" }, {
        "Value": 3.8119,
        "Source": "20210523"
    }, { "Value": -0.425, "Source": "20210604" }, { "Value": 0.0806, "Source": "20210610" }, {
        "Value": -1.5951,
        "Source": "20210622"
    }, { "Value": -0.5515, "Source": "20210628" }, { "Value": -3.4356, "Source": "20210704" }, {
        "Value": -2.3838,
        "Source": "20210716"
    }, { "Value": -5.4377, "Source": "20210722" }, { "Value": -9.2187, "Source": "20210821" }, {
        "Value": -11.9313,
        "Source": "20210827"
    }, { "Value": -9.1577, "Source": "20210902" }, { "Value": -14.2379, "Source": "20210914" }, {
        "Value": -15.2511,
        "Source": "20210920"
    }, { "Value": -16.4909, "Source": "20210926" }, { "Value": -19.1196, "Source": "20211008" }, {
        "Value": -21.06,
        "Source": "20211014"
    }, { "Value": -23.18, "Source": "20211020" }, { "Value": -21.8348, "Source": "20211026" }
]
let value1 = [
    {
        "Value": -16.4893,
        "Source": ""
    },
    {
        "Value": -18.26,
        "Source": ""
    },
    {
        "Value": -20.5807,
        "Source": ""
    },
    {
        "Value": -17.5355,
        "Source": ""
    },
    {
        "Value": -24.3125,
        "Source": ""
    },
    {
        "Value": -25.3374,
        "Source": ""
    },
    {
        "Value": -17.6033,
        "Source": ""
    },
    {
        "Value": -19.3193,
        "Source": ""
    },
    {
        "Value": -16.5573,
        "Source": ""
    },
    {
        "Value": -15.6657,
        "Source": ""
    },
    {
        "Value": -19.1752,
        "Source": ""
    },
    {
        "Value": -19.0393,
        "Source": ""
    },
    {
        "Value": -19.7662,
        "Source": ""
    },
    {
        "Value": -19.7561,
        "Source": ""
    },
    {
        "Value": -22.5587,
        "Source": ""
    },
    {
        "Value": -19.4825,
        "Source": ""
    },
    {
        "Value": -20.2554,
        "Source": ""
    },
    {
        "Value": -18.2077,
        "Source": ""
    },
    {
        "Value": -18.2449,
        "Source": ""
    },
    {
        "Value": -22.3421,
        "Source": ""
    },
    {
        "Value": -20.2358,
        "Source": ""
    },
    {
        "Value": -23.7938,
        "Source": ""
    },
    {
        "Value": -27.2859,
        "Source": ""
    },
    {
        "Value": -31.7847,
        "Source": ""
    },
    {
        "Value": -28.2933,
        "Source": ""
    },
    {
        "Value": -26.7742,
        "Source": ""
    },
    {
        "Value": -26.3805,
        "Source": ""
    },
    {
        "Value": -27.8962,
        "Source": ""
    },
    {
        "Value": -33.4509,
        "Source": ""
    },
    {
        "Value": -31.8904,
        "Source": ""
    },
    {
        "Value": -27.9768,
        "Source": ""
    },
    {
        "Value": -17.3734,
        "Source": ""
    },
    {
        "Value": -17.9889,
        "Source": ""
    },
    {
        "Value": -18.4822,
        "Source": ""
    },
    {
        "Value": -16.797,
        "Source": ""
    },
    {
        "Value": -14.7,
        "Source": ""
    },
    {
        "Value": -17.2419,
        "Source": ""
    },
    {
        "Value": -14.1564,
        "Source": ""
    },
    {
        "Value": -24.2751,
        "Source": ""
    },
    {
        "Value": -29.7372,
        "Source": ""
    },
    {
        "Value": -0.6679,
        "Source": ""
    },
    {
        "Value": -19.6423,
        "Source": ""
    },
    {
        "Value": -17.2744,
        "Source": ""
    },
    {
        "Value": -16.1873,
        "Source": ""
    },
    {
        "Value": -16.8077,
        "Source": ""
    },
    {
        "Value": -20.724,
        "Source": ""
    },
    {
        "Value": -20.2533,
        "Source": ""
    },
    {
        "Value": -22.687,
        "Source": ""
    },
    {
        "Value": -23.0157,
        "Source": ""
    },
    {
        "Value": -27.4045,
        "Source": ""
    },
    {
        "Value": -15.243,
        "Source": ""
    },
    {
        "Value": -12.3777,
        "Source": ""
    },
    {
        "Value": -5.3269,
        "Source": ""
    },
    {
        "Value": -5.9388,
        "Source": ""
    },
    {
        "Value": -10.4,
        "Source": ""
    },
    {
        "Value": -8.4515,
        "Source": ""
    },
    {
        "Value": -5.2116,
        "Source": ""
    },
    {
        "Value": -7.1584,
        "Source": ""
    },
    {
        "Value": -11.7552,
        "Source": ""
    },
    {
        "Value": -13.0347,
        "Source": ""
    },
    {
        "Value": -14.5991,
        "Source": ""
    },
    {
        "Value": -11.6072,
        "Source": ""
    },
    {
        "Value": -9.2126,
        "Source": ""
    },
    {
        "Value": -7.3615,
        "Source": ""
    },
    {
        "Value": -6.8052,
        "Source": ""
    },
    {
        "Value": -7.8837,
        "Source": ""
    },
    {
        "Value": -5.988,
        "Source": ""
    },
    {
        "Value": -6.6954,
        "Source": ""
    },
    {
        "Value": -5.4418,
        "Source": ""
    },
    {
        "Value": -5.7078,
        "Source": ""
    },
    {
        "Value": -7.5613,
        "Source": ""
    },
    {
        "Value": -8.3318,
        "Source": ""
    },
    {
        "Value": -8.6319,
        "Source": ""
    },
    {
        "Value": -8.1515,
        "Source": ""
    },
    {
        "Value": -6.6191,
        "Source": ""
    },
    {
        "Value": -6.1503,
        "Source": ""
    },
    {
        "Value": -7.5512,
        "Source": ""
    },
    {
        "Value": -8.9902,
        "Source": ""
    },
    {
        "Value": -6.2426,
        "Source": ""
    },
    {
        "Value": -4.2977,
        "Source": ""
    },
    {
        "Value": -6.8012,
        "Source": ""
    },
    {
        "Value": -8.4585,
        "Source": ""
    },
    {
        "Value": -8.5128,
        "Source": ""
    },
    {
        "Value": -7.3795,
        "Source": ""
    },
    {
        "Value": -9.5865,
        "Source": ""
    },
    {
        "Value": -6.929,
        "Source": ""
    },
    {
        "Value": -10.6124,
        "Source": ""
    },
    {
        "Value": -9.5998,
        "Source": ""
    },
    {
        "Value": -8.5583,
        "Source": ""
    },
    {
        "Value": -13.7124,
        "Source": ""
    },
    {
        "Value": -13.9867,
        "Source": ""
    },
    {
        "Value": -11.1151,
        "Source": ""
    },
    {
        "Value": -10.9101,
        "Source": ""
    },
    {
        "Value": -11.0574,
        "Source": ""
    },
    {
        "Value": -10.8916,
        "Source": ""
    },
    {
        "Value": -3.7294,
        "Source": ""
    },
    {
        "Value": -10.4362,
        "Source": ""
    },
    {
        "Value": -12.2007,
        "Source": ""
    },
    {
        "Value": -12.4164,
        "Source": ""
    },
    {
        "Value": -10.2011,
        "Source": ""
    },
    {
        "Value": -8.8366,
        "Source": ""
    },
    {
        "Value": -6.3587,
        "Source": ""
    },
    {
        "Value": -3.1296,
        "Source": ""
    },
    {
        "Value": 5.8493,
        "Source": ""
    },
    {
        "Value": -15.1649,
        "Source": ""
    },
    {
        "Value": 8.3681,
        "Source": ""
    },
    {
        "Value": 8.9067,
        "Source": ""
    },
    {
        "Value": 10.804,
        "Source": ""
    },
    {
        "Value": -19.9498,
        "Source": ""
    },
    {
        "Value": -3.6478,
        "Source": ""
    },
    {
        "Value": -9.2621,
        "Source": ""
    },
    {
        "Value": -14.7768,
        "Source": ""
    },
    {
        "Value": -0.5261,
        "Source": ""
    },
    {
        "Value": -4.5146,
        "Source": ""
    },
    {
        "Value": 4.8239,
        "Source": ""
    },
    {
        "Value": 15.4688,
        "Source": ""
    },
    {
        "Value": -5.7026,
        "Source": ""
    },
    {
        "Value": -0.3141,
        "Source": ""
    },
    {
        "Value": -0.4634,
        "Source": ""
    }
]
onMounted(() => {
    let chart1 = echarts.init(document.getElementById('chart1'));
    let xData1 = []
    let yData1 = []
    value0.forEach(value => {
        xData1.push(value.Source)
        yData1.push(value.Value)
    })

    chart1.setOption(creatOptionForLineChart(xData1, yData1))

    // let chart2 = echarts.init(document.getElementById('chart2'));

    let xData2 = []
    let yData2 = []

    value1.forEach(value => {
        xData2.push(value.Value.toFixed(2))
        yData2.push(value.Value.toFixed(2))
    })

    // chart2.setOption(creatOptionForLineChart_Line(xData2, yData2))
})
</script>


<style scoped>
.back {
    width: 100%;
    height: 850px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.chart1 {
    width: 500px;
    height: 400px;
    background-image: url("../../image/MessageChart_ChartBack.png");
    background-size: 100% 100%;
}

/* .chart2 {
    width: 500px;
    height: 400px;
    background-image: url("../../image/MessageChart_ChartBack.png");
    background-size: 100% 100%;
} */
</style>