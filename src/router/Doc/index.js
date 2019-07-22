//商城首页相关的所有模块
export default [
  {
    path: '/pay',   
    name: '顶部导航', 
    component: resolve => require.ensure([], () => resolve(require('@/components/doc/Pay.vue')), 'header'),
  },
  {
    path: '/keybordNumber',   
    name: '数字键盘', 
    component: resolve => require.ensure([], () => resolve(require('@/components/doc/KeybordNumber.vue')), 'header'),
  },
  {
    path: '/header',   
    name: '顶部导航', 
    component: resolve => require.ensure([], () => resolve(require('@/components/doc/Header.vue')), 'header'),
  },
  {
    path: '/footer',   
    name: '底部导航', 
    component: resolve => require.ensure([], () => resolve(require('@/components/doc/Footer.vue')), 'footer'),
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
  {
    path: '/msgCode',   
    name: '获取验证码', 
    component: resolve => require.ensure([], () => resolve(require('@/components/doc/MsgCode.vue')), 'msgCode'),
  },
  {
    path: '/verificationCode',   
    name: '输入6位数验证码', 
    component: resolve => require.ensure([], () => resolve(require('@/components/doc/VerificationCode.vue')), 'verificationCode'),
  },
  {
    path: '/input',   
    name: '文本输入框', 
    component: resolve => require.ensure([], () => resolve(require('@/components/doc/Input.vue')), 'input'),
  },{
    path: '/selectCommodity',   
    name: '商品sku选择框', 
    component: resolve => require.ensure([], () => resolve(require('@/components/doc/SelectCommodity.vue')), 'selectCommodity'),
  },{
    path: '/select',   
    name: '中部弹出框选择器', 
    component: resolve => require.ensure([], () => resolve(require('@/components/doc/Select.vue')), 'select'),
  },{
    path: '/swipeOut',   
    name: '左滑删除', 
    component: resolve => require.ensure([], () => resolve(require('@/components/doc/SwipeOut.vue')), 'swipeOut'),
  },{
    path: '/expandMenu',   
    name: '展开式菜单', 
    component: resolve => require.ensure([], () => resolve(require('@/components/doc/ExpandMenu.vue')), 'expandMenu'),
  },{
    path: '/popupInput',   
    name: '下部弹出式选择框', 
    component: resolve => require.ensure([], () => resolve(require('@/components/doc/PopupInput.vue')), 'popupInput'),
  },{
    path: '/button',   
    name: '自定义按钮', 
    component: resolve => require.ensure([], () => resolve(require('@/components/doc/Button.vue')), 'button'),
  },{
    path: '/bankItem',   
    name: '银行卡展示', 
    component: resolve => require.ensure([], () => resolve(require('@/components/doc/BankItem.vue')), 'bankItem'),
  },
  {
    path: '/canvasCycle',   
    name: '比例环形图', 
    component: resolve => require.ensure([], () => resolve(require('@/components/doc/CanvasCycle.vue')), 'canvasCycle'),
  },
  {
    path: '/calendar',   
    name: '日历插件', 
    component: resolve => require.ensure([], () => resolve(require('@/components/doc/Calendar.vue')), 'calendar'),
  },
]
