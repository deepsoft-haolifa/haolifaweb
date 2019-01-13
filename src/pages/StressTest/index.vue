
<template>
<div class="page-material-list">
  <div class="flex-v-center tool-bar">
    <div class="flex-v-center search-bar" style="margin-right: 20px;">
      <i class="icon f-20 c-8">search</i>
         <input type="text" class="flex-item" @change="$refs.list.update(true)" v-model="filter.inspectNo" placeholder="报检单号" style="width: 200px;">
         <input type="text" class="flex-item" @change="$refs.list.update(true)" v-model="filter.orderNo" placeholder="订单号" style="width: 200px;">
      <!-- <i class="icon" style="margin-left: -20px;pointer-events:none;">arrow_drop_down</i> -->
    </div>
    <div class="flex-item"></div>
    <router-link to="/stresstest/add">
      <btn class="b" flat color="#008eff">新增{{this.$route.meta.title}}</btn>
    </router-link>
  </div>
  <div class="flex-item scroll-y">
    <data-list ref="list" page-num-str="pageNum" :param="filter" url="/haolifa/pressure-inspect-res/pageInfo" method="post">
      <tr slot="header">
        <th style="width: 60px;">序号</th>
        <th>报检单号</th>
        <th>订单号</th>
        <th>检测数量</th>
        <th>复检数量</th>
        <th>合格数量</th>
        <th>不合格数量</th>
        <th class="t-center" style="width: 80px;">操作</th>
      </tr>
      <!-- item: 当前行数据; index: 当前行数 -->
      <template slot="item" slot-scope="{ item, index }">
        <td class="c-a">{{index}}</td>
        <td>{{item.inspectNo}}</td>
        <td>{{item.orderNo}}</td>
        <td>{{item.testingNumber}}</td>
        <td>{{item.reinspectNumber}}</td>
        <td>{{item.qualifiedNumber}}</td>
        <td>{{item.unqualifiedNumber}}</td>
        <td>
          <!-- <icon-btn small @click="edit(item)">edit</icon-btn>
          <icon-btn small @click="remove(item)">delete</icon-btn> -->
          <a href="javascript:;" class="blue" @click="edit(item)">编辑</a> |
          <a href="javascript:;" class="blue" @click="info(item)">详情</a> |
          <a href="javascript:;" class="red" @click="remove(item)">删除</a>
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
        inspectNo: '',
        orderNo:''
      }
    }
  },
  methods: {
    edit (item) {
      this.$router.push({name:"stresstest-edit", params : item})
      // this.$router.push(`/material/entryMaterial?graphNo=${item.graphNo}&name=${item.name}`)
    },
    info (item) {
      this.$router.push({ name: "stresstest-info", params: item });
      // this.$router.push(`/material/outMaterial?graphNo=${item.graphNo}&name=${item.name}`)
    },
    remove (item) {
      this.$confirm({
        title: '删除确认',
        text: `您确定要删除以下库房吗？<br><b>${item.name}</b>`,
        color: 'red',
        btns: ['取消', '删除'],
        yes: () => {
          this.$http.get(`/haolifa/pressure-inspect-res/delete/${item.id}`).then(res => {
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
.page-material-list{
  //
}
</style>
