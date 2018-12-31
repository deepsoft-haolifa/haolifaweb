export default [{
    path: '/orderupdate',
    name: 'orderupdate-list',
    component: () =>
        import ( /* webpackChunkName: "partmanufacturing" */ './index.vue'),
    meta: { level: 2, title: '更换料表', open: false, id: 'dhlb' }
}]