<template>
    <div class="page-product-list flex-col">
        <div class="flex-v-center tool-bar">
            <!-- <div class="flex-v-center search-bar" style="margin-right: 20px;">
      <i class="icon f-20 c-8">search</i>
      <select v-model="filter.type" class="f-14" @change="$refs.list.update(true)">
        <option value="">所有库房</option>
        <option value="1">原料库</option>
        <option value="2">成品库</option>
      </select>
      <i class="icon" style="margin-left: -20px;pointer-events:none;">arrow_drop_down</i>
            </div>-->
            <!-- <div class="flex-item"></div>
    <router-link to="/product/add">
      <btn class="b" flat color="#008eff">新增成品</btn>
            </router-link>-->
            <span class="f-16" style="margin-left: 10px;">{{this.$route.meta.title}}</span>
        </div>
        <div class="flex-item scroll-y">
            <data-list ref="list" :page-size="10" :param="filter" url="/haolifa/order-product/pageInfo" method="post">
                <tr slot="header">
                    <th style="width: 60px;">序号</th>
                    <th>订单号</th>
                    <th>装配车间</th>
                    <th>装配小组</th>
                    <th>创建时间</th>
                    <th>完成时间</th>
                    <th>预览</th>

                    <th class="t-right" style="width: 80px;">操作</th>
                </tr>
                <!-- item: 当前行数据; index: 当前行数 -->
                <template slot="item" slot-scope="{ item, index }">
                    <td class="c-a">{{index}}</td>
                    <td>{{item.orderNo}}</td>
                    <td>{{item.assemblyShop}}</td>
                    <td>{{item.assemblyGroup}}</td>
                    <td>{{item.createTime}}</td>
                    <td>{{item.finishFeedbackTime}}</td>
                    <td>
                        <a target="_blank" v-if="(item.orderContractUrl).match('\.(pdf|jpe?g|png|bmp)$') " :href="item.orderContractUrl">预览</a>
                        <a
                            target="_blank"
                            v-if="!(item.orderContractUrl).match('\.(pdf|jpe?g|png|bmp)$')"
                            :href="'http://view.officeapps.live.com/op/view.aspx?src='+ item.orderContractUrl"
                        >预览</a>
                    </td>
                    <td class="t-right">
                        <!-- <icon-btn small @click="edit(item)">edit</icon-btn>
                        <icon-btn small @click="remove(item)">delete</icon-btn>-->
                        <a href="javascript:;" class="blue" @click="getInfo(item.orderNo)">详情 |</a>
                        <a :href="`/haolifa/export/requisition/${item.orderNo}`" download style="margin-right: 3px" class="blue">下载领料单</a>
                        <!--  <a href="javascript:;" class="blue" @click="entryList(item)">入库详情</a> |
                        <a href="javascript:;" class="blue" @click="outList(item)">出库详情</a>-->
                    </td>
                </template>
            </data-list>
        </div>
        <layer v-if="layer" title="详情" width="70%">
            <div class="layer-text" style="padding-bottom: 50px;">
                <div class="form-content metalwork-info">
                    <table class="f-14">
                        <tr>
                            <td style="width: 15%;"></td>
                            <td style="width: 15%;"></td>
                            <td style="width: 14%;"></td>
                            <td style="width: 14%;"></td>
                            <td style="width: 14%;"></td>
                            <td style="width: 14%;"></td>
                            <td style="width: 14%;"></td>
                        </tr>
                        <tr>
                            <th>订单号</th>
                            <th>零件图号</th>
                            <th>零件名称</th>
                            <th>价格</th>
                            <!-- <th>是否可替换零件</th> -->
                            <th>需要零件数量</th>
                            <th>缺少零件数量</th>
                            <th>状态</th>
                        </tr>
                        <tr v-for="item in infoList" :key="item.id">
                            <td>{{item.orderNo}}</td>
                            <td>{{item.materialGraphNo}}</td>
                            <td>{{item.materialName}}</td>
                            <td>{{item.price}}</td>
                            <!-- <td>{{item.isReplace == 0 ?'否':'是'}}</td> -->
                            <td>{{item.materialCount}}</td>
                            <td>{{item.lackMaterialCount}}</td>
                            <td>{{statusList[item.checkStatus-1].name}}</td>
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
    name: "page-product-list",
    components: { DataList },
    data() {
        return {
            filter: {
                orderNo: "",
                orderStatusList: [5, 6, 7, 8, 9, 10, 11, 12, 13]
            },
            loading: false,
            infoList: {},
            statusList: [
                { status: 1, name: "核料成功" },
                { status: 2, name: "缺料,需要采购" },
                { status: 3, name: "释放料" },
                { status: 4, name: "领料完成" }
            ],
            layer: false
        };
    },
    methods: {
        // info(item) {
        //     this.$router.push(`ordermaterial/info?id=${item.orderNo}`);
        // },
        getInfo(orderNo) {
            this.layer = true;
            this.$http
                .get(`/haolifa/order-product/order-material?orderNo=${orderNo}`)
                .then(res => {
                    this.infoList = res;
                })
                .catch(e => {
                    this.$toast(e.msg);
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
