<template>
  <div>
     <Header 
     :isBackShow="true" 
     :isRightBtnShow="true"
     bgColor="white"
     color="black"
     :title="'这是一个文档头部'"
     :rightBtnTitle="'查看订单'"
     :rightTextIsBtn="true"
     :border="true"
     :icon="icon"
     @backClick="$router.push('/demo')" 
     @rightBtnClick="rightBtnClick"
     />

     

     <section class="section">
       <h2>Header</h2>
       <p>头部导航，支持自定义右侧按钮、背景色、字体色、左右侧按钮事件等</p>
     </section>

	 <h4>展示</h4>
 	 <p class="show-text">见页面顶部</p>

 	 <h4>调用实例</h4>
 <pre>
   &lt;<span class="tag-name">Header</span> 
     <span class="tag-attr">:isBackShow</span>=<span class="tag-value">"true"</span> 
     <span class="tag-attr">:backImmediateExec</span>=<span class="tag-value">"true"</span>
     <span class="tag-attr">:isRightBtnShow</span>=<span class="tag-value">"true"</span>
    <span class="tag-attr"> bgColor</span>=<span class="tag-value">"white"</span>
    <span class="tag-attr"> color</span>=<span class="tag-value">"black"</span>
     <span class="tag-attr">:title</span>=<span class="tag-value">"'这是一个文档头部'"</span>
     <span class="tag-attr">:rightBtnTitle</span>=<span class="tag-value">"'查看订单'"</span>
     <span class="tag-attr">:rightTextIsBtn</span>=<span class="tag-value">"true"</span>
     <span class="tag-attr">:border</span>=<span class="tag-value">"true"</span>
     <span class="tag-attr">:icon</span>=<span class="tag-value">"icon"</span>
     <span class="tag-methods">@backClick</span>=<span class="tag-value">"backClick" </span>
     <span class="tag-methods">@rightBtnClick</span>=<span class="tag-value">"rightBtnClick"</span>
     /&gt;

     <span class="tag-methods">
  <span class="tag-name">data ()</span> {
   return {
    //头部右侧icon配置
    icon:{
     width:'0.4rem',
     height: '0.45rem',
     src:'./static/img/recommendItem.png'
    },
   }
  }
  <span class="tag-name">methods</span> {
   backClick() {
     console.log('back');
   },
   rightBtnClick() {
     console.log('right');
   },
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
           <td>isBackShow</td>
           <td>是否显示返回按钮</td>
           <td>Boolean</td>
         </tr>

         <tr>
           <td>backImmediateExec</td>
           <td>点击返回按钮直接返回上一页，不会执行backClick的回调</td>
           <td>Boolean</td>
         </tr>

         <tr>
           <td>isRightBtnShow</td>
           <td>是否显示右侧按钮</td>
           <td>Boolean</td>
         </tr>

         <tr>
           <td>title</td>
           <td>顶部标题</td>
           <td>String</td>
         </tr>

         <tr>
           <td>bgColor</td>
           <td>背景色</td>
           <td>String</td>
         </tr>

         <tr>
           <td>color</td>
           <td>字体色</td>
           <td>String</td>
         </tr>

         <tr>
           <td>rightTextIsBtn</td>
           <td>右侧是否是按钮，如果是按钮就需要回调函数</td>
           <td>Boolean</td>
         </tr>

         <tr>
           <td>rightBtnTitle</td>
           <td>右侧按钮的文字</td>
           <td>String</td>
         </tr>

         <tr>
           <td>border</td>
           <td>决定显示下边框</td>
           <td>Boolean</td>
         </tr>

         <tr>
           <td>icon</td>
           <td>右侧展示一个icon，配置见例，如果配置了icon，则rightBtnTitle无效</td>
           <td>Object</td>
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
           <td>backClick</td>
           <td>点击返回按钮的回调函数</td>
           <td>Function</td>
         </tr>

         <tr>
           <td>rightBtnClick</td>
           <td>点击右侧按钮的回调函数</td>
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
   
</style>

