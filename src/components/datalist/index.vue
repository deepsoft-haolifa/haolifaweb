<template>
<div class="data-list relative">
  <transition name="slide-y">
    <table v-if="list.length" class="data-table">
      <slot name="header">
        <tr>
          <th>表头1</th>
          <th>表头2</th>
        </tr>
      </slot>
      <tr v-for="(item, i) in list" :key="item.id">
        <slot name="item" :item="item" :index="(pageNum - 1) * pageSize + i + 1">
          <td>数据1</td>
          <td>数据2</td>
        </slot>
      </tr>
    </table>
  </transition>
  <div class="flex-v-center" style="margin-top: 10px;">
    <pagination
      class="mr-20"
      v-if="list.length"
      :page="pageNum"
      :size="pageSize"
      :total="total"
      @change="getList"
    ></pagination>
    <span v-if="total" class="f-12 c-6">共 {{total}} 条数据</span>
  </div>

  <div v-if="!list.length && !loading" style="margin-top: 100px;">
    <no-data></no-data>
  </div>
</div>
</template>

<script>
export default {
  name: 'data-list',
  props: {
    method: { type: String, default: 'get' },
    url: { type: String, default: '' },
    pageSize: { type: Number, default: 20 }
  },
  data () {
    return {
      pageNum: 1,
      total: 0,
      loading: false,
      list: []
    }
  },
  created () {
    this.pageNum = this.$route.query.page || 1
    this.getList(this.pageNum)
  },
  methods: {
    getList (pageNum) {
      const { method, url, pageSize } = this
      if (!url) return
      this.loading = true
      this.$http[method](url, {
        pageNum,
        pageSize,
        materialGraphNo: '',
        materialType: 0
      }).then(res => {
        this.list = res.list || []
        this.pageNum = res.pageNum
        let query = this.$route.query
        query.page = res.pageNum
        this.$router.push({ path: this.$route.path, query })
        this.total = res.total
        this.loading = false
      }).catch(e => {
        this.loading = false
        this.$toast(e.message || e.msg || e)
      })
    }
  }
}
</script>

<style lang="less">
.data-list{
//
}
.data-table{
  th, td{padding: 0 10px;height: 36px;}
  tr:nth-child(even){background: #f8f8f8;}
  tr:hover{background: #f2f2f2;}
  tr td .icon-btn{opacity: 0.2;}
  tr:hover td .icon-btn{opacity: 1;}
}
</style>
