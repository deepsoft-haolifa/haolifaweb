export default [{
  path: '/invoice',
  name: 'invoice',
  component: () => import( /* webpackChunkName: "invoice" */ './index.vue'),
  meta: {
    level: 2,
    title: '发票管理',
    open: false,
    id: 'fpgl'
  }
}, {
  path: '/invoice-out',
  name: 'invoiceOut',
  component: () => import( /* webpackChunkName: "invoice" */ './outInfo.vue'),
  meta: {
    level: 2,
    title: '出库详情',
    open: false,
    id: 'fpgl'
  }
}]