export default [{
  path: '/invoice',
  name: 'invoice',
  component: () => import(/* webpackChunkName: "invoice" */ './index.vue'),
  meta: { level: 2, title: '发票管理', open: false, id: 'fpgl' }
}]
