<template>
    <div class="page-contract flex-col">
        <div class="flex-v-center tool-bar">
            <!-- <button class="btn btn-small" @click="toProcOrder">采购合同</button>
            <span style="height: 22px;margin: 0 5px;border: 2px solid #ccc"></span>
            <button class="btn btn-small" style="background:#ccc" @click="toProdOrder">生产合同</button>-->
            <div class="flex-v-center search-bar" style="margin-right: 20px;margin-left: 80px;">
                <i class="icon f-20 c-8">search</i>
                <input type="text" class="flex-item" v-model="filter.orderNo" @change="$refs.list.update(true)" placeholder="采购合同号" style="width: 200px;">
                <i class="icon f-20 c-8">search</i>
                <input type="text" class="flex-item" v-model="filter.supplierName" @change="$refs.list.update(true)" placeholder="供应商" style="width: 200px;">
                <select v-model="filter.status" class="f-14" @change="$refs.list.update(true)">
                    <option value="0">合同状态</option>
                    <option v-for="item in statusList" :value="item.status" v-bind:key="item.id">{{item.name}}</option>
                </select>
                <i class="icon" style="margin-left: -20px;pointer-events:none;">arrow_drop_down</i>
            </div>
            <div class="flex-item" style="text-align:right;color:#0f95ff">合同总金额（元）:{{priceTotal}}</div>
        </div>
        <div class="flex-item scroll-y">
            <data-list ref="list" method="get" :page-size="20" :param="filter" url="/haolifa/purchase-order/list/-1">
                <tr slot="header">
                    <th style="width: 60px;">序号</th>
                    <th>合同编号</th>
                    <th>合同总金额</th>
                    <th>供方单位</th>
                    <th>已付款</th>
                    <th>采购完成日期</th>
                    <th>合同类型</th>
                    <th>订单状态</th>
                    <th>创建人</th>
                    <th>创建日期</th>
                    <th class="t-right" style="width: 80px;">操作</th>
                </tr>
                <template slot="item" slot-scope="{ item, index }">
                    <td>{{index}}</td>
                    <td>{{item.purchaseOrderNo}}</td>
                    <td>{{item.totalPrice}}</td>
                    <td>{{item.supplierName}}</td>
                    <td>{{item.paidAccount}}</td>
                    <td>{{item.deliveryTime}}</td>
                    <td>{{item.orderType == 0?'零件采购':'毛坯加工'}}</td>
                    <td>{{statusList[item.status-1].name}}</td>
                    <td>{{item.createUserId}}</td>
                    <td>{{item.createTime}}</td>
                    <td class="t-right">
                        <a href="javascript:;" style="margin-right: 3px" class="blue" @click="info(item.id)">查看</a>
                    </td>
                </template>
            </data-list>
        </div>
    </div>
</template>

<script>
import DataList from "@/components/datalist";
export default {
    name: "page-contract",
    components: { DataList },
    data() {
        return {
            natureList: ["国有", "三资", "集体", "联营", "私营"],
            priceTotal: "",
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
                createUserId: 0,
                supplierName: ""
            }
        };
    },
    mounted() {
        this.getPriceTotal();
    },
    methods: {
        toProcOrder() {
            this.$router.push(`/contract`);
        },
        toProdOrder() {
            this.$router.push(`/production`);
        },
        info(formId) {
            this.$router.push(`/contract/info?formId=${formId}`);
        },
        getPriceTotal() {
            this.$http
                .get(`/haolifa/statistics/money/purchase`)
                .then(res => {
                    this.priceTotal = res;
                })
                .catch(e => {
                    this.$toast(e.msg || e.message);
                });
        }
    }
};
</script>

<style lang="less">
.page-contract {
    height: 100%;
}
.page-contract {
    height: 100%;
    select {
        background: none;
        border: none;
        outline: none;
        padding: 5px 20px 5px 10px;
        appearance: none;
    }
}
.select-form {
    background: none;
    border: none;
    outline: none;
    padding: 5px 20px 5px 10px;
    appearance: none;
    border-bottom: 1px solid #d8d8d8;
    border-radius: 0;
}
</style>