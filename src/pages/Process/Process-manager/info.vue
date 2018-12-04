<template>
    <div class="page-manager">
        <div class="flex-v-center tool-bar">
            <!--<div class="flex-v-center search-bar" style="margin-right: 20px;">-->
            <!--<i class="icon f-20 c-8">search</i>-->
            <!--<input type="text" class="flex-item" placeholder="姓名" style="width: 200px;">-->
            <!--</div>-->
            <div class="flex-item"></div>
            <!--<router-link to="/user/add">-->
            <!--<btn class="b" flat color="#008eff">新增用户</btn>-->
            <!--</router-link>-->
        </div>
        <div class="flex-item scroll-y">
            <table class="data-table" v-if="infoList.length">
                <tr>
                    <th style="width: 60px;">ID</th>
                    <th>节点名称</th>
                    <th>审核角色</th>
                    <th>审核人</th>
                    <th class="t-left" style="width: 100px;">操作</th>
                </tr>
                <tr v-for="(item, i) in infoList">
                    <td>{{item.id}}</td>
                    <td>{{item.stepName}}</td>
                    <td>{{item.roleName}}</td>
                    <td>{{item.userNames}}</td>
                    <td>
                        <btn class="b" flat color="#008eff" @click="layer=true">编辑</btn>
                    </td>
                </tr>
            </table>
        </div>
        <layer v-if="layer" :title="审核权限分配" width="450px">
            <div class="layer-text" style="padding-bottom: 50px;">
                <select-box filterable :list="roles" v-model="role.roleId" label="角色"></select-box>
                <!--<select-box filterable :list="users" v-model="form.department.id" label="人员"></select-box>-->
            </div>
            <div class="layer-btns">
                <btn flat @click="cancel">取消</btn>
                <btn flat color="#008eff" @click="submit">保存</btn>
            </div>
        </layer>
    </div>
</template>

<script>
    import DataList from '@/components/datalist'

    export default {
        name: 'processmanager-info',
        components: {DataList},
        data() {
            return {
                layer:false,
                roles:[],
                role:{
                    id:'',
                    name:''
                },
                infoList: []
            }
        },
        created() {
            let { itemId } = this.$route.query
            console.log(itemId);
            this.info(itemId);
        },
        methods: {
            info: function (itemId) {
                this.$http
                    .get(`/haolifa/flow/steps/${itemId}`)
                    .then(res => {
                        console.log(res)
                        this.infoList = res;
                        console.log('infoList', this.infoList)
                    })
                    .catch(e => {
                        this.$toast(e.msg || e.message)
                    })
            }
        }

    }
</script>

<style lang="less">
    .page-manager {
        //
    }
</style>