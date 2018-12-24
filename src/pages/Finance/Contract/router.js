export default [{
    path: '/contract',
    name: 'contract',
    component: () =>
        import ( /* webpackChunkName: "contract" */ './index.vue'),
    meta: { level: 2, title: '采购合同管理', open: false, id: 'htgl' }
}, {
    path: '/contract/production',
    name: 'contractproduction',
    component: () =>
        import ( /* webpackChunkName: "contractproduction" */ './production.vue'),
    meta: { level: 2, title: '生产合同管理', open: false, id: 'htgl' }
}, {
    path: '/contract/info',
    name: 'contractinfo',
    component: () =>
        import ( /* webpackChunkName: "contractinfo" */ './info.vue'),
    meta: { level: 2, title: '合同详情', open: false, id: 'htgl' }
}]