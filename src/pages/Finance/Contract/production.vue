<template>
<div class="page-contract flex-col">
  <div class="flex-v-center tool-bar">
    <button class="btn btn-small" style="background:#ccc" @click="toProcOrder">采购合同</button>
    <span style="height: 22px;margin: 0 5px;border: 2px solid #ccc"></span>
    <button class="btn btn-small"  @click="toProdOrder">生产合同</button>
    <div class="flex-v-center search-bar" style="margin-right: 20px;margin-left: 80px;">
        <i class="icon f-20 c-8">search</i>
        <input type="text" class="flex-item" v-model="filter.orderNo" @change="$refs.list.update(true)" placeholder="采购合同号" style="width: 200px;">
        <!-- <select v-model="filter.orderStatus" class="f-14" @change="$refs.list.update(true)">
            <option value="0">合同状态</option>
            <option v-for="item in statusList" :value="item.status" v-bind:key="item.id">{{item.name}}</option>
        </select> -->
        <i class="icon" style="margin-left: -20px;pointer-events:none;">arrow_drop_down</i>
    </div>
  </div>
  <div class="flex-item scroll-y">
    <data-list ref="list" method="post" :page-size="10" :param="filter"  url="/haolifa/order-product/pageInfo">
        <tr slot="header">
            <th style="width: 60px;">序号</th>
            <th>合同编号</th>
            <!-- <th>供方单位</th> -->
            <!-- <th>采购完成日期</th> -->
            <!-- <th>订单状态</th> -->
            <!-- <th>创建人</th> -->
            <th>创建日期</th>
            <th>合同预览</th>
            <th class="t-right" style="width: 80px;">操作</th>
        </tr>
        <template slot="item" slot-scope="{ item, index }">
            <td>{{index}}</td>
            <td>{{item.orderNo}}</td>
            <!-- <td>{{item.supplierName}}</td> -->
            <!-- <td>{{item.deliveryTime}}</td>
            <td>{{statusList[item.status-1].name}}</td>
            <td>{{item.createUserId}}</td> -->
            <td>{{item.createTime}}</td>
            <td><a target="_blank" v-if="(item.orderContractUrl).match('\.(pdf|jpe?g|png|bmp)$') " :href="item.orderContractUrl">预览</a>
            <a target="_blank"  v-if="!(item.orderContractUrl).match('\.(pdf|jpe?g|png|bmp)$')" :href="'http://view.officeapps.live.com/op/view.aspx?src='+ item.orderContractUrl">预览</a></td>
            <td class="t-right">
                <a href="javascript:;" style="margin-right: 3px" class="blue" @click="info(item.orderNo)">查看</a>
            </td>
        </template>
    </data-list>
  </div>
</div>
</template>

<script>
import DataList from '@/components/datalist'
export default {
  name: 'page-contract-production',
  components: { DataList },
  data () {
    return {
      natureList: ['国有', '三资', '集体', '联营', '私营'],
      statusList:[
                    {status:1,name:'创建'},
                    {status:2,name:'审批中'},
                    {status:3,name:'核料中'},
                    {status:4,name:'待生产'},
                    {status:5,name:'待领料'},
                    {status:6,name:'生产中'},
                    {status:6,name:'生产暂停'},
                    {status:6,name:'生产完成'},
                    {status:6,name:'质检中'},
                    {status:6,name:'已入库'},
                    {status:6,name:'申请发货'},
                    {status:6,name:'已发货'}
                    ],
      filter:{
        // orderNo:'',
        // orderStatus:0,
        // createUserId:0
      },
    }
  },
  methods: {
    toProcOrder(){
      this.$router.push(`/contract`)
    },
    toProdOrder(){
      this.$router.push(`/production`)
    },
    info(orderNo){
      this.$router.push(`/production/info?orderNo=${orderNo}`);
    }
  }
}
</script>

<style lang="less">
.page-contract{
  height: 100%;
}
.page-contract {
    height: 100%;
    select{background: none;border: none;outline: none;padding: 5px 20px 5px 10px;appearance: none;}
  }
</style>