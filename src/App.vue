<template>
  <div id="app" class="f-14 relative c-5">
    <transition name="fade">
      <router-view/>
    </transition>
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
body{overflow: auto;}
#app {
  width: 100%;height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width: 800px;
}
</style>
