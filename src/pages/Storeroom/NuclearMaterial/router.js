export default [{
  path: '/nuclear-material/list',
  name: 'nuclear-material',
  component: () => import(/* webpackChunkName: "roomlist" */ './index.vue'),
  meta: { level: 2, title: '核替换料列表', open: false, id: 'kghl' }
}, {
  path: '/nuclear-material',
  name: 'nuclear-material-add',
  component: () => import(/* webpackChunkName: "roomadd" */ './add.vue'),
  meta: { level: 3, title: '核料', open: false, id: 'kghl' }
}]
