<template>
   <input 
   :type="type && ['text','number','password'].indexOf(type) !== -1 ? type : 'text'"  
   :placeholder="placeholder ? placeholder:'请输入...'"
   :maxlength="maxLength ? maxLength : ''"
   @input="inputText($event)"
   v-model="input"
   >
</template>
<script>
export default {
  props:['type','placeholder','maxLength','forbid','value'],
  data() {
    return {
      input:this.value || '',
    }
  },
  methods:{
    inputText(e) {
      if(this.forbid && this.forbid instanceof Array && this.forbid.length > 0) {
         //这里面处理用户的非法输入
         //处理中文
         if(this.forbid.indexOf('chinese') !== -1 ) {
            if(/[\u4E00-\u9FA5]/gi.test(e.target.value)) {
              e.preventDefault();
              e.target.value = e.target.value.replace(/[\u4E00-\u9FA5]/gi,'');
              this.input = e.target.value;
            }
         }


         //处理非法字符
         if(this.forbid.indexOf('spechars') !== -1 ) {
            if(/[^A-z0-9]/gi.test(e.target.value)) {
              e.preventDefault();
              e.target.value = e.target.value.replace(/[^A-z0-9]/gi,'');
              this.input = e.target.value;
            }
         }
      }


      //处理类型为number时maxlength不生效的bug
      if(this.type === 'number' && this.maxLength) {
         if(e.target.value.length > this.maxLength) {
          e.preventDefault();
          e.target.value = e.target.value.slice(0,this.maxLength);
          this.input = e.target.value;
         }
      }

      
      //返回给父组件
      this.$emit('input',this.input);

    }
  },
  created() {
  },
  mounted() {
  },
  watch:{
    'value':function(val) {
       this.input = val;
    }
  }
}

</script>
<style lang='less'>

</style>
