<template>
<div class="abs page-login flex-center">
  <div>
    <div class="card">
      <div class="flex-v-center">
        <img src="../../assets/img/logo_full.png" class="login-logo">
        <span class="flex-item c-a">山西好利智能化管理系统</span>
      </div>
      <div class="login-form">
        <div class="flex-v-center login-account" v-if="useCache">
          <avatar :src="account.avatar"/>
          <div class="flex-item">
            <div>{{account.name}}</div>
            <div class="c-a f-14">{{account.username}}</div>
          </div>
          <icon-btn :disabled="loading" @click="useCache=false;password=''" v-tooltip:top="'切换账号'">keyboard</icon-btn>
        </div>
        <form>
          <input-box v-model="username" :disabled="loading" label="用户名" type="text" v-show="!useCache"/>
          <input-box v-model="password" :disabled="loading" label="密码" type="password" @keydown.enter.native="login"/>
        </form>
        <div class="flex">
          <a class="a f-13 c-a" v-tooltip:top="'请联系管理员修改密码'">忘记密码？</a><span class="flex-item"></span>
          <btn big :loading="loading" @click="login">登录</btn>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { resetRouter } from '@/router'

export default {
  name: 'page-login',
  data () {
    return {
      loading: false,
      useCache: true,
      username: 'admin',
      password: 'admin'
    }
  },
  computed: {
    account () {
      // let account = localStorage.account || ''
      // if (account) return JSON.parse(account)
      // else return null
      return {
        avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534255652460&di=c1960d6d0555519030bd6083679589c5&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F8601a18b87d6277f784629f52a381f30e824fca3.jpg',
        name: '好利发',
        username: 'haolifa'
      }
    }
  },
  methods: {
    login () {
      const { username, password } = this
      this.loading = true
      const fd = new FormData()
      fd.append('username', username)
      fd.append('password', password)
      this.$http.post('/haolifa/login', fd).then(res => {
        res.menus.push('home')
        this.$store.commit('LOGIN', res)
        resetRouter(res.menus)
        this.$router.replace('/')
      }).catch(e => {
        this.loading = false
        this.$toast(e.message || e.msg || e)
      })
    }
  }
}
</script>

<style lang="less">
.page-login{
  background: url('../../assets/img/bg.svg') center / cover;
  .avatar{margin-right: 15px;}
  .login-logo{height: 30px;filter: grayscale(100%);opacity: .5;margin-right: 10px;}
  .login-account{padding: 20px 0;}
  .login-form{padding: 30px 0 10px 0;}
  .card{padding: 40px 35px;width: 420px;margin-bottom: 10px;}
  .input-box{margin-bottom: 15px;}
  input{border-color: #ddd;}
  input:-webkit-autofill{box-shadow: 0 0 0px 100px white inset;}
}
</style>
