<template>
  <section class="wj-scroll-item" @click="$router.push('/mallDetail')" :style="{height:height}">
     <figure class="wj-scroll-item-img" :style="{width:width,height:imgHeight,marginTop:'0.4rem'}">
        <img :src="data.img">
     </figure>
     <div v-show="data.hasAmortizeNumber">
       <p>{{data.title}}</p>
       <section class="no-amortize-number" >
         <button>分期：{{data.price}}元起</button>
       </section>

       <section class="has-amortize-number">
         <button> 
            <span class="amortize-number">12期</span>
            <span class="amortize-price">{{data.price}}元/期</span>
        </button>
       </section>
     </div>
  </section>
</template>
<script>
export default {
  props:['data','height','width','imgHeight'],
  data() {
    return {

    }
  },
  created() {
  },
  mounted() {
    
  },
  watch:{

  }
}

</script>
<style lang='less'>
   .wj-scroll-item {
      width: 100%;
      height: 100%;

      .wj-scroll-item-img {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 2.2rem;
        img {
          width: 100%;
          height: 100%;
        }
      }

      p {
        height: 0.54rem;
        width: 100%;
        font-size: 0.24rem;
        line-height: 0.54rem;
        color: #666;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow:hidden;
      }

      & > .no-amortize-number {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 0.68rem;
        button {
          width: 1.94rem;
          height: 0.42rem;
          font-size: 0.24rem;
          color: white;
          text-align: center;
          line-height: 0.44rem;
          background: url(/static/img/分期底@2x.png);
          background-size: 100% 100%
        }
      }


      & > .has-amortize-number {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 0.68rem;
        button {
          position: relative;
          width: 100%;
          height: 0.42rem;
          font-size: 0.24rem;
          color: white;
          text-align: center;
          line-height: 0.42rem;
          background: url(/static/img/分期底@2x.png);
          background-size: 100% 100%;
          .amortize-number {
             position: absolute;
             left: 0.03rem;
             top: 0.02rem;
             width: 0.64rem;
             height: 0.38rem;
             color:#5e7dfe;
             background: white;
             text-align: center;
             line-height: 0.4rem;
             border-radius: 0.14rem 0 0 0.14rem;
          }

          .amortize-price {
             padding-left: 0.64rem;
             white-space: nowrap;
          }
          
        }
      }
   }

</style>
