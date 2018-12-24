<template>
<div class="page-contract flex-col">
  <div class="flex-v-center tool-bar">
    <button class="btn btn-small" style="background:#ccc" @click="toProcOrder">采购合同</button>
    <span style="height: 22px;margin: 0 5px;border: 2px solid #ccc"></span>
    <button class="btn btn-small"  @click="toProdOrder">生产合同</button>
    <div class="flex-v-center search-bar" style="margin-right: 20px;margin-left: 80px;">
        <i class="icon f-20 c-8">search</i>
        <input type="text" class="flex-item" v-model="filter.orderNo" @change="$refs.list.update(true)" placeholder="采购合同号" style="width: 200px;">
        <select v-model="filter.orderStatus" class="f-14" @change="$refs.list.update(true)">
            <option value="0">合同状态</option>
            <option v-for="item in statusList" :value="item.status" v-bind:key="item.id">{{item.name}}</option>
        </select>
        <i class="icon" style="margin-left: -20px;pointer-events:none;">arrow_drop_down</i>
    </div>
  </div>
  <div class="flex-item scroll-y">
    <data-list ref="list" method="get" :page-size="10" :param="filter" url="/haolifa/order-product/pageInfo">
        <tr slot="header">
            <th style="width: 60px;">序号</th>
            <th>合同编号</th>
            <th>供方单位</th>
            <th>采购完成日期</th>
            <th>订单状态</th>
            <th>创建人</th>
            <th>创建日期</th>
            <th class="t-right" style="width: 80px;">操作</th>
        </tr>
        <template slot="item" slot-scope="{ item, index }">
            <td>{{index}}</td>
            <!--<td>-->
                <!--<router-link class="c-4" :to="'/supplier/'+item.id">{{item.suppilerName}}</router-link>-->
            <!--</td>-->
            <td>{{item.purchaseOrderNo}}</td>
            <td>{{item.supplierName}}</td>
            <td>{{item.deliveryTime}}</td>
            <td>{{statusList[item.status-1].name}}</td>
            <td>{{item.createUserId}}</td>
            <td>{{item.createTime}}</td>
            <td class="t-right">
                <a href="javascript:;" style="margin-right: 3px" class="blue" @click="info(item.id)">查看</a>
                <!-- <a href="javascript:;" style="margin-right: 3px" v-if="item.status == 1" class="blue" @click="approve(item.purchaseOrderNo)">发起审批</a>
                <a href="javascript:;" style="margin-right: 3px" v-if="item.status == 1" class="blue" @click="updatePurchase(item.id)">编辑</a>
                <a href="javascript:;" v-if="item.status == 1" class="blue" @click="deletePurchase(item.purchaseOrderNo)">删除</a>
                <a href="javascript:;" v-if="item.status == 3" class="blue" @click="completePurchase(item.purchaseOrderNo)">采购完成</a> -->
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
        orderNo:'',
        orderStatus:0,
        createUserId:0
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
    // /order-product/pageInfo
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
.page-contract {
    height: 100%;
    select{background: none;border: none;outline: none;padding: 5px 20px 5px 10px;appearance: none;}
  }
</style>