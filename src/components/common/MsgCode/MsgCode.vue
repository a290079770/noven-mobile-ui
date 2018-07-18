<template>
  <span @click="startInterval" :class="customClass || ''">
     {{typeof this.currentText == 'number' ?currentText + ' s' :currentText}}
  </span>
</template>
<script>
export default {
  props:['text','reloadText','disabled','customClass','refresh'],
  data() {
    return {
       currentText:'',
       timer:null, //定时器
       currentTime:0,
    }
  },
  methods:{
    /**
     * [startInterval 开始倒计时]
     * @Author   罗文
     * @DateTime 2018-03-20
     * @return   {[type]}   [description]
     */
    startInterval() {
       if(this.disabled) return;
       if(this.timer)  return;

       this.currentText = this.currentTime || 60;

       //如果当前为60秒，则需要去请求数据
       if(this.currentText === 60) this.$emit('handleClick')

       this.timer = setInterval(()=>{
          if(this.currentText <= 0 ) {
            clearInterval(this.timer);
            this.currentText = this.reloadText;
            this.timer = null;
          }else {
            this.currentText -- ;
          }
       },1000);
    }
  },
  created() {
    this.currentText = this.text || '获取短信验证码';
  },
  mounted() {
     //处理定时器切换tab被中断的bug
    document.addEventListener("visibilitychange", ()=> {
      if(document.hidden === true) {
          // 页面被挂起,需要清除掉定时器，避免切换回tab时定时器功能迷乱
          if(typeof this.currentText == 'number') { 
            this.currentTime = this.currentText;
          }
          clearInterval(this.timer);
          this.timer = null;
      }else {
         if(typeof this.currentText == 'number') {
           this.startInterval(); 
           this.currentTime = 0;
         } 
      }
    });
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  watch:{
    'refresh':function(nv) {
       this.currentText = this.text || '获取短信验证码';
       clearInterval(this.timer);
       this.timer = null;
    }
  }
}

</script>
<style lang='less' scoped>
   
</style>
