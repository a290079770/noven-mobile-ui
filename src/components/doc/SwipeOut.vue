<template>
  <div>
     <Header 
     :isBackShow="true" 
     :title="'左滑删除'"
     :border="true"
     @backClick="$router.push('/demo')"
     />

     

     <section class="section">
       <h2>SwipeOut</h2>
       <p>左滑删除</p>
     </section>

   <h4>展示</h4>

   <!-- 
     SwipeOut  左滑删除组件
     height 高度，注意要带单位，接受任意css单位
     @handleDelete  点击删除按钮的操作
    -->
   <div style="width:94%;margin:0 auto;border:1px solid #dedede;box-sizing:border-box">
     <SwipeOut 
     height="1rem"
     @handleDelete=""
    >
     <section @click="" style="text-align:center;line-height:1rem">
        左滑删除
     </section>
    </SwipeOut> 
   </div>


   <h4>调用实例</h4>
 <pre>

   &lt;<span class="tag-name">SwipeOut </span>
     <span class="tag-attr">height</span>=<span class="tag-value">"1rem"</span>
     <span class="tag-methods">@handleDelete</span>=<span class="tag-value">""</span>
    &gt;
     &lt;<span class="tag-name">section</span> <span class="tag-methods">@click</span>=<span class="tag-value">""</span>&gt;
        左滑删除
     &lt;/<span class="tag-name">section </span>&gt;
    &lt;/<span class="tag-name">SwipeOut </span>&gt; 

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
           <td>height</td>           
           <td>高度，注意要带单位，接受任意css单位</td>           
           <td>String</td>           
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
           <td>handleDelete</td>
           <td>点击删除按钮的回调</td>
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
      refresh:false
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

</style>

