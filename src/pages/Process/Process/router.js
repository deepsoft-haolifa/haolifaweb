export default {
  path: '/process',
  name: 'process',
  component: () => import(/* webpackChunkName: "home" */ './index.vue'),
  meta: { level: 2, title: 'HAOLIFA', open: true }
}
