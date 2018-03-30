//商城首页相关的所有模块
export default [
  {
    path: '/login',   
    name: '登录页', 
    component: resolve => require.ensure([], () => resolve(require('@/components/Login/login.vue')), 'bgSystem0xxx'),
  },

  {
    path: '/reg',   
    name: '注册页', 
    component: resolve => require.ensure([], () => resolve(require('@/components/Login/Reg.vue')), 'bgSystem0xxx'),
  },

  {
    path: '/forgetPass',   
    name: '忘记密码', 
    component: resolve => require.ensure([], () => resolve(require('@/components/Login/ForgetPass.vue')), 'bgSystem0xxx'),
  },

  {
    path: '/resetPass',   
    name: '重置密码', 
    component: resolve => require.ensure([], () => resolve(require('@/components/Login/ResetPass.vue')), 'bgSystem0xxx'),
  },

  {
    path: '/updatePass',   
    name: '修改密码', 
    component: resolve => require.ensure([], () => resolve(require('@/components/Login/updatePass.vue')), 'bgSystem0xxx'),
  },
]
