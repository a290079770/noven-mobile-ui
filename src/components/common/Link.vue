<template>
  <!-- 外链页面 -->
  <div class="wrap whitebg" style="height:100%">
    <Header 
     :isBackShow="true"   
     :isRightBtnShow="false"
     :title="title"
     :border="true"
     :backImmediateExec="true"
     />


     <iframe 
    :src="$route.query.url" 
    frameborder="0" 
    width="100%" 
    height="100%" 
    style="margin-top:0.88rem" 
    align="middle" 
    ></iframe>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title:this.$route.query.title,
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
 
</style>
