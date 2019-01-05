export default [{
  path: '/inspect-material',
  name: 'material-list',
  component: () => import(/* webpackChunkName: "diliverylist" */ './index.vue'),
  meta: { level: 2, title: '零件报检单列表', open: false, id: 'ljzjlb' }
}]
