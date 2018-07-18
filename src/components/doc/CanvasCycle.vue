<template>
  <div>
     <Header 
     :isBackShow="true" 
     :title="'比例环形图'"
     :border="true"
     @backClick="$router.push('/demo')"
     />

     

     <section class="section">
       <h2>CanvasCycle</h2>
       <p>比例环形图，基于canvas实现的带渐变色和比例的环形图</p>
     </section>

   <h4>展示</h4>

   <CanvasCycle :canvasData="canvasData"/>

   <h4>调用实例</h4>
 <pre>

   &lt;<span class="tag-name">CanvasCycle </span>
    <span class="tag-attr">:canvasData</span>=<span class="tag-value">"canvasData"</span>
   /&gt;
   <span class="tag-methods">
   <span class="tag-name">data()</span> {
     return {
       canvasData:[
         {
          num:3,
          start:'#ADC7FF',
          end:'#75A1FE'
         },

         {
          num:2,
          start:'#C3AAFF',
          end:'#9071FF'
         },

         {
          num:1,
          start:'#25EADD',
          end:'#10D0B8'
         },

         {
          num:2,
          start:'#FFDC36',
          end:'#FFC033'
         },

         {
          num:1,
          start:'#FF9699',
          end:'#FF5D60'
         },
       ],
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
           <td>canvasData</td>           
           <td>绘制环形图的数据</td>           
           <td>Array</td>           
         </tr>

         <tr>
           <td>num</td>           
           <td>当前数据</td>           
           <td>Number</td>           
         </tr>

         <tr>
           <td>start</td>           
           <td>渐变色开始色</td>           
           <td>String</td>           
         </tr>

         <tr>
           <td>end</td>           
           <td>渐变色结束色</td>           
           <td>String</td>           
         </tr>

       </tbody>
     </table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      canvasData:[
        {
          num:3,
          start:'#ADC7FF',
          end:'#75A1FE'
        },

        {
          num:2,
          start:'#C3AAFF',
          end:'#9071FF'
        },

        {
          num:1,
          start:'#25EADD',
          end:'#10D0B8'
        },

        {
          num:2,
          start:'#FFDC36',
          end:'#FFC033'
        },

        {
          num:1,
          start:'#FF9699',
          end:'#FF5D60'
        },
      ],
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

