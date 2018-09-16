export default [{
  path: '/partype',
  name: 'partype-list',
  component: () => import(/* webpackChunkName: "roomlist" */ './index.vue'),
  meta: { level: 2, title: '零件类别', open: false, id: 'kfgl' }
}, {
  path: '/partype/add',
  name: 'partype-add',
  component: () => import(/* webpackChunkName: "roomadd" */ './add.vue'),
  meta: { level: 3, title: '新增零件类别', open: false, id: 'kfgl' }
}, {
  path: '/partype/edit',
  name: 'partype-edit',
  component: () => import(/* webpackChunkName: "roomedit" */ './add.vue'),
  meta: { level: 3, title: '编辑零件类别', open: false, id: 'kfgl' }
}]
