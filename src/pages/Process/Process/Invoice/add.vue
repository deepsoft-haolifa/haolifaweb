<template>
<div class="invoice-add">
  <div class="content">
    <h1>发起发票流程</h1>
    <div class="flex">
      <input-box v-model="form.summary" class=" mr-10" label="流程名称" hint="必填"></input-box>
    </div>
    <div class="flex">
      <input-box v-model="form.company" class="mr-20" label="单位" hint="必填"></input-box>
      <input-box v-model="form.linkman"  class=" mr-20" label="联系人" hint="必填"></input-box>
    </div>
      <div class="flex">
        <input-box v-model="form.orderNo"  class="mr-20" label="合同编号" hint="必填"></input-box>
        <input-box v-model="form.totalAmount" type="number" class="" label="合同金额" hint="必填"></input-box>
      </div>
    <div class="flex">
      <input-box v-model="form.mialingAddress" class=" mr-10" label="邮寄地址" hint="必填"></input-box>
    </div>
    <div class="flex">
      <input-box v-model="form.details" class="flex-item mr-10" label="明细"></input-box>
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
  name: 'invoice-add',
  data () {
    return {
      form: {
          company: '',
          linkman: '',
          orderNo: '',
          totalAmount: '',
          mialingAddress: '',
          details: '',
          type:'0'

      }
    }
  },
    methods: {
        submit() {
            const requireItem = {
                company: '单位',
                linkman: '联系人',
                orderNo: '合同编号',
                totalAmount: '金额',
                mialingAddress: '邮寄地址'
            }
            this.$http.post('/haolifa/invoice/save', this.form).then(res => {
                const fd = Object.assign({}, res, {
                    flowId: 5,//发票流程id
                    summary: 'cjctest'
                })
                this.$http.post('/haolifa/flowInstance/create', fd).then(r => {
                    this.$router.push(`/invoiceflow?instanceId=${r.instanceId}`)
                }).catch(e => {
                    this.$toast(e.message || e.msg)
                })
            }).catch(e => {
                this.$toast(e.message || e.msg)
            })
        }
    }
  // ap_20181115201511123488
}
</script>

<style lang="less">
.invoice-add{
  padding: 20px;
  .card{padding: 10px;margin: 20px 0;background: #f5f5f5;}
  .content{max-width: 1000px;margin: 0 auto;}
}
</style>
