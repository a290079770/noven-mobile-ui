//商城首页相关的所有模块
export default [
  {
    path: '/demo',   //路由路径
    name: '公共组件的demo页',   //路由名称，请一定要注释好
    component: resolve => require.ensure([], () => resolve(require('@/components/common/Demo.vue')), 'bgSystem0xxx'),
  },

  {
    path: '/',   //路由路径
    name: '公共组件的demo页',   //路由名称，请一定要注释好
    component: resolve => require.ensure([], () => resolve(require('@/components/common/Demo.vue')), 'bgSystem0xxx'),
  },
]
