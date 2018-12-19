<template>
<div class="page-product-list">
  <div class="flex-v-center tool-bar">
      <div class="flex-item"></div>
      <router-link to="/inspect-product/add">
        <btn class="b" flat color="#008eff">新增质检记录</btn>
      </router-link>
  </div>
  <div class="flex-item scroll-y">
    <data-list ref="list" :page-size="10"  :param="filter"  url="/haolifa/pro-inspect-res/pageInfo" method="post">
      <tr slot="header">
        <th style="width: 60px;">序号</th>
        <th>报检单号</th>
        <th>订单号</th>
        <th>检测数量</th>
        <th>合格数量</th>
        <th>不合格数量</th>
        <th>状态</th>
        <th class="t-right" style="width: 80px;">操作</th>
      </tr>
      <!-- item: 当前行数据; index: 当前行数 -->
      <template slot="item" slot-scope="{ item, index }">
        <td class="c-a">{{index}}</td>
        <td>{{item.inspectNo}}</td>
        <td>{{item.orderNo}}</td>
        <td>{{item.testingNumber}}</td>
        <td>{{item.qualifiedNumber}}</td>
        <td>{{item.unqualifiedNumber}}</td>
        <td>{{item.storageStatus}}</td>
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
  name: 'page-product-list',
  components: { DataList },
  data () {
    return {
      filter: {
        storageStatus: 0
      }
    }
  },
  methods: {
    edit (item) {
      this.$router.push(`/inspect-product/edit?id=${item.inspectNo}`)
    },
    add (item) {
        this.$router.push(`/inspect-product/addRecord?id=${item.inspectNo}`)
    },
      remove (item) {
          this.$confirm({
              title: '删除确认',
              text: `您确定要删除以下送检单吗？<br><b>${item.inspectNo}</b>`,
              color: 'red',
              btns: ['取消', '删除'],
              yes: () => {
                  this.$http.get(`/haolifa/pro-inspect-res/delete/${item.id}`).then(res => {
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
