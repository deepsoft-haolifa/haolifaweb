<template>
    <div class="page-cost">
        <div class="flex-v-center tool-bar">
            <div class="flex-item"></div>
            <btn class="b" flat color="#008eff" @click="layer=true;secondClassifyList=[]">添加费用</btn>
        </div>
        <div class="flex-item scroll-y">
            <data-list class="f-14" ref="list" method="post" url="/haolifa/expenses/list">
                <tr slot="header">
                    <th style="width: 60px;">序号</th>
                    <th>报销人</th>
                    <th>报销部门</th>
                    <th>报销摘要</th>
                    <th>费用类别</th>
                    <th>费用类别明细</th>
                    <th>总费用</th>
                    <th>备注</th>
                    <th class="t-right" style="width: 80px;">操作</th>
                </tr>
                <template slot="item" slot-scope="{ item, index }">
                    <td>{{index}}</td>
                    <td>{{item.commitUser}}</td>
                    <td>{{item.department}}</td>
                    <td>{{item.summary}}</td>
                    <td>{{item.expensesClassify}}</td>
                    <td>{{item.secondClassify}}</td>
                    <td>￥ {{item.totalAmount}}</td>
                    <td>{{item.remark}}</td>
                    <td class="t-right">
                        <a href="javascript:;" style="margin-right: 3px" class="blue" @click="edit(item)">编辑</a>
                        <a href="javascript:;" style="margin-right: 3px" class="red" @click="remove(item)">删除</a>
                    </td>
                </template>
            </data-list>
        </div>
        <layer v-if="layer" :title="form.id ? '编辑费用' : '新增费用'" width="50%">
            <div class="layer-text" style="padding-bottom: 50px;">
                <input-box v-model="form.commitUser" label="报销人"></input-box>
                <input-box v-model="form.department" label="报销部门"></input-box>
                <input-box v-model="form.summary" label="报销摘要"></input-box>
                <select-box :list="expensesClassifyList" @change="exChange" v-model="form.expensesClassify" label="费用类别"></select-box>
                <select-box :list="secondClassifyList" v-model="form.secondClassify" label="费用类别明细"></select-box>
                <input-box type="number" v-model="form.totalAmount" label="总费用"></input-box>
                <input-box v-model="form.remark" label="备注"></input-box>
            </div>
            <div class="layer-btns">
                <btn flat @click="cancel">取消</btn>
                <btn flat color="#008eff" @click="submit">保存</btn>
            </div>
        </layer>
    </div>
</template>

<script>
import DataList from "@/components/datalist";

export default {
    name: "page-cost",
    components: { DataList },
    data() {
        return {
            layer: false,
            form: {
                id: "",
                commitUser: "",
                expensesClassify: "",
                secondClassify: "",
                totalAmount: "",
                summary: "",
                department: "",
                remark: ""
            },
            expensesClassifyList: [],
            secondClassifyList: [],
            exList: []
        };
    },
    created() {
        this.$http.get("/haolifa/expenses/classify?pId=0").then(res => {
            this.expensesClassifyList = res.map(item => {
                return { value: item.classifyName, text: item.classifyName };
            });
            this.exList = res.map(item => {
                return { value: item.id, text: item.classifyName };
            });

            this.form.expensesClassify == ""
                ? res[0].classifyName
                : this.form.expensesClassify;
        });
    },
    methods: {
        edit(item) {
            // for (let key in this.form) this.form[key] = item[key];
            this.form = item;
            let id;
            this.exList.forEach(item => {
                if (item.text == this.form.expensesClassify) id = item.value;
            });
            if (id)
                this.$http
                    .get(`/haolifa/expenses/classify?pId=${id}`)
                    .then(res => {
                        this.secondClassifyList = res.map(item => {
                            return {
                                value: item.classifyName,
                                text: item.classifyName
                            };
                        });
                    });
            this.layer = true;
        },
        exChange() {
            let id,
                ex = this.form.expensesClassify;
            this.secondClassifyList = [];
            this.exList.forEach(item => {
                if (item.text == ex) id = item.value;
            });
            if (id)
                this.$http
                    .get(`/haolifa/expenses/classify?pId=${id}`)
                    .then(res => {
                        this.secondClassifyList = res.map(item => {
                            return {
                                value: item.classifyName,
                                text: item.classifyName
                            };
                        });
                    });
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
            if (!this.vertify()) return;
            const { form } = this;
            form.totalAmount = +form.totalAmount;
            this.$http
                .post(
                    "/haolifa/expenses/" + (form.id ? "update" : "save"),
                    form
                )
                .then(res => {
                    this.$refs.list.update();
                    this.cancel();
                    this.$toast("保存成功");
                })
                .catch(e => {
                    this.$toast(e.message || e.meg);
                });
        },
        cancel() {
            this.form = {
                id: "",
                commitUser: "",
                expensesClassify: "",
                totalAmount: ""
            };
            this.layer = false;
        },
        remove(item) {
            this.$confirm({
                title: "删除确认",
                text: `您确定要删除以下发票记录吗？<br>
          提交人：<b>${item.commitUser}</b><br>
          类别：<b>${item.expensesClassify}</b><br>
          总费用：<b>￥${item.totalAmount}</b><br>`,
                color: "red",
                btns: ["取消", "删除"],
                yes: () => {
                    this.$http
                        .get(`/haolifa/expenses/delete/${item.id}`)
                        .then(res => {
                            this.$toast("删除成功");
                            this.$refs.list.update();
                        })
                        .catch(e => {
                            this.$toast(e.msg || e.message);
                        });
                }
            });
        }
    }
};
</script>

<style lang="less">
.page-cost {
    //
}
</style>
