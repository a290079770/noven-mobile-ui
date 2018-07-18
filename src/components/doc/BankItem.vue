<template>
  <div>
     <Header 
     :isBackShow="true" 
     :title="'银行展示组件'"
     :border="true"
     @backClick="$router.push('/demo')"
     />

     

     <section class="section">
       <h2>BankItem</h2>
       <p>根据业务针对不同银行进行样式封装，内置银行见文档下部表格</p>
     </section>

   <h4>展示</h4>

   <BankItem 
   v-for="(item,index) in bankList" 
   :key="'bankItem'+index" 
   :bankData="item"
   @bankClick=""
   />


   <h4>调用实例</h4>
 <pre>

   &lt;<span class="tag-name">BankItem </span>
     <span class="tag-attr">v-for</span>=<span class="tag-value">"(item,index) in bankList" </span>
     <span class="tag-attr">:key</span>=<span class="tag-value">"'bankItem'+index" </span>
     <span class="tag-attr">:bankData</span>=<span class="tag-value">"item"</span>
     <span class="tag-methods">@bankClick</span>=<span class="tag-value">""</span>
   /&gt;

   <span class="tag-methods">
   <span class="tag-name">data ()</span> {
      return {
        bankList:[
          {
            bankName:'中国农业银行',
            bankType:'储蓄卡',
            bankNumber:'**** **** ***0 618'
          },
          {
            bankName:'中国工商银行',
            bankType:'储蓄卡',
            bankNumber:'**** **** ***0 920'
          },{
            bankName:'平安银行',
            bankType:'储蓄卡',
            bankNumber:'**** **** ***0 618'
          }
        ]
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
           <td>bankData</td>           
           <td>每一条银行卡的数据对象，至少要包含（bankName，bankType，bankNumber三个字段）</td>           
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
           <td>bankClick</td>
           <td>点击事件</td>
           <td>Function</td>
         </tr>
       </tbody>
     </table>

     <h4>内置银行列表</h4>

     <table class="section-table">
       <thead>
         <tr>
           <th>logo</th>
           <th>名称</th>
           <th>色系</th>
         </tr>
       </thead>
       <tbody>
         <tr v-for="item in recontBankList">
           <td style="line-height: 0">
             <img style="width:0.4rem;height:0.4rem" :src="item.bankLogo">
           </td>
           <td>{{item.bankname}}</td>
           <td>{{item.class == 'red' ? '红':(item.class == 'yellow' ? '黄':'绿')}}</td>
         </tr>
       </tbody>
     </table>
  </div>
</template>
<script>
import bankList from '../../assets/js/bankList.js';
export default {
  data () {
    return {
      bankList:[
        {
          bankName:'中国农业银行',
          bankType:'储蓄卡',
          bankNumber:'**** **** ***0 618'
        },
        {
          bankName:'中国工商银行',
          bankType:'储蓄卡',
          bankNumber:'**** **** ***0 920'
        },{
          bankName:'平安银行',
          bankType:'储蓄卡',
          bankNumber:'**** **** ***0 618'
        }
      ],

      recontBankList:[]
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
    this.recontBankList = bankList.slice(0);
  }
}
</script>

<style lang="less">

</style>

