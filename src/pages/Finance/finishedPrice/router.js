export default [{
    path: '/finishedPrice',
    name: 'finished-price-list',
    component: () => import( /* webpackChunkName: "invoice" */ './index.vue'),
    meta: {
        level: 2,
        title: '成品价格管理',
        open: false,
        id: 'cpjggl'
    }
}]