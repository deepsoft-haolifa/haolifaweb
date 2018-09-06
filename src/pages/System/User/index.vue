<template>
<div class="page-user">
  <div class="abs flex-center" v-if="loading">
    <loading/>
  </div>
  <div class="flex-v-center tool-bar">
    <div class="flex-v-center search-bar" style="margin-right: 20px;">
      <i class="icon f-20 c-8">search</i>
      <input type="text" class="flex-item" placeholder="姓名" style="width: 200px;">
    </div>
    <div class="flex-item"></div>
    <router-link to="/user/add">
      <btn class="b" flat color="#008eff">新增用户</btn>
    </router-link>
  </div>
  <div class="flex-item scroll-y">
    <data-list url="/haolifa/user" method="get">
      <tr slot="header">
        <th>序号</th>
        <th>姓名</th>
        <th>操作</th>
      </tr>
      <template slot="item" slot-scope="{ item, index }">
        <td>{{index}}</td>
        <td>姓名</td>
        <td class="t-right">
          <icon-btn small>edit</icon-btn>
          <icon-btn small>delete</icon-btn>
        </td>
      </template>
    </data-list>
  </div>
</div>
</template>

<script>
import DataList from '@/components/datalist'

export default {
  name: 'page-user',
  components: { DataList },
  data () {
    return {
      //
    }
  },
  methods: {}
}
</script>

<style lang="less">
.page-user{
  //
}
</style>
