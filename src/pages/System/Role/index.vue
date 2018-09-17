<template>
<div class="page-role flex-col">
  <div class="flex-v-center tool-bar">
    <div class="flex-item"></div>
    <btn class="b" flat color="#008eff" @click="layer=true">新增角色</btn>
  </div>
  <div class="flex-item scroll-y">
    <transition name="slide-y">
      <table class="data-table" v-if="list.length">
        <tr>
          <th style="width: 60px">序号</th>
          <th>角色描述</th>
          <th>角色名称</th>
          <td style="width: 100px;text-align: right;">操作</td>
        </tr>
        <tr v-for="(item, i) in list" :key="item.id">
          <td>{{i+1}}</td>
          <td>{{item.description}}</td>
          <td>{{item.roleName || '-'}}</td>
          <td class="t-right">
            <icon-btn small @click="edit(item)">edit</icon-btn>
            <icon-btn small @click="remove(item)">delete</icon-btn>
          </td>
        </tr>
      </table>
    </transition>
  </div>
  <layer v-if="layer" :title="form.id ? '编辑部门' : '新增部门'" width="450px">
    <div class="layer-text" style="padding-bottom: 50px;">
      <input-box v-model="form.roleName" label="角色名称" hint="示例: ROLE_ADMIN"></input-box>
      <input-box v-model="form.description" label="角色描述" hint="示例: 管理员"></input-box>
      <select-box filterable :list="depts" v-model="form.department" label="部门"></select-box>
    </div>
    <div class="layer-btns">
      <btn flat @click="cancel">取消</btn>
      <btn flat color="#008eff" @click="submit">保存</btn>
    </div>
  </layer>
</div>
</template>

<script>
import DataList from '@/components/datalist'
import obj2FormData from '@/utils/obj2FormData'

export default {
  name: 'page-role',
  components: { DataList },
  data () {
    return {
      layer: false,
      list: [],
      depts: [],
      form: {
        id: '',
        roleName: '',
        description: '',
        pid: 0,
        department: ''
      }
    }
  },
  created () {
    this.getList()
  },
  watch: {
    layer (show) {
      if (show && !this.depts.length) this.getDept()
    }
  },
  methods: {
    getList () {
      this.$http.get('/haolifa/role').then(res => {
        this.list = res
      }).catch(e => {
        this.$toast(e.message || e.msg)
      })
    },
    getDept () {
      this.$http.get('/haolifa/dept/list').then(res => {
        res.forEach(item => {
          item.value = item.id
          item.text = item.deptName
        })
        this.depts = res
      }).catch(e => {
        this.$toast(e.message || e.msg)
      })
    },
    edit (item) {
      for (let key in this.form) {
        if (key !== 'department') this.form[key] = item[key]
        else this.form.department = item.department.id
      }
      this.layer = true
    },
    remove (item) {
      const id = item.id
      this.$confirm({
        title: '删除确认',
        text: `您确定要删除以下角色吗？<br><b>${item.roleName}</b>`,
        color: 'red',
        btns: ['取消', '删除'],
        yes: () => {
          this.$http.delete('haolifa/role/' + id).then(res => {
            this.$toast('删除成功')
            this.getList()
          }).catch(e => {
            this.$toast(e.message || e.msg)
          })
        }
      })
    },
    cancel () {
      this.form.id = this.form.roleName = this.form.description = ''
      this.layer = false
    },
    vertify () {
      const { roleName, description, department } = this.form
      if (!roleName || !description || !department) {
        this.$toast('请完整输入表单')
        return false
      }
      return true
    },
    submit () {
      const { form } = this
      const method = form.id === '' ? 'post' : 'put'
      if (!this.vertify()) return
      let fd = JSON.parse(JSON.stringify(form))
      fd.department = JSON.parse(JSON.stringify(this.depts.filter(item => item.id === fd.department)[0]))
      delete fd.department.text
      delete fd.department.value
      console.log(fd)
      this.$http[method]('/haolifa/role', fd).then(res => {
        this.getList()
        this.$toast('保存成功')
        this.cancel()
      }).catch(e => {
        this.$toast(e.message || e.msg)
      })
    }
  }
}
</script>

<style lang="less">
.page-role{
  .scroll-y{padding: 0 10px 30px 10px;}
}
</style>

