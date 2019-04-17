<template>
    <div class="page-product-list flex-col">
        <div class="flex-v-center tool-bar">
            <div class="flex-v-center search-bar" style="margin-right: 20px;">
                <i class="icon f-20 c-8">search</i>
                <input type="text" class="flex-item" v-model="filter.orderNo" @change="$refs.list.update(true)" placeholder="订单号">
                <input type="text" class="flex-item" v-model="filter.productNo" @change="$refs.list.update(true)" placeholder="成品ID">
                <select v-model="filter.operationType" class="f-14" @change="$refs.list.update(true)">
                    <option value="0">全部</option>
                    <option value="1">出库</option>
                    <option value="2">入库</option>
                </select>
                <i class="icon" style="margin-left: -20px;pointer-events:none;">arrow_drop_down</i>
            </div>
            <div class="flex-item"></div>
            <!-- <router-link to="/product/add">
                <btn class="b" flat color="#008eff">新增成品</btn>
            </router-link>-->
            <!-- <span class="f-16" style="margin-left: 10px;">{{this.$route.meta.title}}</span> -->
        </div>
        <div class="flex-item scroll-y">
            <data-list ref="list" page-num-str="currentPage" :param="filter" url="/haolifa/store-room/entryOut/pageInfo" method="get">
                <tr slot="header">
                    <th style="width: 60px;">序号</th>
                    <th>订单号</th>
                    <th>成品ID</th>
                    <th>成品型号</th>
                    <th>成品规格</th>
                    <th>操作类型</th>
                    <th>数量</th>
                    <th>金额</th>
                    <th>创建时间</th>
                    <!-- <th class="t-right" style="width: 80px;">操作</th> -->
                </tr>
                <!-- item: 当前行数据; index: 当前行数 -->
                <template slot="item" slot-scope="{ item, index }">
                    <td class="c-a">{{index}}</td>
                    <td>{{item.orderNo}}</td>
                    <td>{{item.productNo}}</td>
                    <td>{{item.productModel}}</td>
                    <td>{{item.productSpecifications}}</td>
                    <td>{{typeList[item.operationType-1]}}</td>
                    <td>{{item.quantity}}</td>
                    <td>{{item.amount}}</td>
                    <td>{{item.createTime}}</td>
                    <!-- <td class="t-right">
                        <icon-btn small @click="edit(item)">edit</icon-btn>
                        <icon-btn small @click="remove(item)">delete</icon-btn>
                        <a href="javascript:;" class="blue" @click="entryProduct(item)">入库</a> |
                        <a href="javascript:;" class="blue" @click="outProduct(item)">出库</a> |
                        <a href="javascript:;" class="blue" @click="entryList(item)">入库详情</a> |
                        <a href="javascript:;" class="blue" @click="outList(item)">出库详情</a>
                    </td>-->
                </template>
            </data-list>
        </div>
    </div>
</template>

<script>
import DataList from "@/components/datalist";
export default {
    name: "page-product-list",
    components: { DataList },
    data() {
        return {
            filter: {
                orderNo: "",
                productNo: "",
                operationType: "0",
                type: "1"
            },
            typeList: ["出库", "入库"]
        };
    },
    methods: {
        entryProduct(item) {
            this.$router.push(
                `/storeproduct/entryProduct?productNo=${item.productNo}&name=${
                    item.name
                }`
            );
        },
        outProduct(item) {
            this.$router.push(
                `/storeproduct/outProduct?productNo=${item.productNo}&name=${
                    item.name
                }`
            );
        },
        entryList(item) {
            this.$router.push(
                `/storeproduct/entryList?productNo=${item.productNo}`
            );
        },
        outList(item) {
            this.$router.push(
                `/storeproduct/outList?productNo=${item.productNo}`
            );
        },
        edit(item) {
            this.$router.push(`/storeproduct/edit?id=${item.id}`);
        },
        remove(item) {
            this.$confirm({
                title: "删除确认",
                text: `您确定要删除以下零件类别吗？<br><b>${item.name}</b>`,
                color: "red",
                btns: ["取消", "删除"],
                yes: () => {
                    this.$http
                        .delete(`/haolifa/product/delete/${item.id}`)
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
.page-product-list {
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
</style>
