export default [{
    path: '/entrust',
    component: () => import(/* webpackChunkName: "process" */ './index.vue'),
    children: [{
        path: '',
        name: 'entrustBase',
        component: () => import(/* webpackChunkName: "applybuybase" */ './base.vue')
    }, {
        path: 'entrustNodes',
        name: 'entrustNodes',
        component: () => import(/* webpackChunkName: "applybuynodes" */ './nodes.vue')
    }]
}]
