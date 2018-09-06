<template>
<div class="account flex-v-center c-4">
  <notification v-if="logined"/>
  <div class="relative" tabindex="1">
    <avatar
      v-if="logined"
      @click="accountShow=!accountShow"
      class="account-avatar-sm"
      size="36"
      :src="account.avatar"/>
      <btn v-else @click="toLogin">登录</btn>
    <!-- <div class="abs" v-if="!logined" v-tooltip:bottom="'未登录'"></div> -->
    <bubble v-if="accountShow && logined" pos="bottom" align="end" @close="accountShow=false" class="account-bubble" >
      <div class="account-ctn t-center">
        <avatar class="account-avatar-big" size="80" :src="account.avatar" />
        <div class="f-18 account-name">{{account.realName}}</div>
        <div class="f-12 c-8 account-info">{{roles}}</div>
        <div class="f-12 c-8 account-info">{{account.username}}</div>
        <btn flat @click="logOut" :loading="loading">退出登录</btn>
      </div>
    </bubble>
  </div>
</div>
</template>

<script>
import Notification from '@/components/notification'
import { resetRouter } from '@/router'
// import loginOrigin from '@/components/login/loginOrigin.js'

export default {
  name: 'account',
  components: { Notification },
  data () {
    return {
      accountShow: false,
      loading: false
    }
  },
  computed: {
    account () {
      return this.$store.state.account
    },
    logined () {
      return this.account.username
    },
    roles () {
      return this.account.roles.map(item => item.roleName).toString()
    }
  },
  methods: {
    logOut () {
      this.loading = true
      this.$http.post(`/haolifa/logout`).then(res => {
        this.clearUserInfo()
      }).catch(e => {
        this.clearUserInfo()
        this.$toast(e.msg || e)
      })
    },
    clearUserInfo () {
      this.loading = false
      this.$store.commit('LOGOUT')
      // this.$store.commit('CLEAR_PERMISSIONS')
      resetRouter([])
      if (!this.$route.meta.open) {
        this.toLogin()
      }
    },
    toLogin () {
      // 刷新页面，以清空路由
      this.$router.replace(`/login`)
    }
  }
}
</script>

<style lang="less">
.account{position: relative;margin: 0 10px;z-index: 10;
  .account-bubble{width: 200px;}
  .notifications-bubble{width: 300px;}
  .account-ctn{padding: 15px;}
  .account-ctn button{margin-top: 15px;}
  /* .icon-btn{margin: 0 15px;} */
  .account-avatar-sm{cursor: pointer;filter: brightness(2);}
  .account-avatar-big{margin-bottom: 15px;}
  .notifications-icon{margin-right: 15px;}
  .account-name{margin-bottom: 10px;}
  .account-info{line-height: 16px;}
}
</style>
