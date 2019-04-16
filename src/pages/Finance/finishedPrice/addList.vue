<template>
    <div class="page-orders-list">
        <div class="flex-v-center tool-bar">
            <div class="flex-v-center search-bar" style="margin-right: 20px;">
                <i class="icon f-20 c-8">search</i>
                <input type="text" class="flex-item" v-model="filter.haoliModel" @change="$refs.list.update(true)" placeholder="好利型号" style="width: 200px;">
                <input type="text" class="flex-item" v-model="filter.model" @change="$refs.list.update(true)" placeholder="型号" style="width: 200px;">
                <input type="text" class="flex-item" v-model="filter.specifications" @change="$refs.list.update(true)" placeholder="规格" style="width: 200px;">
                <!-- <select v-model="filter.orderStatus" class="f-14" @change="$refs.list.update(true)">
                    <option value="-1">全部</option>
                    <option v-for="item in orderStatusList" :value="item.value" v-bind:key="item.value">{{item.text}}</option>
                </select>-->
                <!-- <i class="icon" style="margin-left: -20px;pointer-events:none;">arrow_drop_down</i> -->
            </div>
            <div class="flex-item"></div>
            <btn class="b" flat color="#008eff" @click="edit">新增</btn>
        </div>
        <div class="flex-item">
            <data-list ref="list" :param="filter" url="/haolifa/price/product/pageInfo" method="post">
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
                <!-- item: 当前行数据; index: 当前行数 -->
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
                        <a href="javascript:;" class="blue" @click="edit(item)" style="margin-right: 3px;">编辑|</a>
                        <a href="javascript:;" class="red" @click="del(item)" style="margin-right: 3px;">删除</a>
                    </td>
                </template>
            </data-list>
        </div>
        <layer v-if="layer" :title="form.id ? '编辑' : '新增'" width="900px">
            <div class="layer-text" style="padding-bottom: 50px;">
                <input-box v-model="form.haoliModel" label="好利型号" class="input-width" style="width:48%;"></input-box>
                <input-box v-model="form.model" label="型号" class="input-width" style="width:24%;"></input-box>
                <input-box v-model="form.specifications" label="规格" class="input-width" style="width:24%;"></input-box>
                <input-box v-model="form.connectionMode" label="连接方式" class="input-width" style="width:24%;"></input-box>
                <input-box v-model="form.structuralStyle" label="结构形式" class="input-width" style="width:24%;"></input-box>
                <input-box v-model="form.nominalPressure" label="公称压力" class="input-width" style="width:24%;"></input-box>
                <input-box v-model="form.fatiMaterial" label="阀体材质" class="input-width" style="width:24%;"></input-box>
                <input-box v-model="form.fabanMaterial" label="阀板材质" class="input-width" style="width:24%;"></input-box>
                <input-box v-model="form.sealForm" label="密封形式" class="input-width" style="width:24%;"></input-box>
                <input-box v-model="form.fazhouMaterial" label="阀轴材质" class="input-width" style="width:24%;"></input-box>
                <input-box v-model="form.accessories" label="辅料" class="input-width" style="width:24%;"></input-box>
                <input-box v-model="form.drive" label="驱动" class="input-width" style="width:24%;"></input-box>
                <input-box v-model="form.productPrice" label="成品单价" class="input-width" style="width:24%;"></input-box>
                <input-box v-model="form.priceBook" label="价格书" class="input-width" style="width:24%;"></input-box>
                <input-box v-model="form.fatiPrice" label="阀体单价" class="input-width" style="width:24%;"></input-box>
                <input-box v-model="form.fabanPrice" label="阀板单价" class="input-width" style="width:24%;"></input-box>
                <input-box v-model="form.fazuoPrice" label="阀座单价" class="input-width" style="width:24%;"></input-box>
                <input-box v-model="form.fazhouPrice" label="阀轴单价" class="input-width" style="width:24%;"></input-box>
                <input-box v-model="form.accessoriesPrice" label="辅料单价" class="input-width" style="width:24%;"></input-box>
                <input-box v-model="form.drivePrice" label="驱动单价" class="input-width" style="width:24%;"></input-box>
                <input-box v-model="form.totalPrice" label="合计单价" class="input-width" style="width:24%;"></input-box>
                <input-box v-model="form.remark" label="备注" multi-line></input-box>
            </div>
            <div class="layer-btns">
                <btn flat @click="layer = false">取消</btn>
                <btn flat color="#008eff" @click="submit">保存</btn>
            </div>
        </layer>
    </div>
</template>

<script>
import DataList from "@/components/datalist";

export default {
    name: "finished-price-list",
    components: { DataList },
    data() {
        return {
            layer: false,
            loading: false,
            form: {},
            filter: {
                haoliModel: "",
                model: "",
                specifications: ""
            },
            info: {}
        };
    },
    created() {},
    methods: {
        edit(item) {
            // this.$router.push(`/order/info?orderNo=${item.orderNo}`);
            if (item) {
                this.form = item;
            } else {
                this.form = {};
            }
            this.layer = true;
            // this.getInfo(item.orderNo);
            // this.getOrderStatusList();
        },
        vertify() {
            for (let key in this.form) {
                let item = this.form[key];
                if (!item && item !== 0 && key !== "id") {
                    this.$toast("请输入完整信息" + key);
                    return false;
                }
            }
            return true;
        },
        submit() {
            // if (!this.vertify()) return;
            const { form } = this;
            if (form.id) {
                this.$http
                    .put("/haolifa/price/product/update", form)
                    .then(res => {
                        this.$refs.list.update();
                        this.layer = false;
                        this.$toast("保存成功");
                    })
                    .catch(e => {
                        this.$toast(e.message || e.meg);
                    });
            } else {
                this.$http
                    .post("/haolifa/price/product/save", form)
                    .then(res => {
                        this.$refs.list.update();
                        this.layer = false;
                        this.$toast("保存成功");
                    })
                    .catch(e => {
                        this.$toast(e.message || e.meg);
                    });
            }
        },
        close() {
            this.layer = false;
        },
        del(item) {
            this.$confirm({
                title: "删除确认",
                text: `您确定要删除以下成品吗？<br>${item.haoliModel}`,
                color: "red",
                btns: ["取消", "删除"],
                yes: () => {
                    this.$http
                        .delete(`/haolifa/price/product/delete/${item.id}`)
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

.input-width {
    display: inline-block;
    margin-left: 2px;
}
</style>