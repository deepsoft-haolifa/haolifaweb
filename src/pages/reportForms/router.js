export default [{
    path: '/report-forms/list',
    name: 'report-forms',
    component: () => import( /* webpackChunkName: "suppliermanage" */ './index.vue'),
    meta: {
        level: 2,
        title: '财务报表',
        open: false,
        id: 'bjcwbj'
    }
}]