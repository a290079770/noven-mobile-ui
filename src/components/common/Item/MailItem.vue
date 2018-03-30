<template>
  <section class="mail-item" @click="$router.push('/mallDetail')">
     <figure>
       <img :src="data.img">
     </figure>
     <p>{{data.title}}</p>
     <button class="mail-btn">
        分期：{{data.price}}元起
     </button>
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
   .mail-item {
      width: 3.25rem;
      height: 4.65rem;
      background: white;

      figure {
        padding: 0;
        margin: 0;
        width: 3.25rem;
        height: 3.25rem;
        img {
          width: 100%;
          height: 100%;
        }
      }

      p {
        width: 100%;
        height: 0.7rem;
        line-height: 0.7rem;
        color: #666;
        overflow:hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 0.24rem;
      }

      .mail-btn {
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background: url(../../../../static/img/分期底@2x.png);
        background-size: 100% 100%;
        height: 0.42rem;
        width: 2.35rem;
        color:white;
        font-size: 0.2rem;
      }
   }
</style>
