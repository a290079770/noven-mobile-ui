<template>
  <!-- 选择商品弹出框 -->
 <mt-popup
      v-model="selectShopModel"
      position="bottom"
      :closeOnClickModal="false"
      >
    <div class="select-shop-model">
      <div class="shop-model-title">
        <p>请选择商品属性</p>
        <span class="close fr" @click="submitSelected">
          <img :src="'./static/img/ic-close@2x.png'" alt="">
        </span>
      </div>

      <section class="selected-commodity">
         <p>&nbsp;</p>

         <section>
            <figure>
              <img :src="'./static/img/detail-commodity.png'">
            </figure>

            <section class="selected-commo-info">
               <h2>iPhone X 8G 256G</h2>
               <p>{{selectedStr}}</p>
               <p><span>¥5399.05</span></p>
            </section>
         </section>
      </section>


      <section class="select-radios">
         <table >
           <tbody>
             <tr v-for="(item,index) in selectList">
               <td class="select-radios-left">
                 {{item.title}}
               </td>
               <td class="select-radios-right">
                  <ul>
                    <li 
                    v-for="(citem,cindex) in item.dataList" 
                    :class="{'select-active':citem.isSelected}"
                    @click="changeSelected(index,citem,cindex)"
                    >
                       {{citem.title}}
                    </li>
                  </ul>
               </td>
             </tr>

             <tr>
               <td class="select-radios-left" style="width:1.6rem">
                  商品数量：
               </td>
               <td class="select-number-oparate">
                 <button @click="changeCommNumber(-1)">-</button>
                 <input type="number" readonly="readonly" v-model="commNumber">
                 <button @click="changeCommNumber(1)">+</button>
               </td>
             </tr>
           </tbody>
         </table>
      </section>

      <section class="select-confirm-btn-placehold">
        
      </section>

      <section class="select-confirm-btn">
        <div class="wj-btn-primary commodity-padding">
          <button :style="{background: 'url(' + './static/img/ic_button@2x.png'+') no-repeat'}" type="button" @click="submitSelected">提交订单</button>
        </div>
      </section>
    </div>
 </mt-popup>
</template>
<script>
export default {
  props:['selectShopModel'],
  data() {
    return {
       commNumber:1, //商品数量
       selectedStr:'',  //已选中的字符串
       selectList:[   //商品数据
         {
          title:'颜色',
          dataList:[
             {
              title:'银色',
              isSelected:true,
             },
             {
              title:'红色',
              isSelected:false,
             },
             {
              title:'深空灰',
              isSelected:false,
             },
           ],
         },

         {
          title:'版本',
          dataList:[
             {
              title:'公开版',
              isSelected:true,
             },
             {
              title:'保险套餐版',
              isSelected:false,
             },
           ],
         },

         {
          title:'内存',
          dataList:[
             {
              title:'64G',
              isSelected:true,
             },
             {
              title:'128G',
              isSelected:false,
             },
             {
              title:'256G',
              isSelected:false,
             },
           ],
         },
       ],
    }
  },
  methods:{
    /**
     * [changeSelected 更改选中项]
     * @Author   罗文
     * @DateTime 2018-03-21
     * @param    {[Number]}   pindex [当前操作的是哪一项]
     * @param    {[Object]}   item   [当前操作的哪个data]
     * @param    {[Number]}   index  [当前操作的哪个data的Index]
     * @return   {[type]}          [description]
     */
    changeSelected(pindex,item,index) {
       if(!item.isSelected) {
          //需要重置当前的所有选中，并选上点击的这项
          this.selectList[pindex].dataList = this.selectList[pindex].dataList.map((citem)=>{ 
             citem.isSelected = false;
             return citem;
          })

          item.isSelected = true;

          //这里要更新已选中的字符串
          let arr = this.selectedStr.split('，');
          arr[pindex] = item.title;
          this.selectedStr = arr.join('，');

          //更新选中数组
          this.$set(this.selectList[pindex].dataList,index,item);
       }
    },
    /**
     * [changeCommNumber 改变商品数量]
     * @Author   罗文
     * @DateTime 2018-03-21
     * @param    {[Number]}   type [-1 减一个  1 加一个]
     * @return   {[type]}        [description]
     */
    changeCommNumber(type) {
       if(type === -1) {
         //验证不能为0/负
         if(this.commNumber <= 1) {
           this.commNumber = 1;
         }else {
           this.commNumber --;
         }

       }else if(type === 1) {
         if(this.commNumber >= 99) {
           this.commNumber == 99;
         }else {
           this.commNumber ++;
         } 
       }
    },
    
    /**
     * [submitSelected 提交选中的商品信息，并关闭弹出框]
     * @Author   罗文
     * @DateTime 2018-03-21
     * @return   {[type]}   [description]
     */
    submitSelected() {
       this.$emit('submitSelected','数量'+ this.commNumber + '，'+ this.selectedStr);
    }
  },
  created() {
    //一打开时渲染已选中的数据
    this.selectList.forEach((item,index)=>{
       item.dataList.forEach((citem,cindex)=>{
          if(citem.isSelected) this.selectedStr +=  citem.title + '，'
       })
    })
    this.selectedStr  = this.selectedStr.slice(0,-1);
  },
  mounted() {
 
  },
}

