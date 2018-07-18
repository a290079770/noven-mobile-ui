<template>
  <div>
     <Header 
     :isBackShow="true" 
     :title="'文本输入框'"
     :border="true"
     @backClick="$router.push('/demo')"
     />

     

     <section class="section">
       <h2>Input</h2>
       <p>输入框组件，对原生input的封装，支持的类型 目前有 text、number、password，以及处理maxLength兼容，简单的输入验证等</p>
     </section>

   <h4>展示</h4>

   <p style="width:94%;margin:0 auto">
     <Input 
       :value="'这里是输入框默认值'"
       customClass="input-class"
       type="text"
       maxLength="11"
       :forbid="['chinese','spechars']"
       @input="getInputValue"
     />
   </p>


   <h4>调用实例</h4>
 <pre>

   &lt;<span class="tag-name">Input </span>
       <span class="tag-attr">:value</span>=<span class="tag-value">"value"</span>
       <span class="tag-attr">customClass</span>=<span class="tag-value">"input-class"</span>
       <span class="tag-attr">type</span>=<span class="tag-value">"text"</span>
       <span class="tag-attr">maxLength</span>=<span class="tag-value">"11"</span>
       <span class="tag-attr">:forbid</span>=<span class="tag-value">"['chinese','spechars']"</span>
       <span class="tag-methods">@input</span>=<span class="tag-value">"getInputValue"</span>
     /&gt;
   <span class="tag-methods">
   <span class="tag-name">methods</span> {
     getInputValue(e) {
       this.value = e;
     }
   } </span> 
   <span class="tag-attr">
   .input-class {
      font-size: 0.26rem;
      color:red;
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
           <td>value</td>           
           <td>输入框的值</td>           
           <td>String</td>           
         </tr>
         <tr>
           <td>customClass</td>           
           <td>自定义样式的类名</td>           
           <td>String</td>           
         </tr>
         <tr>
           <td>type</td>           
           <td>输入框的类型，目前支持text、number、password</td>           
           <td>String</td>           
         </tr>
         <tr>
           <td>maxLength</td>           
           <td>输入最大长度</td>           
           <td>Number</td>           
         </tr>
         <tr>
           <td>forbid</td>           
           <td>禁止输入的类型（chinese - 中文  spechars - 特殊字符）</td>           
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
           <td>input</td>
           <td>输入过程中的回调</td>
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
    getInputValue(e) {
      this.value = e;
    },
  },
  created() {
    
  },
  mounted(){

  }
}
</script>

<style lang="less">
  .input-class {
     font-size: 0.26rem;
     color:red;
  }
</style>

