<template>
  <div>
     <Header 
     :isBackShow="true" 
     :title="'导航菜单'"
     :border="true"
     @backClick="$router.push('/demo')"
     />

     

     <section class="section">
       <h2>MsgCode</h2>
       <p>获取验证码组件，及倒计时</p>
     </section>

   <h4>展示</h4>

   <!-- 
    text 默认的文字
    reloadText 重新加载的文字
    handleClick 点击倒计时的回调函数
    -->
   <MsgCode
     text="点击获取验证码" 
     reloadText="重新获取验证码"
     customClass="code-class"
     @handleClick="getCode"
     :disabled="false"
     :refresh="refresh"
   />

   <Button @click="refresh = !refresh" type="primary" :plain="true" style="width:1.2rem;height:0.6rem">重置</Button>


   <h4>调用实例</h4>
 <pre>

   &lt;MsgCode
     <span class="tag-name">text</span>=<span class="tag-value">"点击获取验证码" </span>
     <span class="tag-attr">reloadText</span>=<span class="tag-value">"重新获取验证码"</span>
     <span class="tag-attr">customClass</span>=<span class="tag-value">"code-class"</span>
     <span class="tag-attr">:disabled</span>=<span class="tag-value">"false"</span>
     <span class="tag-attr">:refresh</span>=<span class="tag-value">"refresh"</span>
     <span class="tag-methods">@handleClick</span>=<span class="tag-value">"getCode"</span>
   /&gt;
   <span class="tag-methods">
   <span class="tag-name">methods</span> {
     getCode() {
       console.log('get code');
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
           <td>text</td>           
           <td>默认的文字</td>           
           <td>String</td>           
         </tr>
         <tr>
           <td>reloadText</td>           
           <td>重新加载的文字</td>           
           <td>String</td>           
         </tr>
         <tr>
           <td>customClass</td>           
           <td>自定义样式类名（全局）</td>           
           <td>String</td>           
         </tr>
         <tr>
           <td>disabled</td>           
           <td>是否允许点击</td>           
           <td>Boolean</td>           
         </tr>
         <tr>
           <td>refresh</td>           
           <td>重置验证码组件，值为 true 和 false 均会触发</td>           
           <td>Boolean</td>           
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
           <td>getCode</td>
           <td>点击获取验证码时的回调</td>
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
  .code-class {
     margin-left: 3%;
     font-size: 0.26rem;
     color:red;
  }
</style>

