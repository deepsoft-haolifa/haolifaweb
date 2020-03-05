<template>
    <div class="page-notification">
        <div class="flex-v-center tool-bar">费用报表统计图</div>
        <!-- <div style="height:510px;width:90%;border:1px solid #ccc;margin:0 auto;border-top:0">
            <div id="chartOne" style="width:80%;height:500px;margin:0 auto"></div>
            haolifa/expenses/list?pageSize=20&pageNum=1&classifyName=%E7%AE%A1%E7%90%86%E8%B4%B9%E7%94%A8&department=&secondClassifyName=%E8%81%8C%E5%B7%A5%E7%A6%8F%E5%88%A9%E8%B4%B9
        </div>-->
        <div style="width:95%;display:flex;margin:30px auto">
            <div id="chartTwo" style="width:35%;height:300px;margin-top:20px;"></div>
            <div id="chartTwoDetail" style="width:35%;height:300px;margin-top:20px;"></div>
            <div id="chartDetailChild" style="width:30%;height:300px;margin-top:20px;"></div>
        </div>
        <div style="height:310px;width:90%;display:flex;margin:30px auto">
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
            chartOneList: [],
            yearDate: new Date().getFullYear() + "",
            totalNum: "",
            totalPrice: ""
        };
    },
    mounted() {
        this.getDepart();
        this.getType();
    },
    methods: {
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
            let that = this;
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
                    let chart = this.$echarts.init(
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
                    chart.on("click", function(params) {
                        //params.data.name
                        that.getDepartDetailSecond(name, params.data.name);
                    });
                    chart.setOption(option);
                    that.getDepartDetailSecond(name, nameData[0]);
                })
                .catch(e => {
                    this.$toast(e.msg || e.message);
                });
        },
        //部门内一级费用中二级费用占比
        getDepartDetailSecond(name, classifyName) {
            this.$http
                .get(
                    `/haolifa/expenses/list?pageNum=1&pageSize=999&department=${name}&classifyName=${classifyName}`
                )
                .then(res => {
                    let nameData = [],
                        valueData = [];
                    res.list.map(item => {
                        if (nameData.indexOf(item.secondClassify) === -1) {
                            nameData.push(item.secondClassify),
                                valueData.push({
                                    name: item.secondClassify,
                                    value: item.totalAmount
                                });
                        } else {
                            valueData.map(ob => {
                                if (ob.name == item.secondClassify) {
                                    ob.value += item.totalAmount;
                                }
                            });
                        }
                    });
                    let chartDetailChild = this.$echarts.init(
                        document.getElementById("chartDetailChild")
                    );
                    let option = {
                        title: {
                            text: classifyName + "明细:",
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
                    chartDetailChild.setOption(option);
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
        }
    }
};
</script>
