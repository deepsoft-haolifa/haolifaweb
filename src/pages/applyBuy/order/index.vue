<template>
<div class="page-material-list">
  <div class="flex-v-center tool-bar">
    <div class="flex-item"></div>

  </div>
  <div class="flex-item scroll-y">
    <data-list ref="list" :page-size="10" :status=0 :param="filter" url="/haolifa/applyBuy/list" method="get">
      <tr slot="header">
        <th style="width: 60px;">序号</th>
        <th>订单号</th>
        <th>物料名称</th>
        <th>物料图号</th>
        <th>数量</th>
        <th>发起时间</th>
        <th>到货时间</th>
        <th>状态</th>
        <th class="t-right" style="width: 80px;">操作</th>
      </tr>
      <!-- item: 当前行数据; index: 当前行数 -->
      <template slot="item" slot-scope="{ item, index }">
        <td class="c-a">{{index}}</td>
        <td>{{item.productOrderNo}}</td>
        <td>{{item.materialName}}</td>
        <td>{{item.materialGraphNo}}</td>
        <td>{{item.purchaseNumber}}</td>
        <td>{{item.createTime}}</td>
        <td>{{item.arrivalTime}}</td>
        <td>{{item.status == 0 ?'待处理':'已处理'}}</td>
        <td class="t-right">
         <icon-btn small @click="edit(item)">edit</icon-btn>
          <icon-btn small @click="remove(item)">delete</icon-btn>
        </td>
      </template>
    </data-list>
  </div>
</div>
</template>

<script>
import DataList from '@/components/datalist'
export default {
  name: 'page-order-list',
  components: { DataList },
  data () {
    return {
      filter: {
        type:0,
        status: 0
      }
    }
  },
  methods: {
    edit (item) {
        this.$confirm({
            title: '更新确认',
            text: `您确定要更新完成此订单吗？<br><b>${item.materialName}</b>`,
            color: 'red',
            btns: ['取消', '确认'],
            yes: () => {
                this.$http.post(`/haolifa/applyBuy/updateStatus/${item.id}`).then(res => {
                    this.$toast('更新成功')
                    this.$refs.list.update()
                }).catch(e => {
                    this.$toast(e.msg || e.message)
                })
            }
        })
    },
      remove (item) {
          this.$confirm({
              title: '删除确认',
              text: `您确定要删除以下送检单吗？<br><b>${item.materialName}</b>`,
              color: 'red',
              btns: ['取消', '删除'],
              yes: () => {
                  this.$http.get(`/haolifa/entrust/delete/${item.id}`).then(res => {
                      this.$toast('删除成功')
                      this.$refs.list.update()
                  }).catch(e => {
                      this.$toast(e.msg || e.message)
                  })
              }
          })
      }
  }
}
</script>

<style lang="less">
.page-invoice-list{
  select{background: none;border: none;outline: none;padding: 5px 20px 5px 10px;appearance: none;}
  .scroll-y{padding-bottom: 40px;}

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
