export default [{
  path: '/order',
  name: 'order-list',
  component: () => import( /* webpackChunkName: "orderlist" */ './index.vue'),
  meta: {
    level: 2,
    title: '订单列表',
    open: false,
    id: 'parent-ddgl'
  }
}, {
  path: '/order/add',
  name: 'order-add',
  component: () => import( /* webpackChunkName: "orderadd" */ './add.vue'),
  meta: {
    level: 3,
    title: '新增订单',
    open: false,
    id: 'parent-ddgl'
  }
}, {
  path: '/order/edit',
  name: 'order-edit',
  component: () => import( /* webpackChunkName: "orderedit" */ './add.vue'),
  meta: {
    level: 3,
    title: '编辑订单',
    open: false,
    id: 'parent-ddgl'
  }
}, {
  path: '/order/info',
  name: 'order-info',
  component: () => import( /* webpackChunkName: "orderedit" */ './info.vue'),
  meta: {
    level: 3,
    title: '详情',
    open: false,
    id: 'parent-ddgl'
  }
}, {
  path: '/order/approveProgress',
  name: 'order-approveProgress',
  component: () => import( /* webpackChunkName: "orderedit" */ './approveProgress.vue'),
  meta: {
    level: 3,
    title: '审批进度',
    open: false,
    id: 'parent-ddgl'
  }
}]