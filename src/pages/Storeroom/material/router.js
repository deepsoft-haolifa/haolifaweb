export default [{
  path: '/material',
  name: 'material-list',
  component: () => import(/* webpackChunkName: "materiallist" */ './index.vue'),
  meta: { level: 2, title: '零件管理', open: false, id: 'ljgl' }
}, {
  path: '/material/add',
  name: 'material-add',
  component: () => import(/* webpackChunkName: "materialadd" */ './add.vue'),
  meta: { level: 3, title: '新增零件', open: false, id: 'ljgl' }
}, {
  path: '/material/edit',
  name: 'material-edit',
  component: () => import(/* webpackChunkName: "materialedit" */ './add.vue'),
  meta: { level: 3, title: '编辑零件', open: false, id: 'ljgl' }
}]
