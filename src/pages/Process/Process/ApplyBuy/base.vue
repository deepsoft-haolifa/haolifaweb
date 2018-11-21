<template>
<div class="p-p-base" v-if="data">
  <div class="node">
    <div class="node-title b mb-10">
      <!-- <span class="mr-15">销售</span> -->
      <span class="mr-15">{{data.initUserName}}</span>
      <span>{{data.createTime}}</span>
    </div>
    <div class="node-content">
      <div class="flex-v-center">
        <input-box label="接单日期" class="flex-item mr-20"></input-box>
        <input-box label="评审日期" class="flex-item mr-20"></input-box>
        <input-box label="编号" class="flex-item"></input-box>
      </div>
      <div class="flex-v-center">
        <input-box label="交货日期" class="flex-item mr-20"></input-box>
        <input-box label="订单上传" class="flex-item mr-20"></input-box>
        <input-box label="合同附件" class="flex-item"></input-box>
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
      data: null
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$http.get(`/haolifa/flowInstance/flow-history/${this.$route.query.instanceId}`).then(res => {
        res.createTime = moment(res.createTime).format('YYYY-MM-DD HH:mm')
        this.data = res
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
