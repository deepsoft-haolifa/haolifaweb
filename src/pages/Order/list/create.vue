<template>
    <div class="apply-buy-add">
        <div class="content">
            <div class="title b f-18 mb-10">生成订单</div>
            <!-- <div class='flex'>
        <input-box v-model='form.orderContractNo' class='flex-item' label='成品合同订单号(上传订单合同附件上面)'></input-box>
            </div>-->
            <div class="flex-v-center">
                <date-picker v-model="form.contractSignDate" class="flex-item" label="签订日期" style="margin-right: 20px;"></date-picker>
                <date-picker v-model="form.deliveryDate" class="flex-item" label="发货日期" style="margin-right: 20px;"></date-picker>
                <!-- <input-box v-model="form.contractSignDate" class="flex-item mr-10" label="签订日期"></input-box> -->
                <!-- <input-box v-model="form.deliveryDate" class="flex-item mr-10" label="发货日期"></input-box> -->
                <input-box v-model="form.orderContractNo" class="flex-item mr-10" label="平台编码"></input-box>
            </div>
            <div class="flex-v-center">
                <input-box v-model="form.demandName" class="flex-item mr-10" label="需求方"></input-box>
                <input-box v-model="form.demandAgentName" class="flex-item mr-10" label="需求方代理人"></input-box>
                <input-box v-model="form.demandPhone" class="flex-item mr-10" label="需求方电话"></input-box>
                <input-box v-model="form.demandFax" class="flex-item mr-10" label="需求方传真"></input-box>
            </div>
            <div class="flex-v-center">
                <input-box v-model="form.demandAddress" class="flex-item mr-10" label="需求方地址"></input-box>
            </div>
            <div class="flex-v-center">
                <input-box v-model="form.supplyName" class="flex-item mr-10" label="供应方"></input-box>
                <input-box v-model="form.supplyAgentName" class="flex-item mr-10" label="供应方代理人"></input-box>
                <input-box v-model="form.supplyPhone" class="flex-item mr-10" label="供应方电话"></input-box>
                <input-box v-model="form.supplyFax" class="flex-item mr-10" label="供应方传真"></input-box>
            </div>
            <div class="flex-v-center">
                <input-box v-model="form.supplyAddress" class="flex-item mr-10" label="供应方地址"></input-box>
            </div>
            <div class="flex-v-center">
                <input-box v-model="form.specialRequire" multi-line class="flex-item mr-10" label="特殊要求"></input-box>
            </div>
            <div class="flex-v-center">
                <input-box v-model="form.cargoInformation" class="flex-item mr-10" label="随货资料"></input-box>
            </div>
            <div class="flex-v-center">
                <input-box v-model="form.signBoard" class="flex-item mr-10" label="标牌"></input-box>
            </div>
            <div class="flex-v-center">
                <input-box v-model="form.acceptanceCriteria" class="flex-item mr-10" label="验收标准"></input-box>
            </div>
            <div class="flex-v-center">
                <input-box v-model="form.warrantyPeriod" multi-line class="flex-item mr-10" label="质量保证"></input-box>
            </div>
            <div class="flex-v-center">
                <input-box v-model="form.packagingSpecification" class="flex-item mr-10" label="包装规范"></input-box>
                <input-box v-model="form.transportMode" class="flex-item mr-10" label="运输方式"></input-box>
            </div>
            <div class="flex-v-center">
                <input-box v-model="form.paymentMethod" class="flex-item mr-10" label="付款方式"></input-box>
                <input-box v-model="form.freightCharges" class="flex-item mr-10" label="运费承担"></input-box>
            </div>
            <div class="flex-v-center">
                <input-box v-model="form.receivingInformation" multi-line class="flex-item mr-10" label="收货信息"></input-box>
            </div>
            <div class="flex-v-center">
                <input-box v-model="form.liabilityForBreach" multi-line class="flex-item mr-10" label="违约责任"></input-box>
            </div>

            <div class="title b f-18 mb-10">供货产品列表</div>
            <div class="card flex" style="margin-top: 0;" v-for="(item, i) in form.orderProductAssociates" :key="i">
                <div class="flex-item">
                    <div class="flex">
                        <input-box v-model="item.productNo" class="flex-item mr-10" label="产品ID"></input-box>
                        <input-box v-model="item.productName" class="flex-item mr-10" label="名称"></input-box>
                        <input-box v-model="item.lable" class="mr-10" label="标签属性"></input-box>
                        <input-box v-model="item.productModel" class="flex-item mr-10" label="规格"></input-box>
                    </div>
                    <div class="flex">
                        <input-box v-model="item.productColor" class="flex-item mr-10" label="颜色"></input-box>
                        <input-box v-model.number="item.productNumber" type="number" class="mr-10" label="数量"></input-box>
                        <input-box v-model.number="item.price" class="flex-item mr-10" label="单价"></input-box>
                        <input-box v-model.number="item.totalPrice" class="flex-item mr-10" label="合计"></input-box>
                    </div>
                    <div class="flex">
                        <input-box v-model="item.materialDescription" class="flex-item mr-20" label="材质说明"></input-box>
                        <input-box v-model="item.specifications" class="flex-item mr-20" label="特殊要求"></input-box>
                    </div>
                    <div class="flex">
                        <input-box v-model="item.productRemark" class="flex-item" label="备注"></input-box>
                    </div>
                </div>
                <div v-if="form.orderProductAssociates.length > 1">
                    <icon-btn small @click="form.orderProductAssociates.splice(i, 1)">close</icon-btn>
                </div>
            </div>
            <div class="card a flex-center" @click="addItem()">
                <div class="flex-v-center">
                    <i class="icon mr-10">add</i>
                    <span>添加供货产品列表</span>
                </div>
            </div>
            <div class="flex-v-center">
                <input-box v-model.number="form.totalCount" type="number" class="flex-item mr-10" label="总计数量"></input-box>
                <input-box v-model.number="form.totalPrice" type="number" class="flex-item mr-10" label="总价"></input-box>
                <input-box v-model.number="form.discountTotalPrice" type="number" class="flex-item mr-10" label="优惠后总价"></input-box>
            </div>
            <p style="color:#ccc">* 提交后会自动下载该填写订单表格</p>
            <div class="flex">
                <btn big class="mr-20" @click="submit()">提交</btn>
                <btn big flat @click="reset">重置</btn>
            </div>
        </div>
        <layer v-if="loading">
            <div class="abs t-center" style="padding: 20px;">
                <loading size="30"/>
                <div style="margin-top: 10px;">{{loadingMsg}}</div>
            </div>
        </layer>
    </div>
