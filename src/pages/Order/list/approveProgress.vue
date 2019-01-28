<template>
    <div class="abs scroll-y">
        <div class="metalwork-info" style="width:100%;margin:0 auto">
            <div class="b f-18 flex-v-center" style="margin-bottom: 20px;">
                <icon-btn class="mr-15" @click="$router.back()">arrow_back</icon-btn>
                <div class="flex-item">审批进度</div>
            </div>
            <div style="min-width:1200px">
                <div class="approve" v-for="(item,index) in list" :key="index">
                    <p>{{item.roleName}}</p>
                    <p :class="item.auditResult == 4 ? 'button ccc' : 'button'">{{item.stepName}}</p>
                    <span v-if="index<list.length-1">-----></span>
                    <p>{{status[item.auditResult]}}</p>
                    <div class="approve" style="position: absolute;top: 123px" v-if="item.child.length>0">
                        <div class="height-line"></div>
                        <div class="bottom-arrows"></div>
                        <p>{{item.child[0].roleName}}</p>
                        <p :class="item.child[0].auditResult == 4 ? 'button ccc' : 'button'">{{item.child[0].stepName}}</p>
                        <!-- <p>测试</p>
                        <p :class="item.child[0].auditResult == 4 ? 'button ccc' : 'button'">测试</p>-->
                        <p>{{status[item.child[0].auditResult]}}</p>
                        <div class="right-height-line"></div>
                        <div class="top-arrows"></div>
                    </div>
                </div>
            </div>
            <!-- <table class="f-14 order-info">
                <tr>
                    <td style="width: 8%;"></td>
                    <td style="width: 8%;"></td>
                    <td style="width: 8%;"></td>
                    <td style="width: 8%;"></td>
                    <td style="width: 8%;"></td>
                    <td style="width: 8%;"></td>
                    <td style="width: 8%;"></td>
                    <td style="width: 8%;"></td>
                    <td style="width: 8%;"></td>
                    <td style="width: 8%;"></td>
                    <td style="width: 10%;"></td>
                    <td style="width: 10%;"></td>
                </tr>
                <tr>
                    <td colspan="12" class="b">订单编号 : {{info.orderNo}}</td>
                </tr>
                <tr>
                    <td colspan="12" class="b">成品合同订单号 : {{info.orderContractNo}}</td>
                </tr>
                <tr>
                    <td colspan="12" class="b">订单状态 : {{ orderStatusList[`${info.orderStatus}`] }}</td>
                </tr>
                <tr>
                    <td colspan="6" class="b">
                        订单合同:
                        <a :href="info.orderContractUrl">下载</a>
                    </td>
                    <td colspan="6" class="b">
                        订单备份合同:
                        <a :href="info.orderContractExtendUrl">下载</a>
                    </td>
                </tr>
                <tr>
                    <td colspan="6" class="b">装配车间: {{info.assemblyShop}}</td>
                    <td colspan="6" class="b">装配小组: {{info.assemblyGroup}}</td>
                </tr>
                <tr>
                    <td colspan="6" class="b">采购反馈时间: {{info.purchaseFeedbackTime}}</td>
                    <td colspan="6" class="b">生产反馈时间: {{info.productionFeedbackTime}}</td>
                </tr>
                <tr>
                    <td colspan="6" class="b">工厂反馈完成时间: {{info.finishFeedbackTime}}</td>
                    <td colspan="6" class="b">反馈确认人: {{info.feedbackTimeConfirmUser}}</td>
                </tr>
                <tr>
                    <td colspan="12" class="b">技术清单: {{info.technicalRequire}}</td>
                </tr>
                <tr>
                    <td colspan="12" class="b">订单产品列表</td>
                </tr>
                <tr>
                    <td colspan="1" class="b">产品编号</td>
                    <td colspan="1" class="b">产品名称</td>
                    <td colspan="1" class="b">型号</td>
                    <td colspan="1" class="b">标签属性</td>
                    <td colspan="1" class="b">规格</td>
                    <td colspan="1" class="b">颜色</td>
                    <td colspan="1" class="b">产品数量</td>
                    <td colspan="1" class="b">单价</td>
                    <td colspan="1" class="b">总计价格</td>
                    <td colspan="1" class="b">材质说明</td>
                    <td colspan="2" class="b">产品备注</td>
                </tr>
                <tr v-for="(item,index) in info.orderProductAssociates" :key="index">
                    <td colspan="1">{{item.productNo}}</td>
                    <td colspan="1">{{item.productName}}</td>
                    <td colspan="1">{{item.productModel}}</td>
                    <td colspan="1">{{item.lable}}</td>
                    <td colspan="1">{{item.specifications}}</td>
                    <td colspan="1">{{item.productColor}}</td>
                    <td colspan="1">{{item.productNumber}}</td>
                    <td colspan="1">{{item.price}}</td>
                    <td colspan="1">{{item.totalPrice}}</td>
                    <td colspan="1">{{item.materialDescription}}</td>
                    <td colspan="2">{{item.productRemark}}</td>
                </tr>
            </table>-->
        </div>
    </div>
