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
        <th>客户名称</th>
        <th>客户代号</th>
        <th>出库单价（销售单价）</th>
        <th>生产部门</th>
        <th>成品号</th>
        <th>入库数量（正数）</th>
      </tr>
      <!-- item: 当前行数据; index: 当前行数 -->
      <template slot="item" slot-scope="{ item, index }">
        <td class="c-a">{{index}}</td>
        <td>{{item.customerName}}</td>
        <td>{{item.customerNo}}</td>
        <td>{{item.price}}</td>
        <td>{{item.productDepartment}}</td>
        <td>{{item.productNo}}</td>
        <td>{{item.quantity}}</td>
      </template>
    </data-list>
  </div>
</div>
</template>

<script>
import DataList from '@/components/datalist'
export default {
  name: 'page-info-list',
  components: { DataList },
  data () {
    return {
      filter: {
        type: 1,
        operationType: 0,
        productNo: ''
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
    let { productNo } = this.$route.query
    if (productNo !== undefined && this.$route.name === 'info-list') this.filter.productNo = productNo
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
