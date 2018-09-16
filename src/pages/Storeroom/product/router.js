export default [{
  path: '/storeproduct',
  name: 'product-list',
  component: () => import(/* webpackChunkName: "productlist" */ './index.vue'),
  meta: { level: 2, title: '成品管理', open: false, id: 'cpgl' }
}, {
  path: '/storeproduct/add',
  name: 'product-add',
  component: () => import(/* webpackChunkName: "productadd" */ './add.vue'),
  meta: { level: 3, title: '新增成品', open: false, id: 'cpgl' }
}, {
  path: '/storeproduct/edit',
  name: 'product-edit',
  component: () => import(/* webpackChunkName: "productedit" */ './add.vue'),
  meta: { level: 3, title: '编辑成品', open: false, id: 'cpgl' }
}]
