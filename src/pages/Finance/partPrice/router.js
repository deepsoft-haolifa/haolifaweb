export default [{
    path: '/partPrice',
    name: 'part-price-list',
    component: () => import( /* webpackChunkName: "invoice" */ './index.vue'),
    meta: {
        level: 2,
        title: '零件价格管理',
        open: false,
        id: 'ljjggl'
    }
}]