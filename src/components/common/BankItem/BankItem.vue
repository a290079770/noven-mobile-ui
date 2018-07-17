<template>
   <section class="bank-item" @click="$emit('bankClick')">
     <section class="bank-item-content" :style="{background:'linear-gradient(to right,'+ bankDataCombine.startColor +','+ bankDataCombine.endColor +')'}"></section>

     <section class="bank-item-content">
       <section class="bank-item-content-top">
          <figure>
            <img :src="bankDataCombine.bankLogo">
          </figure>
          <div>
            <p>{{bankData.bankName}}</p>
            <p>{{bankData.bankType}}</p>
          </div>
       </section>

       <section class="bank-item-content-bottom">
          {{bankData.bankNumber}}
       </section>
     </section>
   </section>  
</template>
<script>
import bankList from '../../../assets/js/bankList.js';
export default {
  props:{
    bankData:{
      type:Object,
      default:{
        bankName:'中国农业银行',
        bankType:'储蓄卡',
        bankNumber:'**** **** ***0 618'
      },
    },
  },
  data() {
    return {
      bankDataCombine:{}
    }
  },
  methods:{
    
  },
  created() {
    for(let i = 0 ; i < bankList.length ; i ++) {
      if(this.bankData.bankName == bankList[i].bankname) {
         this.bankDataCombine = Object.assign({},this.bankData,bankList[i]);
         break;
      }
    }
  }
}

</script>

<style lang="less" scoped>
  .bank-item {
    position: relative;
    margin-top: 0.15rem;
    width: 100%;
    height: 2.6rem;

    .bank-item-content {
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left:-3.35rem;
      margin-top:-1.3rem;
      width: 6.7rem;
      height: 2.6rem;
      border-radius: 0.08rem;
      color:white;
      background: url(../../../../static/img/04-06-02-00banklogo.png);
      background-size: cover;

      .bank-item-content-top {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 0 auto;
        width: 5.7rem;
        height: 1.6rem;

        figure {
          margin-right: 0.15rem;
          width: 0.74rem;
          height: 0.74rem;
        }

        p:nth-of-type(1) {
          margin-bottom: 0.1rem;
          font-size: 0.32rem;
        }

        p:nth-of-type(2) {
          font-size: 0.24rem;
        }
      }


      .bank-item-content-bottom {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        width: 5.7rem;
        height: 0.74rem;
        font-size: 0.4rem;
        letter-spacing: 0.03rem
      }
    }
  }
</style>
