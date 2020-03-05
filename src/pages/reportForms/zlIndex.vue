<template>
    <div class="page-notification">
        <div class="flex-v-center tool-bar">质量报表统计图</div>
        <div style="width:90%;display:flex;margin:30px auto">
            <div id="chartOne" style="width:50%;height:300px;margin-top:20px;"></div>
            <div id="chartTwo" style="width:50%;height:300px;margin-top:20px;"></div>
        </div>
        <div style="height:310px;width:90%;display:flex;margin:30px auto">
            <div id="chartThree" style="width:50%;height:300px;margin-top:20px;"></div>
            <div id="chartFour" style="width:50%;height:300px;margin-top:20px;"></div>
        </div>
        <div style="height:700px;width:90%;margin:100px auto;">
            <div id="chartFive" style="width:80%;height:700px;margin:0 auto"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: "report-form",
    data() {
        return {};
    },
    mounted() {
        this.getChartOne();
        this.getChartTwo();
        this.getChartThree();
        this.getChartFour();
        this.getSupplier();
    },
    methods: {
        getChartOne() {
            let nameArr = [],
                dataArr = [],
                oneDepartArr = [];
            this.$http
                .get(`/haolifa/report/quality/getAudit`)
                .then(res => {
                    let nameData = [],
                        valueData = [];
                    res.map(item => {
                        nameData.push(item.materialName),
                            valueData.push({
                                name: item.materialName,
                                value: item.totalNum
                            });
                    });
                    let chart = this.$echarts.init(
                        document.getElementById("chartOne")
                    );
                    let option = this.getOption(
                        "更换料质量报表",
                        nameData,
                        valueData
                    );
                    chart.setOption(option);
                })
                .catch(e => {
                    this.$toast(e.msg || e.message);
                });
        },
        getChartTwo() {
            let nameArr = [],
                dataArr = [],
                oneDepartArr = [];
            this.$http
                .get(`/haolifa/report/quality/getInspect`)
                .then(res => {
                    let nameData = ["合格数", "不合格数"],
                        valueData = [];
                    valueData.push({
                        name: "合格数",
                        value: res.qualifiedNumber
                    });
                    valueData.push({
                        name: "不合格数",
                        value: res.unqualifiedNumber
                    });
                    let chart = this.$echarts.init(
                        document.getElementById("chartTwo")
                    );
                    let option = this.getOption(
                        "采购质量报表",
                        nameData,
                        valueData
                    );
                    chart.setOption(option);
                })
                .catch(e => {
                    this.$toast(e.msg || e.message);
                });
        },
        getChartThree() {
            let nameArr = [],
                dataArr = [],
                oneDepartArr = [];
            this.$http
                .get(`/haolifa/report/quality/getPressure`)
                .then(res => {
                    let nameData = ["合格数", "不合格数"],
                        valueData = [];
                    valueData.push({
                        name: "合格数",
                        value: res.qualifiedNumber
                    });
                    valueData.push({
                        name: "不合格数",
                        value: res.unqualifiedNumber
                    });
                    let chart = this.$echarts.init(
                        document.getElementById("chartThree")
                    );
                    let option = this.getOption(
                        "压力质量报表",
                        nameData,
                        valueData
                    );
                    chart.setOption(option);
                })
                .catch(e => {
                    this.$toast(e.msg || e.message);
                });
        },
        getChartFour() {
            let nameArr = [],
                dataArr = [],
                oneDepartArr = [];
            this.$http
                .get(`/haolifa/report/quality/getSpray`)
                .then(res => {
                    let nameData = ["合格数", "不合格数"],
                        valueData = [];
                    valueData.push({
                        name: "合格数",
                        value: res.qualifiedNumber
                    });
                    valueData.push({
                        name: "不合格数",
                        value: res.unqualifiedNumber
                    });
                    let chart = this.$echarts.init(
                        document.getElementById("chartFour")
                    );
                    let option = this.getOption(
                        "喷涂质量报表",
                        nameData,
                        valueData
                    );
                    chart.setOption(option);
                })
                .catch(e => {
                    this.$toast(e.msg || e.message);
                });
        },
        getOption(title, nameArr, dataArr) {
            return {
                title: {
                    text: title,
                    x: "center"
                },
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: "vertical",
                    left: "left",
                    data: nameArr
                },
                series: [
                    {
                        name: "",
                        type: "pie",
                        radius: "55%",
                        center: ["50%", "60%"],
                        data: dataArr,
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
        },
        getDepart() {
            let that = this;
            this.$http
                .get(`/haolifa/report/expense/classifyByDepartmentAll`)
                .then(res => {
                    let nameData = [],
                        valueData = [];
                    res.map(item => {
                        nameData.push(item.department),
                            valueData.push({
                                name: item.department,
                                value: item.totalAmount
                            });
                    });
                    let chart = this.$echarts.init(
                        document.getElementById("chartTwo")
                    );
                    let option = {
                        title: {
                            text: "部门费用分配",
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
                    chart.on("click", function(params) {
                        //params.data.name
                        that.getDepartDetail(params.data.name);
                    });
                    chart.setOption(option);
                    that.getDepartDetail(nameData[0]);
                })
                .catch(e => {
                    this.$toast(e.msg || e.message);
                });
        },
        //部门详情
        getDepartDetail(name) {
            this.$http
                .get(
                    `/haolifa/report/expense/getAllClassifyWithDepartment?department=` +
                        name
                )
                .then(res => {
                    let nameData = [],
                        valueData = [];
                    res.map(item => {
                        nameData.push(item.expensesClassify),
                            valueData.push({
                                name: item.expensesClassify,
                                value: item.totalAmount
                            });
                    });
                    let chartDetail = this.$echarts.init(
                        document.getElementById("chartTwoDetail")
                    );
                    let option = {
                        title: {
                            text: "部门明细:" + name,
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
                    chartDetail.setOption(option);
                })
                .catch(e => {
                    this.$toast(e.msg || e.message);
                });
        },
        //费用分类
        getType() {
            let that = this;
            this.$http
                .get(`/haolifa/report/expense/getAllClassify`)
                .then(res => {
                    let nameData = [],
                        valueData = [];
                    res.map(item => {
                        nameData.push(item.expensesClassify),
                            valueData.push({
                                name: item.expensesClassify,
                                value: item.totalAmount
                            });
                    });
                    let chart = this.$echarts.init(
                        document.getElementById("chartThree")
                    );
                    let option = {
                        title: {
                            text: "费用分配",
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
                    chart.on("click", function(params) {
                        that.getTypeDetail(params.data.name);
                    });
                    chart.setOption(option);
                    this.getTypeDetail(nameData[0]);
                })
                .catch(e => {
                    this.$toast(e.msg || e.message);
                });
        },
        //费用详情
        getTypeDetail(name) {
            this.$http
                .get(
                    `/haolifa/report/expense/getAllClassifyWithFirstClassify?classify=` +
                        name
                )
                .then(res => {
                    let nameData = [],
                        valueData = [];
                    res.map(item => {
                        nameData.push(item.department),
                            valueData.push({
                                name: item.secondClassify,
                                value: item.totalAmount
                            });
                    });
                    let chartDetail = this.$echarts.init(
                        document.getElementById("chartThreeDetail")
                    );
                    let option = {
                        title: {
                            text: "费用明细:" + name,
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
                    chartDetail.setOption(option);
                })
                .catch(e => {
                    this.$toast(e.msg || e.message);
                });
        },
        //供应商合格率统计
        getSupplier() {
            this.$http
                .get(`/haolifa/report/quality/getInspectBysupplierName`)
                .then(res => {
                    let maxNum = 0,
                        nameData = [],
                        qNumData = [],
                        perData = [],
                        unqNumData = [];
                    res.map(item => {
                        nameData.push(item.supplierName);
                        qNumData.push(item.qualifiedNumber);
                        unqNumData.push(item.unqualifiedNumber);
                        maxNum =
                            maxNum > item.totalNum ? maxNum : item.totalNum;
                        let num = (
                            (item.qualifiedNumber / item.totalNum) *
                            100
                        ).toFixed(2);
                        perData.push(num);
                    });
                    let chart = this.$echarts.init(
                        document.getElementById("chartFive")
                    );
                    let option = {
                        color: ["#3398DB", "#FF6666", "#66CCCC"],
                        title: {
                            text: "供应商产品质量统计图",
                            // subtext: "纯属虚构",
                            x: "left"
                        },
                        tooltip: {
                            trigger: "axis",
                            axisPointer: {
                                type: "cross",
                                crossStyle: {
                                    color: "#999"
                                }
                            }
                        },
                        toolbox: {
                            feature: {
                                dataView: { show: true, readOnly: false },
                                magicType: {
                                    show: true,
                                    type: ["line", "bar"]
                                },
                                restore: { show: true },
                                saveAsImage: { show: true }
                            }
                        },
                        legend: {
                            data: ["合格数", "不合格数", "合格率"]
                        },
                        grid: {
                            left: "18%",
                            bottom: "30%"
                        },
                        xAxis: [
                            {
                                type: "category",
                                data: nameData,
                                axisPointer: {
                                    type: "shadow"
                                },
                                axisLabel: {
                                    rotate: 60
                                }
                            }
                        ],
                        yAxis: [
                            {
                                type: "value",
                                name: "数量",
                                min: 0,
                                max: maxNum + 2000,
                                // interval: 500,
                                axisLabel: {
                                    formatter: "{value} "
                                }
                            },
                            {
                                type: "value",
                                name: "合格率",
                                min: 0,
                                max: 120,
                                // interval: 5,
                                axisLabel: {
                                    formatter: "{value} %"
                                }
                            }
                        ],
                        series: [
                            {
                                name: "合格数",
                                type: "bar",
                                data: qNumData
                            },
                            {
                                name: "不合格数",
                                type: "bar",
                                data: unqNumData
                            },
                            {
                                name: "合格率",
                                type: "line",
                                yAxisIndex: 1,
                                data: perData
                            }
                        ]
                    };
                    chart.setOption(option);
                });
        }
    }
};
</script>
