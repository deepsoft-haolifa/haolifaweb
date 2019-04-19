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
                <i class="icon f-20 c-8">search</i>
                <input type="text" class="flex-item" v-model="filter.sprayNo" @change="$refs.list.update(true)" placeholder="喷涂加工号" style="width: 200px;">
            </div>
        </div>
        <div class="flex-item scroll-y">
            <data-list ref="list" :page-size="10" :param="filter" url="/haolifa/spray/inspect/list/room" method="post">
                <tr slot="header">
                    <th>喷涂单号</th>
                    <th>零件名称</th>
                    <th>原图号</th>
                    <th>加工后图号</th>
                    <th>入库数量</th>
                    <th>入库状态</th>
                    <th class="t-right" style="width: 80px;">操作</th>
                </tr>
                <!-- item: 当前行数据; index: 当前行数 -->
                <template slot="item" slot-scope="{ item, index }">
                    <td>{{item.sprayNo}}</td>
                    <td>{{item.materialGraphName}}</td>
                    <td>{{item.originalGraphNo}}</td>
                    <td>{{item.materialGraphNo}}</td>
                    <td>{{item.supplierName}}</td>
                    <td>{{item.qualifiedNumber}}</td>
                    <td>{{item.status==1?'待入库':'已入库'}}</td>
                    <td class="t-right">
                        <a href="javascript:;" v-if="item.status == 1" style="margin-right: 3px" class="blue" @click="execStoreRoom(item)">入库</a>
                    </td>
                </template>
            </data-list>
        </div>
        <layer v-if="storeRoom.layerShow" :title="'入库'" width="450px">
            <div>
                <div class="flex">
                    <input-box disabled v-model="storeRoom.materialGraphNo" class="mr-10 ml-20" label="物料图号"></input-box>
                    <input-box disabled v-model="storeRoom.quantity" type="number" class="mr-10" label="入库数量"></input-box>
                </div>
                <div class="flex">
                    <input-box disabled v-model="storeRoom.orderNo" class="ml-20 mr-10" label="喷涂加工单号"></input-box>
                </div>
                <div class="flex">
                    <select-box class="ml-20 mr-10" :list="storeRoom.selectStoreRooms" v-model="storeRoom.roomNo" @change="loadStoreRocks()" label="库房"></select-box>
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
    import DataList from "@/components/datalist";
    export default {
        name: "material-list",
        components: { DataList },
        data() {
            return {
                filter: {
                    status: 0
                },
                statusList: [
                    { status: 0, name: "全部" },
                    { status: 1, name: "待入库" },
                    { status: 2, name: "已入库" }
                ],
                storeRoom: {
                    layerShow: false,
                    selectStoreRooms: [],
                    storeRoomRacks: [],
                    materialGraphNo: "",
                    roomNo: "",
                    rackNo: "",
                    quantity: 0,
                    supplier: "",
                    materialBatchNo: "",
                    orderNo: "",
                    price: 0
                },
                itemId:0
            };
        },
        methods: {
            loadStoreRocks() {
                this.$http
                    .get(`/haolifa/store-room/rack/list/${this.storeRoom.roomNo}`)
                    .then(res => {
                        console.log("库位", res);
                        this.storeRoom.storeRoomRacks = res.map(item => {
                            return { value: item.rackNo, text: item.rackName };
                        });
                        // 默认值
                        this.storeRoom.rackNo = this.storeRoom.storeRoomRacks[0].value;
                    })
                    .catch(e => {
                        this.$toast(e.msg || e.message);
                    });
            },
            storeComplete(id) {
                this.$http
                    .put(`/haolifa/spray/inspect/history/status/${id}`)
                    .then(res => {
                    })
                    .catch(e => {
                        this.$toast(e.msg || e.message);
                    });
            },
            complete() {
                let save = {
                    materialGraphNo: this.storeRoom.materialGraphNo,
                    roomNo: this.storeRoom.roomNo,
                    rackNo: this.storeRoom.rackNo,
                    quantity: this.storeRoom.quantity,
                    orderNo: this.storeRoom.orderNo,
                    price: 0
                };
                this.$http
                    .put(`/haolifa/store-room/entryOut/entryMaterial`, save)
                    .then(res => {
                        this.storeComplete(this.itemId);
                        this.$toast("入库成功");
                        this.$refs.list.update();
                        this.storeRoom.layerShow = false;
                    })
                    .catch(e => {
                        this.$toast(e.msg || e.message);
                    });
            },
            execStoreRoom(item) {
                this.itemId = item.id;
                // 获取库房库位
                this.$http
                    .get(`/haolifa/store-room/listInfo?type=1`)
                    .then(res => {
                        console.log(res);
                        this.storeRoom.selectStoreRooms = res.map(item => {
                            return { value: item.roomNo, text: item.name };
                        });
                        if (this.storeRoom.selectStoreRooms.length > 0) {
                            this.storeRoom.roomNo = this.storeRoom.selectStoreRooms[0].value;
                        }
                        this.$http
                            .get(
                                `/haolifa/store-room/rack/list/${
                                    this.storeRoom.roomNo
                                    }`
                            )
                            .then(res => {
                                console.log("库位", res);
                                this.storeRoom.storeRoomRacks = res.map(item => {
                                    return {
                                        value: item.rackNo,
                                        text: item.rackName
                                    };
                                });
                                // 默认值
                                if (this.storeRoom.storeRoomRacks.length > 0) {
                                    this.storeRoom.rackNo = this.storeRoom.storeRoomRacks[0].value;
                                }
                            })
                            .catch(e => {
                                this.$toast(e.msg || e.message);
                            });
                    })
                    .catch(e => {
                        this.$toast(e.msg || e.message);
                    });
                this.storeRoom.materialGraphNo = item.materialGraphNo
                this.storeRoom.orderNo = item.sprayNo;
                this.storeRoom.quantity = item.qualifiedNumber;
                this.storeRoom.layerShow = true;
            }
        }
    };
</script>

<style lang="less">
    .fixed-length {
        width: 100px;
        display: block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .material-list {
        select {
            background: none;
            border: none;
            outline: none;
            padding: 5px 20px 5px 10px;
            appearance: none;
        }
        .scroll-y {
            padding-bottom: 40px;
        }
    }
</style>
