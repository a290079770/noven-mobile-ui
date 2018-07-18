<template>
  <div>
     <Header 
     :isBackShow="true" 
     :title="'商品SKU选择组件'"
     :border="true"
     @backClick="$router.push('/demo')"
     />

     <section class="section">
       <h2>SelectCommodity</h2>
       <p>商品SKU选择组件，这里只是一个展示，需要根据各自商城情况及接口数据编辑组件内部源码</p>
     </section>

   <h4>展示</h4>

   <p style="width:94%;margin:0 auto">
     <SelectCommodity 
     :selectShopModel="selectShopModel" 
     @submitSelected="receiveSelected"
     />

     <Button @click="selectShopModel = true" type="primary" :plain="true" style="width:1.8rem;height:0.6rem">打开选择框</Button>
   </p>


   <h4>调用实例</h4>
 <pre>

   &lt;<span class="tag-name">SelectCommodity </span>
   <span class="tag-attr">:selectShopModel</span>=<span class="tag-value">"selectShopModel" </span>
   <span class="tag-attr">@submitSelected</span>=<span class="tag-value">"receiveSelected"</span>
   /&gt;
   <span class="tag-methods">
   <span class="tag-name">methods</span> {
    receiveSelected(selected) {
      console.log(selected);
      this.selectShopModel = false;
    }
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
           <td>selectShopModel</td>           
           <td>显示/隐藏选择框</td>           
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
           <td>receiveSelected</td>
           <td>接收用户的选择项</td>
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
      selectShopModel:false,  //弹出商品选择
    }
  },

  methods:{
    receiveSelected(selected) {
      console.log(selected);
      this.selectShopModel = false;
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

