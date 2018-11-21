export default [{
  path: '/invoiceflow',
  component: () => import(/* webpackChunkName: "process" */ './index.vue'),
  meta: { level: 2, title: '发票流程', id: 'fplc', open: true },
  children: [{
    path: '',
    name: 'invoiceflowbase',
    component: () => import(/* webpackChunkName: "applybuybase" */ './base.vue')
  }, {
    path: 'nodes',
    name: 'invoiceflownodes',
    component: () => import(/* webpackChunkName: "applybuynodes" */ './nodes.vue')
  }]
}, {
  path: '/invoiceflow/add',
  component: () => import(/* webpackChunkName: "process" */ './add.vue'),
  meta: { level: 2, title: '发起发票流程', id: 'fplc', open: true }
}]
