<template>
  <section class="recommend-item" @click="$router.push('/mallDetail')">
     <figure>
       <img :src="data.img">
     </figure>
     <p>{{data.title}}</p>

     <section class="recommend-price">
        ¥ <span>{{data.price}} </span>元起
     </section>
  </section>
</template>
<script>
export default {
  props:['data'],
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

   .recommend-item {
      width: 3.63rem;
      height: 5.1rem;
      background: white;
      color: #666;
      font-size: 0.24rem;

      figure {
        padding: 0;
        margin: 0;
        width: 3.63rem;
        height: 3.63rem;
        img {
          width: 100%;
          height: 100%;
        }
      }

      p {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        margin:0 auto;
        width: 3.47rem;
        height: 0.74rem;
        line-height: 0.37rem;
        
      }

      .recommend-price {
         margin: 0.05rem auto;
         width: 3.42rem;
         height: 0.5rem;
         line-height: 0.5rem;
         span {
           font-size: 0.3rem;
           color:#ff5349
         }
      }
   }
</style>
