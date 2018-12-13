export default [{
  path: '/order',
  name: 'order-list',
  component: () => import(/* webpackChunkName: "orderlist" */ './index.vue'),
  meta: { level: 2, title: '订单列表', open: false, id: 'parent-ddgl' }
}, {
  path: '/order/add',
  name: 'order-add',
  component: () => import(/* webpackChunkName: "orderadd" */ './add.vue'),
  meta: { level: 3, title: '新增订单', open: false, id: 'parent-ddgl' }
}, {
  path: '/order/edit',
  name: 'order-edit',
  component: () => import(/* webpackChunkName: "orderedit" */ './add.vue'),
  meta: { level: 3, title: '编辑订单', open: false, id: 'parent-ddgl' }
}]
