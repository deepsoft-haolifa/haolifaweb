export default {
  path: '/department',
  name: 'department',
  component: () => import(/* webpackChunkName: "department" */ './index.vue'),
  meta: { level: 2, title: 'HAOLIFA', open: true }
}
