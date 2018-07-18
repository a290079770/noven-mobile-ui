<template>
  <div>
     <Header 
     :isBackShow="true" 
     :title="'导航菜单'"
     :border="true"
     @backClick="backClick"
     />

     

     <section class="section">
       <h2>NavMenu</h2>
       <p>横向导航菜单，支持页内切换模式（刷新重置）和页面间切换模式（刷新固定）</p>
     </section>

   <h4>展示</h4>

   <p class="show-text">页内切换模式（刷新重置）</p>
   <NavMenu 
    :navData="navData"
    :defaultIndex="3"
    @change="getSelectedNav"
   />

   <p class="show-text" style="margin-top:0.3rem">页间切换模式（刷新固定）</p>
   <NavMenu 
    :navData="navData"
    :defaultIndex="2"
    type="hash"
    @change="getSelectedNav"
   />


   <h4>调用实例</h4>
 <pre>
   &lt;<span class="tag-name">NavMenu </span>
    <span class="tag-attr">:navData</span>=<span class="tag-value">"navData"</span>
    <span class="tag-attr">:defaultIndex</span>=<span class="tag-value">"2"</span>
    <span class="tag-attr">type</span>=<span class="tag-value">"hash"</span>
    <span class="tag-methods">@change</span>=<span class="tag-value">"getSelectedNav"</span>
   /&gt;
   <span class="tag-methods">
   <span class="tag-name">data ()</span> {
      return {
        navData:[
         {
          title:'全部',
          orderStatus:-1,
         },{
          title:'待付款',
          orderStatus:0,
         },{
          title:'待发货',
          orderStatus:2,
         },{
          title:'待收货',
          orderStatus:3,
         },{
          title:'已完成',
          orderStatus:4,
         }
        ]
      }
   }

   <span class="tag-name">methods</span> {
     getSelectedNav(e) {
       console.log(e); 
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
           <td>type</td>           
           <td>导航模式（默认normal - 页内切换，刷新重置  可选 - hash 页间切换，刷新不重置）</td>           
           <td>String</td>           
         </tr>
         <tr>
           <td>navData</td>           
           <td>导航栏数据</td>           
           <td>Array</td>           
         </tr>
         <tr>
           <td>defaultKey</td>           
           <td>指定渲染哪个键名（默认键名 title）</td>           
           <td>String</td>           
         </tr>
         <tr>
           <td>defaultIndex</td>           
           <td>默认展示的索引，在hash模式下只有第一次有效</td>           
           <td>Number</td>           
         </tr>
         <tr>
           <td>speed</td>           
           <td>normal模式下 页面切换速度（默认0.5毫秒切换完成）</td>           
           <td>Number</td>           
         </tr>
         <tr>
           <td>customClass</td>           
           <td>自定义类名（全局）</td>           
           <td>String</td>           
         </tr>
         <tr>
           <td>queryParams</td>           
           <td>hash模式下必填，要记录的键名数组（默认 ['title']）</td>           
           <td>Array</td>           
         </tr>
         
       </tbody>
     </table>


     <h4>方法</h4>

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
           <td>change</td>
           <td>切换nav时的回调</td>
           <td>Function</td>
         </tr>
       </tbody>
     </table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      navData:[{
          title:'全部',
          orderStatus:-1,
          isActive:true
        },{
          title:'待付款',
          orderStatus:0,
          isActive:false
        },{
          title:'待发货',
          orderStatus:2,
          isActive:false
        },{
          title:'待收货',
          orderStatus:3,
          isActive:false
        },{
          title:'已完成',
          orderStatus:4,
          isActive:false
        }],
    }
  },

  methods:{
    backClick() {
      this.$router.push('/demo')
    },
    rightBtnClick() {
      console.log('right');
    },

    getSelectedNav(e) {
      console.log(e); 
    }
  },
  created() {
    
  },
  mounted(){

  }
}
</script>

<style lang="less">
   .marquee-class {
     font-size:0.24rem;
     color:red !important 
   }
</style>

