<template>
    <div class="apply-buy-add">
        <div class="content">
            <h1>创建采购单</h1>
            <div class="flex">
                <date-picker v-model="form.targetDate" hint="必填" class="flex-item" label="预期完成时间" style="margin-right: 20px;"></date-picker>
                <input-box v-model="form.productOrderNo" class="flex-item" label="生产订单号"></input-box>
            </div>

            <div class="b" style="margin: 20px 0 10px;">采购物料项</div>
            <div class="card flex" style="margin-top: 0;" v-for="(item, i) in form.itemList" :key="i">
                <div class="flex-item">
                    <div class="flex">
                        <input-box v-model="item.materialName" class="flex-item mr-10" label="物料名称" hint="必填"></input-box>
                        <input-box v-model="item.materialGraphNo" class="flex-item mr-10" label="物料图号" hint="必填"></input-box>
                        <input-box v-model="item.number" type="number" class=" mr-10" label="数量" hint="必填"></input-box>
                        <input-box v-model="item.unit" class=" mr-10" label="单位" hint="必填"></input-box>
                        <input-box v-model="item.valuation" type="number" class="" label="估价" hint="必填"></input-box>
                    </div>
                    <div class="flex">
                        <input-box v-model="item.purpose" class="flex-item mr-10" label="用途"></input-box>
                        <input-box v-model="item.remark" class="flex-item" label="备注"></input-box>
                    </div>
                </div>
                <div v-if="form.itemList.length > 1"><icon-btn small @click="form.itemList.splice(i, 1)">close</icon-btn></div>
            </div>
            <div class="card a flex-center" @click="addItem()">
                <div class="flex-v-center">
                    <i class="icon mr-10">add</i>
                    <span>添加采购物料项</span>
                </div>
            </div>
            <div class="flex">
                <btn big class="mr-20" @click="submit">提交</btn>
                <btn big flat @click="$router.back()">取消</btn>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'purchsemanage-purchaseadd',
        data () {
            return {
                form: {
                    confirmTime: "",
                    deliveryTime: "",
                    demander: "",
                    demanderAddr: "",
                    demanderLinkman: "",
                    demanderPhone: "",
                    operateTime: "",
                    operatorUserName: "",
                    orderNo: "",
                    suppilerPhone: "",
                    supplierAddr: "",
                    supplierConfirmer: "",
                    supplierLinkman: "",
                    supplierName: "",
                    supplierNo: "",
                    itemList: [],
                },
                item:{
                    material: "",
                    materialGraphNo: "",
                    materialName: "",
                    number: 0,
                    remark: "",
                    specification: "",
                    unit: "",
                    unitPrice: 0,
                    unitWeight: 0
                }
            }
        },
        methods: {
            addItem () {
                this.form.itemList.push({
                    materialName: '',
                    materialGraphNo: '',
                    number: '',
                    unit: '',
                    valuation: '',
                    purpose: '',
                    remark: ''
                })
            },
            submit () {
                const requireItem = {
                    materialName: '物料名称',
                    materialGraphNo: '物料图号',
                    number: '数量',
                    unit: '必填',
                    valuation: '估价'
                }
                const { itemList, targetDate } = this.form
                if (!targetDate) {
                    this.$toast('请填写预计完成时间')
                    return
                }
                itemList.forEach((item, i) => {
                    for (let key in item) {
                        if (requireItem[key] && !item[key]) {
                            this.$toast(`请填写第 ${i + 1} 项 ${requireItem[key]}`)
                            return
                        }
                    }
                })
                this.$http.post('/haolifa/purchase-order/save', this.form).then(res => {
                    const fd = Object.assign({}, res, {
                        flowId: 7,
                        summary: 'test'
                    })
                    this.$http.post('/haolifa/flowInstance/create', fd).then(r => {
                        this.$router.push(`/applybuy?instanceId=${r.instanceId}`)
                    }).catch(e => {
                        this.$toast(e.message || e.msg)
                    })
                }).catch(e => {
                    this.$toast(e.message || e.msg)
                })
            }
        }
    }
</script>

<style lang="less">
    .apply-buy-add{
        padding: 20px;
        .card{padding: 10px;margin: 20px 0;background: #f5f5f5;}
        .content{max-width: 1000px;margin: 0 auto;}
    }
</style>
