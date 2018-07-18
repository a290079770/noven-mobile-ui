<template>
  <div>
     <Header 
     :isBackShow="true" 
     :title="'顶部容器背景'"
     :border="true"
     @backClick="$router.push('/demo')"
     />

     

     <section class="section">
       <h2>TopBgImg</h2>
       <p>顶部容器的背景，支持自定义宽度、高度、背景图片、背景色、渐变色。</p>
     </section>

   <h4>展示</h4>

   <p class="show-text">有背景图片</p>
   <TopBgImg
       style="margin:0.2rem 0"
       height="5rem"
       :bgImg="'./static/img/bg_home1@2x.png'"
     >
      这里是内容区
   </TopBgImg>

   <p class="show-text">有背景图片 + 渐变色</p>
   <TopBgImg
       style="margin:0.2rem 0"
       height="5rem"
       :bgImg="'./static/img/bg_home1@2x.png'"
       bgColorStart="red"
       bgColorEnd="pink"
     >
      这里是内容区
   </TopBgImg>

   <p class="show-text">有背景图片 + 渐变色 + 指定渐变方向</p>
   <TopBgImg
       style="margin:0.2rem 0"
       height="5rem"
       :bgImg="'./static/img/bg_home1@2x.png'"
       bgColorStart="yellow"
       bgColorEnd="green"
       direction="left bottom"
     >
      这里是内容区
   </TopBgImg>

   <h4>调用实例</h4>
 <pre>

   &lt;<span class="tag-name">TopBgImg</span> 
       <span class="tag-attr">height</span>=<span class="tag-value">"5rem"</span> 
       <span class="tag-attr">:bgImg</span>=<span class="tag-value">"'./static/img/bg_home1@2x.png'"</span> 
       <span class="tag-attr">bgColorStart</span><span class="tag-value">="yellow"</span> 
       <span class="tag-attr">bgColorEnd</span><span class="tag-value">="green"</span> 
       <span class="tag-attr">direction</span>=<span class="tag-value">"left bottom"</span> 
     /&gt;
      这里是内容区
   &lt;<span class="tag-name">/TopBgImg/</span> &gt;  
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
           <td>width</td>
           <td>组件的宽度（任意单位）</td>
           <td>String</td>
         </tr>

         <tr>
           <td>height</td>
           <td>组件的高度（任意单位）</td>
           <td>String</td>
         </tr>

         <tr>
           <td>bgImg</td>
           <td>背景图片</td>
           <td>String</td>
         </tr>

         <tr>
           <td>bgColorStart</td>
           <td>背景渐变起始色（默认#629CFA）</td>
           <td>String</td>
         </tr>

         <tr>
           <td>bgColorEnd</td>
           <td>背景渐变终止色（默认#3D6DE7）</td>
           <td>String</td>
         </tr>

         <tr>
           <td>direction</td>
           <td>渐变色的方向（默认top），可接受linear-gradient任意方向参数</td>
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
      //头部右侧icon配置
      icon:{
         width:'0.4rem',
         height: '0.45rem',
         src:'./static/img/recommendItem.png'
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

<style lang="less" scoped>
   .show-text {
    margin: 0 auto;
     width: 94%;
    font-size: 0.28rem;
    color:#666;
   }
</style>

