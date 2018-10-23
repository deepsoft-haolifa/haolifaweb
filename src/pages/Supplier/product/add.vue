<template>
<div class="page-product-add abs scroll-y">
  <div class="form-content">
    <div class="title b f-18">{{form.id ? '编辑' : '新增'}}供应商产品</div>
    <div class="flex-v-center">
      <input-box v-model="form.annualProduction" class="flex-item mr-10" label="年产量"></input-box>
      <input-box v-model="form.mainCustomer" class="flex-item mr-10" label="主要客户"></input-box>
    </div>
    <div class="flex-v-center">
      <input-box v-model="form.materialGraphNo" class="flex-item mr-10" label="供货物料图号"></input-box>
      <input-box v-model="form.materialName" class="flex-item mr-10" label="产品名称"></input-box>
    </div>
    <div class="flex-v-center">
      <select-box v-model="form.materialType" :list="materialTypeList" style="width: 25%" label="产品类型"></select-box>
      <input-box v-model="form.supplierNo" class="flex-item ml-10 mr-10" label="供应商编号"></input-box>
    </div>
    <div class="flex-v-center" style="margin: 20px 0;">
      <btn big class="mr-20" @click="submit" :disabled="!canSubmit">提交</btn>
      <btn big flat bg class="mr-20" @click="cancel">取消</btn>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'page-product-add',
  data () {
    return {
      form: {
        id: '',
        annualProduction: '',
        mainCustomer: '',
        materialGraphNo: '',
        materialName: '',
        materialType: '',
        supplierNo: ''
      },
      materialTypeList: [{text: '供货原料', value: 0}, {text: '其他原料', value: 1}]
    }
  },
  computed: {
    canSubmit () {
      const { form } = this
      return form.annualProduction && form.mainCustomer && form.materialName  && form.supplierNo 
    }
  },
  created () {
    let { id } = this.$route.query
    if (id !== undefined && this.$route.name === 'supplierproduct-edit') this.getInfo(id)
  },
  methods: {
    getInfo (id) {
      this.$http.get(`/haolifa/supplier-pro/info/${id}`).then(res => {
        for (let key in this.form) {
          if (this.form[key] !== undefined) this.form[key] = res[key]
        }
      }).catch(e => {
        this.$toast(e.msg || e.message)
      })
    },
    cancel () {
      this.$confirm({
        title: '您确定要离开此页面吗？',
        text: '您的表单将不会保存',
        color: 'red',
        btns: ['取消', '离开'],
        yes: () => {
          this.$router.back()
        }
      })
    },
    submit () {
      const { form } = this
      this.loading = true
      this.$http.post(`/haolifa/supplier-pro/${form.id ? 'update' : 'save'}`, form).then(res => {
        this.loading = false
        this.$router.replace('/supplierproduct')
      }).catch(e => {
        this.loading = false
        this.$toast(e.msg || e.message)
      })
    }
  }
}
</script>

<style lang="less">
.page-product-add{
  padding: 30px 20px;
  .title{margin-bottom: 20px;}
}
</style>
