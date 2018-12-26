export default [{
    path: '/replacement',
    name: 'replacement-list',
    component: () =>
        import ( /* webpackChunkName: "partmanufacturing" */ './index.vue'),
    meta: { level: 2, title: '更换料申请', open: false, id: 'cjzr-ghllb' }
}, {
    path: '/replacementadd',
    name: 'replacement-add',
    component: () =>
        import ( /* webpackChunkName: "partmanufacturing" */ './add.vue'),
    meta: { level: 2, title: '新增更换料', open: false, id: 'cjzr-ghllb' }
}, {
    path: '/replacementedit',
    name: 'replacement-edit',
    component: () =>
        import ( /* webpackChunkName: "partmanufacturing" */ './add.vue'),
    meta: { level: 2, title: '编辑更换料', open: false, id: 'cjzr-ghllb' }
}]