</script>
<style lang='less'>
   .select-shop-model {
      position: relative;
   }
   .selected-commodity {
     figure {
        padding: 0;
        margin: 0;
      }

      img {
        width: 100%;
        height: 100%;
      }
     height: 2.62rem;
     width: 100%;
     & > p {
      height: 0;
      line-height: 0
     }

     & > section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0.19rem auto;
        width: 7.12rem;
        height: 2rem;

        figure {
          margin-right: 0.19rem;
          width: 2rem;
          height: 2rem;
        }

        .selected-commo-info {
           width: 5.4rem;
           height: 100%;

           h2,p {
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
           }

           h2 {
             margin-top: 0.26rem;
             font-weight: normal;
             color:black;
             font-size: 0.3rem;
           }

           p {
             color:#888;
             font-size: 0.26rem;
             line-height: 0.6rem;
           }

           span {
            font-size: 0.3rem;
            color:#FE4004;
           }
        }
     }
   }


   .select-radios {
      width: 100%;
      height: auto;
      min-height: 3rem;
      max-height: 4rem;
      overflow-y: auto;
      border-bottom: 1px solid #ccc;
      color:#222;
      
      table {
        margin: 0 auto;
        width: 7rem;
        height: auto;
        min-height: 1rem;

        .select-radios-left {
          width: 1.5rem;
          font-size: 0.3rem;
          color: #aeaead;
        }

        .select-radios-right {
          width: 5.5rem;
          ul {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-wrap: wrap;
            width: 100%;
            height: 100%;

            li {
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 0.2rem 0 0.2rem 0;
              margin-right: 0.2rem;
              width: 1.8rem;
              height: 0.6rem;
              border-radius: 0.3rem;
              box-sizing: border-box;
              border: 0.02rem solid #aeaead;
            }


            .select-active {
              border: 0.02rem solid #5C57FE;
              color:#5C57FE;
            }
          }
          
        }


        .select-number-oparate {
           button {
            float: left;
            margin: 0.2rem 0 ;
            padding: 0;
            width: .56rem;
            height: 0.6rem;
            border: 0.02rem solid #aeaead;
            font-size: 0.5rem;

            &:nth-of-type(1) {
               border-radius: 0.3rem 0 0 0.3rem;
               border-right: none;
            }

            &:nth-of-type(2) {
               border-radius: 0 0.3rem 0.3rem 0;
               border-left: none;
            }
           }

           input {
            float: left;
            margin: 0.2rem 0 ;
            width: 0.8rem;
            height: 0.6rem;
            border: 0.02rem solid #aeaead;
            box-sizing: border-box;
            text-align: center;
           }
        }
      }
   }

   .select-confirm-btn-placehold {
      width: 100%;
      height: 0.2rem;
   }


   .select-confirm-btn {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1.28rem;
   }
   .commodity-padding {
      padding-top: 0;
      margin-top: -0.1rem;
   }

</style>
