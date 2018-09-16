<template>
<div class="page-user">
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
    <data-list url="/haolifa/user" method="get" class="f-14">
      <tr slot="header">
        <th style="width: 60px;">序号</th>
        <th>姓名</th>
        <th>用户名</th>
        <th>角色</th>
        <!-- <th>状态</th> -->
        <th class="t-right" style="width: 100px;">操作</th>
      </tr>
      <template slot="item" slot-scope="{ item, index }">
        <td>{{index}}</td>
        <td>{{item.realName}}</td>
        <td>{{item.username}}</td>
        <td>{{item.roles.map(item => item.description).toString() || '-'}}</td>
        <!-- <td>{{item.username}}</td> -->
        <td class="t-right">
          <icon-btn small @click="$router.push('/user/edit?id='+item.id)">edit</icon-btn>
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
  name: 'page-user',
  components: { DataList },
  data () {
    return {
      //
    }
  },
  methods: {
    remove (item) {
      const id = item.id
      this.$confirm({
        title: '删除确认',
        text: `您确定要删除以下人员吗？<br><b>${item.realName}</b>`,
        color: 'red',
        btns: ['取消', '删除'],
        yes: () => {
          this.$http.delete(`haolifa/user/${id}`).then(res => {
            this.$toast('删除成功')
            this.getList()
          }).catch(e => {
            this.$toast(e.message || e.msg)
          })
        }
      })
    }
  }
}
</script>

<style lang="less">
.page-user{
  //
}
</style>
