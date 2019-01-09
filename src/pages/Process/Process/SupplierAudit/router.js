export default [{
  path: '/supplierAudit',
  component: () => import(/* webpackChunkName: "process" */ './index.vue'),
    meta: { level: 2, title: '供应商合格审批', open: false, id: 'home' },
  children: [{
    path: '',
    name: 'supplierAuditBase',
    component: () => import(/* webpackChunkName: "applybuybase" */ './base.vue'),
      meta: { level: 2, title: '供应商合格审批', open: false, id: 'home' },
  }, {
    path: 'produceNodes',
    name: 'produceNodes',
    component: () => import(/* webpackChunkName: "applybuynodes" */ './nodes.vue')
  }]
}]
