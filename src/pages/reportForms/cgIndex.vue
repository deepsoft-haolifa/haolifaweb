<template>
    <div class="page-notification">
        <div class="flex-v-center tool-bar">采购报表统计图</div>
        <div style="width:90%;margin:20px auto;display:flex;padding-left:9%">
            <el-date-picker v-model="yearDate" :clearable="false" type="year" value-format="yyyy" @change="getBuyOne" :editable="false" placeholder="选择年月"></el-date-picker>
        </div>
        <div style="height:500px;width:90%;margin:20px auto;">
            <div id="buyOne" style="width:100%;height:600px;margin:0 auto"></div>
        </div>
        <div style="height:500px;width:90%;margin:30px auto;">
            <div id="buyTwo" style="width:100%;height:500px;margin:0 auto"></div>
        </div>
        <div style="width:90%;margin:20px auto;display:flex;padding-left:9%">
            <el-date-picker
                v-model="threeYearDate"
                :clearable="false"
                type="year"
                value-format="yyyy"
                @change="getBuyThree"
                :editable="false"
                placeholder="选择年月"
            ></el-date-picker>
        </div>
        <div style="height:500px;width:90%;margin:20px auto;">
            <div id="buyThree" style="width:100%;height:600px;margin:0 auto"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: "cgreport-form",
    data() {
        return {
            yearDate: new Date().getFullYear() + "",
            threeYearDate: new Date().getFullYear() + "",
            totalNum: "",
            totalPrice: ""
        };
    },
    mounted() {
        this.getBuyOne();
        this.getBuyThree();
    },
    methods: {
        //采购统计
        getBuyOne() {
            this.$http
                .get(
                    `/haolifa/report/purchase/getPurchases?year=${this.yearDate}`
                )
                .then(res => {
                    let xData = [],
                        payTotal = [],
                        unpay = [],
                        total = [],
                        registered = [];
                    res.map(item => {
                        xData.push(item.supplierName);
                        payTotal.push(item.payTotal);
                        unpay.push(item.unpay);
                        total.push(item.total);
                        registered.push(item.registered);
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
                            data: ["已付款", "未付款", "挂账金额", "合同金额"]
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
                                barWidth: "10%",
                                data: payTotal
                            },
                            {
                                name: "未付款",
                                type: "bar",
                                color: "#3398DB",
                                barWidth: "10%",
                                data: unpay
                            },
                            {
                                name: "挂账金额",
                                type: "bar",
                                color: "#e6a23c",
                                barWidth: "10%",
                                data: registered
                            },
                            {
                                name: "合同金额",
                                type: "bar",
                                color: "#67c23a",
                                barWidth: "10%",
                                data: total
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
                    `/haolifa/report/purchase/selectBySupplierName?purchase=${name}&year=${this.yearDate}`
                )
                .then(res => {
                    let xData = [],
                        payTotal = [],
                        total = [],
                        registered = [],
                        unpay = [];
                    res.map(item => {
                        xData.push(item.createTime);
                        payTotal.push(item.payTotal);
                        unpay.push(item.unpay);
                        total.push(item.total);
                        registered.push(item.registered);
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
                            data: ["已付款", "未付款", "挂账金额", "合同金额"]
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
                                barWidth: "10%",
                                data: payTotal
                            },
                            {
                                name: "未付款",
                                type: "bar",
                                barWidth: "10%",
                                color: "#3398DB",
                                data: unpay
                            },
                            {
                                name: "挂账金额",
                                type: "bar",
                                color: "#e6a23c",
                                barWidth: "10%",
                                data: registered
                            },
                            {
                                name: "合同金额",
                                type: "bar",
                                color: "#67c23a",
                                barWidth: "10%",
                                data: total
                            }
                        ]
                    };
                    chart.setOption(option);
                });
        },
        //采购报表--按月查询采购物资
        getBuyThree() {
            this.$http
                .get(
                    `/haolifa/report/purchase/getAllPurchase?year=${this.threeYearDate}`
                )
                .then(res => {
                    let xData = [],
                        payTotal = [],
                        unpay = [],
                        total = [],
                        registered = [];
                    res.map(item => {
                        xData.push(item.createTime);
                        payTotal.push(item.payTotal);
                        unpay.push(item.collected);
                        total.push(item.total);
                        registered.push(item.registered);
                    });
                    this.getBuyTwo(xData[0]);
                    let that = this;
                    let chart = this.$echarts.init(
                        document.getElementById("buyThree")
                    );
                    const option = {
                        title: {
                            text: "采购报表--按月查询采购物资",
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
                            data: [
                                "付款金额",
                                "回票金额",
                                "挂账金额",
                                "合同金额"
                            ]
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
                                name: "付款金额",
                                type: "bar",
                                barWidth: "10%",
                                data: payTotal
                            },
                            {
                                name: "回票金额",
                                type: "bar",
                                color: "#3398DB",
                                barWidth: "10%",
                                data: unpay
                            },
                            {
                                name: "挂账金额",
                                type: "bar",
                                color: "#e6a23c",
                                barWidth: "10%",
                                data: registered
                            },
                            {
                                name: "合同金额",
                                type: "bar",
                                color: "#67c23a",
                                barWidth: "10%",
                                data: total
                            }
                        ]
                    };
                    chart.setOption(option);
                });
        }
    }
};
</script>
