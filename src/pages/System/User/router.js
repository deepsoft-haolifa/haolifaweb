export default {
  path: '/user',
  name: 'user',
  component: () => import(/* webpackChunkName: "user" */ './index.vue'),
  meta: { level: 2, title: '人员管理', open: false, id: 'rygl' }
}
