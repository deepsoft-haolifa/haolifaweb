<template>
    <div class="apply-buy-add">
        <div class="content">
            <div class="title b f-18 mb-10">新增站内信</div>
            <div class="flex-v-center">
                <select-box v-model="form.users" hint="必填" :list="userList" class="flex-item mr-10" label="收件人"></select-box>
            </div>
            <div class="flex-v-center">
                <input-box v-model="form.title" hint="必填" class="flex-item mr-10" label="标题"></input-box>
            </div>
            <div class="flex-v-center">
                <input-box v-model="form.content" hint="必填" multi-line class="flex-item mr-10" label="内容"></input-box>
            </div>
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
                users: "",
                title: "",
                content: ""
            },
            userList: []
        };
    },
    mounted() {
        this.getUserList();
    },
    methods: {
        submit() {
            if (!this.form.users || !this.form.title || !this.form.content) {
                this.$toast("请输入必填项");
                return;
            }
            this.$http
                .post("/haolifa/hlmail/sendMail", this.form)
                .then(res => {
                    this.$toast("新增成功");
                    this.reset();
                })
                .catch(e => {
                    this.$toast(e.message || e.msg);
                });
        },
        getUserList() {
            this.$http.get("/haolifa/user?pageNum=1&pageSize=100").then(res => {
                this.userList = res.list.map(item => {
                    return {
                        value: item.id + "-" + item.username,
                        text: item.realName
                    };
                });
            });
        },
        reset() {
            this.form = {
                users: "",
                title: "",
                content: ""
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
