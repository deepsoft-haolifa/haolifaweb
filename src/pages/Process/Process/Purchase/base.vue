<template>
<div class="p-p-base" v-if="data">
  <div class="node">
    <div class="node-title mb-10">
      <span class="b">流程描述：</span><span class="mr-15">{{data.summary}}</span>
    </div>
    <div class="node-title mb-10">
      <span class="b">采购单号：</span><span class="mr-15">{{data.formNo}}</span>
    </div>
    <div class="node-title mb-10">
      <span class="b">发 起 人：</span><span class="mr-15">{{data.initUserName}}</span>
    </div>
    <div class="node-title mb-10">
      <span class="b">发起时间：</span><span>{{data.createTime}}</span>
    </div>
    <div class="node-title mb-10">
      <span class="b">待审批附件：</span><span><a class="a" flat style="color: #008eff" :href="orderUrl">下载采购订单</a></span>
    </div>
    <div v-if="data.dealStep" >
      <hr/>
      <div class="flex">
        <input-box v-model="form.demander" class="flex-item" label="需方" style="margin-right: 20px;"></input-box>
        <input-box v-model="form.demanderAddr" class="flex-item" label="需方地址" style="margin-right: 20px;"></input-box>
        <input-box v-model="form.demanderLinkman" class="flex-item" label="需方联系人" style="margin-right: 20px;"></input-box>
        <input-box v-model="form.demanderPhone" class="flex-item" label="需方联系电话" style="margin-right: 20px;"></input-box>
      </div>
    </div>

  </div>
</div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'p-p-base',
  data () {
    return {
      data: null,
      orderUrl:'/haolifa/export/purchaseOrder/'
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$http.get(`/haolifa/flowInstance/flow-history/${this.$route.query.instanceId}`).then(res => {
        res.createTime = moment(res.createTime).format('YYYY-MM-DD HH:mm')
        this.data = res;
        this.orderUrl = this.orderUrl + res.formId;
      }).catch(e => {
        this.$toast(e.message || e.msg)
      })
        this.$toast(data.initUserName)
      this.$http.get('/haolifa/applyBuy/list?pageNum=1&pageSize=100')
    }
  }
}
</script>

<style lang="less">
.p-p-base{
  padding: 20px;
  .node{border: 1px solid #e6e6e6;padding: 15px;border-radius: 8px;}
}
</style>
