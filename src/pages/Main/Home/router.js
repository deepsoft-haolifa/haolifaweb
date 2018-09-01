export default {
  path: '/',
  name: 'home',
  component: () => import(/* webpackChunkName: "home" */ './index.vue'),
  meta: { level: 2, title: '', open: true }
}
