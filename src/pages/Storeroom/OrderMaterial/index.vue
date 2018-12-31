<template>
<div class="page-product-list flex-col">
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
    <!-- <div class="flex-item"></div>
    <router-link to="/product/add">
      <btn class="b" flat color="#008eff">新增成品</btn>
    </router-link> -->
    <span class="f-16" style="margin-left: 10px;">{{this.$route.meta.title}}</span>
  </div>
  <div class="flex-item scroll-y">
    <data-list ref="list" :page-size="10" :param="filter" url="/haolifa/order-product/pageInfo" method="post">
      <tr slot="header">
        <th style="width: 60px;">序号</th>
        <th>订单号</th>
        <th>装配车间</th>
        <th>装配小组</th>
        <th>创建时间</th>
        <th>完成时间</th>
        <th>预览</th>
        
        <th class="t-right" style="width: 80px;">操作</th>
      </tr>
      <!-- item: 当前行数据; index: 当前行数 -->
      <template slot="item" slot-scope="{ item, index }">
        <td class="c-a">{{index}}</td>
        <td>{{item.orderNo}}</td>
        <td>{{item.assemblyShop}}</td>
        <td>{{item.assemblyGroup}}</td>
        <td>{{item.createTime}}</td>
        <td>{{item.finishFeedbackTime}}</td>
        <td>
          <a target="_blank" v-if="(item.orderContractUrl).match('\.(pdf|jpe?g|png|bmp)$') " :href="item.orderContractUrl">预览</a>
          <a target="_blank"  v-if="!(item.orderContractUrl).match('\.(pdf|jpe?g|png|bmp)$')" :href="'http://view.officeapps.live.com/op/view.aspx?src='+ item.orderContractUrl">预览</a></td>
        <td class="t-right">
          <!-- <icon-btn small @click="edit(item)">edit</icon-btn>
          <icon-btn small @click="remove(item)">delete</icon-btn> -->

          <a href="javascript:;" class="blue" @click="info(item)">详情</a>
         <!--  <a href="javascript:;" class="blue" @click="entryList(item)">入库详情</a> |
          <a href="javascript:;" class="blue" @click="outList(item)">出库详情</a> -->
        </td>
      </template>
    </data-list>
  </div>
</div>
</template>

<script>
import DataList from '@/components/datalist'
export default {
  name: 'page-product-list',
  components: { DataList },
  data () {
    return {
      filter: {
           orderNo: "",
           orderStatus: 4
      }
    }
  },
  methods: {
    info (item) {
      this.$router.push(`ordermaterial/info?id=${item.orderNo}`)
    }
  }
}
</script>

<style lang="less">
.page-product-list{
  select{background: none;border: none;outline: none;padding: 5px 20px 5px 10px;appearance: none;}
  .scroll-y{padding-bottom: 40px;}
}
</style>
