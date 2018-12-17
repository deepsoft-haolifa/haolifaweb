export default [{
  path: '/inspect-material',
  name: 'material-list',
  component: () => import(/* webpackChunkName: "diliverylist" */ './index.vue'),
  meta: { level: 2, title: '零件报检单列表', open: false, id: 'ljzjlb' }
}, {
  path: '/inspect-material/edit',
  name: 'material-edit',
  component: () => import(/* webpackChunkName: "diliversyedit" */ './add.vue'),
  meta: { level: 3, title: '编辑报检单', open: false, id: 'ljzjlb' }
}, {
    path: '/inspect-material/addRecord',
    name: 'material-addRecord',
    component: () => import(/* webpackChunkName: "diliversyedit" */ './addRecord.vue'),
    meta: { level: 3, title: '质检记录', open: false, id: 'ljzjlb' }
}]
