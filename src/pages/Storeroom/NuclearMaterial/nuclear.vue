<template>
    <div class="nuclear-material-nuclear abs scroll-y">
        <div class="node">
            <div class="flex-item mt-10 mb-10"><span class="f-20">基本信息</span></div>
            <div class="mb-10">
                <span class="b">订单编号：</span><span class="mr-15">{{orderInfo.orderContractNo}}</span>
            </div>
            <div class="mb-10">
                <span class="b">订单附件：</span>
                <span><a class="a" target="_blank" style="color: #008eff" :href="orderInfo.orderContractUrl">下载</a></span>
            </div>
        </div>

        <div class="node mt-20">
            <div class="flex-item mt-10 mb-10"><span class="f-20">成品核料信息</span></div>
            <div class="node" v-for="(item,i) in productInfos">
                <div>
                    <div class="flex">
                        成品号:{{item.productNo}}
                    </div>
                    <div class="flex">
                        成品型号：{{item.productModel}}
                    </div>
                    <div class="flex">
                        物料描述：{{item.materialDescription}}
                    </div>
                    <div class="flex">
                        规格：{{item.specifications}}
                    </div>
                    <div class="flex">
                        数量：{{item.productNumber}}
                    </div>
                    <div class="flex">
                        颜色：{{item.productColor=='null'?'':item.productColor}}
                    </div>
                    <div class="flex">
                        备注：{{item.productRemark}}
                    </div>
                </div>
                <hr/>
                <div class="flex-item mt-10 mb-10"><span>零件选择</span></div>
                <div v-for="classifyItem in item.listDTOS" class="flex-item">
                    <div>
                        <div v-if="classifyItem.list.length>0">
                            <div v-if="classifyItem.type=='fati'">阀体</div>
                            <div v-if="classifyItem.type=='fazuo'">阀座</div>
                            <div v-if="classifyItem.type=='faban'">阀板</div>
                            <div v-if="classifyItem.type=='fagan'">阀杆</div>
                            <!--<div v-if="classifyItem.type=='tongyong'">通用</div>-->
                            <div v-if="classifyItem.type!='tongyong'" v-for="(materItem,j) in classifyItem.list">
                                <radio-box :name="classifyItem.type+i" :label="materItem.graphNo" :text="materItem.graphNo" @change="checkMater(materItem, classifyItem.type, item.id)"/>
                                零件名称：{{materItem.materialName}}
                                配套数量：{{materItem.supportQuantity}}
                                库存数量：{{materItem.currentQuantity}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex mt-20">
            <btn big color="#008eff" @click="nuclearing()">开始核料</btn>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'nuclear-material-nuclear',
        data () {
            return {
                productInfos:[],
                orderInfo:{
                    orderContractNo:'',
                    orderContractUrl:''
                },
                nuclearMater:[]
            }
        },
        created () {
            let { orderNo } = this.$route.query;
            this.getInfo(orderNo)
        },
        methods: {
            checkMater(materItem,type, productId) {
                this.nuclearMater.forEach(item=>{
                    if(item.id == productId) {
                        item.listDTOS.forEach(list=>{
                            if(list.type != 'tongyong'){
                                if(list.type == type && list.type != 'tongyong') {
                                    list.list = [];
                                    list.list.push(materItem);
                                }
                            }

                        })
                    }
                });
                console.log("选择", this.nuclearMater);
            },
            getInfo (orderNo) {
                this.$http.get(`/haolifa/order-product/details?orderNo=${orderNo}`).then(res => {
                    this.orderInfo.orderContractNo = res.orderContractNo;
                    this.orderInfo.orderContractUrl = res.orderContractUrl;
                }).catch(e => {
                    this.$toast(e.msg || e.message)
                });
                this.$http.get(`/haolifa/order-product/pre-check-material?orderNo=${orderNo}`).then(res=>{
                    this.productInfos = Object.assign({},res);
                    this.nuclearMater = JSON.parse(JSON.stringify(res));
                }).catch(e=>{

                });
            },
            nuclearing(){
                this.$http.post(`/haolifa/order-product/check-material?orderNo=${this.orderInfo.orderContractNo}`,this.nuclearMater).then(res=>{
                    console.log(res);
                }).catch(e=>{
                    this.$toast(e.msg || e.message);
                })
            }
        }
    }
</script>

<style lang="less">
    .nuclear-material-nuclear{
        padding: 20px;
        .node{border: 1px solid #e6e6e6;padding: 15px;border-radius: 8px;}
        tr:first-child td{padding: 0;border: none;}
        th{font-weight: normal;color: #888;}
        td{color: #444;}
        th, td{padding: 10px;border: 1px solid #fff;border: 1px solid #ddd;}
    }
</style>
