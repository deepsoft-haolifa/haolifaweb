export default {
  path: '/process',
  name: 'process',
  component: () => import(/* webpackChunkName: "process" */ './index.vue'),
  meta: { level: 2, title: 'HAOLIFA', open: true }
}
