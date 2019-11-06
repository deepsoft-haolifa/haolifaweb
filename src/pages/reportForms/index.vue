<template>
    <div class="page-notification">
        <div class="flex-v-center tool-bar">财务报表统计图</div>
        <!-- <div style="height:510px;width:90%;border:1px solid #ccc;margin:0 auto;border-top:0">
            <div id="chartOne" style="width:80%;height:500px;margin:0 auto"></div>
        </div>-->
        <div style="width:90%;border:1px solid #ccc;display:flex;margin:30px auto">
            <div id="chartTwo" style="width:50%;height:300px;margin-top:20px;"></div>
            <div id="chartTwoDetail" style="width:50%;height:300px;margin-top:20px;"></div>
        </div>
        <div style="height:310px;width:90%;border:1px solid #ccc;display:flex;margin:30px auto">
            <div id="chartThree" style="width:50%;height:300px;margin-top:20px;"></div>
            <div id="chartThreeDetail" style="width:50%;height:300px;margin-top:20px;"></div>
        </div>
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
        // this.getAllData();
        this.getDepart();
        this.getType();
    },
    methods: {
        getAllData() {
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
                                    object.data.push(item.totalAmount);
                                }
                            });
                        });
                        sData.push(object);
                    });
                    let chart = this.$echarts.init(
                        document.getElementById("chartOne")
                    );
                    const option = {
                        title: {
                            text: "费用按月统计",
                            // subtext: "纯属虚构",
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
                })
                .catch(e => {
                    this.$toast(e.msg || e.message);
                });
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
                                name: item.department,
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