</template>

<script>
// import parseJson from '@/utils/parseJson'
export default {
    name: "metalwork-info",
    data() {
        return {
            list: [],
            orderStatusList: {},
            status: {
                0: "审核不通过",
                1: "审核通过",
                3: "流程初始化",
                4: "未审核"
            }
        };
    },
    created() {
        const { formNo } = this.$route.query;
        this.getInfo(formNo);
        this.getOrderStatusList();
    },
    methods: {
        getInfo(formNo) {
            this.$http
                .get(`/haolifa/flowInstance/flow/progress?formNo=${formNo}`)
                .then(res => {
                    console.log(res);
                    this.list = res;
                })
                .catch(e => {
                    this.$toast(e.msg || e.message);
                });
        },
        getOrderStatusList() {
            this.$http
                .get("/haolifa/order-product/order-status-list")
                .then(res => {
                    for (let i in res) {
                        this.orderStatusList[res[i].code] = res[i].desc;
                    }
                });
        }
    }
};
</script>

<style lang="less">
.approve {
    display: inline-block;
    width: 230px;
    margin-right: 10px;
    margin-bottom: 40px;
    position: relative;
    p {
        width: 200px;
        margin: 10px;
        height: 16px;
        text-align: center;
    }
    .ccc {
        border-color: #ccc !important;
    }
    span {
        line-height: 41px;
        position: relative;
        left: 62px;
    }
    .button {
        position: relative;
        width: 148px;
        display: inline-block;
        line-height: 41px;
        height: 41px;
        text-align: center;
        border: 1px solid rgb(109, 182, 224);
        border-radius: 5px;
        margin: 0 auto;
        left: 42px;
    }
}
.bottom-arrows {
    width: 10px;
    height: 10px;
    border-right: 1px solid;
    border-bottom: 1px solid;
    position: absolute;
    transform: rotate(43deg);
    top: 24px;
    left: 111px;
}
.top-arrows {
    width: 10px;
    height: 10px;
    border-left: 1px solid;
    border-top: 1px solid;
    position: absolute;
    transform: rotate(43deg);
    top: 15px;
    left: 355px;
}
.height-line {
    height: 30px;
    width: 1px;
    border: 1px dashed;
    position: relative;
    left: 50%;
}
.right-height-line {
    height: 70px;
    width: 130px;
    border-bottom: 1px dashed;
    border-right: 1px dashed;
    position: absolute;
    left: 100%;
    top: 22px;
}
.metalwork-info {
    padding: 30px 20px;
    tr:first-child td {
        padding: 0;
        border: none;
    }
    th {
        font-weight: normal;
        color: #888;
    }
    td {
        color: #444;
    }
    th,
    td {
        padding: 10px;
        border: 1px solid #fff;
        border: 1px solid #ddd;
    }
    .checkbox-list {
        flex-wrap: wrap;
    }
    .checkbox-item {
        line-height: 1em;
        width: 180px;
        margin: 5px 0;
    }
}
.order-info {
    th,
    td {
        white-space: unset !important;
    }
}
</style>
