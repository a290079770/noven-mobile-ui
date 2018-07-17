<template>
  <section class="top-bg-img"  :style="{height:height,width:width}">
    <section class="top-bg-img-place" :style="{background: '-webkit-linear-gradient('+ direction +', ' + bgColorStart +', '+ bgColorEnd +')'}"></section>
    <section class="top-bg-img-content" :style="{background:'url('+ bgImg +')',backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat'}">
       <slot/>
    </section> 
  </section>
</template>
<script>
export default {
  props:{
    height:{type:String,default:'4.5rem'},
    width:{type:String,default:'100%'},
    bgImg:{type:String,default:''},
    bgColorStart:{type:String,default:'#629CFA'},
    bgColorEnd:{type:String,default:'#3D6DE7'},
    direction:{type:String,default:'top'}
  },
  data() {
    return {

    }
  },
  methods:{

  },
  mounted() {

  }
}

</script>

<style  lang="less" scoped>  
  .top-bg-img {
     position: relative;
     margin:0 auto;

     .top-bg-img-place {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
     }

     .top-bg-img-content {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
     }
  }
</style>
