<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import '@/assets/css/common.css'
import '@/assets/css/ui.less'
import '@/assets/css/transition.css'
import '@/assets/css/value.css'

export default {
  name: 'app'
}

</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
