<template>
  <div>
     <Header 
     :isBackShow="true" 
     :title="'底部导航'"
     :border="true"
     @backClick="$router.push('/demo')"
     />

     

     <section class="section">
       <h2>Footer</h2>
       <p>底部导航组件</p>
     </section>

   <h4>展示</h4>
   <p class="show-text">见页面底部</p>

   <Footer :footerList="footerList"/>


   <h4>调用实例</h4>
 <pre>

   &lt;<span class="tag-name">Footer</span> <span class="tag-attr">:footerList</span>=<span class="tag-value">"footerList"</span>/&gt;

   <span class="tag-methods">
   <span class="tag-name">data()</span> {
     return {
       footerList:[
        { 
          id:0,
          title:'首页',
          defaultIcon:'./static/img/商城icon@2x.png',
          activeIcon:'./static/img/商城icon-on@2x.png',
          path:'/',  //对应路由路径
          query:{}   //路由携带的参数
        },
        {
          id:1,
          title:'头部导航',
          defaultIcon:'./static/img/首页icon@2x.png',
          activeIcon:'./static/img/首页icon-on@2x.png',
          path:'/header',
          query:{}
        },
        {
          id:2,
          title:'底部导航',
          defaultIcon:'./static/img/信用icon@2x.png',
          activeIcon:'./static/img/信用icon-on@2x.png',
          path:'/footer',
          query:{}
        },
        {
          id:3,
          title:'导航菜单',
          defaultIcon:'./static/img/我的icon@2x.png',
          activeIcon:'./static/img/我的icon-on@2x.png',
          path:'/navMenu',
          query:{}
        },
      ],
     }
   } 
   </span> 

 </pre>

     
     <h4>API</h4>
     <table class="section-table">
       <thead>
         <tr>
           <th>参数</th>
           <th>说明</th>
           <th>类型</th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <td>id</td>           
           <td>菜单Item的标签</td>           
           <td>Number</td>           
         </tr>

         <tr>
           <td>title</td>           
           <td>菜单文字</td>           
           <td>String</td>           
         </tr>
         <tr>
           <td>defaultIcon</td>           
           <td>默认的图标</td>           
           <td>String</td>           
         </tr>
         <tr>
           <td>activeIcon</td>           
           <td>激活状态的图标</td>           
           <td>String</td>           
         </tr>
         <tr>
           <td>path</td>           
           <td>菜单Item对应的路由</td>           
           <td>String</td>           
         </tr>
         <tr>
           <td>query</td>           
           <td>该路由携带的参数</td>           
           <td>Object</td>           
         </tr>

       </tbody>
     </table>

  </div>
</template>
<script>
export default {
  data () {
    return {
      footerList:[
        { 
          id:0,
          title:'首页',
          defaultIcon:'./static/img/商城icon@2x.png',
          activeIcon:'./static/img/商城icon-on@2x.png',
          path:'/',  //对应路由路径
          query:{}   //路由携带的参数
        },
        {
          id:1,
          title:'头部导航',
          defaultIcon:'./static/img/首页icon@2x.png',
          activeIcon:'./static/img/首页icon-on@2x.png',
          path:'/header',
          query:{}
        },
        {
          id:2,
          title:'底部导航',
          defaultIcon:'./static/img/信用icon@2x.png',
          activeIcon:'./static/img/信用icon-on@2x.png',
          path:'/footer',
          query:{}
        },
        {
          id:3,
          title:'导航菜单',
          defaultIcon:'./static/img/我的icon@2x.png',
          activeIcon:'./static/img/我的icon-on@2x.png',
          path:'/navMenu',
          query:{}
        },
      ],
    }
  },

  methods:{
    getCode() {
      console.log('get code');
    },
  },
  created() {
    
  },
  mounted(){

  }
}
</script>

<style lang="less">
  .code-class {
     margin-left: 3%;
     font-size: 0.26rem;
     color:red;
  }
</style>

