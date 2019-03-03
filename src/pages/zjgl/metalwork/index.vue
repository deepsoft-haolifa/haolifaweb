<template>
  <div>
    <div class="flex-v-center tool-bar">
      <div class="flex-v-center search-bar" style="margin-right: 20px;">
        <i class="icon f-20 c-8">search</i>
        状态：
        <select v-model="filter.status" class="f-14" @change="$refs.list.update(true)">
          <option v-for="item in statusList" :value="item.status" v-bind:key="item.id">{{item.name}}</option>
        </select>
        <i class="icon" style="margin-left: -20px;pointer-events:none;">arrow_drop_down</i>
      </div>
    </div>
    <div class="flex-item scroll-y">
      <data-list ref="list" :page-size="10"  :param="filter" url="/haolifa/entrust/list" method="post">
        <tr slot="header">
          <th style="width: 60px;">序号</th>
          <th>机加工单号</th>
          <th>采购合同号</th>
          <th>批次号</th>
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
          <td>{{item.purchaseNo}}</td>
          <td>{{item.batchNumber}}</td>
          <td>{{item.materialGraphName}}</td>
          <td>{{item.materialGraphNo}}</td>
          <td>{{item.number}}</td>
          <td>{{item.createTime}}</td>
          <td>{{rowStatusList[item.status-3].name}}</td>
          <td class="t-right">
            <a href="javascript:;" style="margin-right: 3px" class="blue" @click="addInspectHistory(item)">添加质检记录</a>
            <a href="javascript:;" style="margin-right: 3px" class="blue" @click="info(item)">查看</a>
          </td>
        </template>
      </data-list>
    </div>
    <layer v-if="inspectHistory.completeLayer" :title="'质检记录'" width="650px" style="">
      <div class="flex">
        <input-box disabled="true" v-model="inspectHistory.purchaseNo" class="flex-item mr-20 ml-20" label="采购合同号"></input-box>
        <input-box disabled="true" v-model="inspectHistory.batchNumber" class="flex-item mr-20" label="批次号"></input-box>
      </div>
      <div class="flex mt-15">
        <input-box disabled="true" class="mt-15 ml-20" v-model="inspectHistory.materialGraphNo" label="物料图号"></input-box>
        <input-box disabled="true" v-model="inspectHistory.materialName" class="mr-20 mt-15 ml-20" label="物料名称"></input-box>
      </div>
      <div class="flex mt-15">
        <input-box v-model="inspectHistory.testNumber" class="flex-item mr-20 ml-20 mt-15" label="检测数量"></input-box>
        <input-box v-model="inspectHistory.unqualifiedNumber" class="flex-item mr-20 mt-15" label="不合格数量"></input-box>
        <input-box v-model="inspectHistory.qualifiedNumber" class="flex-item mr-20 mt-15" label="合格数量"></input-box>
      </div>
      <div class="flex mt-15">
        <input-box v-model="inspectHistory.handlingSuggestion" class="flex-item mr-20 ml-20 mt-15" label="处理意见"></input-box>
        <input-box v-model="inspectHistory.remark" class="flex-item mr-20 mt-15" label="不合格现象描述"></input-box>
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
        name: 'metalwork-list',
        components: { DataList },
        data () {
            return {
                inspectHistory:{
                    completeLayer:false,
                    handlingSuggestion: "",
                    inspectNo:'',
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
                    type:3,
                    status: 6
                },
                rowStatusList:[
                    {status:3,name:'加工中'},
                    {status:4,name:'加工完成'}
                ],
                statusList:[
                    {status:6,name:'全部'},
                    {status:3,name:'加工中'},
                    {status:4,name:'加工完成'}
                ]
            }
        },
        methods: {
            info(item) {
                this.$router.push(`/inspect-metalwork/info?id=${item.id}&inspectNo=${item.entrustNo}`);
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
                    type:2,// 零件送检
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
            addInspectHistory(item){
                this.inspectHistory.batchNumber = item.batchNumber;
                this.inspectHistory.purchaseNo = item.purchaseNo;
                this.inspectHistory.supplierName = item.supplierName;
                this.inspectHistory.supplierNo = item.supplierNo;
                this.inspectHistory.materialGraphNo = item.materialGraphNo;
                this.inspectHistory.materialName = item.materialGraphName;
                this.inspectHistory.inspectNo = item.entrustNo;
                this.inspectHistory.completeLayer = true;
            }
        }
    }
</script>

<style lang="less">
  .fixed-length{
    width: 100px;
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  select{background: none;border: none;outline: none;padding: 5px 20px 5px 10px;appearance: none;}

</style>
