<template>
  <div>
     <Header 
     :isBackShow="true" 
     :title="'验证码输入组件'"
     :border="true"
     @backClick="$router.push('/demo')"
     />

     <section class="section">
       <h2>VerificationCode</h2>
       <p>6位数验证码输入框，可拓展为密码输入框等</p>
     </section>

   <h4>展示</h4>

   <p style="width:94%;margin:0 auto">

     <VerificationCode 
       span-size="0.2rem" 
       type="text" 
       :number="6" 
       height="0.5rem" 
       span-color="#f35252" 
       input-color="#3498db" 
       input-size="0.24rem" 
       :code="code" 
       @complete="codeComplete"
     ></VerificationCode>
   </p>


   <h4>调用实例</h4>
 <pre>

   &lt;<span class="tag-name">VerificationCode </span>
     <span class="tag-attr">span-size</span>=<span class="tag-value">"0.2rem" </span>
     <span class="tag-attr">type</span>=<span class="tag-value">"number" </span>
     <span class="tag-attr">:number</span>=<span class="tag-value">"6" </span>
     <span class="tag-attr">height</span>=<span class="tag-value">"0.5rem" </span>
     <span class="tag-attr">span-color</span>=<span class="tag-value">"#f35252" </span>
     <span class="tag-attr">input-color</span>=<span class="tag-value">"#3498db" </span>
     <span class="tag-attr">input-size</span>=<span class="tag-value">"0.24rem" </span>
     <span class="tag-attr">:code</span>=<span class="tag-value">"code" </span>
     <span class="tag-methods">@complete</span>=<span class="tag-value">"codeComplete"</span>
   /&gt;&lt;/<span class="tag-name">VerificationCode</span>&gt; 
   <span class="tag-methods">
   <span class="tag-name">methods</span> {
     codeComplete(code) {
       console.log(code);
     },
   } </span> 


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
           <td>code</td>           
           <td>用户输入的验证码数组</td>           
           <td>Array</td>           
         </tr>
         <tr>
           <td>number</td>           
           <td>验证码位数</td>           
           <td>Number</td>           
         </tr>
         <tr>
           <td>type</td>           
           <td>用户输入类型（支持 number、text）</td>           
           <td>String</td>           
         </tr>
         <tr>
           <td>span-size</td>           
           <td>输入后的字体显示大小（默认20px,接受任意单位）</td>           
           <td>String</td>           
         </tr>
         <tr>
           <td>span-color</td>           
           <td>输入后的字体显示颜色（默认#f35252）</td>           
           <td>String</td>           
         </tr>
         <tr>
           <td>input-size</td>           
           <td>输入框的字体显示大小（默认20px,接受任意单位）</td>           
           <td>String</td>           
         </tr>
         <tr>
           <td>input-color</td>           
           <td>输入框的字体显示颜色（默认#f35252）</td>           
           <td>String</td>           
         </tr>
         <tr>
           <td>height</td>           
           <td>整个框的显示高度（默认60px）</td>           
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
           <td>getinput</td>
           <td>用户每次输入后的回调函数,接受一个验证码字符串</td>
           <td>Function</td>
         </tr>
         <tr>
           <td>complete</td>
           <td>用户输入完成后的回调函数,接受一个验证码字符串</td>
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
      code:[], //用户输入的验证码
    }
  },

  methods:{
    codeComplete(code) {
      console.log(code);
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

