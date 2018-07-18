<template>
  <div>
     <Header 
     :isBackShow="true" 
     :title="'下部弹出式选择框'"
     :border="true"
     @backClick="$router.push('/demo')"
     />

     

     <section class="section">
       <h2>PopupInput</h2>
       <p>下部弹出式选择框，该弹出框是基于mint-ui的popup组件的封装，常规用法请见mint-ui文档</p>
     </section>

   <h4>展示</h4>
   
   <p style="width:94%;margin: auto">
     <!-- 
      PopupInput - 弹出框选择录入方式
      :isPopupInputShow  - 显示/隐藏  默认false
      :popupInputList  - 该弹出框选择的数据
      @close  - 关闭菜单
      -->
     <PopupInput
      :headerText="'选择性别'"
      :isPopupInputShow="isPopupInputShow"
      :popupInputList="popupInputList"
      @inputType="inputType"
      @close="isPopupInputShow = false"
     />

     <Button @click="isPopupInputShow = true" type="primary" :plain="true" style="width:1.6rem;height:0.6rem">点击打开</Button>
   </p>


   <h4>调用实例</h4>
 <pre>

    &lt;PopupInput
      <span class="tag-name">:headerText</span>=<span class="tag-value">"'选择性别'"</span>
      <span class="tag-name">:isPopupInputShow</span>=<span class="tag-value">"isPopupInputShow"</span>
      <span class="tag-name">:popupInputList</span>=<span class="tag-value">"popupInputList"</span>
      <span class="tag-methods">@inputType</span>=<span class="tag-value">"inputType"</span>
      <span class="tag-methods">@close</span>=<span class="tag-value">"isPopupInputShow = false"</span>
     /&gt;
    <span class="tag-methods">
    <span class="tag-name">data ()</span> {
        return {
          isPopupInputShow:false,
          popupInputList:[
            {
              title:'男',
            },
            {
              title:'女',
            },
            {
              title:'保密',
            },
          ]
        }
     }  

    <span class="tag-name">methods</span> {
      inputType(type) {
        console.log(type);
        this.isPopupInputShow = false;
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
           <td>headerText</td>           
           <td>头部显示的文本</td>           
           <td>String</td>           
         </tr>
         <tr>
           <td>isPopupInputShow</td>           
           <td>显示/隐藏</td>           
           <td>Boolean</td>           
         </tr>
         <tr>
           <td>popupInputList</td>           
           <td>该弹出框选择的数据</td>           
           <td>Array</td>           
         </tr>
         <tr>
           <td>label</td>           
           <td>界面展示对应的字段（默认title）</td>           
           <td>String</td>           
         </tr>
         <tr>
           <td>customClass</td>           
           <td>自定义样式类名</td>           
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
           <td>inputType</td>
           <td>每次选择的回调</td>
           <td>Function</td>
         </tr>
         <tr>
           <td>close</td>
           <td>关闭菜单</td>
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
      isPopupInputShow:false,

      popupInputList:[
        {
          title:'男',
        },
        {
          title:'女',
        },
        {
          title:'保密',
        },
      ]
    }
  },

  methods:{
    /**
     * [inputType 录入方式选择]
     * @Author   罗文
     * @DateTime 2018-06-06
     * @param    {[Number]}   type [选择的那一项]
     * @return   {[type]}        [description]
     */
    inputType(type) {
      console.log(type);

      this.isPopupInputShow = false;
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

