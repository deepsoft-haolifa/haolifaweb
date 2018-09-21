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
}, {
  path: '/storeproduct/entryProduct',
  name: 'entryProduct',
  component: () => import(/* webpackChunkName: "entryProduct" */ './entryProduct.vue'),
  meta: { level: 3, title: '成品入库', open: false, id: 'cpgl' }
}, {
  path: '/storeproduct/outProduct',
  name: 'outProduct',
  component: () => import(/* webpackChunkName: "outProduct" */ './outProduct.vue'),
  meta: { level: 3, title: '成品出库', open: false, id: 'cpgl' }
}, {
  path: '/storeproduct/info',
  name: 'info-list',
  component: () => import(/* webpackChunkName: "infolist" */ './info.vue'),
  meta: { level: 3, title: '成品出入库详情', open: false, id: 'cpgl' }
}]
