<template>
<div class="page-material-list">
  <div class="flex-v-center tool-bar">
    <div class="flex-item"></div>
    <router-link to="/applyBuy-material/add">
      <btn class="b" flat color="#008eff">创建送检单</btn>
    </router-link>
  </div>
  <div class="flex-item scroll-y">
    <data-list ref="list" :page-size="10"  :param="filter" url="/haolifa/material-inspect/purchase-list/0" method="post">
      <tr slot="header">
        <th style="width: 60px;">序号</th>
        <th>报检单号</th>
        <th>到货日期</th>
        <th>供应商名称</th>
        <th>发起时间</th>
        <th>状态</th>
        <th class="t-right" style="width: 80px;">操作</th>
      </tr>
      <!-- item: 当前行数据; index: 当前行数 -->
      <template slot="item" slot-scope="{ item, index }">
        <td class="c-a">{{index}}</td>
        <td>{{item.inspectNo}}</td>
        <td>{{item.arrivalTime}}</td>
        <td>{{item.supplierName}}</td>
        <td>{{item.createTime}}</td>
        <td>{{item.status}}</td>
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
  name: 'page-material-list',
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
      this.$router.push(`/applyBuy-material/edit?id=${item.id}`)
    },
      remove (item) {
          this.$confirm({
              title: '删除确认',
              text: `您确定要删除以下送检单吗？<br><b>${item.inspectNo}</b>`,
              color: 'red',
              btns: ['取消', '删除'],
              yes: () => {
                  this.$http.get(`/haolifa/material-inspect/delete/${item.id}`).then(res => {
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
