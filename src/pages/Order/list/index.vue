<template>
<div class="page-part-list">
  <div class="flex-v-center tool-bar">
    <!-- <div class="flex-v-center search-bar" style="margin-right: 20px;">
      <i class="icon f-20 c-8">search</i>
      <select v-model="filter.type" class="f-14" @change="$refs.list.update(true)">
        <option value="">所有库房</option>
        <option value="1">原料库</option>
        <option value="2">成品库</option>
      </select>
      <i class="icon" style="margin-left: -20px;pointer-events:none;">arrow_drop_down</i>
    </div> -->
    <div class="flex-item"></div>
    <router-link to="/order/add">
      <btn class="b" flat color="#008eff">新增订单</btn>
    </router-link>
  </div>
  <div class="flex-item scroll-y">
    <data-list ref="list" :param="filter" url="/haolifa/order-product/pageInfo" method="post">
      <tr slot="header">
        <th style="width: 60px;">序号</th>
        <th>订单编号</th>
        <th>成品合同订单号</th>
        <th style="width:50px;">订单合同URL</th>
        <th>审批人</th>
        <th>审批结果</th>
        <th>创建时间</th>
        <th>更新时间</th>
        <th class="t-right" style="width: 80px;">操作</th>
      </tr>
      <!-- item: 当前行数据; index: 当前行数 -->
      <template slot="item" slot-scope="{ item, index }">
        <td class="c-a">{{index}}</td>
        <td>{{item.orderNo}}</td>
        <td>{{item.contractOrderNo}}</td>
        <td><a class='fixed-length' :href="item.orderContractUrl" :title="item.orderContractUrl">{{item.orderContractUrl}}</a></td>
        <td>{{item.auditUserId}}</td>
        <td>{{item.auditResult}}</td>
        <td>{{item.auditInfo}}</td>
        <td>{{item.auditTime}}</td>
        <td>{{item.createTime}}</td>
        <td>{{item.updateTime}}</td>
        <td class="t-right">
          <a href="javascript:;" class="blue" @click="progress(item)" style="margin-right: 3px;">发起流程</a>
          <icon-btn small @click="edit(item)">edit</icon-btn>
          <!-- <icon-btn small @click="remove(item)">delete</icon-btn> -->
        </td>
      </template>
    </data-list>
  </div>
</div>
</template>

<script>
import DataList from '@/components/datalist'
export default {
  name: 'page-orders-list',
  components: { DataList },
  data () {
    return {
      loading: false,
      filter: {
        // type: ''
      }
    }
  },
  methods: {
    edit (item) {
      this.$router.push(`/dilivery-bills/edit?id=${item.id}`)
    },
    progress (item) {
      this.$http.post('/haolifa/flowInstance/create', {
        flowId: 1, formId: item.id, formType: 1, formNo: item.orderNo, summary: '生产订单审批' }).then(
        res => {
          this.loading = false
          this.$toast(`发起流程成功,流程ID: ${res.instanceId}`)
        }
      )
    },
    remove (item) {
      this.$confirm({
        title: '删除确认',
        text: `您确定要删除以下发货通知单吗？<br>${item.deliveryNo}`,
        color: 'red',
        btns: ['取消', '删除'],
        yes: () => {
          this.$http.delete(`/haolifa/material/delete/${item.id}`).then(res => {
            this.$toast('删除成功')
            this.$refs.list.update()
          }).catch(e => {
            this.$toast(e.msg)
          })
        }
      })
    }
  }
}
</script>

<style lang="less">
.page-part-list{
  //
}
.fixed-length{
  width: 100px;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
