<template>
<div class="page-main bg-f abs flex-col">
  <div class="top-bar bg-blue flex-v-center">
    <icon-btn class="c-f" @click="leftOpen=!leftOpen">menu</icon-btn>
    <router-link to="/" class="flex-v-center logo">
      <img src="../../assets/img/logo_full_white.png" alt="LOGO">
      <span class="f-20 c-f">好利阀协同办公</span>
    </router-link>
    <div class="flex-item"></div>
    <account/>
  </div>
  <div class="flex-item flex">
    <div class="left scroll-y" v-if="leftOpen">
      <main-left/>
    </div>
    <div class="flex-item relative">
      <router-view/>
    </div>
  </div>
</div>
</template>

<script>
import Account from '@/components/account'
import MainLeft from './Left/'

export default {
  name: 'page-main',
  components: { Account, MainLeft },
  data () {
    return {
      leftOpen: true
    }
  }
}
</script>

<style lang="less">
.page-main{
  .logo{line-height:20px;margin-left: 20px;color: #d42101;
    img{height: 30px;vertical-align: top;margin-right: 15px;margin-bottom: 2px;}
  }
  .left{width: 260px;border-right: 1px solid rgba(0,0,0,.1);}
}
</style>
