<template>
<div class="page-cost">
  <div class="flex-v-center tool-bar">
    <div class="flex-item"></div>
    <btn class="b" flat color="#008eff" @click="layer=true">添加费用</btn>
  </div>
  <div class="flex-item scroll-y">
    <data-list class="f-14" ref="list" method="post" url="/haolifa/expenses/list">
      <tr slot="header">
        <th style="width: 60px;">序号</th>
        <th>提交人</th>
        <th>费用类别</th>
        <th>总费用</th>
        <th class="t-right" style="width: 80px;">操作</th>
      </tr>
      <template slot="item" slot-scope="{ item, index }">
        <td>{{index}}</td>
        <td>{{item.commitUser}}</td>
        <td>{{item.expensesClassify}}</td>
        <td>￥ {{item.totalAmount}}</td>
        <td class="t-right">
          <icon-btn small @click="edit(item)">edit</icon-btn>
          <icon-btn small @click="remove(item)">delete</icon-btn>
        </td>
      </template>
    </data-list>
  </div>
  <layer v-if="layer" :title="form.id ? '编辑发票' : '新增发票'" width="450px">
    <div class="layer-text" style="padding-bottom: 50px;">
      <input-box v-model="form.commitUser" label="提交人"></input-box>
      <input-box v-model="form.expensesClassify" label="费用类别"></input-box>
      <input-box type="number" v-model="form.totalAmount" label="总费用"></input-box>
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
  name: 'page-cost',
  components: { DataList },
  data () {
    return {
      layer: false,
      form: {
        id: '',
        commitUser: '',
        expensesClassify: '',
        totalAmount: ''
      }
    }
  },
  methods: {
    edit (item) {
      for (let key in this.form) this.form[key] = item[key]
      this.layer = true
    },
    vertify () {
      for (let key in this.form) {
        let item = this.form[key]
        if (!item && item !== 0 && key !== 'id') {
          this.$toast('请输入完整信息' + key)
          return false
        }
      }
      return true
    },
    submit () {
      if (!this.vertify()) return
      const { form } = this
      this.$http.post('/haolifa/expenses/' + (form.id ? 'update' : 'save'), form).then(res => {
        this.$refs.list.update()
        this.cancel()
        this.$toast('保存成功')
      }).catch(e => {
        this.$toast(e.message || e.meg)
      })
    },
    cancel () {
      this.form = {
        id: '',
        commitUser: '',
        expensesClassify: '',
        totalAmount: ''
      }
      this.layer = false
    },
    remove (item) {
      this.$confirm({
        title: '删除确认',
        text: `您确定要删除以下发票记录吗？<br>
          提交人：<b>${item.commitUser}</b><br>
          类别：<b>${item.expensesClassify}</b><br>
          总费用：<b>￥${item.totalAmount}</b><br>`,
        color: 'red',
        btns: ['取消', '删除'],
        yes: () => {
          this.$http.get(`/haolifa/expenses/delete/${item.id}`).then(res => {
            this.$toast('删除成功')
            this.$refs.list.update()
          }).catch(e => {
            this.$toast(e.msg || e.message)
          })
        }
      })
    }
  }
}
</script>

<style lang="less">
.page-cost{
  //
}
</style>
