export default [{
  path: '/applybuy',
  component: () => import(/* webpackChunkName: "process" */ './index.vue'),
  meta: { level: 2, title: '请购流程', id: 'sclc', open: true },
  children: [{
    path: '',
    name: 'applybuybase',
    component: () => import(/* webpackChunkName: "applybuybase" */ './base.vue')
  }, {
    path: 'nodes',
    name: 'applybuynodes',
    component: () => import(/* webpackChunkName: "applybuynodes" */ './nodes.vue')
  }]
}, {
  path: '/applybuy/add',
  component: () => import(/* webpackChunkName: "process" */ './add.vue'),
  meta: { level: 2, title: '发起请购流程', id: 'sclc', open: true }
}]
