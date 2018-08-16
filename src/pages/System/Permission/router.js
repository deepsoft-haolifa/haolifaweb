export default {
  path: '/permission',
  name: 'permission',
  component: () => import(/* webpackChunkName: "home" */ './index.vue'),
  meta: { level: 2, title: 'HAOLIFA', open: true }
}
