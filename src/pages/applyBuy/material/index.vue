<template>
<div class="page-material-list">
  <div class="flex-v-center tool-bar">
    <div class="flex-item"></div>
    <router-link to="/applyBuy-material/add">
      <btn class="b" flat color="#008eff">创建送检单</btn>
    </router-link>
  </div>
  <div class="flex-item scroll-y">
    <data-list class="f-14" ref="list"  :page-size="10" :param="filter"   url="/haolifa/material-inspect/purchase-list/0" method="get">
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
        <td>{{statusList[item.status].name}}</td>
        <td class="t-right">
          <a href="javascript:;" style="margin-right: 3px" class="blue" @click="info(item)">查看</a>
          <a href="javascript:;" v-if="item.status == 1" style="margin-right: 3px" class="blue" @click="edit(item)">编辑</a>
          <a href="javascript:;" v-if="item.status == 1" style="margin-right: 3px" class="blue" @click="remove(item)">删除</a>
          <a href="javascript:;" v-if="item.status == 1" style="margin-right: 3px" class="blue" @click="commit(item.id)">提交</a>
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
      },
        statusList:[
            {status:0,name:'全部'},
            {status:1,name:'未提交'},
            {status:2,name:'质检中'},
            {status:3,name:'质检完成'},
            {status:4,name:'入库中'},
            {status:5,name:'入库完成'},
        ]
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
    },
      commit(itemId) {
        this.$http.post(`/haolifa/material-inspect/updateStatus/${itemId}?status=2`).then(res=>{
          this.$refs.list.update();
        }).catch(e=>{
            this.$toast(e.msg || e.message)
        })
      },
      info(item){
          this.$router.push(`/applyBuy-material/info?id=${item.id}&inspectNo=${item.inspectNo}`);
      }
  }
}
</script>

<style lang="less">
.page-material-list{
  select{background: none;border: none;outline: none;padding: 5px 20px 5px 10px;appearance: none;}
  .scroll-y{padding-bottom: 40px;}
}

</style>
