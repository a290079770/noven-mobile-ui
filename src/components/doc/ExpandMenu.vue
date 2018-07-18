<template>
  <div>
     <Header 
     :isBackShow="true" 
     :title="'展开式菜单'"
     :border="true"
     @backClick="$router.push('/demo')"
     />

     

     <section class="section">
       <h2>ExpandMenu</h2>
       <p>展开式菜单</p>
     </section>

   <h4>展示</h4>

   <!-- 
     ExpandMenu  折叠菜单，多处使用

     expandData - 展开式菜单数据数组
     data - 绑定这个菜单的数据
     @expand - 切换展开与隐藏
     @onExpandItemClick 当item被点击时触发的回调
    -->
   <p class="show-text">默认的折叠内容</p> 
   <ExpandMenu 
   :data="expandData[0]"
   @expand='expand($event,expandData[0],0)'
   @onExpandItemClick="onExpandItemClick"
   />
   
   <p class="show-text">自定义折叠区域内容</p>
   <ExpandMenu 
   :data="expandData[1]"
   @expand='expand($event,expandData[1],1)'
   @onExpandItemClick="onExpandItemClick"
   >
     <p style="margin: 0 auto;width:90%">这里是自定义的折叠内容</p>
   </ExpandMenu>


   <h4>调用实例</h4>
 <pre>

    默认的折叠内容

    &lt;<span class="tag-name">ExpandMenu </span>
    <span class="tag-attr">:data</span>=<span class="tag-value">"expandData[0]"</span>
    <span class="tag-methods">@expand</span>=<span class="tag-value">'expand($event,expandData[0],0)'</span>
    <span class="tag-methods">@onExpandItemClick</span>=<span class="tag-value">"onExpandItemClick"</span>
   /&gt;
   
   <hr>
   
   自定义折叠区域内容

   &lt;<span class="tag-name">ExpandMenu </span>
   <span class="tag-attr">:data</span>=<span class="tag-value">"expandData[1]"</span>
   <span class="tag-methods">@expand</span>=<span class="tag-value">'expand($event,expandData[1],1)'</span>
   <span class="tag-methods">@onExpandItemClick</span>=<span class="tag-value">"onExpandItemClick"</span>
   &gt;
     &lt;<span class="tag-name">p</span>&gt;
     这里是自定义的折叠内容
     &lt;/<span class="tag-name">p</span>&gt;
   &lt;/<span class="tag-name">ExpandMenu</span>&gt;


   <span class="tag-methods">
   <span class="tag-name">data ()</span> {
      return {
        //折叠展开窗的数据
        expandData:[ 
          {
            title:'万家金服',
            number:2,
            numberColor:['#ffd662','#ffb034'],
            logo:'./static/img/img_互联网金融1.png',
            isExpand:false,
            centerList:[
              {key:'待收本金',value:'30,000.00元'},
              {key:'待收利息',value:'188.32元'},
              {key:'预期年化',value:'8.9%',color:'#ff5d60'},
            ],

            children:[
              {
                title:'U享计划A',
                right:'10/12期',
                borderLeftColor:'#ffb719',
                itemList:[
                  {key:'待收本金(元)',value:'8400.00'},
                  {key:'待收利息(元)',value:'5400.06'},
                  {key:'昨日收益(元)',value:'9.5%'},
                  {key:'预期年化',value:'7.8%',color:'#ff5d60'},
                ]
              },

              {
                title:'腾讯科技(00700-HK)',
                right:'',
                borderLeftColor:'#ff593c',
                itemList:[
                  {key:'最新市值(元)',value:'100100.00'},
                  {key:'持仓收益(元)',value:'9.50'},
                  {key:'今日收益',value:'-2.43%(100.00)',color:'#7ed321'},
                ]
              },
            ]
          },
          {
            title:'万咖集',
            number:2,
            numberColor:['#372ab6','#987aec'],
            logo:'./static/img/img_互联网金融1.png',
            isExpand:false
          }  
        ],
      }
   }

   <span class="tag-name">methods</span> {
     expand(e,item,index) {
      item.isExpand = !item.isExpand;   
      this.$set(this.expandData,index,item);
     },

     onExpandItemClick({item,index}) {
        console.log(item);
        console.log(index);
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
           <td>data</td>           
           <td>绑定这个菜单的数据（唯一必须属性Expand）</td>           
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
           <td>expand</td>
           <td>切换展开与隐藏</td>
           <td>Function</td>
         </tr>
         <tr>
           <td>onExpandItemClick</td>
           <td>当item被点击时触发的回调</td>
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
      //折叠展开窗的数据
      expandData:[ 
        {
          title:'万家金服',
          number:2,
          numberColor:['#ffd662','#ffb034'],
          logo:'./static/img/img_互联网金融1.png',
          isExpand:false,
          centerList:[
            {key:'待收本金',value:'30,000.00元'},
            {key:'待收利息',value:'188.32元'},
            {key:'预期年化',value:'8.9%',color:'#ff5d60'},
          ],

          children:[
            {
              title:'U享计划A',
              right:'10/12期',
              borderLeftColor:'#ffb719',
              itemList:[
                {key:'待收本金(元)',value:'8400.00'},
                {key:'待收利息(元)',value:'5400.06'},
                {key:'昨日收益(元)',value:'9.5%'},
                {key:'预期年化',value:'7.8%',color:'#ff5d60'},
              ]
            },

            {
              title:'腾讯科技(00700-HK)',
              right:'',
              borderLeftColor:'#ff593c',
              itemList:[
                {key:'最新市值(元)',value:'100100.00'},
                {key:'持仓收益(元)',value:'9.50'},
                {key:'今日收益',value:'-2.43%(100.00)',color:'#7ed321'},
              ]
            },
          ]
        },
        {
          title:'万咖集',
          number:2,
          numberColor:['#372ab6','#987aec'],
          logo:'./static/img/img_互联网金融1.png',
          isExpand:false
        }  
      ],
    }
  },

  methods:{
    /**
     * [expand 折叠菜单]
     * @Author   罗文
     * @DateTime 2018-06-06
     * @param    {[type]}   e     [description]
     * @param    {[type]}   item  [description]
     * @param    {[type]}   index [description]
     * @return   {[type]}         [description]
     */
    expand(e,item,index) {
      item.isExpand = !item.isExpand;   
      this.$set(this.expandData,index,item);
    },
    

    onExpandItemClick({item,index}) {
        console.log(item);
        console.log(index);
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

