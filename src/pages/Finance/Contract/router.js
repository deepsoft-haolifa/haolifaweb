export default [{
  path: '/contract',
  name: 'contract',
  component: () => import(/* webpackChunkName: "contract" */ './index.vue'),
  meta: { level: 2, title: '合同管理', open: false, id: 'htgl' }
}]
