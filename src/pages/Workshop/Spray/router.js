export default [{
    path: '/spraylist',
    name: 'spray-list',
    component: () =>
        import ( /* webpackChunkName: "workcar" */ './index.vue'),
    meta: {level: 2, title: '喷涂加工车间管理', open: false, id: 'ptjglb'}
}, {
    path: '/spray/add',
    name: 'spray-add',
    component: () =>
        import ( /* webpackChunkName: "workcar" */ './addSpray.vue'),
    meta: {level: 2, title: '喷涂加工车间添加', open: false, id: 'xzptjg'}
}
    , {
        path: '/spray/edit',
        name: 'spray-edit',
        component: () =>
            import ( /* webpackChunkName: "workcar" */ './addSpray.vue'),
        meta: {level: 2, title: '喷涂加工车间编辑', open: false, id: 'xzptjg'}
    }
    , {
        path: '/spray/add-list',
        name: 'spray-add-list',
        component: () =>
            import ( /* webpackChunkName: "workcar" */ './addList.vue'),
        meta: {level: 2, title: '新增喷涂加工', open: false, id: 'xzptjg'}
    }
]