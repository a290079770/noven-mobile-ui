<template>
  <div class="wj-scroll" :style="{height:height}">
     <ul :style="{width:scrollList.length * 2.4 +'rem'}">
       <li 
       class="scroll-item-content"
       v-for="(item,index) in scrollList"
       :style="{width:width}">
         <ScrollItem :data="item" :height="height" :width="width" :imgHeight="imgHeight"/>
       </li>
     </ul>
  </div>
</template>
<script>
import ScrollItem from './ScrollItem.vue';
export default {
  props:['scrollList','height','width','imgHeight'],
  components:{
    ScrollItem
  },
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
   .wj-scroll {
      height: 3.4rem;
      width: 100%;
      overflow: hidden;
      overflow-x: scroll;
      background: white;
      & > ul {
         display: flex;
         justify-content: flex-start;
         align-items: center;
         height: 100%;
         margin-left: 0.16rem;
      }

      .scroll-item-content {
         margin-left: 0.16rem;
         width: 2.2rem;
         height: 100%;
      }
   }

</style>
