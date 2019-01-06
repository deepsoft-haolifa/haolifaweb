export default [{
    path: '/orderupdate',
    name: 'orderupdate-list',
    component: () =>
        import ( /* webpackChunkName: "orderupdate" */ './index.vue'),
    meta: { level: 2, title: '更换料表', open: false, id: 'dhlb' }
}]