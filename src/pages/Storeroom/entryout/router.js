export default [{
  path: '/entryout',
  name: 'entryout-list',
  component: () => import(/* webpackChunkName: "entryoutlist" */ './index.vue'),
  meta: { level: 2, title: '零件管理', open: false, id: 'ljgl' }
}]
