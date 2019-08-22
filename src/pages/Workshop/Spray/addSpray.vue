<template>
    <div class="apply-buy-add">
        <div class="content">
            <div class="title b f-18 mb-10">{{!isAdd ? '编辑' : '新增'}}喷涂委托</div>
            <div class="flex">
                <input-box v-model="form.planner" class="flex-item" label="计划人" style="margin-right: 20px;"></input-box>
            </div>

            <div class="b" style="margin: 20px 0 10px;">喷涂零件项</div>
            <div class="card flex" style="margin-top: 0;" v-for="(item, i) in form.items" :key="i">
                <div class="flex-item">
                    <div class="flex">
                        <!-- <input-box v-model="item.materialClassifyName" class="flex-item mr-10" label="零件名称"></input-box> -->
                        <select-box :list="classifyNameList" v-model="item.materialClassifyName" label="零件名称"></select-box>
                        <input-box v-model="item.materialGraphNo" class="flex-item mr-10" label="零件图号"></input-box>
                        <input-box v-model="item.model" class="mr-10" label="型号"></input-box>
                        <input-box v-model="item.specifications" class="flex-item mr-10" label="规格"></input-box>
                    </div>
                    <div class="flex">
                        <input-box v-model="item.material" class="flex-item mr-10" label="材质"></input-box>
                        <select-box :list="sprayColorList" v-model="item.relationNo" label="喷涂颜色"></select-box>

                        <!-- <input-box v-model="item.sprayColor" class="flex-item mr-10" label="喷涂颜色"></input-box> -->
                        <input-box v-model="item.number" type="number" class="mr-10" label="数量"></input-box>
                        <date-picker v-model="item.completeTime" class="flex-item" label="完成时间" style="margin-right: 20px;"></date-picker>
                    </div>
                    <div class="flex">
                        <input-box v-model="item.specialRequires" class="flex-item" label="特殊要求" multi-line></input-box>
                        <input-box v-model="item.remark" class="flex-item" label="备注" multi-line></input-box>
                    </div>
                </div>
                <div v-if="form.items.length > 1">
                    <icon-btn small @click="form.items.splice(i, 1)">close</icon-btn>
                </div>
            </div>
            <div class="card a flex-center" @click="addItem()">
                <div class="flex-v-center">
                    <i class="icon mr-10">add</i>
                    <span>添加喷涂零件项</span>
                </div>
            </div>
            <div class="flex">
                <btn big class="mr-20" @click="submit()">提交</btn>
                <btn big flat @click="$router.back()">取消</btn>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "spray-add",
    data() {
        return {
            supplierInfoList: [],
            supplierList: [],
            sprayColorList: [],
            classifyNameList: [],
            form: {
                id: null,
                planner: "",
                items: [
                    {
                        materialClassifyName: "",
                        materialGraphNo: "",
                        completeTime: "",
                        material: "",
                        model: "",
                        specifications: "",
                        sprayColor: "",
                        specialRequires: "",
                        remark: "",
                        number: "",
                        relationNo: ""
                    }
                ]
            },
            isAdd: true
        };
    },
    created() {
        let { sprayNo } = this.$route.query;
        if (sprayNo != "") {
            this.isAdd = false;
            this.getInfo(sprayNo);
        }
        this.getSprayColorList();
        this.getClassifyNameList();
    },
    methods: {
        getInfo(sprayNo) {
            this.$http
                .get(`/haolifa/spray/form/${sprayNo}`)
                .then(res => {
                    this.form = res;
                })
                .catch(e => {
                    this.$toast(e.msg || e.message);
                });
        },
        submit() {
            if (this.isAdd) {
                this.$http
                    .post(`/haolifa/spray/form`, this.form)
                    .then(res => {
                        this.$toast("更新成功");
                        this.$router.push("/spray/add-list");
                    })
                    .catch(e => {
                        this.$toast(e.msg || e.message);
                    });
            } else {
                this.$http
                    .put(`/haolifa/spray/form`, this.form)
                    .then(res => {
                        this.$toast("更新成功");
                        this.$router.push("/spray/add-list");
                    })
                    .catch(e => {
                        this.$toast(e.msg || e.message);
                    });
            }
        },
        addItem() {
            if (this.form.items.length == 5) {
                this.$toast("最多只能添加5条零件项");
                return;
            }
            this.form.items.push({
                materialClassifyName: "",
                materialGraphNo: "",
                completeTime: "",
                material: "",
                model: "",
                specifications: "",
                sprayColor: "",
                specialRequires: "",
                remark: "",
                number: ""
            });
        },
        getSprayColorList() {
            this.$http
                .get(`/haolifa/spray/color/all`)
                .then(res => {
                    this.sprayColorList = res.map(item => {
                        return { value: item.relationNo, text: item.color };
                    });
                })
                .catch(e => {
                    this.$toast(e.msg || e.message);
                });
        },
        getClassifyNameList() {
            this.$http
                .get(`/haolifa/material/classify/list`)
                .then(res => {
                    this.classifyNameList = res.map(item => {
                        return {
                            value: item.classifyName,
                            text: item.classifyName
                        };
                    });
                })
                .catch(e => {
                    this.$toast(e.msg || e.message);
                });
        }
    }
};
</script>

<style lang="less">
.apply-buy-add {
    padding: 20px;
    .card {
        padding: 10px;
        margin: 20px 0;
        background: #f5f5f5;
    }
    .content {
        max-width: 1000px;
        margin: 0 auto;
    }
    select {
        background: none;
        border: none;
        outline: none;
        padding: 5px 20px 5px 10px;
        appearance: none;
    }
}
</style>
