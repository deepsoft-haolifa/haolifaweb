export default {
  path: '/node',
  name: 'node',
  component: () => import(/* webpackChunkName: "home" */ './index.vue'),
  meta: { level: 2, title: 'HAOLIFA', open: true }
}
