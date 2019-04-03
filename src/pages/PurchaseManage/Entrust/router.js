export default [{
    path: '/purchsemanage-entrust/list',
    name: 'purchsemanage-entrust',
    component: () => import(/* webpackChunkName: "suppliermanage" */ './index.vue'),
    meta: { level: 2, title: '机加工列表', open: false, id: 'jjglb' }
}, {
    path: '/purchsemanage-entrust/add',
    name: 'purchsemanage-entrustadd',
    component: () => import(/* webpackChunkName: "suppliermanage" */ './add.vue'),
    meta: { level: 2, title: '机加工列表', open: false, id: 'jjglb' }
},{
    path: '/purchsemanage-entrust/info',
    name: 'purchsemanage-entrustinfo',
    component: () => import(/* webpackChunkName: "suppliermanage" */ './info.vue'),
    meta: { level: 2, title: '机加工列表', open: false, id: 'jjglb' }
},{
    path: '/purchsemanage-entrust/approveProgress',
    name: 'purchsemanage-entrustapproveProgress',
    component: () => import(/* webpackChunkName: "suppliermanage" */ './approveProgress.vue'),
    meta: { level: 2, title: '机加工审批进度', open: false, id: 'jjglb' }
}]