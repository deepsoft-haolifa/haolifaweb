<template>
    <div class="abs scroll-y">
        <div class="form-content page-supplier-info">
            <div class="b f-18 flex-v-center" style="margin-bottom: 20px;">
                <icon-btn class="mr-15" @click="$router.back()">arrow_back</icon-btn>
                <div class="flex-item">质检记录</div>
            </div>
        </div>
        <div class="mt-15 ml-20 mr-20" v-if="inspectHistory.length">
            <div class="flex-item scroll-y ml-20" v-for="(item, i) in inspectHistory">
                <table class="data-table">
                    <tr>
                        <th>质检单号</th>
                        <th>订单号</th>
                        <th>检测数量</th>
                        <th>合格数量</th>
                        <th>不合格数量</th>
                    </tr>
                    <tr>
                        <td>{{item.inspectNo}}</td>
                        <td>{{item.orderNo}}</td>
                        <td>{{item.testingNumber}}</td>
                        <td>{{item.qualifiedNumber}}</td>
                        <td>{{item.unqualifiedNumber}}</td>
                    </tr>
                    <tr>
                        <th colspan="5" style="text-align: center">不合格列表</th>
                    </tr>
                    <tr>
                        <th>成品型号</th>
                        <th>成品规格</th>
                        <th>不合格数量</th>
                        <th colspan="2">不合格原因</th>
                    </tr>
                    <tr v-for="(unitem,i) in item.unqualifiedList">
                        <td>{{unitem.productModel}}</td>
                        <td>{{unitem.productSpecifications}}</td>
                        <td>{{unitem.unqualifiedNumber}}</td>
                        <td colspan="2">{{unitem.reason}}</td>
                    </tr>
                </table>
                <hr>
            </div>
        </div>
    </div>
</template>

<script>
// import parseJson from '@/utils/parseJson'
export default {
    name: "purchsemanage-purchaseinfo",
    data() {
        return {
            loading: false,
            orderNo: "",
            inspectHistory: [],
            pressureInspectHistory: []
        };
    },
    created() {
        this.orderNo = this.$route.query.orderNo;
        this.getInspectHistory();
    },
    methods: {
        getInspectHistory() {
            let params = {
                orderNo: this.orderNo,
                storageStatus: 0,
                pageNum: 1,
                pageSize: 10000,
                inspectNo: ""
            };
            this.$http
                .post(`/haolifa/pro-inspect-res/pageInfo`, params)
                .then(res => {
                    res.list.forEach(item => {
                        this.$http
                            .get(
                                `/haolifa/pro-inspect-res/info/${
                                    item.inspectNo
                                }`
                            )
                            .then(res => {
                                this.inspectHistory.push(res);
                            });
                    });
                })
                .catch(e => {
                    this.$toast(e.msg || e.message);
                });
        }
    }
};
</script>

<style lang="less">
.page-supplier-info {
    padding: 30px 20px;
    tr:first-child td {
        padding: 0;
        border: none;
    }
    th {
        font-weight: normal;
        color: #888;
    }
    td {
        color: #444;
    }
    th,
    td {
        padding: 10px;
        border: 1px solid #fff;
        border: 1px solid #ddd;
    }
    .checkbox-list {
        flex-wrap: wrap;
    }
    .checkbox-item {
        line-height: 1em;
        width: 180px;
        margin: 5px 0;
    }
}
</style>
