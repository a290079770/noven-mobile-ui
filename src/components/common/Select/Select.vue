<template>
  <mt-popup
    v-model="selectShowDefault"
    popup-transition="popup-fade"
    >
    <section class="choice-section">
       <p>请选择</p>
       <ul>
         <li v-for="(item,index) in dataList" @click="selectCycle(item,index)">{{label === '' ? item : item[label]}}</li>
       </ul>
    </section>
  </mt-popup>
</template>
<script>
export default {
  props:{
    dataList:{type:Array,default:[]},
    isSelectShow:{type:Boolean,default:false},
    label:{defalut:''}
  },
  data() {
    return {
      selectShowDefault:false,
    }
  },
  methods:{
    selectCycle(item,index) {
      this.$emit('onSelect',item);
      this.selectShowDefault = false;
    }
  },
  watch:{
    isSelectShow:function(nv) {
      this.selectShowDefault = nv;
    },

    selectShowDefault:function(nv) {
      if(!nv) this.$emit('changeVisible');
    }
  }
}

</script>

<style lang="less">
.mint-popup {
  background: transparent !important;
} 

.mint-popup-bottom {
  background: white !important;
}

.choice-section {
   width:6rem;
   height: auto;
   min-height: 1rem;
   max-height: 10rem;
   overflow: auto;
   background: white;
   border-radius: .2rem;
   
   p,li {
     text-align: center;
     height: 1rem;
     line-height: 1rem;
   }   

   p {
    font-weight: 600;
    font-size: 0.4rem;
   }

   li {
    border-top: 1px solid #ccc;
   }      
}


.mint-tab-item-label {
  font-size: 0.3rem !important;
}
</style>
