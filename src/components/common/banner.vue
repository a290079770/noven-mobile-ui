<template>
  <div :class="defaultType == 'index' ? 'index-dots' : 'detail-dots'" :style="defaultType == 'index' ? indexCssText : detailCssText">
     <mt-swipe :auto="0" >
        <mt-swipe-item v-for="(item,index) in defaultBannerList" :key="index">
          <a :href="item.url ? item.url : 'javascript:void(0)'">
            <img :src="item.picturePath">
          </a>
        </mt-swipe-item>
     </mt-swipe>
  </div>
</template>
<script>
export default {
  props:['bannerList','type'],
  data() {
    return {
      defaultBannerList:[],
      // type:'index',   //banner类型，index - 首页的  detail - 详情的
      defaultType:'index',
      indexCssText:{
        height:'3.94rem'
      },
      detailCssText:{
        height:'5.3rem',
      },
    }
  },
  created() {
    this.defaultType = this.type ? this.type : 'index';
    this.defaultBannerList = this.bannerList || [];
  },
  mounted() {
  },
  watch:{
    'bannerList':function(nv) {
      this.defaultBannerList = nv || [];
      //根据不同的类型，附加上不同的class
      // this.$nextTick(()=>{
      //   if(this.defaultType == 'index') {
      //     console.log(11);
      //      document.querySelector('.mint-swipe-indicators').className += ' index-dots';
      //      console.log(document.querySelector('.mint-swipe-indicators'));
      //   }else {
      //     console.log(222);
      //      document.querySelector('.mint-swipe-indicators').className += ' detail-dots';

      //      console.log(document.querySelector('.mint-swipe-indicators'));
      //   }
      // })
    }
  }
}

</script>
<style lang='less'>
   .banner {
     width: 100%;

   }

   .mint-swipe-item img {
      width: 100%;
      height: 100%
   }

   .mint-swipe-indicators {
     bottom:0.4rem;
   }

   .mint-swipe-indicator {
    opacity: 1;
    border-radius: 0.08rem !important;
   }

   .index-dots .mint-swipe-indicator {
      margin-right: 0.16rem;
      width: 0.16rem !important;
      height: 0.16rem !important;
      background: #cfcfcf;
      border: none;
   }

   .index-dots .mint-swipe-indicators .is-active {
      width: 0.48rem !important;
      background: white !important;
   }

   .detail-dots .mint-swipe-indicators {
       display: flex;
       justify-content: flex-start;
       align-items: center;
   }

   .detail-dots .mint-swipe-indicator {
      width: 0.16rem !important;
      height: 0.04rem !important;
      background: #aeadad !important;
   }

   .detail-dots .mint-swipe-indicators .is-active {
      width: 0.16rem !important;
      height: 0.16rem !important;
      border-radius: 50% !important;
      background: transparent !important;
      border: 0.04rem solid #aeadad;
   }

</style>
