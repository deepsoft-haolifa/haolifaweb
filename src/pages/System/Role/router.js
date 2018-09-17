export default {
  path: '/role',
  name: 'role',
  component: () => import(/* webpackChunkName: "role" */ './index.vue'),
  meta: { level: 2, title: '角色管理', open: false, id: 'jsgl' }
}
