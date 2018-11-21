<template>
<div class="p-p-base" v-if="data">
  <div class="node">
    <div class="node-title b mb-10">
      <!-- <span class="mr-15">销售</span> -->
      <span class="mr-15">发起人：{{data.initUserName}}</span>
      <span>{{data.createTime}}</span>
    </div>
  </div>
</div>
  <div class="p-p-base" v-else-if="invoice">
    <div class="node">

      <div class="node-title b mb-10">
        <!-- 发起人填写的表单-->

        <span class="mr-15">{{invoice.company}}</span>
        <span class="mr-15">{{invoice.linkman}}</span>
        <span class="mr-15">{{invoice.orderNo}}</span>
        <span class="mr-15">{{invoice.totalAmount}}</span>
        <span class="mr-15">{{invoice.mialingAddress}}</span>

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
  invoice () {
      return {
        invoice: null
      }
  },
  created () {
    this.getData()

  },
  updated(){
      this.getInvoice()
  },
  methods: {
    getData () {
      this.$http.get(`/haolifa/flowInstance/flow-history/${this.$route.query.instanceId}`).then(res => {
        res.createTime = moment(res.createTime).format('YYYY-MM-DD HH:mm')

        this.data = res
      }).catch(e => {
        this.$toast(e.message || e.msg)
      })
      // this.$http.get('/haolifa/applyBuy/list?pageNum=1&pageSize=100')
    },
    getInvoice(){
        alert("infos:"+this.data.initUserName)
        this.data.historyInfos.forEach(function(item){

            if(item.formType==7){
                alert("item invoice ok:"+item.stepName);
                this.$http.get('/haolifa/invoice/info/${item.formId}').then(res => {
                    alert("fanhui:"+res)
                    this.invoice = res
                })
            }
        });
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
