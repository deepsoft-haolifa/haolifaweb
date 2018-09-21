<template>
<div class="page-entryMaterial-list">
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
    <router-link to="/product/add">
      <btn class="b" flat color="#008eff">入库</btn>
    </router-link>
  </div>
  <div class="flex-item scroll-y">
    <data-list ref="list" page-num-str="currentPage" :param="filter" url="/haolifa/store-room/entryOut/pageInfo" method="get">
      <tr slot="header">
        <th style="width: 60px;">序号</th>
        <th>零件号</th>
        <th>订单号</th>
        <th>零件购买单价</th>
        <th>入库数量（正数）</th>
        <th>库房Id</th>
        <th>库房货位Id</th>
        <th>库房货位号</th>
        <th>供应商</th>
      </tr>
      <!-- item: 当前行数据; index: 当前行数 -->
      <template slot="item" slot-scope="{ item, index }">
        <td class="c-a">{{index}}</td>
        <td>{{item.materialGraphNo}}</td>
        <td>{{item.orderNo}}</td>
        <td>{{item.price}}</td>
        <td>{{item.quantity}}</td>
        <td>{{item.storeRoomId}}</td>
        <td>{{item.storeRoomRackId}}</td>
        <td>{{item.storeRoomRackNo}}</td>
        <td>{{item.supplier}}</td>
      </template>
    </data-list>
  </div>
</div>
</template>

<script>
import DataList from '@/components/datalist'
export default {
  name: 'page-entryMaterial-list',
  components: { DataList },
  data () {
    return {
      filter: {
        type: 2,
        operationType: 0,
        materialGraphNo: ''
      },
      form: {
        materialGraphNo: '',
        orderNo: '',
        price: '',
        quantity: '',
        storeRoomId: '',
        storeRoomRackId: '',
        storeRoomRackNo: '',
        supplier: '',
      }
    }
  },
  created () {
    let { graphNo } = this.$route.query
    if (graphNo !== undefined && this.$route.name === 'info-list') this.filter.materialGraphNo = graphNo
  },
  methods: {
    
  }
}
</script>

<style lang="less">
.page-entryMaterial-list{
  select{background: none;border: none;outline: none;padding: 5px 20px 5px 10px;appearance: none;}
  .scroll-y{padding-bottom: 40px;}
}
</style>
