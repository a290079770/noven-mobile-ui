<template>
  <div>
     <Header 
     :isBackShow="true" 
     :title="'中部弹出框选择器'"
     :border="true"
     @backClick="$router.push('/demo')"
     />

     

     <section class="section">
       <h2>Select</h2>
       <p>一个中部弹出框选择器</p>
     </section>

   <h4>展示</h4>
   
   <p style="width:94%;margin:0 auto">
    <Select 
    :dataList="dataList" 
    :isSelectShow="isSelectShow" 
    :label="selectLabel"
    @changeVisible="isSelectShow = false"
    @onSelect="onSelect"
    />

    <Button @click="isSelectShow = true;" type="primary" :plain="true" style="width:3rem;height:0.6rem">{{sex}}</Button>
   </p>
   
   <h4>调用实例</h4>
 <pre>

   &lt;<span class="tag-name">Select </span>
    <span class="tag-attr">:dataList</span>=<span class="tag-value">"dataList" </span>
    <span class="tag-attr">:isSelectShow</span>=<span class="tag-value">"isSelectShow" </span>
    <span class="tag-attr">:label</span>=<span class="tag-value">"selectLabel"</span>
    <span class="tag-methods">@changeVisible</span>=<span class="tag-value">"isSelectShow = false"</span>
    <span class="tag-methods">@onSelect</span>=<span class="tag-value">"onSelect"</span>
    /&gt;
   <span class="tag-methods">
   <span class="tag-name">data()</span> {
     return {
       dataList:['男','女'],
       isSelectShow:false,
       selectLabel:'',
       sex:'Select选择性别'
     }
   } </span> 
   <span class="tag-methods">
   <span class="tag-name">methods</span> {
     onSelect(data) {
       this.sex = data;
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
           <td>dataList</td>           
           <td>数据列表</td>           
           <td>Array</td>           
         </tr>
         <tr>
           <td>isSelectShow</td>           
           <td>显示/隐藏选择框</td>           
           <td>Boolean</td>           
         </tr>
         <tr>
           <td>label</td>           
           <td>每条数据渲染给用户看的字段名，如果数组元素是基本类型，则传空字符串</td>           
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
           <td>changeVisible</td>
           <td>关闭选择框</td>
           <td>Function</td>
         </tr>
         <tr>
           <td>onSelect</td>
           <td>用户选择的数据回调</td>
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
      //Select 数据
      dataList:['男','女'],
      isSelectShow:false,
      selectLabel:'',
      sex:'Select选择性别'
    }
  },

  methods:{
    onSelect(data) {
      this.sex = data;
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

