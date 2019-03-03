<template>
    <div class="purchaseadd flex-col">
        <div class="flex-v-center tool-bar">
            <div class="flex-v-center search-bar" style="margin-right: 20px;">
                <i class="icon f-20 c-8">search</i>
                <input type="text" class="flex-item" v-model="filter.orderNo" @change="$refs.list.update(true)" placeholder="采购合同号" style="width: 200px;">
                <select v-model="filter.status" class="f-14" @change="$refs.list.update(true)">
                    <option value="0">合同状态</option>
                    <option v-for="item in statusList" :value="item.status" v-bind:key="item.id">{{item.name}}</option>
                </select>
                <i class="icon" style="margin-left: -20px;pointer-events:none;">arrow_drop_down</i>
            </div>
            <div class="flex-item"></div>
            <router-link to="/purchsemanage-purchase/add">
                <btn class="b" flat color="#008eff">新增采购</btn>
            </router-link>
        </div>
        <div class="flex-item scroll-y">
            <data-list ref="list" method="get" :page-size="10" :param="filter" url="/haolifa/purchase-order/list/0">
                <tr slot="header">
                    <th style="width: 60px;">序号</th>
                    <th>采购合同号</th>
                    <th>供方单位</th>
                    <th>采购完成日期</th>
                    <th>订单状态</th>
                    <th>创建人</th>
                    <th>创建日期</th>
                    <th class="t-right" style="width: 80px;">操作</th>
                </tr>
                <template slot="item" slot-scope="{ item, index }">
                    <td>{{index}}</td>
                    <!--<td>-->
                    <!--<router-link class="c-4" :to="'/supplier/'+item.id">{{item.suppilerName}}</router-link>-->
                    <!--</td>-->
                    <td>{{item.purchaseOrderNo}}</td>
                    <td>{{item.supplierName}}</td>
                    <td>{{item.deliveryTime}}</td>
                    <td>{{statusList[item.status-1].name}}</td>
                    <td>{{item.createUserId}}</td>
                    <td>{{item.createTime}}</td>
                    <td class="t-right">
                        <a href="javascript:;" style="margin-right: 3px" class="blue" @click="info(item.id)">查看</a>
                        <a href="javascript:;" style="margin-right: 3px" v-if="item.status == 1" class="blue" @click="approve(item.purchaseOrderNo)">发起审批</a>
                        <a href="javascript:;" style="margin-right: 3px" v-if="item.status == 3" class="blue" @click="createInspect(item.id)">生成报检单</a>
                        <a href="javascript:;" style="margin-right: 3px" v-if="item.status == 1" class="blue" @click="updatePurchase(item.id)">编辑</a>
                        <a href="javascript:;" style="margin-right: 3px" v-if="item.status == 2" class="blue" @click="approveProgress(item)">审批进度</a>
                        <a href="javascript:;" v-if="item.status == 1" class="blue" @click="deletePurchase(item.purchaseOrderNo)">删除</a>
                        <a href="javascript:;" v-if="item.status == 3" class="blue" @click="completePurchase(item.purchaseOrderNo)">采购完成</a>
                    </td>
                </template>
            </data-list>
        </div>
        <layer v-if="completeLayer" :title="'订单折损'" width="450px">
            <div class="flex">
                <input-box v-model="wreck.wreckAmount" class="flex-item mr-20" label="折损金额"></input-box>
                <input-box v-model="wreck.wreckReason" class="flex-item mr-20" label="折损原因"></input-box>
            </div>
            <div class="layer-btns">
                <btn flat @click="completeLayer=false">取消</btn>
                <btn flat color="#008eff" @click="complete()">保存</btn>
            </div>
        </layer>
    </div>
</template>

<script>
import DataList from "@/components/datalist";
// import obj2FormData from '@/utils/obj2FormData'
export default {
    name: "purchsemanage-purchase",
    components: { DataList },
    data() {
        return {
            natureList: ["国有", "三资", "集体", "联营", "私营"],
            statusList: [
                { status: 1, name: "待审批" },
                { status: 2, name: "审批中" },
                { status: 3, name: "采购中" },
                { status: 4, name: "审批不通过" },
                { status: 5, name: "采购完成" }
            ],
            filter: {
                orderNo: "",
                status: 0,
                createUserId: 0
            },
            wreck: { orderNo: "", wreckAmount: 0, wreckReason: "" },
            completeLayer: false,
            confirmLayer: false
        };
    },
    created() {
        this.filter.createUserId = 0;
    },
    methods: {
        info: function(formId) {
            this.$router.push(`/purchsemanage-purchase/info?formId=${formId}`);
        },
        createInspect: function(formId) {
            this.$http
                .get(`/haolifa/purchase-order/createInspect/${formId}`)
                .then(res => {
                    console.log("报检单号", res);
                    this.$confirm({
                        title: "完善报检单",
                        text: "现在去完善报检单？",
                        color: "blue",
                        btns: ["稍后再说", "现在完善"],
                        yes: () => {
                            this.$router.push(
                                `/applyBuy-material/edit?id=${res}`
                            );
                        }
                    });
                });
        },
        approveProgress(item) {
            this.$router.push(
                `/order/approveProgress?formNo=${item.supplierNo}`
            );
        },
        approve: function(orderNo) {
            this.$confirm({
                title: "发起审批",
                text: "确定发起审批？",
                color: "blue",
                btns: ["取消", "确认"],
                yes: () => {
                    this.$http
                        .get(`/haolifa/purchase-order/approve/${orderNo}/0`)
                        .then(res => {
                            this.$toast("发起成功");
                            this.$refs.list.update();
                        })
                        .catch(e => {
                            this.$toast(e.msg || e.message);
                        });
                }
            });
        },
        updatePurchase: function(orderId) {
            this.$router.push(`/purchsemanage-purchase/add?formId=${orderId}`);
        },
        completePurchase: function(orderNo) {
            this.completeLayer = true;
            this.wreck.orderNo = orderNo;
        },
        complete: function() {
            this.$http
                .post("/haolifa/purchase-order/complete", this.wreck)
                .then(res => {
                    this.completeLayer = false;
                    this.$refs.list.update(true);
                })
                .catch(e => {
                    this.$toast(e.msg || e.message);
                });
        },
        deletePurchase: function(purchaseOrderNo) {
            this.$confirm({
                title: "删除确认",
                text: `您确定要删除该订单么？`,
                color: "red",
                btns: ["取消", "删除"],
                yes: () => {
                    this.$http
                        .get(
                            `/haolifa//purchase-order/delete/${purchaseOrderNo}`
                        )
                        .then(res => {
                            this.$toast("删除成功");
                            this.$refs.list.update();
                        })
                        .catch(e => {
                            this.$toast(e.msg);
                        });
                }
            });
        }
    }
};
</script>

<style lang="less">
.purchaseadd {
    height: 100%;
    select {
        background: none;
        border: none;
        outline: none;
        padding: 5px 20px 5px 10px;
        appearance: none;
    }
}
</style>
