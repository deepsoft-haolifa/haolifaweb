<template>
    <div class="page-notification">
        <div class="flex-v-center tool-bar">采购报表统计图</div>
        <div style="height:500px;width:90%;margin:20px auto;">
            <div id="buyOne" style="width:80%;height:500px;margin:0 auto"></div>
        </div>
        <div style="height:500px;width:90%;margin:30px auto;">
            <div id="buyTwo" style="width:80%;height:500px;margin:0 auto"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: "cgreport-form",
    data() {
        return {
            yearDate: new Date().getFullYear() + "",
            totalNum: "",
            totalPrice: ""
        };
    },
    mounted() {
        this.getBuyOne();
    },
    methods: {
        //采购统计
        getBuyOne() {
            this.$http
                .get("/haolifa/report/purchase/getPurchases")
                .then(res => {
                    let xData = [],
                        payTotal = [],
                        unpay = [];
                    res.map(item => {
                        xData.push(item.supplierName);
                        payTotal.push(item.payTotal);
                        unpay.push(item.unpay);
                    });
                    this.getBuyTwo(xData[0]);
                    let that = this;
                    let chart = this.$echarts.init(
                        document.getElementById("buyOne")
                    );
                    const option = {
                        title: {
                            text: "采购统计",
                            x: "left"
                        },
                        tooltip: {
                            trigger: "axis",
                            axisPointer: {
                                // 坐标轴指示器，坐标轴触发有效
                                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
                            }
                        },
                        legend: {
                            data: ["已付款", "未付款"]
                        },
                        grid: {
                            left: "3%",
                            right: "4%",
                            bottom: "10%",
                            containLabel: true
                        },
                        xAxis: [
                            {
                                type: "category",
                                data: xData,
                                axisLabel: {
                                    rotate: 60
                                }
                            }
                        ],
                        yAxis: [
                            {
                                type: "value"
                            }
                        ],
                        series: [
                            {
                                name: "已付款",
                                type: "bar",
                                barWidth: "30%",
                                data: payTotal
                            },
                            {
                                name: "未付款",
                                type: "bar",
                                color: "#3398DB",
                                barWidth: "30%",
                                data: unpay
                            }
                        ]
                    };
                    chart.on("click", function(params) {
                        console.log(params.name);
                        that.getBuyTwo(params.name);
                    });
                    chart.setOption(option);
                });
        },
        //采购根据公司按月
        getBuyTwo(name) {
            this.$http
                .get(
                    "/haolifa/report/purchase/selectBySupplierName?purchase=" +
                        name
                )
                .then(res => {
                    let xData = [],
                        payTotal = [],
                        unpay = [];
                    res.map(item => {
                        xData.push(item.createTime);
                        payTotal.push(item.payTotal);
                        unpay.push(item.unpay);
                    });
                    let chart = this.$echarts.init(
                        document.getElementById("buyTwo")
                    );
                    const option = {
                        title: {
                            text: name + "按月统计",
                            x: "left"
                        },
                        legend: {
                            data: ["已付款", "未付款"]
                        },
                        tooltip: {
                            trigger: "axis",
                            axisPointer: {
                                // 坐标轴指示器，坐标轴触发有效
                                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
                            }
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
                                data: xData
                            }
                        ],
                        yAxis: [
                            {
                                type: "value"
                            }
                        ],
                        series: [
                            {
                                name: "已付款",
                                type: "bar",
                                barWidth: "30%",
                                data: payTotal
                            },
                            {
                                name: "未付款",
                                type: "bar",
                                barWidth: "30%",
                                color: "#3398DB",
                                data: unpay
                            }
                        ]
                    };
                    chart.setOption(option);
                });
        }
    }
};
</script>
