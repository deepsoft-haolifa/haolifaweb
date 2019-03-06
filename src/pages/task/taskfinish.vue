<template>
    <div class="page-contract flex-col">
        <div class="flex-v-center tool-bar">
            <button class="btn btn-small" @click="toFinish">已办事项</button>
            <span style="height: 22px;margin: 0 5px;border: 2px solid #ccc"></span>
            <button class="btn btn-small" style="background:#ccc" @click="totask">待办事项</button>
            <div class="flex-v-center search-bar" style="margin-right: 20px;margin-left: 80px;">
                <!-- <i class="icon f-20 c-8">search</i> -->
                <!-- <input type="text" class="flex-item" v-model="filter.orderNo" @change="$refs.list.update(true)" placeholder="采购合同号" style="width: 200px;"> -->
                <!-- <select v-model="filter.orderStatus" class="f-14" @change="$refs.list.update(true)">
            <option value="0">合同状态</option>
            <option v-for="item in statusList" :value="item.status" v-bind:key="item.id">{{item.name}}</option>
                </select>-->
                <!-- <i class="icon" style="margin-left: -20px;pointer-events:none;">arrow_drop_down</i> -->
            </div>
        </div>
        <div class="flex-item scroll-y">
            <data-list ref="list" method="get" :page-size="10" :param="filter" url="/haolifa/done">
                <tr slot="header">
                    <th style="width: 60px;">序号</th>
                    <th>发起人</th>
                    <th>流程</th>
                    <!-- <th>采购完成日期</th> -->
                    <!-- <th>订单状态</th> -->
                    <!-- <th>创建人</th> -->
                    <th>订单号</th>
                    <th>发起时间</th>
                </tr>
                <template slot="item" slot-scope="{ item, index }">
                    <td>{{index}}</td>
                    <td>{{item.createUserRealName}}</td>
                    <td>{{item.flowName}}</td>
                    <!-- <td>{{item.deliveryTime}}</td>
                    <td>{{statusList[item.status-1].name}}</td>-->
                    <td>{{item.formNo}}</td>
                    <td>{{item.createTime}}</td>
                </template>
            </data-list>
        </div>
    </div>
</template>

<script>
import DataList from "@/components/datalist";
export default {
    name: "taskfinish-list",
    components: { DataList },
    data() {
        return {
            filter: {
                // orderNo:'',
                // orderStatus:0,
                // createUserId:0
            }
        };
    },
    methods: {
        toFinish() {
            this.$router.push(`/taskfinishlist`);
        },
        totask() {
            this.$router.push(`/taskList`);
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