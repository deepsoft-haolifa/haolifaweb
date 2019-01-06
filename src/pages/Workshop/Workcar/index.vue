<template>
<div class="page-material-list">
  <div class="flex-v-center tool-bar">
  </div>
  <div class="flex-item scroll-y">
    <data-list ref="list" :page-size="10"  :param="filter" url="/haolifa/entrust/list" method="post">
      <tr slot="header">
        <th style="width: 60px;">序号</th>
        <th>机加工单号</th>
        <th>物料名称</th>
        <th>物料图号</th>
        <th>数量</th>
        <th>发起时间</th>
        <th>状态</th>
        <th class="t-right" style="width: 80px;">操作</th>
      </tr>
      <!-- item: 当前行数据; index: 当前行数 -->
      <template slot="item" slot-scope="{ item, index }">
        <td class="c-a">{{index}}</td>
        <td>{{item.entrustNo}}</td>
        <td>{{item.materialGraphName}}</td>
        <td>{{item.materialGraphNo}}</td>
        <td>{{item.number}}</td>
        <td>{{item.createTime}}</td>
        <td>{{statusList[item.status+1].name}}</td>
        <td class="t-right">
          <a href="javascript:;"  style="margin-right: 3px" class="blue" @click="edit(item)">车间选择</a>
        </td>
      </template>
    </data-list>
  </div>
</div>
</template>

<script>
import DataList from '@/components/datalist'
export default {
  name: 'page-machining-list',
  components: { DataList },
  data () {
    return {
      filter: {
        // type:0,
        status: 1
      },
        statusList:[
            {status:5,name:'全部'},
            {status:0,name:'未提交'},
            {status:1,name:'审批中'},
            {status:2,name:'处理中'},
            {status:3,name:'处理完成'},
            {status:4,name:'审批不通过'}
            ]
    }
  },
  methods: {
    edit (item) {
      this.$router.push(`/workcar/edit?id=${item.id}`)
    },
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
select{background: none;border: none;outline: none;padding: 5px 20px 5px 10px;appearance: none;}

</style>
