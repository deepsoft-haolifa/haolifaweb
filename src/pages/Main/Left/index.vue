<template>
<div class="main-left c-6 f-14">
  <div
    class="nav-group"
    v-for="item in list"
    v-if="menus.includes(item.id)"
    :key="item.name">
    <div
      class="flex-v-center nav-item nav-toggle a"
      @click="item.open = !item.open">
      <i class="icon">arrow_drop_{{item.open ? 'up' : 'down'}}</i>
      <span class="flex-item b">{{item.name}}</span>
    </div>
    <div v-if="item.open">
      <router-link
        class="nav-item flex-v-center c-6"
        v-for="m in item.children"
        v-if="menus.includes(m.id)"
        :key="m.id"
        :title="m.name"
        :to="m.url"
        :class="{'on': $route.meta.id === m.id}"
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
      list: []
    }
  },
  computed: {
    menus () {
      return this.$store.state.account.menus
    }
  },
  created () {
    let { menus } = this
    menu.forEach(m => {
      m.children = m.children.filter(item => menus.includes(item.id))
    })
    this.list = menu.filter(m => m.children.length)
    // 默认展开对应的菜单
    let id = this.$route.meta.id
    this.list.forEach(group => {
      let open = false
      group.children && group.children.forEach(item => {
        if (item.id === id) open = true
      })
      this.$set(group, 'open', open)
    })
  },
  methods: {
    getList () {
      this.$http.get('/haolifa/menu').then(res => {
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
    &.on{background: #e0f0ff;color: #0175d4;}
  }
}
</style>
