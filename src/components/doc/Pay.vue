<template>
  <div>
     <Header 
     :isBackShow="true" 
     :title="'支付密码组件'"
     :border="true"
     @backClick="$router.push('/demo')"
     />

     

     <section class="section">
       <h2>Pay</h2>
       <p>支付密码组件</p>
     </section>

   <h4>展示</h4>
   <p class="show-text">
     <Button @click="showPay = true" type="primary" :plain="true" style="width:1.8rem;height:0.6rem">显示键盘</Button>
   </p>

   <Pay v-if="showPay" @close="close">
    有什么奇怪的东西～
   </Pay>


   <h4>调用实例</h4>
 <pre>

   &lt;<span class="tag-name">Pay</span> 
   <span class="tag-attr">v-if</span>=<span class="tag-value">"showPay"</span>
   <span class="tag-methods">@input</span>=<span class="tag-value">"getInputValue"</span>
   &gt;
   有什么奇怪的东西～
   &lt;/<span class="tag-name">Pay</span>&gt;
   

   <span class="tag-methods">
   <span class="tag-name">data()</span> {
     return {
       showPay: false
     }
   }, 
   <span class="tag-name">methods</span> {
     success(num) {},
     input(num) {},
     delete() {},
     close(num) {},
   } </span> 
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
         <td>showPay</td>           
         <td>显示组件</td>           
         <td>Boolean</td>           
       </tr>

       <tr>
         <td>title</td>           
         <td>标题</td>           
         <td>String</td>           
       </tr>
       <tr>
         <td>maxLength</td>           
         <td>密码长度（默认6）</td>           
         <td>Number</td>           
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
         <td>success</td>           
         <td>输入完成</td>           
         <td>Function(result)</td>           
       </tr>
       <tr>
         <td>input</td>           
         <td>输入事件</td>           
         <td>Function(num)</td>           
       </tr>
       <tr>
         <td>delete</td>           
         <td>删除</td>           
         <td>Function</td>           
       </tr>
       <tr>
         <td>close</td>           
         <td>关闭事件</td>           
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
      showPay: false
    }
  },

  methods:{
    close() {
      this.showPay = false;
    },
  },
  created() {
    
  },
  mounted(){

  }
}
</script>



