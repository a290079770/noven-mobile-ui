<template>
   <section class="invest-recommend" @click="$emit('click')">
     <section class="invest-recommend-content">
       <section class="invest-recmd-cont-top">
        {{InvestData.a}}
       </section>
       <section class="invest-recmd-cont-bottom">
         <div>
           <div>
             <span>{{InvestData.b}}</span>%
             <span v-if="InvestData.c">+{{InvestData.c}}</span>
           </div>
           <p>{{InvestData.d}}</p>
         </div>
         <div>
           <div>{{InvestData.e}}</div>
           <p>{{InvestData.f}}</p>
         </div>
       </section>
     </section>
   </section>  
</template>
<script>
export default {
  props:{
    InvestData:{
      type:Object,
      default:{
        a:'新手专享推荐',
        b:'9.20',
        c:'200元',
        d:'年化收益率+奖励',
        e:'复购率最高的产品',
        f:'100元起投 | 低风险'
      },
    },
  },
  data() {
    return {
   
    }
  },
  methods:{

  },

}

</script>

<style lang="less" scoped>
  .invest-recommend {
    width: 100%;
    height: 2.28rem;
    background: white;
    
    .invest-recommend-content {
      margin: 0 auto;
      width: 6.68rem;
      height: 100%;
      box-sizing: border-box;
      border-bottom: .01rem solid #f8fafe;

      .invest-recmd-cont-top {
        height: 1rem;
        line-height: 1rem;
        width: 100%;
        font-size: 0.28rem;
        color:#202e3f;
      }

      .invest-recmd-cont-bottom {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 0.9rem;
        width: 100%;
        & > div {
          height: 100%;

          div {

          }

          p {
            font-size: 0.24rem;
            color:#a6abb2;
          }
        }

        & > div:nth-of-type(1) {
          width: 40%;
          div {
            margin-bottom: 0.1rem;
            color:#FF5D60;
            font-size: 0.32rem;
            span:nth-of-type(1) {
              font-size: 0.48rem;
              line-height: 0.48rem;
            }
          }
        }

        & > div:nth-of-type(2) {
          width: 60%;
          div {
            margin-top: 0.1rem;
            margin-bottom: 0.1rem;
            color:#202E3F;
            font-size: 0.32rem;
          }
        }
      }
    }
  }
</style>
