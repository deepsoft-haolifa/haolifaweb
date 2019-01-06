<template>
  <div class="material-list">
    <div class="flex-v-center tool-bar">
      <div class="flex-v-center search-bar" style="margin-right: 20px;">
        <i class="icon f-20 c-8">search</i>
        入库状态：
        <select v-model="filter.status" class="f-14" @change="$refs.list.update(true)">
          <option v-for="item in statusList" :value="item.status" v-bind:key="item.id">{{item.name}}</option>
        </select>
        <i class="icon" style="margin-left: -20px;pointer-events:none;">arrow_drop_down</i>
      </div>
    </div>
    <div class="flex-item scroll-y">
      <data-list ref="list" :page-size="10"  :param="filter" url="/haolifa/material-inspect/history/page-list" method="get">
        <tr slot="header">
          <th>报检单号</th>
          <th>采购合同号</th>
          <th>批次号</th>
          <th>零件类型</th>
          <th>供应商</th>
          <th>物料名称</th>
          <th>物料图号</th>
          <th>入库数量</th>
          <th>入库状态</th>
          <th class="t-right" style="width: 80px;">操作</th>
        </tr>
        <!-- item: 当前行数据; index: 当前行数 -->
        <template slot="item" slot-scope="{ item, index }">
          <td>{{item.inspectNo}}</td>
          <td>{{item.purchaseNo}}</td>
          <td>{{item.batchNumber}}</td>
          <td>{{item.type==1?'采购零件':'机加工零件'}}</td>
          <td>{{item.supplierName}}</td>
          <td>{{item.materialGraphName}}</td>
          <td>{{item.materialGraphNo}}</td>
          <td>{{item.qualifiedNumber}}</td>
          <td>{{item.status==1?'待入库':'已入库'}}</td>
          <td class="t-right">
            <a href="javascript:;" v-if="item.status == 1" style="margin-right: 3px" class="blue" @click="execStoreRoom(item)">入库</a>
            <a href="javascript:;" v-if="item.status == 1" style="margin-right: 3px" class="blue" @click="storeComplete(item.id)">入库完成</a>
          </td>
        </template>
      </data-list>
    </div>
    <layer v-if="storeRoom.layerShow" :title="'入库'" width="450px">
      <div>
        <div class="flex">
          <input-box v-model="storeRoom.materialGraphNo" class=" mr-10 ml-20" label="物料图号" ></input-box>
          <input-box v-model="storeRoom.quantity" type="number" class=" mr-10" label="入库数量" ></input-box>
          <input-box v-model="storeRoom.price" type="number" class="mr-10" label="采购价格" ></input-box>
        </div>
          <div class="flex">
              <input-box v-model="storeRoom.materialBatchNo" class=" mr-10 ml-20" label="批次号" ></input-box>
              <input-box v-model="storeRoom.orderNo" class=" mr-10" label="采购合同号" ></input-box>
          </div>
        <div class="flex">
          <select-box class="ml-20 mr-10" :list="storeRoom.selectStoreRooms" v-model="storeRoom.roomNo" @change="loadStoreRocks()" label="库房"></select-box>
          <select-box class="mr-10" :list="storeRoom.storeRoomRacks" v-model="storeRoom.rackNo" label="库位"></select-box>
        </div>
        <div class="flex">
          <input-box v-model="storeRoom.supplier" class="mr-10 ml-20" label="供应商"></input-box>
        </div>
      </div>
      <div class="layer-btns">
        <btn flat @click="storeRoom.layerShow=false">取消</btn>
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
                filter: {
                    status: 0
                },
                statusList:[
                    {status:0,name:'全部'},
                    {status:1,name:'待入库'},
                    {status:2,name:'已入库'}],
                storeRoom:{
                    layerShow:false,
                    selectStoreRooms:[],
                    storeRoomRacks:[],
                    materialGraphNo:'',
                    roomNo:'',
                    rackNo:'',
                    quantity:0,
                    supplier:'',
                    materialBatchNo:'',
                    orderNo:'',
                    price:0
                }
            }
        },
        methods: {
            loadStoreRocks(){
                this.$http.get(`/haolifa/store-room/rack/list/${this.storeRoom.roomNo}`).then(res=>{
                    console.log('库位',res)
                    this.storeRoom.storeRoomRacks = res.map(item=>{
                        return {value:item.rackNo,text:item.rackName}
                    })
                    // 默认值
                    this.storeRoom.rackNo = this.storeRoom.storeRoomRacks[0].value;
                }).catch(e=>{
                    this.$toast(e.msg || e.message)
                })
            },
            storeComplete(id){
              this.$http.put(`/haolifa/material-inspect/updateHistoryStatus/${id}`).then(res=>{
                  this.$refs.list.update()
              }).catch(e=>{
                  this.$toast(e.msg || e.message)
              })
            },
            complete(){
                let save = {
                    materialGraphNo:this.storeRoom.materialGraphNo,
                    roomNo:this.storeRoom.roomNo,
                    rackNo:this.storeRoom.rackNo,
                    quantity:this.storeRoom.quantity,
                    supplier:this.storeRoom.supplier,
                    materialBatchNo: this.storeRoom.materialBatchNo,
                    orderNo: this.storeRoom.orderNo,
                    price: Number(this.storeRoom.price)
                }
              this.$http.put(`/haolifa/store-room/entryOut/entryMaterial`,save).then(res=>{
                  this.$toast("入库成功")
                  this.$refs.list.update();
                  this.storeRoom.layerShow = false;
              }).catch(e=>{
                  this.$toast(e.msg || e.message)
              })
            },
            execStoreRoom(item){
                // 获取库房库位
                this.$http.get(`/haolifa/store-room/listInfo?type=1`).then(res=>{
                  console.log(res);
                  this.storeRoom.selectStoreRooms = res.map(item=>{
                      return {value:item.roomNo,text:item.name};
                  });
                  this.storeRoom.roomNo = this.storeRoom.selectStoreRooms[0].value;
                  this.$http.get(`/haolifa/store-room/rack/list/${this.storeRoom.roomNo}`).then(res=>{
                      console.log('库位',res)
                    this.storeRoom.storeRoomRacks = res.map(item=>{
                        return {value:item.rackNo,text:item.rackName}
                    })
                      // 默认值
                      this.storeRoom.rackNo = this.storeRoom.storeRoomRacks[0].value;
                  }).catch(e=>{
                      this.$toast(e.msg || e.message)
                  })
                }).catch(e=>{
                    this.$toast(e.msg || e.message)
                });
                this.storeRoom.materialGraphNo = item.materialGraphNo;
                this.storeRoom.price = item.purchasePrice;
                this.storeRoom.supplier = item.supplierName;
                this.storeRoom.materialBatchNo = item.batchNumber;
                this.storeRoom.orderNo = item.purchaseNo;
                this.storeRoom.quantity = item.qualifiedNumber;
                this.storeRoom.layerShow = true;

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
</style>
