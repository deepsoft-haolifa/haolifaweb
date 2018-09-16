<template>
<div class="page-material-list">
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
    <router-link to="/material/add">
      <btn class="b" flat color="#008eff">新增零件</btn>
    </router-link>
  </div>
  <div class="flex-item scroll-y">
    <data-list ref="list" page-num-str="currentPage" :param="filter" url="/haolifa/material/pageInfo" method="get">
      <tr slot="header">
        <th style="width: 60px;">序号</th>
        <th>零件名称</th>
        <th>零件类型</th>
        <th>库存</th>
        <th>单位</th>
        <th>图号</th>
        <th class="t-right" style="width: 80px;">操作</th>
      </tr>
      <!-- item: 当前行数据; index: 当前行数 -->
      <template slot="item" slot-scope="{ item, index }">
        <td class="c-a">{{index}}</td>
        <td>{{item.name}}</td>
        <td>{{item.materialClassifyName}}</td>
        <td>{{item.currentQuantity}}</td>
        <td>{{item.unit}}</td>
        <td>{{item.graphNo}}</td>
        <td class="t-right">
          <!-- <icon-btn small @click="edit(item)">edit</icon-btn>
          <icon-btn small @click="remove(item)">delete</icon-btn> -->
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
        type: ''
      }
    }
  },
  methods: {
    edit (item) {
      this.$router.push(`/material/edit?id=${item.id}`)
    },
    remove (item) {
      this.$confirm({
        title: '删除确认',
        text: `您确定要删除以下库房吗？<br><b>${item.name}</b>`,
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
.page-material-list{
  //
}
</style>
