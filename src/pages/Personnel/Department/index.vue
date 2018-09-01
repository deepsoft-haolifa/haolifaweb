<template>
<div class="page-department">
  <tree :data="list" :rootId="0" pidTxt="pid"></tree>
  <!-- <draggable-tree :data="list" draggable ref="tree">

  </draggable-tree> -->
</div>
</template>

<script>
import { DraggableTree } from 'vue-draggable-nested-tree'

// function getTreeData (rootNode) {
//   let res = []
//   function getData (node) {
//     let children = node.children
//     children.forEach(item => {
//       res.push({
//         id: item.new ? '' : item.id,
//         deptName: item.deptName,
//         pid: item.pid
//       })
//       if (item.children.length) {
//         getData(item)
//       }
//     })
//   }
//   getData(rootNode)
//   return res
// }

export default {
  name: 'page-department',
  components: { DraggableTree },
  data () {
    return {
      list: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      this.$http.get('/api/dept/list').then(res => {
        res.unshift({ id: 0, deptName: '根目录' })
        // console.log(res)
        this.list = res
      })
    }
  }
}
</script>

<style lang="less">
.page-department{
  //
}
</style>
