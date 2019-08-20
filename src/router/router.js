export default [
  {
    path: '/404',
    name: 'nofind',
    component: () => import('@/views/common/404'),
    meta: {
      title: '找不到页面'
    }
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About'),
    meta: {
      title: '关于Demo'
    }
  }
]
