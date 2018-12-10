export default [{
  path: '/applyBuy-order',
  name: 'order-list',
  component: () => import(/* webpackChunkName: "diliverylist" */ './index.vue'),
  meta: { level: 2, title: '待采购列表', open: false, id: 'jjgbjd' }
}, {
  path: '/applyBuy-order/add',
  name: 'order-add',
  component: () => import(/* webpackChunkName: "diliveryadd" */ './add.vue'),
  meta: { level: 3, title: '新增采购单', open: false, id: 'jjgbjd' }
}, {
  path: '/applyBuy-order/edit',
  name: 'order-edit',
  component: () => import(/* webpackChunkName: "diliversyedit" */ './add.vue'),
  meta: { level: 3, title: '编辑采购单', open: false, id: 'jjgbjd' }
}]
