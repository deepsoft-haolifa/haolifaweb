export default [{
  path: '/notification',
  name: 'notification',
  component: () => import(/* webpackChunkName: "notification" */ './index.vue'),
  meta: { level: 2, title: '通知管理', open: false, id: 'tzgl' }
}]
