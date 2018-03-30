<template>
  <mt-header fixed :title="headerTitle" :style="border ? borderCSS : {}">
    <mt-button 
      v-show="isBackShow" 
      icon="back" 
      slot="left" 
      @click="backClick"
      >
    </mt-button>

    <mt-button 
        v-if="defaultRightBtnShow" 
        slot="right"
        @click="rightBtnClick($event)"
        :style="{color: !rightTextIsBtn ?'#222' :'#375DFD'}"
      >{{headerRightBtnTitle}}
    </mt-button>


    <mt-button 
        v-if="isIconShow" 
        slot="right"
        @click="rightBtnClick($event)"
      >

      <img 
      :style="icon" 
      :src="icon.src" 
      class="icon-img"
      >

    </mt-button>
  </mt-header>
</template>
<script>
export default {
  props:[
    'title',
    'rightBtnTitle',
    'isBackShow',
    'isRightBtnShow',
    'rightTextIsBtn',
    'border',
    'icon',
    'backImmediateExec'
  ],
  data() {
    return {
      headerTitle:'',
      defaultRightBtnShow:false,
      borderCSS:{
        boxSizing:'border-box',
        borderBottom:'1px solid #e1e1e1'
      },
      isIconShow:false
    }
  },
  methods:{
    backClick() {
      if(this.backImmediateExec) {
         this.$router.go(-1);
      }else {
         this.$emit('backClick');
      }
    },

    rightBtnClick() {
      if(this.rightTextIsBtn || this.icon) this.$emit('rightBtnClick');
    }
  },
  created() {
    this.headerTitle = this.title || '标题';
    this.headerRightBtnTitle = this.rightBtnTitle || '右侧按钮';

    this.defaultRightBtnShow = this.isRightBtnShow;
    
    //如果icon属性传入，则会忽略右侧的其他所有配置，以icon属性为准
    if(this.icon) {
       this.defaultRightBtnShow = false;
       this.isIconShow = true;
    }
  },
  mounted() {
    
  },
  watch:{

  }
}

</script>
<style lang='less'>
   .mint-header {
      height: 0.88rem;
      background: white;
      color:#222222;
      font-size: 0.38rem;


      .mintui-back::before {
        font-size: 0.42rem;
      }

      .is-right {
        font-size: 0.32rem;
      }

      .icon-img {
        width: 100%;
        height: 100%;
      }
   }
</style>
