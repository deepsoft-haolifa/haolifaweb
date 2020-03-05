<template>
    <div class="page-notification">
        <div class="flex-v-center tool-bar">销售报表统计图</div>
        <div style="width:90%;margin:0 auto;display:flex">
            <!-- <el-date-picker v-model="yearDate" :clearable="false" @change="getYearTotal" value-format="yyyy" type="year" placeholder="选择年"></el-date-picker> -->
            <div style="display: flex;padding-left: 20px; margin-left: 12px;color:#008eff;font-size:22px;">
                <p>生产总数量：{{totalNum}}台</p>
                <p style="margin-left:20px;">产值总额：{{totalPrice}}元</p>
                <p style="margin-left:20px;">合同订货总数量：{{contractTotalNum}}台</p>
                <p style="margin-left:20px;">合同订货总金额：{{contractTotalPrice}}元</p>
            </div>
        </div>
        <div style="width:90%;margin:20px auto;display:flex;padding-left:9%">
            <el-date-picker v-model="fiveYearDate" :clearable="false" @change="getSaleFive" value-format="yyyy" type="year" placeholder="选择年"></el-date-picker>
            <el-date-picker
                style="margin-left:50%"
                v-model="sixYearDate"
                :clearable="false"
                @change="getSaleSix"
                value-format="yyyy"
                type="year"
                placeholder="选择年"
            ></el-date-picker>
        </div>
        <div style="width:90%;margin:20px auto;display:flex;padding-left:9%">
            <div id="saleFive" style="width:50%;height:300px;margin-top:20px;"></div>
            <div id="saleSix" style="width:50%;height:300px;margin-top:20px;"></div>
        </div>
        <div style="width:90%;margin:20px auto;display:flex;padding-left:9%">
            <el-date-picker v-model="yearDate" :clearable="false" @change="getYearTotal" value-format="yyyy" type="year" placeholder="选择年"></el-date-picker>
        </div>
        <div style="height:500px;width:90%;margin:0 auto;">
            <div id="saleOne" style="width:80%;height:500px;margin:0 auto"></div>
        </div>
        <div style="width:90%;margin:20px auto;display:flex;padding-left:9%">
            <el-date-picker v-model="cYearDate" :clearable="false" @change="getCYearTotal" value-format="yyyy" type="year" placeholder="选择年"></el-date-picker>
        </div>
        <div style="height:500px;width:90%;margin:0 auto;">
            <div id="saleThree" style="width:80%;height:500px;margin:0 auto"></div>
        </div>
        <div style="height:500px;width:90%;margin:0 auto;">
            <div id="saleTwo" style="width:80%;height:500px;margin:0 auto"></div>
        </div>
        <div style="height:500px;width:90%;margin:0 auto;">
            <div id="saleFour" style="width:80%;height:500px;margin:0 auto"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: "xsreport-form",
    data() {
        return {
            chartOneList: [],
            yearDate: new Date().getFullYear() + "",
            cYearDate: new Date().getFullYear() + "",
            fiveYearDate: new Date().getFullYear() + "",
            sixYearDate: new Date().getFullYear() + "",
            totalNum: "",
            totalPrice: "",
            contractTotalNum: "",
            contractTotalPrice: ""
        };
    },
    created() {
        this.getTotal();
        this.getSaleFive();
        this.getSaleSix();
        this.getContractTotal();
        this.getSaleTwo();
        this.getSaleFour();
        this.getSaleOne(this.yearDate);
        this.getCSaleOne(this.cYearDate);
    },
    methods: {
        getTotal() {
            this.$http.get("/haolifa/report/sale/getSaleAll").then(res => {
                this.totalNum = res[0].totalNum;
                this.totalPrice = res[0].totalPrice;
            });
        },
        //需方总额饼图
        getSaleFive() {
            this.$http
                .get(
                    `/haolifa/report/sale/selectContractByDemandName?year=${this.fiveYearDate}`
                )
                .then(res => {
                    let nameData = [],
                        valueData = [];
                    res.map(item => {
                        nameData.push(item.demandName),
                            valueData.push({
                                name: item.demandName,
                                value: item.totalPrice
                            });
                    });
                    let chart = this.$echarts.init(
                        document.getElementById("saleFive")
                    );
                    let option = {
                        title: {
                            text: "销售总额按需方分类",
                            // subtext: "纯属虚构",
                            x: "center"
                        },
                        tooltip: {
                            trigger: "item",
                            formatter: "{a} <br/>{b} : {c} ({d}%)"
                        },
                        legend: {
                            orient: "vertical",
                            left: "left",
                            data: nameData
                        },
                        series: [
                            {
                                name: "",
                                type: "pie",
                                radius: "55%",
                                center: ["50%", "60%"],
                                data: valueData,
                                itemStyle: {
                                    emphasis: {
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: "rgba(0, 0, 0, 0.5)"
                                    }
                                }
                            }
                        ]
                    };
                    chart.setOption(option);
                })
                .catch(e => {
                    this.$toast(e.msg || e.message);
                });
        },
        //需方回款总额饼图
        getSaleSix() {
            this.$http
                .get(
                    `/haolifa/report/sale/selectshouhuiContractByDemandName?year=${this.sixYearDate}`
                )
                .then(res => {
                    let nameData = [],
                        valueData = [];
                    res.map(item => {
                        nameData.push(item.demandName),
                            valueData.push({
                                name: item.demandName,
                                value: item.totalPrice
                            });
                    });
                    let chart = this.$echarts.init(
                        document.getElementById("saleSix")
                    );
                    let option = {
                        title: {
                            text: "回款总额按需方分类",
                            // subtext: "纯属虚构",
                            x: "center"
                        },
                        tooltip: {
                            trigger: "item",
                            formatter: "{a} <br/>{b} : {c} ({d}%)"
                        },
                        legend: {
                            orient: "vertical",
                            left: "left",
                            data: nameData
                        },
                        series: [
                            {
                                name: "",
                                type: "pie",
                                radius: "55%",
                                center: ["50%", "60%"],
                                data: valueData,
                                itemStyle: {
                                    emphasis: {
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: "rgba(0, 0, 0, 0.5)"
                                    }
                                }
                            }
                        ]
                    };
                    chart.setOption(option);
                })
                .catch(e => {
                    this.$toast(e.msg || e.message);
                });
        },
        getContractTotal() {
            this.$http
                .get("/haolifa/report/sale/getSaleAllContract")
                .then(res => {
                    this.contractTotalNum = res[0].totalNum;
                    this.contractTotalPrice = res[0].totalPrice;
                });
        },
        getYearTotal() {
            this.getSaleOne(this.yearDate);
        },
        getCYearTotal() {
            this.getCSaleOne(this.cYearDate);
        },
        getSaleOne(date) {
            this.$http
                .get("/haolifa/report/sale/getSaleAllByMonth?year=" + date)
                .then(res => {
                    let xData = [],
                        yData = [];
                    Object.keys(res).forEach(key => {
                        xData.push(key + "月");
                        yData.push(res[key][0].totalPrice);
                    });
                    let chart = this.$echarts.init(
                        document.getElementById("saleOne")
                    );
                    let option = {
                        color: ["#3398DB"],
                        title: {
                            text: date + "年每月产值总额统计",
                            // subtext: "纯属虚构",
                            x: "left"
                        },
                        tooltip: {
                            trigger: "item",
                            formatter: "{a} <br/>{b} : {c}元"
                        },
                        xAxis: {
                            type: "category",
                            data: xData
                        },
                        yAxis: {
                            type: "value"
                        },
                        series: [
                            {
                                name: "销售额",
                                barWidth: "30%",
                                data: yData,
                                type: "bar"
                            }
                        ]
                    };
                    chart.setOption(option);
                });
        },
        //每月合同销售统计
        getCSaleOne(date) {
            this.$http
                .get(
                    "/haolifa/report/sale/getSaleAllByMonthContract?year=" +
                        date
                )
                .then(res => {
                    let xData = [],
                        yData = [];
                    Object.keys(res).forEach(key => {
                        xData.push(key + "月");
                        yData.push(res[key][0].totalPrice);
                    });
                    let chart = this.$echarts.init(
                        document.getElementById("saleThree")
                    );
                    let option = {
                        color: ["#3398DB"],
                        title: {
                            text: date + "年每月合同总额统计",
                            // subtext: "纯属虚构",
                            x: "left"
                        },
                        tooltip: {
                            trigger: "item",
                            formatter: "{a} <br/>{b} : {c}元"
                        },
                        xAxis: {
                            type: "category",
                            data: xData
                        },
                        yAxis: {
                            type: "value"
                        },
                        series: [
                            {
                                name: "合同额",
                                barWidth: "30%",
                                data: yData,
                                type: "bar"
                            }
                        ]
                    };
                    chart.setOption(option);
                });
        },
        // 销售报表-根据产品型号统计生产金额
        getSaleTwo() {
            this.$http.get("/haolifa/report/sale/getSaleByModel").then(res => {
                let xData = [],
                    yData = [];
                res.map(item => {
                    xData.push(item.productModel);
                    yData.push(item.totalPrice);
                });
                let chart = this.$echarts.init(
                    document.getElementById("saleTwo")
                );
                let option = {
                    color: ["#3398DB"],
                    title: {
                        text: "产品型号产值总额统计",
                        // subtext: "纯属虚构",
                        x: "left"
                    },
                    tooltip: {
                        trigger: "item",
                        formatter: "{a} <br/>{b} : {c}元"
                    },
                    xAxis: {
                        type: "category",
                        data: xData
                    },
                    yAxis: {
                        type: "value"
                    },
                    series: [
                        {
                            name: "生产金额",
                            barWidth: "30%",
                            data: yData,
                            type: "bar"
                        }
                    ]
                };
                chart.setOption(option);
            });
        },
        // 销售报表-根据产品型号统计合同金额
        getSaleFour() {
            this.$http
                .get("/haolifa/report/sale/getSaleByModelContract")
                .then(res => {
                    let xData = [],
                        yData = [];
                    res.map(item => {
                        xData.push(item.productModel);
                        yData.push(item.totalPrice);
                    });
                    let chart = this.$echarts.init(
                        document.getElementById("saleFour")
                    );
                    let option = {
                        color: ["#3398DB"],
                        title: {
                            text: "产品型号合同金额统计",
                            // subtext: "纯属虚构",
                            x: "left"
                        },
                        tooltip: {
                            trigger: "item",
                            formatter: "{a} <br/>{b} : {c}元"
                        },
                        xAxis: {
                            type: "category",
                            data: xData
                        },
                        yAxis: {
                            type: "value"
                        },
                        series: [
                            {
                                name: "合同金额",
                                barWidth: "30%",
                                data: yData,
                                type: "bar"
                            }
                        ]
                    };
                    chart.setOption(option);
                });
        }
    }
};
</script>
