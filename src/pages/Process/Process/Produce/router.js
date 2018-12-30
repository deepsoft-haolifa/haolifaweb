export default [{
  path: '/produce',
  component: () => import(/* webpackChunkName: "process" */ './index.vue'),
  children: [{
    path: '',
    name: 'produceBase',
    component: () => import(/* webpackChunkName: "applybuybase" */ './base.vue')
  }, {
    path: 'produceNodes',
    name: 'produceNodes',
    component: () => import(/* webpackChunkName: "applybuynodes" */ './nodes.vue')
  }]
}]
