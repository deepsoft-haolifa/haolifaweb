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
            <!-- <data-list ref="list" :param="filter" url="/haolifa/price/product/pageInfo" method="post">
                <tr slot="header">
                    <th style="width: 60px;">序号</th>
                    <th>好利型号</th>
                    <th>型号</th>
                    <th>规格</th>
                    <th>连接方式</th>
                    <th>结构形式</th>
                    <th>公称压力</th>
                    <th>阀体材质</th>
                    <th>阀板材质</th>
                    <th>密封形式</th>
                    <th>阀轴材质</th>
                    <th>辅料</th>
                    <th>驱动</th>
                    <th>成品单价</th>
                    <th>价格书</th>
                    <th>阀体单价</th>
                    <th>阀板单价</th>
                    <th>阀座单价</th>
                    <th>阀轴单价</th>
                    <th>辅料单价</th>
                    <th>驱动单价</th>
                    <th>合计单价</th>
                    <th>备注</th>
                    <th class="t-right" style="width: 80px;">操作</th>
                </tr>
                <template slot="item" slot-scope="{ item, index }">
                    <td class="c-a">{{index}}</td>
                    <td>{{item.haoliModel}}</td>
                    <td>{{item.model}}</td>
                    <td>{{item.specifications}}</td>
                    <td>{{item.connectionMode}}</td>
                    <td>{{item.structuralStyle}}</td>
                    <td>{{item.nominalPressure}}</td>
                    <td>{{item.fatiMaterial}}</td>
                    <td>{{item.fabanMaterial}}</td>
                    <td>{{item.sealForm}}</td>
                    <td>{{item.fazhouMaterial}}</td>
                    <td>{{item.accessories}}</td>
                    <td>{{item.drive}}</td>
                    <td>{{item.productPrice}}</td>
                    <td>{{item.priceBook}}</td>
                    <td>{{item.fatiPrice}}</td>
                    <td>{{item.fabanPrice}}</td>
                    <td>{{item.fazuoPrice}}</td>
                    <td>{{item.fazhouPrice}}</td>
                    <td>{{item.accessoriesPrice}}</td>
                    <td>{{item.drivePrice}}</td>
                    <td>{{item.totalPrice}}</td>
                    <td>{{item.remark}}</td>
                    <td class="t-right">
                        <a href="javascript:;" class="blue" @click="outProduct(item)">出库</a> |
                        <a href="javascript:;" class="blue" @click="outList(item)">出库详情</a>
                    </td>
                </template>
            </data-list>-->
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
                    <th class="t-right" style="width: 80px;">操作</th>
                </tr>
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
                    <td class="t-right">
                        <a href="javascript:;" class="blue" @click="outProduct(item)">出库</a> |
                        <a href="javascript:;" class="blue" @click="outList(item)">出库详情</a>
                    </td>
                </template>
            </data-list>
        </div>
        <layer v-if="layer" :title="'出库'" width="70%">
            <div>
                <div class="flex">
                    <input-box v-model="form.orderNo" class="flex-item ml-10 mr-10" disabled label="订单号"></input-box>
                    <input-box v-model="form.productModel" class="flex-item mr-10" label="成品型号" disabled="disabled"></input-box>
                    <input-box v-model="form.productNo" class="flex-item mr-10" label="成品ID" disabled="disabled"></input-box>
                </div>
                <div class="flex">
                    <input-box v-model="form.customerName" class="flex-item ml-10 mr-10" label="客户名称"></input-box>
                    <input-box v-model="form.customerNo" class="flex-item mr-10" label="客户代号"></input-box>
                    <input-box v-model="form.price" class="flex-item mr-10" label="出库单价（销售单价)"></input-box>
                </div>
                <div class="flex">
                    <select-box v-model="form.storeRoomId" @change="getRoomId" class="flex-item ml-10 mr-10" :list="roomList" label="所属库房"></select-box>
                    <select-box v-model="form.storeRoomRackNo" @change="getRackId" class="flex-item mr-10" :list="rackListnew" label="所属库位"></select-box>
                    <input-box v-model="form.quantity" class="flex-item mr-10" label="出库数量（负数）"></input-box>
                </div>
            </div>
            <div class="layer-btns">
                <btn flat @click="layer=false">取消</btn>
                <btn flat color="#008eff" @click="outSave()">保存</btn>
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
            // filter: {
            //     haoliModel: "",
            //     model: "",
            //     specifications: ""
            // },
            filter: {
                orderNo: "",
                productNo: "",
                operationType: "0",
                type: "1"
            },
            typeList: ["出库", "入库"],
            form: {
                productNo: "",
                customerName: "",
                customerNo: "",
                orderNo: "",
                price: "",
                quantity: "",
                productSpecifications: "",
                rackNo: "",
                roomNo: "",
                productModel: ""
            },
            layer: false,
            roomList: [],
            rackListnew: []
        };
    },
    mounted() {
        this.getRoomList();
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
            this.layer = true;
            this.form = {
                productNo: "",
                customerName: "",
                customerNo: "",
                orderNo: "",
                price: "",
                quantity: "",
                productSpecifications: "",
                rackNo: "",
                roomNo: "",
                productModel: ""
            };
            this.form.productNo = item.productNo;
            this.form.orderNo = item.orderNo;
            this.form.productModel = item.productModel;
            this.form.rackNo = item.rackNo;
            this.form.roomNo = item.roomNo;
            // this.$router.push(
            //     `/storeproduct/outProduct?productNo=${item.productNo}&name=${
            //         item.name
            //     }`
            // );
        },
        outSave() {
            this.layer = false;
        },
        getRoomList() {
            this.$http.get("/haolifa/store-room/listInfo?type=0").then(res => {
                this.roomList = res
                    .filter(item => !item.isDelete)
                    .map(item => {
                        return { value: item.roomNo, text: item.name };
                    });
            });
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
