export default [{
  path: '/applyBuy-machining',
  name: 'machining-list',
  component: () => import(/* webpackChunkName: "diliverylist" */ './index.vue'),
  meta: { level: 2, title: '机加工报检单列表', open: false, id: 'jjgbjd' }
}, {
  path: '/applyBuy-machining/add',
  name: 'machining-add',
  component: () => import(/* webpackChunkName: "diliveryadd" */ './add.vue'),
  meta: { level: 3, title: '新增机加工报检单', open: false, id: 'jjgbjd' }
}, {
  path: '/applyBuy-machining/edit',
  name: 'machining-edit',
  component: () => import(/* webpackChunkName: "diliversyedit" */ './add.vue'),
  meta: { level: 3, title: '编辑机加工报检单', open: false, id: 'jjgbjd' }
}]
