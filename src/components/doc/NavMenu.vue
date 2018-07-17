<template>
  <div>
     <Header 
     :isBackShow="true" 
     :backImmediateExec="true"
     :title="'导航菜单'"
     :border="true"
     />

     

     <section class="section">
       <h2>NavMenu</h2>
       <p>横向导航菜单，支持页内切换模式（刷新重置）和页间切换模式（刷新固定）</p>
     </section>

   <h4>展示</h4>

   <p class="show-text">页内切换模式（刷新重置）</p>



   <h4>调用实例</h4>
 <pre>

   &lt;<span class="tag-name">Marquee </span>
     <span class="tag-attr">:marqueeList</span>=<span class="tag-value">"marqueeList" </span>
     <span class="tag-attr">:fields</span>=<span class="tag-value">"marqueeProps" </span>
     <span class="tag-attr">:speed</span>=<span class="tag-value">"5" </span>
     <span class="tag-attr">:duration</span>=<span class="tag-value">"2500" </span>
     <span class="tag-attr">textClass</span>=<span class="tag-value">"marquee-class" </span>
     <span class="tag-attr">height</span>=<span class="tag-value">"0.5"</span>
     /&gt;
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
           <td>marqueeList</td>
           <td>数据列表</td>
           <td>Array</td>
         </tr>

         <tr>
           <td>fields</td>
           <td>数据渲染的对应字段，必传（1 - redirectUrl 点击重定向地址   2 - text 走马灯文本）</td>
           <td>Object</td>
         </tr>

         <tr>
           <td>speed</td>
           <td>切换动作中的速度（默认为5毫秒，数值越大越慢）</td>
           <td>Number</td>
         </tr>

         <tr>
           <td>duration</td>
           <td>切换间隔时间（默认为2500毫秒）</td>
           <td>Number</td>
         </tr>

         <tr>
           <td>textClass</td>
           <td>文本的样式（样式建议放置于全局）</td>
           <td>String</td>
         </tr>

         <tr>
           <td>height</td>
           <td>走马灯高度（单位rem）</td>
           <td>String</td>
         </tr>

       </tbody>
     </table>



  </div>
</template>
<script>
export default {
  data () {
    return {
      marqueeList: [
        { redirectUrl: 'javascript:', 
           img: '/static/img/ic_mine_bg@2x.png',
           lanternContent: '送你一朵fua' 
         },
          { redirectUrl: 'javascript:', 
           img: '/static/img/ic_mine_bg@2x.png',
           lanternContent: '送你一朵草' 
         },
      ],//走马灯数据

      marqueeProps:{
        redirectUrl:'redirectUrl',
        text:'lanternContent'
      },
    }
  },

  methods:{
    backClick() {
      console.log('back');
    },
    rightBtnClick() {
      console.log('right');
    },
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

