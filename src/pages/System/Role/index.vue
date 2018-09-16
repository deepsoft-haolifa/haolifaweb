<template>
<div class="page-role flex-col">
  <div class="flex-v-center tool-bar">
    <div class="flex-item"></div>
    <btn class="b" flat color="#008eff" @click="layer=true">新增角色</btn>
  </div>
  <div class="flex-item scroll-y">
    <table class="data-table">
      <tr>
        <th style="width: 60px">序号</th>
        <th>角色名称</th>
        <th>标识</th>
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
  </div>
  <layer v-if="layer" :title="form.id ? '编辑部门' : '新增部门'" width="400px">
    <div class="layer-text">
      <input-box v-model="form.roleName" label="部门名称"></input-box>
      <input-box v-model="form.description" label="备注" multi-line></input-box>
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
export default {
  name: 'page-role',
  components: { DataList },
  data () {
    return {
      layer: false,
      list: [],
      form: {
        id: '',
        roleName: '',
        description: '',
        pid: 0
      }
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      this.$http.get('/haolifa/role').then(res => {
        this.list = res
      }).catch(e => {
        this.$toast(e.message || e.msg)
      })
    },
    edit (item) {
      for (let key in this.form) this.form[key] = item[key]
      this.layer = true
    },
    remove (item) {
      const id = item.id
      this.$confirm({
        title: '删除确认',
        text: `您确定要删除以下部门吗？<br><b>${item.roleName}</b>`,
        color: 'red',
        btns: ['取消', '删除'],
        yes: () => {
          this.$http({
            method: 'delete',
            url: 'haolifa/role',
            data: id,
            headers: { 'Content-Type': 'application/json' }
          }).then(res => {
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
    submit () {
      const { form } = this
      const method = form.id === '' ? 'post' : 'put'
      this.$http[method]('/haolifa/role', form).then(res => {
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

