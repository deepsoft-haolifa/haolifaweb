<template>
    <div class="page-orders-list">
        <div class="flex-v-center tool-bar">
            <div class="flex-v-center search-bar" style="margin-right: 20px;">
                <i class="icon f-20 c-8">search</i>
                <input type="text" class="flex-item" v-model="filter.orderNo" @change="$refs.list.update(true)" placeholder="订单号" style="width: 200px;">
                <select v-model="filter.orderStatus" class="f-14" @change="$refs.list.update(true)">
                    <option value="-1">全部</option>
                    <option v-for="item in orderStatusList" :value="item.value" v-bind:key="item.value">{{item.text}}</option>
                </select>
                <i class="icon" style="margin-left: -20px;pointer-events:none;">arrow_drop_down</i>
            </div>
            <div class="flex-item"></div>
            <router-link to="/order/add">
                <btn class="b" flat color="#008eff">新增订单</btn>
            </router-link>
        </div>
        <div class="flex-item scroll-y">
            <data-list ref="list" :param="filter" url="/haolifa/order-product/pageInfo" method="post">
                <tr slot="header">
                    <th style="width: 60px;">序号</th>
                    <th>订单编号</th>
                    <th>成品合同订单号</th>
                    <th style="width:50px;">订单合同URL</th>
                    <th>订单状态</th>
                    <th>创建时间</th>
                    <th class="t-right" style="width: 80px;">操作</th>
                </tr>
                <!-- item: 当前行数据; index: 当前行数 -->
                <template slot="item" slot-scope="{ item, index }">
                    <td class="c-a">{{index}}</td>
                    <td>{{item.orderNo}}</td>
                    <td>{{item.orderContractNo}}</td>
                    <td>
                        <a class="fixed-length" :href="item.orderContractUrl" :title="item.orderContractUrl">{{item.orderContractUrl}}</a>
                    </td>
                    <td>{{orderStatusList[item.orderStatus].text}}</td>
                    <td>{{item.createTime}}</td>
                    <td class="t-right">
                        <a href="javascript:;" class="blue" @click="progress(item)" v-if="item.orderStatus==0" style="margin-right: 3px;">发起流程|</a>
                        <a href="javascript:;" class="blue" @click="info(item)" style="margin-right: 3px;">详情</a>
                        <a href="javascript:;" class="red" @click="remove(item)" v-if="item.orderStatus==0||item.orderStatus==14" style="margin-right: 3px;">|删除</a>
                    </td>
                </template>
            </data-list>
        </div>
    </div>
</template>

<script>
import DataList from "@/components/datalist";

export default {
    name: "page-orders-list",
    components: { DataList },
    data() {
        return {
            loading: false,
            orderStatusList: [],
            filter: {
                orderNo: "",
                orderStatus: -1
            }
        };
    },
    created() {
        this.getOrderStatusList();
    },
    methods: {
        getOrderStatusList() {
            this.$http
                .get("/haolifa/order-product/order-status-list")
                .then(res => {
                    this.orderStatusList = res.map(item => {
                        return { value: item.code, text: item.desc };
                    });
                });
        },
        progress(item) {
            let id = "";
            this.$http
                .post("/haolifa/flowInstance/create", {
                    flowId: 1,
                    formId: item.id,
                    formType: 1,
                    formNo: item.orderNo,
                    summary: "生产订单审批"
                })
                .then(res => {
                    id = res.instanceId;
                    // this.loading = false;
                    // this.$toast(`发起流程成功,流程ID: ${res.instanceId}`);
                    this.$http
                        .post("/haolifa/order-product/updateStatus", {
                            orderNo: item.orderNo,
                            status: 1
                        })
                        .then(res => {
                            this.loading = false;
                            this.$toast(`发起流程成功,流程ID: ${id}`);
                        });
                });
        },
        info(item) {
            this.$router.push(`/order/info?orderNo=${item.orderNo}`);
        },
        remove(item) {
            this.$confirm({
                title: "删除确认",
                text: `您确定要删除以下发货通知单吗？<br>${item.deliveryNo}`,
                color: "red",
                btns: ["取消", "删除"],
                yes: () => {
                    this.$http
                        .delete(`/haolifa/order-product/delete/${item.id}`)
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