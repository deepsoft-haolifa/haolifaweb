<template>
    <div class="page-contract flex-col">
        <div class="flex-v-center tool-bar">
            <button class="btn btn-small" @click="toFinish">已办事项</button>
            <span style="height: 22px;margin: 0 5px;border: 2px solid #ccc"></span>
            <button class="btn btn-small" style="background:#ccc" @click="totask">待办事项</button>
            <div class="flex-v-center search-bar" style="margin-right: 20px;margin-left: 80px;"></div>
        </div>
        <div class="flex-item scroll-y">
            <data-list ref="list" method="get" :page-size="20" :param="filter" url="/haolifa/done">
                <tr slot="header">
                    <th style="width: 60px;">序号</th>
                    <th>发起人</th>
                    <th>流程</th>
                    <th>订单号</th>
                    <th>发起时间</th>
                    <th>操作</th>
                </tr>
                <template slot="item" slot-scope="{ item, index }">
                    <td>{{index}}</td>
                    <td>{{item.createUserRealName}}</td>
                    <td>{{item.flowName}}</td>
                    <td>{{item.formNo}}</td>
                    <td>{{item.createTime}}</td>
                    <td>
                        <a
                            v-if="item.flowId == 1 || item.flowId==6"
                            href="javascript:;"
                            style="margin-right: 3px"
                            class="blue"
                            @click="$router.push({path:'/produce',query:{instanceId:item.instanceId,stepId:item.stepId}})"
                        >详情</a>
                        <a
                            v-if="item.flowId == 2"
                            href="javascript:;"
                            style="margin-right: 3px"
                            class="blue"
                            @click="$router.push({path:'/purchase',query:{instanceId:item.instanceId,stepId:item.stepId}})"
                        >详情</a>
                        <a
                            v-if="item.flowId == 3"
                            href="javascript:;"
                            style="margin-right: 3px"
                            class="blue"
                            @click="$router.push({path:'/supplierAudit',query:{instanceId:item.instanceId,stepId:item.stepId}})"
                        >详情</a>
                        <a
                            v-if="item.flowId == 4"
                            href="javascript:;"
                            style="margin-right: 3px"
                            class="blue"
                            @click="$router.push({path:'/replace',query:{instanceId:item.instanceId,stepId:item.stepId}})"
                        >详情</a>
                        <a
                            v-if="item.flowId == 5"
                            href="javascript:;"
                            style="margin-right: 3px"
                            class="blue"
                            @click="$router.push({path:'/purchase',query:{instanceId:item.instanceId,stepId:item.stepId}})"
                        >详情</a>
                    </td>
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