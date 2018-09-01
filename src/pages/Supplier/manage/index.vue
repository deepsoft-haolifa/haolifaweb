<template>
<div class="page-supplier-manage flex-col">
  <div class="abs flex-center" v-if="loading">
    <loading/>
  </div>
  <div class="flex-v-center tool-bar">
    <div class="flex-v-center search-bar" style="margin-right: 20px;">
      <i class="icon f-20 c-8">search</i>
      <input type="text" class="flex-item" placeholder="供应商名称" style="width: 200px;">
    </div>
    <div class="flex-item"></div>
    <btn class="b" flat color="#008eff">增加</btn>
  </div>
  <div class="flex-item scroll-y">
    <table v-if="list.length" class="data-table">
      <tr>
        <th style="width: 60px;">序号</th>
        <th>企业名称</th>
        <th>编号</th>
        <th>网址</th>
        <th>企业性质</th>
        <th>电话</th>
        <th style="width: 140px;">操作</th>
      </tr>
      <tr v-for="(item, i) in list" :key="item.id">
        <td>{{i+1}}</td>
        <td>{{item.suppilerName}}</td>
        <td>{{item.suppilerNo}}</td>
        <td>{{item.website}}</td>
        <td>{{item.nature}}</td>
        <td>{{item.phone}}</td>
        <td>
          <span class="blue a">入库详情</span>
          <span style="margin: 0 10px;">|</span>
          <span class="blue a">出库详情</span>
        </td>
      </tr>
    </table>
    <pagination v-if="list.length" style="margin-top: 10px;"
      :page="pageNum"
      :size="pageSize"
      :total="total"
      @change="getList"
    ></pagination>

    <div v-else style="margin-top: 100px;">
      <no-data></no-data>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'page-supplier-manage',
  data () {
    return {
      pageNum: 1,
      pageSize: 20,
      total: 0,
      loading: false,
      list: []
    }
  },
  created () {
    this.getList(this.pageNum)
  },
  methods: {
    getList (pageNum) {
      const { pageSize } = this
      this.loading = true
      this.$http.post('/api/supplier/list', { pageNum, pageSize }).then(res => {
        this.list = res.list || []
        this.pageNum = res.pageNum
        this.total = res.total
        this.loading = false
      }).catch(e => {
        this.loading = false
      })
    }
  }
}
</script>

<style lang="less">
.page-supplier-manage{
  height: 100%;
  .scroll-y{margin: 0 15px;}
}
</style>
