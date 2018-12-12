export default [{
  path: '/material-room',
  name: 'material-list',
  component: () => import(/* webpackChunkName: "roomlist" */ './index.vue'),
  meta: { level: 2, title: '零件待入库列表', open: false, id: 'ljdrk' }
}, {
  path: '/material-room/add',
  name: 'material-add',
  component: () => import(/* webpackChunkName: "roomadd" */ './add.vue'),
  meta: { level: 3, title: '新增库房', open: false, id: 'ljdrk' }
}, {
  path: '/material-room/edit',
  name: 'material-edit',
  component: () => import(/* webpackChunkName: "roomedit" */ './add.vue'),
  meta: { level: 3, title: '待入库详情', open: false, id: 'ljdrk' }
}]
