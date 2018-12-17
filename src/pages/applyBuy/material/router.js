export default [{
  path: '/applyBuy-material',
  name: 'material-list',
  component: () => import(/* webpackChunkName: "diliverylist" */ './index.vue'),
  meta: { level: 2, title: '零件报检单列表', open: false, id: 'ljbjd' }
}, {
  path: '/applyBuy-material/add',
  name: 'material-add',
  component: () => import(/* webpackChunkName: "diliveryadd" */ './add.vue'),
  meta: { level: 3, title: '新增报检单', open: false, id: 'ljbjd' }
}, {
  path: '/applyBuy-material/edit',
  name: 'material-edit',
  component: () => import(/* webpackChunkName: "diliversyedit" */ './update.vue'),
  meta: { level: 3, title: '编辑报检单', open: false, id: 'ljbjd' }
}]
