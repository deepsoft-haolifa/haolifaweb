export default [{
  path: '/rack',
  name: 'rack-list',
  component: () => import(/* webpackChunkName: "racklist" */ './index.vue'),
  meta: { level: 2, title: '库房管理', open: false, id: 'kwgl' }
}]
