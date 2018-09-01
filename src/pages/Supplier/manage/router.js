export default {
  path: '/suppliermanage',
  name: 'suppliermanage',
  component: () => import(/* webpackChunkName: "suppliermanage" */ './index.vue'),
  meta: { level: 2, title: '供应商管理', open: true }
}
