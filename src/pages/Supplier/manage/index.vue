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
    <router-link to="/supplier/add">
      <btn class="b" flat color="#008eff">新增供应商</btn>
    </router-link>
  </div>
  <div class="flex-item scroll-y">
    <transition name="slide-y">
      <table v-if="list.length" class="data-table">
        <tr>
          <th style="width: 60px;">序号</th>
          <th>企业名称</th>
          <th>编号</th>
          <th>网址</th>
          <th>企业性质</th>
          <th>法人</th>
          <th>电话</th>
          <th class="t-right" style="width: 80px;">操作</th>
        </tr>
        <tr v-for="(item, i) in list" :key="item.id">
          <td>{{ (pageNum - 1) * pageSize + i+1}}</td>
          <td>
            <router-link class="c-4" :to="'/supplier/'+item.id">{{item.suppilerName}}</router-link>
          </td>
          <td>{{item.suppilerNo}}</td>
          <td>{{item.website}}</td>
          <td>{{natureList[item.nature]}}</td>
          <td>{{item.legalPerson}}</td>
          <td>{{item.phone}}</td>
          <td class="t-right">
            <icon-btn small @click="edit(item)">edit</icon-btn>
            <icon-btn small @click="remove(item)">delete</icon-btn>
          </td>
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
      <span class="f-12 c-6">共 {{total}} 条数据</span>
    </div>

    <div v-if="!list.length && !loading" style="margin-top: 100px;">
      <no-data></no-data>
    </div>
  </div>
</div>
</template>

<script>
// import obj2FormData from '@/utils/obj2FormData'
export default {
  name: 'page-supplier-manage',
  data () {
    return {
      pageNum: 1,
      pageSize: 20,
      total: 0,
      loading: false,
      natureList: ['国有', '三资', '集体', '联营', '私营'],
      list: []
    }
  },
  created () {
    this.pageNum = this.$route.query.page || 1
    this.getList(this.pageNum)
  },
  methods: {
    getList (pageNum) {
      const { pageSize } = this
      this.loading = true
      this.$http.post('/haolifa/supplier/list', {
        pageNum,
        pageSize,
        materialGraphNo: '',
        materialType: 0
      }).then(res => {
        this.list = res.list || []
        this.pageNum = res.pageNum
        this.$router.push({path: this.$route.path, query: {page: res.pageNum}})
        this.total = res.total
        this.loading = false
      }).catch(e => {
        this.loading = false
      })
    },
    edit (item) {
      this.$router.push(`/supplier/edit?id=${item.id}`)
    },
    remove (item) {
      this.$confirm({
        title: '删除确认',
        text: `您确定要删除以下供应商吗？<br><b>${item.suppilerName}</b>`,
        color: 'red',
        btns: ['取消', '删除'],
        yes: () => {
          this.$http.get(`/haolifa/supplier/delete?id=${item.id}`).then(res => {
            this.$toast('删除成功')
            this.getList(this.pageNum)
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
.page-supplier-manage{
  height: 100%;
  .scroll-y{margin: 0 15px;}
  td a:hover{color: #008eff;}
}
</style>