</template>

<script>
export default {
    name: "order-create",
    data() {
        return {
            loading: false,
            form: {
                totalCount: 0,
                totalPrice: 0,
                discountTotalPrice: 0,
                orderProductAssociates: [
                    {
                        productNo: "",
                        productName: "",
                        lable: "",
                        productModel: "",
                        productColor: "",
                        productNumber: "",
                        price: 0,
                        totalPrice: 0,
                        materialDescription: "",
                        specifications: "",
                        productRemark: ""
                    }
                ]
            }
        };
    },
    mounted() {},
    methods: {
        addItem() {
            this.form.orderProductAssociates.push({
                productNo: "",
                productName: "",
                lable: "",
                productModel: "",
                productColor: "",
                productNumber: "",
                price: 0,
                totalPrice: 0,
                materialDescription: "",
                specifications: "",
                productRemark: ""
            });
            this.form.orderProductAssociates.push({});
            this.$forceUpdate();
        },
        submit() {
            // location.href = "http://d.miaojiebei.com/1552742883995-32.xlsx";
            this.$http
                .post("/haolifa/order-product/generateOrder", this.form)
                .then(res => {
                    location.href = res;
                    this.$toast("创建成功并下载");
                    this.reset();
                })
                .catch(e => {
                    this.$toast(e.message || e.msg);
                });
        },
        reset() {
            this.form = {
                totalCount: 0,
                totalPrice: 0,
                discountTotalPrice: 0,
                orderProductAssociates: [
                    {
                        productNo: "",
                        productName: "",
                        lable: "",
                        productModel: "",
                        productColor: "",
                        productNumber: "",
                        price: 0,
                        totalPrice: 0,
                        materialDescription: "",
                        specifications: "",
                        productRemark: ""
                    }
                ]
            };
        }
    }
};
</script>

<style lang='less'>
.apply-buy-add {
    padding: 20px;
    .card {
        padding: 10px;
        margin: 20px 0;
        background: #f5f5f5;
    }
    .content {
        max-width: 1000px;
        margin: 0 auto;
    }
    select {
        background: none;
        border: none;
        outline: none;
        padding: 5px 20px 5px 10px;
        appearance: none;
    }
}
</style>
