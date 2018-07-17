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

</style>
