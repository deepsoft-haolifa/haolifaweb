export default [
  {
    name: '系统管理',
    children: [{
      name: '角色管理',
      url: '/role',
      id: 'jsgl'
    }, {
      name: '权限管理',
      url: '/permission',
      id: 'qxgl'
    }, {
      name: '菜单管理',
      url: '/menu',
      id: 'cdgl'
    }, {
      name: '人员管理',
      url: '/user',
      id: 'rygl'
    }, {
      name: '部门',
      url: '/department',
      id: 'bmgl'
    }]
  },
  {
    name: '流程管理',
    children: [{
      name: '流程管理',
      url: '/process',
      id: 'lcgl'
    }, {
      name: '节点管理',
      url: '/node',
      id: 'jdgl'
    }]
  },
  {
    name: '库房管理',
    children: [{
      name: '库存预警',
      url: '/earlywarning',
      id: 'kcgl'
    }, {
      name: '零件设置',
      url: '/entryout',
      id: 'ljsz'
    }, {
      name: '零件管理',
      url: '/entryout',
      id: 'ljgl'
    }, {
      name: '库位管理',
      url: '/rack',
      id: 'kwgl'
    }, {
      name: '成品管理',
      url: '/permission',
      id: 'cpgl'
    }, {
      name: '入库管理',
      url: '/permission',
      id: 'rkgl'
    }, {
      name: '库房管理',
      url: '/room',
      id: 'kfgl'
    }, {
      name: '零件类别管理',
      url: '/partype',
      id: 'ljflgl'
    }]
  },
  {
    name: '供应商管理',
    children: [{
      name: '供应商管理',
      url: '/supplier/list',
      id: 'gysgl'
    }]
  },
  {
    name: '财务管理',
    children: [{
      name: '资产管理',
      url: '/role',
      id: 'zcgl'
    }, {
      name: '费用管理',
      url: '/role',
      id: 'fygl'
    }, {
      name: '报表管理',
      url: '/role',
      id: 'bbgl'
    }, {
      name: '合同管理',
      url: '/role',
      id: 'htgl'
    }, {
      name: '发票管理',
      url: '/role',
      id: 'fpgl'
    }]
  },
  {
    name: '公告管理',
    children: [{
      name: '新闻管理',
      url: '/role',
      id: 'xwgl'
    }, {
      name: '通知管理',
      url: '/role',
      id: 'tzgl'
    }]
  }
]
