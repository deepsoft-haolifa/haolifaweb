<template>
<div class="page-contract flex-col">
  <div class="flex-v-center tool-bar">
    <div class="flex-item"></div>
    <router-link to="/supplier/add">
      <btn class="b" flat color="#008eff">新增合同</btn>
    </router-link>
  </div>
  <div class="flex-item scroll-y">
    <data-list ref="list" method="get" url="/haolifa/contract/list">
      <tr slot="header">
        <th style="width: 60px;">序号</th>
        <th>合同名称</th>
        <th>合同类型</th>
        <th>合同期限</th>
        <th>合同当事人</th>
        <th>合同摘要</th>
        <th>合同金额</th>
        <th class="t-right" style="width: 80px;">操作</th>
      </tr>
      <template slot="item" slot-scope="{ item, index }">
        <td>{{index}}</td>
        <td>
          <router-link class="c-4" :to="'/contract/'+item.id">{{item.contractName}}</router-link>
        </td>
        <td>{{item.contractType}}</td>
        <td>{{item.contractDuration}}</td>
        <td>{{item.contractParty}}</td>
        <td>{{item.contractSummary}}</td>
        <td>￥{{item.totalAmount}}</td>
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
// import obj2FormData from '@/utils/obj2FormData'
export default {
  name: 'page-contract',
  components: { DataList },
  data () {
    return {
      natureList: ['国有', '三资', '集体', '联营', '私营']
    }
  },
  methods: {
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
.page-contract{
  height: 100%;
}
</style>
