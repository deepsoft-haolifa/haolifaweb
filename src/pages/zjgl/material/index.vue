<template>
  <div class="material-list">
    <div class="flex-item scroll-y">
      <data-list class="f-14" ref="list"  :page-size="10" :param="filter"   url="/haolifa/material-inspect/purchase-list/1" method="get">
        <tr slot="header">
          <th style="width: 60px;">序号</th>
          <th>报检单号</th>
          <th>采购合同号</th>
          <th>批次号</th>
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
          <td>{{item.purchaseNo}}</td>
          <td>{{item.batchNumber}}</td>
          <td>{{item.arrivalTime}}</td>
          <td>{{item.supplierName}}</td>
          <td>{{item.createTime}}</td>
          <td>{{statusList[item.status].name}}</td>
          <td class="t-right">
            <a href="javascript:;" style="margin-right: 3px" class="blue" @click="info(item)">查看</a>
            <a href="javascript:;" v-if="item.status == 2" style="margin-right: 3px" class="blue" @click="addInspectHistory(item)">添加质检记录</a>
            <a href="javascript:;" v-if="item.status == 2" style="margin-right: 3px" class="blue" @click="commit(item.id)">质检完成</a>

          </td>
        </template>
      </data-list>
    </div>

    <layer v-if="inspectHistory.completeLayer" :title="'质检记录'" width="650px" style="">
      <div class="flex">
        <input-box v-model="inspectHistory.purchaseNo" class="flex-item mr-20 ml-20" label="采购合同号"></input-box>
        <input-box v-model="inspectHistory.batchNumber" class="flex-item mr-20" label="批次号"></input-box>
      </div>
      <div class="flex mt-15">
        <input-box v-model="inspectHistory.inspectNo" class="mr-20 ml-20 mt-15" label="送检单号"></input-box>
        <select-box class="mt-15" @change="changeMaterialNo()" :list="inspectHistory.selectMaterialNo" v-model="inspectHistory.materialGraphNo" label="物料图号"></select-box>
        <input-box v-model="inspectHistory.materialName" class="mr-20 mt-15" label="物料名称"></input-box>
      </div>
      <div class="flex mt-15">
        <input-box v-model="inspectHistory.testNumber" class="flex-item mr-20 ml-20 mt-15" label="检测数量"></input-box>
        <input-box v-model="inspectHistory.unqualifiedNumber" class="flex-item mr-20 mt-15" label="不合格数量"></input-box>
        <input-box v-model="inspectHistory.qualifiedNumber" class="flex-item mr-20 mt-15" label="合格数量"></input-box>
      </div>
      <div class="flex mt-15">
        <input-box v-model="inspectHistory.handlingSuggestion" class="flex-item mr-20 ml-20 mt-15" label="处理意见"></input-box>
        <input-box v-model="inspectHistory.remark" class="flex-item mr-20 mt-15" label="备注"></input-box>
      </div>
      <div class="layer-btns">
        <btn flat @click="inspectHistory.completeLayer=false">取消</btn>
        <btn flat color="#008eff" @click="complete()">保存</btn>
      </div>
    </layer>

  </div>
</template>

<script>
    import DataList from '@/components/datalist'
    export default {
        name: 'material-list',
        components: { DataList },
        data () {
            return {
                inspectHistory:{
                    completeLayer:false,
                    selectMaterialNo:[],
                    selectMaterialName:[],
                    handlingSuggestion: "",
                    inspectNo: "",
                    materialName: "",
                    materialGraphNo: "",
                    qualifiedNumber: 0,
                    remark: "",
                    testNumber: 0,
                    unqualifiedNumber: 0,
                    batchNumber:'',
                    purchaseNo: '',
                    supplierName:'',
                    supplierNo:''
                },
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
            changeMaterialNo(){
              this.inspectHistory.selectMaterialNo.forEach(item=>{
                  console.log('当前值',item)
                  console.log('change值',this.inspectHistory.materialGraphNo)
                  if(item.value == this.inspectHistory.materialGraphNo) {
                      this.inspectHistory.materialName = item.materialName;
                  }
              })
            },
            complete() {
                let save = {
                    handlingSuggestion: this.inspectHistory.handlingSuggestion,
                    inspectNo: this.inspectHistory.inspectNo,
                    materialGraphName: this.inspectHistory.materialName,
                    materialGraphNo: this.inspectHistory.materialGraphNo,
                    qualifiedNumber: this.inspectHistory.qualifiedNumber,
                    remark: this.inspectHistory.remark,
                    testNumber: this.inspectHistory.testNumber,
                    unqualifiedNumber: this.inspectHistory.unqualifiedNumber,
                    type:1,// 零件送检
                    batchNumber:this.inspectHistory.batchNumber,
                    purchaseNo:this.inspectHistory.purchaseNo,
                    supplierName: this.inspectHistory.supplierName,
                    supplierNo: this.inspectHistory.supplierNo

                }
                this.$http.post(`/haolifa/material-inspect/history/save`,save).then(res=>{
                    this.$toast("添加成功")
                    this.$refs.list.update();
                    this.inspectHistory.completeLayer = false;
                }).catch(e=>{
                    this.$toast(e.msg || e.message)
                })
            },
            commit(itemId) {
                this.$http.post(`/haolifa/material-inspect/updateStatus/${itemId}?status=3`).then(res=>{
                    this.$refs.list.update();
                }).catch(e=>{
                    this.$toast(e.msg || e.message)
                })
            },
            info(item){
                this.$router.push(`/applyBuy-material/info?id=${item.id}&inspectNo=${item.inspectNo}`);
            },
            addInspectHistory(item){
                this.inspectHistory.batchNumber = item.batchNumber;
                this.inspectHistory.purchaseNo = item.purchaseNo;
                this.inspectHistory.inspectNo = item.inspectNo;
                this.inspectHistory.supplierName = item.supplierName;
                this.inspectHistory.supplierNo = item.supplierNo;
                let inspectId = item.id;
              this.$http.get(`/haolifa/material-inspect/info/${inspectId}`).then(res=>{
                  this.inspectHistory.completeLayer = true;
                  let items = res.items;
                  this.inspectHistory.selectMaterialNo=items.map(item=>{
                      return {value:item.materialGraphNo,text:item.materialGraphNo,materialName:item.materialName}
                  });
                  // 默认
                  this.inspectHistory.materialGraphNo = this.inspectHistory.selectMaterialNo[0].value;
                  this.inspectHistory.materialName = this.inspectHistory.selectMaterialNo[0].materialName;

              }).catch(e=>{
                  this.$toast(e.msg || e.message)
              })
            }
        }
    }
</script>

<style lang="less">
  .material-list{
    select{background: none;border: none;outline: none;padding: 5px 20px 5px 10px;appearance: none;}
    .scroll-y{padding-bottom: 40px;}
  }

</style>
