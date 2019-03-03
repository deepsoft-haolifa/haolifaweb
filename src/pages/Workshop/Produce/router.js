export default [{
  path: '/scddlb-list',
  name: 'cjzr-scddlb',
  component: () => import( /* webpackChunkName: "orderlist" */ './index.vue'),
  meta: {
    level: 2,
    title: '生产订单列表',
    open: false,
    id: 'jhgl-scddlb'
  }
}, {
    path: '/scddlb/info',
    name: 'scddlb-info',
    component: () => import( /* webpackChunkName: "orderedit" */ './info.vue'),
    meta: {
        level: 3,
        title: '详情',
        open: false,
        id: 'jhgl-scddlb'
    }
}]