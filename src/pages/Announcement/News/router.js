export default [{
  path: '/news',
  name: 'news',
  component: () => import(/* webpackChunkName: "news" */ './index.vue'),
  meta: { level: 2, title: '新闻管理', open: false, id: 'xwgl' }
}]
