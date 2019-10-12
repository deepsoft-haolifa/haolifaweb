<template>
    <div class="page-notification">
        <div class="flex-v-center tool-bar">
            <div class="flex-item"></div>
        </div>
        <data-list ref="list" :param="filter" :url="url">
            <tr slot="header">
                <th style="width: 60px;">序号</th>
                <th>收件人</th>
                <th>标题</th>
                <th>内容</th>
                <th>创建时间</th>
                <th class="t-right" style="width: 80px;">操作</th>
            </tr>
            <template slot="item" slot-scope="{ item, index }">
                <td>{{index}}</td>
                <td>{{item.users}}</td>
                <td>{{item.title }}</td>
                <td>{{item.content}}</td>
                <td>{{item.createTime}}</td>
                <td class="t-right">
                    <a href="javascript:;" v-if="reserveFlag" style="margin-right: 3px" class="blue" @click="reserve(item)">回执 |</a>
                    <!-- <a href="javascript:;" style="margin-right: 3px" class="blue" @click="reserve(item)">回执 |</a> -->
                    <a href="javascript:;" style="margin-right: 3px" class="blue" @click="detail(item)">回执记录</a>
                </td>
            </template>
        </data-list>
        <layer v-if="layer" title="详情" width="50%">
            <div class="layer-text" style="padding-bottom: 50px;">
                <div class="form-content metalwork-info">
                    <table class="f-14">
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
                            <th colspan="2">回执人</th>
                            <th colspan="6">回内容</th>
                            <th colspan="2">回执时间</th>
                        </tr>
                        <tr v-for="item in info" :key="item.id">
                            <td colspan="2">{{item.userName}}</td>
                            <td colspan="6">{{item.content}}</td>
                            <td colspan="2">{{item.createTime}}</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="layer-btns">
                <btn flat color="#008eff" @click="layer=false">关闭</btn>
            </div>
        </layer>
        <layer v-if="relayer" title="回执" width="50%">
            <div class="flex">
                <input-box v-model="reform.content" multi-line class="flex-item mr-20 ml-20" label="内容"></input-box>
            </div>
            <div class="layer-btns">
                <btn flat @click="relayer=false">取消</btn>
                <btn flat color="#008eff" @click="submit()">保存</btn>
            </div>
        </layer>
    </div>
</template>

<script>
import DataList from "@/components/datalist";

export default {
    name: "page-notification",
    components: { DataList },
    data() {
        return {
            layer: false,
            relayer: false,
            filter: {
                userId: ""
            },
            form: {
                id: "",
                title: "",
                content: ""
            },
            url: "",
            account: "",
            info: [],
            reform: {
                content: "",
                mailId: "",
                userId: "",
                userName: ""
            },
            url: "",
            reserveFlag: false
        };
    },
    created() {
        this.account = this.$store.state.account;
        if (this.account.roles) {
            if (
                this.account.roles[0].role == "ROLE_ADMIN" ||
                this.account.roles[0].role == "ROLE_ZG"
            ) {
                this.url = "/haolifa/hlmail/getMails";
                this.reserveFlag = true;
            } else {
                this.url = "/haolifa/hlmail/getMailsByUserId";
                this.filter.userId = this.account.userId;
            }
        } else {
            this.url = "/haolifa/hlmail/getMailsByUserId";
            this.filter.userId = this.account.userId;
        }
    },
    mounted() {
        console.log(this.account);
    },
    methods: {
        submit() {
            if (!this.reform.content) {
                this.$toast("内容不能为空");
                return;
            }
            this.$http
                .post("/haolifa/hlmail/sendMailReve", this.reform)
                .then(res => {
                    this.$toast("回执成功");
                    this.relayer = false;
                })
                .catch(e => {
                    this.$toast(e.msg || e.message);
                });
        },
        detail(item) {
            this.layer = true;
            let param = { mailId: item.id };
            console.log(item.id);
            this.$http
                .get(`/haolifa/hlmail/getHlMailRevesByMailId?mailId=${item.id}`)
                .then(res => {
                    this.info = res;
                    console.log(this.info);
                })
                .catch(e => {
                    this.$toast(e.msg || e.message);
                });
        },
        reserve(item) {
            this.relayer = true;
            this.reform.mailId = item.id;
            this.reform.userId = this.account.userId;
            this.reform.userName = this.account.username;
            this.reform.content = "";
        }
    }
};
</script>

<style lang="less">
.page-notification {
}
.table-info {
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
