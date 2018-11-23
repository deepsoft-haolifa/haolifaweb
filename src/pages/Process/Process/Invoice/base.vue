<template>
    <div class="p-p-base" v-if="data">
        <div class="node">
            <div class="node-title b mb-10">
                <!-- <span class="mr-15">销售</span> -->
                <span class="mr-15">发起人：{{data.initUserName}}</span>
                <span>{{data.createTime}}</span>
                <!--<span class="mr-15">发起人：{{data.initUserName}}</span>-->
            </div>
        </div>

        <div class="node">

            <div class="node-title b mb-10">
                <!-- 发起人填写的表单-->

                单位：<span class="mr-15">{{invoice.company}}</span></div>
            <div class="node-title b mb-10">
                联系人：<span class="mr-15">{{invoice.linkman}}</span></div>
            <div class="node-title b mb-10">
                合同编号： <span class="mr-15">{{invoice.orderNo}}</span>
            </div>
            <div class="node-title b mb-10">
                合同金额：<span class="mr-15">{{invoice.totalAmount}} （元）</span></div>
            <div class="node-title b mb-10">
                邮寄地址：<span class="mr-15">{{invoice.mialingAddress}}</span>

            </div>
        </div>
        <div class="node">
            <div class="node-title b mb-10">
                <!-- 发起人填写的表单-->

                节点处理角色：经管中心</span></div>
            <div class="flex">
                <input-box v-model="jgzx.auditInfo" class="flex-item mr-10" label="审核意见"></input-box>
            </div>
            <div class="flex">
                <btn big class="mr-20" @click="jgsp">同意</btn>
                <btn big flat @click="$router.back()">退回</btn>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment'

    export default {
        name: 'p-p-base',
        data() {
            return {
                data: {

                    historyInfos: [],
                },
                invoice: {
                    company: '',
                    linkman: '',
                    orderNo: '',
                    totalAmount: '',
                    mialingAddress: ''
                },
                jgzx:{

                }
            }
        },
        created() {
            this.getData()

        },
        methods: {
            getData() {
                this.$http.get(`/haolifa/flowInstance/flow-history/${this.$route.query.instanceId}`).then(res => {
                    res.createTime = moment(res.createTime).format('YYYY-MM-DD HH:mm')
                    this.data = res
                    console.dir(this.data)
                    this.getInvoice()
                }).catch(e => {
                    this.$toast(e.message || e.msg)
                })
                // this.$http.get('/haolifa/applyBuy/list?pageNum=1&pageSize=100')

            },
            getInvoice() {
                this.data.historyInfos.forEach(item => {
                    if (item.formType == 7) {
                        // alert("item invoice ok:"+item.stepName);
                        // console.dir(item.formId)
                        this.$http.get(`/haolifa/invoice/info/${item.formId}`).then(res => {
                            this.invoice = res
                            console.dir(this.invoice)
                        }).catch(err => {
                            console.dir('错了：' + err)
                        })
                    }
                });
            },
            //  经管审批
            jgsp() {
                const jgsp = Object.assign({}, this.jgzx, {
                    auditResult: 1,//发票流程id
                    condition: true,
                    id:${this.$route.query.instanceId},
                    stepId:${this.$route.query.stepId}
                }
                this.$http.post('/haolifa/flowInstance/handleStep', jgsp).then(r => {
                    this.$router.push(`/invoiceflow?instanceId=${r.instanceId}`)
                }).catch(e => {
                    this.$toast(e.message || e.msg)
                }
            }
        }
    }
</script>

<style lang="less">
    .p-p-base {
        padding: 20px;
        .node {
            border: 1px solid #e6e6e6;
            padding: 15px;
            border-radius: 8px;
        }
    }
</style>
