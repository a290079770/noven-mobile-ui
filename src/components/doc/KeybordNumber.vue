<template>
  <div>
     <Header 
     :isBackShow="true" 
     :title="'数字键盘'"
     :border="true"
     @backClick="$router.push('/demo')"
     />

     

     <section class="section">
       <h2>KeybordNumber</h2>
       <p>数字键盘</p>
     </section>

   <h4>展示</h4>
   <p class="show-text">
    <Button @click="showKeybord = true" type="primary" :plain="true" style="width:1.8rem;height:0.6rem">显示组件</Button>
    <span style="margin-left: 0.3rem">
      {{num}}
    </span>
   </p>

   <KeybordNumber :showKeybord="showKeybord" @input="onInput" @close="showKeybord = false"/>


   <h4>调用实例</h4>
   <pre>

     &lt;
     <span class="tag-name">KeybordNumber</span> 
     <span class="tag-attr">:showKeybord</span>=<span class="tag-value">"showKeybord"</span>
     <span class="tag-methods">@input</span>=<span class="tag-value">"onInput"</span>
     <span class="tag-methods">@close</span>=<span class="tag-value">"showKeybord = false"</span>
     /&gt;

     <span class="tag-methods">
     <span class="tag-name">data()</span> {
       return {
          showKeybord: false
        }
     } 
     </span> 
     <span class="tag-name">methods</span> {
      onInput(num) {
        console.log(num)
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
           <td>showKeybord</td>           
           <td>是否显示键盘，尽量用该状态控制</td>           
           <td>Boolean</td>           
         </tr>

         <tr>
           <td>isShowDot</td>           
           <td>是否显示小数点</td>           
           <td>Boolean</td>           
         </tr>
         <tr>
           <td>isShowModal</td>           
           <td>是否显示蒙层，点击蒙层可以关闭</td>           
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
           <td>input</td>
           <td>输入过程中的回调（参数为点击的数字）</td>
           <td>Function</td>
         </tr>
         <tr>
           <td>close</td>
           <td>键盘关闭的回调</td>
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
      showKeybord: false,
      num: ''
    }
  },

  methods:{
    onInput(num) {
      if(num === -1) {
        this.num = this.num.split('');
        this.num.pop();
        this.num = this.num.join('')
        return
      }

      this.num += num
    },
  },
  created() {
    
  },
  mounted(){

  },
  watch: {
    showKeybord(nv) {
      console.log(nv)
    }
  }
}
</script>


