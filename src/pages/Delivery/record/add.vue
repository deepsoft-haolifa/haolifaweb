<template>
    <div class='page-part-add abs scroll-y'>
        <div class='form-content'>
            <div class='title b f-18'>{{form.id ? '编辑' : '新增'}}发货记录</div>
            <div class='flex-v-center'>
                <input-box v-model='form.contractOrderNo' class='flex-item' label='订单号'></input-box>
                <input-box v-model="form.deliveryClassify" class="flex-item" label="发货分类"></input-box>
                <input-box v-model="form.deliveryNoticeNo" class="flex-item" label="发货通知单号"></input-box>
                <input-box v-model="form.deliveryTime" class="flex-item" label="发货日期/到货日期"></input-box>
                <input-box v-model="form.operationNo" class="flex-item" label="运营单号"></input-box>
                <input-box v-model="form.customerNo" class="flex-item" label="客户代号 "></input-box>
            </div>
            <div class='flex-v-center'>
                <input-box v-model='form.productCount' class='flex-item' label='成品发货数量'></input-box>
                <input-box v-model="form.packingMode" class="flex-item" label="包装方式"></input-box>
                <input-box v-model="form.pieceCount" class="flex-item" label="件数"></input-box>
                <input-box v-model="form.transportCompany" class="flex-item" label="承运单位"></input-box>
                <input-box v-model="form.courierNo" class="flex-item" label="运单号"></input-box>
            </div>
            <div class='flex-v-center'>
                <input-box v-model='form.collectProvince' class='flex-item' label='省市'></input-box>
                <input-box v-model="form.collectAddress" class="flex-item" label="地址"></input-box>
                <input-box v-model="form.collectName" class="flex-item" label="收货人"></input-box>
                <input-box v-model="form.collectPhone" class="flex-item" label="收货人电话"></input-box>
            </div>
            <div class='flex-v-center'>
                <input-box v-model='form.weightPiece' class='flex-item' label='重量/件数'></input-box>
                <input-box v-model="form.pricePiece" class="flex-item" label="单价/计件"></input-box>
                <input-box v-model="form.deliveryFee" class="flex-item" label="送货费"></input-box>
                <input-box v-model="form.totalFee" class="flex-item" label="运费总金额"></input-box>
                <input-box v-model="form.settlementWay" class="flex-item" label="结算方式"></input-box>
            </div>
            <div class="flex-v-center">
                <input-box v-model="form.remark" class="flex-item mr-10" multi-line label="备注"></input-box>
            </div>
            <div class='flex-v-center' style='margin: 20px 0;'>
                <btn big class='mr-20' @click='submit' :disabled='!canSubmit'>提交</btn>
                <btn big flat bg class='mr-20' @click='cancel'>取消</btn>
            </div>
            <layer v-if="loading">
                <div class="abs t-center" style="padding: 20px;">
                    <loading size="30"/>
                    <div style="margin-top: 10px;">{{loadingMsg}}</div>
                </div>
            </layer>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'page-part-add',
        data() {
            return {
                loading: false,
                loadingMsg: '',
                fileList: [],
                form: {
                    id: '',
                    contractOrderNo: '',
                    deliveryUrl: '',
                    deliveryClassify: '',
                    deliveryNoticeNo: '',
                    deliveryTime: '',
                    operationNo: '',
                    customerNo: '',
                    productCount: '',
                    packingMode: '',
                    pieceCount: '',
                    transportCompany: '',
                    courierNo: '',
                    collectProvince: '',
                    collectAddress: '',
                    collectName: '',
                    collectPhone: '',
                    weightPiece: '',
                    pricePiece: '',
                    deliveryFee: '',
                    totalFee: '',
                    settlementWay: '',
                    remark: '',
                }
            }
        },
        computed: {
            canSubmit() {
                const {form} = this
                return form.contractOrderNo && form.deliveryUrl
            }
        },
        created() {
            let {id} = this.$route.query
            if (id !== undefined && this.$route.name === 'delivery-record-edit') this.getInfo(id)
        },
        methods: {
            getInfo(id) {
                this.$http
                    .get(`/haolifa/delivery/getInfo/${id}`)
                    .then(res => {
                        this.form = res
                    })
                    .catch(e => {
                        this.$toast(e.msg || e.message)
                    })
            },
            cancel() {
                this.$confirm({
                    title: '您确定要离开此页面吗？',
                    text: '您的表单将不会保存',
                    color: 'red',
                    btns: ['取消', '离开'],
                    yes: () => {
                        this.$router.back()
                    }
                })
            },
            submit() {
                const {form} = this
                this.loading = true
                this.loadingMsg = '正在保存'
                this.$http.post('/haolifa/delivery/save', form).then(res => {
                    this.loading = false
                    this.$router.replace('/delivery-record')
                }).catch(e => {
                    this.loading = false
                    this.$toast(e.msg || e.message)
                })
            }
        }
    }
</script>

<style lang='less'>
    .page-part-add {
        padding: 30px 20px;
        .title {
            margin-bottom: 20px;
        }
    }
</style>
