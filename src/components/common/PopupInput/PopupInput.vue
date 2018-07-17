<template>
   <mt-popup
    v-model="isPopupInputShow"
    position="bottom"
    :closeOnClickModal="false"
    >

    <section class="input-type">
      <section class="input-top">
        <div>
          {{popupInputList.title}} 
        </div>
        <section  @click="inputType(index)" v-for="(item,index) in popupInputList.list">{{item.action}}</section>
      </section>

      <section class="input-bottom" @click="inputType(-1)">
         取消
      </section>
    </section>
   </mt-popup>   
</template>
<script>
export default {
  props:{
    isPopupInputShow:{
      type:Boolean,
      default:false,
    },
    popupInputList:{
      title:'选择录入方式',
      list:[
        {
          action:'自动录入',
        },
        {
          action:'手动录入',
        }
      ]
    }
  },
  data() {
    return {
   
    }
  },
  methods:{
    /**
     * [inputType 录入方式选择]
     * @Author   罗文
     * @DateTime 2018-06-06
     * @param    {[Number]}   type [1 - 自动录入  2 - 手动录入  3 - 取消]
     * @return   {[type]}        [description]
     */
    inputType(type) {
      this.$emit('inputType',type);
    }
  },
  watch:{

  }
}

</script>

<style lang="less" scoped>
  .mint-popup {
    background: transparent !important;
  }
  .input-type {
    letter-spacing: 0.03rem;
    width: 7.1rem;
    height: 4.7rem;
    color:#007AFF;
    font-size: 0.32rem;
    text-align: center;

    .input-top {
      margin-bottom: 0.15rem;
      width: 100%;
      height: 3.2rem;
      border-radius: 0.26rem;
      background: #e6e6e6;

      div {
        width: 100%;
        height: 0.88rem;
        line-height: 0.88rem;
        color:#6f7882;
        font-size: 0.26rem;
      }

      section {
        width: 100%;
        height: 1.14rem;
        line-height: 1.14rem;
        box-sizing: border-box;
        border-top: 1px solid #dadade;
      }
    }

    .input-bottom {
      width: 100%;
      height: 1.14rem;
      border-radius: 0.26rem;
      background: white;
      line-height: 1.14rem;
    }
  }
</style>
