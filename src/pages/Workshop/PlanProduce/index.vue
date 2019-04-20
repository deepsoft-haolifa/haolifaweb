<template>
    <div class="page-orders-list">
        <div class="flex-v-center tool-bar">
            <div class="flex-v-center search-bar" style="margin-right: 20px;">
                <i class="icon f-20 c-8">search</i>
                <input type="text" class="flex-item" v-model="filter.orderNo" @change="$refs.list.update(true)" placeholder="订单号" style="width: 200px;">
                <select v-model="filter.orderStatus" class="f-14" @change="$refs.list.update(true)">
                    <!--<option value="-1">全部</option>-->
                    <option v-for="item in orderStatusList" :value="item.value" v-bind:key="item.value">{{item.text}}</option>
                </select>
                <i class="icon" style="margin-left: -20px;pointer-events:none;">arrow_drop_down</i>
            </div>
            <div class="flex-item"></div>
        </div>
        <div class="flex-item scroll-y">
            <data-list ref="list" :param="filter" url="/haolifa/order-product/pageInfo" method="post">
                <tr slot="header">
                    <th style="width: 60px;">序号</th>
                    <th>订单编号</th>
                    <th style="width:50px;">订单合同URL</th>
                    <th>发货日期</th>
                    <th>订单状态</th>
                    <th>创建时间</th>
                    <th class="t-right" style="width: 80px;">操作</th>
                </tr>
                <!-- item: 当前行数据; index: 当前行数 -->
                <template slot="item" slot-scope="{ item, index }">
                    <td class="c-a">{{index}}</td>
                    <td>{{item.orderNo}}</td>
                    <td>
                        <a class="fixed-length" :href="item.orderContractExtendUrl" :title="item.orderContractExtendUrl">{{item.orderContractExtendUrl}}</a>
                    </td>
                    <td>{{item.deliveryDate}}</td>
                    <td>{{orderStatusList[item.orderStatus-5].text}}</td>
                    <td>{{item.createTime}}</td>
                    <td class="t-right">
                        <a
                            href="javascript:;"
                            class="blue"
                            @click="inspectHistorys(item)"
                            v-if="item.orderStatus==7 ||item.orderStatus==8 || item.orderStatus==9"
                            style="margin-right: 3px;"
                        >质检记录|</a>
                        <a href="javascript:;" class="blue" @click="getInfo(item.orderNo)" style="margin-right: 3px;">详情</a>
                    </td>
                </template>
            </data-list>
        </div>
        <layer v-if="layer" title="详情" width="70%">
            <div class="layer-text" style="padding-bottom: 50px;">
                <div class="form-content metalwork-info">
                    <table class="f-14 order-info">
                        <tr>
                            <td style="width: 7%;"></td>
                            <td style="width: 7%;"></td>
                            <td style="width: 7%;"></td>
                            <td style="width: 7%;"></td>
                            <td style="width: 7%;"></td>
                            <td style="width: 7%;"></td>
                            <td style="width: 7%;"></td>
                            <td style="width: 7%;"></td>
                            <td style="width: 7%;"></td>
                            <td style="width: 7%;"></td>
                            <td style="width: 7%;"></td>
                            <td style="width: 7%;"></td>
                            <td style="width: 8%;"></td>
                            <td style="width: 8%;"></td>
                        </tr>
                        <tr>
                            <td colspan="14" class="b">订单编号 : {{info.orderNo}}</td>
                        </tr>
                        <tr>
                            <td colspan="14" class="b">发货日期 : {{info.deliveryDate}}</td>
                        </tr>
                        <tr>
                            <td colspan="14" class="b">订单状态 : {{orderStatusList[info.orderStatus-5].text }}</td>
                        </tr>
                        <tr>
                            <td colspan="14" class="b">
                                订单合同:
                                <a :href="info.orderContractUrl" style="margin-right: 15px;">下载</a>
                                <a target="_blank" v-if="(info.orderContractUrl).match('\.(pdf|jpe?g|png|bmp)$') " :href="info.orderContractUrl">预览</a>
                                <a
                                    target="_blank"
                                    v-if="!(info.orderContractUrl).match('\.(pdf|jpe?g|png|bmp)$')"
                                    :href="'http://view.officeapps.live.com/op/view.aspx?src='+ info.orderContractUrl"
                                >预览</a>
                            </td>
                            <!-- <td colspan="6" class="b">
                        订单备份合同:
                        <a :href="info.orderContractExtendUrl">下载</a>
                            </td>-->
                        </tr>
                        <tr>
                            <td colspan="7" class="b">装配车间: {{info.assemblyShop}}</td>
                            <td colspan="7" class="b">装配小组: {{info.assemblyGroup}}</td>
                        </tr>
                        <tr>
                            <td colspan="7" class="b">采购反馈时间: {{info.purchaseFeedbackTime}}</td>
                            <td colspan="7" class="b">生产反馈时间: {{info.productionFeedbackTime}}</td>
                        </tr>
                        <!-- <tr>
                    <td colspan="6" class="b">工厂反馈完成时间: {{info.finishFeedbackTime}}</td>
                    <td colspan="6" class="b">反馈确认人: {{info.feedbackTimeConfirmUser}}</td>
                        </tr>-->
                        <tr>
                            <td colspan="14" class="b">技术清单:</td>
                        </tr>

                        <tr>
                            <td colspan="1" rowspan="2">序号</td>
                            <td colspan="1" rowspan="2">产品名称</td>
                            <td colspan="1" rowspan="2">型号</td>
                            <td colspan="1" rowspan="2">规格</td>
                            <td colspan="1" rowspan="2">数量</td>
                            <td colspan="1" rowspan="2">上法兰标准</td>
                            <td colspan="3" rowspan="1">上法兰尺寸</td>
                            <td colspan="3" rowspan="1">出轴尺寸</td>
                            <td colspan="1" rowspan="2">静扭矩</td>
                            <td colspan="1" rowspan="2">执行器型号</td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">连接孔</td>
                            <td colspan="1" rowspan="1">角度</td>
                            <td colspan="1" rowspan="1">中心距</td>
                            <td colspan="1" rowspan="1">出轴型式</td>
                            <td colspan="1" rowspan="1">出轴长度</td>
                            <td colspan="1" rowspan="1">轴图号</td>
                        </tr>
                        <tr v-for="(val,index) in JSON.parse(info.technicalRequire)" :key="index">
                            <td colspan="1">{{index}}</td>
                            <td colspan="1">{{val.name}}</td>
                            <td colspan="1">{{val.xinhao}}</td>
                            <td colspan="1">{{val.guige}}</td>
                            <td colspan="1">{{val.num}}</td>
                            <td colspan="1">{{val.biaozhun}}</td>
                            <td colspan="1">{{val.lianjiek}}</td>
                            <td colspan="1">{{val.jiaodu}}</td>
                            <td colspan="1">{{val.zhongxinju}}</td>
                            <td colspan="1">{{val.xinshi}}</td>
                            <td colspan="1">{{val.length}}</td>
                            <td colspan="1">{{val.tuhao}}</td>
                            <td colspan="1">{{val.jinniuju}}</td>
                            <td colspan="1">{{val.jishuxinhao}}</td>
                        </tr>
                        <tr>
                            <td colspan="14" class="b">订单产品列表</td>
                        </tr>
                        <tr>
                            <td colspan="1" class="b">产品编号</td>
                            <td colspan="2" class="b">产品名称</td>
                            <td colspan="1" class="b">型号</td>
                            <td colspan="1" class="b">标签属性</td>
                            <td colspan="1" class="b">规格</td>
                            <td colspan="1" class="b">颜色</td>
                            <td colspan="1" class="b">产品数量</td>
                            <td colspan="1" class="b">单价</td>
                            <td colspan="1" class="b">总计价格</td>
                            <td colspan="2" class="b">材质说明</td>
                            <td colspan="2" class="b">产品备注</td>
                        </tr>
                        <tr v-for="(item,index) in info.orderProductAssociates" :key="index">
                            <td colspan="1">{{item.productNo}}</td>
                            <td colspan="2">{{item.productName}}</td>
                            <td colspan="1">{{item.productModel}}</td>
                            <td colspan="1">{{item.lable}}</td>
                            <td colspan="1">{{item.specifications}}</td>
                            <td colspan="1">{{item.productColor}}</td>
                            <td colspan="1">{{item.productNumber}}</td>
                            <td colspan="1">{{item.price}}</td>
                            <td colspan="1">{{item.totalPrice}}</td>
                            <td colspan="2">{{item.materialDescription}}</td>
                            <td colspan="2">{{item.productRemark}}</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="layer-btns">
                <btn flat color="#008eff" @click="layer=false">关闭</btn>
            </div>
        </layer>
    </div>
