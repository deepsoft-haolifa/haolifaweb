<template>
    <div class="page-notification">
        <div class="flex-v-center tool-bar">
            <div class="flex-item"></div>
        </div>
        <div id="chartOne" style="width:80%;height:500px"></div>
        <div id="chartTwo"></div>
        <div id="chartThree"></div>
    </div>
</template>
<script>
export default {
    name: "report-form",
    data() {
        return {
            chartOneList: []
        };
    },
    mounted() {
        this.getAll();
    },
    methods: {
        getAll() {
            let oneMonthArr = [],
                sData = [],
                oneDepartArr = [];
            this.$http
                .get(`/haolifa/report/expense/classify`)
                .then(res => {
                    res.map(item => {
                        oneMonthArr.push(item.createTime);
                        oneDepartArr.push(item.expensesClassify);
                    });
                    oneMonthArr = Array.from(new Set(oneMonthArr)).sort();
                    oneDepartArr = Array.from(new Set(oneDepartArr));
                    oneMonthArr.map(time => {
                        let object = { name: time, type: "bar", data: [] };
                        oneDepartArr.map(dep => {
                            res.map(item => {
                                if (
                                    time == item.createTime &&
                                    dep == item.expensesClassify
                                ) {
                                    if (dep == "税金") console.log(item);
                                    object.data.push(item.totalAmount);
                                }
                            });
                        });
                        sData.push(object);
                    });
                    console.log(sData);
                    let chart = this.$echarts.init(
                        document.getElementById("chartOne")
                    );
                    const option = {
                        tooltip: {
                            trigger: "axis",
                            axisPointer: {
                                // 坐标轴指示器，坐标轴触发有效
                                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
                            }
                        },
                        legend: {
                            data: oneMonthArr
                        },
                        grid: {
                            left: "3%",
                            right: "4%",
                            bottom: "3%",
                            containLabel: true
                        },
                        xAxis: [
                            {
                                type: "category",
                                data: oneDepartArr
                            }
                        ],
                        yAxis: [
                            {
                                type: "value"
                            }
                        ],
                        series: sData
                    };
                    chart.setOption(option);
                    console.log(sData);
                })
                .catch(e => {
                    this.$toast(e.msg || e.message);
                });
        },
        getCost() {
            this.$http
                .get(`/haolifa/report/expense/classify`)
                .then(res => {})
                .catch(e => {
                    this.$toast(e.msg || e.message);
                });
        }
    }
};
</script>
