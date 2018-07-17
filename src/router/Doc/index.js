//商城首页相关的所有模块
export default [
  {
    path: '/header',   
    name: '顶部导航', 
    component: resolve => require.ensure([], () => resolve(require('@/components/doc/Header.vue')), 'header'),
  },
  {
    path: '/topBgImg',   
    name: '顶部容器背景', 
    component: resolve => require.ensure([], () => resolve(require('@/components/doc/TopBgImg.vue')), 'topBgImg'),
  },
  {
    path: '/marquee',   
    name: '走马灯', 
    component: resolve => require.ensure([], () => resolve(require('@/components/doc/Marquee.vue')), 'marquee'),
  },
  {
    path: '/navMenu',   
    name: '导航菜单', 
    component: resolve => require.ensure([], () => resolve(require('@/components/doc/NavMenu.vue')), 'navMenu'),
  },
]
