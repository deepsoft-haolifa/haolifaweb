<template>
    <div class="page-contract flex-col">
        <div class="flex-v-center tool-bar">
            <!-- <button class="btn btn-small" style="background:#ccc" @click="toProcOrder">采购合同</button>
            <span style="height: 22px;margin: 0 5px;border: 2px solid #ccc"></span>
            <button class="btn btn-small" @click="toProdOrder">生产合同</button>-->
            <div class="flex-v-center search-bar" style="margin-right: 20px;margin-left: 80px;">
                <i class="icon f-20 c-8">search</i>
                <input type="text" class="flex-item" v-model="filter.orderNo" @change="$refs.list.update(true)" placeholder="生产订单号" style="width: 200px;">
                <input type="text" class="flex-item" v-model="filter.demandName" @change="$refs.list.update(true)" placeholder="需方单位" style="width: 200px;">
                订单状态：
                <select v-model="filter.orderStatus" class="f-14" @change="$refs.list.update(true)">
                    <option value="-1">全部</option>
                    <option v-for="item in statusList" :value="item.value" v-bind:key="item.id">{{item.text}}</option>
                </select>
                发货状态：
                <select v-model="filter.deliverStatus" class="f-14" @change="$refs.list.update(true)">
                    <option value="-1">全部</option>
                    <option value="0">待发货</option>
                    <option value="1">部分发货</option>
                    <option value="2">发货完成</option>
                </select>
                <i class="icon" style="margin-left: -20px;pointer-events:none;">arrow_drop_down</i>
            </div>
        </div>
        <div class="flex-item scroll-y">
            <data-list ref="list" method="post" :page-size="20" :param="filter" url="/haolifa/order-product/pageInfo">
                <tr slot="header">
                    <th style="width: 60px;">序号</th>
                    <th>合同编号</th>
                    <th>合同总金额</th>
                    <th>需方单位</th>
                    <!-- <th>采购完成日期</th> -->
                    <th>已收款</th>
                    <th>发货状态</th>
                    <th>订单状态</th>
                    <!-- <th>创建人</th> -->
                    <th>创建日期</th>
                    <th>合同预览</th>
                    <th class="t-right" style="width: 80px;">操作</th>
                </tr>
                <template slot="item" slot-scope="{ item, index }">
                    <td>{{index}}</td>
                    <td>{{item.orderNo}}</td>
                    <td>{{item.totalPrice}}</td>
                    <td>{{item.demandName}}</td>
                    <!-- <td>{{item.deliveryTime}}</td> -->
                    <td>{{item.receivedAccount}}</td>
                    <td>{{deliverStatusList[item.deliverStatus].text}}</td>
                    <td>{{statusListArr[item.orderStatus].text}}</td>
                    <!-- <td>{{item.createUserId}}</td> -->
                    <td>{{item.createTime}}</td>
                    <td>
                        <a target="_blank" v-if="(item.orderContractExtendUrl).match('\.(pdf|jpe?g|png|bmp)$') " :href="item.orderContractExtendUrl">预览</a>
                        <a
                            target="_blank"
                            v-if="!(item.orderContractExtendUrl).match('\.(pdf|jpe?g|png|bmp)$')"
                            :href="'http://view.officeapps.live.com/op/view.aspx?src='+ item.orderContractExtendUrl"
                        >预览</a>
                    </td>
                    <td class="t-right">
                        <a href="javascript:;" style="margin-right: 3px" class="blue" @click="info(item.orderNo)">查看</a>
                    </td>
                </template>
            </data-list>
        </div>
    </div>
</template>

<script>
import DataList from "@/components/datalist";
export default {
    name: "page-contract-production",
    components: { DataList },
    data() {
        return {
            natureList: ["国有", "三资", "集体", "联营", "私营"],
            deliverStatusList: [
                { value: 0, text: "待发货" },
                { value: 1, text: "部分发货" },
                { value: 2, text: "发货完成" }
            ],
            statusList: [
                { value: 0, text: "创建" },
                { value: 1, text: "审批中" },
                { value: 2, text: "核料中" },
                { value: 3, text: "替换料审批中" },
                { value: 4, text: "核料完成" },
                { value: 5, text: "待生产" },
                { value: 6, text: "待领料" },
                { value: 7, text: "生产中" },
                // { value: 8, text: "生产暂停" },
                { value: 9, text: "生产完成" },
                // { value: 10, text: "质检中" },
                // { value: 11, text: "已入库" },
                // { value: 12, text: "申请发货" },
                // { value: 13, text: "发货完成" }
                { value: 14, text: "审核不通过" }
            ],
            statusListArr: [
                { value: 0, text: "创建" },
                { value: 1, text: "审批中" },
                { value: 2, text: "核料中" },
                { value: 3, text: "替换料审批中" },
                { value: 4, text: "核料完成" },
                { value: 5, text: "待生产" },
                { value: 6, text: "待领料" },
                { value: 7, text: "生产中" },
                { value: 8, text: "生产暂停" },
                { value: 9, text: "生产完成" },
                { value: 10, text: "质检中" },
                { value: 11, text: "已入库" },
                { value: 12, text: "申请发货" },
                { value: 13, text: "发货完成" },
                { value: 14, text: "审核不通过" }
            ],
            filter: {
                demandName: "",
                orderNo: "",
                orderStatus: -1,
                deliverStatus: -1
                // createUserId:0
            }
        };
    },
    methods: {
        toProcOrder() {
            this.$router.push(`/contract`);
        },
        toProdOrder() {
            this.$router.push(`/production`);
        },
        info(orderNo) {
            this.$router.push(`/production/info?orderNo=${orderNo}`);
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
</style>