export default {
  path: '/role',
  name: 'role',
  component: () => import(/* webpackChunkName: "home" */ './index.vue'),
  meta: { level: 2, title: 'HAOLIFA', open: true }
}
