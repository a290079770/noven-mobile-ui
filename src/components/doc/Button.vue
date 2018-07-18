<template>
  <div>
     <Header 
     :isBackShow="true" 
     :title="'自定义按钮'"
     :border="true"
     @backClick="$router.push('/demo')"
     />

     

     <section class="section">
       <h2>Button</h2>
       <p>模拟PC端组件库按钮</p>
     </section>

   <h4>展示</h4>

   <div class="btn-cont">
     <p>
       <Button @click="btnClick" type="primary" customClass="btn-class">primary</Button>
       <Button @click="btnClick" type="primary" :disabled="true" customClass="btn-class">disabled</Button>
       <Button type="primary" :plain="true" customClass="btn-class"> plain</Button>
     </p>

     <p>
       <Button type="warning" customClass="btn-class">warning</Button>
       <Button type="warning" :disabled="true" customClass="btn-class">disabled</Button>
       <Button type="warning" :plain="true" customClass="btn-class"> plain</Button>
     </p>

     <p>
       <Button type="danger" customClass="btn-class">danger</Button>
       <Button type="danger" :disabled="true" customClass="btn-class">disabled</Button>
       <Button type="danger" :plain="true" customClass="btn-class"> plain</Button>
     </p>


     <p>
       <Button type="info" customClass="btn-class">info</Button>
       <Button type="info" :disabled="true" customClass="btn-class">disabled</Button>
       <Button type="info" :plain="true" customClass="btn-class"> plain</Button>
     </p>

     <p>
       <Button type="success" customClass="btn-class">success</Button>
       <Button type="success" :disabled="true" customClass="btn-class">disabled</Button>
       <Button type="success" :plain="true" customClass="btn-class"> plain</Button>
     </p>
   </div>


   <h4>调用实例</h4>
 <pre>
   ---------------默认样式---------------

   &lt;<span class="tag-name">Button </span>
    <span class="tag-attr">type</span>=<span class="tag-value">"primary" </span>
    <span class="tag-attr">customClass</span>=<span class="tag-value">"btn-class"</span>
    <span class="tag-methods">@click</span>=<span class="tag-value">"btnClick" </span>
   &gt;
    primary
   &lt;<span class="tag-name">/Button</span>&gt;
   
   ---------------禁用样式---------------

   &lt;<span class="tag-name">Button </span>
    <span class="tag-attr">:disabled</span>=<span class="tag-value">"true"</span>
   &gt;
    disabled
   &lt;<span class="tag-name">/Button</span>&gt;
   
   ---------------空心样式---------------

   &lt;<span class="tag-name">Button </span>
    <span class="tag-attr">:plain</span>=<span class="tag-value">"true"</span>
   &gt; 
    plain
   &lt;<span class="tag-name">/Button</span>&gt;

   <span class="tag-methods">
   <span class="tag-name">methods</span> {
     btnClick(e) {
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
           <td>内置的按钮类型（可选-primary warning danger info success）</td>           
           <td>String</td>   
         </tr>

         <tr>
           <td>disabled</td>           
           <td>是否禁用按钮</td>           
           <td>Boolean</td>
         </tr>

         <tr>
           <td>plain</td>           
           <td>是否空心</td>           
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
           <td>click</td>
           <td>点击事件</td>
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
    btnClick(e) {
      console.log(e);
    },
  },
  created() {
    
  },
  mounted(){

  }
}
</script>

<style lang="less">
  .btn-cont {
    margin:0 auto;
    width:94%;
    p {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin:0.1rem 0;
    }
  }

  .btn-class {
    width: 2rem;
    height: 0.8rem;
  }
</style>

