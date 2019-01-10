<template>
    <div class="nuclear-material-nuclear abs scroll-y">
        基本信息：
        <div class="node">

        </div>

    </div>
</template>

<script>
    export default {
        name: 'nuclear-material-nuclear',
        data () {
            return {

            }
        },
        created () {
            let { orderNo } = this.$route.query;
            this.getInfo(orderNo)
        },
        methods: {
            getInfo (orderNo) {
                this.$http.get(`/haolifa/order-product/details/${orderNo}`).then(res => {
                    console.log('详情', res);
                }).catch(e => {
                    this.$toast(e.msg || e.message)
                });
                this.$http.get(`/haolifa/order-product/product-list/${orderNo}`).then(res=>{
                    console.log('成品', res);
                }).catch(e=>{

                });
            },
            cancel () {
                this.$confirm({
                    title: '您确定要离开此页面吗？',
                    text: '您的表单将不会保存',
                    color: 'red',
                    btns: ['取消', '离开'],
                    yes: () => {
                        this.$router.back()
                    }
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
