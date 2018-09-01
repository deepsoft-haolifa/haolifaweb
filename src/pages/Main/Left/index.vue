<template>
<div class="main-left c-6 f-14">
  <div class="nav-group" v-for="item in list" :key="item.name">
    <div
      class="flex-v-center nav-item nav-toggle a"
      v-if="item.children && item.children.length"
      @click="item.open = !item.open">
      <i class="icon">arrow_drop_{{item.open ? 'up' : 'down'}}</i>
      <span class="flex-item b">{{item.name}}</span>
    </div>
    <router-link
      class="nav-item b flex-v-center c-6"
      v-else
      :to="item.url"
    >{{item.name}}</router-link>

    <div v-if="item.open">
      <router-link
        class="nav-item flex-v-center c-6"
        replace
        v-for="m in item.children"
        :key="m.name"
        :title="m.name"
        :to="m.url"
      >{{m.name}}</router-link>
    </div>
  </div>
</div>
</template>

<script>
import menu from './menu'
// menu.forEach((item, i) => { item.open = i === 0 })

export default {
  name: 'main-left',
  data () {
    return {
      list: menu
    }
  },
  created () {
    // this.getList()
    // 默认展开对应的菜单
    let path = this.$route.path
    this.list.forEach(group => {
      let open = false
      group.children && group.children.forEach(item => {
        if (item.path === path) open = true
      })
      this.$set(group, 'open', open)
    })
  },
  methods: {
    getList () {
      this.$http.get('/api/menu').then(res => {
        res.forEach(item => {
          item.open = false
        })
        this.list = res
      })
    }
  }
}
</script>

<style lang="less">
.main-left{
  line-height: 1em;padding: 20px 0;white-space: nowrap;
  .nav-group{margin-top: 5px;}
  .nav-item{height: 32px;padding: 5px 54px;box-sizing: border-box;
    .icon{margin-right: 10px;}
    &:hover{background: #eee;}
    &.nav-toggle{padding: 5px 20px;}
    &.router-link-exact-active{background: #e0f0ff;color: #0175d4;}
  }
}
</style>
