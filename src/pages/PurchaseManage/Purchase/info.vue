<template>
    <div class="page-supplier-info abs scroll-y">
        <div class="form-content">
            <div class="b f-18 flex-v-center" style="margin-bottom: 20px;">
                <icon-btn class="mr-15" @click="$router.back()">arrow_back</icon-btn>
                <div class="flex-item">订单详情</div>
            </div>
            <!--<no-data v-if="!info.id" style="margin: 50px 0;"/>-->
            <table class="f-14" >
                <tr>
                    <td style="width: 10%;"></td>
                    <td style="width: 10%;"></td>
                    <td style="width: 10%;"></td>
                    <td style="width: 10%;"></td>
                    <td style="width: 10%;"></td>
                    <td style="width: 10%;"></td>
                    <td style="width: 10%;"></td>
                    <td style="width: 10%;"></td>
                    <td style="width: 10%;"></td>
                    <td style="width: 10%;"></td>
                </tr>
                <tr>
                    <td colspan="12" class="b">采购订单</td>
                </tr>
                <tr>
                    <th colspan="6">订单号：SND-12121</th>
                    <td colspan="6">下单日期：2018-12-25</td>
                </tr>
                <tr>
                    <th colspan="6">供方：企业名称</th>
                    <td colspan="6">需方：好利阀</td>
                </tr>
                <tr>
                    <th colspan="6">联系人：供方</th>
                    <td colspan="6">联系人：需方</td>
                </tr>
                <tr>
                    <th colspan="6">联系电话：供方电话</th>
                    <td colspan="6">联系电话：需方电话</td>
                </tr>
                <tr>
                    <th colspan="6">供方地址：</th>
                    <td colspan="6">需方地址：</td>
                </tr>
                <tr>
                    <td colspan="12">兹向贵公司订购以下货品（如下表所列），请于24小时内签字回传！</td>
                </tr>
                <tr>
                    <td colspan="1" class="b">序号</td>
                    <td colspan="1" class="b">产品名称</td>
                    <td colspan="1" class="b">图号</td>
                    <td colspan="1" class="b">规格</td>
                    <th colspan="1" class="b">材质</th>
                    <td colspan="1" class="b">单位</td>
                    <td colspan="1" class="b">数量</td>
                    <td colspan="1" class="b">单重</td>
                    <td colspan="1" class="b">总重</td>
                    <td colspan="1" class="b">单价</td>
                    <td colspan="1" class="b">金额</td>
                    <td colspan="1" class="b">备注</td>
                </tr>
                <tr>
                    <td colspan="1"></td>
                    <td colspan="1"></td>
                    <td colspan="1"></td>
                    <td colspan="1"></td>
                    <td colspan="1"></td>
                    <td colspan="1"></td>
                    <td colspan="1"></td>
                    <td colspan="1"></td>
                    <td colspan="1"></td>
                    <td colspan="1"></td>
                    <td colspan="1"></td>
                </tr>
                <tr>
                    <th colspan="6">总计</th>
                    <td colspan="1"></td>
                    <td colspan="1"></td>
                    <td colspan="1"></td>
                    <td colspan="1"></td>
                    <td colspan="1"></td>
                    <td colspan="1"></td>
                </tr>
                <tr>
                    <th colspan="6">人民币大写</th>
                    <td colspan="6"></td>
                </tr>
                <tr>
                    <td colspan="12"><span class="b">1、交货日期</span>2018-12-29</td>
                </tr>
                <tr>
                    <td colspan="12"><span class="b">2、品质</span>2018-12-29</td>
                </tr>
                <tr>
                    <td colspan="12"><span class="b">3、付款方式</span>2018-12-29</td>
                </tr>
                <tr>
                    <td colspan="12"><span class="b">4、付款条件</span>2018-12-29</td>
                </tr>
                <tr>
                    <td colspan="12"><span class="b">5、</span>2018-12-29</td>
                </tr>
                <tr>
                    <td colspan="12"><span class="b">6、</span>2018-12-29</td>
                </tr>
                <tr>
                    <td colspan="12"><span class="b">7、</span>2018-12-29</td>
                </tr>
                <tr>
                    <td colspan="12"><span class="b">8、</span>2018-12-29</td>
                </tr>
                <tr>
                    <td colspan="4">供方确认：</td>
                    <td colspan="4">批准：</td>
                    <td colspan="4">审核：</td>
                    <td colspan="4">经办：</td>
                </tr>
                <tr>
                    <td colspan="4">2018-12-1</td>
                    <td colspan="4">2018-12-1</td>
                    <td colspan="4">2018-12-1</td>
                    <td colspan="4">2018-12-1</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    import parseJson from '@/utils/parseJson'
    export default {
        name: 'purchsemanage-purchaseinfo',
        data () {
            return {
                loading: false,
                info: {}
            }
        },
        created () {
            this.getInfo()
        },
        methods: {
            getInfo () {
                const id = this.$route.params.formId
                this.info.id = id;
                this.$http.get(`/haolifa//purchase-order/info/${id}`).then(res => {
                    this.info = res
                }).catch(e => {
                    this.$toast(e.msg)
                })
            }
        }
    }
</script>

<style lang="less">
    .page-supplier-info{
        padding: 30px 20px;
        tr:first-child td{padding: 0;border: none;}
        th{font-weight: normal;color: #888;}
        td{color: #444;}
        th, td{padding: 10px;border: 1px solid #fff;border: 1px solid #ddd;}
        .checkbox-list{flex-wrap: wrap;}
        .checkbox-item{line-height: 1em;width: 180px;margin: 5px 0;}
    }
</style>
