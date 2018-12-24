<template>
  <div class="page-product-list">
    <div class="flex-v-center tool-bar">
      <div class="flex-v-center search-bar" style="margin-right: 20px;">
        <i class="icon f-20 c-8">search</i>
        入库状态：
        <select v-model="filter.storageStatus" class="f-14" @change="$refs.list.update(true)">
          <option v-for="item in statusList" :value="item.status" v-bind:key="item.id">{{item.name}}</option>
        </select>
        <i class="icon" style="margin-left: -20px;pointer-events:none;">arrow_drop_down</i>
      </div>
    </div>
    <div class="flex-item scroll-y">
      <data-list ref="list" :page-size="10"  :param="filter"  url="/haolifa/pro-inspect-res/pageInfo" method="post">
        <tr slot="header">
          <th style="width: 60px;">序号</th>
          <th>报检单号</th>
          <th>订单号</th>
          <th>入库数量</th>
          <th>状态</th>
          <th class="t-right" style="width: 80px;">操作</th>
        </tr>
        <!-- item: 当前行数据; index: 当前行数 -->
        <template slot="item" slot-scope="{ item, index }">
          <td class="c-a">{{index}}</td>
          <td>{{item.inspectNo}}</td>
          <td>{{item.orderNo}}</td>
          <td>{{item.qualifiedNumber}}</td>
          <td>{{item.storageStatus}}</td>
          <td class="t-right">
            <a href="javascript:;" v-if="item.storageStatus == 1" style="margin-right: 3px" class="blue" @click="execStoreRoom(item)">入库</a>
            <a href="javascript:;" v-if="item.storageStatus == 1" style="margin-right: 3px" class="blue" @click="storeComplete(item.inspectNo)">入库完成</a>
          </td>
        </template>
      </data-list>
    </div>
    <layer v-if="storeRoom.layerShow" :title="'入库'" width="450px">
      <div>
        <div class="flex">
          <input-box v-model="storeRoom.orderNo" class="flex-item mr-10 ml-20" label="订单号" ></input-box>
          <input-box v-model="storeRoom.productDepartment" class="flex-item mr-10 ml-20" label="生产部门" ></input-box>
          <select-box class="ml-20" :list="storeRoom.prodeuctModels" v-model="storeRoom.prodeuctModel" @change="loadStoreRocks()" label="成品型号"></select-box>
        </div>
        <div class="flex">
          <input-box v-model="storeRoom.productSpecifications" class="flex-item mr-10 ml-20" label="规格"></input-box>
        </div>
        <div class="flex">
          <input-box  v-model="storeRoom.quantity" type="number" class="ml-20 mr-10" label="入库数量" ></input-box>
          <select-box class="mr-10" :list="storeRoom.selectStoreRooms" v-model="storeRoom.roomNo" @change="loadStoreRocks()" label="库房"></select-box>
          <select-box class="mr-10" :list="storeRoom.storeRoomRacks" v-model="storeRoom.rackNo" label="库位"></select-box>
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
        name: 'page-product-list',
        components: { DataList },
        data () {
            return {
                statusList:[
                    {status:0,name:'全部'},
                    {status:1,name:'待入库'},
                    {status:2,name:'已入库'}],
                storeRoom:{
                    layerShow:false,
                    selectStoreRooms:[],
                    storeRoomRacks:[],
                    prodeuctModels:[],
                    orderNo:'',
                    productDepartment:'',
                    prodeuctModel:'',
                    productNo:'',
                    productSpecifications:'',
                    quantity:0,
                    rackNo:'',
                    roomNo:''
                },
                filter: {
                    storageStatus: 0
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
            storeComplete(inspectNo){
                this.$http.post(`/haolifa/pro-inspect-res/updateStorageStatus?inspectNo=${inspectNo}&storageStatus=2`).then(res=>{
                    this.$refs.list.update()
                }).catch(e=>{
                    this.$toast(e.msg || e.message)
                })
            },
            complete(){
                let save = {
                    orderNo: this.storeRoom.orderNo,
                    productDepartment: this.storeRoom.productDepartment,
                    productModel: this.storeRoom.prodeuctModel,
                    productNo: this.storeRoom.prodeuctModel,
                    productSpecifications: this.storeRoom.productSpecifications,
                    quantity: this.storeRoom.quantity,
                    rackNo: this.storeRoom.rackNo,
                    roomNo:this.storeRoom.roomNo
                }
                this.$http.put(`/haolifa/store-room/entryOut/entryProduct`,save).then(res=>{
                    this.$refs.list.update();
                    this.storeRoom.layerShow = false;
                }).catch(e=>{
                    this.$toast(e.msg || e.message)
                })
            },
            execStoreRoom(item){
                this.storeRoom.orderNo = item.orderNo;
                // 获取成品信息
                this.$http.get(`/haolifa/order-product/product-list/${item.orderNo}`).then(res=>{
                    this.storeRoom.prodeuctModels = res.map(item=>{
                        return {value:item.productModel,text:item.productModel}
                    });
                    this.storeRoom.prodeuctModel = this.storeRoom.prodeuctModels[0].value;
                    res.forEach(item=>{
                        if(item.productModel == this.storeRoom.prodeuctModel) {
                            this.storeRoom.productSpecifications = item.productSpecifications;
                        }
                    });
                }).catch(e=>{
                    this.$toast(e.msg || e.message);
                });
                this.$http.get(`/haolifa/store-room/listInfo?type=2`).then(res=>{
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
                this.storeRoom.layerShow = true;

            }
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
</style>
