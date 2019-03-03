export default [{
    path: '/purchsemanage-purchase/list',
    name: 'purchsemanage-purchase',
    component: () => import(/* webpackChunkName: "suppliermanage" */ './index.vue'),
    meta: { level: 2, title: '采购列表', open: false, id: 'cglb' }
}, {
    path: '/purchsemanage-purchase/add',
    name: 'purchsemanage-purchaseadd',
    component: () => import(/* webpackChunkName: "suppliermanage" */ './add.vue'),
    meta: { level: 2, title: '采购列表', open: false, id: 'cglb' }
},{
    path: '/purchsemanage-purchase/info',
    name: 'purchsemanage-purchaseinfo',
    component: () => import(/* webpackChunkName: "suppliermanage" */ './info.vue'),
    meta: { level: 2, title: '采购列表', open: false, id: 'cglb' }
}]