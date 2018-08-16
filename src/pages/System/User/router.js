export default {
  path: '/user',
  name: 'user',
  component: () => import(/* webpackChunkName: "home" */ './index.vue'),
  meta: { level: 2, title: 'HAOLIFA', open: true }
}
