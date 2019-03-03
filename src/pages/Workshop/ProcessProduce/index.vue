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
                    <td>{{orderStatusList[item.orderStatus].text}}</td>
                    <td>{{item.createTime}}</td>
                    <td class="t-right">
                        <a href="javascript:;" class="blue" @click="approveProgress(item)" v-if="item.orderStatus==1" style="margin-right: 3px;">审批进度|</a>
                        <a href="javascript:;" class="blue" @click="info(item)" style="margin-right: 3px;">详情</a>
                    </td>
                </template>
            </data-list>
        </div>
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
                {value:5,text:'待生产'},
                {value:6,text:'待领料'},
                {value:7,text:'生产中'},
                {value:8,text:'生产暂停'},
                {value:9,text:'生产完成'},
            ],
            filter: {
                orderNo: "",
                orderStatus: 5
            }
        };
    },
    methods: {
        info(item) {
            this.$router.push(`/cjzr-scddlb/info?orderNo=${item.orderNo}`);
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