</template>

<script>
import DataList from "@/components/datalist";

export default {
    name: "cjzr-scddlb",
    components: { DataList },
    data() {
        return {
            loading: false,
            orderStatusList: [
                { value: 5, text: "待生产" },
                { value: 6, text: "待领料" },
                { value: 7, text: "生产中" },
                { value: 8, text: "生产暂停" },
                { value: 9, text: "生产完成" }
            ],
            filter: {
                orderNo: "",
                orderStatus: 5
            },
            layer: false,
            info: {},
            arr: [
                {
                    name: "",
                    xinhao: "",
                    guige: "",
                    num: "",
                    biaozhun: "",
                    lianjiek: "",
                    jiaodu: "",
                    zhongxinju: "",
                    xinshi: "",
                    length: "",
                    tuhao: "",
                    jinniuju: "",
                    jishuxinhao: ""
                },
                {
                    name: "",
                    xinhao: "",
                    guige: "",
                    num: "",
                    biaozhun: "",
                    lianjiek: "",
                    jiaodu: "",
                    zhongxinju: "",
                    xinshi: "",
                    length: "",
                    tuhao: "",
                    jinniuju: "",
                    jishuxinhao: ""
                }
            ]
        };
    },
    methods: {
        inspectHistorys(item) {
            this.$router.push(`/jhgl-scddlb/inspect?orderNo=${item.orderNo}`);
        },
        info(item) {
            this.$router.push(`/jhgl-scddlb/info?orderNo=${item.orderNo}`);
        },
        getInfo(orderNo) {
            this.layer = true;
            this.$http
                .get(`/haolifa/order-product/details?orderNo=${orderNo}`)
                .then(res => {
                    this.info = res;
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
.page-orders-list {
    select {
        background: none;
        border: none;
        outline: none;
        padding: 5px 20px 5px 10px;
        appearance: none;
    }
    .scroll-y {
        padding-bottom: 40px;
    }
}

.fixed-length {
    width: 100px;
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>