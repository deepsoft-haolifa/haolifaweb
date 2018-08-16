<template>
<div class="main-left c-6 f-14">
  <div class="nav-group" v-for="item in menu" :key="item.name">
    <div class="flex-v-center nav-item nav-toggle a" @click="item.open = !item.open">
      <i class="icon">arrow_drop_{{item.open ? 'up' : 'down'}}</i>
      <span class="flex-item b">{{item.name}}</span>
    </div>
    <div v-if="item.open">
      <router-link
        class="nav-item flex-v-center c-6"
        v-for="m in item.children"
        :key="m.name"
        :title="m.name"
        :to="m.href">{{m.name}}</router-link>
    </div>
  </div>
</div>
</template>

<script>
import menu from './menu'
menu.forEach((item, i) => { item.open = i === 0 })

export default {
  name: 'main-left',
  data () {
    return {
      menu
    }
  }
}
</script>

<style lang="less">
.main-left{
  line-height: 1em;padding: 20px 0;
  .nav-group{margin-top: 5px;}
  .nav-item{height: 32px;padding: 5px 54px;box-sizing: border-box;
    .icon{margin-right: 10px;}
    &:hover{background: #eee;}
    &.nav-toggle{padding: 5px 20px;}
    &.router-link-exact-active{background: #e0f0ff;color: #0175d4;}
  }
}
</style>
